const Config = require('webpack-chain');
const config = new Config();
const path = require('path');
const package = require('../package.json');
const components = require('./get-components.js');
const kebabCase = require('lodash/kebabCase');

config.resolve.extensions
  .merge(['.js', '.scss'])
  .end()
  .alias.set('@', path.resolve(__dirname, '../src/'))
  .set('vue$', 'vue/dist/vue.runtime.esm.js')
  .end();

config
  .mode('production')
  .context(path.resolve(__dirname, '../src/components/'))
  .end();

components.forEach(component => {
  config
    .entry(kebabCase(component))
    .add(`./${component}/index.js`)
    .end();
});
config.output
  .library(package.name)
  .libraryTarget('commonjs2')
  .path(path.resolve(__dirname, `../lib/`))
  .filename('[name]/index.js')
  .end();
config.module
  .rule('js')
  .test(/\.js$/)
  .use('babel')
  .loader('babel-loader')
  .end();

config.module
  .rule('scss')
  .test(/\.scss$/)
  .use('style-loader')
  .loader('style-loader')
  .end()
  .use('extract-css-loader')
  .loader(require('mini-css-extract-plugin').loader)
  .end()
  .use('css-loader')
  .loader('css-loader')
  .end()
  .use('cssnano')
  .loader('postcss-loader')
  .options({
    plugins: [
      require('cssnano')({
        preset: [
          'default',
          {
            mergeLonghand: false,
            cssDeclarationSorter: false
          }
        ]
      })
    ]
  })
  .end()
  .use('postcss-loader')
  .loader('postcss-loader')
  .end()
  .use('sass-loader')
  .loader('sass-loader')
  .end();

config.externals({
  vue: {
    commonjs: 'vue',
    commonjs2: 'vue',
    root: 'Vue'
  }
});

config.stats('none');
config.plugin('optimize-css').use(require('mini-css-extract-plugin'), [
  {
    filename: '[name]/style/index.css'
  }
]);

const { transformer, formatter } = require('./util/resolveLoaderError');
config
  .plugin('friendly-errors')
  .use(require('friendly-errors-webpack-plugin'), [
    {
      additionalTransformers: [transformer],
      additionalFormatters: [formatter]
    }
  ]);

// config
//   .plugin('string-replace-webpack-plugin')
//   .use(require('string-replace-webpack-plugin'));
module.exports = config.toConfig();
