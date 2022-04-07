# Switch

The `Switch` component is best used to immediately toggle a single application item's state on or off. See [these guidelines](https://uxmovement.com/mobile/stop-misusing-toggle-switches/) on when to use a switch vs. checkbox.

<div class="mbs24"></div>

## Examples

<div class="mbe24"></div>

<SwitchExamples />

<script setup>
import SwitchExamples from '../../components/SwitchExamples.vue'
import { Alert } from "agnostic-vue";
</script>

<div class="mbe32"></div>

## Usage

<div class="flex mbs40 mbe24">
  <a href="https://astro.build/" class="flex-shrink-0" target="_blank"><img style="width: var(--fluid-80)" src="/images/astro-logo-light.svg" alt="astro logo"></a>
  <p class="mis16">React, Vue, and Svelte examples on a single playground page 🚀 💥</p>
</div>
<div class="playgrounds flex mbe32">
  <a class="btn btn-rounded" style="background-color: var(--agnostic-dark); color: var(--agnostic-light)" href="https://codesandbox.io/s/github/AgnosticUI/agnosticui/tree/master/playgrounds/Switch?file=/README.md" target="_blank">
    <img src="/images/codesandbox.svg" alt="codesandbox logo" class="mie8"> View in CodeSandbox
  </a>
  <a class="btn btn-rounded" style="background-color: var(--agnostic-primary); color: var(--agnostic-light)" href="https://stackblitz.com/github/AgnosticUI/agnosticui/tree/master/playgrounds/Switch?file=/README.md" target="_blank">
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
import { Switch } from "agnostic-react";
export const YourComponent = () => (
  <>
    <div class="mbs12 mbe16">
      <Switch
        id={1}
        label="Switch small"
        size="small"
      />
      <Switch
        id={2}
        label="Switch default (medium)"
      />
      <Switch
        id={3}
        label="Switch large"
        size="large"
      />
      <Switch
        id={4}
        isChecked
        label="Switch large prechecked"
        size="large"
      />
      <Switch
        id={5}
        isDisabled
        label="Switch disabled"
        size="large"
      />
      <Switch
        id={6}
        isBordered
        label="Switch bordered"
      />
      <Switch
        id={7}
        isAction
        isChecked
        label="Switch action prechecked"
        size="large"
      />
      <Switch
        id={8}
        isAction
        isBordered
        label="Switch action bordered"
      />
    </div>
    <h3>Switch label on right</h3>
    <div>
      <Switch
        id={9}
        labelPosition="right"
        label="Switch label on right"
      />
    </div>
  </>
)
```
</details>

React: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/Switch.tsx), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/stories/Switch.stories.tsx)

<div class="mbe32"></div>

<div class="flex">
  <h3 id="vue-3" tabindex="-1">
    <img src="/images/Vue-icon.svg" alt="Vue 3 logo">Vue 3
  </h3>
</div>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```vue
<template>
  <section class="mbe40">
    <div class="h4 mbe32 flex items-center">
      <img
        width="24"
        height="24"
        src="/assets/Vue-icon.svg"
        alt="Vue logo"
        class="mie12"
      />Vue 3 Switch
    </div>
    <Switch
      id="31"
      label="Switch default"
    />
    <Switch
      id="32"
      size="small"
      label="Switch small"
    />
    <Switch
      id="33"
      size="large"
      label="Switch large"
    />
    <Switch
      id="34"
      is-checked
      label="Prechecked"
    />
    <Switch
      id="35"
      is-disabled
      label="Disabled"
    />
    <Switch
      id="36"
      is-bordered
      label="Bordered"
    />
    <Switch
      id="37"
      is-action
      label="Action"
    />
    <Switch
      id="38"
      is-action
      is-bordered
      label="Action bordered"
    />
    <Switch
      id="39"
      labelPosition="right"
      label="Label on right"
    />
    <div class="h4 mbs24 mbe24">Switch label on right</div>
    <Switch
      id="40"
      is-bordered
      labelPosition="right"
      label="Label on right bordered"
    />
  </section>
</template>
<script setup>
// Import AgnosticUI global common & component CSS
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import { Switch } from "agnostic-vue";
</script>
```
</details>

Vue 3: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/components/Switch.vue), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/stories/Switch.stories.js)

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
  import { Switch } from "agnostic-svelte";
</script>
<section>
  <Switch id="1" label="Switch default" />
  <Switch id="2" size="small" label="Switch small" />
  <Switch id="3" size="large" label="Switch large" />
  <Switch id="4" isChecked={true} label="Prechecked" />
  <Switch id="5" isDisabled={true} label="Disabled" />
  <Switch id="6" isBordered={true} label="Bordered" />
  <Switch id="7" isAction={true} label="Action" />
  <Switch
    id="8"
    isAction={true}
    isBordered={true}
    label="Action bordered"
  />
  <Switch
    id="9"
    labelPosition="right"
    label="Label on right"
  />
  <Switch
    id="10"
    isBordered={true}
    labelPosition="right"
    label="Label on right bordered"
  />
</section>
```
</details>

Svelte: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/lib/components/Switch/Switch.svelte), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/lib/components/Switch/Switch.stories.js)

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
    <h3>Switch</h3>
    <ag-switch label="Switch small"
               size="small"></ag-switch>
    <ag-switch label="Switch default (medium)"></ag-switch>
    <ag-switch label="Switch large"
               size="large"></ag-switch>
    <ag-switch [isChecked]="true"
               label="Switch prechecked"></ag-switch>
    <ag-switch [isDisabled]="true"
               label="Switch disabled"></ag-switch>
    <ag-switch [isBordered]="true"
               label="Switch bordered"></ag-switch>
    <ag-switch [isAction]="true"
               [isChecked]="true"
               label="Switch action prechecked"></ag-switch>
    <ag-switch [isAction]="true"
               [isBordered]="true"
               label="Switch action bordered"></ag-switch>
    <h3 class="mbs24 mbe24">Switch label on right</h3>
    <ag-switch label="Small label on right"
               size="small"
               labelPosition="right"></ag-switch>
  </section>`
})
export class YourComponent {}
```
</details>

Angular: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/switch.component.ts), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/switch.component.stories.ts)

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
