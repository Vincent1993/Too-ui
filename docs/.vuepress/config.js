const path = require('path');

module.exports = {
  title: 'Too UI',
  description: 'Mobile UI Toolkit baseed on Vue',
  host: 'localhost',
  locales: {
    '/': {
      lang: 'zh-CN',
      description: 'Mobile UI Toolkit baseed on Vue',
    },
  },
  base: '/Too-ui/',
  plugins: ['@vuepress/search'],
  theme: '@vuepress/theme-default',
  themeConfig: {
    lastUpdated: '最后更新于',
    repo: 'https://github.com/Vincent1993/Tofo-ui',
    locales: {
      '/': {
        selectText: '选择语言',
        label: '简体中文',
        sidebar: [
          {
            title: 'Basic 基础控件',
            collasable: false,
            children: ['/components/button.md', '/components/cell-item.md'],
          },
          {
            title: 'Form 表单控件',
            collasable: false,
            children: ['/components/switch.md'],
          },
        ],
      },
    },
  },
  chainWebpack: (config, isServer) => {
    config.resolve.alias.set('@', path.resolve(__dirname, '../../src'));
  },
};
