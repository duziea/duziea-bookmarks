;(window.webpackJsonp = window.webpackJsonp || []).push([
  [24],
  {
    215: function(t, s, a) {
      'use strict'
      a.r(s)
      var n = a(0),
        r = Object(n.a)(
          {},
          function() {
            var t = this,
              s = t.$createElement,
              a = t._self._c || s
            return a(
              'ContentSlotsDistributor',
              { attrs: { 'slot-key': t.$parent.slotKey } },
              [
                a('h1', { attrs: { id: '极验滑动验证码破解' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#极验滑动验证码破解' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' 极验滑动验证码破解')
                ]),
                t._v(' '),
                a('p', [
                  t._v(
                    '本次模拟登陆网站为bilibili，bilibili滑动验证码调用的极验接口，理论上对所有极验接口滑动验证码都可行。\n'
                  ),
                  a(
                    'a',
                    {
                      attrs: {
                        href: 'https://passport.bilibili.com/login',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('bilibili登陆页面'), a('OutboundLink')],
                    1
                  ),
                  t._v(
                    '\nb站的登陆页面挺有趣的，它会悄悄的发送请求，post 提交一个oauthKey和gourl，大概间隔4、5秒。\n'
                  ),
                  a('img', {
                    attrs: {
                      src: 'https://img-blog.csdnimg.cn/20190920162216813.png',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  t._v(' '),
                  a('img', {
                    attrs: {
                      src: 'https://img-blog.csdnimg.cn/20190920162233978.png',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  t._v(
                    '\n输入账号密码，点击登陆，验证码跳出\n一起来看下整个流程\n'
                  ),
                  a('img', {
                    attrs: {
                      src:
                        'https://img-blog.csdnimg.cn/20190920162400702.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  t._v(
                    '\n1.get请求https://api.geetest.com/ajax.php，\n携带6个参数分别为gt、challenge、lang、pt、w、callback\n'
                  ),
                  a('img', {
                    attrs: {
                      src:
                        'https://img-blog.csdnimg.cn/20190920162435998.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  t._v(' '),
                  a('img', {
                    attrs: {
                      src:
                        'https://img-blog.csdnimg.cn/20190920162508103.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  t._v(' '),
                  a('img', {
                    attrs: {
                      src: 'https://img-blog.csdnimg.cn/20190920162534115.png',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  t._v(
                    '\n2.get请求https://static.geetest.com/static/js/slide.7.6.4.js\n'
                  ),
                  a('img', {
                    attrs: {
                      src: 'https://img-blog.csdnimg.cn/20190920162610242.png',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  t._v(' '),
                  a('img', {
                    attrs: {
                      src: 'https://img-blog.csdnimg.cn/20190920162713150.png',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  t._v(
                    '\n3.get请求https://api.geetest.com/get.php\n携带14个参数，gt、challenge有点眼熟，就是第一步的gt、challenge\n'
                  ),
                  a('img', {
                    attrs: {
                      src:
                        'https://img-blog.csdnimg.cn/201909201627423.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  t._v(' '),
                  a('img', {
                    attrs: {
                      src:
                        'https://img-blog.csdnimg.cn/20190920162803599.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  t._v(' '),
                  a('img', {
                    attrs: {
                      src: 'https://img-blog.csdnimg.cn/20190920162831988.png',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  t._v(' '),
                  a('img', {
                    attrs: {
                      src:
                        'https://img-blog.csdnimg.cn/20190920162909271.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  t._v(
                    '\n4.get请求https://static.geetest.com/static/ant/style_https.1.2.3.css\n'
                  ),
                  a('img', {
                    attrs: {
                      src: 'https://img-blog.csdnimg.cn/20190920162937580.png',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  t._v('\n5.试两下故意滑动失败的请求\n'),
                  a('img', {
                    attrs: {
                      src:
                        'https://img-blog.csdnimg.cn/20190920163011420.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  t._v(' '),
                  a('img', {
                    attrs: {
                      src:
                        'https://img-blog.csdnimg.cn/20190920163041193.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  t._v(' '),
                  a('img', {
                    attrs: {
                      src: 'https://img-blog.csdnimg.cn/20190920163111412.png',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  t._v(
                    '\n猜测滑动轨迹记录在w中，来回滑动几次，w过大，会导致\n'
                  ),
                  a('img', {
                    attrs: {
                      src: 'https://img-blog.csdnimg.cn/20190920163138902.png',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  t._v(' '),
                  a('img', {
                    attrs: {
                      src: 'https://img-blog.csdnimg.cn/20190920163239572.png',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  t._v('\n试下滑动成功\n'),
                  a('img', {
                    attrs: {
                      src:
                        'https://img-blog.csdnimg.cn/20190920163302629.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  t._v(' '),
                  a('img', {
                    attrs: {
                      src: 'https://img-blog.csdnimg.cn/20190920163322886.png',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  t._v('\n6.获取秘钥\n'),
                  a('img', {
                    attrs: {
                      src:
                        'https://img-blog.csdnimg.cn/20190920163334611.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  t._v(' '),
                  a('img', {
                    attrs: {
                      src: 'https://img-blog.csdnimg.cn/2019092016334975.png',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  t._v(' '),
                  a('img', {
                    attrs: {
                      src: 'https://img-blog.csdnimg.cn/20190920163414165.png',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  t._v('\n7.登陆请求，多请求两次\n'),
                  a('img', {
                    attrs: {
                      src: 'https://img-blog.csdnimg.cn/20190920163422817.png',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  t._v(
                    '\n可以看到发送的参数中，有challenge和validate即为验证码和验证通过值。\n'
                  ),
                  a('img', {
                    attrs: {
                      src:
                        'https://img-blog.csdnimg.cn/20190920163434562.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  t._v(' '),
                  a('img', {
                    attrs: {
                      src:
                        'https://img-blog.csdnimg.cn/20190920163536496.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  t._v(
                    '\n接下来，如何用selenium模拟登陆，\n首先要获得3张图片，即\nbg'
                  ),
                  a('img', {
                    attrs: {
                      src: 'https://img-blog.csdnimg.cn/2019092016355429.png',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  t._v('\nfullbg'),
                  a('img', {
                    attrs: {
                      src: 'https://img-blog.csdnimg.cn/20190920163613582.png',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  t._v('\nslice'),
                  a('img', {
                    attrs: {
                      src: 'https://img-blog.csdnimg.cn/20190920163622415.png',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  t._v('\n通过执行js，获得图片的base64编码，解码，写入')
                ]),
                t._v(' '),
                a('p', [
                  a('img', {
                    attrs: {
                      src:
                        'https://img-blog.csdnimg.cn/20190920164131370.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  t._v(
                    '\n分析slice的rgba值，当某点rgba值大于预设的阀值，即为滑动起点\n同理\n分析fullbg的rgba值-bg的rgba值，当某点rgba值大于预设的阀值，即为滑动终点\n得到滑动距离。'
                  )
                ]),
                t._v(' '),
                a('p', [
                  t._v(
                    'selenium只能匀速滑动\n为了模拟真人滑动，需要构建滑动轨迹track,\n实现先加速再减速，滑过了，再滑回。'
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
                        [t._v('get_track')]
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
                      t._v(' distance'),
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
                            "'''\n        输入要滑动距离distance = end-start\n        模拟滑动距离,\n        先加速滑动后减速，滑过了，再滑回\n        输出每次滑动的轨迹track\n        '''"
                          )
                        ]
                      ),
                      t._v('\n        v '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [
                        t._v('10')
                      ]),
                      t._v('\n        a '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [
                        t._v('0')
                      ]),
                      t._v('\n        t '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [
                        t._v('1')
                      ]),
                      t._v('\n        track '),
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
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(']')]
                      ),
                      t._v('\n        s '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [
                        t._v('0')
                      ]),
                      t._v('\n        mid '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' distance '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('/')]
                      ),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [
                        t._v('2')
                      ]),
                      t._v('\n        '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('while')]
                      ),
                      t._v(' s '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('<')]
                      ),
                      t._v(' distance'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v('\n            '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('if')]
                      ),
                      t._v(' s '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('<')]
                      ),
                      t._v(' mid'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v('\n                a '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [
                        t._v('6')
                      ]),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('*')]
                      ),
                      t._v(' random'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('random'),
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
                      t._v('\n                a '),
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
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [
                        t._v('3')
                      ]),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('*')]
                      ),
                      t._v(' random'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('random'),
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
                      t._v('\n            v0 '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' v\n            v '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' v0 '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('+')]
                      ),
                      t._v(' a '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('*')]
                      ),
                      t._v(' t\n            s0 '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' v0 '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('*')]
                      ),
                      t._v(' t '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('+')]
                      ),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [
                        t._v('1')
                      ]),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('/')]
                      ),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [
                        t._v('2')
                      ]),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('*')]
                      ),
                      t._v(' a '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('*')]
                      ),
                      t._v(' t '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('*')]
                      ),
                      t._v(' t\n            s '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('+=')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token builtin' } },
                        [t._v('abs')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('s0'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n            track'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('append'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('s0'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n        d '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' distance '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('-')]
                      ),
                      t._v(' s\n        track'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('append'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('d'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n        '),
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
                      t._v('track'),
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
                      t._v(' track\n')
                    ])
                  ])
                ]),
                a('p', [
                  a(
                    'a',
                    {
                      attrs: {
                        href:
                          'https://github.com/duziea/Python-imitate-login/blob/master/bilibili/login.py',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('github具体代码点我'), a('OutboundLink')],
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
      s.default = r.exports
    }
  }
])
