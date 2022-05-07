# Drawer

A Drawer is a <span class="quoted">side-sheet</span> panel that is overlaid on top of the page and provides information and/or actions without having to leave the current page. It's ideal for things like mobile navigation.

<div class="mbs24" />

## Examples

<div class="mbe24" />

<DrawerExamples />

<script setup>
import DrawerExamples from '../../components/DrawerExamples.vue';
import Alert from '../../../src/components/Alert.vue';
</script>

<div class="mbe32"></div>

## Usage

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
      title="My Drawer Title 1"
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
      title="My Drawer Title 2"
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
      title="My Drawer Title 3"
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
      title="My Drawer Title 4"
    >
      <p>This is main drawer slot</p>
    </Drawer>
  </section>
</template>
```
</details>

Vue 3: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/components/Drawer.vue), [examples](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/examples/src/App.vue#L406)
