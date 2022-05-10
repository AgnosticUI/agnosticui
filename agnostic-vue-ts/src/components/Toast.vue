<template>
  <AgAlert
    v-if="isOpen"
    :is-toast="true"
    v-bind="$attrs"
  >
    <slot />
  </AgAlert>
</template>
<script setup lang="ts">
import AgAlert from "./Alert.vue";
export interface ToastProps {
  isOpen: boolean;
}
const props = withDefaults(defineProps<ToastProps>(), {
  isOpen: true,
});
</script>

