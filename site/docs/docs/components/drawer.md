# Drawer

TBD re drawer overview

<div class="mbs24"></div>

## Examples

<div class="mbe24"></div>

<DrawerExamples />

<script setup>
import DrawerExamples from '../../components/DrawerExamples.vue'
import { Alert } from "agnostic-vue";
</script>

<div class="mbe32"></div>

## Usage

<div class="flex items-center mbs40 mbe24">
  <a href="https://astro.build/" class="astro-logo-usage-wrap" target="_blank"><img class="astro-logo-usage" src="/images/astro-logo-light.svg" alt="astro logo"></a>
  <p class="mis16">React, Vue, and Svelte examples on a single playground page 🚀 💥</p>
</div>
<div class="playgrounds flex mbe32">
  <a class="btn btn-rounded" style="background-color: var(--agnostic-dark); color: var(--agnostic-light)" href="https://codesandbox.io/s/github/AgnosticUI/agnosticui/tree/master/playgrounds/Drawer?file=/README.md" target="_blank">
    <img src="/images/codesandbox.svg" alt="codesandbox logo" class="mie8"> View in CodeSandbox
  </a>
  <a class="btn btn-rounded" style="background-color: var(--agnostic-primary); color: var(--agnostic-light)" href="https://stackblitz.com/github/AgnosticUI/agnosticui/tree/master/playgrounds/Drawer?file=/README.md" target="_blank">
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
import { useRef } from 'react';
import "agnostic-react/dist/common.min.css";
import "agnostic-react/dist/esm/index.css";
import { Button, Drawer } from "agnostic-react";

const props = ['drawer1', 'drawer2', 'drawer3', 'drawer4'].map((item) => {
  return {
    id: `test-${item}`,
    title: `Test ${item}`,
    classNames: {
      // Note we don't have to pass in ALL classNames props and those
      // not included will fallback to react-a11y-dialog's defaults
      // See https://github.com/KittyGiraudel/react-a11y-dialog#api
      title: 'h3 mbe18 h4 mbe18 flex justify-center',
    }
  }
})
const drawer1PropsDefault = props[1];
const drawer2PropsDefault = props[2];
const drawer3PropsDefault = props[3];
const drawer4PropsDefault = props[4];

export const YourComponent = () => {
  // Handles to low-level drawer instances. Allows calling `show` & `hide`
  const drawer1Ref = useRef();
  const drawer2Ref = useRef();
  const drawer3Ref = useRef();
  const drawer4Ref = useRef();

  return {
    <>
      <Button onClick={() => drawer1Ref.current.show()} type="button" mode="primary" isBordered isRounded isBlock>Open Drawer Top</Button>
      <Drawer
        {...drawer1PropsDefault}
        drawerRef={drawerInstance => (drawer1Ref.current = drawerInstance)}
        placement="top"
      >
        <p className="mbs16 mbe16">
          default slot
        </p>
      </Drawer>
      <div className="mbs16 mbe24" />
      <Button onClick={() => drawer2Ref.current.show()} type="button" mode="primary" isBordered isRounded isBlock>Open Drawer Bottom</Button>
      <Drawer
        {...drawer2PropsDefault}
        drawerRef={drawerInstance => (drawer2Ref.current = drawerInstance)}
        placement="bottom"
      >
          <div className="flex-fill">
          <p>This is main drawer slot. To test positioning, update the placement property to one of: start | end | top | bottom.</p>
          <button
            style={{position: 'absolute', bottom: '1rem', left: '1rem', right: '1rem'}}
            onClick={() => drawer2Ref.current.hide()}
          >
            Close from within slot using instance
          </button>
        </div>
      </Drawer>
      <div className="mbs16 mbe24" />
      <Button onClick={() => drawer3Ref.current.show()} type="button" mode="primary" isBordered isRounded isBlock>Open Drawer Start</Button>
      <Drawer
        {...drawer3PropsDefault}
        drawerRef={drawerInstance => (drawer3Ref.current = drawerInstance)}
        placement="start"
      >
        <p className="mbs16 mbe16">
          default slot
        </p>
      </Drawer>
      <div className="mbs16 mbe24" />
      <Button onClick={() => drawer4Ref.current.show()} type="button" mode="primary" isBordered isRounded isBlock>Open Drawer End</Button>
      <Drawer
        {...drawer4PropsDefault}
        drawerRef={drawerInstance => (drawer4Ref.current = drawerInstance)}
        placement="end"
      >
        <p className="mbs16 mbe16">
          default slot
        </p>
      </Drawer>
    </>
  }
}
```
</details>

React: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/Drawer.tsx), [example](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/examples/src/App.js#L1318)

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
import { useCssModule } from "vue";
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import { Button, Drawer } from "agnostic-vue";
const styles = useCssModule();
let drawer = null;
const openDrawer = () => {
  if (drawer) {
    drawer.show();
  }
};

const closeDrawer = () => {
  if (drawer) {
    drawer.hide();
  }
};

const assignDrawerRef = (instance) => {
  drawer = instance;
};
</script>
<template>
  <section>
    <h2>Drawer</h2>
    <Button
      mode="primary"
      :is-bordered="true"
      :is-block="true"
      :is-rounded="true"
      type="button"
      @click="openDrawer"
    >
      Open first bottom drawer via drawerRef
    </Button>
    <div class="mbs24 mbe16" />
    <Button
      type="button"
      data-a11y-dialog-show="drawer-bottom-test"
      mode="primary"
      :is-bordered="true"
      :is-block="true"
      :is-rounded="true"
    >
      Open the first bottom drawer via data attribute
    </Button>
    <Drawer
      id="drawer-bottom-test"
      drawer-root="body"
      placement="bottom"
      title="My Drawer Title"
      @instance="assignDrawerRef"
    >
      <div class="flex-fill">
        <p>This is main drawer slot. To test positioning, update the placement property to one of: start | end | top | bottom.</p>
        <Button
          mode="primary"
          isBordered
          :style="{ position: 'absolute', bottom: '1rem', left: '1rem', right: '1rem'}"
          @click="closeDrawer()"
        >
          Close from within slot using instance
        </button>
      </div>
    </Drawer>
    <div class="mbs24 mbe16" />
    <Button
      type="button"
      data-a11y-dialog-show="drawer-end-test"
      mode="primary"
      :is-bordered="true"
      :is-block="true"
      :is-rounded="true"
    >
      Open second right drawer via data attribute
    </Button>
    <Drawer
      id="drawer-end-test"
      drawer-root="body"
      placement="end"
      title="My Drawer Title"
    >
      <p>This is main drawer slot</p>
    </Drawer>
    <div class="mbs24 mbe16" />
    <Button
      type="button"
      data-a11y-dialog-show="drawer-start-test"
      mode="primary"
      :is-bordered="true"
      :is-block="true"
      :is-rounded="true"
    >
      Open left drawer via data attribute
    </Button>
    <Drawer
      id="drawer-start-test"
      drawer-root="body"
      placement="start"
      title="My Drawer Title"
    >
      <p>This is main drawer slot</p>
    </Drawer>
    <div class="mbs24 mbe16" />
    <Button
      type="button"
      data-a11y-dialog-show="drawer-top-test"
      mode="primary"
      :is-bordered="true"
      :is-block="true"
      :is-rounded="true"
    >
      Open top drawer via data attribute
    </Button>
    <Drawer
      id="drawer-top-test"
      drawer-root="body"
      placement="top"
      title="My Drawer Title"
    >
      <p>This is main drawer slot</p>
    </Drawer>
  </section>
</template>
```
</details>

Vue 3: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/components/Drawer.vue), [examples](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/examples/src/App.vue#L406)

<div class="mbe24"></div>

<div class="flex">
  <h3 id="svelte" tabindex="-1">
    <img src="/images/Svelte-icon.svg" alt="Svelte logo">Svelte
  </h3>
</div>


<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

**Please consider Svelte drawer experimental and not yet ready for production until we can add [missing tests](https://github.com/AgnosticUI/svelte-a11y-drawer/issues/1)** — tl;dr is we'd like to write tests utilizing Cypress's component testing framework but we need to await an upcoming Vite + Cypress plugins to do so.

In your main `app.html`, add a container where your drawer will be rendered into — `drawer-root` in this example:

```html
<!DOCTYPE html>
<html>
  <body>
		<div id="svelte">%svelte.body%</div>
    <div id="drawer-root"></div>
  </body>
</html>
```

<div class="mbe16"></div>

```html
<script>
  import 'agnostic-svelte/css/common.min.css';
  import { Drawer } from "agnostic-svelte";

  // DRAWER
  let drawer = null;
  const openDrawer = () => {
    if (drawer) {
      drawer.show();
    }
  };

  const closeDrawer = () => {
    if (drawer) {
      drawer.hide();
    }
  };

  const assignDrawerRef = (ev) => {
    drawer = ev.detail.instance;
  };
</script>
<section>
  <Button
    mode="primary"
    isBordered
    isBlock
    isRounded
    type="button"
    on:click={openDrawer}
  >
    Open first drawer via drawerRef
  </Button>
  <div class="mbs24 mbe16" />
  <Button
    type="button"
    data-a11y-dialog-show="drawer-bottom-test"
    mode="primary"
    isBordered
    isBlock
    isRounded
  >
    Open the first bottom drawer via data attribute
  </Button>
  <Drawer
    id="drawer-bottom-test"
    drawerRoot="#portal-root"
    placement="bottom"
    title="My Drawer Title"
    on:instance={assignDrawerRef}
  >
    <div class="flex-fill">
      <p>This is main drawer slot. To test positioning, update the placement property to one of: start | end | top | bottom.</p>
      <button
        class="custom-close-button"
        on:click={closeDrawer}
      >
        Close from within slot using instance
      </button>
    </div>
  </Drawer>
  <div class="mbs24 mbe16" />
  <Button
    type="button"
    data-a11y-dialog-show="drawer-top-test"
    mode="primary"
    isBordered
    isBlock
    isRounded
  >
    Open the top drawer via data attribute
  </Button>
  <Drawer
    id="drawer-top-test"
    drawerRoot="#portal-root"
    placement="top"
    title="My Drawer Title"
  >
    <div class="flex-fill">
      <p>This is main drawer slot. To test positioning, update the placement property to one of: start | end | top | bottom.</p>
    </div>
  </Drawer>
  <div class="mbs24 mbe16" />
  <Button
    type="button"
    data-a11y-dialog-show="drawer-start-test"
    mode="primary"
    isBordered
    isBlock
    isRounded
  >
    Open the start drawer via data attribute
  </Button>
  <Drawer
    id="drawer-start-test"
    drawerRoot="#portal-root"
    placement="start"
    title="My Drawer Title"
  >
    <div class="flex-fill">
      <p>This is main drawer slot. To test positioning, update the placement property to one of: start | end | top | bottom.</p>
    </div>
  </Drawer>
  <div class="mbs24 mbe16" />
  <Button
    type="button"
    data-a11y-dialog-show="drawer-end-test"
    mode="primary"
    isBordered
    isBlock
    isRounded
  >
    Open the end drawer via data attribute
  </Button>
  <Drawer
    id="drawer-end-test"
    drawerRoot="#portal-root"
    placement="end"
    title="My Drawer Title"
  >
    <div class="flex-fill" style="display: grid; grid-template-columns: 1fr; grid-template-rows: 100px 1fr; height: 50vh;">
      <div style="background-color: var(--agnostic-primary)"></div>
      <div style="background-color: var(--agnostic-action)"></div>
      <p class="mbs40">Just testing some random use of CSS grid inside the drawer. No biggie.</p>
    </div>
  </Drawer>
</section>
```
</details>

Svelte: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/lib/components/Drawer/Drawer.svelte)


<div class="flex">
  <h3 id="angular" tabindex="-1">
    <img src="/images/Angular-icon.svg" alt="Angular logo">Angular (Experimental)
  </h3>
</div>

**Angular drawer is not currently available**

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
