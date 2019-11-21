;(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    226: function(t, r, e) {
      'use strict'
      e.r(r)
      var a = e(0),
        s = Object(a.a)(
          {},
          function() {
            var t = this,
              r = t.$createElement,
              e = t._self._c || r
            return e(
              'ContentSlotsDistributor',
              { attrs: { 'slot-key': t.$parent.slotKey } },
              [
                e('h1', { attrs: { id: '联系方式' } }, [
                  e(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#联系方式' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' 联系方式')
                ]),
                t._v(' '),
                e('ul', [
                  e('li', [t._v('手机：17751500229')]),
                  t._v(' '),
                  e('li', [t._v('Email：1040230003@qq.com')]),
                  t._v(' '),
                  e('li', [t._v('QQ：1040230003')])
                ]),
                t._v(' '),
                e('h1', { attrs: { id: '个人信息' } }, [
                  e(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#个人信息' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' 个人信息')
                ]),
                t._v(' '),
                e('ul', [
                  e('li', [t._v('任伟/男/1996')]),
                  t._v(' '),
                  e('li', [t._v('本科/淮阴工学院计算机系')]),
                  t._v(' '),
                  e('li', [
                    t._v('技术博客：'),
                    e(
                      'a',
                      {
                        attrs: {
                          href: 'http://duziea.xyz/',
                          target: '_blank',
                          rel: 'noopener noreferrer'
                        }
                      },
                      [t._v('个人博客'), e('OutboundLink')],
                      1
                    ),
                    t._v(' 、 '),
                    e(
                      'a',
                      {
                        attrs: {
                          href: 'https://blog.csdn.net/qq_34192032',
                          target: '_blank',
                          rel: 'noopener noreferrer'
                        }
                      },
                      [t._v('CSDN'), e('OutboundLink')],
                      1
                    ),
                    t._v('、 '),
                    e(
                      'a',
                      {
                        attrs: {
                          href: 'https://github.com/duziea',
                          target: '_blank',
                          rel: 'noopener noreferrer'
                        }
                      },
                      [t._v('Github'), e('OutboundLink')],
                      1
                    )
                  ])
                ]),
                t._v(' '),
                e('h1', { attrs: { id: '工作经历' } }, [
                  e(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#工作经历' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' 工作经历')
                ]),
                t._v(' '),
                e(
                  'h2',
                  {
                    attrs: {
                      id:
                        '无锡佰信宏达信息科技有限公司（-2018年7月-2018年12月-）'
                    }
                  },
                  [
                    e(
                      'a',
                      {
                        staticClass: 'header-anchor',
                        attrs: {
                          href:
                            '#无锡佰信宏达信息科技有限公司（-2018年7月-2018年12月-）'
                        }
                      },
                      [t._v('#')]
                    ),
                    t._v(
                      ' 无锡佰信宏达信息科技有限公司（ 2018年7月 ~ 2018年12月 ）'
                    )
                  ]
                ),
                t._v(' '),
                e('ul', [
                  e('li', [
                    t._v(
                      '根据需要爬取的数据进行分析，分析目标网站结构，反爬方法。'
                    )
                  ]),
                  t._v(' '),
                  e('li', [
                    t._v('使用requests，selenium，scrapy等技术进行内容抓取')
                  ])
                ]),
                t._v(' '),
                e('h1', { attrs: { id: '项目经历' } }, [
                  e(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#项目经历' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' 项目经历')
                ]),
                t._v(' '),
                e('ul', [
                  e('li', [
                    e('p', [
                      e('strong', [t._v('企业信息爬取')]),
                      t._v(
                        '\n分析国家企业信息公示系统、企查查等查询网站的网页结构，抓包小程序端的api，对网站采用的cookie，ip，ua反爬措施，采用模拟登录，使用代理ip，伪造ua，模拟请求爬取企业相关信息，存为csv。'
                      )
                    ])
                  ]),
                  t._v(' '),
                  e('li', [
                    e('p', [
                      e('strong', [t._v('识货网商品信息爬取')]),
                      t._v(
                        '\n分析识货网商品信息结构，识货网没有反爬措施，使用xpath，beautifulsoup解析网页，提取商品名称，分类，价格，购买链接等信息，使用scrapy-redis构造分布式爬虫爬取，将数据持久化到mongodb中，分析了识货robot.txt，其中将每日新增的商品链接写入sitemap，后续增量爬取时只需爬取这个sitemap。'
                      )
                    ])
                  ]),
                  t._v(' '),
                  e('li', [
                    e('p', [
                      e('strong', [t._v('哔哩哔哩模拟登录')]),
                      t._v(
                        '\nb站采用极验滑动验证码反爬，js生成gt、challenge、w加密参数，访问极验接口获取slide.js、滑块图、缺口图、背景图，记录用户滑动信息，再次访问接口，验证滑动信息，js加密中混淆代码过多，技术底蕴还不够，无法post过，只能采用selenium+webdriver模拟，两次for循环图片x，y轴，使用pillow解析滑块图，缺口图，背景图rgb值，比对，计算滑动距离，模拟滑动轨迹。'
                      )
                    ])
                  ]),
                  t._v(' '),
                  e('li', [
                    e('p', [
                      e('strong', [t._v('淮工二手信息网站')]),
                      t._v(
                        '\n使用vue，django，drf搭建的前后端分离的校园二手信息网站，model建商品分类，信息表，views处理前端的请求，orm操作数据库的增删改查，serializers将数据库的信息序列化为json格式给前端，将前端发送的数据验证后反序列化存入数据库，使用django xadmin搭建后台管理。'
                      )
                    ])
                  ]),
                  t._v(' '),
                  e('li', [
                    e('p', [
                      e('strong', [t._v('微信小程序')]),
                      t._v(
                        '\n由于吃饭时的选择困难，使用Uniapp制作了一个"恰啥"小程序，从菜单中随机选择，支持菜单的增删查。'
                      )
                    ])
                  ])
                ]),
                t._v(' '),
                e('h1', { attrs: { id: '技能清单' } }, [
                  e(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#技能清单' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' 技能清单')
                ]),
                t._v(' '),
                e('ul', [
                  e('li', [t._v('熟练掌握python,常用的算法和数据结构')]),
                  t._v(' '),
                  e('li', [
                    t._v(
                      '熟练掌握requests、Selenium、webdriver、pyppeteer模拟请求，应对常见的css字体加密，js加密，验证码，ua，cookie反爬。'
                    )
                  ]),
                  t._v(' '),
                  e('li', [
                    t._v(
                      '熟练掌握BeautifulSoup、re、json、XPath、CSS Selector解析网页提取数据'
                    )
                  ]),
                  t._v(' '),
                  e('li', [
                    t._v(
                      '熟练使用Scrapy，scrapy-redis构建分布式爬虫，阅读过scrapy-redis组件的源代码了解分布式爬虫原理。'
                    )
                  ]),
                  t._v(' '),
                  e('li', [t._v('熟练使用charles,mitm抓包移动端app小程序')]),
                  t._v(' '),
                  e('li', [
                    t._v('使用过Django、DRF、flask框架，了解RESTFUL设计风格')
                  ]),
                  t._v(' '),
                  e('li', [
                    t._v('使用过python 操作MongoDB，MySQL，Redis数据库。')
                  ]),
                  t._v(' '),
                  e('li', [
                    t._v(
                      '使用过Vue、Uniapp制作简单前端页面，了解HTML、CSS、js。'
                    )
                  ])
                ]),
                t._v(' '),
                e('hr'),
                t._v(' '),
                e('h1', { attrs: { id: '致谢' } }, [
                  e(
                    'a',
                    { staticClass: 'header-anchor', attrs: { href: '#致谢' } },
                    [t._v('#')]
                  ),
                  t._v(' 致谢')
                ]),
                t._v(' '),
                e('p', [
                  t._v('感谢您花时间阅读我的简历，期待能有机会和您共事。')
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
      r.default = s.exports
    }
  }
])
