<template>
  <ag-toast
    ref="toastRef"
    :open="open || undefined"
    :type="type"
    :position="position"
    :duration="duration"
    :autoDismiss="autoDismiss || undefined"
    :showCloseButton="showCloseButton || undefined"
    :pauseOnHover="pauseOnHover || undefined"
    :bordered="bordered || undefined"
    :rounded="rounded || undefined"
    :borderedLeft="borderedLeft || undefined"
    v-bind="$attrs"
    @toast-open="$emit('toastOpen', $event)"
    @toast-close="$emit('toastClose', $event)"
    @toast-dismiss="$emit('toastDismiss', $event)"
  >
    <slot />
  </ag-toast>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import "../core/Toast"; // Registers the ag-toast web component
import type { ToastProps, ToastType } from "../core/Toast";
import type { Position } from "../../../utils/positioning";

// Define props with defaults
const props = withDefaults(defineProps<ToastProps>(), {
  open: false,
  type: "default" as ToastType,
  position: "top-end" as Position,
  duration: 5000,
  autoDismiss: true,
  showCloseButton: true,
  pauseOnHover: true,
  bordered: false,
  rounded: true,
  borderedLeft: false,
});

// Define emits
defineEmits<{
  toastOpen: [event: CustomEvent<void>];
  toastClose: [event: CustomEvent<void>];
  toastDismiss: [event: CustomEvent<void>];
}>();

// Template ref
const toastRef = ref<HTMLElement>();

// Setup event listeners
onMounted(async () => {
  // Wait for web components to be defined
  await customElements.whenDefined("ag-toast");
});
</script>
