# Loader

The `Loader` component is used to assure a user that content is being loaded — typically, when wait times are unknown due to an asynchronous data fetch or render cycle.

<div class="mbs24"></div>

## Examples

<div class="mbe24"></div>

<LoaderExamples />

<script>
import LoaderExamples from '../../components/LoaderExamples.vue'
import { Alert } from "agnostic-vue";

export default {
  components: { Alert, LoaderExamples }
}
</script>

<div class="mbe32"></div>

## Usage

<div class="flex">
  <h3 id="react" tabindex="-1">
    <img src="/images/React-icon.svg" alt="react logo">React
  </h3>
</div>

```jsx
import "agnostic-react/dist/common.min.css";
import "agnostic-react/dist/esm/index.css";
import { Loader } from "agnostic-react";
export const YourComponent = () => (
  <div>
    <Loader />
    <Loader size="small" />
    <Loader size="large" />
    <Loader size="xlarge" />
  </div>
)
```

React: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/Loader.tsx), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/stories/Loader.stories.tsx)

<div class="mbe32"></div>

<div class="flex">
  <h3 id="vue-3" tabindex="-1">
    <img src="/images/Vue-icon.svg" alt="Vue 3 logo">Vue 3
  </h3>
</div>

```vue
<script>
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import { Loader } from "agnostic-vue";

export default {
  name: "LoaderExamples",
  components: {
    Loader,
  },
};
</script>
<template>
  <h3>Default close</h3>
  <Loader />
  <h3>Sizes</h3>
  <Loader />
  <Loader size="small" />
  <Loader size="large" />
  <Loader size="xlarge" />
</template>
```


Vue 3: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/components/Loader.vue), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/stories/Loader.stories.js)

<div class="mbe24"></div>

<Alert type="warning">Note: Vue 2 is not supported</Alert>

<div class="mbe32"></div>

<div class="flex">
  <h3 id="angular" tabindex="-1">
    <img src="/images/Angular-icon.svg" alt="Angular logo">Angular
  </h3>
</div>

In your Angular configuration (likely `angular.json`) ensure you're including
the common AgnosticUI styles:

<div class="mbe16"></div>

` "styles": ["agnostic/dist/common.min.css"],`

<div class="mbe24"></div>

Add AgnosticUI's `AgModule` module:

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

Now you can use in your components:

```js
import { Component } from '@angular/core';

@Component({
  selector: 'your-component',
  template: `<div>
    <ag-loading></ag-loading>
    <ag-loading size="small"></ag-loading>
    <ag-loading size="large"></ag-loading>
    <ag-loading size="xlarge"></ag-loading>
  </div>`
})
export class YourComponent {}
```


Angular: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/loading.component.ts), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/loading.component.stories.ts)

<div class="mbe32"></div>

<div class="flex">
  <h3 id="svelte" tabindex="-1">
    <img src="/images/Svelte-icon.svg" alt="Svelte logo">Svelte
  </h3>
</div>

```html
<script>
  import 'agnostic-svelte/dist/common.min.css';
  import { Loader } from "agnostic-svelte";
</script>
<div>
  <Loader />
  <Loader size="small">
  <Loader size="large">
  <Loader size="xlarge">
</div>
```

Svelte: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/stories/Loader.svelte), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/stories/Loader.stories.js)

## Storybook

You can run the framework Storybooks and see live examples for React, Vue 3, Angular, and Svelte. The following will set this up locally:

```shell
git clone git@github.com:AgnosticUI/agnosticui.git
cd agnosticui && yarn
# You can then run any of the top-level scripts:
yarn start:react # or
yarn start:vue # or
yarn start:angular # or
yarn start:svelte
```

See [Running monorepo](https://github.com/AgnosticUI/agnosticui/blob/master/CONTRIBUTING.md#running-monorepo).
