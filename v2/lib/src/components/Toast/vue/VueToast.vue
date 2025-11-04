<template>
  <ag-toast
    ref="toastRef"
    v-bind="{
      ...(open ? { open: true } : {}),
      ...(type ? { type } : {}),
      ...(position ? { position } : {}),
      ...(duration !== undefined ? { duration } : {}),
      ...(autoDismiss ? { 'auto-dismiss': true } : {}),
      ...(showCloseButton ? { 'show-close-button': true } : {}),
      ...(pauseOnHover ? { 'pause-on-hover': true } : {}),
      ...(bordered ? { bordered: true } : {}),
      ...(rounded ? { rounded: true } : {}),
      ...(borderedLeft ? { 'bordered-left': true } : {}),
      ...$attrs
    }"
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

// Define emits - using kebab-case for consistency
const emit = defineEmits<{
  "toast-open": [event: Event];
  "toast-close": [event: Event];
  "toast-dismiss": [event: Event];
  "update:open": [value: boolean];
}>();

// Template ref
const toastRef = ref<HTMLElement>();

// Event handlers
const handleToastOpen = (event: Event) => {
  event.stopPropagation();
  emit("toast-open", event);
  emit("update:open", true);
};

const handleToastClose = (event: Event) => {
  event.stopPropagation();
  emit("toast-close", event);
  emit("update:open", false);
};

const handleToastDismiss = (event: Event) => {
  event.stopPropagation();
  emit("toast-dismiss", event);
  emit("update:open", false);
};

// Setup event listeners
onMounted(async () => {
  // Wait for web components to be defined
  await customElements.whenDefined("ag-toast");

  const el = toastRef.value as any;
  if (el) {
    el.addEventListener("toast-open", handleToastOpen);
    el.addEventListener("toast-close", handleToastClose);
    el.addEventListener("toast-dismiss", handleToastDismiss);
  }
});
</script>
