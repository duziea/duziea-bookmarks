;(window.webpackJsonp = window.webpackJsonp || []).push([
  [21],
  {
    221: function(t, s, a) {
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
                a('h1', { attrs: { id: 'scrapy-redis源码解读' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#scrapy-redis源码解读' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' scrapy-redis源码解读')
                ]),
                t._v(' '),
                a('h2', { attrs: { id: '目录' } }, [
                  a(
                    'a',
                    { staticClass: 'header-anchor', attrs: { href: '#目录' } },
                    [t._v('#')]
                  ),
                  t._v(' 目录')
                ]),
                t._v(' '),
                a('p', [
                  a('img', {
                    attrs: {
                      src:
                        'https://img-blog.csdnimg.cn/20191001120719218.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70',
                      alt: '在这里插入图片描述'
                    }
                  })
                ]),
                t._v(' '),
                a('h2', { attrs: { id: 'init-py' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#init-py' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' init.py')
                ]),
                t._v(' '),
                a('p', [
                  a('img', {
                    attrs: {
                      src:
                        'https://img-blog.csdnimg.cn/20191001120741290.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  t._v(
                    '\n从connect.py import 了get_redis,get_redis_from_settings，这样可以在导入scrapy_redis时自动导入这两个方法，还有作者，email和版本'
                  )
                ]),
                t._v(' '),
                a('h2', { attrs: { id: 'connection-py' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#connection-py' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' connection.py')
                ]),
                t._v(' '),
                a('div', { staticClass: 'language-python extra-class' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-python' } }, [
                    a('code', [
                      t._v('mport six\n\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('from')]
                      ),
                      t._v(' scrapy'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('utils'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('misc '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('import')]
                      ),
                      t._v(' load_object\n\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('from')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('import')]
                      ),
                      t._v(' defaults\n\n\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [
                          t._v(
                            "# Shortcut maps 'setting name' -> 'parmater name'."
                          )
                        ]
                      ),
                      t._v('\nSETTINGS_PARAMS_MAP '),
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
                        t._v("'REDIS_URL'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'url'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v('\n    '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'REDIS_HOST'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'host'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v('\n    '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'REDIS_PORT'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'port'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v('\n    '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'REDIS_ENCODING'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'encoding'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v('\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('}')]
                      ),
                      t._v('\n\n\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('def')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [t._v('get_redis_from_settings')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('settings'),
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
                        {
                          pre: !0,
                          attrs: { class: 'token triple-quoted-string string' }
                        },
                        [
                          t._v(
                            '"""Returns a redis client instance from given Scrapy settings object.\n\n    This function uses ``get_client`` to instantiate the client and uses\n    ``defaults.REDIS_PARAMS`` global as defaults values for the parameters. You\n    can override them using the ``REDIS_PARAMS`` setting.\n\n    Parameters\n    ----------\n    settings : Settings\n        A scrapy settings object. See the supported settings below.\n\n    Returns\n    -------\n    server\n        Redis client instance.\n\n    Other Parameters\n    ----------------\n    REDIS_URL : str, optional\n        Server connection URL.\n    REDIS_HOST : str, optional\n        Server host.\n    REDIS_PORT : str, optional\n        Server port.\n    REDIS_ENCODING : str, optional\n        Data encoding.\n    REDIS_PARAMS : dict, optional\n        Additional client parameters.\n\n    """'
                          )
                        ]
                      ),
                      t._v('\n    params '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' defaults'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('REDIS_PARAMS'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('copy'),
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
                      t._v('\n    params'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('update'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('settings'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('getdict'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'REDIS_PARAMS'")
                      ]),
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
                      t._v('\n    '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v('# XXX: Deprecate REDIS_* settings.')]
                      ),
                      t._v('\n    '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('for')]
                      ),
                      t._v(' source'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' dest '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('in')]
                      ),
                      t._v(' SETTINGS_PARAMS_MAP'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('items'),
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
                        [t._v(':')]
                      ),
                      t._v('\n        val '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' settings'),
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
                      t._v('source'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('if')]
                      ),
                      t._v(' val'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v('\n            params'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('[')]
                      ),
                      t._v('dest'),
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
                      t._v(' val\n\n    '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v('# Allow ``redis_cls`` to be a path to a class.')]
                      ),
                      t._v('\n    '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('if')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token builtin' } },
                        [t._v('isinstance')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('params'),
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
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'redis_cls'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' six'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('string_types'),
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
                      t._v('\n        params'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('[')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'redis_cls'")
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
                      t._v(' load_object'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('params'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('[')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'redis_cls'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(']')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n\n    '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('return')]
                      ),
                      t._v(' get_redis'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('**')]
                      ),
                      t._v('params'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n\n\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v('# Backwards compatible alias.')]
                      ),
                      t._v('\nfrom_settings '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' get_redis_from_settings\n\n\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('def')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [t._v('get_redis')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('**')]
                      ),
                      t._v('kwargs'),
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
                        {
                          pre: !0,
                          attrs: { class: 'token triple-quoted-string string' }
                        },
                        [
                          t._v(
                            '"""Returns a redis client instance.\n\n    Parameters\n    ----------\n    redis_cls : class, optional\n        Defaults to ``redis.StrictRedis``.\n    url : str, optional\n        If given, ``redis_cls.from_url`` is used to instantiate the class.\n    **kwargs\n        Extra parameters to be passed to the ``redis_cls`` class.\n\n    Returns\n    -------\n    server\n        Redis client instance.\n\n    """'
                          )
                        ]
                      ),
                      t._v('\n    redis_cls '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' kwargs'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('pop'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'redis_cls'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' defaults'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('REDIS_CLS'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n    url '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' kwargs'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('pop'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'url'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token boolean' } },
                        [t._v('None')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n    '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('if')]
                      ),
                      t._v(' url'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v('\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('return')]
                      ),
                      t._v(' redis_cls'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('from_url'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('url'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('**')]
                      ),
                      t._v('kwargs'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n    '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('else')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v('\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('return')]
                      ),
                      t._v(' redis_cls'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('**')]
                      ),
                      t._v('kwargs'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n\n')
                    ])
                  ])
                ]),
                a('p', [t._v('三个import')]),
                t._v(' '),
                a('ul', [
                  a('li', [
                    a('p', [t._v('import six')]),
                    t._v(' '),
                    a('p', [
                      t._v(
                        '用与兼容python2与python3的模块，有了它，代码无序改动就能在python3或2上run起来，它的原理是重定义了python2、3中有差异的函数。'
                      )
                    ])
                  ]),
                  t._v(' '),
                  a('li', [
                    a('p', [t._v('from scrapy.utils.misc import load_object')]),
                    t._v(' '),
                    a('div', { staticClass: 'language-python extra-class' }, [
                      a(
                        'pre',
                        { pre: !0, attrs: { class: 'language-python' } },
                        [
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
                              [t._v('load_object')]
                            ),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('(')]
                            ),
                            t._v('path'),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(')')]
                            ),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(':')]
                            ),
                            t._v('\n    '),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: {
                                  class: 'token triple-quoted-string string'
                                }
                              },
                              [
                                t._v(
                                  '"""Load an object given its absolute object path, and return it.\n\n    object can be a class, function, variable or an instance.\n    path ie: \'scrapy.downloadermiddlewares.redirect.RedirectMiddleware\'\n    """'
                                )
                              ]
                            ),
                            t._v('\n\n    '),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token keyword' } },
                              [t._v('try')]
                            ),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(':')]
                            ),
                            t._v('\n        dot '),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token operator' } },
                              [t._v('=')]
                            ),
                            t._v(' path'),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('.')]
                            ),
                            t._v('rindex'),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('(')]
                            ),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token string' } },
                              [t._v("'.'")]
                            ),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(')')]
                            ),
                            t._v('\n    '),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token keyword' } },
                              [t._v('except')]
                            ),
                            t._v(' ValueError'),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(':')]
                            ),
                            t._v('\n        '),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token keyword' } },
                              [t._v('raise')]
                            ),
                            t._v(' ValueError'),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('(')]
                            ),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token string' } },
                              [
                                t._v(
                                  '"Error loading object \'%s\': not a full path"'
                                )
                              ]
                            ),
                            t._v(' '),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token operator' } },
                              [t._v('%')]
                            ),
                            t._v(' path'),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(')')]
                            ),
                            t._v('\n\n    module'),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(',')]
                            ),
                            t._v(' name '),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token operator' } },
                              [t._v('=')]
                            ),
                            t._v(' path'),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('[')]
                            ),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(':')]
                            ),
                            t._v('dot'),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(']')]
                            ),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(',')]
                            ),
                            t._v(' path'),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('[')]
                            ),
                            t._v('dot'),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token operator' } },
                              [t._v('+')]
                            ),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token number' } },
                              [t._v('1')]
                            ),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(':')]
                            ),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(']')]
                            ),
                            t._v('\n    mod '),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token operator' } },
                              [t._v('=')]
                            ),
                            t._v(' import_module'),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('(')]
                            ),
                            t._v('module'),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(')')]
                            ),
                            t._v('\n\n    '),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token keyword' } },
                              [t._v('try')]
                            ),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(':')]
                            ),
                            t._v('\n        obj '),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token operator' } },
                              [t._v('=')]
                            ),
                            t._v(' '),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token builtin' } },
                              [t._v('getattr')]
                            ),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('(')]
                            ),
                            t._v('mod'),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(',')]
                            ),
                            t._v(' name'),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(')')]
                            ),
                            t._v('\n    '),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token keyword' } },
                              [t._v('except')]
                            ),
                            t._v(' AttributeError'),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(':')]
                            ),
                            t._v('\n        '),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token keyword' } },
                              [t._v('raise')]
                            ),
                            t._v(' NameError'),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('(')]
                            ),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token string' } },
                              [
                                t._v(
                                  "\"Module '%s' doesn't define any object named '%s'\""
                                )
                              ]
                            ),
                            t._v(' '),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token operator' } },
                              [t._v('%')]
                            ),
                            t._v(' '),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('(')]
                            ),
                            t._v('module'),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(',')]
                            ),
                            t._v(' name'),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(')')]
                            ),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(')')]
                            ),
                            t._v('\n\n    '),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token keyword' } },
                              [t._v('return')]
                            ),
                            t._v(' obj\n')
                          ])
                        ]
                      )
                    ]),
                    a('p', [t._v('接收一个对象的绝对路径，返回这个对象')]),
                    t._v(' '),
                    a('p', [t._v('例如：')]),
                    t._v(' '),
                    a('div', { staticClass: 'language-python extra-class' }, [
                      a(
                        'pre',
                        { pre: !0, attrs: { class: 'language-python' } },
                        [
                          a('code', [
                            t._v(' path '),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token operator' } },
                              [t._v('=')]
                            ),
                            t._v(' '),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token string' } },
                              [
                                t._v(
                                  "'scrapy.downloadermiddlewares.redirect.RedirectMiddleware'"
                                )
                              ]
                            ),
                            t._v('\n    obj '),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token operator' } },
                              [t._v('=')]
                            ),
                            t._v(' load_object'),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('(')]
                            ),
                            t._v('path'),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(')')]
                            ),
                            t._v('\n    '),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token keyword' } },
                              [t._v('print')]
                            ),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('(')]
                            ),
                            t._v('obj'),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(')')]
                            ),
                            t._v('\n')
                          ])
                        ]
                      )
                    ])
                  ])
                ]),
                t._v(' '),
                a('p', [
                  a('img', {
                    attrs: {
                      src: 'https://img-blog.csdnimg.cn/20191001120837884.png',
                      alt: '在这里插入图片描述'
                    }
                  })
                ]),
                t._v(' '),
                a('ul', [
                  a('li', [
                    a('p', [t._v('from . import defaults')]),
                    t._v(' '),
                    a('p', [t._v('导入default.py')]),
                    t._v(' '),
                    a('div', { staticClass: 'language-python extra-class' }, [
                      a(
                        'pre',
                        { pre: !0, attrs: { class: 'language-python' } },
                        [
                          a('code', [
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token comment' } },
                              [t._v('#defaults.py')]
                            ),
                            t._v('\n'),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token keyword' } },
                              [t._v('import')]
                            ),
                            t._v(' redis\n\n\n'),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token comment' } },
                              [t._v('# For standalone use.')]
                            ),
                            t._v('\nDUPEFILTER_KEY '),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token operator' } },
                              [t._v('=')]
                            ),
                            t._v(' '),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token string' } },
                              [t._v("'dupefilter:%(timestamp)s'")]
                            ),
                            t._v('\n\nPIPELINE_KEY '),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token operator' } },
                              [t._v('=')]
                            ),
                            t._v(' '),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token string' } },
                              [t._v("'%(spider)s:items'")]
                            ),
                            t._v('\n\nREDIS_CLS '),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token operator' } },
                              [t._v('=')]
                            ),
                            t._v(' redis'),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('.')]
                            ),
                            t._v('StrictRedis\nREDIS_ENCODING '),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token operator' } },
                              [t._v('=')]
                            ),
                            t._v(' '),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token string' } },
                              [t._v("'utf-8'")]
                            ),
                            t._v('\n'),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token comment' } },
                              [t._v('# Sane connection defaults.')]
                            ),
                            t._v('\nREDIS_PARAMS '),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token operator' } },
                              [t._v('=')]
                            ),
                            t._v(' '),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('{')]
                            ),
                            t._v('\n    '),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token string' } },
                              [t._v("'socket_timeout'")]
                            ),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(':')]
                            ),
                            t._v(' '),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token number' } },
                              [t._v('30')]
                            ),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(',')]
                            ),
                            t._v('\n    '),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token string' } },
                              [t._v("'socket_connect_timeout'")]
                            ),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(':')]
                            ),
                            t._v(' '),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token number' } },
                              [t._v('30')]
                            ),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(',')]
                            ),
                            t._v('\n    '),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token string' } },
                              [t._v("'retry_on_timeout'")]
                            ),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(':')]
                            ),
                            t._v(' '),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token boolean' } },
                              [t._v('True')]
                            ),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(',')]
                            ),
                            t._v('\n    '),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token string' } },
                              [t._v("'encoding'")]
                            ),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(':')]
                            ),
                            t._v(' REDIS_ENCODING'),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(',')]
                            ),
                            t._v('\n'),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('}')]
                            ),
                            t._v('\n\nSCHEDULER_QUEUE_KEY '),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token operator' } },
                              [t._v('=')]
                            ),
                            t._v(' '),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token string' } },
                              [t._v("'%(spider)s:requests'")]
                            ),
                            t._v('\nSCHEDULER_QUEUE_CLASS '),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token operator' } },
                              [t._v('=')]
                            ),
                            t._v(' '),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token string' } },
                              [t._v("'scrapy_redis.queue.PriorityQueue'")]
                            ),
                            t._v('\nSCHEDULER_DUPEFILTER_KEY '),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token operator' } },
                              [t._v('=')]
                            ),
                            t._v(' '),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token string' } },
                              [t._v("'%(spider)s:dupefilter'")]
                            ),
                            t._v('\nSCHEDULER_DUPEFILTER_CLASS '),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token operator' } },
                              [t._v('=')]
                            ),
                            t._v(' '),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token string' } },
                              [t._v("'scrapy_redis.dupefilter.RFPDupeFilter'")]
                            ),
                            t._v('\n\nSTART_URLS_KEY '),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token operator' } },
                              [t._v('=')]
                            ),
                            t._v(' '),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token string' } },
                              [t._v("'%(name)s:start_urls'")]
                            ),
                            t._v('\nSTART_URLS_AS_SET '),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token operator' } },
                              [t._v('=')]
                            ),
                            t._v(' '),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token boolean' } },
                              [t._v('False')]
                            ),
                            t._v('\n\n')
                          ])
                        ]
                      )
                    ]),
                    a('p', [t._v('定义了一些默认的参数，方便调用')])
                  ])
                ]),
                t._v(' '),
                a('p', [t._v('SETTINGS_PARAMS_MAP 映射了redis的setting参数')]),
                t._v(' '),
                a('h3', { attrs: { id: '两个方法' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#两个方法' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' 两个方法')
                ]),
                t._v(' '),
                a('ol', [
                  a('li', [
                    a('p', [t._v('def get_redis_from_settings(settings)')]),
                    t._v(' '),
                    a('p', [
                      t._v(
                        'copy一个defaults.py中的REDIS_PARAMS作为params(这里应该是浅拷贝)'
                      )
                    ]),
                    t._v(' '),
                    a('p', [
                      t._v(
                        '获取default.py中redis的默认连接参数， 获取setting中用户设置的参数替换掉默认(如果有的话)。'
                      )
                    ]),
                    t._v(' '),
                    a('p', [
                      t._v('使用load_object获取设置的redis_cls，存入params')
                    ]),
                    t._v(' '),
                    a('p', [t._v('返回get_redis(**params)')])
                  ]),
                  t._v(' '),
                  a('li', [
                    a('p', [t._v('def get_redis(**kwargs)')]),
                    t._v(' '),
                    a('p', [
                      t._v(
                        "通过redis_cls = kwargs.pop('redis_cls', defaults.REDIS_CLS)获取用户设置的redis_cls值，默认为dafault.py的REDIS_CLS值"
                      )
                    ]),
                    t._v(' '),
                    a('p', [
                      t._v(
                        '获取url值，默认为none，若有则通过url连接redis，若无，则通过参数连接。'
                      )
                    ]),
                    t._v(' '),
                    a('p', [t._v('返回redis_cls()，即连接redis实例')])
                  ])
                ]),
                t._v(' '),
                a('h2', { attrs: { id: 'dupefilter-py' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#dupefilter-py' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' dupefilter.py')
                ]),
                t._v(' '),
                a('p', [t._v('代码太长，拆开来看')]),
                t._v(' '),
                a('div', { staticClass: 'language-python extra-class' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-python' } }, [
                    a('code', [
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('import')]
                      ),
                      t._v(' logging\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('import')]
                      ),
                      t._v(' time\n\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('from')]
                      ),
                      t._v(' scrapy'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('dupefilters '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('import')]
                      ),
                      t._v(' BaseDupeFilter\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('from')]
                      ),
                      t._v(' scrapy'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('utils'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('request '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('import')]
                      ),
                      t._v(' request_fingerprint\n\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('from')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('import')]
                      ),
                      t._v(' defaults\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('from')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('connection '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('import')]
                      ),
                      t._v(' get_redis_from_settings\n')
                    ])
                  ])
                ]),
                a('p', [t._v('import logging、time模块用来输出日志')]),
                t._v(' '),
                a('p', [
                  t._v(
                    'import BaseDupeFilter，request_fingerprint，用于重写RFPDupeFilter()类'
                  )
                ]),
                t._v(' '),
                a('p', [
                  t._v(
                    '其中request_fingerprint使用sha1算法将request的method，url，body，headers加密为一个字符串，通过这个加密后的字符串来判断request请求是否重复，值得一提的是，使用了canonicalize_url对url先进行了先规范化后再加密，canonicalize_url的使用urllib.parse解析url再规范化，具体操作表现为'
                  )
                ]),
                t._v(' '),
                a('p', [t._v('对query arguments进行排序，例如：')]),
                t._v(' '),
                a('div', { staticClass: 'language-shell extra-class' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-shell' } }, [
                    a('code', [
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('>>')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('>')]
                      ),
                      t._v(' w3lib.url.canonicalize_url'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'http://www.example.com/do?c=3&b=5&b=2&a=50'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n    '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'http://www.example.com/do?a=50&b=2&b=5&c=3'")
                      ]),
                      t._v('\n')
                    ])
                  ])
                ]),
                a('p', [t._v('将path转为utf-8编码，例如：')]),
                t._v(' '),
                a('div', { staticClass: 'language-shell extra-class' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-shell' } }, [
                    a('code', [
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('>>')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('>')]
                      ),
                      t._v('w3lib.url.canonicalize_url'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('u'),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'http://www.example.com/r"),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token entity', title: '\\u00e9' }
                          },
                          [t._v('\\u00e9')]
                        ),
                        t._v('sum'),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token entity', title: '\\u00e9' }
                          },
                          [t._v('\\u00e9')]
                        ),
                        t._v("'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n    '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'http://www.example.com/r%C3%A9sum%C3%A9'")
                      ]),
                      t._v('\n')
                    ])
                  ])
                ]),
                a('p', [t._v('看看这个RFPDupeFilter()类')]),
                t._v(' '),
                a('p', [
                  t._v(
                    '首先初始化需要的参数有redis连接实例，key为redis的key，debug为调试模式'
                  )
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
                        [t._v('__init__')]
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
                      t._v(' server'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' key'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' debug'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token boolean' } },
                        [t._v('False')]
                      ),
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
                        {
                          pre: !0,
                          attrs: { class: 'token triple-quoted-string string' }
                        },
                        [
                          t._v(
                            '"""Initialize the duplicates filter.\n\n        Parameters\n        ----------\n        server : redis.StrictRedis\n            The redis server instance.\n        key : str\n            Redis key Where to store fingerprints.\n        debug : bool, optional\n            Whether to log filtered requests.\n\n        """'
                          )
                        ]
                      ),
                      t._v('\n        self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('server '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' server\n        self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('key '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' key\n        self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('debug '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' debug\n        self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('logdupes '),
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
                      t._v('\n')
                    ])
                  ])
                ]),
                a('p', [
                  t._v(
                    '定义了两个类方法，从setting读取配置，key为时间戳，返回RFPDupeFilter()实例。'
                  )
                ]),
                t._v(' '),
                a('div', { staticClass: 'language-python extra-class' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-python' } }, [
                    a('code', [
                      t._v('\t'),
                      a(
                        'span',
                        {
                          pre: !0,
                          attrs: {
                            class: 'token decorator annotation punctuation'
                          }
                        },
                        [t._v('@classmethod')]
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
                        [t._v('from_settings')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('cls'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' settings'),
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
                        {
                          pre: !0,
                          attrs: { class: 'token triple-quoted-string string' }
                        },
                        [
                          t._v(
                            '"""Returns an instance from given settings.\n\n        This uses by default the key ``dupefilter:<timestamp>``. When using the\n        ``scrapy_redis.scheduler.Scheduler`` class, this method is not used as\n        it needs to pass the spider name in the key.\n\n        Parameters\n        ----------\n        settings : scrapy.settings.Settings\n\n        Returns\n        -------\n        RFPDupeFilter\n            A RFPDupeFilter instance.\n        """'
                          )
                        ]
                      ),
                      t._v('\n        server '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' get_redis_from_settings'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('settings'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [
                          t._v(
                            '# XXX: This creates one-time key. needed to support to use this'
                          )
                        ]
                      ),
                      t._v('\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [
                          t._v(
                            "# class as standalone dupefilter with scrapy's default scheduler"
                          )
                        ]
                      ),
                      t._v('\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [
                          t._v(
                            "# if scrapy passes spider on open() method this wouldn't be needed"
                          )
                        ]
                      ),
                      t._v('\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [
                          t._v(
                            '# TODO: Use SCRAPY_JOB env as default and fallback to timestamp.'
                          )
                        ]
                      ),
                      t._v('\n        key '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' defaults'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('DUPEFILTER_KEY '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('%')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('{')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'timestamp'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v(' '),
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
                      t._v('time'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('time'),
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
                        [t._v(')')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('}')]
                      ),
                      t._v('\n        debug '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' settings'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('getbool'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'DUPEFILTER_DEBUG'")
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
                        [t._v('return')]
                      ),
                      t._v(' cls'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('server'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' key'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v('key'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' debug'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v('debug'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n\n    @'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token builtin' } },
                        [t._v('classmethod')]
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
                        [t._v('from_crawler')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('cls'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' crawler'),
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
                        {
                          pre: !0,
                          attrs: { class: 'token triple-quoted-string string' }
                        },
                        [
                          t._v(
                            '"""Returns instance from crawler.\n\n        Parameters\n        ----------\n        crawler : scrapy.crawler.Crawler\n\n        Returns\n        -------\n        RFPDupeFilter\n            Instance of RFPDupeFilter.\n\n        """'
                          )
                        ]
                      ),
                      t._v('\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('return')]
                      ),
                      t._v(' cls'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('from_settings'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('crawler'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('settings'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n')
                    ])
                  ])
                ]),
                a('p', [
                  t._v(
                    '定义request_seen 方法通过redis的sadd方法，添加key，fp，若已存在则返回0'
                  )
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
                        [t._v('request_seen')]
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
                      t._v(' request'),
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
                        {
                          pre: !0,
                          attrs: { class: 'token triple-quoted-string string' }
                        },
                        [
                          t._v(
                            '"""Returns True if request was already seen.\n\n        Parameters\n        ----------\n        request : scrapy.http.Request\n\n        Returns\n        -------\n        bool\n\n        """'
                          )
                        ]
                      ),
                      t._v('\n        fp '),
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
                      t._v('request_fingerprint'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('request'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [
                          t._v(
                            '# This returns the number of values added, zero if already exists.'
                          )
                        ]
                      ),
                      t._v('\n        added '),
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
                      t._v('server'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('sadd'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('key'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' fp'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('return')]
                      ),
                      t._v(' added '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('==')]
                      ),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [
                        t._v('0')
                      ]),
                      t._v('\n')
                    ])
                  ])
                ]),
                a('p', [
                  t._v(
                    '定义了request_fingerprint ，接收request，返回之前import的return request_fingerprint'
                  )
                ]),
                t._v(' '),
                a('p', [
                  t._v('定义close，关闭时删除数据，用于被scrapy的scheduler调用')
                ]),
                t._v(' '),
                a('p', [t._v('定义clear，调用redis的delete删除通过key删除值')]),
                t._v(' '),
                a('p', [t._v('定义log,用于打印debug日志')]),
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
                        [t._v('request_fingerprint')]
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
                      t._v(' request'),
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
                        {
                          pre: !0,
                          attrs: { class: 'token triple-quoted-string string' }
                        },
                        [
                          t._v(
                            '"""Returns a fingerprint for a given request.\n\n        Parameters\n        ----------\n        request : scrapy.http.Request\n\n        Returns\n        -------\n        str\n\n        """'
                          )
                        ]
                      ),
                      t._v('\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('return')]
                      ),
                      t._v(' request_fingerprint'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('request'),
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
                        [t._v('close')]
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
                      t._v(' reason'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("''")
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
                      t._v('\n        '),
                      a(
                        'span',
                        {
                          pre: !0,
                          attrs: { class: 'token triple-quoted-string string' }
                        },
                        [
                          t._v(
                            '"""Delete data on close. Called by Scrapy\'s scheduler.\n\n        Parameters\n        ----------\n        reason : str, optional\n\n        """'
                          )
                        ]
                      ),
                      t._v('\n        self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('clear'),
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
                        [t._v('clear')]
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
                        {
                          pre: !0,
                          attrs: { class: 'token triple-quoted-string string' }
                        },
                        [t._v('"""Clears fingerprints data."""')]
                      ),
                      t._v('\n        self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('server'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('delete'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('key'),
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
                        [t._v('log')]
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
                      t._v(' request'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' spider'),
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
                        {
                          pre: !0,
                          attrs: { class: 'token triple-quoted-string string' }
                        },
                        [
                          t._v(
                            '"""Logs given request.\n\n        Parameters\n        ----------\n        request : scrapy.http.Request\n        spider : scrapy.spiders.Spider\n\n        """'
                          )
                        ]
                      ),
                      t._v('\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('if')]
                      ),
                      t._v(' self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('debug'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v('\n            msg '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v('"Filtered duplicate request: %(request)s"')
                      ]),
                      t._v('\n            self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('logger'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('debug'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('msg'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('{')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'request'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v(' request'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('}')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' extra'),
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
                        t._v("'spider'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v(' spider'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('}')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('elif')]
                      ),
                      t._v(' self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('logdupes'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v('\n            msg '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v('"Filtered duplicate request %(request)s"')
                      ]),
                      t._v('\n                   '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v('" - no more duplicates will be shown"')
                      ]),
                      t._v('\n                   '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v('" (see DUPEFILTER_DEBUG to show all duplicates)"')
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n            self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('logger'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('debug'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('msg'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('{')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'request'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v(' request'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('}')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' extra'),
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
                        t._v("'spider'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v(' spider'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('}')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n            self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('logdupes '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token boolean' } },
                        [t._v('False')]
                      ),
                      t._v('\n')
                    ])
                  ])
                ]),
                a('h2', { attrs: { id: 'picklecompat-py' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#picklecompat-py' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' picklecompat.py')
                ]),
                t._v(' '),
                a('div', { staticClass: 'language-python extra-class' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-python' } }, [
                    a('code', [
                      a(
                        'span',
                        {
                          pre: !0,
                          attrs: { class: 'token triple-quoted-string string' }
                        },
                        [
                          t._v(
                            '"""A pickle wrapper module with protocol=-1 by default."""'
                          )
                        ]
                      ),
                      t._v('\n\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('try')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v('\n    '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('import')]
                      ),
                      t._v(' cPickle '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('as')]
                      ),
                      t._v(' pickle  '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v('# PY2')]
                      ),
                      t._v('\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('except')]
                      ),
                      t._v(' ImportError'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v('\n    '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('import')]
                      ),
                      t._v(' pickle\n\n\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('def')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [t._v('loads')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('s'),
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
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('return')]
                      ),
                      t._v(' pickle'),
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
                      t._v('s'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n\n\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('def')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [t._v('dumps')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('obj'),
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
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('return')]
                      ),
                      t._v(' pickle'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('dumps'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('obj'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' protocol'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('-')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [
                        t._v('1')
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n')
                    ])
                  ])
                ]),
                a('p', [
                  t._v(
                    '类似json，将python obj转为字符，将字符转为obj，这里为什么不用json我也不懂？'
                  )
                ]),
                t._v(' '),
                a('h2', { attrs: { id: 'piplines-py' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#piplines-py' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' piplines.py')
                ]),
                t._v(' '),
                a('p', [
                  t._v(
                    '定义一个RedisPipeline类，序列化获取的item数据，存入redis，这里用了deferToThread多线程存储'
                  )
                ]),
                t._v(' '),
                a('div', { staticClass: 'language-python extra-class' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-python' } }, [
                    a('code', [
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('from')]
                      ),
                      t._v(' scrapy'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('utils'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('misc '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('import')]
                      ),
                      t._v(' load_object\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('from')]
                      ),
                      t._v(' scrapy'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('utils'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('serialize '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('import')]
                      ),
                      t._v(' ScrapyJSONEncoder\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('from')]
                      ),
                      t._v(' twisted'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('internet'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('threads '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('import')]
                      ),
                      t._v(' deferToThread\n\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('from')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('import')]
                      ),
                      t._v(' connection'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' defaults\n\n\ndefault_serialize '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' ScrapyJSONEncoder'),
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
                      t._v('encode\n\n\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('class')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token class-name' } },
                        [t._v('RedisPipeline')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token builtin' } },
                        [t._v('object')]
                      ),
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
                        {
                          pre: !0,
                          attrs: { class: 'token triple-quoted-string string' }
                        },
                        [
                          t._v(
                            '"""Pushes serialized item into a redis list/queue\n\n    Settings\n    --------\n    REDIS_ITEMS_KEY : str\n        Redis key where to store items.\n    REDIS_ITEMS_SERIALIZER : str\n        Object path to serializer function.\n\n    """'
                          )
                        ]
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
                        [t._v('__init__')]
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
                      t._v(' server'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v('\n                 key'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v('defaults'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('PIPELINE_KEY'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v('\n                 serialize_func'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v('default_serialize'),
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
                        {
                          pre: !0,
                          attrs: { class: 'token triple-quoted-string string' }
                        },
                        [
                          t._v(
                            '"""Initialize pipeline.\n\n        Parameters\n        ----------\n        server : StrictRedis\n            Redis client instance.\n        key : str\n            Redis key where to store items.\n        serialize_func : callable\n            Items serializer function.\n\n        """'
                          )
                        ]
                      ),
                      t._v('\n        self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('server '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' server\n        self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('key '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' key\n        self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('serialize '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' serialize_func\n\n    @'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token builtin' } },
                        [t._v('classmethod')]
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
                        [t._v('from_settings')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('cls'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' settings'),
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
                      t._v('\n        params '),
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
                      t._v('\n            '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'server'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v(' connection'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('from_settings'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('settings'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v('\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('}')]
                      ),
                      t._v('\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('if')]
                      ),
                      t._v(' settings'),
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
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'REDIS_ITEMS_KEY'")
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
                      t._v('\n            params'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('[')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'key'")
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
                      t._v(' settings'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('[')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'REDIS_ITEMS_KEY'")
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
                        [t._v('if')]
                      ),
                      t._v(' settings'),
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
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'REDIS_ITEMS_SERIALIZER'")
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
                      t._v('\n            params'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('[')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'serialize_func'")
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
                      t._v(' load_object'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('\n                settings'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('[')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'REDIS_ITEMS_SERIALIZER'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(']')]
                      ),
                      t._v('\n            '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('return')]
                      ),
                      t._v(' cls'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('**')]
                      ),
                      t._v('params'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n\n    @'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token builtin' } },
                        [t._v('classmethod')]
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
                        [t._v('from_crawler')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('cls'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' crawler'),
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
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('return')]
                      ),
                      t._v(' cls'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('from_settings'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('crawler'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('settings'),
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
                        [t._v('process_item')]
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
                      t._v(' item'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' spider'),
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
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('return')]
                      ),
                      t._v(' deferToThread'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('_process_item'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' item'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' spider'),
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
                        [t._v('_process_item')]
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
                      t._v(' item'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' spider'),
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
                      t._v('\n        key '),
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
                      t._v('item_key'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('item'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' spider'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n        data '),
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
                      t._v('serialize'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('item'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n        self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('server'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('rpush'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('key'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' data'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('return')]
                      ),
                      t._v(' item\n\n    '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('def')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [t._v('item_key')]
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
                      t._v(' item'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' spider'),
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
                        {
                          pre: !0,
                          attrs: { class: 'token triple-quoted-string string' }
                        },
                        [
                          t._v(
                            '"""Returns redis key based on given spider.\n\n        Override this function to use a different key depending on the item\n        and/or spider.\n\n        """'
                          )
                        ]
                      ),
                      t._v('\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('return')]
                      ),
                      t._v(' self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('key '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('%')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('{')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'spider'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v(' spider'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('name'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('}')]
                      ),
                      t._v('\n\n')
                    ])
                  ])
                ]),
                a('h2', { attrs: { id: 'queue-py' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#queue-py' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' queue.py')
                ]),
                t._v(' '),
                a('div', { staticClass: 'language-python extra-class' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-python' } }, [
                    a('code', [
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('class')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token class-name' } },
                        [t._v('Base')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token builtin' } },
                        [t._v('object')]
                      ),
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
                        {
                          pre: !0,
                          attrs: { class: 'token triple-quoted-string string' }
                        },
                        [t._v('"""Per-spider base queue class"""')]
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
                        [t._v('__init__')]
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
                      t._v(' server'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' spider'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' key'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' serializer'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token boolean' } },
                        [t._v('None')]
                      ),
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
                        {
                          pre: !0,
                          attrs: { class: 'token triple-quoted-string string' }
                        },
                        [
                          t._v(
                            '"""Initialize per-spider redis queue.\n\n        Parameters\n        ----------\n        server : StrictRedis\n            Redis client instance.\n        spider : Spider\n            Scrapy spider instance.\n        key: str\n            Redis key where to put and get messages.\n        serializer : object\n            Serializer object with ``loads`` and ``dumps`` methods.\n\n        """'
                          )
                        ]
                      ),
                      t._v('\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('if')]
                      ),
                      t._v(' serializer '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('is')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token boolean' } },
                        [t._v('None')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v('\n            '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v('# Backward compatibility.')]
                      ),
                      t._v('\n            '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v('# TODO: deprecate pickle.')]
                      ),
                      t._v('\n            serializer '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' picklecompat\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('if')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('not')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token builtin' } },
                        [t._v('hasattr')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('serializer'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'loads'")
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
                      t._v('\n            '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('raise')]
                      ),
                      t._v(' TypeError'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v(
                          '"serializer does not implement \'loads\' function: %r"'
                        )
                      ]),
                      t._v('\n                            '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('%')]
                      ),
                      t._v(' serializer'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('if')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('not')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token builtin' } },
                        [t._v('hasattr')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('serializer'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'dumps'")
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
                      t._v('\n            '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('raise')]
                      ),
                      t._v(' TypeError'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v(
                          "\"serializer '%s' does not implement 'dumps' function: %r\""
                        )
                      ]),
                      t._v('\n                            '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('%')]
                      ),
                      t._v(' serializer'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n\n        self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('server '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' server\n        self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('spider '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' spider\n        self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('key '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' key '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('%')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('{')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'spider'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v(' spider'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('name'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('}')]
                      ),
                      t._v('\n        self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('serializer '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' serializer\n\n    '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('def')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [t._v('_encode_request')]
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
                      t._v(' request'),
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
                        {
                          pre: !0,
                          attrs: { class: 'token triple-quoted-string string' }
                        },
                        [t._v('"""Encode a request object"""')]
                      ),
                      t._v('\n        obj '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' request_to_dict'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('request'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('spider'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('return')]
                      ),
                      t._v(' self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('serializer'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('dumps'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('obj'),
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
                        [t._v('_decode_request')]
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
                      t._v(' encoded_request'),
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
                        {
                          pre: !0,
                          attrs: { class: 'token triple-quoted-string string' }
                        },
                        [t._v('"""Decode an request previously encoded"""')]
                      ),
                      t._v('\n        obj '),
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
                      t._v('serializer'),
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
                      t._v('encoded_request'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('return')]
                      ),
                      t._v(' request_from_dict'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('obj'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('spider'),
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
                        [t._v('__len__')]
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
                        {
                          pre: !0,
                          attrs: { class: 'token triple-quoted-string string' }
                        },
                        [t._v('"""Return the length of the queue"""')]
                      ),
                      t._v('\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('raise')]
                      ),
                      t._v(' NotImplementedError\n\n    '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('def')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [t._v('push')]
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
                      t._v(' request'),
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
                        {
                          pre: !0,
                          attrs: { class: 'token triple-quoted-string string' }
                        },
                        [t._v('"""Push a request"""')]
                      ),
                      t._v('\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('raise')]
                      ),
                      t._v(' NotImplementedError\n\n    '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('def')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [t._v('pop')]
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
                      t._v(' timeout'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [
                        t._v('0')
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
                      t._v('\n        '),
                      a(
                        'span',
                        {
                          pre: !0,
                          attrs: { class: 'token triple-quoted-string string' }
                        },
                        [t._v('"""Pop a request"""')]
                      ),
                      t._v('\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('raise')]
                      ),
                      t._v(' NotImplementedError\n\n    '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('def')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [t._v('clear')]
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
                        {
                          pre: !0,
                          attrs: { class: 'token triple-quoted-string string' }
                        },
                        [t._v('"""Clear queue/stack"""')]
                      ),
                      t._v('\n        self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('server'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('delete'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('key'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n\n')
                    ])
                  ])
                ]),
                a('p', [
                  t._v(
                    '创建一个队列基类，初始化接收4个参数（server, spider, key, serializer=None），创建redis实例，spider实例，key（redis存储数据的键），序列化对象(默认是picklecompat，也可以自己提供)'
                  )
                ]),
                t._v(' '),
                a('p', [
                  t._v(
                    'encode_request，将request对象转为dict，接收两个参数（request，self.spider），调用request_to_dict生成obj，再对obj调用序列化函数，返回序列化后的数据。'
                  )
                ]),
                t._v(' '),
                a('p', [a('strong', [t._v('request_to_dict')])]),
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
                        [t._v('request_to_dict')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('request'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' spider'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token boolean' } },
                        [t._v('None')]
                      ),
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
                        {
                          pre: !0,
                          attrs: { class: 'token triple-quoted-string string' }
                        },
                        [
                          t._v(
                            '"""Convert Request object to a dict.\n\n    If a spider is given, it will try to find out the name of the spider method\n    used in the callback and store that as the callback.\n    """'
                          )
                        ]
                      ),
                      t._v('\n    cb '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' request'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('callback\n    '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('if')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token builtin' } },
                        [t._v('callable')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('cb'),
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
                      t._v('\n        cb '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' _find_method'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('spider'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' cb'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n    eb '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' request'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('errback\n    '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('if')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token builtin' } },
                        [t._v('callable')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('eb'),
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
                      t._v('\n        eb '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' _find_method'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('spider'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' eb'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n    d '),
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
                      t._v('\n        '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'url'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v(' to_unicode'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('request'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('url'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v('  '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v('# urls should be safe (safe_string_url)')]
                      ),
                      t._v('\n        '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'callback'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v(' cb'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v('\n        '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'errback'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v(' eb'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v('\n        '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'method'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v(' request'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('method'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v('\n        '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'headers'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token builtin' } },
                        [t._v('dict')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('request'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('headers'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v('\n        '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'body'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v(' request'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('body'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v('\n        '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'cookies'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v(' request'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('cookies'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v('\n        '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'meta'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v(' request'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('meta'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v('\n        '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'_encoding'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v(' request'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('_encoding'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v('\n        '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'priority'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v(' request'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('priority'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v('\n        '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'dont_filter'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v(' request'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('dont_filter'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v('\n        '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'flags'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v(' request'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('flags'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v('\n        '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'cb_kwargs'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v(' request'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('cb_kwargs'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v('\n    '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('}')]
                      ),
                      t._v('\n    '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('if')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token builtin' } },
                        [t._v('type')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('request'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('is')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('not')]
                      ),
                      t._v(' Request'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v('\n        d'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('[')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'_class'")
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
                      t._v(' request'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('__module__ '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('+')]
                      ),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'.'")
                      ]),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('+')]
                      ),
                      t._v(' request'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('__class__'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('__name__\n    '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('return')]
                      ),
                      t._v(' d\n')
                    ])
                  ])
                ]),
                a('p', [
                  t._v('decode_request和encode_request相反，就不多说了')
                ]),
                t._v(' '),
                a('p', [
                  t._v(
                    '预定义了 _len _、push、pop、clear方法，clear(根据self.key清除数据)'
                  )
                ]),
                t._v(' '),
                a('p', [
                  t._v('再看基于基类定义的'),
                  a('strong', [t._v('先进先出队列')])
                ]),
                t._v(' '),
                a('p', [t._v('存储类型为集合')]),
                t._v(' '),
                a('div', { staticClass: 'language-python extra-class' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-python' } }, [
                    a('code', [
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('class')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token class-name' } },
                        [t._v('FifoQueue')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('Base'),
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
                        {
                          pre: !0,
                          attrs: { class: 'token triple-quoted-string string' }
                        },
                        [t._v('"""Per-spider FIFO queue"""')]
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
                        [t._v('__len__')]
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
                        {
                          pre: !0,
                          attrs: { class: 'token triple-quoted-string string' }
                        },
                        [t._v('"""Return the length of the queue"""')]
                      ),
                      t._v('\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('return')]
                      ),
                      t._v(' self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('server'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('llen'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('key'),
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
                        [t._v('push')]
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
                      t._v(' request'),
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
                        {
                          pre: !0,
                          attrs: { class: 'token triple-quoted-string string' }
                        },
                        [t._v('"""Push a request"""')]
                      ),
                      t._v('\n        self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('server'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('lpush'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('key'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('_encode_request'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('request'),
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
                        [t._v('pop')]
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
                      t._v(' timeout'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [
                        t._v('0')
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
                      t._v('\n        '),
                      a(
                        'span',
                        {
                          pre: !0,
                          attrs: { class: 'token triple-quoted-string string' }
                        },
                        [t._v('"""Pop a request"""')]
                      ),
                      t._v('\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('if')]
                      ),
                      t._v(' timeout '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('>')]
                      ),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [
                        t._v('0')
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v('\n            data '),
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
                      t._v('server'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('brpop'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('key'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' timeout'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n            '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('if')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token builtin' } },
                        [t._v('isinstance')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('data'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token builtin' } },
                        [t._v('tuple')]
                      ),
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
                      t._v('\n                data '),
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
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [
                        t._v('1')
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
                        [t._v('else')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v('\n            data '),
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
                      t._v('server'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('rpop'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('key'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('if')]
                      ),
                      t._v(' data'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v('\n            '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('return')]
                      ),
                      t._v(' self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('_decode_request'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('data'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n')
                    ])
                  ])
                ]),
                a('p', [
                  t._v(
                    '__ len__(self)：调用redis的llen根据self.key返回list的长度'
                  )
                ]),
                t._v(' '),
                a('p', [
                  t._v(
                    'push(self, request)：调用redis的lpush，根据self.key将编码后的数据存入list左部'
                  )
                ]),
                t._v(' '),
                a('p', [
                  t._v(
                    '[pop(self, timeout=0)]：调用redis的rpop，根据self.key抛出list右部数据，可以设置超时时间，调用redis的brpop(假如在指定时间内没有任何元素被弹出，则返回一个 nil 和等待时长。 反之，返回一个含有两个元素的列表，第一个元素是被弹出元素所属的 key ，第二个元素是被弹出元素的值。)'
                  )
                ]),
                t._v(' '),
                a('p', [
                  a(
                    'a',
                    {
                      attrs: {
                        href: 'https://www.runoob.com/redis/lists-lpush.html',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('lpush'), a('OutboundLink')],
                    1
                  ),
                  t._v(' '),
                  a(
                    'a',
                    {
                      attrs: {
                        href: 'https://www.runoob.com/redis/lists-rpop.html',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('rpop'), a('OutboundLink')],
                    1
                  ),
                  t._v(' '),
                  a(
                    'a',
                    {
                      attrs: {
                        href: 'https://www.runoob.com/redis/lists-brpop.html',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('brpop'), a('OutboundLink')],
                    1
                  )
                ]),
                t._v(' '),
                a('p', [a('strong', [t._v('优先级队列')])]),
                t._v(' '),
                a('p', [t._v('存储类型为有序集合')]),
                t._v(' '),
                a('div', { staticClass: 'language-python extra-class' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-python' } }, [
                    a('code', [
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('class')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token class-name' } },
                        [t._v('PriorityQueue')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('Base'),
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
                        {
                          pre: !0,
                          attrs: { class: 'token triple-quoted-string string' }
                        },
                        [
                          t._v(
                            '"""Per-spider priority queue abstraction using redis\' sorted set"""'
                          )
                        ]
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
                        [t._v('__len__')]
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
                        {
                          pre: !0,
                          attrs: { class: 'token triple-quoted-string string' }
                        },
                        [t._v('"""Return the length of the queue"""')]
                      ),
                      t._v('\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('return')]
                      ),
                      t._v(' self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('server'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('zcard'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('key'),
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
                        [t._v('push')]
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
                      t._v(' request'),
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
                        {
                          pre: !0,
                          attrs: { class: 'token triple-quoted-string string' }
                        },
                        [t._v('"""Push a request"""')]
                      ),
                      t._v('\n        data '),
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
                      t._v('_encode_request'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('request'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n        score '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('-')]
                      ),
                      t._v('request'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('priority\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [
                          t._v(
                            "# We don't use zadd method as the order of arguments change depending on"
                          )
                        ]
                      ),
                      t._v('\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [
                          t._v(
                            '# whether the class is Redis or StrictRedis, and the option of using'
                          )
                        ]
                      ),
                      t._v('\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v('# kwargs only accepts strings, not bytes.')]
                      ),
                      t._v('\n        self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('server'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('execute_command'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'ZADD'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('key'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' score'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' data'),
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
                        [t._v('pop')]
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
                      t._v(' timeout'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [
                        t._v('0')
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
                      t._v('\n        '),
                      a(
                        'span',
                        {
                          pre: !0,
                          attrs: { class: 'token triple-quoted-string string' }
                        },
                        [
                          t._v(
                            '"""\n        Pop a request\n        timeout not support in this queue class\n        """'
                          )
                        ]
                      ),
                      t._v('\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v('# use atomic range/remove using multi/exec')]
                      ),
                      t._v('\n        pipe '),
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
                      t._v('server'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('pipeline'),
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
                      t._v('\n        pipe'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('multi'),
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
                      t._v('\n        pipe'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('zrange'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('key'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [
                        t._v('0')
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [
                        t._v('0')
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
                      t._v('zremrangebyrank'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('key'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [
                        t._v('0')
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [
                        t._v('0')
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n        results'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' count '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' pipe'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('execute'),
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
                      t._v('\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('if')]
                      ),
                      t._v(' results'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v('\n            '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('return')]
                      ),
                      t._v(' self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('_decode_request'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('results'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('[')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [
                        t._v('0')
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(']')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n\n\n')
                    ])
                  ])
                ]),
                a('p', [t._v('len：封装redis的zcard方法')]),
                t._v(' '),
                a('p', [
                  t._v(
                    'push：封装redis的zadd方法，将request.priority和编码后的request存入数据库，这里的request.priority应该是数字越大优先级越高，然而数据库中，数字小的排在前面，所以取负数存入'
                  )
                ]),
                t._v(' '),
                a('p', [
                  t._v(
                    'pop: 创建一个redis pipeline，调用multi标记一个事物块开始，执行zrange(self.key, 0, 0)和zremrangebyrank(self.key, 0, 0)'
                  )
                ]),
                t._v(' '),
                a('p', [
                  t._v('zrange(self.key, 0, 0)用于获取有序集合的第一个值')
                ]),
                t._v(' '),
                a('p', [
                  t._v(
                    'zremrangebyrank(self.key, 0, 0)用于删除有序集合的第一个值'
                  )
                ]),
                t._v(' '),
                a('p', [
                  a(
                    'a',
                    {
                      attrs: {
                        href:
                          'https://www.runoob.com/redis/sorted-sets-zadd.html',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('zadd'), a('OutboundLink')],
                    1
                  ),
                  t._v(' '),
                  a(
                    'a',
                    {
                      attrs: {
                        href:
                          'https://www.runoob.com/redis/sorted-sets-zremrangebyrank.html',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('Zremrangebyrank '), a('OutboundLink')],
                    1
                  ),
                  t._v(' '),
                  a(
                    'a',
                    {
                      attrs: {
                        href:
                          'https://www.runoob.com/redis/sorted-sets-zrange.html',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('Zrange'), a('OutboundLink')],
                    1
                  )
                ]),
                t._v(' '),
                a('p', [
                  a(
                    'a',
                    {
                      attrs: {
                        href:
                          'https://www.runoob.com/redis/redis-pipelining.html',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('pipeline技术'), a('OutboundLink')],
                    1
                  ),
                  t._v(' '),
                  a(
                    'a',
                    {
                      attrs: {
                        href:
                          'https://www.runoob.com/redis/transactions-multi.html',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('multi'), a('OutboundLink')],
                    1
                  ),
                  t._v(' '),
                  a(
                    'a',
                    {
                      attrs: {
                        href: 'https://juejin.im/post/5b42e025f265da0fa332d4dc',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('redis中multi与pipeline介绍分析'), a('OutboundLink')],
                    1
                  )
                ]),
                t._v(' '),
                a('p', [a('strong', [t._v('后进先出队列')])]),
                t._v(' '),
                a('div', { staticClass: 'language-python extra-class' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-python' } }, [
                    a('code', [
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('class')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token class-name' } },
                        [t._v('LifoQueue')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('Base'),
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
                        {
                          pre: !0,
                          attrs: { class: 'token triple-quoted-string string' }
                        },
                        [t._v('"""Per-spider LIFO queue."""')]
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
                        [t._v('__len__')]
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
                        {
                          pre: !0,
                          attrs: { class: 'token triple-quoted-string string' }
                        },
                        [t._v('"""Return the length of the stack"""')]
                      ),
                      t._v('\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('return')]
                      ),
                      t._v(' self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('server'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('llen'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('key'),
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
                        [t._v('push')]
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
                      t._v(' request'),
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
                        {
                          pre: !0,
                          attrs: { class: 'token triple-quoted-string string' }
                        },
                        [t._v('"""Push a request"""')]
                      ),
                      t._v('\n        self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('server'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('lpush'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('key'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('_encode_request'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('request'),
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
                        [t._v('pop')]
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
                      t._v(' timeout'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [
                        t._v('0')
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
                      t._v('\n        '),
                      a(
                        'span',
                        {
                          pre: !0,
                          attrs: { class: 'token triple-quoted-string string' }
                        },
                        [t._v('"""Pop a request"""')]
                      ),
                      t._v('\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('if')]
                      ),
                      t._v(' timeout '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('>')]
                      ),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [
                        t._v('0')
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v('\n            data '),
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
                      t._v('server'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('blpop'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('key'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' timeout'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n            '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('if')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token builtin' } },
                        [t._v('isinstance')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('data'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token builtin' } },
                        [t._v('tuple')]
                      ),
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
                      t._v('\n                data '),
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
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [
                        t._v('1')
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
                        [t._v('else')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v('\n            data '),
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
                      t._v('server'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('lpop'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('key'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('if')]
                      ),
                      t._v(' data'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v('\n            '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('return')]
                      ),
                      t._v(' self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('_decode_request'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('data'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n')
                    ])
                  ])
                ]),
                a('p', [t._v('和先进先出的区别在于pop时变成了lpop')]),
                t._v(' '),
                a('h2', { attrs: { id: 'scheduler-py' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#scheduler-py' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' scheduler.py')
                ]),
                t._v(' '),
                a('p', [
                  t._v(
                    'ScrapyRedis 配合 Queue、 DupeFilter 使用的调度器 Scheduler'
                  )
                ]),
                t._v(' '),
                a('div', { staticClass: 'language- extra-class' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-text' } }, [
                    a('code', [
                      t._v(
                        '    def __init__(self, server,\n                 persist=False,\n                 flush_on_start=False,\n                 queue_key=defaults.SCHEDULER_QUEUE_KEY,\n                 queue_cls=defaults.SCHEDULER_QUEUE_CLASS,\n                 dupefilter_key=defaults.SCHEDULER_DUPEFILTER_KEY,\n                 dupefilter_cls=defaults.SCHEDULER_DUPEFILTER_CLASS,\n                 idle_before_close=0,\n                 serializer=None):\n        """Initialize scheduler.\n\n        Parameters\n        ----------\n        server : Redis\n            The redis server instance.\n        persist : bool\n            Whether to flush requests when closing. Default is False.\n        flush_on_start : bool\n            Whether to flush requests on start. Default is False.\n        queue_key : str\n            Requests queue key.\n        queue_cls : str\n            Importable path to the queue class.\n        dupefilter_key : str\n            Duplicates filter key.\n        dupefilter_cls : str\n            Importable path to the dupefilter class.\n        idle_before_close : int\n            Timeout before giving up.\n\n        """\n        if idle_before_close < 0:\n            raise TypeError("idle_before_close cannot be negative")\n\n        self.server = server\n        self.persist = persist\n        self.flush_on_start = flush_on_start\n        self.queue_key = queue_key\n        self.queue_cls = queue_cls\n        self.dupefilter_cls = dupefilter_cls\n        self.dupefilter_key = dupefilter_key\n        self.idle_before_close = idle_before_close\n        self.serializer = serializer\n        self.stats = None\n'
                      )
                    ])
                  ])
                ]),
                a('p', [t._v('初始化接收')]),
                t._v(' '),
                a('p', [t._v('server： redis连接实例')]),
                t._v(' '),
                a('p', [
                  t._v('persist：调度器结束时是否清除requests queue，默认False')
                ]),
                t._v(' '),
                a('p', [
                  t._v(
                    'flush_on_start：调度器开始时是否清除requests queue，默认False'
                  )
                ]),
                t._v(' '),
                a('p', [
                  t._v(
                    'queue_key：requests queue的key，通过这个key去redis中查找队列'
                  )
                ]),
                t._v(' '),
                a('p', [t._v('queue_cls:：队列的类，默认为优先级队列')]),
                t._v(' '),
                a('p', [
                  t._v(
                    'dupefilter_key：request set去重的key，通过这个key去redis中查找去重set'
                  )
                ]),
                t._v(' '),
                a('p', [
                  t._v(
                    'dupefilter_cls：去重类，默认为scrapy_redis.dupefilter.RFPDupeFilter，当然你也可以编写自己的去重类替换'
                  )
                ]),
                t._v(' '),
                a('p', [t._v('idle_before_close：超时时间')]),
                t._v(' '),
                a('p', [a('strong', [t._v('两个类方法')])]),
                t._v(' '),
                a('div', { staticClass: 'language-python extra-class' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-python' } }, [
                    a('code', [
                      t._v('    '),
                      a(
                        'span',
                        {
                          pre: !0,
                          attrs: {
                            class: 'token decorator annotation punctuation'
                          }
                        },
                        [t._v('@classmethod')]
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
                        [t._v('from_settings')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('cls'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' settings'),
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
                      t._v('\n        kwargs '),
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
                      t._v('\n            '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'persist'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v(' settings'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('getbool'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'SCHEDULER_PERSIST'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v('\n            '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'flush_on_start'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v(' settings'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('getbool'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'SCHEDULER_FLUSH_ON_START'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v('\n            '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'idle_before_close'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v(' settings'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('getint'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'SCHEDULER_IDLE_BEFORE_CLOSE'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v('\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('}')]
                      ),
                      t._v('\n\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [
                          t._v(
                            '# If these values are missing, it means we want to use the defaults.'
                          )
                        ]
                      ),
                      t._v('\n        optional '),
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
                      t._v('\n            '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [
                          t._v(
                            '# TODO: Use custom prefixes for this settings to note that are'
                          )
                        ]
                      ),
                      t._v('\n            '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v('# specific to scrapy-redis.')]
                      ),
                      t._v('\n            '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'queue_key'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'SCHEDULER_QUEUE_KEY'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v('\n            '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'queue_cls'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'SCHEDULER_QUEUE_CLASS'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v('\n            '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'dupefilter_key'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'SCHEDULER_DUPEFILTER_KEY'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v('\n            '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [
                          t._v(
                            '# We use the default setting name to keep compatibility.'
                          )
                        ]
                      ),
                      t._v('\n            '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'dupefilter_cls'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'DUPEFILTER_CLASS'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v('\n            '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'serializer'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'SCHEDULER_SERIALIZER'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v('\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('}')]
                      ),
                      t._v('\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('for')]
                      ),
                      t._v(' name'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' setting_name '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('in')]
                      ),
                      t._v(' optional'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('items'),
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
                        [t._v(':')]
                      ),
                      t._v('\n            val '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' settings'),
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
                      t._v('setting_name'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n            '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('if')]
                      ),
                      t._v(' val'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v('\n                kwargs'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('[')]
                      ),
                      t._v('name'),
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
                      t._v(' val\n\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v('# Support serializer as a path to a module.')]
                      ),
                      t._v('\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('if')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token builtin' } },
                        [t._v('isinstance')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('kwargs'),
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
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'serializer'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' six'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('string_types'),
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
                      t._v('\n            kwargs'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('[')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'serializer'")
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
                      t._v(' importlib'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('import_module'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('kwargs'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('[')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'serializer'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(']')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n\n        server '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' connection'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('from_settings'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('settings'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v('# Ensure the connection is working.')]
                      ),
                      t._v('\n        server'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('ping'),
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
                      t._v('\n\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('return')]
                      ),
                      t._v(' cls'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('server'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v('server'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('**')]
                      ),
                      t._v('kwargs'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n\n    @'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token builtin' } },
                        [t._v('classmethod')]
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
                        [t._v('from_crawler')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('cls'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' crawler'),
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
                      t._v('\n        instance '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' cls'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('from_settings'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('crawler'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('settings'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [
                          t._v(
                            '# FIXME: for now, stats are only supported from this constructor'
                          )
                        ]
                      ),
                      t._v('\n        instance'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('stats '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' crawler'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('stats\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('return')]
                      ),
                      t._v(' instance\n')
                    ])
                  ])
                ]),
                a('p', [t._v('用于根据setting设置创建scheduler实例。')]),
                t._v(' '),
                a('p', [a('strong', [t._v('open方法')])]),
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
                        [t._v('open')]
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
                      t._v(' spider'),
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
                      t._v('\n        self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('spider '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' spider\n\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('try')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v('\n            self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('queue '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' load_object'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('queue_cls'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('\n                server'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v('self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('server'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v('\n                spider'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v('spider'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v('\n                key'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v('self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('queue_key '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('%')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('{')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'spider'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v(' spider'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('name'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('}')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v('\n                serializer'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v('self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('serializer'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v('\n            '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('except')]
                      ),
                      t._v(' TypeError '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('as')]
                      ),
                      t._v(' e'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v('\n            '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('raise')]
                      ),
                      t._v(' ValueError'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v('"Failed to instantiate queue class \'%s\': %s"')
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v('\n                             self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('queue_cls'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' e'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('try')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v('\n            self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('df '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' load_object'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('dupefilter_cls'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('\n                server'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v('self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('server'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v('\n                key'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v('self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('dupefilter_key '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('%')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('{')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'spider'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v(' spider'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('name'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('}')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v('\n                debug'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v('spider'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('settings'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('getbool'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'DUPEFILTER_DEBUG'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v('\n            '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('except')]
                      ),
                      t._v(' TypeError '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('as')]
                      ),
                      t._v(' e'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v('\n            '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('raise')]
                      ),
                      t._v(' ValueError'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v(
                          '"Failed to instantiate dupefilter class \'%s\': %s"'
                        )
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v('\n                             self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('dupefilter_cls'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' e'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('if')]
                      ),
                      t._v(' self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('flush_on_start'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v('\n            self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('flush'),
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
                      t._v('\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [
                          t._v(
                            '# notice if there are requests already in the queue to resume the crawl'
                          )
                        ]
                      ),
                      t._v('\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('if')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token builtin' } },
                        [t._v('len')]
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
                        [t._v('.')]
                      ),
                      t._v('queue'),
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
                      t._v('\n            spider'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('log'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v('"Resuming crawl (%d requests scheduled)"')
                      ]),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('%')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token builtin' } },
                        [t._v('len')]
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
                        [t._v('.')]
                      ),
                      t._v('queue'),
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
                      t._v('\n')
                    ])
                  ])
                ]),
                a('p', [
                  t._v(
                    'self.queue实例化爬取队列类，self.df实例化去重类，判断self.flush_on_start'
                  )
                ]),
                t._v(' '),
                a('p', [t._v('是否调用self.flush()')]),
                t._v(' '),
                a('div', { staticClass: 'language-python extra-class' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-python' } }, [
                    a('code', [
                      t._v('    '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('def')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [t._v('close')]
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
                      t._v(' reason'),
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
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('if')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('not')]
                      ),
                      t._v(' self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('persist'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v('\n            self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('flush'),
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
                        [t._v('flush')]
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
                        [t._v(')')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v('\n        self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('df'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('clear'),
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
                      t._v('\n        self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('queue'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('clear'),
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
                      t._v('\n')
                    ])
                  ])
                ]),
                a('p', [
                  t._v('close:判断 self.presist，关闭时是否调用self.flush')
                ]),
                t._v(' '),
                a('p', [t._v('flush:调用实例的clear方法清除数据')]),
                t._v(' '),
                a('p', [a('strong', [t._v('存取方法')])]),
                t._v(' '),
                a('div', { staticClass: 'language-python extra-class' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-python' } }, [
                    a('code', [
                      t._v('    '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('def')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [t._v('enqueue_request')]
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
                      t._v(' request'),
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
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('if')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('not')]
                      ),
                      t._v(' request'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('dont_filter '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('and')]
                      ),
                      t._v(' self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('df'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('request_seen'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('request'),
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
                      t._v('\n            self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('df'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('log'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('request'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('spider'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n            '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('return')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token boolean' } },
                        [t._v('False')]
                      ),
                      t._v('\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('if')]
                      ),
                      t._v(' self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('stats'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v('\n            self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('stats'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('inc_value'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'scheduler/enqueued/redis'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' spider'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v('self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('spider'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n        self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('queue'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('push'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('request'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('return')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token boolean' } },
                        [t._v('True')]
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
                        [t._v('next_request')]
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
                        [t._v(')')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v('\n        block_pop_timeout '),
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
                      t._v('idle_before_close\n        request '),
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
                      t._v('queue'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('pop'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('block_pop_timeout'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('if')]
                      ),
                      t._v(' request '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('and')]
                      ),
                      t._v(' self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('stats'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v('\n            self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('stats'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('inc_value'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'scheduler/dequeued/redis'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' spider'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v('self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('spider'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('return')]
                      ),
                      t._v(' request\n\n    '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('def')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [t._v('has_pending_requests')]
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
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('return')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token builtin' } },
                        [t._v('len')]
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
                        [t._v(')')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('>')]
                      ),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [
                        t._v('0')
                      ]),
                      t._v('\n\n')
                    ])
                  ])
                ]),
                a('p', [
                  a('strong', [t._v('enqueue_request(self, request):')])
                ]),
                t._v(' '),
                a('p', [
                  t._v(
                    '判断request是否不需要去重 和 去重队列是否已存在这个request，若任一条件不满足则打印日志，返回false'
                  )
                ]),
                t._v(' '),
                a('p', [
                  t._v(
                    '若都满足条件则调用队列实例的pop方法将request加入爬取队列'
                  )
                ]),
                t._v(' '),
                a('p', [t._v('if self.stats 用于判断是否需要统计')]),
                t._v(' '),
                a('p', [a('strong', [t._v('next_request(self)')]), t._v('：')]),
                t._v(' '),
                a('p', [t._v('设置超时函数')]),
                t._v(' '),
                a('p', [t._v('调用队列实例的pop方法抛出request，')]),
                t._v(' '),
                a('p', [
                  t._v('判断是否获得request和是否需要统计，都满足则统计')
                ]),
                t._v(' '),
                a('p', [t._v('返回request')]),
                t._v(' '),
                a('h2', { attrs: { id: 'spiders-py' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#spiders-py' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' spiders.py')
                ]),
                t._v(' '),
                a('p', [t._v('构建了一个RedisMixin类用于从redis队列读取urls')]),
                t._v(' '),
                a('div', { staticClass: 'language-python extra-class' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-python' } }, [
                    a('code', [
                      t._v('    redis_key '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token boolean' } },
                        [t._v('None')]
                      ),
                      t._v('\n    redis_batch_size '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token boolean' } },
                        [t._v('None')]
                      ),
                      t._v('\n    redis_encoding '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token boolean' } },
                        [t._v('None')]
                      ),
                      t._v('\n\n    '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v('# Redis client placeholder.')]
                      ),
                      t._v('\n    server '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token boolean' } },
                        [t._v('None')]
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
                        [t._v('start_requests')]
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
                        {
                          pre: !0,
                          attrs: { class: 'token triple-quoted-string string' }
                        },
                        [
                          t._v(
                            '"""Returns a batch of start requests from redis."""'
                          )
                        ]
                      ),
                      t._v('\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('return')]
                      ),
                      t._v(' self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('next_requests'),
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
                      t._v('\n')
                    ])
                  ])
                ]),
                a('p', [
                  t._v(
                    '定义了redis_key,redis_batch_size,redis_encoding,server为None，start_requests调用next_requests方法'
                  )
                ]),
                t._v(' '),
                a('div', { staticClass: 'language-python extra-class' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-python' } }, [
                    a('code', [
                      t._v('    '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('def')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [t._v('setup_redis')]
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
                      t._v(' crawler'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token boolean' } },
                        [t._v('None')]
                      ),
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
                        {
                          pre: !0,
                          attrs: { class: 'token triple-quoted-string string' }
                        },
                        [
                          t._v(
                            '"""Setup redis connection and idle signal.\n\n        This should be called after the spider has set its crawler object.\n        """'
                          )
                        ]
                      ),
                      t._v('\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('if')]
                      ),
                      t._v(' self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('server '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('is')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('not')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token boolean' } },
                        [t._v('None')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v('\n            '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('return')]
                      ),
                      t._v('\n\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('if')]
                      ),
                      t._v(' crawler '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('is')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token boolean' } },
                        [t._v('None')]
                      ),
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
                            '# We allow optional crawler argument to keep backwards'
                          )
                        ]
                      ),
                      t._v('\n            '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v('# compatibility.')]
                      ),
                      t._v('\n            '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v('# XXX: Raise a deprecation warning.')]
                      ),
                      t._v('\n            crawler '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token builtin' } },
                        [t._v('getattr')]
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
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'crawler'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token boolean' } },
                        [t._v('None')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('if')]
                      ),
                      t._v(' crawler '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('is')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token boolean' } },
                        [t._v('None')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v('\n            '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('raise')]
                      ),
                      t._v(' ValueError'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v('"crawler is required"')
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n\n        settings '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' crawler'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('settings\n\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('if')]
                      ),
                      t._v(' self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('redis_key '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('is')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token boolean' } },
                        [t._v('None')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v('\n            self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('redis_key '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' settings'),
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
                      t._v('\n                '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'REDIS_START_URLS_KEY'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' defaults'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('START_URLS_KEY'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v('\n            '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n\n        self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('redis_key '),
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
                      t._v('redis_key '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('%')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('{')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'name'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v(' self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('name'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('}')]
                      ),
                      t._v('\n\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('if')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('not')]
                      ),
                      t._v(' self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('redis_key'),
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
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v('\n            '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('raise')]
                      ),
                      t._v(' ValueError'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v('"redis_key must not be empty"')
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('if')]
                      ),
                      t._v(' self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('redis_batch_size '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('is')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token boolean' } },
                        [t._v('None')]
                      ),
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
                            '# TODO: Deprecate this setting (REDIS_START_URLS_BATCH_SIZE).'
                          )
                        ]
                      ),
                      t._v('\n            self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('redis_batch_size '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' settings'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('getint'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('\n                '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'REDIS_START_URLS_BATCH_SIZE'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v('\n                settings'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('getint'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'CONCURRENT_REQUESTS'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v('\n            '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('try')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v('\n            self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('redis_batch_size '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' '),
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
                      t._v('self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('redis_batch_size'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('except')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('TypeError'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' ValueError'),
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
                      t._v('\n            '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('raise')]
                      ),
                      t._v(' ValueError'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v('"redis_batch_size must be an integer"')
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('if')]
                      ),
                      t._v(' self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('redis_encoding '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('is')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token boolean' } },
                        [t._v('None')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v('\n            self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('redis_encoding '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' settings'),
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
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'REDIS_ENCODING'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' defaults'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('REDIS_ENCODING'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n\n        self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('logger'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('info'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v(
                          '"Reading start URLs from redis key \'%(redis_key)s\' "'
                        )
                      ]),
                      t._v('\n                         '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v(
                          '"(batch size: %(redis_batch_size)s, encoding: %(redis_encoding)s"'
                        )
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v('\n                         self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('__dict__'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n\n        self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('server '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' connection'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('from_settings'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('crawler'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('settings'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [
                          t._v(
                            '# The idle signal is called when the spider has no requests left,'
                          )
                        ]
                      ),
                      t._v('\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [
                          t._v(
                            "# that's when we will schedule new requests from redis queue"
                          )
                        ]
                      ),
                      t._v('\n        crawler'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('signals'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('connect'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('spider_idle'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' signal'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v('signals'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('spider_idle'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n\n')
                    ])
                  ])
                ]),
                a('p', [
                  t._v(
                    'setup_redis(self, crawler=None)接收一个爬虫对象，设置redis连接和空闲信号。当spider没有剩余requests时，调用空闲信号，从redis队列中调度新requests'
                  )
                ]),
                t._v(' '),
                a('div', { staticClass: 'language-python extra-class' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-python' } }, [
                    a('code', [
                      t._v('    '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('def')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [t._v('next_requests')]
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
                        {
                          pre: !0,
                          attrs: { class: 'token triple-quoted-string string' }
                        },
                        [
                          t._v(
                            '"""Returns a request to be scheduled or none."""'
                          )
                        ]
                      ),
                      t._v('\n        use_set '),
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
                      t._v('settings'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('getbool'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'REDIS_START_URLS_AS_SET'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' defaults'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('START_URLS_AS_SET'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n        fetch_one '),
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
                      t._v('server'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('spop '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('if')]
                      ),
                      t._v(' use_set '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('else')]
                      ),
                      t._v(' self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('server'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('lpop\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v('# XXX: Do we need to use a timeout here?')]
                      ),
                      t._v('\n        found '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [
                        t._v('0')
                      ]),
                      t._v('\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v('# TODO: Use redis pipeline execution.')]
                      ),
                      t._v('\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('while')]
                      ),
                      t._v(' found '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('<')]
                      ),
                      t._v(' self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('redis_batch_size'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v('\n            data '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' fetch_one'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('redis_key'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n            '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('if')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('not')]
                      ),
                      t._v(' data'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v('\n                '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v('# Queue empty.')]
                      ),
                      t._v('\n                '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('break')]
                      ),
                      t._v('\n            req '),
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
                      t._v('make_request_from_data'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('data'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n            '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('if')]
                      ),
                      t._v(' req'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v('\n                '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('yield')]
                      ),
                      t._v(' req\n                found '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('+=')]
                      ),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [
                        t._v('1')
                      ]),
                      t._v('\n            '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('else')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v('\n                self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('logger'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('debug'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v('"Request not made from data: %r"')
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' data'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('if')]
                      ),
                      t._v(' found'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v('\n            self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('logger'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('debug'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v('"Read %s requests from \'%s\'"')
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' found'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('redis_key'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n')
                    ])
                  ])
                ]),
                a('p', [
                  t._v(
                    'next_requests(self):从REDIS_START_URLS获取data，调用make_request_from_data处理data，返回requests'
                  )
                ]),
                t._v(' '),
                a('div', { staticClass: 'language-python extra-class' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-python' } }, [
                    a('code', [
                      t._v('    '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('def')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [t._v('make_request_from_data')]
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
                      t._v(' data'),
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
                        {
                          pre: !0,
                          attrs: { class: 'token triple-quoted-string string' }
                        },
                        [
                          t._v(
                            '"""Returns a Request instance from data coming from Redis.\n\n        By default, ``data`` is an encoded URL. You can override this method to\n        provide your own message decoding.\n\n        Parameters\n        ----------\n        data : bytes\n            Message from redis.\n\n        """'
                          )
                        ]
                      ),
                      t._v('\n        url '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' bytes_to_str'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('data'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('redis_encoding'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('return')]
                      ),
                      t._v(' self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('make_requests_from_url'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('url'),
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
                        [t._v('schedule_next_requests')]
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
                        {
                          pre: !0,
                          attrs: { class: 'token triple-quoted-string string' }
                        },
                        [t._v('"""Schedules a request if available"""')]
                      ),
                      t._v('\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [
                          t._v(
                            '# TODO: While there is capacity, schedule a batch of redis requests.'
                          )
                        ]
                      ),
                      t._v('\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('for')]
                      ),
                      t._v(' req '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('in')]
                      ),
                      t._v(' self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('next_requests'),
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
                        [t._v(':')]
                      ),
                      t._v('\n            self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('crawler'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('engine'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('crawl'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('req'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' spider'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v('self'),
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
                        [t._v('spider_idle')]
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
                        {
                          pre: !0,
                          attrs: { class: 'token triple-quoted-string string' }
                        },
                        [
                          t._v(
                            '"""Schedules a request if available, otherwise waits."""'
                          )
                        ]
                      ),
                      t._v('\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v('# XXX: Handle a sentinel to close the spider.')]
                      ),
                      t._v('\n        self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('schedule_next_requests'),
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
                      t._v('\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('raise')]
                      ),
                      t._v(' DontCloseSpider\n\n')
                    ])
                  ])
                ]),
                a('p', [
                  t._v(
                    'make_request_from_data(self, data)：调用make_requests_from_url(url)返回requests对象'
                  )
                ]),
                t._v(' '),
                a('p', [
                  t._v(
                    'schedule_next_requests(self)：调度requests对象给爬虫抓取'
                  )
                ]),
                t._v(' '),
                a('p', [
                  t._v(
                    'spider_idle(self)：空闲处理。非空调用schedule_next_requests(self)，为空则等待。'
                  )
                ]),
                t._v(' '),
                a('h2', { attrs: { id: 'utils-py' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#utils-py' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' utils.py')
                ]),
                t._v(' '),
                a('div', { staticClass: 'language-python extra-class' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-python' } }, [
                    a('code', [
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('import')]
                      ),
                      t._v(' six\n\n\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('def')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [t._v('bytes_to_str')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('s'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' encoding'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'utf-8'")
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
                      t._v('\n    '),
                      a(
                        'span',
                        {
                          pre: !0,
                          attrs: { class: 'token triple-quoted-string string' }
                        },
                        [
                          t._v(
                            '"""Returns a str if a bytes object is given."""'
                          )
                        ]
                      ),
                      t._v('\n    '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('if')]
                      ),
                      t._v(' six'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('PY3 '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('and')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token builtin' } },
                        [t._v('isinstance')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('s'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token builtin' } },
                        [t._v('bytes')]
                      ),
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
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('return')]
                      ),
                      t._v(' s'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('decode'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('encoding'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n    '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('return')]
                      ),
                      t._v(' s\n\n')
                    ])
                  ])
                ]),
                a('p', [t._v('字节转utf-8编码字符')]),
                t._v(' '),
                a('h1', { attrs: { id: 'finally' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#finally' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' finally')
                ]),
                t._v(' '),
                a('p', [
                  t._v(
                    '以上就是scrapy-redis的所有源码了，总的来说scrapy-redis实现分布式爬虫的原理，就是共用了一个主节点的redis数据库存储的requestsqueue，dupefilter set，item。'
                  )
                ]),
                t._v(' '),
                a('p', [
                  t._v('那么问题来了，为什么是redis而不是mongodb，SQL呢？')
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
