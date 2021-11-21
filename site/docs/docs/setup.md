# Installation

You can use AgnosticUI via a package manager (NPM or Yarn) or a CDN server.

::: warning
AgnosticUI doesn't support IE11. We use CSS [logical properties](https://css-tricks.com/css-logical-properties-and-values/) for margins and padding which inclusively supports direction-agnostic [writing modes](https://css-tricks.com/almanac/properties/w/writing-mode/).
:::

## NPM or Yarn

You can install the AgnosticUI package of choice with:

```shell
npm install agnostic-PACKAGE # or yarn add agnostic-PACKAGE
```

For example, to install the `agnostic-react` package you'd do:

```shell
npm install agnostic-react # or yarn add agostic-react
```

From there you can follow the appropriate package directions below… 

### React 

To use the `agnostic-react` package in your project do the following:

<div class="mbe16"></div>

- **Step 1:** Import the global AgnosticUI CSS (it contains AgnosticUI's CSS custom properties)

```js
import "agnostic-react/dist/common.min.css";
```

- **Step 2:** Import the AgnosticUI component-specific CSS
```js
import "agnostic-react/dist/esm/index.css";
```

- **Step. 3:** Import the AgnosticUI component(s) you'd like to use

```js
import { Alert, Button } from "agnostic-react";
```

- **Step 4:** Use

```jsx
const message = 'Alerts should be used for timely information.';

export const YourComponent = () => (
  <>
    <Alert>{message}</Alert>
    <Button mode="primary">Go</Button>
  </>
);
```

### Vue 3

**Heads up! AgnosticUI only supports Vue 3**

<div class="mbe24"></div>

To use the agnostic-vue package in your project do the following:

<div class="mbe16"></div>

- **Step 1:** Import the global AgnosticUI CSS (it contains AgnosticUI's CSS custom properties)

```vue
<script>
import 'agnosticvue/dist/common.min.css'
// ...
</script>
```

- **Step 2:** Import the AgnosticUI component-specific CSS

```vue
<script>
// ...
import "agnosticvue/dist/style.css";
</script>
```

- **Step. 3:** Import the AgnosticUI component(s) you'd like to use and declare component prop

```vue
<script>
// ...
import { Alert } from "agnosticvue";
export default {
  name: "AlertExample",
  components: {
    Alert,
  },
};
</script>
```

- **Step 4:** Use in your template

```vue
<template>
  <Alert
    isBorderLeft
    type="info"
  >Example alert</Alert>
</template>
```

### Angular

To use the agnostic-angular package in your project do the following:

The angular implementation leverages [nx](https://nx.dev/) and you can find an example application configured in [agnostic-angular/angular.json](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/angular.json) and also view the application's [main template](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/apps/examples/src/app/app.component.html).

See the Angular Getting Started [README](https://github.com/AgnosticUI/agnosticui/tree/master/agnostic-angular#getting-started) to run an example application.

**More information will be coming here soon!**

### Svelte

To use the agnostic-svelte package in your project do the following:

<div class="mbe16"></div>

- **Step 1:** Import the global AgnosticUI CSS (it contains AgnosticUI's CSS custom properties)

```html
<script>
import "../node_modules/agnostic-svelte/dist/common.min.css";
// ...
</script>
```

- **Step. 2:** Import the AgnosticUI component(s) you'd like to use and declare component prop
```html
<script>
// ...
import { Button } from 'agnostic-svelte';
</script>
```

- **Step 3:** Use in Svelte template

```html
<body>
  <!-- ... -->
  <Button mode="primary">Go</Button>
  <!-- ... -->
```





## CDN

Coming soon -- show unpkg examples

## Build

The following examples are, perhaps, unorthodox but valid if you'd like to incorporate
AgnosticUI directly into your build system. You can use builders like [Webpack](https://webpack.js.org/), [Rollup](https://rollupjs.org/guide/en/), [Vite](https://vitejs.dev/), etc., and import individual source code files if you'd prefer that sort of approach.


### Webpack Vue

```shell
yarn add agnostic-vue
```

Now you can set up the Vue package to be imported from your project's components with the following resolve alias in your `vue.config.js`:

```js
  configureWebpack: {
    resolve: {
      alias: {
        "agnosticui": path.resolve(__dirname, '../node_modules/agnostic-vue/src/stories')
      }
    }
  }
```

#### Svelte example

```shell
yarn add agnostic-svelte
```

Now you can set up the Svelte package to be imported from your project's components with the following resolve alias in your `webpack.config.js`:

```js
alias({
  entries: [
    {
      resolve: [".js", ".svelte"],
      find: "agnosticui",
      replacement: path.resolve(
        __dirname,
        "./node_modules/agnostic-svelte/src/stories/"
      ),
    },
  ],
});
```

### Vite
Coming soon

### Rollup
Coming soon


