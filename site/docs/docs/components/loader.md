# Loader

The `Loader` component is used to assure a user that content is being loaded — typically, when wait times are unknown due to an asynchronous data fetch or render cycle.

<div class="mbs24"></div>

## Examples

<div class="mbe24"></div>

<LoaderExamples />

<script setup>
import LoaderExamples from '../../components/LoaderExamples.vue'
import { Alert } from "agnostic-vue";
</script>

<div class="mbe32"></div>

## Usage

<div class="flex items-center mbs40 mbe24">
  <a href="https://astro.build/" class="astro-logo-usage-wrap" target="_blank"><img class="astro-logo-usage" src="/images/astro-logo-light.svg" alt="astro logo"></a>
  <p class="mis16">React, Vue, and Svelte examples on a single playground page 🚀 💥</p>
</div>
<div class="playgrounds flex mbe32">
  <a class="btn btn-rounded" style="background-color: var(--agnostic-dark); color: var(--agnostic-light)" href="https://codesandbox.io/s/github/AgnosticUI/agnosticui/tree/master/playgrounds/Loaders?file=/README.md" target="_blank">
    <img src="/images/codesandbox.svg" alt="codesandbox logo" class="mie8"> View in CodeSandbox
  </a>
  <a class="btn btn-rounded" style="background-color: var(--agnostic-primary); color: var(--agnostic-light)" href="https://stackblitz.com/github/AgnosticUI/agnosticui/tree/master/playgrounds/Loaders?file=/README.md" target="_blank">
    <img src="/images/stackblitz.svg" alt="Stackblitz logo" class="mie4"> View in Stackblitz
  </a>
</div>

<div class="flex">
  <h3 id="react" tabindex="-1">
    <img src="/images/React-icon.svg" alt="react logo">React
  </h3>
</div>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

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
</details>

React: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/Loader.tsx), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/stories/Loader.stories.tsx)

<div class="mbe32"></div>

<div class="flex">
  <h3 id="vue-3" tabindex="-1">
    <img src="/images/Vue-icon.svg" alt="Vue 3 logo">Vue 3
  </h3>
</div>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```vue
<script setup>
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import { Loader } from "agnostic-vue";
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
</details>

Vue 3: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/components/Loader.vue), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/stories/Loader.stories.js)

<div class="mbe24"></div>

<div class="flex">
  <h3 id="svelte" tabindex="-1">
    <img src="/images/Svelte-icon.svg" alt="Svelte logo">Svelte
  </h3>
</div>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```html
<script>
  import 'agnostic-svelte/css/common.min.css';
  import { Loader } from "agnostic-svelte";
</script>
<div>
  <Loader />
  <Loader size="small" />
  <Loader size="large" />
  <Loader size="xlarge" />
</div>
```
</details>

Svelte: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/lib/components/Loader/Loader.svelte), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/lib/components/Loader/Loader.stories.js)

<div class="flex">
  <h3 id="angular" tabindex="-1">
    <img src="/images/Angular-icon.svg" alt="Angular logo">Angular (Experimental)
  </h3>
</div>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

In your Angular configuration (likely `angular.json`) ensure you're including
the common AgnosticUI styles:

<div class="mbe16"></div>

` "styles": ["agnostic-angular/common.min.css"],`

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
</details>

Angular: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/loader.component.ts), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/loader.component.stories.ts)

<div class="mbe32"></div>

## Storybook

You can run the framework Storybooks and see live examples for React, Vue 3, Svelte, Astro, and Angular (experimental). The following will set up Storybook and run locally:

<details class="mbs24 mbe24 disclose disclose-bordered">
<summary class="disclose-title">How to run Storybook</summary>

```shell
git clone git@github.com:AgnosticUI/agnosticui.git
cd agnosticui/<PACKAGE_NAME> && npm i # e.g. cd agnosticui/agnostic-react && npm i
npm run storybook
```
</details>

See [Running Storybook](https://github.com/AgnosticUI/agnosticui/blob/master/CONTRIBUTING.md#usage).

