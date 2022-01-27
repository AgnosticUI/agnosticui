# Dialog

AgnosticUI's [Dialog](https://www.w3.org/TR/wai-aria-practices/#dialog_modal) component wraps Kitty Giraudel's [a11y-dialog](https://github.com/KittyGiraudel/a11y-dialog) — an accessible and inclusive dialog component that has been battle tested over several versions to date.

<div class="mbs24"></div>

## Examples

<div class="mbe24"></div>

<DialogExamples />

<script>
import DialogExamples from '../../components/DialogExamples.vue'
import { Alert } from "agnostic-vue";

export default {
  components: { Alert, DialogExamples }
}
</script>

<div class="mbe32"></div>

## Usage

<Alert type="warning">Documentation below for React, Angular, and Svelte are incomplete but coming soon!</Alert>

<div class="flex">
  <h3 id="react" tabindex="-1">
    <img src="/images/React-icon.svg" alt="react logo">React
  </h3>
</div>

```jsx
import "agnostic-react/dist/common.min.css";
import "agnostic-react/dist/esm/index.css";
import { Dialog } from "agnostic-react";
export const YourComponent = () => (
  // -- TBD
)
```

React: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/Dialog.tsx)

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
import { Button, Dialog, Input } from "agnostic-vue";

export default {
  name: "DialogExamples",
  components: {
    Button,
    Dialog,
    Input,
  },
  setup() {
    let dialog = null;
    const openDialog = () => {
      if (dialog) {
        dialog.show();
      }
    };

    const assignDialogRef = (instance) => {
      dialog = instance;
    };

    return {
      openDialog,
      assignDialogRef,
    };
  },
};
</script>
<template>
  <section>
    <h3>Dialog</h3>
    <p class="mbe24">
      The following opens because we've registered a dialog <code>instance</code> ref via <code>@instance="assignDialogRef"</code>. This is Vue syntax but the other framework implementations offer similar means:
    </p>
    <Button
      mode="primary"
      :is-bordered="true"
      :is-block="true"
      :is-rounded="true"
      type="button"
      @click="openDialog"
    >
      Open dialog via dialogRef
    </Button>
    <p class="mbs24 mbe16">
      The following also opens because a11y-dialog will bind to element with <code>data-a11y-dialog-show</code> attribute:
    </p>
    <button />
    <Button
      type="button"
      data-a11y-dialog-show="a11y-dialog"
      mode="primary"
      :is-bordered="true"
      :is-block="true"
      :is-rounded="true"
    >
      Open the dialog via data attribute
    </Button>
    <Dialog
      id="a11y-dialog"
      dialog-root="body"
      :is-animation-fade-in="true"
      :is-animation-slide-up="true"
      role="dialog"
      :class-names="{
        title: 'h4 mbe18 flex justify-center',
      }"
      @instance="assignDialogRef"
    >
      <template #title>
        My Dialog
      </template>
      <p class="mbs16 mbe16">
        Fill in the form below to receive our newsletter!
      </p>
      <form class="dialog-form-demo">
        <Input
          :is-rounded="true"
          label="Email (required)"
          type="email"
          name="EMAIL"
          id="email"
          placeholder="email@example.com"
          required
        />
        <div class="mbe16" />
        <Button
          type="submit"
          mode="primary"
          :is-rounded="true"
          :is-block="true"
        >
          Sign Up
        </Button>
      </form>
    </Dialog>
  </section>
</template>
```

Vue 3: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/components/Dialog.vue)

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
  template: `TBD`
})
export class YourComponent {}
```


Angular: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/dialog.component.ts)

<div class="mbe32"></div>

<div class="flex">
  <h3 id="svelte" tabindex="-1">
    <img src="/images/Svelte-icon.svg" alt="Svelte logo">Svelte
  </h3>
</div>

```html
<script>
  import 'agnostic-svelte/dist/common.min.css';
  import { Dialog } from "agnostic-svelte";
</script>
TBD
```

Svelte: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/lib/components/Dialog/Dialog.svelte)

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
