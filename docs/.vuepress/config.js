const utils = require('./utils')

module.exports = {
  title: 'duziea-bookmarks',
  description: 'stary hungry stay foolish',
  // dest:'',
  base: '/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ]
  ],
  themeConfig: {
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '库',
        link: '/repository/'
      },
      {
        text: '网站',
        link: '/website/'
      },
      {
        text: 'Blog',
        ariaLabel: 'blog',
        link: '/blog/'
      },
      {
        text: 'python',
        ariaLabel: 'python',
        link: '/python/'
      }
    ],
    sidebar: utils.inferSiderbars(),
    lastUpdated: '上次更新',
    // repo: 'PanJiaChen/awesome-bookmarks',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: '在 GitHub 上编辑此页',
    sidebarDepth: 3
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@public': './public'
      }
    }
  },
  ga: 'UA-109340118-1',
  markdown: {
    config: md => {
      // use more markdown-it plugins!
      md.use(require('markdown-it-include'))
    }
  }
}
