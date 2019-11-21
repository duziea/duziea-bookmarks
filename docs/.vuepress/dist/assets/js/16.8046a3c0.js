;(window.webpackJsonp = window.webpackJsonp || []).push([
  [16],
  {
    220: function(t, s, a) {
      'use strict'
      a.r(s)
      var e = a(0),
        n = Object(e.a)(
          {},
          function() {
            var t = this,
              s = t.$createElement,
              a = t._self._c || s
            return a(
              'ContentSlotsDistributor',
              { attrs: { 'slot-key': t.$parent.slotKey } },
              [
                a('h1', { attrs: { id: 'pyspider-食用教程（1）' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#pyspider-食用教程（1）' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' pyspider 食用教程（1）')
                ]),
                t._v(' '),
                a('p', [
                  t._v(
                    '创建新项目，项目名称，起始url，mode，这里我选择了百度新闻作为起始url'
                  )
                ]),
                t._v(' '),
                a('p', [
                  a('img', {
                    attrs: {
                      src:
                        'https://img-blog.csdnimg.cn/20190926104234563.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70',
                      alt: '在这里插入图片描述'
                    }
                  })
                ]),
                t._v(' '),
                a('p', [
                  t._v('左边为调试界面，右边为预览界面\n'),
                  a('img', {
                    attrs: {
                      src:
                        'https://img-blog.csdnimg.cn/20190926104240692.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70',
                      alt: '在这里插入图片描述'
                    }
                  })
                ]),
                t._v(' '),
                a('p', [
                  t._v(
                    'run一下，执行on_start方法，返回index_page方法\n执行index_page方法，这里index_page遍历了当前网页的http页面，回调detail_page\n'
                  ),
                  a('img', {
                    attrs: {
                      src:
                        'https://img-blog.csdnimg.cn/20190926104404878.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70',
                      alt: '在这里插入图片描述'
                    }
                  })
                ]),
                t._v(' '),
                a('p', [t._v('执行detail_page方法，返回当前页面的title，url')]),
                t._v(' '),
                a('p', [
                  a('img', {
                    attrs: {
                      src:
                        'https://img-blog.csdnimg.cn/201909261044222.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70',
                      alt: '在这里插入图片描述'
                    }
                  })
                ]),
                t._v(' '),
                a('p', [
                  t._v('​\t返回项目页面，状态更换为debug或running，run一下')
                ]),
                t._v(' '),
                a('p', [
                  a('img', {
                    attrs: {
                      src:
                        'https://img-blog.csdnimg.cn/20190926104442944.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  t._v(
                    '\nresult，爬取结果，这里提供json、urljson、csv三种存储结构'
                  )
                ]),
                t._v(' '),
                a('p', [
                  a('img', {
                    attrs: {
                      src:
                        'https://img-blog.csdnimg.cn/20190926104458828.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  t._v(
                    '\nPySpider中提取response的内容默认提供了一个doc方法，内置pyquery解析后结果，可以用response.doc(你想要的内容的css_selector)提取.'
                  )
                ]),
                t._v(' '),
                a('p', [t._v('例如，我想要提取刚才新闻页面的内容')]),
                t._v(' '),
                a('p', [t._v('在detail_page方法的return中加入')]),
                t._v(' '),
                a('div', { staticClass: 'language-python extra-class' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-python' } }, [
                    a('code', [
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'content'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v('response'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('doc'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'#article > div'")
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
                      t._v('text'),
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
                  a('img', {
                    attrs: {
                      src:
                        'https://img-blog.csdnimg.cn/20190926104529413.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70',
                      alt: '在这里插入图片描述'
                    }
                  })
                ]),
                t._v(' '),
                a('p', [
                  a(
                    'a',
                    {
                      attrs: {
                        href: 'https://zhuanlan.zhihu.com/p/34422439',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('关于pyquery的更多食用方法点我'), a('OutboundLink')],
                    1
                  )
                ]),
                t._v(' '),
                a('p', [t._v('我](https://zhuanlan.zhihu.com/p/34422439)')]),
                t._v(' '),
                a('p', [
                  t._v('现在你应该能爬取一些简单的网站内容了，试着爬一下吧')
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
      s.default = n.exports
    }
  }
])
