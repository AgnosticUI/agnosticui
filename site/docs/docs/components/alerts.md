# Alerts

Alerts provide contextual notifications or messages with [timely information](https://www.w3.org/TR/wai-aria-practices/#alert).

<div class="mbe24"></div>

## Examples

<AlertExamples />

<script setup>
import AlertExamples from '../../components/AlertExamples.vue'
import { Alert, Button } from "agnostic-vue";
</script>

## Usage

<div class="flex mbs40 mbe24">
  <a href="https://astro.build/" class="flex-shrink-0" target="_blank"><img style="width: var(--fluid-80)" src="/images/astro-logo-light.svg" alt="astro logo"></a>
  <p class="mis16">Astro-based playgrounds let you see all framework implementations in one place💥</p>
</div>
<div class="playgrounds flex mbe32">
  <a class="btn btn-rounded" style="background-color: var(--agnostic-dark); color: var(--agnostic-light)" href="https://codesandbox.io/s/github/AgnosticUI/agnosticui/tree/master/playgrounds/Alert?file=/README.md" target="_blank">
    <img src="/images/codesandbox.svg" alt="codesandbox logo" class="mie8"> View in CodeSandbox
  </a>
  <a class="btn btn-rounded" style="background-color: var(--agnostic-primary); color: var(--agnostic-light)" href="https://stackblitz.com/github/AgnosticUI/agnosticui/tree/master/playgrounds/Alert?file=/README.md" target="_blank">
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
import 'agnostic-react/dist/common.min.css';
import 'agnostic-react/dist/esm/index.css';
import { Alert } from 'agnostic-react';

const alertMessage = 'Alerts should be used for timely information.';

const getColor = (type) => {
  switch (type) {
    case 'warning':
      return 'var(--agnostic-warning-border-accent)';
    case 'info':
      return 'var(--agnostic-primary-dark)';
    case 'success':
      return 'var(--agnostic-action-from)';
    case 'error':
      return 'var(--agnostic-error-dark)';
    default:
      return 'var(--agnostic-gray-mid-dark)';
  }
};

const DemoIcon = ({ type, utilityClasses }) => {
  return (
    <svg
      className={utilityClasses}
      style={{ color: getColor(type) }}
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path fill="currentColor" d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
    </svg>
  );
};

export const YourComponent = () => (
  <>
    <Alert>{ alertMessage }</Alert>
    <div class="mbe16" />
    <Alert isRounded>{ alertMessage }</Alert>
    <div class="mbe16" />
    <Alert isBorderAll>Border all</Alert>
    <div class="mbe16" />
    <Alert isBorderLeft>Border left</Alert>
    <div class="mbe16" />
    <Alert type="dark">
      <DemoIcon type="dark" utilityClasses="mie8" />
      <p className='flex-fill'>{ alertMessage }</p>
    </Alert>
    <div class="mbe16" />
    <Alert type="success">
      <DemoIcon type="success" utilityClasses="mie8" />
      <p className='flex-fill'>{ alertMessage }</p>
    </Alert>
    <div class="mbe16" />
    <Alert type="info">
      <DemoIcon type="info" utilityClasses="mie8" />
      <p className='flex-fill'>{ alertMessage }</p>
    </Alert>
    <div class="mbe16" />
    <Alert type="warning">
      <DemoIcon type="warning" utilityClasses="mie8" />
      <p className='flex-fill'>{ alertMessage }</p>
    </Alert>
    <div class="mbe16" />
    <Alert type="error">
      <DemoIcon type="error" utilityClasses="mie8" />
      <p className='flex-fill'>{ alertMessage }</p>
    </Alert>
  </>
);
```
</details>

React: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/Alert.tsx), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/stories/Alert.stories.tsx)

<div class="mbe24"></div>

<div class="flex">
  <h3 id="vue-3" tabindex="-1">
    <img src="/images/Vue-icon.svg" alt="Vue 3 logo">Vue 3
  </h3>
</div>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```vue
<template>
  <div class="mbs12 mbe16">
    <Alert>Default</Alert>
  </div>
  <div class="mbs12 mbe16">
    <Alert isRounded>Rounded</Alert>
  </div>
  <div class="mbs12 mbe16">
    <Alert isBorderAll>Border all</Alert>
  </div>
  <div class="mbs12 mbe16">
    <Alert isBorderLeft>Border left</Alert>
  </div>
  <div class="mbs12 mbe16">
    <Alert type="success">
      <IconExample
        icon-type="success"
        utility-classes="mie8"
      >
        <template #icon />
      </IconExample>
      <p class="flex-fill">
        Success alert with projected icon
      </p>
    </Alert>
  </div>
  <div class="mbs12 mbe16">
    <Alert type="info">
      <IconExample
        icon-type="info"
        utility-classes="mie8"
      >
        <template #icon />
      </IconExample>
      <p class="flex-fill">
        Info alert with projected icon
      </p>
    </Alert>
  </div>
  <div class="mbs12 mbe16">
    <Alert type="warning">
      <IconExample
        icon-type="warning"
        utility-classes="mie8"
      >
        <template #icon />
      </IconExample>
      <p class="flex-fill">
        Warning alert with projected icon
      </p>
    </Alert>
  </div>
  <div class="mbs12 mbe16">
    <Alert type="error">
      <IconExample
        icon-type="error"
        utility-classes="mie8"
      >
        <template #icon />
      </IconExample>
      <p class="flex-fill">
        Error alert with projected icon
      </p>
    </Alert>
  </div>
</template>

<script>
import "agnostic-vue/dist/index.css";
import { Alert } from "agnostic-vue";
import IconExample from "./IconExample.vue";
export default {
  name: "AlertExamples",
  components: {
    Alert,
    IconExample,
  },
};
</script>
```
</details>

Vue 3: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/stories/Alert.vue), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/stories/Alert.stories.js)

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
  import { Alert } from 'agnostic-svelte';
  import IconExample from "./path/to/components/IconExample.svelte";
  let alertMessage = "Alerts should be used for timely information.";
</script>
<section>
  <Alert>{alertMessage}</Alert>
  <div class="mbe16" />
  <Alert>{ alertMessage }</Alert>
  <div class="mbe16" />
  <Alert isRounded>{ alertMessage }</Alert>
  <div class="mbe16" />
  <Alert isBorderAll>Border all</Alert>
  <div class="mbe16" />
  <Alert isBorderLeft>Border left</Alert>
  <div class="mbe16" />
  <Alert type="success">
    <IconExample type="success" utilityClasses="mie8" />
    <p>{alertMessage}</p>
  </Alert>
  <div class="mbe16" />
  <Alert type="info">
    <IconExample type="info" utilityClasses="mie8" />
    <p>{alertMessage}</p>
  </Alert>
  <div class="mbe16" />
  <Alert type="warning">
    <IconExample type="warning" utilityClasses="mie8" />
    <p>{alertMessage}</p>
  </Alert>
  <div class="mbe16" />
  <Alert type="error">
    <IconExample type="error" utilityClasses="mie8" />
    <p>{alertMessage}</p>
  </Alert>
</section>
```
</details>

Svelte: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/lib/components/Alert/Alert.svelte), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/lib/components/Alert/Alert.stories.js)

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

// Add your icon component to your app's module (this is just one
// way to do this; ultimately you're just projecting an icon)
import { IconExampleComponent } from './iconex.component';

@NgModule({
  declarations: [AppComponent, IconExampleComponent],
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
    <div class="mbe16">
      <ag-alert>This is an alert</ag-alert>
    </div>
    <div class="mbe16">
      <ag-alert [isRounded]="true">This is an alert</ag-alert>
    </div>
    <div class="mbe16">
      <ag-alert [isBorderAll]="true">This is an alert</ag-alert>
    </div>
    <div class="mbe16">
      <ag-alert [isRounded]="true"
                [isBorderAll]="true">This is an alert</ag-alert>
    </div>
    <div class="mbe16">
      <ag-alert [isBorderLeft]="true">This is an alert</ag-alert>
    </div>
    <div class="mbe16">
      <ag-alert [isBorderLeft]="true"
                type="success">
        <ag-example-icon iconType="success"
                         utilityClasses="mie12"></ag-example-icon>
        <p class="flex-fill">Success alert w/projected icon</p>
      </ag-alert>
    </div>
    <div class="mbe16">
      <ag-alert [isBorderLeft]="true"
                type="info">
        <ag-example-icon iconType="info"
                         utilityClasses="mie12"></ag-example-icon>
        <p class="flex-fill">Info alert w/projected icon</p>
      </ag-alert>
    </div>
    <div class="mbe16">
      <ag-alert [isBorderLeft]="true"
                type="warning">
        <ag-example-icon iconType="warning"
                         utilityClasses="mie12"></ag-example-icon>
        <p class="flex-fill">Warning alert w/projected icon</p>
      </ag-alert>
    </div>
    <div class="mbe16">
      <ag-alert [isBorderLeft]="true"
                type="error">
        <ag-example-icon iconType="error"
                         utilityClasses="mie12"></ag-example-icon>
        <p class="flex-fill">Error alert w/projected icon</p>
      </ag-alert>
    </div>
  </section>`,
})
export class YourComponent { //... }
```
</details>

Angular: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/alert.component.ts), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/alert.component.stories.ts)

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
