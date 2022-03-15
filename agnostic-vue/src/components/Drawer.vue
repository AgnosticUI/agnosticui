<template>
  <Dialog
    :id="id"
    :dialog-root="drawerRoot"
    :drawer-placement="placement"
    :title-id="`${title.replaceAll(' ', '-').toLowerCase()}-id`"
    @instance="assignDrawerRef"
    close-button-label="Close drawer"
    :is-animation-fade-in="isAnimationFadeIn"
  >
    <template #title>
      {{ title }}
    </template>
    <slot />
  </Dialog>
</template>
<script setup>
import Dialog from "./Dialog.vue";
const emit = defineEmits(["instance"]);

const assignDrawerRef = (instance) => {
  emit("instance", instance);
};
defineProps({
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
  title: {
    type: String,
    default: "",
  },
  isAnimationFadeIn: {
    type: Boolean,
    required: false,
    default: true,
  },
});
</script>
<script>
export default {
  name: "AgDrawer",
};
</script>
