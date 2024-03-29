;(window.webpackJsonp = window.webpackJsonp || []).push([
  [11],
  {
    209: function(t, e, s) {
      'use strict'
      s.r(e)
      var a = s(0),
        n = Object(a.a)(
          {},
          function() {
            var t = this,
              e = t.$createElement,
              s = t._self._c || e
            return s(
              'ContentSlotsDistributor',
              { attrs: { 'slot-key': t.$parent.slotKey } },
              [
                s('h2', { attrs: { id: '前言' } }, [
                  s(
                    'a',
                    { staticClass: 'header-anchor', attrs: { href: '#前言' } },
                    [t._v('#')]
                  ),
                  t._v(' 前言')
                ]),
                t._v(' '),
                s('p', [
                  s(
                    'a',
                    {
                      attrs: {
                        href: 'https://github.com/PanJiaChen/vue-element-admin',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('vue-element-admin'), s('OutboundLink')],
                    1
                  ),
                  t._v(' 从 '),
                  s('code', [t._v('2017.04.17')]),
                  t._v(
                    '提交第一个 commit 以来，维护至今已经有两年多的时间了了，发布了四十多个版本，收获了三万多的 stars，远远的超出了自己的预期。距离上次手摸手系列教程也已经过去了很久，主要因为：作为一个个人开源项目，维持它已经很难了，所以真的没啥时间写详细的教程了，光是维护项目 '
                  ),
                  s(
                    'a',
                    {
                      attrs: {
                        href:
                          'https://panjiachen.gitee.io/vue-element-admin-site/zh/',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('文档'), s('OutboundLink')],
                    1
                  ),
                  t._v(
                    ' 就让我很头疼了。也有不少人建议我出付费教学视频，但我个人还是更愿意把这个时间投入到维护开源项目之中吧。'
                  )
                ]),
                t._v(' '),
                s('p', [
                  t._v('本篇教程主要是趁着'),
                  s('code', [t._v('vue-element-admin')]),
                  t._v('发布了 '),
                  s(
                    'a',
                    {
                      attrs: {
                        href:
                          'https://github.com/PanJiaChen/vue-element-admin/releases',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('v4.0'), s('OutboundLink')],
                    1
                  ),
                  t._v(' 新版本，首先来简单说一下'),
                  s('code', [t._v('4.0')]),
                  t._v(
                    '版本做了哪些改动和优化。后半部分则会分享一些新的思考和一些小技巧吧。之前几篇手摸手文章都差不多两年前的了，但随着技术的不断发展迭代，很多之前的不能解决的问题也是都是有了新的解决方案的，同时也会出现一些新的问题和挑战。'
                  )
                ]),
                t._v(' '),
                s('h2', { attrs: { id: '_4-0-做了什么' } }, [
                  s(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#_4-0-做了什么' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' 4.0 做了什么')
                ]),
                t._v(' '),
                s('p', [
                  t._v('首先大概说一下'),
                  s('code', [t._v('4.0')]),
                  t._v('版本做了些什么，通过 '),
                  s(
                    'a',
                    {
                      attrs: {
                        href:
                          'https://github.com/PanJiaChen/vue-element-admin/pull/1291',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('pull request'), s('OutboundLink')],
                    1
                  ),
                  t._v(
                    ' 可以看出这是一次比较大的升级，有大概 170 多次的 commits，200 多个文件的改动。其中最大的改变是接轨 vue 社区，直接通过 '
                  ),
                  s('code', [t._v('vue-cli')]),
                  t._v(
                    '来进行构建，省去了很多额外繁琐的配置(下文会介绍)，并修改了之前 mock 数据的方案，本地改用 '
                  ),
                  s('code', [t._v('mock-server')]),
                  t._v(' 来解决之前'),
                  s('code', [t._v('mockjs')]),
                  t._v('带来的各种问题。同时增加了 '),
                  s('code', [t._v('jest')]),
                  t._v(' 单元测试，使用了'),
                  s('code', [t._v('async/await')]),
                  t._v(
                    '，增加了可视化配置权限，增加了自定义布局等等，优化了原先'
                  ),
                  s('code', [t._v('addRoutes')]),
                  t._v(
                    '的权限方案，支持不刷新页面更新路由等等功能。具体的可看 '
                  ),
                  s(
                    'a',
                    {
                      attrs: {
                        href:
                          'https://github.com/PanJiaChen/vue-element-admin/releases/tag/v4.0.0',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('github release'), s('OutboundLink')],
                    1
                  ),
                  t._v('。接下来我们着重来分析一下这几个功能。')
                ]),
                t._v(' '),
                s('h3', { attrs: { id: 'vue-cli-3' } }, [
                  s(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#vue-cli-3' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' vue-cli@3')
                ]),
                t._v(' '),
                s('p', [
                  t._v('本身配置方面没有啥特别好说的，官方'),
                  s(
                    'a',
                    {
                      attrs: {
                        href: 'https://cli.vuejs.org/zh/guide/',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('文档'), s('OutboundLink')],
                    1
                  ),
                  t._v('已经写得很详细了。这次更新基本上就是基于 '),
                  s(
                    'a',
                    {
                      attrs: {
                        href: 'https://github.com/neutrinojs/webpack-chain',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('webpack-chain'), s('OutboundLink')],
                    1
                  ),
                  t._v(' 把之前的 webpack 配置迁移了一遍，因为'),
                  s('code', [t._v('vue-cli')]),
                  t._v('帮你做了很多默认配置，所有可以省去一些代码。当然这种'),
                  s('code', [t._v('out-of-the-box')]),
                  t._v(
                    '的工具利弊也很明显，它能快速上手，大部分简单场景无需任何额外配置基本就能用了。但对于复杂度高的或者自定义性强的项目来说，配置复杂度可能没有减少太多。它要求你不仅要对 webpack 或者相关工程化的东西很很熟悉，你还要对'
                  ),
                  s('code', [t._v('vue-cli')]),
                  t._v(
                    '做的一些默认配置和参数也有有一定了解，时不时要去看一下源码它到底干了啥，有的时候它的一些 plugin 出现了问题还不太好解决。而且说实话 '
                  ),
                  s('code', [t._v('webpack-chain')]),
                  t._v(
                    ' 的书写也是有些门槛的，大部分情况下我也很难保证自己的配置写对的，还好官方提供了'
                  ),
                  s('code', [t._v('inspec')]),
                  t._v('功能，能让配置简单了不少。当你想知道自己的 '),
                  s('code', [t._v('vue-config.js')]),
                  t._v(' 里的配置到底对不对的时候，你可以在命令行里执行'),
                  s('code', [t._v('vue inspect > output.js')]),
                  t._v(',它会将你最终生成的'),
                  s('code', [t._v('config')]),
                  t._v('展现在'),
                  s('code', [t._v('output.js')]),
                  t._v(
                    '之中，不过它默认显示的是开发环境的配置。如果你想查看其它环境的配置可以通过'
                  ),
                  s('code', [
                    t._v('vue inspect --mode production > output.js')
                  ]),
                  t._v(
                    '。在写构建配置的时候这个功能很有帮助，同时也能帮助你了解'
                  ),
                  s('code', [t._v('vue-cli')]),
                  t._v('在构建时到底帮你做了些什么。')
                ]),
                t._v(' '),
                s('p', [
                  t._v('其它还有些需要注意的如：环境变量 必须以'),
                  s('code', [t._v('VUE_APP_')]),
                  t._v('开头啊，怎么设置'),
                  s('code', [t._v('polyfill')]),
                  t._v('啊，怎么配置各种各样的'),
                  s('code', [t._v('loader')]),
                  t._v(
                    '啊，就不展开了，文档或者社区都有很多文章了。具体配置可以参考 '
                  ),
                  s(
                    'a',
                    {
                      attrs: {
                        href: 'https://github.com/PanJiaChen/vue-element-admin',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('vue.config.js'), s('OutboundLink')],
                    1
                  )
                ]),
                t._v(' '),
                s('p', [
                  t._v(
                    '这里还有一个黑科技，看过我之前文章的小伙伴应该还有印象，我一般在开发环境是不使用路由懒加载的，因为这样会导致热更新速度变慢，具体的可以看之前的 '
                  ),
                  s(
                    'a',
                    {
                      attrs: {
                        href:
                          'https://panjiachen.gitee.io/vue-element-admin-site/zh/guide/advanced/lazy-loading.html#%E8%B7%AF%E7%94%B1%E6%87%92%E5%8A%A0%E8%BD%BD',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('文章'), s('OutboundLink')],
                    1
                  ),
                  t._v('，在'),
                  s('code', [t._v('vue-cli@3')]),
                  t._v('中可以更简单的实现，你只要在'),
                  s('code', [t._v('.env.development')]),
                  t._v('环境变量配置文件中设置'),
                  s('code', [t._v('VUE_CLI_BABEL_TRANSPILE_MODULES:true')]),
                  t._v(
                    '就可以了。它的实现逻辑和原理与之前还是一样的，还是基于 '
                  ),
                  s(
                    'a',
                    {
                      attrs: {
                        href:
                          'https://github.com/airbnb/babel-plugin-dynamic-import-node',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [
                      t._v('plugins babel-plugin-dynamic-import-node'),
                      s('OutboundLink')
                    ],
                    1
                  ),
                  t._v(' 来实现的。之所以在'),
                  s('code', [t._v('vue-cli')]),
                  t._v('中只需要设置一个变量就可以了，是借用了'),
                  s('code', [t._v('vue-cli')]),
                  t._v('它的默认配置，它帮你代码都写好了。通过阅读 '),
                  s(
                    'a',
                    {
                      attrs: {
                        href:
                          'https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/babel-preset-app/index.js',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('源码'), s('OutboundLink')],
                    1
                  ),
                  t._v(' 可知，'),
                  s('code', [t._v('vue-cli')]),
                  t._v('会通过'),
                  s('code', [t._v('VUE_CLI_BABEL_TRANSPILE_MODULES')]),
                  t._v('这个环境变量来区分是否使用'),
                  s('code', [t._v('babel-plugin-dynamic-import-node')]),
                  t._v(
                    '，所以我们只要开其它就可以。虽然它的初衷是为了单元测试的，但正好满足了我们的需求。'
                  )
                ]),
                t._v(' '),
                s('p', [
                  t._v('总的来说，'),
                  s('code', [t._v('vue-cli')]),
                  t._v(
                    '对于大部分用户来说还是省去了一些繁琐的配置的。如果你使用本项目的话，基本也不需要做其它过多的额外配置的。'
                  )
                ]),
                t._v(' '),
                s('h3', { attrs: { id: 'redirect' } }, [
                  s(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#redirect' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' redirect')
                ]),
                t._v(' '),
                s('p', [
                  t._v('不刷新页面的情况下，更新页面，这个'),
                  s(
                    'a',
                    {
                      attrs: {
                        href: 'https://github.com/vuejs/vue-router/issues/296',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v(' issue'), s('OutboundLink')],
                    1
                  ),
                  t._v(' 两年前就提出来了，之前的文章里面也提供了一个 '),
                  s(
                    'a',
                    {
                      attrs: {
                        href:
                          'https://juejin.im/post/593121aa0ce4630057f70d35#heading-3',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('解决方案'), s('OutboundLink')],
                    1
                  ),
                  t._v('。在这里分享一下，我目前使用的新方案。')
                ]),
                t._v(' '),
                s('div', { staticClass: 'language-html extra-class' }, [
                  s('pre', { pre: !0, attrs: { class: 'language-html' } }, [
                    s('code', [
                      t._v('// 先注册一个名为 `redirect` 的路由\n'),
                      s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                        s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                          s(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [t._v('<')]
                          ),
                          t._v('script')
                        ]),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('>')]
                        )
                      ]),
                      s('span', { pre: !0, attrs: { class: 'token script' } }, [
                        s(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token language-javascript' }
                          },
                          [
                            t._v('\n  '),
                            s(
                              'span',
                              { pre: !0, attrs: { class: 'token keyword' } },
                              [t._v('export')]
                            ),
                            t._v(' '),
                            s(
                              'span',
                              { pre: !0, attrs: { class: 'token keyword' } },
                              [t._v('default')]
                            ),
                            t._v(' '),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('{')]
                            ),
                            t._v('\n    '),
                            s(
                              'span',
                              { pre: !0, attrs: { class: 'token function' } },
                              [t._v('beforeCreate')]
                            ),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('(')]
                            ),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(')')]
                            ),
                            t._v(' '),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('{')]
                            ),
                            t._v('\n      '),
                            s(
                              'span',
                              { pre: !0, attrs: { class: 'token keyword' } },
                              [t._v('const')]
                            ),
                            t._v(' '),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('{')]
                            ),
                            t._v(' params'),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(',')]
                            ),
                            t._v(' query '),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('}')]
                            ),
                            t._v(' '),
                            s(
                              'span',
                              { pre: !0, attrs: { class: 'token operator' } },
                              [t._v('=')]
                            ),
                            t._v(' '),
                            s(
                              'span',
                              { pre: !0, attrs: { class: 'token keyword' } },
                              [t._v('this')]
                            ),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('.')]
                            ),
                            t._v('$route\n      '),
                            s(
                              'span',
                              { pre: !0, attrs: { class: 'token keyword' } },
                              [t._v('const')]
                            ),
                            t._v(' '),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('{')]
                            ),
                            t._v(' path '),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('}')]
                            ),
                            t._v(' '),
                            s(
                              'span',
                              { pre: !0, attrs: { class: 'token operator' } },
                              [t._v('=')]
                            ),
                            t._v(' params\n      '),
                            s(
                              'span',
                              { pre: !0, attrs: { class: 'token keyword' } },
                              [t._v('this')]
                            ),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('.')]
                            ),
                            t._v('$router'),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('.')]
                            ),
                            s(
                              'span',
                              { pre: !0, attrs: { class: 'token function' } },
                              [t._v('replace')]
                            ),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('(')]
                            ),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('{')]
                            ),
                            t._v(' path'),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(':')]
                            ),
                            t._v(' '),
                            s(
                              'span',
                              { pre: !0, attrs: { class: 'token string' } },
                              [t._v("'/'")]
                            ),
                            t._v(' '),
                            s(
                              'span',
                              { pre: !0, attrs: { class: 'token operator' } },
                              [t._v('+')]
                            ),
                            t._v(' path'),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(',')]
                            ),
                            t._v(' query '),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('}')]
                            ),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(')')]
                            ),
                            t._v('\n    '),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('}')]
                            ),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(',')]
                            ),
                            t._v('\n    '),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: {
                                  class: 'token function-variable function'
                                }
                              },
                              [t._v('render')]
                            ),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(':')]
                            ),
                            t._v(' '),
                            s(
                              'span',
                              { pre: !0, attrs: { class: 'token keyword' } },
                              [t._v('function')]
                            ),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('(')]
                            ),
                            s(
                              'span',
                              { pre: !0, attrs: { class: 'token parameter' } },
                              [t._v('h')]
                            ),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(')')]
                            ),
                            t._v(' '),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('{')]
                            ),
                            t._v('\n      '),
                            s(
                              'span',
                              { pre: !0, attrs: { class: 'token keyword' } },
                              [t._v('return')]
                            ),
                            t._v(' '),
                            s(
                              'span',
                              { pre: !0, attrs: { class: 'token function' } },
                              [t._v('h')]
                            ),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('(')]
                            ),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(')')]
                            ),
                            t._v(' '),
                            s(
                              'span',
                              { pre: !0, attrs: { class: 'token comment' } },
                              [t._v('// avoid warning message')]
                            ),
                            t._v('\n    '),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('}')]
                            ),
                            t._v('\n  '),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('}')]
                            ),
                            t._v('\n')
                          ]
                        )
                      ]),
                      s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                        s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                          s(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [t._v('</')]
                          ),
                          t._v('script')
                        ]),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('>')]
                        )
                      ]),
                      t._v('\n')
                    ])
                  ])
                ]),
                s('div', { staticClass: 'language-js extra-class' }, [
                  s('pre', { pre: !0, attrs: { class: 'language-js' } }, [
                    s('code', [
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('const')]
                      ),
                      t._v(' '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('{')]
                      ),
                      t._v(' fullPath '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('}')]
                      ),
                      t._v(' '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('this')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('$route\n'),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('this')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('$router'),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [t._v('replace')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('{')]
                      ),
                      t._v('\n  path'),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v(' '),
                      s('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'/redirect'")
                      ]),
                      t._v(' '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('+')]
                      ),
                      t._v(' fullPath\n'),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('}')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n')
                    ])
                  ])
                ]),
                s('p', [
                  t._v('当遇到你需要刷新页面的情况，你就手动重定向页面到'),
                  s('code', [t._v('redirect')]),
                  t._v('页面，它会将页面重新'),
                  s('code', [t._v('redirect')]),
                  t._v('重定向回来，从而间接实现了刷新页面组件的效果。')
                ]),
                t._v(' '),
                s('h3', { attrs: { id: 'addroutes-removeroutes' } }, [
                  s(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#addroutes-removeroutes' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' addRoutes && removeRoutes')
                ]),
                t._v(' '),
                s('p', [
                  t._v(
                    '看过我之前文章的人肯定知道，我目前 vue 项目的权限控制都是通过 '
                  ),
                  s('code', [t._v('addRoutes')]),
                  t._v('来实现的。简单说就是：用户登录之后会返回一个权限凭证'),
                  s('code', [t._v('Token')]),
                  t._v('，用户在根据这个'),
                  s('code', [t._v('Token')]),
                  t._v('去问服务端询问自己的权限，辟如服务端返回权限是'),
                  s('code', [t._v("['editor']")]),
                  t._v('，前端再根据这个权限动态生成他能访问的路由，再通过'),
                  s('code', [t._v('addRoutes')]),
                  t._v('进行动态的路由挂载。具体的代码可见 '),
                  s(
                    'a',
                    {
                      attrs: {
                        href:
                          'https://github.com/PanJiaChen/vue-element-admin/blob/master/src/permission.js',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('permission.js'), s('OutboundLink')],
                    1
                  )
                ]),
                t._v(' '),
                s('p', [
                  t._v(
                    '但这个方案一直是有一个弊端的。那就是动态添加的路由，并不能动态的删除。这就是导致一个问题，当用户权限发生变化的时候，或者说用户登出的时候，我们只能通过刷新页面的方式，才能清空我们之前注册的路由。之前老版本的 '
                  ),
                  s('code', [t._v('vue-element-admin')]),
                  t._v(
                    '就一直采用的是这种方式。虽然能用，但作为一个 spa，刷新页面其实是一种很糟糕的用户体验。但是官方也迟迟没有出相关的 remove api，相关 '
                  ),
                  s(
                    'a',
                    {
                      attrs: {
                        href: 'https://github.com/vuejs/vue-router/issues/1234',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('issue'), s('OutboundLink')],
                    1
                  )
                ]),
                t._v(' '),
                s('p', [
                  t._v(
                    '后来发现了一种 hack 的方法，能很好的动态清除注册的路由。先看代码：'
                  )
                ]),
                t._v(' '),
                s('p', [
                  s('img', {
                    attrs: {
                      src:
                        'https://user-gold-cdn.xitu.io/2019/5/7/16a91c8c858a816e?w=942&h=530&f=png&s=89867',
                      alt: ''
                    }
                  })
                ]),
                t._v(' '),
                s('p', [
                  t._v(
                    '它的原理其实很简单，所有的 vue-router 注册的路由信息都是存放在'
                  ),
                  s('code', [t._v('matcher')]),
                  t._v(
                    '之中的，所以当我们想清空路由的时候，我们只要新建一个空的'
                  ),
                  s('code', [t._v('Router实例')]),
                  t._v('，将它的'),
                  s('code', [t._v('matcher')]),
                  t._v(
                    '重新赋值给我们之前定义的路由就可以了。巧妙的实现了动态路由的清除。\n现在我们只需要调用'
                  ),
                  s('code', [t._v('resetRouter')]),
                  t._v('，就能得到一个空的路有实例，之后你就可以重新'),
                  s('code', [t._v('addRoutes')]),
                  t._v('你想要的路由了。完整的代码实例 '),
                  s(
                    'a',
                    {
                      attrs: {
                        href:
                          'https://github.com/PanJiaChen/vue-element-admin/blob/master/src/router/index.js',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('router.js'), s('OutboundLink')],
                    1
                  ),
                  t._v('，'),
                  s(
                    'a',
                    {
                      attrs: {
                        href:
                          'https://github.com/PanJiaChen/vue-element-admin/blob/00a19db299399f3243e86d58f41a623e20571bd3/src/store/modules/user.js',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('resetRouter'), s('OutboundLink')],
                    1
                  )
                ]),
                t._v(' '),
                s('h3', { attrs: { id: 'mock-数据' } }, [
                  s(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#mock-数据' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Mock 数据')
                ]),
                t._v(' '),
                s('p', [
                  t._v(
                    '如果你在实际开发中，最理想的前后端交互方式当然是后端先帮我们 mock 数据，然后前端开发。但现实很骨感，总会因为种种原因，前端需要自己来 mock 假数据。尤其是我的几个开源项目，都是纯前端项目，根本没有后端服务。\n在之前的文章中也介绍过，'
                  ),
                  s('code', [t._v('vue-element-admin')]),
                  t._v(' 和 '),
                  s('code', [t._v('vue-admin-template')]),
                  t._v(' 使用的是 '),
                  s(
                    'a',
                    {
                      attrs: {
                        href: 'https://github.com/nuysoft/Mock',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('MockJS'), s('OutboundLink')],
                    1
                  ),
                  t._v(' 和 '),
                  s(
                    'a',
                    {
                      attrs: {
                        href: 'https://github.com/easy-mock/easy-mock',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('easy-mock'), s('OutboundLink')],
                    1
                  ),
                  t._v(' 这两个库。但实际用下来两者都有一些问题。')
                ]),
                t._v(' '),
                s('ul', [
                  s('li', [
                    s('p', [t._v('MockJs')]),
                    t._v(' '),
                    s('p', [
                      t._v(
                        '它的原理是: 拦截了所有的请求并代理到本地，然后进行数据模拟，所以你会发现 '
                      ),
                      s('code', [t._v('network')]),
                      t._v(
                        ' 中没有发出任何的请求。但它的最大的问题是就是它的实现机制。它会重写浏览器的'
                      ),
                      s('code', [t._v('XMLHttpRequest')]),
                      t._v(
                        '对象，从而才能拦截所有请求，代理到本地。大部分情况下用起来还是蛮方便的，但就因为它重写了'
                      ),
                      s('code', [t._v('XMLHttpRequest')]),
                      t._v('对象，所以比如'),
                      s('code', [t._v('progress')]),
                      t._v('方法，或者一些底层依赖'),
                      s('code', [t._v('XMLHttpRequest')]),
                      t._v('的库都会和它发生不兼容，可以看一下我项目的 '),
                      s(
                        'a',
                        {
                          attrs: {
                            href:
                              'https://github.com/PanJiaChen/vue-element-admin/issues?utf8=%E2%9C%93&q=mock',
                            target: '_blank',
                            rel: 'noopener noreferrer'
                          }
                        },
                        [t._v('issues'), s('OutboundLink')],
                        1
                      ),
                      t._v('，就知道多少人被坑了。')
                    ]),
                    t._v(' '),
                    s('p', [
                      t._v(
                        '它还有一个问题：因为是它是本地模拟数据，实际上不会走任何网络请求。所以本地调试起来很蛋疼，只能通过'
                      ),
                      s('code', [t._v('console.log')]),
                      t._v('来调试。就拿'),
                      s('code', [t._v('vue-element-admin')]),
                      t._v('来说，想搞清楚 '),
                      s('code', [t._v('getInfo()')]),
                      t._v('接口返回了什么数据，只能通过看源码或者手动 '),
                      s('code', [t._v('Debug')]),
                      t._v(' 才能知道。')
                    ])
                  ])
                ]),
                t._v(' '),
                s('ul', [
                  s('li', [
                    s('p', [t._v('Easy-Mock')]),
                    t._v(' '),
                    s('p', [
                      t._v(
                        '这个项目刚出的时候用的人比较少，还真的挺好用的。天然支持跨域，还是支持'
                      ),
                      s('code', [t._v('MockJs')]),
                      t._v(
                        '的所有语法，我在之前也推荐过。但因为用的人多了，它的免费服务会经常的挂，可以说天天挂。。。但毕竟人家这是免费的服务，也不能苛求什么，官方的建议是自己搭建服务。如果你的公司整体搭建一个这样的 mock 服务的话也是一个不错的选择。但大部分人可能还是没有这个技术条件的。'
                      )
                    ])
                  ])
                ]),
                t._v(' '),
                s('h4', { attrs: { id: '新方案' } }, [
                  s(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#新方案' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' 新方案')
                ]),
                t._v(' '),
                s('p', [
                  t._v(
                    '所以我一直在寻求一个更好的解决方案，我也去体验了其它很多 mock api 服务，如 '
                  ),
                  s(
                    'a',
                    {
                      attrs: {
                        href: 'https://www.mockapi.io/login',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('mockapi'), s('OutboundLink')],
                    1
                  ),
                  t._v('、'),
                  s(
                    'a',
                    {
                      attrs: {
                        href: 'https://www.mocky.io/',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('Mocky'), s('OutboundLink')],
                    1
                  ),
                  t._v(' 等等。总之体验都不能满足我的需求。')
                ]),
                t._v(' '),
                s('p', [
                  t._v('在'),
                  s('code', [t._v('v4.0')]),
                  t._v('版本之后，在本地会启动一个'),
                  s('code', [t._v('mock-server')]),
                  t._v('来模拟数据，线上环境还是继续使用'),
                  s('code', [t._v('mockjs')]),
                  t._v(
                    '来进行模拟(因为本项目是一个纯前端项目，你也可以自己搭建一个线上 server 来提供数据)。不管是本地还是线上所以的数据模拟都是基于'
                  ),
                  s('code', [t._v('mockjs')]),
                  t._v(
                    '生成的，所以只要写一套 mock 数据，就可以在多环境中使用。'
                  )
                ]),
                t._v(' '),
                s('p', [
                  t._v('该方案的好处是，在保留 '),
                  s('code', [t._v('mockjs')]),
                  t._v(
                    '的优势的同时，解决之前的痛点。由于我们的 mock 是完全基于'
                  ),
                  s('code', [t._v('webpack-dev-serve')]),
                  t._v('来实现的，所以在你启动前端服务的同时，'),
                  s('code', [t._v('mock-server')]),
                  t._v('就会自动启动，这里还通过 '),
                  s(
                    'a',
                    {
                      attrs: {
                        href: 'https://github.com/paulmillr/chokidar',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('chokidar'), s('OutboundLink')],
                    1
                  ),
                  t._v(' 来观察 '),
                  s('code', [t._v('mock')]),
                  t._v(' 文件夹内容的变化。在发生变化时会清除之前注册的'),
                  s('code', [t._v('mock-api')]),
                  t._v(
                    '接口，重新动态挂载新的接口，从而支持热更新。有兴趣的可以自己看一下代码 '
                  ),
                  s(
                    'a',
                    {
                      attrs: {
                        href:
                          'https://github.com/PanJiaChen/vue-element-admin/blob/master/mock/mock-server.js',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('mock-server.js'), s('OutboundLink')],
                    1
                  ),
                  t._v('。由于是一个真正的'),
                  s('code', [t._v('server')]),
                  t._v('，所以你可以通过控制台中的'),
                  s('code', [t._v('network')]),
                  t._v('，清楚的知道接口返回的数据结构。并且同时解决了之前'),
                  s('code', [t._v('mockjs')]),
                  t._v('会重写 '),
                  s('code', [t._v('XMLHttpRequest')]),
                  t._v('对象，导致很多第三方库失效的问题。')
                ]),
                t._v(' '),
                s('p', [
                  t._v('在本地开发环境中基于'),
                  s('code', [t._v('webpack-dev-serve')]),
                  t._v('的 '),
                  s('code', [t._v('after')]),
                  t._v('这个'),
                  s('code', [t._v('middleware中间件')]),
                  t._v('，在这里自动读取你的 '),
                  s('code', [t._v('mock')]),
                  t._v(
                    '文件，模拟出 REST API，它最大的好处是，完全不需要什么额外的工作，完全基于'
                  ),
                  s('code', [t._v('webpack-dev-serve')]),
                  t._v('就能实现。如果你还是想单独启动一个'),
                  s('code', [t._v('serve')]),
                  t._v('也是可以的，完全可以引入一个'),
                  s('code', [t._v('express')]),
                  t._v('或者其它插件来启动一个 mock-serve。')
                ]),
                t._v(' '),
                s('p', [
                  t._v(
                    '我们模拟数据有了，现在要做的事情就是，将我们的接口代理到我们的 mock 服务上就好了，这里我们使用'
                  ),
                  s('code', [t._v('webpack-dev-serve')]),
                  t._v('自带的 '),
                  s('code', [t._v('proxy')]),
                  t._v('进行接口代理。')
                ]),
                t._v(' '),
                s('div', { staticClass: 'language-js extra-class' }, [
                  s('pre', { pre: !0, attrs: { class: 'language-js' } }, [
                    s('code', [
                      t._v('proxy'),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v(' '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('{')]
                      ),
                      t._v('\n      '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v('// xxx-api/login => mock/login')]
                      ),
                      t._v('\n      '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('[')]
                      ),
                      t._v('process'),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('env'),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token constant' } },
                        [t._v('VUE_APP_BASE_API')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(']')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v(' '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('{')]
                      ),
                      t._v('\n        target'),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v(' '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token template-string' } },
                        [
                          s(
                            'span',
                            {
                              pre: !0,
                              attrs: {
                                class: 'token template-punctuation string'
                              }
                            },
                            [t._v('`')]
                          ),
                          s(
                            'span',
                            { pre: !0, attrs: { class: 'token string' } },
                            [t._v('http://localhost:')]
                          ),
                          s(
                            'span',
                            {
                              pre: !0,
                              attrs: { class: 'token interpolation' }
                            },
                            [
                              s(
                                'span',
                                {
                                  pre: !0,
                                  attrs: {
                                    class:
                                      'token interpolation-punctuation punctuation'
                                  }
                                },
                                [t._v('${')]
                              ),
                              t._v('port'),
                              s(
                                'span',
                                {
                                  pre: !0,
                                  attrs: {
                                    class:
                                      'token interpolation-punctuation punctuation'
                                  }
                                },
                                [t._v('}')]
                              )
                            ]
                          ),
                          s(
                            'span',
                            { pre: !0, attrs: { class: 'token string' } },
                            [t._v('/mock')]
                          ),
                          s(
                            'span',
                            {
                              pre: !0,
                              attrs: {
                                class: 'token template-punctuation string'
                              }
                            },
                            [t._v('`')]
                          )
                        ]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v('\n        changeOrigin'),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v(' '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token boolean' } },
                        [t._v('true')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v('\n        pathRewrite'),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v(' '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('{')]
                      ),
                      t._v('\n          '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('[')]
                      ),
                      s('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'^'")
                      ]),
                      t._v(' '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('+')]
                      ),
                      t._v(' process'),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('env'),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token constant' } },
                        [t._v('VUE_APP_BASE_API')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(']')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v(' '),
                      s('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("''")
                      ]),
                      t._v('\n        '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('}')]
                      ),
                      t._v('\n      '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('}')]
                      ),
                      t._v('\n    '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('}')]
                      ),
                      t._v('\n')
                    ])
                  ])
                ]),
                s('h3', { attrs: { id: 'snippets-自动生成代码片段' } }, [
                  s(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#snippets-自动生成代码片段' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' snippets 自动生成代码片段')
                ]),
                t._v(' '),
                s('p', [
                  t._v(
                    '平时日常工作中，做最多的就是写业务模块和组件。当每次新开一个'
                  ),
                  s('code', [t._v('view')]),
                  t._v('或者'),
                  s('code', [t._v('component')]),
                  t._v('的时候都需要手动创建一个新'),
                  s('code', [t._v('.vue')]),
                  t._v('文件，然后再创建'),
                  s('code', [t._v('<template>')]),
                  t._v('、'),
                  s('code', [t._v('<script>')]),
                  t._v('、'),
                  s('code', [t._v('<style>')]),
                  t._v('这些标签，还是有些麻烦的。')
                ]),
                t._v(' '),
                s('p', [
                  t._v('所以在新版本中，基于'),
                  s(
                    'a',
                    {
                      attrs: {
                        href: 'https://github.com/amwmedia/plop',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('plop'), s('OutboundLink')],
                    1
                  ),
                  t._v('，提供了几个基础模板，方便创建新的'),
                  s('code', [t._v('view')]),
                  t._v('或者'),
                  s('code', [t._v('component')]),
                  t._v('。\n执行如下命令：')
                ]),
                t._v(' '),
                s('div', { staticClass: 'language-bash extra-class' }, [
                  s('pre', { pre: !0, attrs: { class: 'language-bash' } }, [
                    s('code', [
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [t._v('npm')]
                      ),
                      t._v(' run new\n')
                    ])
                  ])
                ]),
                s('p', [
                  s('img', {
                    attrs: {
                      src:
                        'https://user-gold-cdn.xitu.io/2019/4/1/169d8c88d29472cb?w=1257&h=614&f=gif&s=327377',
                      alt: 'plop'
                    }
                  })
                ]),
                t._v(' '),
                s('p', [
                  t._v(
                    '如上面 gif 所示，现在只要轻松的点几次回车就可以轻松生成我要的基础代码片段。这里只是一个 demo，你完全可以按照自己需求定制模板。老版本的'
                  ),
                  s('code', [t._v('vue-cli')]),
                  t._v('实现逻辑和它类似。')
                ]),
                t._v(' '),
                s('p', [
                  t._v('如果你觉得配置太复杂，我推荐你可以安装如 '),
                  s(
                    'a',
                    {
                      attrs: {
                        href:
                          'https://marketplace.visualstudio.com/items?itemName=hollowtree.vue-snippets',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('Vue 2 Snippets'), s('OutboundLink')],
                    1
                  ),
                  t._v(' '),
                  s('code', [t._v('VS Code')]),
                  t._v(
                    '插件。 这种代码片段在平时工作中还是能提升不少开发效率的。'
                  )
                ]),
                t._v(' '),
                s('h3', { attrs: { id: 'async-await-or-promise' } }, [
                  s(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#async-await-or-promise' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' async/await or promise')
                ]),
                t._v(' '),
                s('p', [
                  t._v('本次更新中，我也将部分代码用了'),
                  s('code', [t._v('async/await')]),
                  t._v('的方式替代了原有的 '),
                  s('code', [t._v('promise')]),
                  t._v('方式，主要是 '),
                  s(
                    'a',
                    {
                      attrs: {
                        href:
                          'https://github.com/PanJiaChen/vue-element-admin/tree/master/src',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('@/src/permission.js'), s('OutboundLink')],
                    1
                  ),
                  t._v('。有兴趣的大家自己可以通过 '),
                  s(
                    'a',
                    {
                      attrs: {
                        href:
                          'https://github.githistory.xyz/PanJiaChen/vue-element-admin/blob/master/src/permission.js',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('git-history'), s('OutboundLink')],
                    1
                  ),
                  t._v(
                    ' 自己对比下，可以发现代码阅读性高了不少。 不过本项目中也并没有把所有'
                  ),
                  s('code', [t._v('promise')]),
                  t._v('用'),
                  s('code', [t._v('async/await')]),
                  t._v('替代。我来简单说一下我的看法。')
                ]),
                t._v(' '),
                s('p', [
                  s(
                    'a',
                    {
                      attrs: {
                        href: 'https://zhuanlan.zhihu.com/p/26260061',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [
                      t._v('6 个 Async/Await 优于 Promise 的方面'),
                      s('OutboundLink')
                    ],
                    1
                  ),
                  t._v(
                    '，这篇文章很多人应该都看过，里面大部分观点我都是同意的，大部分复杂场景下'
                  ),
                  s('code', [t._v('async/await')]),
                  t._v('的确是更优解。但相对的也不是所有的情况下都是'),
                  s('code', [t._v('async/await')]),
                  t._v(
                    '写起来让我更爽的。先说说我最不爽的地方是它的错误处理，'
                  ),
                  s('code', [t._v('try catch')]),
                  t._v(
                    '让这个代码结构看起来就很奇怪（当然也有很多人很喜欢这种错误处理形式。社区也是相对的解决方案类似'
                  ),
                  s('code', [t._v('go')]),
                  t._v('语言的风格，比如 '),
                  s(
                    'a',
                    {
                      attrs: {
                        href: 'https://github.com/scopsy/await-to-js',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('await-to-js'), s('OutboundLink')],
                    1
                  )
                ]),
                t._v(' '),
                s('div', { staticClass: 'language-js extra-class' }, [
                  s('pre', { pre: !0, attrs: { class: 'language-js' } }, [
                    s('code', [
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(';')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('[')]
                      ),
                      t._v('err'),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' res'),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(']')]
                      ),
                      t._v(' '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('await')]
                      ),
                      t._v(' '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [t._v('to')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [t._v('getInfo')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n'),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('if')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('err'),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v(' '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v('//dosomething')]
                      ),
                      t._v('\n')
                    ])
                  ])
                ]),
                s('p', [
                  t._v(
                    '这个方案是不错，但还需要引入一个新的库，增加了学习成本，得不偿失。所以以我个人的习惯，当只有一个异步请求，且需要做错误处理的情况下，更倾向于使用 '
                  ),
                  s('code', [t._v('promise')]),
                  t._v('。比如')
                ]),
                t._v(' '),
                s('div', { staticClass: 'language-js extra-class' }, [
                  s('pre', { pre: !0, attrs: { class: 'language-js' } }, [
                    s('code', [
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v('// promise')]
                      ),
                      t._v('\n'),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [t._v('getInfo')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n  '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [t._v('then')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token parameter' } },
                        [t._v('res')]
                      ),
                      t._v(' '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=>')]
                      ),
                      t._v(' '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('{')]
                      ),
                      t._v('\n    '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v('//do somethings')]
                      ),
                      t._v('\n  '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('}')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n  '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [t._v('catch')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token parameter' } },
                        [t._v('err')]
                      ),
                      t._v(' '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=>')]
                      ),
                      t._v(' '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('{')]
                      ),
                      t._v('\n    '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v('//do somethings')]
                      ),
                      t._v('\n  '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('}')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n\n'),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v('// async/await')]
                      ),
                      t._v('\n'),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('try')]
                      ),
                      t._v(' '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('{')]
                      ),
                      t._v('\n  '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('const')]
                      ),
                      t._v(' res '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('await')]
                      ),
                      t._v(' '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [t._v('getInfo')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n  '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v('//do somethings')]
                      ),
                      t._v('\n'),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('}')]
                      ),
                      t._v(' '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('catch')]
                      ),
                      t._v(' '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('error'),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v(' '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('{')]
                      ),
                      t._v('\n  '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v('//do somethings')]
                      ),
                      t._v('\n'),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('}')]
                      ),
                      t._v('\n')
                    ])
                  ])
                ]),
                s('p', [
                  t._v('在有嵌套请求的情况下，肯定是 async/await 更直观的。')
                ]),
                t._v(' '),
                s('div', { staticClass: 'language-js extra-class' }, [
                  s('pre', { pre: !0, attrs: { class: 'language-js' } }, [
                    s('code', [
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v('// promise')]
                      ),
                      t._v('\n'),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [t._v('a')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v(' '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=>')]
                      ),
                      t._v(' '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('{')]
                      ),
                      t._v('\n  '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [t._v('b')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v(' '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=>')]
                      ),
                      t._v(' '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('{')]
                      ),
                      t._v('\n    '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [t._v('c')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n  '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('}')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n'),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('}')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n\n'),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v('// async/await')]
                      ),
                      t._v('\n'),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('await')]
                      ),
                      t._v(' '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [t._v('a')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n'),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('await')]
                      ),
                      t._v(' '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [t._v('b')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n'),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('await')]
                      ),
                      t._v(' '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [t._v('c')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n')
                    ])
                  ])
                ]),
                s('p', [
                  t._v(
                    '当然代码写的好与不好还是取决于写代码的人的。比如一个常见的业务场景：有两个并发的异步请求，在都完成后'
                  ),
                  s('code', [t._v('do something')]),
                  t._v('。但很多人会错误的用串行的方式实现了。')
                ]),
                t._v(' '),
                s('div', { staticClass: 'language-js extra-class' }, [
                  s('pre', { pre: !0, attrs: { class: 'language-js' } }, [
                    s('code', [
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v('//错误')]
                      ),
                      t._v('\n'),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('await')]
                      ),
                      t._v(' '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [t._v('a')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n'),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('await')]
                      ),
                      t._v(' '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [t._v('b')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n'),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v('//这样变成了 a().then(() => b() )')]
                      ),
                      t._v('\n'),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v('// a 好了才会执行 b')]
                      ),
                      t._v('\n'),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [t._v('done')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n\n'),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v('//正确')]
                      ),
                      t._v('\n'),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('await')]
                      ),
                      t._v(' Promise'),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [t._v('all')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('[')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [t._v('a')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [t._v('b')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(']')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n'),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [t._v('done')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n')
                    ])
                  ])
                ]),
                s('p', [
                  t._v('还有一个小细节'),
                  s('code', [t._v('async/await')]),
                  t._v('打包后的'),
                  s(
                    'a',
                    {
                      attrs: {
                        href:
                          '(https://babeljs.io/repl#?babili=false&browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=MYewdgzgLgBFCm0C8BDCBPMwYDMCuWUAluABQCUA3gFAwwCQokIANvAHQsgDmpKA7iiKxu8KAEkwOEBXLUAvtWpNoMURKkgk-QiTAUadAE5i8RsDDDx-MAApGQAWyIR4pUiYisAbvHJIAPkM6GE8fNwByEABrCLk6eTlFBGgKIA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=true&fileSize=true&timeTravel=false&sourceType=module&lineWrap=true&presets=env&prettier=true&targets=&version=7.4.2)'
                      }
                    },
                    [t._v('代码')]
                  ),
                  t._v('其实会比 '),
                  s('code', [t._v('promise')]),
                  t._v(' 复杂很多， 当然这个是一个忽略不计得问题。')
                ]),
                t._v(' '),
                s('p', [
                  s('strong', [t._v('总结')]),
                  t._v('：我认为它们两个人并不是'),
                  s('code', [t._v('or')]),
                  t._v(
                    '的关系，在特定的业务场景下，选择相对而言代码可读性更好地解决方案。'
                  )
                ]),
                t._v(' '),
                s('p', [
                  t._v(
                    '以上所述纯个人偏爱，并非什么最佳实现。具体该怎么选择还是需要大家更具自己团队的风格或者自己的理解来判断。'
                  )
                ]),
                t._v(' '),
                s('h3', { attrs: { id: '命名规范' } }, [
                  s(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#命名规范' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' 命名规范')
                ]),
                t._v(' '),
                s('p', [
                  t._v('其实刚开始我写 vue 文件的时候也不注意，各种驼峰啊、'),
                  s('code', [t._v('大写开头 (PascalCase)')]),
                  t._v('还是'),
                  s('code', [t._v('横线连接 (kebab-case)')]),
                  t._v('混着来，谁叫 vue 都可以，在 '),
                  s(
                    'a',
                    {
                      attrs: {
                        href: 'https://cn.vuejs.org/v2/style-guide/',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('风格指南'), s('OutboundLink')],
                    1
                  ),
                  t._v(
                    ' 中也没有定论。不过基于本项目我还是整理了一套文件的命名规则。'
                  )
                ]),
                t._v(' '),
                s('h4', { attrs: { id: 'component' } }, [
                  s(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#component' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Component')
                ]),
                t._v(' '),
                s('p', [
                  t._v('所有的'),
                  s('code', [t._v('Component')]),
                  t._v('文件都是以大写开头 (PascalCase)，这也是官方所 '),
                  s(
                    'a',
                    {
                      attrs: {
                        href:
                          'https://cn.vuejs.org/v2/style-guide/index.html#%E5%8D%95%E6%96%87%E4%BB%B6%E7%BB%84%E4%BB%B6%E6%96%87%E4%BB%B6%E7%9A%84%E5%A4%A7%E5%B0%8F%E5%86%99-%E5%BC%BA%E7%83%88%E6%8E%A8%E8%8D%90',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('推荐的'), s('OutboundLink')],
                    1
                  ),
                  t._v('。')
                ]),
                t._v(' '),
                s('p', [
                  t._v('但除了 '),
                  s('code', [t._v('index.vue')]),
                  t._v('。')
                ]),
                t._v(' '),
                s('p', [t._v('例子：')]),
                t._v(' '),
                s('ul', [
                  s('li', [
                    s('code', [t._v('@/src/components/BackToTop/index.vue')])
                  ]),
                  t._v(' '),
                  s('li', [
                    s('code', [t._v('@/src/components/Charts/Line.vue')])
                  ]),
                  t._v(' '),
                  s('li', [
                    s('code', [
                      t._v('@/src/views/example/components/Button.vue')
                    ])
                  ])
                ]),
                t._v(' '),
                s('h4', { attrs: { id: 'js-文件' } }, [
                  s(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#js-文件' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' JS 文件')
                ]),
                t._v(' '),
                s('p', [
                  t._v('所有的'),
                  s('code', [t._v('.js')]),
                  t._v('文件都遵循横线连接 (kebab-case)。')
                ]),
                t._v(' '),
                s('p', [t._v('例子：')]),
                t._v(' '),
                s('ul', [
                  s('li', [s('code', [t._v('@/src/utils/open-window.js')])]),
                  t._v(' '),
                  s('li', [
                    s('code', [t._v('@/src/views/svg-icons/require-icons.js')])
                  ]),
                  t._v(' '),
                  s('li', [
                    s('code', [
                      t._v('@/src/components/MarkdownEditor/default-options.js')
                    ])
                  ])
                ]),
                t._v(' '),
                s('h4', { attrs: { id: 'views' } }, [
                  s(
                    'a',
                    { staticClass: 'header-anchor', attrs: { href: '#views' } },
                    [t._v('#')]
                  ),
                  t._v(' Views')
                ]),
                t._v(' '),
                s('p', [
                  t._v('在'),
                  s('code', [t._v('views')]),
                  t._v('文件下，代表路由的'),
                  s('code', [t._v('.vue')]),
                  t._v(
                    '文件都使用横线连接 (kebab-case)，代表路由的文件夹也是使用同样的规则。'
                  )
                ]),
                t._v(' '),
                s('p', [t._v('例子：')]),
                t._v(' '),
                s('ul', [
                  s('li', [
                    s('code', [t._v('@/src/views/svg-icons/index.vue')])
                  ]),
                  t._v(' '),
                  s('li', [
                    s('code', [t._v('@/src/views/svg-icons/require-icons.js')])
                  ])
                ]),
                t._v(' '),
                s('p', [
                  t._v('使用横线连接 (kebab-case)来命名'),
                  s('code', [t._v('views')]),
                  t._v('主要是出于以下几个考虑。')
                ]),
                t._v(' '),
                s('ul', [
                  s('li', [
                    t._v('横线连接 (kebab-case) 也是官方推荐的命名规范之一 '),
                    s(
                      'a',
                      {
                        attrs: {
                          href:
                            'https://cn.vuejs.org/v2/style-guide/index.html#%E5%8D%95%E6%96%87%E4%BB%B6%E7%BB%84%E4%BB%B6%E6%96%87%E4%BB%B6%E7%9A%84%E5%A4%A7%E5%B0%8F%E5%86%99-%E5%BC%BA%E7%83%88%E6%8E%A8%E8%8D%90',
                          target: '_blank',
                          rel: 'noopener noreferrer'
                        }
                      },
                      [t._v('文档'), s('OutboundLink')],
                      1
                    )
                  ]),
                  t._v(' '),
                  s('li', [
                    s('code', [t._v('views')]),
                    t._v('下的'),
                    s('code', [t._v('.vue')]),
                    t._v('文件代表的是一个路由，所以它需要和'),
                    s('code', [t._v('component')]),
                    t._v('进行区分(component 都是大写开头)')
                  ]),
                  t._v(' '),
                  s('li', [
                    t._v('页面的'),
                    s('code', [t._v('url')]),
                    t._v(' 也都是横线连接的，比如'),
                    s('code', [t._v('https://www.xxx.admin/export-excel')]),
                    t._v('，所以路由对应的'),
                    s('code', [t._v('view')]),
                    t._v('应该要保持统一')
                  ]),
                  t._v(' '),
                  s('li', [t._v('没有大小写敏感问题')])
                ]),
                t._v(' '),
                s('h3', { attrs: { id: 'cdn' } }, [
                  s(
                    'a',
                    { staticClass: 'header-anchor', attrs: { href: '#cdn' } },
                    [t._v('#')]
                  ),
                  t._v(' CDN')
                ]),
                t._v(' '),
                s('p', [
                  t._v('你可以通过执行'),
                  s('code', [t._v('npm run preview -- --report')]),
                  t._v('来分析'),
                  s('code', [t._v('webpack')]),
                  t._v(
                    '打包之后的结果，观察各个静态资源的大小。你可以发现占用空间最多的是第三方依赖。如'
                  ),
                  s('code', [t._v('vue')]),
                  t._v('、'),
                  s('code', [t._v('element-ui')]),
                  t._v('、'),
                  s('code', [t._v('ECharts')]),
                  t._v('等。')
                ]),
                t._v(' '),
                s('p', [
                  t._v('你可以使用 '),
                  s('code', [t._v('CDN')]),
                  t._v(
                    ' 外链的方式引入第这些三方库，这样能大大增加构建的速度(通过 CDN 引入的资源不会经 webpack 打包)。如果你的项目没有自己的'
                  ),
                  s('code', [t._v('CDN')]),
                  t._v('服务的话，使用一些第三方的'),
                  s('code', [t._v('CDN')]),
                  t._v('服务，如 '),
                  s(
                    'a',
                    {
                      attrs: {
                        href: 'https://www.jsdelivr.com/',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('jsdelivr'), s('OutboundLink')],
                    1
                  ),
                  t._v('、'),
                  s(
                    'a',
                    {
                      attrs: {
                        href: 'https://unpkg.com/',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('unpkg'), s('OutboundLink')],
                    1
                  ),
                  t._v(
                    ' 等是一个很好的选择，它提供过了免费的资源加速，同时提供了缓存优化，由于你的第三方资源是在'
                  ),
                  s('code', [t._v('html')]),
                  t._v('中通过'),
                  s('code', [t._v('script')]),
                  t._v(
                    '引入的，它的缓存更新策略都是你自己手动来控制的，省去了你需要优化缓存策略功夫。'
                  )
                ]),
                t._v(' '),
                s('p', [
                  t._v('很多文章说使用 '),
                  s('code', [t._v('CDN')]),
                  t._v(
                    ' 引入的方式能大大减小代码的体积，这是不可能的。虽然打包完的 '
                  ),
                  s('code', [t._v('bundle')]),
                  t._v('小了，但那部分代码只是被你拆出去，用'),
                  s('code', [t._v('CDN')]),
                  t._v('的方式引入罢了。你想减小体积，最高效的方案是启用'),
                  s('code', [t._v('GZIP')]),
                  t._v('。')
                ]),
                t._v(' '),
                s(
                  'h4',
                  {
                    attrs: { id: '我个人暂时不使用cdn引入第三方依赖的原因：' }
                  },
                  [
                    s(
                      'a',
                      {
                        staticClass: 'header-anchor',
                        attrs: {
                          href: '#我个人暂时不使用cdn引入第三方依赖的原因：'
                        }
                      },
                      [t._v('#')]
                    ),
                    t._v(' 我个人暂时不使用'),
                    s('code', [t._v('CDN')]),
                    t._v('引入第三方依赖的原因：')
                  ]
                ),
                t._v(' '),
                s('p', [
                  t._v(
                    '暂时构建速度还没有遇到什么瓶颈，所有没有必要单独剥离部分第三方依赖。使用'
                  ),
                  s('code', [t._v('CDN')]),
                  t._v('引入的方式等于一些第三方依赖的版本你是通过'),
                  s('code', [t._v('package.json')]),
                  t._v(
                    '来控制的，一些依赖则需要手动维护，增加了一些维护成本。目前基于 webpack 的'
                  ),
                  s('code', [t._v('optimization.splitChunks')]),
                  t._v(
                    '已经做了资源的缓存优化，静态资源的缓存已经做得很好了。并且目前所有的静态资源都会上传到自己的'
                  ),
                  s('code', [t._v('CDN')]),
                  t._v('服务，没有必要使用第三方的'),
                  s('code', [t._v('CDN')]),
                  t._v('服务。')
                ]),
                t._v(' '),
                s('p', [
                  s('strong', [
                    t._v('当然所有的优化都是需要结合自己的具体业务来调整的！')
                  ]),
                  t._v(' 之后可能会采用这种引入方式，或者使用'),
                  s('code', [t._v('webpack dll')]),
                  t._v('的方式进行优化。如果你觉得'),
                  s('code', [t._v('CDN')]),
                  t._v('引入对于的项目有益处，你可以遵循如下方法进行修改：')
                ]),
                t._v(' '),
                s('h3', { attrs: { id: '使用方式' } }, [
                  s(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#使用方式' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' 使用方式')
                ]),
                t._v(' '),
                s('p', [
                  t._v('先找到 '),
                  s('code', [t._v('vue.config.js')]),
                  t._v('， 添加 '),
                  s('code', [t._v('externals')]),
                  t._v(' 让 '),
                  s('code', [t._v('webpack')]),
                  t._v(' 不打包 '),
                  s('code', [t._v('vue')]),
                  t._v(' 和 '),
                  s('code', [t._v('element')])
                ]),
                t._v(' '),
                s('div', { staticClass: 'language-js extra-class' }, [
                  s('pre', { pre: !0, attrs: { class: 'language-js' } }, [
                    s('code', [
                      t._v('externals'),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v(' '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('{')]
                      ),
                      t._v('\n  vue'),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v(' '),
                      s('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'Vue'")
                      ]),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v('\n  '),
                      s('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'element-ui'")
                      ]),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      s('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'ELEMENT'")
                      ]),
                      t._v('\n'),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('}')]
                      ),
                      t._v('\n')
                    ])
                  ])
                ]),
                s('p', [
                  t._v('然后配置那些第三方资源的'),
                  s('code', [t._v('CDN')]),
                  t._v('，请注意先后顺序。')
                ]),
                t._v(' '),
                s('div', { staticClass: 'language-js extra-class' }, [
                  s('pre', { pre: !0, attrs: { class: 'language-js' } }, [
                    s('code', [
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('const')]
                      ),
                      t._v(' cdn '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('{')]
                      ),
                      t._v('\n  css'),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v(' '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('[')]
                      ),
                      t._v('\n    '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v('// element-ui css')]
                      ),
                      t._v('\n    '),
                      s('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v(
                          "'https://unpkg.com/element-ui/lib/theme-chalk/index.css'"
                        )
                      ]),
                      t._v('\n  '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(']')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v('\n  js'),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v(' '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('[')]
                      ),
                      t._v('\n    '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v('// vue must at first!')]
                      ),
                      t._v('\n    '),
                      s('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'https://unpkg.com/vue/dist/vue.js'")
                      ]),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v('\n    '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v('// element-ui js')]
                      ),
                      t._v('\n    '),
                      s('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'https://unpkg.com/element-ui/lib/index.js'")
                      ]),
                      t._v('\n  '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(']')]
                      ),
                      t._v('\n'),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('}')]
                      ),
                      t._v('\n')
                    ])
                  ])
                ]),
                s('p', [
                  t._v('之后通过 '),
                  s('code', [t._v('html-webpack-plugin')]),
                  t._v('注入到 '),
                  s('code', [t._v('index.html')]),
                  t._v('之中:')
                ]),
                t._v(' '),
                s('div', { staticClass: 'language-js extra-class' }, [
                  s('pre', { pre: !0, attrs: { class: 'language-js' } }, [
                    s('code', [
                      t._v('config'),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [t._v('plugin')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      s('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'html'")
                      ]),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [t._v('tap')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token parameter' } },
                        [t._v('args')]
                      ),
                      t._v(' '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=>')]
                      ),
                      t._v(' '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('{')]
                      ),
                      t._v('\n  args'),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('[')]
                      ),
                      s('span', { pre: !0, attrs: { class: 'token number' } }, [
                        t._v('0')
                      ]),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(']')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('cdn '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' cdn\n  '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('return')]
                      ),
                      t._v(' args\n'),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('}')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n')
                    ])
                  ])
                ]),
                s('p', [
                  t._v('找到 '),
                  s('code', [t._v('public/index.html')]),
                  t._v('。通过你配置的'),
                  s('code', [t._v('CND Config')]),
                  t._v(' 依次注入 css 和 js。')
                ]),
                t._v(' '),
                s('div', { staticClass: 'language-html extra-class' }, [
                  s('pre', { pre: !0, attrs: { class: 'language-html' } }, [
                    s('code', [
                      s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                        s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                          s(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [t._v('<')]
                          ),
                          t._v('head')
                        ]),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('>')]
                        )
                      ]),
                      t._v('\n  '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v('\x3c!-- 引入样式 --\x3e')]
                      ),
                      t._v(
                        '\n  <% for(var css of htmlWebpackPlugin.options.cdn.css) { %>\n  '
                      ),
                      s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                        s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                          s(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [t._v('<')]
                          ),
                          t._v('link')
                        ]),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token attr-name' } },
                          [t._v('rel')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token attr-value' } },
                          [
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('=')]
                            ),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('"')]
                            ),
                            t._v('stylesheet'),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('"')]
                            )
                          ]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token attr-name' } },
                          [t._v('href')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token attr-value' } },
                          [
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('=')]
                            ),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('"')]
                            ),
                            t._v('<%=css%>'),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('"')]
                            )
                          ]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('/>')]
                        )
                      ]),
                      t._v('\n  <% } %>\n'),
                      s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                        s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                          s(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [t._v('</')]
                          ),
                          t._v('head')
                        ]),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('>')]
                        )
                      ]),
                      t._v('\n\n'),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v('\x3c!-- 引入JS --\x3e')]
                      ),
                      t._v(
                        '\n<% for(var js of htmlWebpackPlugin.options.cdn.js) { %>\n'
                      ),
                      s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                        s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                          s(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [t._v('<')]
                          ),
                          t._v('script')
                        ]),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token attr-name' } },
                          [t._v('src')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token attr-value' } },
                          [
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('=')]
                            ),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('"')]
                            ),
                            t._v('<%=js%>'),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('"')]
                            )
                          ]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('>')]
                        )
                      ]),
                      s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                        s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                          s(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [t._v('</')]
                          ),
                          t._v('script')
                        ]),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('>')]
                        )
                      ]),
                      t._v('\n<% } %>\n')
                    ])
                  ])
                ]),
                s('p', [
                  t._v('完整的 '),
                  s(
                    'a',
                    {
                      attrs: {
                        href:
                          'https://github.com/PanJiaChen/vue-admin-template/commit/eaaa3c1ddadd114451a1a83e042f1fc56a9809a1',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('代码修改'), s('OutboundLink')],
                    1
                  )
                ]),
                t._v(' '),
                s('p', [
                  t._v('最终你可以使用 '),
                  s('code', [t._v('npm run preview -- --report')]),
                  t._v(' 查看效果 如图：')
                ]),
                t._v(' '),
                s('p', [
                  s('img', {
                    attrs: {
                      src:
                        'https://user-gold-cdn.xitu.io/2019/4/23/16a4a764d51feef3?w=1014&h=923&f=jpeg&s=164349',
                      alt: ''
                    }
                  })
                ]),
                t._v(' '),
                s('p', [
                  t._v('同理，其它第三方依赖都可以使用相同的方式处理（比如'),
                  s('code', [t._v('vuex')]),
                  t._v('、'),
                  s('code', [t._v('vue-router')]),
                  t._v('等）。当然你也可以选择使用 '),
                  s(
                    'a',
                    {
                      attrs: {
                        href:
                          'https://webpack.docschina.org/plugins/dll-plugin/',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('DLLPlugin'), s('OutboundLink')],
                    1
                  ),
                  t._v('的方式来处理第三方依赖，从而来优化构建。')
                ]),
                t._v(' '),
                s('h2', { attrs: { id: '小技巧与建议' } }, [
                  s(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#小技巧与建议' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' 小技巧与建议')
                ]),
                t._v(' '),
                s('h3', { attrs: { id: 'watch-immediate' } }, [
                  s(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#watch-immediate' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' watch immediate')
                ]),
                t._v(' '),
                s('p', [
                  t._v(
                    '这个已经算是一个比较常见的技巧了，这里就简单说一下。当 watch 一个变量的时候，初始化时并不会执行，如下面的例子，你需要在'
                  ),
                  s('code', [t._v('created')]),
                  t._v('的时候手动调用一次。')
                ]),
                t._v(' '),
                s('div', { staticClass: 'language-js extra-class' }, [
                  s('pre', { pre: !0, attrs: { class: 'language-js' } }, [
                    s('code', [
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v('// bad')]
                      ),
                      t._v('\n'),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [t._v('created')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v(' '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('{')]
                      ),
                      t._v('\n  '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('this')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [t._v('fetchUserList')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(';')]
                      ),
                      t._v('\n'),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('}')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v('\nwatch'),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v(' '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('{')]
                      ),
                      t._v('\n  searchText'),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v(' '),
                      s('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'fetchUserList'")
                      ]),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v('\n'),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('}')]
                      ),
                      t._v('\n')
                    ])
                  ])
                ]),
                s('p', [
                  t._v('你可以添加'),
                  s('code', [t._v('immediate')]),
                  t._v(
                    '属性，这样初始化的时候也会触发，然后上面的代码就能简化为：'
                  )
                ]),
                t._v(' '),
                s('div', { staticClass: 'language-js extra-class' }, [
                  s('pre', { pre: !0, attrs: { class: 'language-js' } }, [
                    s('code', [
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v('// good')]
                      ),
                      t._v('\nwatch'),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v(' '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('{')]
                      ),
                      t._v('\n  searchText'),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v(' '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('{')]
                      ),
                      t._v('\n    handler'),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v(' '),
                      s('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'fetchUserList'")
                      ]),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v('\n    immediate'),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v(' '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token boolean' } },
                        [t._v('true')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v('\n  '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('}')]
                      ),
                      t._v('\n'),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('}')]
                      ),
                      t._v('\n')
                    ])
                  ])
                ]),
                s('p', [
                  t._v('ps: watch 还有一个容易被大家忽略的属性'),
                  s('code', [t._v('deep')]),
                  t._v('。当设置为'),
                  s('code', [t._v('true')]),
                  t._v('时，它会进行深度监听。简而言之就是你有一个 '),
                  s('code', [t._v('const obj={a:1,b:2}')]),
                  t._v('，里面任意一个 key 的 value 发生变化的时候都会触发'),
                  s('code', [t._v('watch')]),
                  t._v('。应用场景：比如我有一个列表，它有一堆'),
                  s('code', [t._v('query')]),
                  t._v('筛选项，这时候你就能'),
                  s('code', [t._v('deep watch')]),
                  t._v(
                    '它，只有任何一个筛序项改变的时候，就自动请求新的数据。或者你可以'
                  ),
                  s('code', [t._v('deep watch')]),
                  t._v(
                    '一个 form 表单，当任何一个字段内容发生变化的时候，你就帮它做自动保存等等。'
                  )
                ]),
                t._v(' '),
                s('h2', { attrs: { id: 'attrs-和-listeners' } }, [
                  s(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#attrs-和-listeners' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' attrs 和 listeners')
                ]),
                t._v(' '),
                s('p', [
                  t._v('这两个属性是 '),
                  s('code', [t._v('vue 2.4')]),
                  t._v(
                    ' 版本之后提供的，它简直是二次封装组件或者说写高阶组件的神器。在我们平时写业务的时候免不了需要对一些第三方组件进行二次封装。比如我们需要基于'
                  ),
                  s('code', [t._v('el-select')]),
                  t._v(
                    '分装一个带有业务特性的组件，根据输入的 name 搜索用户，并将一些业务逻辑分装在其中。但'
                  ),
                  s('code', [t._v('el-select')]),
                  t._v(
                    '这个第三方组件支持几十个配置参数，我们当然可以适当的挑选几个参数通过 props 来传递，但万一哪天别人用你的业务组件的时候觉得你的参数少了，那你只能改你封装的组件了，亦或是哪天第三方组件加入了新参数，你该怎么办？'
                  )
                ]),
                t._v(' '),
                s('p', [
                  t._v('其实我们的这个组件只是基于'),
                  s('code', [t._v('el-select')]),
                  t._v('做了一些业务的封装，比如添加了默认的'),
                  s('code', [t._v('placeholder')]),
                  t._v(
                    '，封装了远程 ajax 搜索请求等等，总的来说它就是一个中间人组件，只负责传递数据而已。'
                  )
                ]),
                t._v(' '),
                s('p', [
                  t._v('这时候我们就可以使用'),
                  s('code', [t._v('v-bind="$attrs"')]),
                  t._v('：传递所有属性、'),
                  s('code', [t._v('v-on="$listeners"')]),
                  t._v('传递所有方法。如下图所示：\n'),
                  s('img', {
                    attrs: {
                      src:
                        'https://user-gold-cdn.xitu.io/2019/4/24/16a4e82b28f2b24c?w=1364&h=498&f=png&s=92142',
                      alt: ''
                    }
                  })
                ]),
                t._v(' '),
                s('p', [
                  t._v('这样，我们没有在'),
                  s('code', [t._v('$props')]),
                  t._v('中声明的方法和属性，会通过'),
                  s('code', [t._v('$attrs')]),
                  t._v('、'),
                  s('code', [t._v('$listeners')]),
                  t._v(
                    '直接传递下去。这两个属性在我们平时分装第三方组件的时候非常有用！'
                  )
                ]),
                t._v(' '),
                s('h2', { attrs: { id: 'sync' } }, [
                  s(
                    'a',
                    { staticClass: 'header-anchor', attrs: { href: '#sync' } },
                    [t._v('#')]
                  ),
                  t._v(' .sync')
                ]),
                t._v(' '),
                s('p', [
                  t._v('这个也是 '),
                  s('code', [t._v('vue 2.3')]),
                  t._v(
                    ' 之后新加的一个语法糖。这也是平时在分装组件的时候很好用的一个语法糖，它的实现机制和'
                  ),
                  s('code', [t._v('v-model')]),
                  t._v('是一样的。\n'),
                  s('img', {
                    attrs: {
                      src:
                        'https://user-gold-cdn.xitu.io/2019/4/24/16a4e93c4a4267dc?w=828&h=402&f=png&s=45888',
                      alt: ''
                    }
                  })
                ]),
                t._v(' '),
                s('p', [
                  t._v(
                    '当你有需要在子组件修改父组件值的时候这个方法很好用。\n线上'
                  ),
                  s(
                    'a',
                    {
                      attrs: {
                        href:
                          'https://github.com/PanJiaChen/vue-element-admin/blob/master/src/components/Pagination/index.vue',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('例子'), s('OutboundLink')],
                    1
                  )
                ]),
                t._v(' '),
                s('h2', { attrs: { id: 'computed-的-get-和-set' } }, [
                  s(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#computed-的-get-和-set' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Computed 的 get 和 set')
                ]),
                t._v(' '),
                s('p', [
                  s('code', [t._v('computed')]),
                  t._v(
                    ' 大家肯定都用过，它除了可以缓存计算属性外，它在处理传入数据和目标数据格式不一致的时候也是很有用的。set、get '
                  ),
                  s(
                    'a',
                    {
                      attrs: {
                        href:
                          'https://cn.vuejs.org/v2/guide/computed.html#%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7%E7%9A%84-setter',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('文档'), s('OutboundLink')],
                    1
                  )
                ]),
                t._v(' '),
                s('p', [
                  t._v(
                    '上面说的可能还是是有点抽象，举一个简单的的例子：我们有一个 form 表单，from 里面有一个记录创建时间的字段'
                  ),
                  s('code', [t._v('create_at')]),
                  t._v(
                    '。我们知道前端的时间戳都是 13 位的，但很多后端默认时间戳是 10 位的，这就很蛋疼了。前端和后端的时间戳位数不一致。最常见的做法如下：'
                  )
                ]),
                t._v(' '),
                s('p', [
                  s('img', {
                    attrs: {
                      src:
                        'https://user-gold-cdn.xitu.io/2019/5/7/16a91387762c26d2?w=1040&h=1362&f=png&s=220786',
                      alt: ''
                    }
                  })
                ]),
                t._v(' '),
                s('p', [
                  t._v(
                    '上面的代码主要做的是：在拿到数据的时候将后端 10 位时间戳转化为 13 位时间戳，之后再向服务端发送数据的时候再转化回 10 位时间戳传给后端。目前这种做法当然是可行的，但之后可能不仅只有创建接口，还有更新接口的时候，你还需要在'
                  ),
                  s('code', [t._v('update')]),
                  t._v(
                    '的接口里在做一遍同样数据转化的操作么？而且这只是一个最简单的例子，真实的 form 表单会复杂的多，需要处理的数据也更为的多。这时候代码就会变得很难维护。'
                  )
                ]),
                t._v(' '),
                s('p', [
                  t._v('这时候就可以使用 computed 的 set 和 get 方法了。')
                ]),
                t._v(' '),
                s('p', [
                  s('img', {
                    attrs: {
                      src:
                        'https://user-gold-cdn.xitu.io/2019/5/7/16a915fa50b81a4e?w=1186&h=1426&f=png&s=220546',
                      alt: ''
                    }
                  })
                ]),
                t._v(' '),
                s('p', [
                  t._v(
                    '通过上面的代码可以看到，我们把需要做前后端兼容的数据，放在了 computed 中，从 '
                  ),
                  s('code', [t._v('getData')]),
                  t._v('和'),
                  s('code', [t._v('submit')]),
                  t._v('中隔离了数据处理的部分。')
                ]),
                t._v(' '),
                s('p', [
                  t._v(
                    '当然上面说的方案还不是最好的方案，你其实应该利用之前所说的'
                  ),
                  s('code', [t._v('v-bind="$attrs"')]),
                  t._v('和'),
                  s('code', [t._v('v-on="$listeners"')]),
                  t._v('对时间选择器组件进行二次封装。例如这样'),
                  s('code', [
                    t._v('<date-time v-model="postForm.create_at" />')
                  ]),
                  t._v(
                    ' 外部无需做任何数据处理，直接传入一个 10 位的时间戳，内部进行转化。当日期发生变化的时候，自动通过'
                  ),
                  s('code', [t._v('emit')]),
                  t._v('触发'),
                  s('code', [t._v('input')]),
                  t._v('使'),
                  s('code', [t._v('v-model')]),
                  t._v(
                    '发生变化，把所有脏活累活都放在组件内部完成，保持外部业务代码的相对干净。具体 v-model 语法糖原理可以见官方 '
                  ),
                  s(
                    'a',
                    {
                      attrs: {
                        href:
                          'https://cn.vuejs.org/v2/guide/components.html#%E5%9C%A8%E7%BB%84%E4%BB%B6%E4%B8%8A%E4%BD%BF%E7%94%A8-v-model',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('文档'), s('OutboundLink')],
                    1
                  ),
                  t._v('。')
                ]),
                t._v(' '),
                s('p', [
                  t._v(
                    'set 和 get 处理可以做上面说的进行一些数据处理之外，你也可以把它当做一个 '
                  ),
                  s('code', [t._v('watch')]),
                  t._v(
                    '的升级版。它可以监听数据的变化，当发生变化时，做一些额外的操作。最经典的用法就是'
                  ),
                  s('code', [t._v('v-model')]),
                  t._v('上绑定一个 vuex 值的时候，input 发生变化时，通过 '),
                  s('code', [t._v('commit')]),
                  t._v('更新存在 vuex 里面的值。')
                ]),
                t._v(' '),
                s('p', [
                  s('img', {
                    attrs: {
                      src:
                        'https://user-gold-cdn.xitu.io/2019/5/7/16a916f08d951f45?w=1510&h=750&f=jpeg&s=71522',
                      alt: ''
                    }
                  })
                ]),
                t._v(' '),
                s('p', [
                  t._v('具体的解释你也可以见官方 '),
                  s(
                    'a',
                    {
                      attrs: {
                        href: 'https://vuex.vuejs.org/zh/guide/forms.html',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('文档'), s('OutboundLink')],
                    1
                  )
                ]),
                t._v(' '),
                s('h2', { attrs: { id: 'object-freeze' } }, [
                  s(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#object-freeze' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Object.freeze')
                ]),
                t._v(' '),
                s('p', [
                  t._v('这算是一个性能优化的小技巧吧。在我们遇到一些 '),
                  s('code', [t._v('big data')]),
                  t._v(
                    '的业务场景，它就很有用了。尤其是做管理后台的时候，经常会有一些超大数据量的 table，或者一个含有 n 多数据的图表，这种数据量很大的东西使用起来最明显的感受就是卡。但其实很多时候其实这些数据其实并不需要响应式变化，这时候你就可以使用 '
                  ),
                  s(
                    'a',
                    {
                      attrs: {
                        href:
                          'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('Object.freeze'), s('OutboundLink')],
                    1
                  ),
                  t._v(
                    ' 方法了，它可以冻结一个对象(注意它不并是 vue 特有的 api)。'
                  )
                ]),
                t._v(' '),
                s('p', [
                  t._v(
                    '当你把一个普通的 JavaScript 对象传给 Vue 实例的 data 选项，Vue 将遍历此对象所有的属性，并使用 '
                  ),
                  s('code', [t._v('Object.defineProperty')]),
                  t._v(' 把这些属性全部转为 '),
                  s('code', [t._v('getter/setter')]),
                  t._v(
                    '，它们让 Vue 能进行追踪依赖，在属性被访问和修改时通知变化。\n使用了 '
                  ),
                  s('code', [t._v('Object.freeze')]),
                  t._v(' 之后，不仅可以减少 '),
                  s('code', [t._v('observer')]),
                  t._v(' 的开销，还能减少不少内存开销。相关 '),
                  s(
                    'a',
                    {
                      attrs: {
                        href: 'https://github.com/vuejs/vue/issues/4384',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('issue'), s('OutboundLink')],
                    1
                  ),
                  t._v('。')
                ]),
                t._v(' '),
                s('p', [
                  t._v('使用方式：'),
                  s('code', [
                    t._v(
                      'this.item = Object.freeze(Object.assign({}, this.item))'
                    )
                  ])
                ]),
                t._v(' '),
                s('p', [
                  t._v('这里我提供了一个在线测速 demo，'),
                  s(
                    'a',
                    {
                      attrs: {
                        href:
                          'https://panjiachen.gitee.io/panjiachen.github.io/big-table/index.html',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('点我'), s('OutboundLink')],
                    1
                  ),
                  t._v('。')
                ]),
                t._v(' '),
                s('p', [
                  t._v('通过测速可以发现正常情况下'),
                  s('code', [t._v('1000 x 10')]),
                  t._v(' rerender 都稳定在 1000ms-2000ms 之间，而开启了'),
                  s('code', [t._v('Object.freeze')]),
                  t._v(
                    '的情况下，rerender 都稳住在 100ms-200ms 之间。有接近 10 倍的差距。所以能确定不需要变化检测的情况下，'
                  ),
                  s('code', [t._v('big data')]),
                  t._v(' 还是要优化一下的。')
                ]),
                t._v(' '),
                s('h3', { attrs: { id: 'functional' } }, [
                  s(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#functional' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' functional')
                ]),
                t._v(' '),
                s('p', [
                  s(
                    'a',
                    {
                      attrs: {
                        href:
                          'https://cn.vuejs.org/v2/guide/render-function.html#%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BB%84%E4%BB%B6',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('函数式组件'), s('OutboundLink')],
                    1
                  ),
                  t._v(
                    ' 这个是文档里就写的内容，但在其实很少人会刻意的去使用。因为你不用它，代码也不会有任何问题，用了到可能会出现 bug。'
                  )
                ]),
                t._v(' '),
                s('p', [
                  t._v('我们先看一个例子：'),
                  s(
                    'a',
                    {
                      attrs: {
                        href:
                          'https://vue-9-perf-secrets.netlify.com/bench/functional',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('点我测试性能'), s('OutboundLink')],
                    1
                  ),
                  t._v(
                    ' 肉眼可见的性能差距。当然很多人会觉得我的项目中也没有这种变化量级，但我觉得这是一个程序员的自我修养问题吧。，比如能用'
                  ),
                  s('code', [t._v('v-show')]),
                  t._v('的地方就不要用'),
                  s('code', [t._v('v-if')]),
                  t._v('，善用'),
                  s('code', [t._v('keep-alive')]),
                  t._v('和'),
                  s('code', [t._v('v-once')]),
                  t._v('，'),
                  s('code', [t._v('Object.freeze()')]),
                  t._v('处理 '),
                  s(
                    'a',
                    {
                      attrs: {
                        href: 'https://github.com/vuejs/vue/issues/4384',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('vue big data'), s('OutboundLink')],
                    1
                  ),
                  t._v(
                    ' 问题等。虽然都是一些小细节，但对性能和体验都是有不少的提升的。更多的性能优化技巧请查看该文章 '
                  ),
                  s(
                    'a',
                    {
                      attrs: {
                        href: 'https://slides.com/akryum/vueconfus-2019#/',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('vue-9-perf-secrets'), s('OutboundLink')],
                    1
                  )
                ]),
                t._v(' '),
                s('h3', { attrs: { id: '减少全局操作' } }, [
                  s(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#减少全局操作' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' 减少全局操作')
                ]),
                t._v(' '),
                s('p', [
                  t._v(
                    '这其实并不只是针对 vue 项目的一个建议，我们平时写代码的时候一定要尽量避免一些全局的操作。如果必须要用到的时候，一定要自己检查，会不会产生一些全局的污染或者副作用。'
                  )
                ]),
                t._v(' '),
                s('p', [t._v('举几个简单例子：')]),
                t._v(' '),
                s('ol', [
                  s('li', [
                    s('p', [
                      t._v(
                        '我们现在虽然用 vue 写代码了，核心思想转变为用数据驱动 '
                      ),
                      s('code', [t._v('view')]),
                      t._v('，不用像'),
                      s('code', [t._v('jQuery')]),
                      t._v(
                        '时代那样，频繁的操作 DOM 节点。但还是免不了有些场景还是要操作 DOM 的。我们在组件内选择节点的时候一定要切记避免使用 '
                      ),
                      s('code', [t._v('document.querySelector()')]),
                      t._v('等一系列的全局选择器。你应该使用'),
                      s('code', [t._v('this.$el')]),
                      t._v('或者'),
                      s('code', [t._v('this.refs.xxx.$el')]),
                      t._v(
                        '的方式来选择 DOM。这样就能将你的操作局限在当前的组件内，能避免很多问题。'
                      )
                    ])
                  ]),
                  t._v(' '),
                  s('li', [
                    s('p', [
                      t._v(
                        '我们经常会不可避免的需要注册一些全局性的事件，比如监听页面窗口的变化'
                      ),
                      s('code', [
                        t._v(
                          "window.addEventListener('resize', this.__resizeHandler)"
                        )
                      ]),
                      t._v('，但再声明了之后一定要在 '),
                      s('code', [t._v('beforeDestroy')]),
                      t._v('或者'),
                      s('code', [t._v('destroyed')]),
                      t._v('生命周期注销它。'),
                      s('code', [
                        t._v(
                          "window.removeEventListener('resize', this.__resizeHandler)"
                        )
                      ]),
                      t._v('避免造成不必要的消耗。')
                    ])
                  ]),
                  t._v(' '),
                  s('li', [
                    s('p', [
                      t._v(
                        '避免过多的全局状态，不是所有的状态都需要存在 vuex 中的，应该根据业务进行合理的进行取舍。如果不可避免有很多的值需要存在 vuex 中，建议使用动态注册的方式。相关'
                      ),
                      s(
                        'a',
                        {
                          attrs: {
                            href:
                              'https://vuex.vuejs.org/zh/guide/modules.html#%E6%A8%A1%E5%9D%97%E5%8A%A8%E6%80%81%E6%B3%A8%E5%86%8C',
                            target: '_blank',
                            rel: 'noopener noreferrer'
                          }
                        },
                        [t._v('文档'), s('OutboundLink')],
                        1
                      ),
                      t._v('。只是部分业务需要的状态处理，建议使用 '),
                      s('code', [t._v('Event Bus')]),
                      t._v('或者使用 '),
                      s(
                        'a',
                        {
                          attrs: {
                            href:
                              'https://cn.vuejs.org/v2/guide/state-management.html#%E7%AE%80%E5%8D%95%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86%E8%B5%B7%E6%AD%A5%E4%BD%BF%E7%94%A8',
                            target: '_blank',
                            rel: 'noopener noreferrer'
                          }
                        },
                        [t._v('简单的 store 模式'), s('OutboundLink')],
                        1
                      ),
                      t._v('。')
                    ])
                  ]),
                  t._v(' '),
                  s('li', [
                    s('p', [
                      t._v(
                        'css 也应该尽量避免写太多的全局性的样式。除了一些全局公用的样式外，所以针对业务的或者组件的样式都应该使用命名空间的方式或者直接使用 vue-loader 提供的 '
                      ),
                      s('code', [t._v('scoped')]),
                      t._v('写法，避免一些全局冲突。'),
                      s(
                        'a',
                        {
                          attrs: {
                            href:
                              'https://panjiachen.gitee.io/vue-element-admin-site/zh/guide/essentials/style.html#css-modules',
                            target: '_blank',
                            rel: 'noopener noreferrer'
                          }
                        },
                        [t._v('文档'), s('OutboundLink')],
                        1
                      )
                    ])
                  ])
                ]),
                t._v(' '),
                s('h3', { attrs: { id: 'sass-和-js-之间变量共享' } }, [
                  s(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#sass-和-js-之间变量共享' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' sass 和 js 之间变量共享')
                ]),
                t._v(' '),
                s('p', [
                  t._v('这个需求可能有些人没有遇到过，举个实际例子来说明一下。')
                ]),
                t._v(' '),
                s('p', [
                  s('img', {
                    attrs: {
                      src:
                        'https://user-gold-cdn.xitu.io/2019/3/27/169be99f6bc2343c?w=1110&h=566&f=gif&s=864394',
                      alt: ''
                    }
                  }),
                  t._v(
                    '\n如上面要实现一个动态的换肤，就需要将用户选择的 theme 主题色传递给 css。但同时初始化的时候 css 又需要将一个默认主题色传递给 js。所以下面我们就分两块来讲解。'
                  )
                ]),
                t._v(' '),
                s('ul', [
                  s('li', [
                    s('p', [
                      t._v(
                        'js 将变量传递给 sass\n这部分是相对简单就可以实现的，实现方案也很多。最简单的方法就是通过 在模板里面写 style 标签来实现，就是俗话所说的内联标签。'
                      )
                    ]),
                    t._v(' '),
                    s('div', { staticClass: 'language-html extra-class' }, [
                      s('pre', { pre: !0, attrs: { class: 'language-html' } }, [
                        s('code', [
                          s(
                            'span',
                            { pre: !0, attrs: { class: 'token tag' } },
                            [
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token tag' } },
                                [
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token punctuation' }
                                    },
                                    [t._v('<')]
                                  ),
                                  t._v('div')
                                ]
                              ),
                              t._v(' '),
                              s(
                                'span',
                                {
                                  pre: !0,
                                  attrs: { class: 'token attr-name' }
                                },
                                [t._v(':')]
                              ),
                              s(
                                'span',
                                {
                                  pre: !0,
                                  attrs: {
                                    class: 'token style-attr language-css'
                                  }
                                },
                                [
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token attr-name' }
                                    },
                                    [
                                      s(
                                        'span',
                                        {
                                          pre: !0,
                                          attrs: { class: 'token attr-name' }
                                        },
                                        [t._v('style')]
                                      )
                                    ]
                                  ),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token punctuation' }
                                    },
                                    [t._v('="')]
                                  ),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token attr-value' }
                                    },
                                    [
                                      s(
                                        'span',
                                        {
                                          pre: !0,
                                          attrs: { class: 'token punctuation' }
                                        },
                                        [t._v('{')]
                                      ),
                                      s(
                                        'span',
                                        {
                                          pre: !0,
                                          attrs: { class: 'token string' }
                                        },
                                        [t._v("'background-color'")]
                                      ),
                                      s(
                                        'span',
                                        {
                                          pre: !0,
                                          attrs: { class: 'token punctuation' }
                                        },
                                        [t._v(':')]
                                      ),
                                      t._v('color'),
                                      s(
                                        'span',
                                        {
                                          pre: !0,
                                          attrs: { class: 'token punctuation' }
                                        },
                                        [t._v('}')]
                                      )
                                    ]
                                  ),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token punctuation' }
                                    },
                                    [t._v('"')]
                                  )
                                ]
                              ),
                              s(
                                'span',
                                {
                                  pre: !0,
                                  attrs: { class: 'token punctuation' }
                                },
                                [t._v('>')]
                              )
                            ]
                          ),
                          s(
                            'span',
                            { pre: !0, attrs: { class: 'token tag' } },
                            [
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token tag' } },
                                [
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token punctuation' }
                                    },
                                    [t._v('</')]
                                  ),
                                  t._v('div')
                                ]
                              ),
                              s(
                                'span',
                                {
                                  pre: !0,
                                  attrs: { class: 'token punctuation' }
                                },
                                [t._v('>')]
                              )
                            ]
                          ),
                          t._v('\n')
                        ])
                      ])
                    ]),
                    s('p', [
                      t._v('或者使用 '),
                      s('code', [t._v('css var()')]),
                      t._v('，在线 '),
                      s(
                        'a',
                        {
                          attrs: {
                            href:
                              'https://codepen.io/richardtallent/pen/yvpERW/',
                            target: '_blank',
                            rel: 'noopener noreferrer'
                          }
                        },
                        [t._v('demo'), s('OutboundLink')],
                        1
                      ),
                      t._v('，还有用 less 的话'),
                      s('code', [t._v('modifyVars')]),
                      t._v('，等等方案都能实现 js 与 css 的变量传递。')
                    ])
                  ]),
                  t._v(' '),
                  s('li', [s('p', [t._v('sass 将变量给 js')])])
                ]),
                t._v(' '),
                s('p', [
                  t._v(
                    '还是那前面那个换肤来举例子，我们页面初始化的时候，总需要一个默认主题色吧，假设我们在 '
                  ),
                  s('code', [t._v('var.scss')]),
                  t._v('中声明了一个 '),
                  s('code', [t._v('theme:blue')]),
                  t._v('，我们在 js 中该怎么获取这个变量呢？我们可以通过 '),
                  s(
                    'a',
                    {
                      attrs: {
                        href: 'https://github.com/css-modules/icss#export',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('css-modules'), s('OutboundLink')],
                    1
                  ),
                  t._v(' '),
                  s('code', [t._v(':export')]),
                  t._v('来实现。更具体的解释-'),
                  s(
                    'a',
                    {
                      attrs: {
                        href:
                          'https://www.bluematador.com/blog/how-to-share-variables-between-js-and-sass',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [
                      t._v(
                        'How to Share Variables Between Javascript and Sass'
                      ),
                      s('OutboundLink')
                    ],
                    1
                  )
                ]),
                t._v(' '),
                s('div', { staticClass: 'language-js extra-class' }, [
                  s('pre', { pre: !0, attrs: { class: 'language-js' } }, [
                    s('code', [
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v('// var.scss')]
                      ),
                      t._v('\n$theme'),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v(' blue'),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(';')]
                      ),
                      t._v('\n\n'),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('export')]
                      ),
                      t._v(' '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('{')]
                      ),
                      t._v('\n  theme'),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(':')]
                      ),
                      t._v(' $theme'),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(';')]
                      ),
                      t._v('\n'),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('}')]
                      ),
                      t._v('\n')
                    ])
                  ])
                ]),
                s('div', { staticClass: 'language-js extra-class' }, [
                  s('pre', { pre: !0, attrs: { class: 'language-js' } }, [
                    s('code', [
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v('// test.js')]
                      ),
                      t._v('\n'),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('import')]
                      ),
                      t._v(' variables '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('from')]
                      ),
                      t._v(' '),
                      s('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'@/styles/var.scss'")
                      ]),
                      t._v('\nconsole'),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [t._v('log')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      t._v('variables'),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('theme'),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v(' '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v('// blue')]
                      ),
                      t._v('\n')
                    ])
                  ])
                ]),
                s('p', [
                  t._v(
                    '当 js 和 css 共享一个变量的时候这个方案还是很实用的。vue-element-admin 中的侧边栏的宽度，颜色等等变量都是通过这种方案来实现共享的。'
                  )
                ]),
                t._v(' '),
                s('p', [
                  t._v('其它换肤方案可以参考 '),
                  s(
                    'a',
                    {
                      attrs: {
                        href: 'https://juejin.im/post/5ca41617f265da3092006155',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('聊一聊前端换肤'), s('OutboundLink')],
                    1
                  ),
                  t._v('。')
                ]),
                t._v(' '),
                s('h3', { attrs: { id: '自动注册全局组件' } }, [
                  s(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#自动注册全局组件' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' 自动注册全局组件')
                ]),
                t._v(' '),
                s('p', [
                  t._v(
                    '我的业务场景大部分是中后台，虽然封装和使用了很多第三方组件，但还是免不了需要自己封装和使用很多业务组件。但每次用的时候还需要手动引入，真的是有些麻烦的。'
                  )
                ]),
                t._v(' '),
                s('p', [
                  s('img', {
                    attrs: {
                      src:
                        'https://user-gold-cdn.xitu.io/2019/3/27/169be40d5ac05699?w=812&h=466&f=png&s=67387',
                      alt: ''
                    }
                  })
                ]),
                t._v(' '),
                s('p', [
                  t._v('我们其实可以基于 webpack 的'),
                  s('code', [t._v('require.context')]),
                  t._v(
                    '来实现自动加载组件并注册的全局的功能。相关原理在之前的文章中已经阐述过了。具体代码如下'
                  )
                ]),
                t._v(' '),
                s('p', [
                  s('img', {
                    attrs: {
                      src:
                        'https://user-gold-cdn.xitu.io/2019/3/27/169be4575dc243d9?w=1674&h=402&f=png&s=122245',
                      alt: ''
                    }
                  })
                ]),
                t._v(' '),
                s('p', [
                  t._v('我们可以创建一个'),
                  s('code', [t._v('GlobalComponents')]),
                  t._v(
                    '文件夹，将你想要注册到全局的组件都放在这个文件夹里，在'
                  ),
                  s('code', [t._v('index.js')]),
                  t._v('里面放上如上代码。之后只要在入口文件'),
                  s('code', [t._v('main.js')]),
                  t._v('中引入即可。')
                ]),
                t._v(' '),
                s('div', { staticClass: 'language-js extra-class' }, [
                  s('pre', { pre: !0, attrs: { class: 'language-js' } }, [
                    s('code', [
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v('//main.js')]
                      ),
                      t._v('\n'),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [t._v('import')]
                      ),
                      t._v(' '),
                      s('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'./components/Table/index'")
                      ]),
                      t._v(' '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v('// 自动注册全局业务组件')]
                      ),
                      t._v('\n')
                    ])
                  ])
                ]),
                s('p', [
                  t._v(
                    '这样我们可以在模板中直接使用这些全局组建了。不需要再繁琐的手动引入了。'
                  )
                ]),
                t._v(' '),
                s('div', { staticClass: 'language-html extra-class' }, [
                  s('pre', { pre: !0, attrs: { class: 'language-html' } }, [
                    s('code', [
                      s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                        s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                          s(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [t._v('<')]
                          ),
                          t._v('template')
                        ]),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('>')]
                        )
                      ]),
                      t._v('\n  '),
                      s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                        s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                          s(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [t._v('<')]
                          ),
                          t._v('div')
                        ]),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('>')]
                        )
                      ]),
                      t._v('\n    '),
                      s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                        s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                          s(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [t._v('<')]
                          ),
                          t._v('user-select')
                        ]),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('/>')]
                        )
                      ]),
                      t._v('\n    '),
                      s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                        s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                          s(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [t._v('<')]
                          ),
                          t._v('status-button')
                        ]),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('/>')]
                        )
                      ]),
                      t._v('\n  '),
                      s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                        s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                          s(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [t._v('</')]
                          ),
                          t._v('div')
                        ]),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('>')]
                        )
                      ]),
                      t._v('\n'),
                      s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                        s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                          s(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [t._v('</')]
                          ),
                          t._v('template')
                        ]),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('>')]
                        )
                      ]),
                      t._v('\n')
                    ])
                  ])
                ]),
                s('p', [
                  t._v(
                    '当然你也不要为了省事，啥组件都往全局注册，这样会让你初始化页面的时候你的初始'
                  ),
                  s('code', [t._v('init bundle')]),
                  t._v(
                    '很大。你应该就注册那些你经常使用且体积不大的组件。那些体积大的组件，如编辑器或者图表组件还是按需加载比较合理。而且你最好声明这些全局组件的时候有一个统一的命名规范比如：'
                  ),
                  s('code', [t._v('globel-user-select')]),
                  t._v(
                    '这样的，指定一个团队规范，不然人家看到你这个全局组件会一脸懵逼，这个组件是哪来的。'
                  )
                ]),
                t._v(' '),
                s('h3', { attrs: { id: 'lint' } }, [
                  s(
                    'a',
                    { staticClass: 'header-anchor', attrs: { href: '#lint' } },
                    [t._v('#')]
                  ),
                  t._v(' lint')
                ]),
                t._v(' '),
                s('p', [
                  t._v(
                    '这又是一个老生常谈的问题了\nvue 的一些最佳实践什么的话，这里不讨论了，我觉得看官方的 '
                  ),
                  s(
                    'a',
                    {
                      attrs: {
                        href: 'https://cn.vuejs.org/v2/style-guide/',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('风格指南'), s('OutboundLink')],
                    1
                  ),
                  t._v(' 差不多就够了。比如避免'),
                  s('code', [t._v('避免 v-if 和 v-for 用在一起')]),
                  t._v('、'),
                  s('code', [t._v('元素特性的顺序')]),
                  t._v(
                    '这些等等规则，几十条规则，说真的写了这么旧 vue，我也只能记住一些常规的。什么属性的顺序啊，不太可能记住的。这种东西还是交给程序来自动优化才是更合理的选择。强烈推荐配置编辑器自动化处理。具体配置见 '
                  ),
                  s(
                    'a',
                    {
                      attrs: {
                        href:
                          'https://panjiachen.gitee.io/vue-element-admin-site/zh/guide/advanced/eslint.html',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('文档'), s('OutboundLink')],
                    1
                  ),
                  t._v('。同时建议结合 '),
                  s('code', [t._v('Git Hooks')]),
                  t._v(
                    ' 配合在每次提交代码时对代码进行 lint 校验，确保所有提交到远程仓库的代码都符合团队的规范。它主要使用到的工具是'
                  ),
                  s('code', [t._v('husky')]),
                  t._v('和'),
                  s('code', [t._v('lint-staged')]),
                  t._v('，详细文档见 '),
                  s(
                    'a',
                    {
                      attrs: {
                        href:
                          'https://panjiachen.gitee.io/vue-element-admin-site/zh/guide/advanced/git-hook.html#git-hooks',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('Git Hooks'), s('OutboundLink')],
                    1
                  )
                ]),
                t._v(' '),
                s('h3', { attrs: { id: 'hook' } }, [
                  s(
                    'a',
                    { staticClass: 'header-anchor', attrs: { href: '#hook' } },
                    [t._v('#')]
                  ),
                  t._v(' Hook')
                ]),
                t._v(' '),
                s('p', [
                  t._v(
                    '这个是一个文档里没有写的 api，但我觉得是一个很有用的 api。比如我们平时使用一些第三方组件，或者注册一些全局事件的时候，都需要在'
                  ),
                  s('code', [t._v('mounted')]),
                  t._v('中声明，在'),
                  s('code', [t._v('destroyed')]),
                  t._v(
                    '中销毁。但由于这个是写在两个生命周期内的，很容易忘记，而且大部分在创建阶段声明的内容都会有副作用，如果你在组件摧毁阶段忘记移除的话，会造成内存的泄漏，而且都不太容易发现。如下代码：'
                  )
                ]),
                t._v(' '),
                s('p', [
                  s('img', {
                    attrs: {
                      src:
                        'https://user-gold-cdn.xitu.io/2019/3/27/169be2ce408a53bd?w=1072&h=370&f=png&s=62669',
                      alt: ''
                    }
                  })
                ]),
                t._v(' '),
                s('p', [
                  t._v('react 在新版本中也加入了'),
                  s('code', [t._v('useEffect')]),
                  t._v(
                    '，将以前的多个 life-cycles 合并、重组，使逻辑更加清晰，这里就不展开了。那 vue 是不是也可以这样做？我去了看了一下官方的 '
                  ),
                  s('code', [t._v('vue-hooks')]),
                  t._v('的 '),
                  s(
                    'a',
                    {
                      attrs: {
                        href:
                          'https://github.com/yyx990803/vue-hooks/blob/master/index.js',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('源码'), s('OutboundLink')],
                    1
                  ),
                  t._v(' 发现了一个新的 api：'),
                  s('code', [t._v("$on('hook:xxx')")]),
                  t._v(
                    '。有了它，我们就能将之前的代码用更简单和清楚地方式实现了。'
                  )
                ]),
                t._v(' '),
                s('p', [
                  s('img', {
                    attrs: {
                      src:
                        'https://user-gold-cdn.xitu.io/2019/3/27/169be2ce41fcc232?w=1104&h=406&f=png&s=67807',
                      alt: ''
                    }
                  })
                ]),
                t._v(' '),
                s('p', [
                  t._v('和 react 的'),
                  s('code', [t._v('useEffect')]),
                  t._v('有异曲同工之妙。')
                ]),
                t._v(' '),
                s('p', [
                  t._v(
                    '而且我们有了这个 api 之后，能干的事情还不止这个。有时候我们会用一些第三方组件，比如我们有一个编辑器组件（加载比较慢，会有白屏），所以我们在它渲染完成之前需要给它一个占位符，但可能这个组件并没有暴露给我们这个接口，当然我们需要修改这个组件，在它创建的时候手动 emit 一个事件出去，然后在组件上监听它，比如：'
                  )
                ]),
                t._v(' '),
                s('p', [
                  s('img', {
                    attrs: {
                      src:
                        'https://user-gold-cdn.xitu.io/2019/3/27/169be2ce45eabd8a?w=616&h=334&f=png&s=38001',
                      alt: ''
                    }
                  })
                ]),
                t._v(' '),
                s('p', [
                  t._v(
                    '当然这也是可行的，但万一还要监听一个更新或者摧毁的生命周期呢？其实利用 '
                  ),
                  s('code', [t._v('hook')]),
                  t._v('可以很方便的实现这个效果。')
                ]),
                t._v(' '),
                s('p', [
                  s('img', {
                    attrs: {
                      src:
                        'https://user-gold-cdn.xitu.io/2019/3/27/169be30ee530a45b?w=682&h=150&f=png&s=14691',
                      alt: ''
                    }
                  })
                ]),
                t._v(' '),
                s('p', [
                  t._v(
                    '当然在 vue 3.0 版本中可能会有新的写法，就不如下面的讨论: '
                  ),
                  s(
                    'a',
                    {
                      attrs: {
                        href: 'https://github.com/vuejs/rfcs/pull/23',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('Dynamic Lifecycle Injection'), s('OutboundLink')],
                    1
                  ),
                  t._v(
                    '。有兴趣的可以自行去研究，这里就不展开了。当 3.0 正式发布之后再来讨论吧。'
                  )
                ]),
                t._v(' '),
                s('h2', { attrs: { id: 'roadmap' } }, [
                  s(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#roadmap' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' RoadMap')
                ]),
                t._v(' '),
                s('p', [t._v('最后来说一下，之后需要做的事情吧：')]),
                t._v(' '),
                s('ul', [
                  s('li', [
                    t._v('更好的多级页面缓存：目前页面的缓存基于'),
                    s('code', [t._v('keep-alive')]),
                    t._v(
                      '，但当三级路由嵌套的情况下，支持的并不好。之后探索一个更好的解决方案。'
                    )
                  ]),
                  t._v(' '),
                  s('li', [
                    t._v(
                      '单元测试：当项目大了之后，没有单元测试维护起来还是有些吃力的。\n之后会慢慢补上'
                    ),
                    s('code', [t._v('unit-test')]),
                    t._v(' 的测试用例。 酌情加上一些'),
                    s('code', [t._v('e2e-test')]),
                    t._v('的例子。')
                  ]),
                  t._v(' '),
                  s('li', [
                    t._v(
                      '去国际化：其实大部分人是不需要国际化的，默认情况下移除国际化。单独开一个国际化分支（v4.1 已完成）。'
                    )
                  ]),
                  t._v(' '),
                  s('li', [
                    t._v(
                      '适配 webpack5：webpack5 还是解决了不少之前的痛点的，正式版发布之后会进行升级。'
                    )
                  ]),
                  t._v(' '),
                  s('li', [
                    t._v(
                      'vue 3.0： 等官方发布之后会基于新版本进行重构（这个或许还有很久）'
                    )
                  ]),
                  t._v(' '),
                  s('li', [
                    t._v(
                      '适配 element-ui 3.0 之前官方发了 3.0 的打算(我也不知道会不会跳票)'
                    )
                  ])
                ]),
                t._v(' '),
                s('h2', { attrs: { id: '总结' } }, [
                  s(
                    'a',
                    { staticClass: 'header-anchor', attrs: { href: '#总结' } },
                    [t._v('#')]
                  ),
                  t._v(' 总结')
                ]),
                t._v(' '),
                s('p', [s('strong', [t._v('开源不易，且行且珍惜吧。')])]),
                t._v(' '),
                s('p', [t._v('系列文章：')]),
                t._v(' '),
                s('ul', [
                  s('li', [
                    s(
                      'a',
                      {
                        attrs: {
                          href:
                            'https://juejin.im/post/59097cd7a22b9d0065fb61d2',
                          target: '_blank',
                          rel: 'noopener noreferrer'
                        }
                      },
                      [
                        t._v('手摸手，带你用 vue 撸后台 系列一（基础篇）'),
                        s('OutboundLink')
                      ],
                      1
                    )
                  ]),
                  t._v(' '),
                  s('li', [
                    s(
                      'a',
                      {
                        attrs: {
                          href:
                            'https://juejin.im/post/591aa14f570c35006961acac',
                          target: '_blank',
                          rel: 'noopener noreferrer'
                        }
                      },
                      [
                        t._v('手摸手，带你用 vue 撸后台 系列二(登录权限篇)'),
                        s('OutboundLink')
                      ],
                      1
                    )
                  ]),
                  t._v(' '),
                  s('li', [
                    s(
                      'a',
                      {
                        attrs: {
                          href:
                            'https://juejin.im/post/593121aa0ce4630057f70d35',
                          target: '_blank',
                          rel: 'noopener noreferrer'
                        }
                      },
                      [
                        t._v('手摸手，带你用 vue 撸后台 系列三 (实战篇)'),
                        s('OutboundLink')
                      ],
                      1
                    )
                  ]),
                  t._v(' '),
                  s('li', [
                    s(
                      'a',
                      {
                        attrs: {
                          href:
                            'https://juejin.im/post/595b4d776fb9a06bbe7dba56',
                          target: '_blank',
                          rel: 'noopener noreferrer'
                        }
                      },
                      [
                        t._v(
                          '手摸手，带你用 vue 撸后台 系列四(vueAdmin 一个极简的后台基础模板)'
                        ),
                        s('OutboundLink')
                      ],
                      1
                    )
                  ]),
                  t._v(' '),
                  s('li', [
                    s(
                      'a',
                      {
                        attrs: {
                          href: 'https://segmentfault.com/a/1190000009090836',
                          target: '_blank',
                          rel: 'noopener noreferrer'
                        }
                      },
                      [
                        t._v('手摸手，带你封装一个 vue component'),
                        s('OutboundLink')
                      ],
                      1
                    )
                  ]),
                  t._v(' '),
                  s('li', [
                    s(
                      'a',
                      {
                        attrs: {
                          href:
                            'https://juejin.im/post/59bb864b5188257e7a427c09',
                          target: '_blank',
                          rel: 'noopener noreferrer'
                        }
                      },
                      [t._v('手摸手，带你优雅的使用 icon'), s('OutboundLink')],
                      1
                    )
                  ]),
                  t._v(' '),
                  s('li', [
                    s(
                      'a',
                      {
                        attrs: {
                          href:
                            'https://juejin.im/post/5b56909a518825195f499806',
                          target: '_blank',
                          rel: 'noopener noreferrer'
                        }
                      },
                      [
                        t._v('手摸手，带你用合理的姿势使用 webpack4（上）'),
                        s('OutboundLink')
                      ],
                      1
                    )
                  ]),
                  t._v(' '),
                  s('li', [
                    s(
                      'a',
                      {
                        attrs: {
                          href:
                            'https://juejin.im/post/5b5d6d6f6fb9a04fea58aabc',
                          target: '_blank',
                          rel: 'noopener noreferrer'
                        }
                      },
                      [
                        t._v('手摸手，带你用合理的姿势使用 webpack4（下）'),
                        s('OutboundLink')
                      ],
                      1
                    )
                  ])
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
      e.default = n.exports
    }
  }
])
