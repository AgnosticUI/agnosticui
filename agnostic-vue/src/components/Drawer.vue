<template>
  <button
    type="button"
    data-a11y-dialog-show="drawerid123"
  >
    Open the drawer via data attribute (this has to go away)
  </button>
  <Dialog
    :id="id"
    :drawer-placement="placement"
    :dialog-root="drawerRoot"
    @instance="assignDrawerRef"
    v-bind="$attrs"
  >
    <template #title>
      My Drawer
    </template>
    <p class="mbs16 mbe16">
      Default slot content...
    </p>
    <template #closeButtonContent>
      <button>Dismiss</button>
    </template>
  </Dialog>
</template>
<script setup>
let drawer = null;
// const openDrawer = () => {
//   if (drawer) {
//     drawer.show();
//   }
// };

const assignDrawerRef = (instance) => {
  drawer = instance;
  console.log("drawer instance: ", drawer);
};

import Dialog from "./Dialog.vue";
</script>
<script>
export default {
  name: "AgDrawer",
  props: {
    id: {
      type: String,
      required: true,
    },
    drawerRoot: {
      type: String,
      required: true,
    },
    placement: {
      type: String,
      required: true,
    },
    titleId: {
      type: String,
      default: "",
    },
    // closeButtonLabel: {
    //   type: String,
    //   default: "Close this dialog window",
    // },
    // closeButtonPosition: {
    //   type: String,
    //   required: false,
    //   default: "first",
    //   validator(value) {
    //     return ["first", "last", "none"].includes(value);
    //   },
    // },
    isAnimationFadeIn: {
      type: Boolean,
      required: false,
      default: false,
    },
    isAnimationSlideUp: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>
