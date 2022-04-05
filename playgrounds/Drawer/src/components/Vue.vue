<template>
  <section class="mbe40">
    <div class="h4 mbe32 flex items-center">
      <img
        width="24"
        height="24"
        src="/assets/Vue-icon.svg"
        alt="Vue logo"
        class="mie12"
      />Vue 3 Drawer
    </div>
    <Button
      type="button"
      data-a11y-dialog-show="drawer-top-test"
      mode="primary"
      :is-bordered="true"
      :is-block="true"
      :is-rounded="true"
    >
      Open Drawer Top
    </Button>
    <Drawer
      id="drawer-top-test"
      drawer-root="body"
      placement="top"
      title="My Drawer Title"
    >
      <p>This is main drawer slot</p>
    </Drawer>
    <div class="mbs24 mbe16" />
    <Button
      mode="primary"
      :is-bordered="true"
      :is-block="true"
      :is-rounded="true"
      type="button"
      @click="openDrawer"
    >
      Open Drawer Bottom
    </Button>
    <!-- <div class="mbs24 mbe16" />
    <Button
      type="button"
      data-a11y-dialog-show="drawer-bottom-test"
      mode="primary"
      :is-bordered="true"
      :is-block="true"
      :is-rounded="true"
    >
      Open the first bottom drawer via data attribute
    </Button> -->
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
      data-a11y-dialog-show="drawer-start-test"
      mode="primary"
      :is-bordered="true"
      :is-block="true"
      :is-rounded="true"
    >
      Open Drawer Start
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
      data-a11y-dialog-show="drawer-end-test"
      mode="primary"
      :is-bordered="true"
      :is-block="true"
      :is-rounded="true"
    >
      Open Drawer End
    </Button>
    <Drawer
      id="drawer-end-test"
      drawer-root="body"
      placement="end"
      title="My Drawer Title"
    >
      <p>This is main drawer slot</p>
    </Drawer>
  </section>
</template>
<script setup>
import { useCssModule } from "vue";
// Components CSS
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
<style module>
</style>
