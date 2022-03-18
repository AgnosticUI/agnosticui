# AgnosticUI Component Library

<div class="mbs16"></div>

AgnosticUI is a library of UI component primitives that work in React, Vue, Svelte, and Angular!

<script>
import "agnostic-vue/dist/index.css";
import { Alert } from "agnostic-vue";

export default {
  components: { Alert }
}
</script>

<div class="mbs24"></div>

<Alert type="success">
  <div class="h5">What's AgnosticUI?</div>
  <p class="mis24">A UI component library designed to work with multiple JavaScript frameworks. See the components on the left nav.</p>
</Alert>

# Installation

_Before you setup AgnosticUI, we recommend you first have a look at the [browsers supported](#browsers-supported) list._



<div class="mbs16"></div>

## NPM

<div class="mbs16"></div>

<div class="mbe16"></div>

This section will discuss using AgnosticUI via package manager installation and ES modules imports. In your project's top-level directory install the AgnosticUI package of your choice:

```shell
npm install agnostic-PACKAGE # or yarn add agnostic-PACKAGE
```

For example, to install the `agnostic-react` package you'd do:

```shell
npm install agnostic-react # or yarn add agostic-react
```

_The currently available framework packages are: `agnostic-react`, `agnostic-vue`, `agnostic-angular`, and `agnostic-svelte`._

<div class="mbe16"></div>

Follow the appropriate framework-specific instructions below… 

### React 

To use the `agnostic-react` package in your project do the following:

<div class="mbe16"></div>

- **Step 1:** Import AgnosticUI's common CSS

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

**AgnosticUI supports Vue 3 only!**

<div class="mbe24"></div>

To use the `agnostic-vue` package in your project do the following:

<div class="mbe16"></div>

- **Step 1:** Import AgnosticUI's common CSS 

```vue
<script>
import 'agnostic-vue/dist/common.min.css'
// ...
</script>
```

- **Step 2:** Import the AgnosticUI component-specific CSS

```vue
<script>
// ...
import "agnostic-vue/dist/index.css";
</script>
```

- **Step. 3:** Import the AgnosticUI component(s) you'd like to use and declare component prop

```vue
<script>
// ...
import { Alert } from "agnostic-vue";
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

To use the `agnostic-angular` package in your project do the following:

<div class="mbe16"></div>

**Step 1:** Import AgnosticUI's common CSS 

<div class="mbe16"></div>

In your Angular configuration (likely `angular.json`) ensure you're including
the common AgnosticUI styles. Here's example if you've used `nx`:

<div class="mbe16"></div>

```json
    "yourapp": {
      ...
      "architect": {
        "build": {
          "options": {
            ...
            "styles": ["agnostic-angular/common.min.css"],
```

<div class="mbe16"></div>

**Step. 2:** Add AgnosticUI's `AgModule` module:

```js{3,9}
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgModule } from 'agnostic-angular';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AgModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

**Step. 3:** Now you can use AgnosticUI in your Angular components:

```js
import { Component } from '@angular/core';

@Component({
  selector: 'your-component',
  template: `<ag-avatar text="AB"></ag-avatar>`,
})
export class YourComponent {}
```

<div class="mbs24"></div>

_You can also find an example application configured in AgnosticUI's Angular workspace at [agnostic-angular/angular.json](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/angular.json), and view its [main app template](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/apps/examples/src/app/app.component.html). See the Angular package's [Getting Started](https://github.com/AgnosticUI/agnosticui/tree/master/agnostic-angular#getting-started) instructions to run the example application locally._

<div class="mbe16"></div>

### Svelte

To use the `agnostic-svelte` package in your project do the following:

<div class="mbe16"></div>

- **Step 1:** Import AgnosticUI's common CSS

```html
<script>
import 'agnostic-svelte/css/common.min.css';
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

_I've placed some additional agnostic-svelte experiments [on my blog](https://developtodesign.com/agnosticui-examples) which may be helpful._

## CSS

The above directions will get you started using AgnosticUI in the framework of your choice and include the common CSS as well. However, you may also want to utilize some basic cascading font styles on your `body` or `.root` application container. We leave specifics to your discretion, but this may help you get started:

```css
.root {
  font-family: var(--agnostic-font-family-body);
  font-size: var(--agnostic-body);
  color: var(--agnostic-font-color);
  -webkit-font-smoothing: antialiased;
  line-height: 1.5;
}
```

## Browsers Supported

The following is the current `.browserlistrc` configuration as per the [Can I Use](https://caniuse.com/) database:

```shell
last 2 versions and > 2%
last 2 versions
Firefox ESR
not dead
not IE 11
maintained node versions
not op_mini all
```

### Why AgnosticUI doesn't support IE11

We use CSS [logical properties](https://css-tricks.com/css-logical-properties-and-values/) which support <span class="quoted">direction-agnostic</span> [writing modes](https://css-tricks.com/almanac/properties/w/writing-mode/) (e.g. `horizontal-tb`, `vertical-rl`, etc.) _See [MDN writing-mode docs](https://developer.mozilla.org/en-US/docs/Web/CSS/writing-mode)_ to learn more.

## Browser (UMD)

UMD (and CJS) builds are already available for each package. However, the use of CDN hosted UMD builds via `<script>` tags is currently unreliable (Vue 3's `Boolean` props don't take, CSS Modules don't load properly, etc.). We will continue to troubleshoot these issues and report back when there's been some progress made. In the meantime, we suggest you follow the ES module setup as described above.
