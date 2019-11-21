;(window.webpackJsonp = window.webpackJsonp || []).push([
  [20],
  {
    223: function(t, s, a) {
      'use strict'
      a.r(s)
      var n = a(0),
        e = Object(n.a)(
          {},
          function() {
            var t = this,
              s = t.$createElement,
              a = t._self._c || s
            return a(
              'ContentSlotsDistributor',
              { attrs: { 'slot-key': t.$parent.slotKey } },
              [
                a(
                  'h1',
                  { attrs: { id: 'scrapy-redis-构建分布式爬取京东书籍信息' } },
                  [
                    a(
                      'a',
                      {
                        staticClass: 'header-anchor',
                        attrs: {
                          href: '#scrapy-redis-构建分布式爬取京东书籍信息'
                        }
                      },
                      [t._v('#')]
                    ),
                    t._v(' scrapy-redis 构建分布式爬取京东书籍信息')
                  ]
                ),
                t._v(' '),
                a('p', [t._v('上次介绍了scrapy-redis源码，这次实战一下。')]),
                t._v(' '),
                a('h2', { attrs: { id: 'setting-py配置' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#setting-py配置' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' '),
                  a('strong', [t._v('setting.py配置')])
                ]),
                t._v(' '),
                a('p', [
                  t._v('主要启用scrapy-redis的SCHEDULER，DUPEFILTER，redis地址')
                ]),
                t._v(' '),
                a('p', [t._v('其他的看需求，')]),
                t._v(' '),
                a('p', [
                  t._v(
                    '例如这里我启用了scrapy_redis.pipelines.RedisPipeline存储数据。'
                  )
                ]),
                t._v(' '),
                a('div', { staticClass: 'language-python extra-class' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-python' } }, [
                    a('code', [
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [
                          t._v(
                            '#---------------------scrapy-redis setting --------------'
                          )
                        ]
                      ),
                      t._v('\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [
                          t._v(
                            '# Enables scheduling storing requests queue in redis.'
                          )
                        ]
                      ),
                      t._v('\nSCHEDULER '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v('"scrapy_redis.scheduler.Scheduler"')
                      ]),
                      t._v('\n\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [
                          t._v(
                            '# Ensure all spiders share same duplicates filter through redis.'
                          )
                        ]
                      ),
                      t._v('\nDUPEFILTER_CLASS '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v('"scrapy_redis.dupefilter.RFPDupeFilter"')
                      ]),
                      t._v('\n\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [
                          t._v(
                            '# Default requests serializer is pickle, but it can be changed to any module'
                          )
                        ]
                      ),
                      t._v('\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [
                          t._v(
                            '# with loads and dumps functions. Note that pickle is not compatible between'
                          )
                        ]
                      ),
                      t._v('\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v('# python versions.')]
                      ),
                      t._v('\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [
                          t._v(
                            '# Caveat: In python 3.x, the serializer must return strings keys and support'
                          )
                        ]
                      ),
                      t._v('\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [
                          t._v(
                            '# bytes as values. Because of this reason the json or msgpack module will not'
                          )
                        ]
                      ),
                      t._v('\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [
                          t._v(
                            '# work by default. In python 2.x there is no such issue and you can use'
                          )
                        ]
                      ),
                      t._v('\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v("# 'json' or 'msgpack' as serializers.")]
                      ),
                      t._v('\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [
                          t._v(
                            '#SCHEDULER_SERIALIZER = "scrapy_redis.picklecompat"'
                          )
                        ]
                      ),
                      t._v('\n\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [
                          t._v(
                            "# Don't cleanup redis queues, allows to pause/resume crawls."
                          )
                        ]
                      ),
                      t._v('\nSCHEDULER_PERSIST '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token boolean' } },
                        [t._v('True')]
                      ),
                      t._v('\n\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [
                          t._v(
                            '# Schedule requests using a priority queue. (default)'
                          )
                        ]
                      ),
                      t._v('\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [
                          t._v(
                            "#SCHEDULER_QUEUE_CLASS = 'scrapy_redis.queue.PriorityQueue'"
                          )
                        ]
                      ),
                      t._v('\n\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v('# Alternative queues.')]
                      ),
                      t._v('\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [
                          t._v(
                            "#SCHEDULER_QUEUE_CLASS = 'scrapy_redis.queue.FifoQueue'"
                          )
                        ]
                      ),
                      t._v('\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [
                          t._v(
                            "#SCHEDULER_QUEUE_CLASS = 'scrapy_redis.queue.LifoQueue'"
                          )
                        ]
                      ),
                      t._v('\n\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [
                          t._v(
                            '# Max idle time to prevent the spider from being closed when distributed crawling.'
                          )
                        ]
                      ),
                      t._v('\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [
                          t._v(
                            '# This only works if queue class is SpiderQueue or SpiderStack,'
                          )
                        ]
                      ),
                      t._v('\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [
                          t._v(
                            '# and may also block the same time when your spider start at the first time (because the queue is empty).'
                          )
                        ]
                      ),
                      t._v('\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v('#SCHEDULER_IDLE_BEFORE_CLOSE = 10')]
                      ),
                      t._v('\n\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [
                          t._v(
                            '# Store scraped item in redis for post-processing.'
                          )
                        ]
                      ),
                      t._v('\nITEM_PIPELINES '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('{')]
                      ),
                      t._v('\n    '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'scrapy_redis.pipelines.RedisPipeline'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [
                        t._v('300')
                      ]),
                      t._v('\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('}')]
                      ),
                      t._v('\n\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [
                          t._v(
                            '# The item pipeline serializes and stores the items in this redis key.'
                          )
                        ]
                      ),
                      t._v('\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v("#REDIS_ITEMS_KEY = '%(spider)s:items'")]
                      ),
                      t._v('\n\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [
                          t._v(
                            '# The items serializer is by default ScrapyJSONEncoder. You can use any'
                          )
                        ]
                      ),
                      t._v('\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v('# importable path to a callable object.')]
                      ),
                      t._v('\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v("#REDIS_ITEMS_SERIALIZER = 'json.dumps'")]
                      ),
                      t._v('\n\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [
                          t._v(
                            '# Specify the host and port to use when connecting to Redis (optional).'
                          )
                        ]
                      ),
                      t._v('\nREDIS_HOST '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'localhost'")
                      ]),
                      t._v('\nREDIS_PORT '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [
                        t._v('6379')
                      ]),
                      t._v('\n\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [
                          t._v(
                            '# Specify the full Redis URL for connecting (optional).'
                          )
                        ]
                      ),
                      t._v('\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [
                          t._v(
                            '# If set, this takes precedence over the REDIS_HOST and REDIS_PORT settings.'
                          )
                        ]
                      ),
                      t._v('\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v("#REDIS_URL = 'redis://user:pass@hostname:9001'")]
                      ),
                      t._v('\n\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [
                          t._v(
                            '# Custom redis client parameters (i.e.: socket timeout, etc.)'
                          )
                        ]
                      ),
                      t._v('\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v('#REDIS_PARAMS  = {}')]
                      ),
                      t._v('\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v('# Use custom redis client class.')]
                      ),
                      t._v('\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [
                          t._v(
                            "#REDIS_PARAMS['redis_cls'] = 'myproject.RedisClient'"
                          )
                        ]
                      ),
                      t._v('\n\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [
                          t._v(
                            "# If True, it uses redis' ``spop`` operation. This could be useful if you"
                          )
                        ]
                      ),
                      t._v('\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [
                          t._v(
                            '# want to avoid duplicates in your start urls list. In this cases, urls must'
                          )
                        ]
                      ),
                      t._v('\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [
                          t._v(
                            '# be added via ``sadd`` command or you will get a type error from redis.'
                          )
                        ]
                      ),
                      t._v('\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v('# REDIS_START_URLS_AS_SET = True')]
                      ),
                      t._v('\n\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [
                          t._v(
                            '# Default start urls key for RedisSpider and RedisCrawlSpider.'
                          )
                        ]
                      ),
                      t._v('\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v("# REDIS_START_URLS_KEY = '%(name)s:start_urls'")]
                      ),
                      t._v('\n\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v('# Use other encoding than utf-8 for redis.')]
                      ),
                      t._v('\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v("# REDIS_ENCODING = 'utf-8'")]
                      ),
                      t._v('\n')
                    ])
                  ])
                ]),
                a('h2', { attrs: { id: 'items-py' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#items-py' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' '),
                  a('strong', [t._v('items.py')])
                ]),
                t._v(' '),
                a('p', [t._v('初始化我们想获得的信息')]),
                t._v(' '),
                a('div', { staticClass: 'language-python extra-class' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-python' } }, [
                    a('code', [
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v('# -*- coding: utf-8 -*-')]
                      ),
                      t._v('\n\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [
                          t._v(
                            '# Define here the models for your scraped items'
                          )
                        ]
                      ),
                      t._v('\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v('#')]
                      ),
                      t._v('\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v('# See documentation in:')]
                      ),
                      t._v('\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [
                          t._v(
                            '# https://docs.scrapy.org/en/latest/topics/items.html'
                          )
                        ]
                      ),
                      t._v('\n\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('import')]
                      ),
                      t._v(' scrapy\n\n\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('class')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token class-name' } },
                        [t._v('JdbookItem')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('scrapy'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('Item'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v('\n    '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v('# define the fields for your item here like:')]
                      ),
                      t._v('\n    '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v('# name = scrapy.Field()')]
                      ),
                      t._v('\n    '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v('# 书名，大分类，小分类，小分类页面url，')]
                      ),
                      t._v('\n    '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v('# 详情页面url，作者，出版社，出版时间，价格')]
                      ),
                      t._v('\n    name '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' scrapy'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('Field'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n    first_category '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' scrapy'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('Field'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n    second_category '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' scrapy'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('Field'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n    second_category_url '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' scrapy'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('Field'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n    cover_url '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' scrapy'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('Field'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n    detail_url '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' scrapy'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('Field'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n    author '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' scrapy'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('Field'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n    publisher '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' scrapy'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('Field'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n    pub_date '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' scrapy'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('Field'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n    price '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' scrapy'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('Field'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n\n')
                    ])
                  ])
                ]),
                a('h2', { attrs: { id: 'book-py' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#book-py' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' '),
                  a('strong', [t._v('book.py')])
                ]),
                t._v(' '),
                a('div', { staticClass: 'language-python extra-class' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-python' } }, [
                    a('code', [
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('def')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [t._v('parse')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' response'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n'),
                      a(
                        'span',
                        {
                          pre: !0,
                          attrs: { class: 'token triple-quoted-string string' }
                        },
                        [
                          t._v(
                            "'''\n这个方法实现利用xpath先获取所有一级分类的selector list\n再遍历一级分类获取所有二级分类的selector list\n遍历二级分类提取出url\n调用yield 生成scrapy.Request访问二级分类url,回调self.parse_bookpage\n'''"
                          )
                        ]
                      ),
                      t._v('\n\n')
                    ])
                  ])
                ]),
                a('p', [
                  a('img', {
                    attrs: {
                      src:
                        'https://img-blog.csdnimg.cn/20191007211948785.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70',
                      alt: '在这里插入图片描述'
                    }
                  })
                ]),
                t._v(' '),
                a('div', { staticClass: 'language-python extra-class' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-python' } }, [
                    a('code', [
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('def')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [t._v('parse_bookpage')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' response'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v('\n'),
                      a(
                        'span',
                        {
                          pre: !0,
                          attrs: { class: 'token triple-quoted-string string' }
                        },
                        [
                          t._v(
                            "'''\n这个方法实现获取当前二级分类下商品的所有页数，\n构造每一页的url,\n调用yield 生成scrapy.Request访问每一页url,回调self.parse_bookinfo\n'''"
                          )
                        ]
                      ),
                      t._v('\n\n')
                    ])
                  ])
                ]),
                a('p', [
                  a('img', {
                    attrs: {
                      src: 'https://img-blog.csdnimg.cn/20191007211958383.png',
                      alt: '在这里插入图片描述'
                    }
                  })
                ]),
                t._v(' '),
                a('div', { staticClass: 'language-python extra-class' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-python' } }, [
                    a('code', [
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('def')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [t._v('parse_bookinfo')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v('response'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v('\n'),
                      a(
                        'span',
                        {
                          pre: !0,
                          attrs: { class: 'token triple-quoted-string string' }
                        },
                        [
                          t._v(
                            "'''\n这个方法实现获取每本书的详细信息\n实例化item\n其中由于价格是异步加载的，\n分析每个商品价格的接口url由'https://p.3.cn/prices/mgets?skuIds=J_' + skuid组成，skuid即data-sku\n再调用yield 生成scrapy.Request访问价格url,回调parse_bookprice\n'''"
                          )
                        ]
                      ),
                      t._v('\n')
                    ])
                  ])
                ]),
                a('p', [
                  a('img', {
                    attrs: {
                      src:
                        'https://img-blog.csdnimg.cn/20191007212121783.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70',
                      alt: '在这里插入图片描述'
                    }
                  })
                ]),
                t._v(' '),
                a('div', { staticClass: 'language-python extra-class' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-python' } }, [
                    a('code', [
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('def')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [t._v('parse_bookprice')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' response'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v('\n '),
                      a(
                        'span',
                        {
                          pre: !0,
                          attrs: { class: 'token triple-quoted-string string' }
                        },
                        [t._v("'''\n 获取价格，\n yield item\n '''")]
                      ),
                      t._v('\n')
                    ])
                  ])
                ]),
                a('p', [
                  a('img', {
                    attrs: {
                      src: 'https://img-blog.csdnimg.cn/20191007212027155.png',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  t._v(' '),
                  a('strong', [t._v('book.py完整代码')])
                ]),
                t._v(' '),
                a('div', { staticClass: 'language-python extra-class' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-python' } }, [
                    a('code', [
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v('# -*- coding: utf-8 -*-')]
                      ),
                      t._v('\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('import')]
                      ),
                      t._v(' scrapy\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('import')]
                      ),
                      t._v(' json\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('from')]
                      ),
                      t._v(' jdbook'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('items '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('import')]
                      ),
                      t._v(' JdbookItem\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('from')]
                      ),
                      t._v(' scrapy_redis'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('spiders '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('import')]
                      ),
                      t._v(' RedisSpider\n\n\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('class')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token class-name' } },
                        [t._v('BookSpider')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('RedisSpider'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v('\n    name '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'book'")
                      ]),
                      t._v('\n    allowed_domains '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('[')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'jd.com'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'p.3.cn'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(']')]
                      ),
                      t._v('\n    redis_key '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'book'")
                      ]),
                      t._v('\n\n    '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('def')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [t._v('parse')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' response'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v('\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v('#get first_category xpath selector list')]
                      ),
                      t._v('\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [
                          t._v(
                            '# fc_list = response.xpath(\'//*[@id="booksort"]/div[2]/dl/dt/a\')'
                          )
                        ]
                      ),
                      t._v('\n        fc_list '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' response'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('xpath'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v('\'//*[@id="booksort"]/div[2]/dl/dt[1]/a\'')
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('for')]
                      ),
                      t._v(' i '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('in')]
                      ),
                      t._v(' fc_list'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v('\n            '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [
                          t._v(
                            "# traverse first_category list ,get each first_category's name , url"
                          )
                        ]
                      ),
                      t._v('\n            '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v('# and second_category list')]
                      ),
                      t._v('\n            fc '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' i'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('xpath'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'./text()'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('get'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n            sc_list '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' i'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('xpath'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'../following-sibling::dd[1]/em/a'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n            '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('for')]
                      ),
                      t._v(' n '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('in')]
                      ),
                      t._v(' sc_list'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v('\n                '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [
                          t._v(
                            "# traverse second_category list,get each second_category's name,url"
                          )
                        ]
                      ),
                      t._v('\n                info '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('{')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('}')]
                      ),
                      t._v('\n                info'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('[')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'first_category'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(']')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' fc\n                info'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('[')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'second_category'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(']')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('xpath'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'./text()'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('get'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n                info'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('[')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'second_category_url'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(']')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'https:'")
                      ]),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('+')]
                      ),
                      t._v(' n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('xpath'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'./@href'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('get'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n            \n                '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [
                          t._v(
                            '# yield request second_category_url, callback=self.parse_bookinfo ,'
                          )
                        ]
                      ),
                      t._v('\n                '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v("# get each second_category's books info")]
                      ),
                      t._v('\n                '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('yield')]
                      ),
                      t._v(' scrapy'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('Request'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('\n                    info'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('[')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'second_category_url'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(']')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v('\n                    callback '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('parse_bookpage'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v('\n                    meta '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('{')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'meta'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v('info'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('}')]
                      ),
                      t._v('\n                '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n\n    '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('def')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [t._v('parse_bookpage')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' response'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v('\n        info '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' response'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('meta'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('[')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'meta'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(']')]
                      ),
                      t._v('\n        lastpage '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' response'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('xpath'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v('\'//*[@id="J_bottomPage"]/span[1]/a[9]/text()\'')
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('get'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n        \n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('for')]
                      ),
                      t._v(' i '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('in')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token builtin' } },
                        [t._v('range')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [
                        t._v('1')
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token builtin' } },
                        [t._v('int')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('lastpage'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('+')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [
                        t._v('1')
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v('\n            url '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'https://list.jd.com'")
                      ]),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('+')]
                      ),
                      t._v(' response'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('xpath'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v('\'//*[@id="J_bottomPage"]/span[1]/a[2]/@href\'')
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('get'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n            url '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' url'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('replace'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'page=1'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'page='")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('+')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token builtin' } },
                        [t._v('str')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('i'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n            \n            '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('yield')]
                      ),
                      t._v(' scrapy'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('Request'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('\n                url'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' \n                callback '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('parse_bookinfo'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v('\n                meta'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('{')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'meta'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v('info'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('}')]
                      ),
                      t._v('\n            '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v(' \n\n    '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v('# parse_bookinfo')]
                      ),
                      t._v('\n    '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('def')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [t._v('parse_bookinfo')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v('response'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v('\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v('# get response.meta')]
                      ),
                      t._v('\n        info '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' response'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('meta'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('[')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'meta'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(']')]
                      ),
                      t._v('\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v('# get book xpath selector list')]
                      ),
                      t._v('\n        book_list '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' response'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('xpath'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v('\'//*[@id="plist"]/ul/li/div\'')
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('for')]
                      ),
                      t._v(' i '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('in')]
                      ),
                      t._v(' book_list'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v('\n            item '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' JdbookItem'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n            item'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('[')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'first_category'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(']')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' info'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('[')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'first_category'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(']')]
                      ),
                      t._v('\n            item'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('[')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'second_category'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(']')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' info'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('[')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'second_category'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(']')]
                      ),
                      t._v('\n            item'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('[')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'second_category_url'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(']')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' info'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('[')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'second_category_url'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(']')]
                      ),
                      t._v('\n            item'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('[')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'name'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(']')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' i'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('xpath'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'./div[3]/a/em/text()'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('get'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('strip'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n            item'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('[')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'detail_url'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(']')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'https:'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('+')]
                      ),
                      t._v(' i'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('xpath'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'./div[1]/a/@href'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('get'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n            item'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('[')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'author'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(']')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' i'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('xpath'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'./div[4]/span[1]/span/a/text()'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('get'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n            item'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('[')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'publisher'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(']')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v('i'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('xpath'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'./div[4]/span[2]/a/text()'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('get'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n            item'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('[')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'pub_date'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(']')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' i'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('xpath'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'./div[4]/span[3]/text()'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('get'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('strip'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n            skuid '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' i'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('xpath'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'./@data-sku'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('get'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n            \n            url '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'https://p.3.cn/prices/mgets?skuIds=J_'")
                      ]),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('+')]
                      ),
                      t._v(' skuid\n\n            '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('yield')]
                      ),
                      t._v(' scrapy'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('Request'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('\n                url'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' \n                callback '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('parse_bookprice'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v('\n                meta '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('{')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'meta'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v('item'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('}')]
                      ),
                      t._v('\n                '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n\n\n    '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('def')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [t._v('parse_bookprice')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' response'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v('\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v('# get price')]
                      ),
                      t._v('\n        item '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' response'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('meta'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('[')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'meta'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(']')]
                      ),
                      t._v('\n        data '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' json'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('loads'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('response'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('text'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n        item'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('[')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'price'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(']')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' data'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('[')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'0'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(']')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('[')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'op'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(']')]
                      ),
                      t._v('\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('yield')]
                      ),
                      t._v(' item\n\n')
                    ])
                  ])
                ]),
                a('p', [
                  t._v(
                    '开3个终端模拟分布式，吃个饭的时间，爬了25000条，小说分类还没爬完，上个成果图，后续可以将redis中的数据写入到MySQL、Mongodb中。'
                  )
                ]),
                t._v(' '),
                a('p', [
                  a('img', {
                    attrs: {
                      src:
                        'https://img-blog.csdnimg.cn/20191007212143360.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70',
                      alt: '在这里插入图片描述'
                    }
                  })
                ]),
                t._v(' '),
                a('h2', { attrs: { id: '完整代码' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#完整代码' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' 完整代码')
                ]),
                t._v(' '),
                a('p', [
                  a(
                    'a',
                    {
                      attrs: {
                        href:
                          'https://github.com/duziea/Python-imitate-login/tree/master/JDmail/book/jdbook',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [
                      t._v(
                        'https://github.com/duziea/Python-imitate-login/tree/master/JDmail/book/jdbook'
                      ),
                      a('OutboundLink')
                    ],
                    1
                  )
                ])
              ]
            )
          },
          [],
          !1,
          null,
          null,
          null
        )
      s.default = e.exports
    }
  }
])
