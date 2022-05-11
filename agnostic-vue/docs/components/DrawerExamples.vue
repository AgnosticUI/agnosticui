<script setup lang="ts">
import { ref } from "vue";
import Button from "../../src/components/Button.vue";
import Drawer from "../../src/components/Drawer.vue";

let drawer = ref(null);
const openDrawer = () => {
  if (drawer.value) {
    drawer.value.show();
  }
};

const closeDrawer = () => {
  if (drawer.value) {
    drawer.value.hide();
  }
};

const assignDrawerRef = (instance) => {
  drawer.value = instance;
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
