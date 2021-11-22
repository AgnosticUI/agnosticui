# Alerts

Alerts provide contextual notifications or messages with [timely information](https://www.w3.org/TR/wai-aria-practices/#alert).

<div class="mbe24"></div>

## Examples

<AlertExamples />

<script>
import AlertExamples from '../../components/AlertExamples.vue'
import { Alert } from "agnosticvue";

export default {
  components: { Alert, AlertExamples }
}
</script>

Live examples for React, Vue 3, Angular, and Svelte are available as local Storybook apps. See [Running monorepo](https://github.com/AgnosticUI/agnosticui/blob/master/CONTRIBUTING.md#running-monorepo) for instructions.

<div class="mbe32"></div>

Alternatively, have a look at the following &ldquo;kitchen sink&rdquo; pens for: [React](tbd), [Vue 3](tbd), [Angular](tbd), [Svelte](tbd)

## Usage

<div class="flex">
  <h3 id="react" tabindex="-1">
    <img src="/images/React-icon.svg" alt="react logo">React
  </h3>
</div>

```jsx
import 'agnostic-react/dist/common.min.css';
import 'agnostic-react/dist/esm/index.css';
import { Alert } from 'agnostic-react';

const message = 'Alerts should be used for timely information.';

export const YourComponent = () => (
  <>
    <Alert>{message}</Alert>
    <Alert isRounded>{message}</Alert>
    <Alert isBorderAll>Border all</Alert>
    <Alert isBorderLeft>Border left</Alert>
    <Alert type="success">{message}</Alert>
    <Alert type="info">{message}</Alert>
    <Alert type="warning">{message}</Alert>
    <Alert type="error">{message}</Alert>
  </>
);
```

React: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/Alert.tsx), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/stories/Alert.stories.tsx)

<div class="mbe32"></div>

<div class="flex">
  <h3 id="vue-3" tabindex="-1">
    <img src="/images/Vue-icon.svg" alt="Vue 3 logo">Vue 3
  </h3>
</div>


```vue
<template>
  <Alert>Default</Alert>
  <Alert isRounded>Rounded</Alert>
  <Alert isBorderAll>Border all</Alert>
  <Alert isBorderLeft>Border left</Alert>
  <Alert type="success">Success</Alert>
  <Alert type="info">Info</Alert>
  <Alert type="warning">Warning</Alert>
  <Alert type="error">Error</Alert>
</template>
<script>
// Import required AgnosticUI global common CSS
import "agnostic-vue/dist/common.min.css";
import { Alert } from "agnostic-vue";
export default {
  name: "your-component",
  components: { Alert },
};
</script>
```

Vue 3: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/stories/Alert.vue), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/stories/Alert.stories.js)


<div class="mbe24"></div>

<Alert type="warning">Note: Vue 2 is not supported</Alert>

<div class="mbe32"></div>

<div class="flex">
  <h3 id="angular" tabindex="-1">
    <img src="/images/Angular-icon.svg" alt="Angular logo">Angular
  </h3>
</div>

First you'll pull in AgnosticUI's `AgModule`:

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
    <ag-alert>Default</ag-alert>
    <ag-alert isRounded="true">Rounded</ag-alert>
    <ag-alert isBorderAll="true">Border all</ag-alert>
    <ag-alert isBorderLeft="true">Border left</ag-alert>
    <ag-alert type="success">Success</ag-alert>
    <ag-alert type="info">Info</ag-alert>
    <ag-alert type="warning">Warning</ag-alert>
    <ag-alert type="error">Error</ag-alert>
  </div>`,
})
export class YourComponent {
  // ...
}
```

Angular: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/alert.component.ts), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/alert.component.stories.ts)

<div class="mbe32"></div>

<div class="flex">
  <h3 id="svelte" tabindex="-1">
    <img src="/images/Svelte-icon.svg" alt="Svelte logo">Svelte
  </h3>
</div>

```html
<script>
  import "../node_modules/agnostic-svelte/dist/common.min.css";
  import { Alert } from 'agnostic-svelte';
  let message = "Alerts should be used for timely information.";
</script>

<div>
  <Alert>{message}</Alert>
  <Alert isRounded>{message}</Alert>
  <Alert isBorderAll>Border all</Alert>
  <Alert isBorderLeft><p>Border left</p></Alert>
  <Alert type="success">Success</Alert>
  <Alert type="info">Info</Alert>
  <Alert type="warning">Warning</Alert>
  <Alert type="error">Error</Alert>
</div>
```

Svelte: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/stories/Alert.svelte), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/stories/Alert.stories.js)
