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
  themeConfig: {
    locales: {
      '/': {
        selectText: '选择语言',
        label: '简体中文',
        sidebar: [
          {
            title: 'Basic 基础控件',
            collasable: false,
            children: ['/components/button.md'],
          },
        ],
      },
    },
  },
  chainWebpack: (config, isServer) => {
    config.resolve.alias.set('@', path.resolve(__dirname, '../../src'));
  },
};
