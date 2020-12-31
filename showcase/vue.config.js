const path = require('path');
module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/agnosticui/'
    : '/',
  css: {
    requireModuleExtension: true,
    loaderOptions: {
      css: {
        // Note: the following config format is different between Vue CLI v4 and v3
        // For Vue CLI v3 users, please refer to css-loader v1 documentations
        // https://github.com/webpack-contrib/css-loader/tree/v1.0.1
        modules: {
          // localIdentName: '[name]-[hash]'
          localIdentName: '[path][name]__[local]--[hash:base64:5]'
        },
        // DO NOT ADD THIS OR YOU BREAK agnosticui-vue modules which use kebob case!
        // localsConvention: 'camelCaseOnly'
      }
    }
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();

    svgRule
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  },

  configureWebpack: {
    resolve: {
      alias: {
        "agnosticui": path.resolve(__dirname, '../node_modules/agnosticui-vue/src/stories')
      }
    }
  },
}