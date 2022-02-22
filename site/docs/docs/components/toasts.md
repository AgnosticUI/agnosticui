# Toast

The `Toast` component is a type of alert dialog either appears for a finite period of time (e.g. 10 seconds) and then is dismissed, or, it may be &ldquo;sticky&rdquo; until dismissed by user clicking a close button.

<div class="mbs24"></div>

## Examples

<div class="mbe24"></div>

<ToastExamples />

<script>
import ToastExamples from '../../components/ToastExamples.vue'
import { Alert } from "agnostic-vue";

export default {
  components: { Alert, ToastExamples }
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
import { Close } from "agnostic-react";
export const YourComponent = () => (
  // TBD
)
```

React: [Toasts](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/Toasts.tsx) and [Toast](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/Toast.tsx) components.

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
import { Close, Toasts, Toast } from "agnostic-vue";
import ToastIconExample from "./ToastIconExample.vue";
import { ref } from "vue";

export default {
  name: "CloseExamples",
  components: {
    Close,
    Toasts,
    Toast,
    ToastIconExample,
  },

  setup() {
    const timedToast = ref(true);
    setTimeout(() => {
      timedToast.value = false;
    }, 10000);

    const toast1IsOpen = ref(true);
    const close1Toast = () => {
      toast1IsOpen.value = false;
    };
    const toast2IsOpen = ref(true);
    const close2Toast = () => {
      toast2IsOpen.value = false;
    };

    return {
      timedToast,
      toast1IsOpen,
      toast2IsOpen,
      close1Toast,
      close2Toast,
    };
  },
};
</script>
<template>
  <Toasts
    vertical-position="top"
    horizontal-position="end"
  >
    <Toast
      :is-open="timedToast"
      type="info"
    >
      <ToastIconExample
        icon-type="info"
        utility-classes="mie8"
      >
        <template #icon />
      </ToastIconExample>
      Self timed toast that will close in 10 seconds.
    </Toast>
    <div className="mbe14" />
    <Toast
      :is-open="true"
      type="dark"
    >
      <ToastIconExample
        icon-type="dark"
        utility-classes="mie8"
      >
        <template #icon />
      </ToastIconExample>
      Toast 2 top end. Sticky.
    </Toast>
  </Toasts>
  <Toasts
    vertical-position="top"
    horizontal-position="center"
  >
    <Toast
      :is-open="timedToast"
      type="success"
    >
      <ToastIconExample
        icon-type="success"
        utility-classes="mie8"
      >
        <template #icon />
      </ToastIconExample>
      <div class="flex-fill">
        Self timed toast that will close in 10 seconds.
      </div>
    </Toast>
    <div className="mbe14" />
    <Toast
      :is-open="true"
      type="error"
    >
      <ToastIconExample
        icon-type="error"
        utility-classes="mie8"
      >
        <template #icon />
      </ToastIconExample>
      This is an
      &nbsp;<code>aria-live</code>&nbsp;
      &ldquo;assertive&rdquo; error toast
    </Toast>
  </Toasts>
  <Toasts
    vertical-position="bottom"
    horizontal-position="end"
  >
    <Toast
      :is-open="toast1IsOpen"
      type="dark"
    >
      <ToastIconExample
        icon-type="dark"
        utility-classes="mie8"
      >
        <template #icon />
      </ToastIconExample>
      <div class="flex-fill">
        This is a closable toast message
      </div>
      <Close
        @click="close1Toast()"
        :style="{ 'color': 'var(--agnostic-lighti)' }"
      />
    </Toast>
    <div className="mbe14" />
    <Toast
      :is-open="toast2IsOpen"
      type="warning"
    >
      <ToastIconExample
        icon-type="warning"
        utility-classes="mie8"
      >
        <template #icon />
      </ToastIconExample>
      <div class="flex-fill">
        This is a closable toast message
      </div>
      <Close
        @click="close2Toast()"
        :style="{ 'color': 'var(--agnostic-action-from)' }"
      />
    </Toast>
  </Toasts>
</template>
```

Vue 3: [Toasts](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/components/Toasts.vue) and [Toast](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/components/Toast.vue) components.

<div class="mbe24"></div>

<Alert type="warning">Note: Vue 2 is not supported</Alert>

<div class="mbe32"></div>

<div class="flex mbe16">
  <h3 id="angular" tabindex="-1">
    <img src="/images/Angular-icon.svg" alt="Angular logo">Angular
  </h3>
</div>

<Alert type="error">The Angular Toast component is still in development</Alert>

<div class="mbe32"></div>

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
  template: `TBD`
})
export class YourComponent {}
```

<div class="mbe32"></div>

<div class="flex">
  <h3 id="svelte" tabindex="-1">
    <img src="/images/Svelte-icon.svg" alt="Svelte logo">Svelte
  </h3>
</div>

<Alert type="error">The Svelte Toast component is still in development</Alert>

<div class="mbe32"></div>


```html
<script>
  import 'agnostic-svelte/css/common.min.css';
  import { Toasts, Toast } from "agnostic-svelte";
</script>
...TBD
```

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
