# Dialog

AgnosticUI's [Dialog](https://www.w3.org/TR/wai-aria-practices/#dialog_modal) component wraps Kitty Giraudel's [a11y-dialog](https://github.com/KittyGiraudel/a11y-dialog) — an accessible and inclusive dialog component that has been battle tested over several versions to date.

<div class="mbs24"></div>

## Examples

<div class="mbe24"></div>

<DialogExamples />

<script setup>
import DialogExamples from '../../components/DialogExamples.vue'
import { Alert } from "agnostic-vue";
</script>

<div class="mbe32"></div>

## Usage

<div class="flex items-center mbs40 mbe24">
  <a href="https://astro.build/" class="astro-logo-usage-wrap" target="_blank"><img class="astro-logo-usage" src="/images/astro-logo-light.svg" alt="astro logo"></a>
  <p class="mis16">React, Vue, and Svelte examples on a single playground page 🚀 💥</p>
</div>
<div class="playgrounds flex mbe32">
  <a class="btn btn-rounded" style="background-color: var(--agnostic-dark); color: var(--agnostic-light)" href="https://codesandbox.io/s/github/AgnosticUI/agnosticui/tree/master/playgrounds/Dialog?file=/README.md" target="_blank">
    <img src="/images/codesandbox.svg" alt="codesandbox logo" class="mie8"> View in CodeSandbox
  </a>
  <a class="btn btn-rounded" style="background-color: var(--agnostic-primary); color: var(--agnostic-light)" href="https://stackblitz.com/github/AgnosticUI/agnosticui/tree/master/playgrounds/Dialog?file=/README.md" target="_blank">
    <img src="/images/stackblitz.svg" alt="Stackblitz logo" class="mie4"> View in Stackblitz
  </a>
</div>

Note that by default <code>Dialog</code> will use <code>role="dialog"</code> and
behave like a _dialog_. This means that in addition to the open/close trigger button
dismissing the dialog, you can also click <code>ESC</code> or click outside the dialog
e.g. on the overlay and the dialog will be dismissed.

<div class="mbe24"></div>

If you'd like a <span class="quoted">sticky dialog</span> that only closes by toggling the trigger button and/or a close
button you've setup, you can pass <code>role="alertdialog"</code> and <code>ESC</code>
or click outside the dialog will NOT dismiss the dialog. Read more about this on 
[a11y-dialog's alertdialog docs page](https://a11y-dialog.netlify.app/advanced/alert-dialog).

<div class="flex">
  <h3 id="react" tabindex="-1">
    <img src="/images/React-icon.svg" alt="react logo">React
  </h3>
</div>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```jsx
import { useRef } from 'react';
import "agnostic-react/dist/common.min.css";
import "agnostic-react/dist/esm/index.css";
import { Dialog } from "agnostic-react";

export const YourComponent = () => {
  const dialog = useRef();
  const dialog2 = useRef();
  const dialogPropsDefault = {
    id: 'ag-dialog-test',
    title: 'Dialog Test',
    classNames: {
      // Note we don't have to pass in ALL classNames props and those
      // not included will fallback to react-a11y-dialog's defaults
      // See https://github.com/KittyGiraudel/react-a11y-dialog#api
      title: 'h3 mbe18 h4 mbe18 flex justify-center',
    }
  };
  return {
    <>
      <div className="mbs16 mbe24">
        <Button onClick={() => dialog.current.show()} type="button" mode="primary" isBordered isRounded isBlock>Open the dialog</Button>
        <Dialog
          {...dialogPropsDefault}
          dialogRef={dialogInstance => (dialog.current = dialogInstance)}
          isAnimationSlideUp={true}
        >
          <p className="mbs16 mbe16" id="dialog-example-description">
            Fill in the form below to receive our newsletter!
          </p>
          <form className="dialog-form-demo">
            <Input isRounded label="Email (required)" type="email" name="EMAIL" id="email" placeholder="email@example.com" required />
            <div className="mbe16" />
            <Button type="submit" mode="primary" isRounded isBlock>Sign Up</Button>
          </form>
        </Dialog>
      </div>
      <div className="mbs16 mbe24">
        <Button onClick={() => dialog2.current.show()} type="button" mode="primary" isBordered isRounded isBlock>Open dialog 2</Button>
        <Dialog
          {...dialogPropsDefault}
          id="dialog-2"
          title="Dialog — Custom Close Button"
          dialogRef={instance => (dialog2.current = instance)}
          classNames={{ title: 'h4 mbe18', closeButton: 'close-button-demo' }}
          isAnimationFadeIn
          isAnimationSlideUp
          closeButtonPosition="last"
          closeButtonContent={<Button type="faux" isRounded isBordered isBlock>Cancel</Button>}
        >
          <p className="mbs16 mbe16" id="dialog-example-description">
            The <code>close-button-demo</code> class is in App.css (for the Cancel button at bottom).  Otherwise, we use an AgnosticUI button of <code>type="faux</code> which generates a div that looks like a button. As <code>react-a11y-dialog</code> generates its own button
            around <code>closeButtonContent</code>, this prevents an unwanted nested buttons situation.
          </p>
          <p className="mbe16">You'll also notice that this dialog did not <span class="quoted">slide up</span> as we have not passed in true to <code>isAnimationSlideUp</code> and this animation defaults to false. The other animation is <code>isAnimationFadeIn</code> which defaults to true. You can set it <code>false</code> if you wish to remove it.
          </p>
          <form className="dialog-form-demo">
            <Input isRounded label="Email (required)" type="email" name="EMAIL" id="email" placeholder="email@example.com" required />
            <div className="mbe16" />
            <Button type="submit" mode="primary" isRounded isBlock>Sign Up</Button>
          </form>
        </Dialog>
      </div>
    </>
  }
}
```
</details>

React: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/Dialog.tsx)

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
      />Vue 3 Dialog
    </div>
    <div class="mbs16 mbe24">
      <Button
        mode="primary"
        :is-bordered="true"
        :is-block="true"
        :is-rounded="true"
        type="button"
        @click="openDialog"
      >
        Open the dialog
      </Button>
      <Dialog
        id="vue-dialog"
        dialog-root="#portal-root"
        :is-animation-fade-in="true"
        :is-animation-slide-up="true"
        role="dialog"
        :class-names="{
          title: 'h4 mbe18 flex justify-center',
        }"
        @instance="assignDialogRef"
      >
        <template #title>
          My Dialog 1
        </template>
        <p
          class="mbs16 mbe16"
          id="dialog-example-description"
        >
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
    </div>
    <div class="mbs16 mbe24">
      <Button
        mode="primary"
        :is-bordered="true"
        :is-block="true"
        :is-rounded="true"
        type="button"
        @click="openDialog2"
      >
        Open dialog 2
      </Button>
      <Dialog
        id="2vue2dialog"
        dialog-root="#portal-root"
        close-button-label="My close button label"
        close-button-position="last"
        role="alertdialog"
        :class-names="{
          container: styles['my-dialog-container'],
          overlay: styles['my-dialog-overlay'],
          document: styles['my-dialog-content'],
          title: 'h4 mbe18 flex justify-center',
          closeButton: styles['close-button-demo'],
        }"
        @instance="assignDialogRef2"
      >
        <template #title>
          Dialog — Custom Close Button
        </template>
        <p
          class="mbs16 mbe16"
          id="dialog-example-description"
        >
          For the cancel button we have used an AgnosticUI <code>Button</code> of type <code>type="faux</code>
          This generates a div that looks like a button. As <code>vue-a11y-dialog</code> generates its own
          button around <code>closeButtonContent</code>, this prevents an unwanted nested buttons situation.
        </p>
        <p class="mbe16">
          You'll also notice that this dialog did not &ldquo;slide up&rdquo; or &ldquo;fade in&rdquo;
          as we did NOT pass in either <code>:is-animation-fade-in="true"</code> or <code>:is-animation-slide-up="true"</code>.
          Both of these default to <code>false</code>.
        </p>
        <p class="mbe16">
          Lastly, you'll note that the role is <code>alertdialog</code> which results in opting out of
          ESC closing the dialog.
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
        <template #closeButtonContent>
          <Button
            type="faux"
            :is-rounded="true"
            :is-bordered="true"
            :is-block="true"
          >
            Cancel
          </Button>
        </template>
      </Dialog>
    </div>
  </section>
</template>
<script setup>
import { useCssModule } from "vue";
// Components CSS
import "agnostic-vue/dist/index.css";
import { Button, Dialog, Input } from "agnostic-vue";
const styles = useCssModule();

let dialog = null;
let dialog2 = null;

const openDialog = () => {
  console.log("openDialog");
  if (dialog) {
    dialog.show();
  }
};

const openDialog2 = () => {
  console.log("openDialog2");
  if (dialog2) {
    dialog2.show();
  }
};

const assignDialogRef = (instance) => {
  console.log("assignDialogRef called...");
  dialog = instance;
};

const assignDialogRef2 = (instance) => {
  console.log("assignDialogRef2 called...");
  dialog2 = instance;
};
</script>
<style module>
.close-button-demo {
  background-color: transparent;
  border: transparent;
  width: 100%;
  margin-block-start: 0.5rem;
}
.my-dialog-container {
  display: flex;
  z-index: 2;
  /* This is just to override the silly centered app demo css :) */
  text-align: left;
}

.my-dialog-overlay {
  background-color: rgba(43, 46, 56, 0.9);
  animation: fade-in 200ms both;
}

.my-dialog-overlay,
.my-dialog-container {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

/* Crucial—dialog w/not hide visually without this rule */
.my-dialog-container[aria-hidden="true"] {
  display: none;
}

.my-dialog-content {
  background-color: rgb(255, 255, 255);
  margin: auto;
  z-index: 2;
  position: relative;
  padding-block-start: 1.5rem;
  padding-block-end: 2rem;
  padding-inline-start: 2em;
  padding-inline-end: 2rem;
  max-width: 90%;
  width: 600px;
  border-radius: 2px;
}

.my-close-button {
  display: inline-block;
  cursor: pointer;
  padding-inline-start: 2rem;
  padding-inline-end: 2rem;
  background-color: transparent;
  border-radius: 0.1875rem;
  border: 1px solid #036dc9;
  color: #036dc9;
  line-height: 2rem;
  text-align: center;
}

.my-dialog-title {
  font-size: 2rem;
  font-weight: 300;
  letter-spacing: 0.005em;
  margin-block-start: 0.5rem;
  margin-block-end: 0.25rem;
}
</style>
```
</details>

Vue 3: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/components/Dialog.vue), [examples](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/examples/src/App.vue#L225)

<div class="mbe24"></div>

<div class="flex">
  <h3 id="svelte" tabindex="-1">
    <img src="/images/Svelte-icon.svg" alt="Svelte logo">Svelte
  </h3>
</div>

<div class="mbe32"></div>


<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

**Please consider Svelte Dialog experimental and not yet ready for production until we can add [missing tests](https://github.com/AgnosticUI/svelte-a11y-dialog/issues/1)** — tl;dr is we'd like to write tests utilizing Cypress's component testing framework but we need to await an upcoming Vite + Cypress plugins to do so.

In your main `app.html`, add a container where your dialog will be rendered into — `dialog-root` in this example:

```html
<!DOCTYPE html>
<html>
  <body>
		<div id="svelte">%svelte.body%</div>
    <div id="dialog-root"></div>
  </body>
</html>
```

<div class="mbe16"></div>

```html
<script>
  import 'agnostic-svelte/css/common.min.css';
  import { Dialog } from "agnostic-svelte";

  let dialogInstance;
  const assignDialogInstance = (ev) => {
    dialogInstance = ev.detail.instance;
  };

  const openDialog = () => {
    if (dialogInstance) {
      dialogInstance.show();
    }
  };
</script>
<div class="container flex flex-column items-center">
  <h3 class="mbe24">Dialog</h3>
  <p class="mbe24">
    The following opens because we've assigned a dialog <code>ref</code>:
  </p>
  <Button
    mode="primary"
    isBlock
    isBordered
    isRounded
    type="button"
    on:click={openDialog}
  >
    Open dialog via dialogRef
  </Button>
  <Dialog id="a11y-dialog"
    dialogRoot="#dialog-root"
    closeButtonLabel="My close button label"
    closeButtonPosition="last"
    titleId="uniqueTitleId"
    role="dialog"
    classNames={{
      title: 'h4 mbe18 flex justify-center'
    }}
    isAnimationFadeIn
    isAnimationSlideUp
    on:instance={assignDialogInstance}
  >
    <div name="title">
      My Dialog
    </div>
    <p
      class="mbs16 mbe16"
      id="dialog-example-description"
    >
      Fill in the form below to receive our newsletter!
    </p>
    <form class="dialog-form-demo">
      <Input
        isRounded
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
        isRounded
        isBlock
      >
        Sign Up
      </Button>
    </form>
  </Dialog>
</div>
```
</details>

Svelte: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/lib/components/Dialog/Dialog.svelte)

<div class="mbe24"></div>

<div class="flex">
  <h3 id="angular" tabindex="-1">
    <img src="/images/Angular-icon.svg" alt="Angular logo">Angular (Experimental)
  </h3>
</div>

**Please consider Angular Dialog experimental and not yet ready for production**

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

<div class="mbe16"></div>

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
  template: `
  <section>
    <h2>Dialog</h2>
    <ag-button mode="primary"
               [isBordered]="true"
               [isBlock]="true"
               [isRounded]="true"
               type="button"
               data-test-id="dataA11yBtn"
               data-a11y-dialog-show="a11y-dialog">
      Open the dialog via data attribute
    </ag-button>
    <div class="mbe16"></div>
    <ag-button mode="primary"
               [isBordered]="true"
               [isBlock]="true"
               [isRounded]="true"
               (click)="openDialog()"
               type="button">
      Open dialog via instance
    </ag-button>
    <ng-template #main>
      <p class="mbs16 mbe16"
         id="dialog-example-description">
        Fill in the form below to receive our newsletter!
      </p>
      <form class="dialog-form-demo">
        <ag-input [isRounded]="true"
                  label="Email (required)"
                  type="email"
                  name="EMAIL"
                  id="email"
                  placeholder="email@example.com"
                  required></ag-input>
        <div class="mbe16"></div>
        <ag-button type="submit"
                   mode="primary"
                   [isRounded]="true"
                   [isBlock]="true">Sign Up</ag-button>
      </form>
    </ng-template>
    <ng-template #title>
      <span data-test-id="dialogTitle">A11yDialog Test</span>
    </ng-template>
    <ng-template #closeButtonFirst>
      <span>Close (only appears if closeButtonPosition="first" but that's the default)</span>
    </ng-template>
    <ng-template #closeButtonLast>
      <ag-close [isFaux]="true"
                size="xlarge"></ag-close>
    </ng-template>
    <ag-dialog id="a11y-dialog"
               appRoot="#main"
               dialogRoot="#dialog-root"
               [isAnimationFadeIn]="true"
               [isAnimationSlideUp]="true"
               closeButtonPosition="last"
               (instance)="assignDialogInstance($event)"
               [closeButtonFirstTemplate]="closeButtonFirst"
               [closeButtonLastTemplate]="closeButtonLast"
               [mainTemplate]="main"
               [titleTemplate]="title">
    </ag-dialog>
  </section>
  <section>
    <h2>Dialog 2</h2>
    <ag-button mode="primary"
               [isBordered]="true"
               [isBlock]="true"
               [isRounded]="true"
               type="button"
               data-a11y-dialog-show="a11y-dialog2">
      Open dialog 2
    </ag-button>
    <ng-template #main2>
      <p class="mbs16 mbe16"
         id="dialog-example-description">
        The <code>close-button-demo</code> class is in App.css (for the Cancel button at bottom).
        Otherwise, we use an AgnosticUI button of <code>type="faux</code> which generates a div that
        looks like a button. As <code>angular-a11y-dialog</code> generates its own button
        around <code>closeButtonContent</code>, this prevents an unwanted nested buttons situation.
      </p>
      <p class="mbe16">
        You'll also notice that this dialog did not <span class="quoted">slide up</span> or <span class="quoted">fade in</span>
        as we did NOT pass in either <code>isAnimationFadeIn</code> or <code>isAnimationSlideUp</code>.
        Both of these default to <code>false</code>.
      </p>
      <form class="dialog-form-demo">
        <ag-input [isRounded]="true"
                  label="Email (required)"
                  type="email"
                  name="EMAIL"
                  id="email"
                  placeholder="email@example.com"
                  required></ag-input>
        <div class="mbe16"></div>
        <ag-button type="submit"
                   mode="primary"
                   [isRounded]="true"
                   [isBlock]="true">Sign Up</ag-button>
      </form>
    </ng-template>
    <ng-template #title2>Dialog — Custom Close Button</ng-template>
    <ng-template #closeButtonLast2>
      <ag-button type="faux"
                 [isRounded]="true"
                 [isBordered]="true"
                 [isBlock]="true">Cancel</ag-button>
    </ng-template>
    <ag-dialog id="a11y-dialog2"
               appRoot="#main"
               dialogRoot="#dialog-root"
               closeButtonPosition="last"
               [classNames]="{
                container: 'my-dialog-container',
                overlay: 'my-dialog-overlay',
                document: 'my-dialog-content',
                title: 'h4 mbe18',
                closeButton: 'close-button-demo'
               }"
               [closeButtonLastTemplate]="closeButtonLast2"
               [mainTemplate]="main2"
               [titleTemplate]="title2">
    </ag-dialog>
  </section>`
})
export class YourComponent {
  dialogInstance!: any;
  openDialog() {
    this.dialogInstance.show();
  }

  assignDialogInstance(instance: any) {
    this.dialogInstance = instance;
  };
}
```
</details>

Angular: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/dialog.component.ts), [example use](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/apps/examples/src/app/app.component.html#L838)

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
