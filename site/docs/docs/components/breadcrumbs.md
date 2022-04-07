# Breadcrumbs

The `Breadcrumb` component is a <span class="quoted">wayfinding</span> element that helps make users aware of their current location within an application or website.

<div class="mbs24"></div>

## Examples

<div class="mbe24"></div>

<BreadcrumbExamples />

<script setup>
import BreadcrumbExamples from '../../components/BreadcrumbExamples.vue'
import { Alert } from "agnostic-vue";
</script>

<div class="mbe32"></div>

## Usage

<div class="flex mbs40 mbe24">
  <a href="https://astro.build/" class="flex-shrink-0" target="_blank"><img style="width: var(--fluid-80)" src="/images/astro-logo-light.svg" alt="astro logo"></a>
  <p class="mis16">React, Vue, and Svelte examples on a single playground page 🚀 💥</p>
</div>
<div class="playgrounds flex mbe32">
  <a class="btn btn-rounded" style="background-color: var(--agnostic-dark); color: var(--agnostic-light)" href="https://codesandbox.io/s/github/AgnosticUI/agnosticui/tree/master/playgrounds/Breadcrumbs?file=/README.md" target="_blank">
    <img src="/images/codesandbox.svg" alt="codesandbox logo" class="mie8"> View in CodeSandbox
  </a>
  <a class="btn btn-rounded" style="background-color: var(--agnostic-primary); color: var(--agnostic-light)" href="https://stackblitz.com/github/AgnosticUI/agnosticui/tree/master/playgrounds/Breadcrumbs?file=/README.md" target="_blank">
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
import { Breadcrumb } from "agnostic-react";

const trailOfTennisRoutes = [
  {
    label: "Tennis",
    url: "#tennis",
  },
  {
    label: "Superstars",
    url: "#tennis-superstars",
  },
  {
    label: "Serena Williams",
    url: "#tennis-superstars-serena",
  },
];

export const YourComponent = () => (
  <>
    <h2 className="mbs40 mbe24">Breadcrumbs</h2>
    <div class="mbs24 mbe16">
      <Breadcrumb routes={ trailOfTennisRoutes } />
      <Breadcrumb
        type="slash"
        routes={ trailOfTennisRoutes }
      />
      <Breadcrumb
        type="bullet"
        routes={ trailOfTennisRoutes }
      />
      <Breadcrumb
        type="arrow"
        routes={ trailOfTennisRoutes }
      />
      <Breadcrumb routes={[{ label: 'A single route looks "link-less"' }]} />
      <Breadcrumb routes={[{label: 'First', url: '#foo'}, { label: 'Second', url: '#bar' }]} />
    </div>
  </>
)
```
</details>

React: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/Breadcrumb.tsx), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/stories/Breadcrumb.stories.tsx)

<div class="mbe24"></div>

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
import { Breadcrumb } from "agnostic-vue";

const trailOfTennisRoutes = [
  {
    label: "Tennis",
    url: "#tennis",
  },
  {
    label: "Superstars",
    url: "#tennis-superstars",
  },
  {
    label: "Serena Williams",
    url: "#tennis-superstars-serena",
  },
];
</script>
<template>
  <h2>Breadcrumbs</h2>
  <div class="mbs24 mbe16">
    <Breadcrumb :routes="trailOfTennisRoutes" />
    <Breadcrumb
      type="slash"
      :routes="trailOfTennisRoutes"
    />
    <Breadcrumb
      type="bullet"
      :routes="trailOfTennisRoutes"
    />
    <Breadcrumb
      type="arrow"
      :routes="trailOfTennisRoutes"
    />
    <Breadcrumb :routes="[{ label: 'A single route will look *linkless*' }]" />
    <Breadcrumb :routes="[{label: 'First', url: '#foo'}, { label: 'Second', url: '#bar' }]" />
  </div>
</template>
```
</details>

Vue 3: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/components/Breadcrumb.vue), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/stories/Breadcrumb.stories.js)

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
  import { Breadcrumb } from "agnostic-svelte";

  const trailOfTennisRoutes = [
    {
      label: "Tennis",
      url: "#tennis",
    },
    {
      label: "Superstars",
      url: "#tennis-superstars",
    },
    {
      label: "Serena Williams",
      url: "#tennis-superstars-serena",
    },
  ];
</script>
<section>
  <h2 class="mbs40 mbe24">Breadcrumbs</h2>
  <div class="mbs24 mbe16">
    <Breadcrumb routes={ trailOfTennisRoutes } />
    <Breadcrumb
      type="slash"
      routes={ trailOfTennisRoutes }
    />
    <Breadcrumb
      type="bullet"
      routes={ trailOfTennisRoutes }
    />
    <Breadcrumb
      type="arrow"
      routes={ trailOfTennisRoutes }
    />
    <Breadcrumb routes={[{ label: 'A single route will look *linkless*' }]} />
    <Breadcrumb routes={[{label: 'First', url: '#foo'}, { label: 'Second', url: '#bar' }]} />
  </div>
</section>
```
</details>

Svelte: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/lib/components/Breadcrumb/Breadcrumb.svelte), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/lib/components/Breadcrumb/Breadcrumb.stories.js)

<div class="mbe24"></div>

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
    <h2>Breadcrumbs</h2>
    <ag-breadcrumb
                   [routes]="[{ label: 'Tennis', url: '#tennis'}, { label: 'Superstars', url: '#tennis-superstars' }, { label: 'Serena Williams', url: '#tennis-superstars-serena' }]">
    </ag-breadcrumb>
    <ag-breadcrumb type="bullet"
                   [routes]="[{ label: 'Tennis', url: '#tennis'}, { label: 'Superstars', url: '#tennis-superstars' }, { label: 'Serena Williams', url: '#tennis-superstars-serena' }]">
    </ag-breadcrumb>
    <ag-breadcrumb type="arrow"
                   [routes]="[{ label: 'Tennis', url: '#tennis'}, { label: 'Superstars', url: '#tennis-superstars' }, { label: 'Serena Williams', url: '#tennis-superstars-serena' }]">
    </ag-breadcrumb>
    <ag-breadcrumb [routes]="[{ label: 'A single route will look *linkless*' }]"></ag-breadcrumb>
    <ag-breadcrumb [routes]="[{label: 'First', url: '#foo'}, { label: 'Second', url: '#bar' }]"></ag-breadcrumb>
  </section>`
})
export class YourComponent {}
```
</details>

Angular: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/Breadcrumb.component.ts), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/Breadcrumb.component.stories.ts)

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
