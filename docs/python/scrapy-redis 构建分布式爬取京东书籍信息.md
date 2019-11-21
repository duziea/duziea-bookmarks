# scrapy-redis 构建分布式爬取京东书籍信息

上次介绍了 scrapy-redis 源码，这次实战一下。

## **setting.py 配置**

主要启用 scrapy-redis 的 SCHEDULER，DUPEFILTER，redis 地址

其他的看需求，

例如这里我启用了 scrapy_redis.pipelines.RedisPipeline 存储数据。

```python
#---------------------scrapy-redis setting --------------
# Enables scheduling storing requests queue in redis.
SCHEDULER = "scrapy_redis.scheduler.Scheduler"

# Ensure all spiders share same duplicates filter through redis.
DUPEFILTER_CLASS = "scrapy_redis.dupefilter.RFPDupeFilter"

# Default requests serializer is pickle, but it can be changed to any module
# with loads and dumps functions. Note that pickle is not compatible between
# python versions.
# Caveat: In python 3.x, the serializer must return strings keys and support
# bytes as values. Because of this reason the json or msgpack module will not
# work by default. In python 2.x there is no such issue and you can use
# 'json' or 'msgpack' as serializers.
#SCHEDULER_SERIALIZER = "scrapy_redis.picklecompat"

# Don't cleanup redis queues, allows to pause/resume crawls.
SCHEDULER_PERSIST = True

# Schedule requests using a priority queue. (default)
#SCHEDULER_QUEUE_CLASS = 'scrapy_redis.queue.PriorityQueue'

# Alternative queues.
#SCHEDULER_QUEUE_CLASS = 'scrapy_redis.queue.FifoQueue'
#SCHEDULER_QUEUE_CLASS = 'scrapy_redis.queue.LifoQueue'

# Max idle time to prevent the spider from being closed when distributed crawling.
# This only works if queue class is SpiderQueue or SpiderStack,
# and may also block the same time when your spider start at the first time (because the queue is empty).
#SCHEDULER_IDLE_BEFORE_CLOSE = 10

# Store scraped item in redis for post-processing.
ITEM_PIPELINES = {
    'scrapy_redis.pipelines.RedisPipeline': 300
}

# The item pipeline serializes and stores the items in this redis key.
#REDIS_ITEMS_KEY = '%(spider)s:items'

# The items serializer is by default ScrapyJSONEncoder. You can use any
# importable path to a callable object.
#REDIS_ITEMS_SERIALIZER = 'json.dumps'

# Specify the host and port to use when connecting to Redis (optional).
REDIS_HOST = 'localhost'
REDIS_PORT = 6379

# Specify the full Redis URL for connecting (optional).
# If set, this takes precedence over the REDIS_HOST and REDIS_PORT settings.
#REDIS_URL = 'redis://user:pass@hostname:9001'

# Custom redis client parameters (i.e.: socket timeout, etc.)
#REDIS_PARAMS  = {}
# Use custom redis client class.
#REDIS_PARAMS['redis_cls'] = 'myproject.RedisClient'

# If True, it uses redis' ``spop`` operation. This could be useful if you
# want to avoid duplicates in your start urls list. In this cases, urls must
# be added via ``sadd`` command or you will get a type error from redis.
# REDIS_START_URLS_AS_SET = True

# Default start urls key for RedisSpider and RedisCrawlSpider.
# REDIS_START_URLS_KEY = '%(name)s:start_urls'

# Use other encoding than utf-8 for redis.
# REDIS_ENCODING = 'utf-8'
```

## **items.py**

初始化我们想获得的信息

```python
# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy


class JdbookItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    # 书名，大分类，小分类，小分类页面url，
    # 详情页面url，作者，出版社，出版时间，价格
    name = scrapy.Field()
    first_category = scrapy.Field()
    second_category = scrapy.Field()
    second_category_url = scrapy.Field()
    cover_url = scrapy.Field()
    detail_url = scrapy.Field()
    author = scrapy.Field()
    publisher = scrapy.Field()
    pub_date = scrapy.Field()
    price = scrapy.Field()

```

## **book.py**

```python
def parse(self, response)
'''
这个方法实现利用xpath先获取所有一级分类的selector list
再遍历一级分类获取所有二级分类的selector list
遍历二级分类提取出url
调用yield 生成scrapy.Request访问二级分类url,回调self.parse_bookpage
'''

```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20191007211948785.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)

```python
def parse_bookpage(self, response):
'''
这个方法实现获取当前二级分类下商品的所有页数，
构造每一页的url,
调用yield 生成scrapy.Request访问每一页url,回调self.parse_bookinfo
'''

```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20191007211958383.png)

```python
def parse_bookinfo(self,response):
'''
这个方法实现获取每本书的详细信息
实例化item
其中由于价格是异步加载的，
分析每个商品价格的接口url由'https://p.3.cn/prices/mgets?skuIds=J_' + skuid组成，skuid即data-sku
再调用yield 生成scrapy.Request访问价格url,回调parse_bookprice
'''
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20191007212121783.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)

```python
 def parse_bookprice(self, response):
 '''
 获取价格，
 yield item
 '''
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20191007212027155.png)
**book.py 完整代码**

```python
# -*- coding: utf-8 -*-
import scrapy
import json
from jdbook.items import JdbookItem
from scrapy_redis.spiders import RedisSpider


class BookSpider(RedisSpider):
    name = 'book'
    allowed_domains = ['jd.com','p.3.cn']
    redis_key = 'book'

    def parse(self, response):
        #get first_category xpath selector list
        # fc_list = response.xpath('//*[@id="booksort"]/div[2]/dl/dt/a')
        fc_list = response.xpath('//*[@id="booksort"]/div[2]/dl/dt[1]/a')
        for i in fc_list:
            # traverse first_category list ,get each first_category's name , url
            # and second_category list
            fc = i.xpath('./text()').get()
            sc_list = i.xpath('../following-sibling::dd[1]/em/a')
            for n in sc_list:
                # traverse second_category list,get each second_category's name,url
                info = {}
                info['first_category'] = fc
                info['second_category'] = n.xpath('./text()').get()
                info['second_category_url'] = 'https:' + n.xpath('./@href').get()

                # yield request second_category_url, callback=self.parse_bookinfo ,
                # get each second_category's books info
                yield scrapy.Request(
                    info['second_category_url'],
                    callback = self.parse_bookpage,
                    meta = {'meta':info}
                )

    def parse_bookpage(self, response):
        info = response.meta['meta']
        lastpage = response.xpath('//*[@id="J_bottomPage"]/span[1]/a[9]/text()').get()

        for i in range(1,int(lastpage)+1):
            url ='https://list.jd.com' + response.xpath('//*[@id="J_bottomPage"]/span[1]/a[2]/@href').get()
            url = url.replace('page=1','page='+str(i))

            yield scrapy.Request(
                url,
                callback = self.parse_bookinfo,
                meta={'meta':info}
            )

    # parse_bookinfo
    def parse_bookinfo(self,response):
        # get response.meta
        info = response.meta['meta']
        # get book xpath selector list
        book_list = response.xpath('//*[@id="plist"]/ul/li/div')
        for i in book_list:
            item = JdbookItem()
            item['first_category'] = info['first_category']
            item['second_category'] = info['second_category']
            item['second_category_url'] = info['second_category_url']
            item['name'] = i.xpath('./div[3]/a/em/text()').get().strip()
            item['detail_url'] ='https:'+ i.xpath('./div[1]/a/@href').get()
            item['author'] = i.xpath('./div[4]/span[1]/span/a/text()').get()
            item['publisher'] =i.xpath('./div[4]/span[2]/a/text()').get()
            item['pub_date'] = i.xpath('./div[4]/span[3]/text()').get().strip()
            skuid = i.xpath('./@data-sku').get()

            url = 'https://p.3.cn/prices/mgets?skuIds=J_' + skuid

            yield scrapy.Request(
                url,
                callback = self.parse_bookprice,
                meta = {'meta':item}
                )


    def parse_bookprice(self, response):
        # get price
        item = response.meta['meta']
        data = json.loads(response.text)
        item['price'] = data['0']['op']
        yield item

```

开 3 个终端模拟分布式，吃个饭的时间，爬了 25000 条，小说分类还没爬完，上个成果图，后续可以将 redis 中的数据写入到 MySQL、Mongodb 中。

![在这里插入图片描述](https://img-blog.csdnimg.cn/20191007212143360.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)

## 完整代码

[https://github.com/duziea/Python-imitate-login/tree/master/JDmail/book/jdbook](https://github.com/duziea/Python-imitate-login/tree/master/JDmail/book/jdbook)
