# scrapy-redis 源码解读

## 目录

![在这里插入图片描述](https://img-blog.csdnimg.cn/20191001120719218.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)

## init.py

![在这里插入图片描述](https://img-blog.csdnimg.cn/20191001120741290.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)
从 connect.py import 了 get_redis,get_redis_from_settings，这样可以在导入 scrapy_redis 时自动导入这两个方法，还有作者，email 和版本

## connection.py

```python
mport six

from scrapy.utils.misc import load_object

from . import defaults


# Shortcut maps 'setting name' -> 'parmater name'.
SETTINGS_PARAMS_MAP = {
    'REDIS_URL': 'url',
    'REDIS_HOST': 'host',
    'REDIS_PORT': 'port',
    'REDIS_ENCODING': 'encoding',
}


def get_redis_from_settings(settings):
    """Returns a redis client instance from given Scrapy settings object.

    This function uses ``get_client`` to instantiate the client and uses
    ``defaults.REDIS_PARAMS`` global as defaults values for the parameters. You
    can override them using the ``REDIS_PARAMS`` setting.

    Parameters
    ----------
    settings : Settings
        A scrapy settings object. See the supported settings below.

    Returns
    -------
    server
        Redis client instance.

    Other Parameters
    ----------------
    REDIS_URL : str, optional
        Server connection URL.
    REDIS_HOST : str, optional
        Server host.
    REDIS_PORT : str, optional
        Server port.
    REDIS_ENCODING : str, optional
        Data encoding.
    REDIS_PARAMS : dict, optional
        Additional client parameters.

    """
    params = defaults.REDIS_PARAMS.copy()
    params.update(settings.getdict('REDIS_PARAMS'))
    # XXX: Deprecate REDIS_* settings.
    for source, dest in SETTINGS_PARAMS_MAP.items():
        val = settings.get(source)
        if val:
            params[dest] = val

    # Allow ``redis_cls`` to be a path to a class.
    if isinstance(params.get('redis_cls'), six.string_types):
        params['redis_cls'] = load_object(params['redis_cls'])

    return get_redis(**params)


# Backwards compatible alias.
from_settings = get_redis_from_settings


def get_redis(**kwargs):
    """Returns a redis client instance.

    Parameters
    ----------
    redis_cls : class, optional
        Defaults to ``redis.StrictRedis``.
    url : str, optional
        If given, ``redis_cls.from_url`` is used to instantiate the class.
    **kwargs
        Extra parameters to be passed to the ``redis_cls`` class.

    Returns
    -------
    server
        Redis client instance.

    """
    redis_cls = kwargs.pop('redis_cls', defaults.REDIS_CLS)
    url = kwargs.pop('url', None)
    if url:
        return redis_cls.from_url(url, **kwargs)
    else:
        return redis_cls(**kwargs)

```

三个 import

- import six

  用与兼容 python2 与 python3 的模块，有了它，代码无序改动就能在 python3 或 2 上 run 起来，它的原理是重定义了 python2、3 中有差异的函数。

- from scrapy.utils.misc import load_object

  ```python
  def load_object(path):
      """Load an object given its absolute object path, and return it.

      object can be a class, function, variable or an instance.
      path ie: 'scrapy.downloadermiddlewares.redirect.RedirectMiddleware'
      """

      try:
          dot = path.rindex('.')
      except ValueError:
          raise ValueError("Error loading object '%s': not a full path" % path)

      module, name = path[:dot], path[dot+1:]
      mod = import_module(module)

      try:
          obj = getattr(mod, name)
      except AttributeError:
          raise NameError("Module '%s' doesn't define any object named '%s'" % (module, name))

      return obj
  ```

  接收一个对象的绝对路径，返回这个对象

  例如：

  ```python
   path = 'scrapy.downloadermiddlewares.redirect.RedirectMiddleware'
      obj = load_object(path)
      print(obj)
  ```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20191001120837884.png)

- from . import defaults

  导入 default.py

  ```python
  #defaults.py
  import redis
  ```

# For standalone use.

DUPEFILTER_KEY = 'dupefilter:%(timestamp)s'

PIPELINE_KEY = '%(spider)s:items'

REDIS_CLS = redis.StrictRedis
REDIS_ENCODING = 'utf-8'

# Sane connection defaults.

REDIS_PARAMS = {
'socket_timeout': 30,
'socket_connect_timeout': 30,
'retry_on_timeout': True,
'encoding': REDIS_ENCODING,
}

SCHEDULER_QUEUE_KEY = '%(spider)s:requests'
SCHEDULER_QUEUE_CLASS = 'scrapy_redis.queue.PriorityQueue'
SCHEDULER_DUPEFILTER_KEY = '%(spider)s:dupefilter'
SCHEDULER_DUPEFILTER_CLASS = 'scrapy_redis.dupefilter.RFPDupeFilter'

START_URLS_KEY = '%(name)s:start_urls'
START_URLS_AS_SET = False

````

定义了一些默认的参数，方便调用

SETTINGS_PARAMS_MAP 映射了 redis 的 setting 参数

### 两个方法

1. def get_redis_from_settings(settings)

 copy 一个 defaults.py 中的 REDIS_PARAMS 作为 params(这里应该是浅拷贝)

 获取 default.py 中 redis 的默认连接参数， 获取 setting 中用户设置的参数替换掉默认(如果有的话)。

 使用 load_object 获取设置的 redis_cls，存入 params

 返回 get_redis(\*\*params)

2. def get_redis(\*\*kwargs)

 通过 redis_cls = kwargs.pop('redis_cls', defaults.REDIS_CLS)获取用户设置的 redis_cls 值，默认为 dafault.py 的 REDIS_CLS 值

 获取 url 值，默认为 none，若有则通过 url 连接 redis，若无，则通过参数连接。

 返回 redis_cls()，即连接 redis 实例

## dupefilter.py

代码太长，拆开来看

```python
import logging
import time

from scrapy.dupefilters import BaseDupeFilter
from scrapy.utils.request import request_fingerprint

from . import defaults
from .connection import get_redis_from_settings
````

import logging、time 模块用来输出日志

import BaseDupeFilter，request_fingerprint，用于重写 RFPDupeFilter()类

其中 request_fingerprint 使用 sha1 算法将 request 的 method，url，body，headers 加密为一个字符串，通过这个加密后的字符串来判断 request 请求是否重复，值得一提的是，使用了 canonicalize_url 对 url 先进行了先规范化后再加密，canonicalize_url 的使用 urllib.parse 解析 url 再规范化，具体操作表现为

对 query arguments 进行排序，例如：

```shell
>>> w3lib.url.canonicalize_url('http://www.example.com/do?c=3&b=5&b=2&a=50')
    'http://www.example.com/do?a=50&b=2&b=5&c=3'
```

将 path 转为 utf-8 编码，例如：

```shell
>>>w3lib.url.canonicalize_url(u'http://www.example.com/r\u00e9sum\u00e9')
    'http://www.example.com/r%C3%A9sum%C3%A9'
```

看看这个 RFPDupeFilter()类

首先初始化需要的参数有 redis 连接实例，key 为 redis 的 key，debug 为调试模式

```python
 def __init__(self, server, key, debug=False):
        """Initialize the duplicates filter.

        Parameters
        ----------
        server : redis.StrictRedis
            The redis server instance.
        key : str
            Redis key Where to store fingerprints.
        debug : bool, optional
            Whether to log filtered requests.

        """
        self.server = server
        self.key = key
        self.debug = debug
        self.logdupes = True
```

定义了两个类方法，从 setting 读取配置，key 为时间戳，返回 RFPDupeFilter()实例。

```python
	@classmethod
    def from_settings(cls, settings):
        """Returns an instance from given settings.

        This uses by default the key ``dupefilter:<timestamp>``. When using the
        ``scrapy_redis.scheduler.Scheduler`` class, this method is not used as
        it needs to pass the spider name in the key.

        Parameters
        ----------
        settings : scrapy.settings.Settings

        Returns
        -------
        RFPDupeFilter
            A RFPDupeFilter instance.
        """
        server = get_redis_from_settings(settings)
        # XXX: This creates one-time key. needed to support to use this
        # class as standalone dupefilter with scrapy's default scheduler
        # if scrapy passes spider on open() method this wouldn't be needed
        # TODO: Use SCRAPY_JOB env as default and fallback to timestamp.
        key = defaults.DUPEFILTER_KEY % {'timestamp': int(time.time())}
        debug = settings.getbool('DUPEFILTER_DEBUG')
        return cls(server, key=key, debug=debug)

    @classmethod
    def from_crawler(cls, crawler):
        """Returns instance from crawler.

        Parameters
        ----------
        crawler : scrapy.crawler.Crawler

        Returns
        -------
        RFPDupeFilter
            Instance of RFPDupeFilter.

        """
        return cls.from_settings(crawler.settings)
```

定义 request_seen 方法通过 redis 的 sadd 方法，添加 key，fp，若已存在则返回 0

```python
def request_seen(self, request):
        """Returns True if request was already seen.

        Parameters
        ----------
        request : scrapy.http.Request

        Returns
        -------
        bool

        """
        fp = self.request_fingerprint(request)
        # This returns the number of values added, zero if already exists.
        added = self.server.sadd(self.key, fp)
        return added == 0
```

定义了 request_fingerprint ，接收 request，返回之前 import 的 return request_fingerprint

定义 close，关闭时删除数据，用于被 scrapy 的 scheduler 调用

定义 clear，调用 redis 的 delete 删除通过 key 删除值

定义 log,用于打印 debug 日志

```python
def request_fingerprint(self, request):
        """Returns a fingerprint for a given request.

        Parameters
        ----------
        request : scrapy.http.Request

        Returns
        -------
        str

        """
        return request_fingerprint(request)

    def close(self, reason=''):
        """Delete data on close. Called by Scrapy's scheduler.

        Parameters
        ----------
        reason : str, optional

        """
        self.clear()

    def clear(self):
        """Clears fingerprints data."""
        self.server.delete(self.key)

    def log(self, request, spider):
        """Logs given request.

        Parameters
        ----------
        request : scrapy.http.Request
        spider : scrapy.spiders.Spider

        """
        if self.debug:
            msg = "Filtered duplicate request: %(request)s"
            self.logger.debug(msg, {'request': request}, extra={'spider': spider})
        elif self.logdupes:
            msg = ("Filtered duplicate request %(request)s"
                   " - no more duplicates will be shown"
                   " (see DUPEFILTER_DEBUG to show all duplicates)")
            self.logger.debug(msg, {'request': request}, extra={'spider': spider})
            self.logdupes = False
```

## picklecompat.py

```python
"""A pickle wrapper module with protocol=-1 by default."""

try:
    import cPickle as pickle  # PY2
except ImportError:
    import pickle


def loads(s):
    return pickle.loads(s)


def dumps(obj):
    return pickle.dumps(obj, protocol=-1)
```

类似 json，将 python obj 转为字符，将字符转为 obj，这里为什么不用 json 我也不懂？

## piplines.py

定义一个 RedisPipeline 类，序列化获取的 item 数据，存入 redis，这里用了 deferToThread 多线程存储

```python
from scrapy.utils.misc import load_object
from scrapy.utils.serialize import ScrapyJSONEncoder
from twisted.internet.threads import deferToThread

from . import connection, defaults


default_serialize = ScrapyJSONEncoder().encode


class RedisPipeline(object):
    """Pushes serialized item into a redis list/queue

    Settings
    --------
    REDIS_ITEMS_KEY : str
        Redis key where to store items.
    REDIS_ITEMS_SERIALIZER : str
        Object path to serializer function.

    """

    def __init__(self, server,
                 key=defaults.PIPELINE_KEY,
                 serialize_func=default_serialize):
        """Initialize pipeline.

        Parameters
        ----------
        server : StrictRedis
            Redis client instance.
        key : str
            Redis key where to store items.
        serialize_func : callable
            Items serializer function.

        """
        self.server = server
        self.key = key
        self.serialize = serialize_func

    @classmethod
    def from_settings(cls, settings):
        params = {
            'server': connection.from_settings(settings),
        }
        if settings.get('REDIS_ITEMS_KEY'):
            params['key'] = settings['REDIS_ITEMS_KEY']
        if settings.get('REDIS_ITEMS_SERIALIZER'):
            params['serialize_func'] = load_object(
                settings['REDIS_ITEMS_SERIALIZER']
            )

        return cls(**params)

    @classmethod
    def from_crawler(cls, crawler):
        return cls.from_settings(crawler.settings)

    def process_item(self, item, spider):
        return deferToThread(self._process_item, item, spider)

    def _process_item(self, item, spider):
        key = self.item_key(item, spider)
        data = self.serialize(item)
        self.server.rpush(key, data)
        return item

    def item_key(self, item, spider):
        """Returns redis key based on given spider.

        Override this function to use a different key depending on the item
        and/or spider.

        """
        return self.key % {'spider': spider.name}

```

## queue.py

```python
class Base(object):
    """Per-spider base queue class"""

    def __init__(self, server, spider, key, serializer=None):
        """Initialize per-spider redis queue.

        Parameters
        ----------
        server : StrictRedis
            Redis client instance.
        spider : Spider
            Scrapy spider instance.
        key: str
            Redis key where to put and get messages.
        serializer : object
            Serializer object with ``loads`` and ``dumps`` methods.

        """
        if serializer is None:
            # Backward compatibility.
            # TODO: deprecate pickle.
            serializer = picklecompat
        if not hasattr(serializer, 'loads'):
            raise TypeError("serializer does not implement 'loads' function: %r"
                            % serializer)
        if not hasattr(serializer, 'dumps'):
            raise TypeError("serializer '%s' does not implement 'dumps' function: %r"
                            % serializer)

        self.server = server
        self.spider = spider
        self.key = key % {'spider': spider.name}
        self.serializer = serializer

    def _encode_request(self, request):
        """Encode a request object"""
        obj = request_to_dict(request, self.spider)
        return self.serializer.dumps(obj)

    def _decode_request(self, encoded_request):
        """Decode an request previously encoded"""
        obj = self.serializer.loads(encoded_request)
        return request_from_dict(obj, self.spider)

    def __len__(self):
        """Return the length of the queue"""
        raise NotImplementedError

    def push(self, request):
        """Push a request"""
        raise NotImplementedError

    def pop(self, timeout=0):
        """Pop a request"""
        raise NotImplementedError

    def clear(self):
        """Clear queue/stack"""
        self.server.delete(self.key)

```

创建一个队列基类，初始化接收 4 个参数（server, spider, key, serializer=None），创建 redis 实例，spider 实例，key（redis 存储数据的键），序列化对象(默认是 picklecompat，也可以自己提供)

encode_request，将 request 对象转为 dict，接收两个参数（request，self.spider），调用 request_to_dict 生成 obj，再对 obj 调用序列化函数，返回序列化后的数据。

**request_to_dict**

```python
def request_to_dict(request, spider=None):
    """Convert Request object to a dict.

    If a spider is given, it will try to find out the name of the spider method
    used in the callback and store that as the callback.
    """
    cb = request.callback
    if callable(cb):
        cb = _find_method(spider, cb)
    eb = request.errback
    if callable(eb):
        eb = _find_method(spider, eb)
    d = {
        'url': to_unicode(request.url),  # urls should be safe (safe_string_url)
        'callback': cb,
        'errback': eb,
        'method': request.method,
        'headers': dict(request.headers),
        'body': request.body,
        'cookies': request.cookies,
        'meta': request.meta,
        '_encoding': request._encoding,
        'priority': request.priority,
        'dont_filter': request.dont_filter,
        'flags': request.flags,
        'cb_kwargs': request.cb_kwargs,
    }
    if type(request) is not Request:
        d['_class'] = request.__module__ + '.' + request.__class__.__name__
    return d
```

decode_request 和 encode_request 相反，就不多说了

预定义了 _len _、push、pop、clear 方法，clear(根据 self.key 清除数据)

再看基于基类定义的**先进先出队列**

存储类型为集合

```python
class FifoQueue(Base):
    """Per-spider FIFO queue"""

    def __len__(self):
        """Return the length of the queue"""
        return self.server.llen(self.key)

    def push(self, request):
        """Push a request"""
        self.server.lpush(self.key, self._encode_request(request))

    def pop(self, timeout=0):
        """Pop a request"""
        if timeout > 0:
            data = self.server.brpop(self.key, timeout)
            if isinstance(data, tuple):
                data = data[1]
        else:
            data = self.server.rpop(self.key)
        if data:
            return self._decode_request(data)
```

** len**(self)：调用 redis 的 llen 根据 self.key 返回 list 的长度

push(self, request)：调用 redis 的 lpush，根据 self.key 将编码后的数据存入 list 左部

[pop(self, timeout=0)]：调用 redis 的 rpop，根据 self.key 抛出 list 右部数据，可以设置超时时间，调用 redis 的 brpop(假如在指定时间内没有任何元素被弹出，则返回一个 nil 和等待时长。 反之，返回一个含有两个元素的列表，第一个元素是被弹出元素所属的 key ，第二个元素是被弹出元素的值。)

[lpush](https://www.runoob.com/redis/lists-lpush.html) [rpop](https://www.runoob.com/redis/lists-rpop.html) [brpop](https://www.runoob.com/redis/lists-brpop.html)

**优先级队列**

存储类型为有序集合

```python
class PriorityQueue(Base):
    """Per-spider priority queue abstraction using redis' sorted set"""

    def __len__(self):
        """Return the length of the queue"""
        return self.server.zcard(self.key)

    def push(self, request):
        """Push a request"""
        data = self._encode_request(request)
        score = -request.priority
        # We don't use zadd method as the order of arguments change depending on
        # whether the class is Redis or StrictRedis, and the option of using
        # kwargs only accepts strings, not bytes.
        self.server.execute_command('ZADD', self.key, score, data)

    def pop(self, timeout=0):
        """
        Pop a request
        timeout not support in this queue class
        """
        # use atomic range/remove using multi/exec
        pipe = self.server.pipeline()
        pipe.multi()
        pipe.zrange(self.key, 0, 0).zremrangebyrank(self.key, 0, 0)
        results, count = pipe.execute()
        if results:
            return self._decode_request(results[0])


```

len：封装 redis 的 zcard 方法

push：封装 redis 的 zadd 方法，将 request.priority 和编码后的 request 存入数据库，这里的 request.priority 应该是数字越大优先级越高，然而数据库中，数字小的排在前面，所以取负数存入

pop: 创建一个 redis pipeline，调用 multi 标记一个事物块开始，执行 zrange(self.key, 0, 0)和 zremrangebyrank(self.key, 0, 0)

zrange(self.key, 0, 0)用于获取有序集合的第一个值

zremrangebyrank(self.key, 0, 0)用于删除有序集合的第一个值

[zadd](https://www.runoob.com/redis/sorted-sets-zadd.html) [Zremrangebyrank ](https://www.runoob.com/redis/sorted-sets-zremrangebyrank.html) [Zrange](https://www.runoob.com/redis/sorted-sets-zrange.html)

[pipeline 技术](https://www.runoob.com/redis/redis-pipelining.html) [multi](https://www.runoob.com/redis/transactions-multi.html) [redis 中 multi 与 pipeline 介绍分析](https://juejin.im/post/5b42e025f265da0fa332d4dc)

**后进先出队列**

```python
class LifoQueue(Base):
    """Per-spider LIFO queue."""

    def __len__(self):
        """Return the length of the stack"""
        return self.server.llen(self.key)

    def push(self, request):
        """Push a request"""
        self.server.lpush(self.key, self._encode_request(request))

    def pop(self, timeout=0):
        """Pop a request"""
        if timeout > 0:
            data = self.server.blpop(self.key, timeout)
            if isinstance(data, tuple):
                data = data[1]
        else:
            data = self.server.lpop(self.key)

        if data:
            return self._decode_request(data)
```

和先进先出的区别在于 pop 时变成了 lpop

## scheduler.py

ScrapyRedis 配合 Queue、 DupeFilter 使用的调度器 Scheduler

```
    def __init__(self, server,
                 persist=False,
                 flush_on_start=False,
                 queue_key=defaults.SCHEDULER_QUEUE_KEY,
                 queue_cls=defaults.SCHEDULER_QUEUE_CLASS,
                 dupefilter_key=defaults.SCHEDULER_DUPEFILTER_KEY,
                 dupefilter_cls=defaults.SCHEDULER_DUPEFILTER_CLASS,
                 idle_before_close=0,
                 serializer=None):
        """Initialize scheduler.

        Parameters
        ----------
        server : Redis
            The redis server instance.
        persist : bool
            Whether to flush requests when closing. Default is False.
        flush_on_start : bool
            Whether to flush requests on start. Default is False.
        queue_key : str
            Requests queue key.
        queue_cls : str
            Importable path to the queue class.
        dupefilter_key : str
            Duplicates filter key.
        dupefilter_cls : str
            Importable path to the dupefilter class.
        idle_before_close : int
            Timeout before giving up.

        """
        if idle_before_close < 0:
            raise TypeError("idle_before_close cannot be negative")

        self.server = server
        self.persist = persist
        self.flush_on_start = flush_on_start
        self.queue_key = queue_key
        self.queue_cls = queue_cls
        self.dupefilter_cls = dupefilter_cls
        self.dupefilter_key = dupefilter_key
        self.idle_before_close = idle_before_close
        self.serializer = serializer
        self.stats = None
```

初始化接收

server： redis 连接实例

persist：调度器结束时是否清除 requests queue，默认 False

flush_on_start：调度器开始时是否清除 requests queue，默认 False

queue_key：requests queue 的 key，通过这个 key 去 redis 中查找队列

queue_cls:：队列的类，默认为优先级队列

dupefilter_key：request set 去重的 key，通过这个 key 去 redis 中查找去重 set

dupefilter_cls：去重类，默认为 scrapy_redis.dupefilter.RFPDupeFilter，当然你也可以编写自己的去重类替换

idle_before_close：超时时间

**两个类方法**

```python
    @classmethod
    def from_settings(cls, settings):
        kwargs = {
            'persist': settings.getbool('SCHEDULER_PERSIST'),
            'flush_on_start': settings.getbool('SCHEDULER_FLUSH_ON_START'),
            'idle_before_close': settings.getint('SCHEDULER_IDLE_BEFORE_CLOSE'),
        }

        # If these values are missing, it means we want to use the defaults.
        optional = {
            # TODO: Use custom prefixes for this settings to note that are
            # specific to scrapy-redis.
            'queue_key': 'SCHEDULER_QUEUE_KEY',
            'queue_cls': 'SCHEDULER_QUEUE_CLASS',
            'dupefilter_key': 'SCHEDULER_DUPEFILTER_KEY',
            # We use the default setting name to keep compatibility.
            'dupefilter_cls': 'DUPEFILTER_CLASS',
            'serializer': 'SCHEDULER_SERIALIZER',
        }
        for name, setting_name in optional.items():
            val = settings.get(setting_name)
            if val:
                kwargs[name] = val

        # Support serializer as a path to a module.
        if isinstance(kwargs.get('serializer'), six.string_types):
            kwargs['serializer'] = importlib.import_module(kwargs['serializer'])

        server = connection.from_settings(settings)
        # Ensure the connection is working.
        server.ping()

        return cls(server=server, **kwargs)

    @classmethod
    def from_crawler(cls, crawler):
        instance = cls.from_settings(crawler.settings)
        # FIXME: for now, stats are only supported from this constructor
        instance.stats = crawler.stats
        return instance
```

用于根据 setting 设置创建 scheduler 实例。

**open 方法**

```python
def open(self, spider):
        self.spider = spider

        try:
            self.queue = load_object(self.queue_cls)(
                server=self.server,
                spider=spider,
                key=self.queue_key % {'spider': spider.name},
                serializer=self.serializer,
            )
        except TypeError as e:
            raise ValueError("Failed to instantiate queue class '%s': %s",
                             self.queue_cls, e)

        try:
            self.df = load_object(self.dupefilter_cls)(
                server=self.server,
                key=self.dupefilter_key % {'spider': spider.name},
                debug=spider.settings.getbool('DUPEFILTER_DEBUG'),
            )
        except TypeError as e:
            raise ValueError("Failed to instantiate dupefilter class '%s': %s",
                             self.dupefilter_cls, e)

        if self.flush_on_start:
            self.flush()
        # notice if there are requests already in the queue to resume the crawl
        if len(self.queue):
            spider.log("Resuming crawl (%d requests scheduled)" % len(self.queue))
```

self.queue 实例化爬取队列类，self.df 实例化去重类，判断 self.flush_on_start

是否调用 self.flush()

```python
    def close(self, reason):
        if not self.persist:
            self.flush()

    def flush(self):
        self.df.clear()
        self.queue.clear()
```

close:判断 self.presist，关闭时是否调用 self.flush

flush:调用实例的 clear 方法清除数据

**存取方法**

```python
    def enqueue_request(self, request):
        if not request.dont_filter and self.df.request_seen(request):
            self.df.log(request, self.spider)
            return False
        if self.stats:
            self.stats.inc_value('scheduler/enqueued/redis', spider=self.spider)
        self.queue.push(request)
        return True
    def next_request(self):
        block_pop_timeout = self.idle_before_close
        request = self.queue.pop(block_pop_timeout)
        if request and self.stats:
            self.stats.inc_value('scheduler/dequeued/redis', spider=self.spider)
        return request

    def has_pending_requests(self):
        return len(self) > 0

```

**enqueue_request(self, request):**

判断 request 是否不需要去重 和 去重队列是否已存在这个 request，若任一条件不满足则打印日志，返回 false

若都满足条件则调用队列实例的 pop 方法将 request 加入爬取队列

if self.stats 用于判断是否需要统计

**next_request(self)**：

设置超时函数

调用队列实例的 pop 方法抛出 request，

判断是否获得 request 和是否需要统计，都满足则统计

返回 request

## spiders.py

构建了一个 RedisMixin 类用于从 redis 队列读取 urls

```python
    redis_key = None
    redis_batch_size = None
    redis_encoding = None

    # Redis client placeholder.
    server = None

    def start_requests(self):
        """Returns a batch of start requests from redis."""
        return self.next_requests()
```

定义了 redis_key,redis_batch_size,redis_encoding,server 为 None，start_requests 调用 next_requests 方法

```python
    def setup_redis(self, crawler=None):
        """Setup redis connection and idle signal.

        This should be called after the spider has set its crawler object.
        """
        if self.server is not None:
            return

        if crawler is None:
            # We allow optional crawler argument to keep backwards
            # compatibility.
            # XXX: Raise a deprecation warning.
            crawler = getattr(self, 'crawler', None)

        if crawler is None:
            raise ValueError("crawler is required")

        settings = crawler.settings

        if self.redis_key is None:
            self.redis_key = settings.get(
                'REDIS_START_URLS_KEY', defaults.START_URLS_KEY,
            )

        self.redis_key = self.redis_key % {'name': self.name}

        if not self.redis_key.strip():
            raise ValueError("redis_key must not be empty")

        if self.redis_batch_size is None:
            # TODO: Deprecate this setting (REDIS_START_URLS_BATCH_SIZE).
            self.redis_batch_size = settings.getint(
                'REDIS_START_URLS_BATCH_SIZE',
                settings.getint('CONCURRENT_REQUESTS'),
            )

        try:
            self.redis_batch_size = int(self.redis_batch_size)
        except (TypeError, ValueError):
            raise ValueError("redis_batch_size must be an integer")

        if self.redis_encoding is None:
            self.redis_encoding = settings.get('REDIS_ENCODING', defaults.REDIS_ENCODING)

        self.logger.info("Reading start URLs from redis key '%(redis_key)s' "
                         "(batch size: %(redis_batch_size)s, encoding: %(redis_encoding)s",
                         self.__dict__)

        self.server = connection.from_settings(crawler.settings)
        # The idle signal is called when the spider has no requests left,
        # that's when we will schedule new requests from redis queue
        crawler.signals.connect(self.spider_idle, signal=signals.spider_idle)

```

setup_redis(self, crawler=None)接收一个爬虫对象，设置 redis 连接和空闲信号。当 spider 没有剩余 requests 时，调用空闲信号，从 redis 队列中调度新 requests

```python
    def next_requests(self):
        """Returns a request to be scheduled or none."""
        use_set = self.settings.getbool('REDIS_START_URLS_AS_SET', defaults.START_URLS_AS_SET)
        fetch_one = self.server.spop if use_set else self.server.lpop
        # XXX: Do we need to use a timeout here?
        found = 0
        # TODO: Use redis pipeline execution.
        while found < self.redis_batch_size:
            data = fetch_one(self.redis_key)
            if not data:
                # Queue empty.
                break
            req = self.make_request_from_data(data)
            if req:
                yield req
                found += 1
            else:
                self.logger.debug("Request not made from data: %r", data)

        if found:
            self.logger.debug("Read %s requests from '%s'", found, self.redis_key)
```

next_requests(self):从 REDIS_START_URLS 获取 data，调用 make_request_from_data 处理 data，返回 requests

```python
    def make_request_from_data(self, data):
        """Returns a Request instance from data coming from Redis.

        By default, ``data`` is an encoded URL. You can override this method to
        provide your own message decoding.

        Parameters
        ----------
        data : bytes
            Message from redis.

        """
        url = bytes_to_str(data, self.redis_encoding)
        return self.make_requests_from_url(url)

    def schedule_next_requests(self):
        """Schedules a request if available"""
        # TODO: While there is capacity, schedule a batch of redis requests.
        for req in self.next_requests():
            self.crawler.engine.crawl(req, spider=self)

    def spider_idle(self):
        """Schedules a request if available, otherwise waits."""
        # XXX: Handle a sentinel to close the spider.
        self.schedule_next_requests()
        raise DontCloseSpider

```

make_request_from_data(self, data)：调用 make_requests_from_url(url)返回 requests 对象

schedule_next_requests(self)：调度 requests 对象给爬虫抓取

spider_idle(self)：空闲处理。非空调用 schedule_next_requests(self)，为空则等待。

## utils.py

```python
import six


def bytes_to_str(s, encoding='utf-8'):
    """Returns a str if a bytes object is given."""
    if six.PY3 and isinstance(s, bytes):
        return s.decode(encoding)
    return s

```

字节转 utf-8 编码字符

# finally

以上就是 scrapy-redis 的所有源码了，总的来说 scrapy-redis 实现分布式爬虫的原理，就是共用了一个主节点的 redis 数据库存储的 requestsqueue，dupefilter set，item。

那么问题来了，为什么是 redis 而不是 mongodb，SQL 呢？
