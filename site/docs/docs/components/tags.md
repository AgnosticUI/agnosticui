# Tags

`Tag` components can be used as badges or pills that provide categorical information to users. Avoid overuse of tags as users of screen readers and other assistive technologies may find them to be <span class="quoted">noisy</span>.

<div class="mbs24"></div>

## Examples

<div class="mbe24"></div>

<TagExamples />

<script setup>
import TagExamples from '../../components/TagExamples.vue'
import { Alert } from "agnostic-vue";
</script>

<div class="mbe32"></div>

## Usage

<div class="flex mbs40 mbe24">
  <a href="https://astro.build/" class="flex-shrink-0" target="_blank"><img style="width: var(--fluid-80)" src="/images/astro-logo-light.svg" alt="astro logo"></a>
  <p class="mis16">React, Vue, and Svelte examples on a single playground page 🚀 💥</p>
</div>
<div class="playgrounds flex mbe32">
  <a class="btn btn-rounded" style="background-color: var(--agnostic-dark); color: var(--agnostic-light)" href="https://codesandbox.io/s/github/AgnosticUI/agnosticui/tree/master/playgrounds/Tags?file=/README.md" target="_blank">
    <img src="/images/codesandbox.svg" alt="codesandbox logo" class="mie8"> View in CodeSandbox
  </a>
  <a class="btn btn-rounded" style="background-color: var(--agnostic-primary); color: var(--agnostic-light)" href="https://stackblitz.com/github/AgnosticUI/agnosticui/tree/master/playgrounds/Tags?file=/README.md" target="_blank">
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
import { Tag } from "agnostic-react";
export const YourComponent = () => (
  <section>
    <Tag type="success" isUppercase>success</Tag>
    <Tag type="info" isUppercase>info</Tag>
    <Tag type="warning" isUppercase>warning</Tag>
    <Tag type="error" isUppercase>error</Tag>
    <Tag shape="pill" type="success" isUppercase>You did it!</Tag>
    <Tag shape="circle" type="error" isUppercase>2</Tag>
    <Tag shape="round" type="error">Round</Tag>
    <Tag shape="round" type="success">Round</Tag>
  </section>
);
```
</details>

React: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/Tag.tsx), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/stories/Tag.stories.tsx)

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
// Import AgnosticUI global common & component CSS
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import { Tag } from "agnostic-vue";
</script>

<template>
  <section>
    <Tag class="mie6">unknown</Tag>
    <Tag is-uppercase>
      UpperCasE
    </Tag>
    <Tag
      class="mie6"
      shape="round"
      is-uppercase
    >
      round
    </Tag>
    <Tag
      class="mie6"
      shape="pill"
    >
      pill badge
    </Tag>
    <Tag
      class="mie6"
      shape="circle"
      type="error"
    >
      2
    </Tag>
    <Tag
      class="mie6"
      type="success"
    >
      success
    </Tag>
    <Tag
      class="mie6"
      type="info"
    >
      info
    </Tag>
    <Tag
      class="mie6"
      type="warning"
    >
      warning
    </Tag>
  </section>
</template>
```
</details>

Vue 3: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/components/Tag.vue), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/stories/Tag.stories.js)

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
  import { Tag } from "agnostic-svelte";
</script>
<section class="mbe24">
  <Tag>unknown</Tag>
  <Tag shape="round">Rounded</Tag>
  <Tag shape="pill">Badge</Tag>
  <Tag type="success" isUppercase="true">success</Tag>
  <Tag type="info" isUppercase="true">info</Tag>
  <Tag type="warning" isUppercase="true">warning</Tag>
  <Tag type="error" isUppercase="true">error</Tag>
  <Tag type="error" shape="circle">2</Tag>
</section>
```
</details>

Svelte: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/lib/components/Tag/Tag.svelte), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/lib/components/Tag/Tag.stories.js)


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
  template: `<section>
    <ag-tag>unknown</ag-tag>
    <ag-tag shape="round">rounded</ag-tag>
    <ag-tag shape="pill">badge</ag-tag>
    <ag-tag type="info"
            [isUppercase]="true">info</ag-tag>
    <ag-tag type="success"
            [isUppercase]="true">success</ag-tag>
    <ag-tag type="warning"
            [isUppercase]="true">warning</ag-tag>
    <ag-tag type="error"
            [isUppercase]="true">error</ag-tag>
    <ag-tag type="error"
            shape="circle">2</ag-tag>
  </section>`
})
export class YourComponent {}
```
</details>

Angular: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/tag.component.ts), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/tag.component.stories.ts)

<div class="mbe32"></div>

## Storybook

You can run the framework Storybooks and see live examples for React, Vue 3, Svelte, and Angular (experimental). The following will set this up locally:

```shell
git clone git@github.com:AgnosticUI/agnosticui.git
cd agnosticui/<PACKAGE_NAME> && npm i # e.g. cd agnosticui/agnostic-react && npm i
# You can then run any of the top-level scripts:
npm run start:react # or cd agnostic-react && npm run storybook
npm run start:vue # or cd agnostic-vue && npm run storybook
npm run start:angular # or cd agnostic-angular && npm run storybook
npm run start:svelte # or cd agnostic-angular && npm run storybook
```

See [Running Storybook](https://github.com/AgnosticUI/agnosticui/blob/master/CONTRIBUTING.md#usage).
