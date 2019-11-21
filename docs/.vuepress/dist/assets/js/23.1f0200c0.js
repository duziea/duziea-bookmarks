;(window.webpackJsonp = window.webpackJsonp || []).push([
  [23],
  {
    217: function(t, s, a) {
      'use strict'
      a.r(s)
      var n = a(0),
        p = Object(n.a)(
          {},
          function() {
            var t = this,
              s = t.$createElement,
              a = t._self._c || s
            return a(
              'ContentSlotsDistributor',
              { attrs: { 'slot-key': t.$parent.slotKey } },
              [
                a('h1', { attrs: { id: 'scrapy爬取识货网商品信息' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#scrapy爬取识货网商品信息' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' scrapy爬取识货网商品信息')
                ]),
                t._v(' '),
                a('p', [
                  a(
                    'a',
                    {
                      attrs: {
                        href: 'http://www.shihuo.cn/',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('http://www.shihuo.cn/'), a('OutboundLink')],
                    1
                  )
                ]),
                t._v(' '),
                a('p', [
                  t._v('首先看一下识货的robots.txt\n'),
                  a('img', {
                    attrs: {
                      src:
                        'https://img-blog.csdnimg.cn/20191027194843673.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  t._v('\n其中这个sitemap，站点地图，是给搜索引擎导航的\n'),
                  a(
                    'a',
                    {
                      attrs: {
                        href: 'https://baike.baidu.com/item/sitemap/6241567',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('sitemap百科'), a('OutboundLink')],
                    1
                  ),
                  t._v(' '),
                  a('img', {
                    attrs: {
                      src:
                        'https://img-blog.csdnimg.cn/20191027200757513.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  t._v(' '),
                  a('img', {
                    attrs: {
                      src:
                        'https://img-blog.csdnimg.cn/20191027200818498.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  t._v(
                    '\n一般这里面放的是网站每天更新的页面，方便搜索引擎收录，也方便了我们爬取更新信息。'
                  )
                ]),
                t._v(' '),
                a('p', [
                  t._v('首先我们要获取商品分类\n'),
                  a('img', {
                    attrs: {
                      src: 'https://img-blog.csdnimg.cn/20191027203324934.png',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  t._v(' '),
                  a('img', {
                    attrs: {
                      src:
                        'https://img-blog.csdnimg.cn/20191027203557815.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  t._v(
                    '\n用xpath或css selector获取ul中的a标签href属性即为待爬取链接。meta中传递一些参数给下个解析函数使用。'
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
                      t._v('\n        soup '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' BeautifulSoup'),
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
                        [t._v(',')]
                      ),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'lxml'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n        ul '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' soup'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('select'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('\n            '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v(
                          "'body > div.shihuo-content-wrap > div > div.top-block.clearfix > div.left-menu > ul'"
                        )
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n        a_list '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' ul'),
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
                        [t._v('.')]
                      ),
                      t._v('find_all'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'a'")
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
                      t._v(' a '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('in')]
                      ),
                      t._v(' a_list'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('[')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [
                        t._v('2')
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [
                        t._v('3')
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(']')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v('\n            link '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'http:'")
                      ]),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('+')]
                      ),
                      t._v(' a'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('[')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'href'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(']')]
                      ),
                      t._v('\n            category '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' a'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('string\n            self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('info'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('[')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'category'")
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
                      t._v(' category\n            self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('info'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('[')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'category_link'")
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
                      t._v(' link\n            \n            '),
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
                      t._v('link'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v('\n                                 meta'),
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
                      t._v('\n                                     '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'link'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v(' link\n                                 '),
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
                      t._v('\n                                 callback'),
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
                      t._v('get_info\n                                 '),
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
                    '看看查询参数，构造每一页的链接，这里在获取总页数时，发现并不能直接获取，只能获取总商品数'
                  ),
                  a('img', {
                    attrs: {
                      src: 'https://img-blog.csdnimg.cn/20191027205544687.png',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  t._v(
                    '识货的总页数是靠商品总数除pagesize计算出来的，所以当把pagesize调为7451时，只需一页。\n'
                  ),
                  a('img', {
                    attrs: {
                      src: 'https://img-blog.csdnimg.cn/2019102720531532.png',
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
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v('#获取商品列表页')]
                      ),
                      t._v('\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('def')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [t._v('get_info')]
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
                      t._v('\n        link '),
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
                        t._v("'link'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(']')]
                      ),
                      t._v('\n        total '),
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
                      t._v('response'),
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
                      t._v('\n            '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v(
                          "'/html/body/div[2]/div/div[1]/div[3]/div/span/text()'"
                        )
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
                        [t._v(')')]
                      ),
                      t._v('\n        pagesize '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [
                        t._v('60')
                      ]),
                      t._v('\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('if')]
                      ),
                      t._v(' total '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('<=')]
                      ),
                      t._v(' pagesize'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v('\n            totalpage '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [
                        t._v('1')
                      ]),
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
                      t._v('\n            totalpage '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' total'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('//')]
                      ),
                      t._v('pagesize '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('+')]
                      ),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [
                        t._v('1')
                      ]),
                      t._v('\n    \n        res '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' urlparse'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('link'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n        scheme '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' res'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('scheme\n        netloc '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' res'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('netloc\n        path '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' res'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('path\n        query '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' res'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('query\n\n        '),
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
                      t._v('totalpage'),
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
                      t._v('\n            page '),
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
                          attrs: { class: 'token string-interpolation' }
                        },
                        [
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'token string' } },
                            [t._v("f'page=")]
                          ),
                          a(
                            'span',
                            {
                              pre: !0,
                              attrs: { class: 'token interpolation' }
                            },
                            [
                              a(
                                'span',
                                {
                                  pre: !0,
                                  attrs: { class: 'token punctuation' }
                                },
                                [t._v('{')]
                              ),
                              t._v('i'),
                              a(
                                'span',
                                {
                                  pre: !0,
                                  attrs: { class: 'token punctuation' }
                                },
                                [t._v('}')]
                              )
                            ]
                          ),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'token string' } },
                            [t._v("'")]
                          )
                        ]
                      ),
                      t._v('\n            link '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' scheme '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('+')]
                      ),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'://'")
                      ]),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('+')]
                      ),
                      t._v(' netloc '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('+')]
                      ),
                      t._v(' path'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('+')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'?'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('+')]
                      ),
                      t._v('query'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('+')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'&'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('+')]
                      ),
                      t._v('page\n\n            '),
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
                      t._v('link'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v('callback'),
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
                      t._v('get_detail'),
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
                  t._v('接下来我们已经可以获取每件商品的详情页，名字，价格\n'),
                  a('img', {
                    attrs: {
                      src:
                        'https://img-blog.csdnimg.cn/20191027210538287.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70',
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
                        [t._v('get_detail')]
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
                      t._v('\n        shoe_list '),
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
                        t._v('\'//*[@id="js_hover"]/li\'')
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
                      t._v(' shoe_list'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v('\n            detail_link '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'http:'")
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
                        t._v("'./div[1]/div/a/@href'")
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
                      t._v('\n            img_link '),
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
                        t._v("'./div[1]/div/a/img/@src'")
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
                      t._v('\n            name '),
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
                        t._v("'./div[3]/a/text()'")
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
                      t._v('\n            price '),
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
                        t._v("'./div[4]/span/b/text()'")
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
                      t._v('\n            item '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' shoeItem'),
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
                        t._v("'category'")
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
                      t._v(' self'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('info'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('[')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'category'")
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
                        t._v("'detail_link'")
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
                      t._v(' detail_link\n            item'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('[')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'img_link'")
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
                      t._v(' img_link\n            item'),
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
                      t._v(' name\n            item'),
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
                      t._v(' price\n\n            '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('print')]
                      ),
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
                      t._v('\n            '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('yield')]
                      ),
                      t._v(' item\n')
                    ])
                  ])
                ]),
                a('p', [
                  t._v('试着爬一下篮球鞋\n'),
                  a('img', {
                    attrs: {
                      src: 'https://img-blog.csdnimg.cn/20191028114704186.png',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  t._v(' '),
                  a('img', {
                    attrs: {
                      src: 'https://img-blog.csdnimg.cn/20191028115619552.png',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  t._v('\n(⊙v⊙)嗯竟然比官网多爬了60个商品。\n'),
                  a('img', {
                    attrs: {
                      src: 'https://img-blog.csdnimg.cn/20191028115854922.png',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  t._v(
                    '\n识货的爬虫还是挺牛的，一件商品可以爬出将近1w条购买链接'
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
      s.default = p.exports
    }
  }
])
