<template>
  <AgAlert
    v-if="isOpen"
    :is-toast="true"
    v-bind="$attrs"
  >
    <slot />
  </AgAlert>
</template>
<script setup>
import AgAlert from "./Alert.vue";
</script>
<script>
export default {
  name: "AgToast",
  props: {
    isOpen: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
};
</script>

