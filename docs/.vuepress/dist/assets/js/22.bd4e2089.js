;(window.webpackJsonp = window.webpackJsonp || []).push([
  [22],
  {
    219: function(s, t, a) {
      'use strict'
      a.r(t)
      var e = a(0),
        r = Object(e.a)(
          {},
          function() {
            var s = this,
              t = s.$createElement,
              a = s._self._c || t
            return a(
              'ContentSlotsDistributor',
              { attrs: { 'slot-key': s.$parent.slotKey } },
              [
                a('h1', { attrs: { id: 'scrapyd服务器跑爬虫-爬虫可视化' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#scrapyd服务器跑爬虫-爬虫可视化' }
                    },
                    [s._v('#')]
                  ),
                  s._v(' scrapyd服务器跑爬虫+爬虫可视化')
                ]),
                s._v(' '),
                a('p', [s._v('首先我们需要')]),
                s._v(' '),
                a('div', { staticClass: 'language-bash extra-class' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-bash' } }, [
                    a('code', [
                      s._v('pip '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [s._v('install')]
                      ),
                      s._v(' scrapyd\n')
                    ])
                  ])
                ]),
                a('p', [
                  a(
                    'a',
                    {
                      attrs: {
                        href:
                          'https://scrapyd.readthedocs.io/en/latest/api.html',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [s._v('scrapyd官方文档'), a('OutboundLink')],
                    1
                  )
                ]),
                s._v(' '),
                a('p', [
                  s._v(
                    'scrapyd 是由scrapy 官方提供的爬虫管理工具，它可以管理多个项目，每个项目可以上传多个版本，但默认使用最新版。'
                  )
                ]),
                s._v(' '),
                a('p', [s._v('启动scrapyd')]),
                s._v(' '),
                a('div', { staticClass: 'language-bash extra-class' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-bash' } }, [
                    a('code', [s._v('scrapyd\n')])
                  ])
                ]),
                a('p', [
                  a('img', {
                    attrs: {
                      src: 'https://img-blog.csdnimg.cn/20191029160417348.png',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  s._v(' '),
                  a('img', {
                    attrs: {
                      src:
                        'https://img-blog.csdnimg.cn/20191029160659880.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70',
                      alt: '在这里插入图片描述'
                    }
                  })
                ]),
                s._v(' '),
                a('p', [
                  s._v('部署项目\n'),
                  a(
                    'a',
                    {
                      attrs: {
                        href: 'https://github.com/scrapy/scrapyd-client',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [s._v('scrapyd-client官方文档'), a('OutboundLink')],
                    1
                  )
                ]),
                s._v(' '),
                a('div', { staticClass: 'language-bash extra-class' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-bash' } }, [
                    a('code', [
                      s._v('pip '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [s._v('install')]
                      ),
                      s._v(' scrapyd-client\n')
                    ])
                  ])
                ]),
                a('p', [
                  s._v('配置项目下的scrapy.cfg\n'),
                  a('img', {
                    attrs: {
                      src:
                        'https://img-blog.csdnimg.cn/2019102916164643.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  s._v(' '),
                  a('strong', [s._v('deploy设置')])
                ]),
                s._v(' '),
                a('ul', [
                  a('li', [s._v('url\t \t\t\t\t\t服务器地址')]),
                  s._v(' '),
                  a('li', [s._v('project\t\t\t\t项目名')]),
                  s._v(' '),
                  a('li', [s._v('username\t\t服务器登录账号')]),
                  s._v(' '),
                  a('li', [s._v('password\t\t服务器登录密码')])
                ]),
                s._v(' '),
                a('p', [s._v('在本地试一下。')]),
                s._v(' '),
                a('div', { staticClass: 'language-bash extra-class' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-bash' } }, [
                    a('code', [s._v('scrapyd-deploy\n')])
                  ])
                ]),
                a('p', [
                  a('img', {
                    attrs: {
                      src: 'https://img-blog.csdnimg.cn/201910291635058.png',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  s._v(' '),
                  a('img', {
                    attrs: {
                      src: 'https://img-blog.csdnimg.cn/2019102916353254.png',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  s._v(' '),
                  a('img', {
                    attrs: {
                      src:
                        'https://img-blog.csdnimg.cn/20191029170639749.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  s._v(
                    '\nscrapyd提供的网页只能做到监控爬虫运行情况，实际控制爬虫还需要在命令行输入curl指令，但我想在网页端直接控制爬虫怎么办？'
                  )
                ]),
                s._v(' '),
                a('h1', { attrs: { id: '爬虫可视化操作工具' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#爬虫可视化操作工具' }
                    },
                    [s._v('#')]
                  ),
                  s._v(' 爬虫可视化操作工具')
                ]),
                s._v(' '),
                a('h2', { attrs: { id: '_1-gerapy' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#_1-gerapy' }
                    },
                    [s._v('#')]
                  ),
                  s._v(' '),
                  a('strong', [s._v('1.Gerapy')])
                ]),
                s._v(' '),
                a('p', [
                  a(
                    'a',
                    {
                      attrs: {
                        href: 'https://github.com/Gerapy/Gerapy',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [s._v('github gerapy'), a('OutboundLink')],
                    1
                  ),
                  s._v(
                    '\ngerapy是国人制作的一款分布式爬虫管理框架，支持 Python 3，基于 Scrapy、Scrapyd、Scrapyd-Client、Scrapy-Redis、Scrapyd-API、Scrapy-Splash、Jinjia2、Django、Vue.js 开发。'
                  )
                ]),
                s._v(' '),
                a('p', [a('strong', [s._v('安装')])]),
                s._v(' '),
                a('div', { staticClass: 'language-bash extra-class' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-bash' } }, [
                    a('code', [
                      s._v('pip '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [s._v('install')]
                      ),
                      s._v(' gerapy\n')
                    ])
                  ])
                ]),
                a('p', [
                  a('img', {
                    attrs: {
                      src: 'https://img-blog.csdnimg.cn/20191029121105689.png',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  s._v('\n输入gerapy 提示如下，代表安装成功')
                ]),
                s._v(' '),
                a('div', { staticClass: 'language-bash extra-class' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-bash' } }, [
                    a('code', [s._v(' gerapy\n')])
                  ])
                ]),
                a('p', [
                  a('img', {
                    attrs: {
                      src: 'https://img-blog.csdnimg.cn/2019102912140158.png',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  s._v(
                    '\ngerapy  4连，用过django的同学看这个应该有种熟悉的感觉。'
                  )
                ]),
                s._v(' '),
                a('div', { staticClass: 'language-bash extra-class' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-bash' } }, [
                    a('code', [
                      s._v('gerapy init\n'),
                      a(
                        'span',
                        {
                          pre: !0,
                          attrs: { class: 'token builtin class-name' }
                        },
                        [s._v('cd')]
                      ),
                      s._v(' gerapy\ngerapy migrate\ngerapy runserver\n')
                    ])
                  ])
                ]),
                a('p', [
                  a('img', {
                    attrs: {
                      src: 'https://img-blog.csdnimg.cn/20191029121832848.png',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  s._v(' '),
                  a('img', {
                    attrs: {
                      src: 'https://img-blog.csdnimg.cn/20191029123956499.png',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  s._v(' '),
                  a('img', {
                    attrs: {
                      src:
                        'https://img-blog.csdnimg.cn/20191029123913128.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  s._v('\n连接scrapyd\n'),
                  a('img', {
                    attrs: {
                      src:
                        'https://img-blog.csdnimg.cn/20191029180814709.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  s._v(' '),
                  a('img', {
                    attrs: {
                      src:
                        'https://img-blog.csdnimg.cn/20191029181333516.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  s._v('\n忘了启动scrapyd，启动一下\n'),
                  a('img', {
                    attrs: {
                      src:
                        'https://img-blog.csdnimg.cn/20191029181425384.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  s._v('\n点击schedule，可以看到')
                ]),
                s._v(' '),
                a('p', [
                  a('img', {
                    attrs: {
                      src:
                        'https://img-blog.csdnimg.cn/2019102918162347.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  s._v(
                    '\nbaseketball、default为scrapyd当前管理的爬虫项目，shoes为每个项目下的spider。\nrun一下\n'
                  ),
                  a('img', {
                    attrs: {
                      src:
                        'https://img-blog.csdnimg.cn/20191029185625953.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  s._v(' '),
                  a('img', {
                    attrs: {
                      src: 'https://img-blog.csdnimg.cn/20191029185646138.png',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  s._v(' '),
                  a('img', {
                    attrs: {
                      src: 'https://img-blog.csdnimg.cn/20191029185806766.png',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  s._v(' '),
                  a('strong', [s._v('手动添加项目')]),
                  s._v('\n将之前的jdbook项目move进gerapy的projects\n'),
                  a('img', {
                    attrs: {
                      src: 'https://img-blog.csdnimg.cn/20191030111453410.png',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  s._v('\n刷新project，可以看到项目jdbook\n'),
                  a('img', {
                    attrs: {
                      src:
                        'https://img-blog.csdnimg.cn/2019103011173297.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  s._v('\n点击deploy')
                ]),
                s._v(' '),
                a('p', [
                  a('img', {
                    attrs: {
                      src:
                        'https://img-blog.csdnimg.cn/20191030112312609.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  s._v('\nbuild一下，生成了jdbook-1.0-py3.7.egg 文件\n'),
                  a('img', {
                    attrs: {
                      src:
                        'https://img-blog.csdnimg.cn/20191030112431968.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  s._v(
                    '\n这里遇到个问题，今天打开scrapyd，昨天部署的job没了，发现时scrapyd启动时的运行目录不对，换回昨天的目录就好了。\n将项目部署到制定client\n'
                  ),
                  a('img', {
                    attrs: {
                      src:
                        'https://img-blog.csdnimg.cn/20191030123317949.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  s._v('\n在client中就可以看到jdbook，run一下。\n'),
                  a('img', {
                    attrs: {
                      src:
                        'https://img-blog.csdnimg.cn/2019103012343786.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70',
                      alt: '在这里插入图片描述'
                    }
                  })
                ]),
                s._v(' '),
                a('h2', { attrs: { id: '_2-spiderkeeper' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#_2-spiderkeeper' }
                    },
                    [s._v('#')]
                  ),
                  s._v(' '),
                  a('strong', [s._v('2.spiderkeeper')])
                ]),
                s._v(' '),
                a('p', [
                  a(
                    'a',
                    {
                      attrs: {
                        href: 'https://github.com/DormyMo/SpiderKeeper/',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [s._v('github spiderkeeper'), a('OutboundLink')],
                    1
                  )
                ]),
                s._v(' '),
                a('div', { staticClass: 'language-bash extra-class' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-bash' } }, [
                    a('code', [
                      s._v('pip '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [s._v('install')]
                      ),
                      s._v(' spiderkeeper\n')
                    ])
                  ])
                ]),
                a('p', [
                  a('img', {
                    attrs: {
                      src: 'https://img-blog.csdnimg.cn/2019103014450489.png',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  s._v(' '),
                  a('img', {
                    attrs: {
                      src:
                        'https://img-blog.csdnimg.cn/2019103014453856.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  s._v(
                    '\n默认的url为0.0.0.0:5000,\nusername，password都为admin\n'
                  ),
                  a('img', {
                    attrs: {
                      src:
                        'https://img-blog.csdnimg.cn/20191030145523382.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  s._v(
                    '\n新建一个项目，名字随意，现在已经成功创建了一个项目，接下来需要上传项目的.egg文件,之前gerapy部署时，调用scrapydAPI接口自动生成.egg\n'
                  ),
                  a('img', {
                    attrs: {
                      src:
                        'https://img-blog.csdnimg.cn/2019103014584786.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  s._v('\n这里需要我们在scrapy项目根目录下输入如下指令生成')
                ]),
                s._v(' '),
                a('div', { staticClass: 'language-bash extra-class' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-bash' } }, [
                    a('code', [
                      s._v('scrapyd-deploy -p 项目名 -v 版本名 --build-egg'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [s._v('=')]
                      ),
                      s._v('egg包名.egg\n')
                    ])
                  ])
                ]),
                a('p', [
                  s._v('在jobdashboard可以看到爬虫的运行情况\n'),
                  a('img', {
                    attrs: {
                      src:
                        'https://img-blog.csdnimg.cn/20191030154820743.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  s._v(
                    '\nrun once开始运行爬虫，可以设定，爬取速度、参数、和运行服务器\n'
                  ),
                  a('img', {
                    attrs: {
                      src:
                        'https://img-blog.csdnimg.cn/20191030154949457.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70',
                      alt: '在这里插入图片描述'
                    }
                  })
                ]),
                s._v(' '),
                a('p', [
                  s._v(
                    'spiderkeeper还有一个定时爬虫功能，对于需要周期性运行的爬虫，可以设定周期时间\n'
                  ),
                  a('img', {
                    attrs: {
                      src:
                        'https://img-blog.csdnimg.cn/20191030155933312.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  s._v(' '),
                  a('img', {
                    attrs: {
                      src:
                        'https://img-blog.csdnimg.cn/20191030161755409.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70',
                      alt: '在这里插入图片描述'
                    }
                  })
                ]),
                s._v(' '),
                a('h2', { attrs: { id: '_3-scrapydweb' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#_3-scrapydweb' }
                    },
                    [s._v('#')]
                  ),
                  s._v(' '),
                  a('strong', [s._v('3.scrapydweb')])
                ]),
                s._v(' '),
                a('p', [
                  a(
                    'a',
                    {
                      attrs: {
                        href:
                          'https://github.com/my8100/files/blob/master/scrapydweb/README_CN.md',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [s._v('scrapydweb官方文档'), a('OutboundLink')],
                    1
                  )
                ]),
                s._v(' '),
                a('div', { staticClass: 'language-bash extra-class' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-bash' } }, [
                    a('code', [
                      s._v('pip '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [s._v('install')]
                      ),
                      s._v(' scrapydweb\n')
                    ])
                  ])
                ]),
                a('p', [s._v('执行')]),
                s._v(' '),
                a('div', { staticClass: 'language-bash extra-class' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-bash' } }, [
                    a('code', [s._v('scrapydweb\n')])
                  ])
                ]),
                a('p', [
                  s._v(
                    '会在当前目录下生成一个scrapydweb_settings_v10.py文件，\n'
                  ),
                  a('img', {
                    attrs: {
                      src:
                        'https://img-blog.csdnimg.cn/20191030164637520.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  s._v('\n简单配置下')
                ]),
                s._v(' '),
                a('div', { staticClass: 'language-python extra-class' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-python' } }, [
                    a('code', [
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [
                          s._v(
                            '############################## QUICK SETUP start ##############################'
                          )
                        ]
                      ),
                      s._v('\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [
                          s._v(
                            '############################## 快速设置 开始 ###################################'
                          )
                        ]
                      ),
                      s._v('\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [
                          s._v(
                            "# Setting SCRAPYDWEB_BIND to '0.0.0.0' or IP-OF-THE-CURRENT-HOST would make"
                          )
                        ]
                      ),
                      s._v('\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [
                          s._v(
                            "# ScrapydWeb server visible externally; Otherwise, set it to '127.0.0.1'."
                          )
                        ]
                      ),
                      s._v('\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [s._v("# The default is '0.0.0.0'.")]
                      ),
                      s._v('\nSCRAPYDWEB_BIND '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [s._v('=')]
                      ),
                      s._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        s._v("'0.0.0.0'")
                      ]),
                      s._v('\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [
                          s._v(
                            '# Accept connections on the specified port, the default is 5000.'
                          )
                        ]
                      ),
                      s._v('\nSCRAPYDWEB_PORT '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [s._v('=')]
                      ),
                      s._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [
                        s._v('5000')
                      ]),
                      s._v('\n\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [
                          s._v(
                            '# The default is False, set it to True to enable basic auth for the web UI.'
                          )
                        ]
                      ),
                      s._v('\nENABLE_AUTH '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [s._v('=')]
                      ),
                      s._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token boolean' } },
                        [s._v('False')]
                      ),
                      s._v('\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [
                          s._v(
                            '# In order to enable basic auth, both USERNAME and PASSWORD should be non-empty strings.'
                          )
                        ]
                      ),
                      s._v('\nUSERNAME '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [s._v('=')]
                      ),
                      s._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        s._v("'admin'")
                      ]),
                      s._v('\nPASSWORD '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [s._v('=')]
                      ),
                      s._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        s._v("'admin'")
                      ]),
                      s._v('\n')
                    ])
                  ])
                ]),
                a('p', [
                  s._v('再次执行 scrapydweb，登录\n'),
                  a('img', {
                    attrs: {
                      src:
                        'https://img-blog.csdnimg.cn/2019103017010183.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  s._v('\n部署\n'),
                  a('img', {
                    attrs: {
                      src:
                        'https://img-blog.csdnimg.cn/20191030173739924.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  s._v('\nrun spider。\n'),
                  a('img', {
                    attrs: {
                      src:
                        'https://img-blog.csdnimg.cn/20191030173846685.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  s._v('\n这个框架功能很强大，发送邮件，移动端ui等。')
                ]),
                s._v(' '),
                a('h2', { attrs: { id: '_4-spideradmin' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#_4-spideradmin' }
                    },
                    [s._v('#')]
                  ),
                  s._v(' '),
                  a('strong', [s._v('4.SpiderAdmin')])
                ]),
                s._v(' '),
                a('div', { staticClass: 'language-bash extra-class' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-bash' } }, [
                    a('code', [
                      s._v('pip '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [s._v('install')]
                      ),
                      s._v(' spideradmin\n')
                    ])
                  ])
                ]),
                a('p', [
                  a(
                    'a',
                    {
                      attrs: {
                        href: 'https://github.com/mouday/SpiderAdmin',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [s._v('github spideradmin'), a('OutboundLink')],
                    1
                  )
                ]),
                s._v(' '),
                a('p', [s._v('初始化，在当前目录下生成config.py')]),
                s._v(' '),
                a('div', { staticClass: 'language-bash extra-class' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-bash' } }, [
                    a('code', [s._v('spideradmin init\n')])
                  ])
                ]),
                a('div', { staticClass: 'language-python extra-class' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-python' } }, [
                    a('code', [
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [s._v('# -*- coding: utf-8 -*-')]
                      ),
                      s._v('\n\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [s._v('# 配置示例')]
                      ),
                      s._v('\n\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [s._v('# 批量配置scrapyd 服务器地址')]
                      ),
                      s._v('\nSCRAPYD_SERVERS '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [s._v('=')]
                      ),
                      s._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v('[')]
                      ),
                      s._v('\n    '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [s._v('# 别名（唯一）， 服务器地址')]
                      ),
                      s._v('\n    '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v('(')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        s._v('"master"')
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v(',')]
                      ),
                      s._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        s._v('"http://127.0.0.1:6800/"')
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v(')')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v(',')]
                      ),
                      s._v('\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v(']')]
                      ),
                      s._v('\n\nSECRET_KEY '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [s._v('=')]
                      ),
                      s._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        s._v('"2QDq4HSpT8U4W6iZ2xDzGW3CcY2WVsJXVEwYv0qludY="')
                      ]),
                      s._v('\n\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [s._v('# 配置端口号')]
                      ),
                      s._v('\nHOST '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [s._v('=')]
                      ),
                      s._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token boolean' } },
                        [s._v('None')]
                      ),
                      s._v('\nPORT '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [s._v('=')]
                      ),
                      s._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token boolean' } },
                        [s._v('None')]
                      ),
                      s._v('\n\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [s._v('# 登录账号密码')]
                      ),
                      s._v('\nBASIC_AUTH_USERNAME '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [s._v('=')]
                      ),
                      s._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        s._v('"admin"')
                      ]),
                      s._v('\nBASIC_AUTH_PASSWORD '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [s._v('=')]
                      ),
                      s._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        s._v('"123456"')
                      ]),
                      s._v('\n\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [s._v('# 如果为 True 整个站点都验证， 默认不验证')]
                      ),
                      s._v('\nBASIC_AUTH_FORCE '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [s._v('=')]
                      ),
                      s._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token boolean' } },
                        [s._v('False')]
                      ),
                      s._v('\n\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [s._v('# 执行结果数据库配置')]
                      ),
                      s._v('\nITEM_LOG_DATABASE_URL '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [s._v('=')]
                      ),
                      s._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token boolean' } },
                        [s._v('None')]
                      ),
                      s._v('\nITEM_LOG_TABLE '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [s._v('=')]
                      ),
                      s._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token boolean' } },
                        [s._v('None')]
                      ),
                      s._v('\n\n')
                    ])
                  ])
                ]),
                a('p', [s._v('spideradmin 启动服务')]),
                s._v(' '),
                a('p', [
                  a('img', {
                    attrs: {
                      src:
                        'https://img-blog.csdnimg.cn/2019103018362182.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  s._v(' '),
                  a('img', {
                    attrs: {
                      src:
                        'https://img-blog.csdnimg.cn/20191030185438772.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  s._v('\n暂时不支持web部署项目，官方推荐使用如下命令部署')
                ]),
                s._v(' '),
                a('div', { staticClass: 'language-bash extra-class' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-bash' } }, [
                    a('code', [s._v('scrapyd-deploy -a\n')])
                  ])
                ]),
                a('p', [
                  s._v('可以运行爬虫，设置定时\n'),
                  a('img', {
                    attrs: {
                      src:
                        'https://img-blog.csdnimg.cn/20191030185624581.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  s._v('\n支持任务控制，日志查询')
                ]),
                s._v(' '),
                a('p', [
                  a('img', {
                    attrs: {
                      src:
                        'https://img-blog.csdnimg.cn/20191030185802479.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70',
                      alt: '在这里插入图片描述'
                    }
                  })
                ]),
                s._v(' '),
                a('h2', { attrs: { id: '_5-scrapyart' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#_5-scrapyart' }
                    },
                    [s._v('#')]
                  ),
                  s._v(' '),
                  a('strong', [s._v('5.scrapyart')])
                ]),
                s._v(' '),
                a('p', [
                  a(
                    'a',
                    {
                      attrs: {
                        href: 'https://scrapydart.readthedocs.io/zh/latest/',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [
                      s._v('https://scrapydart.readthedocs.io/zh/latest/'),
                      a('OutboundLink')
                    ],
                    1
                  ),
                  s._v(
                    '\n官方说明\nscrapydArt在scrapyd基础上新增加了权限验证、爬虫调用情况统计、页面样式美化、运行信息统计以及新增加几个api等。对于爬虫管理，奎因的理念是"将80%的情况掌握在自己手中"\n'
                  ),
                  a('img', {
                    attrs: {
                      src:
                        'https://img-blog.csdnimg.cn/20191031093030606.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  s._v(' '),
                  a('img', {
                    attrs: {
                      src:
                        'https://img-blog.csdnimg.cn/2019103109310651.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70',
                      alt: '在这里插入图片描述'
                    }
                  }),
                  s._v(
                    '\n总的来说是一个增加了权限认证，爬虫运行信息统计的增强版scrapyd'
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
      t.default = r.exports
    }
  }
])
