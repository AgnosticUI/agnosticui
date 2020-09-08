const path = require('path');
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "agnosticui": path.resolve(__dirname, './node_modules/agnosticui-vue/src/stories')
      }
    }
  }
}