# AgnosticUI Vue

This is the [Vue version](https://github.com/AgnosticUI/agnosticui/tree/master/agnosticui-vue) of [AgnosticUI](https://github.com/AgnosticUI/agnosticui).

## Project setup

```
yarn && yarn start
```

## Requirements

Using AgnosticUI-Vue requires opting in to CSS Modules in your project. However, please note that we've opted to use kabob case like `header-nav` so if you set your vue.config.js or webpack.config.js to only allow camel case you'll break AgnosticUI:

```js
    loaderOptions: {
      css: {
        // Note: the following config format is different between Vue CLI v4 and v3
        // For Vue CLI v3 users, please refer to css-loader v1 documentations
        // https://github.com/webpack-contrib/css-loader/tree/v1.0.1
        modules: {
          localIdentName: '[name]-[hash]'
        },
        // DO NOT ADD THIS LINE
        // localsConvention: 'camelCaseOnly'
      }
```
 
## Build Notes

The rollup configuration and development workflow uses [vue-sfc-rollup](https://www.npmjs.com/package/vue-sfc-rollup) and was inspired by this article:
https://dev.to/htech/creating-a-vue-module-with-rollup-and-typescript-4igb
