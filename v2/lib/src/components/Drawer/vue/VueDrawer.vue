<template>
  <ag-drawer
    ref="drawerRef"
    .heading="heading"
    .description="description"
    .noCloseOnEscape="noCloseOnEscape"
    .noCloseOnBackdrop="noCloseOnBackdrop"
    .showCloseButton="showCloseButton"
    .position="position"
    v-bind="$attrs"
  >
    <slot />
  </ag-drawer>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from "vue";
import "../core/_drawer";

// Define props interface
export interface VueDrawerProps {
  open?: boolean;
  heading?: string;
  description?: string;
  noCloseOnEscape?: boolean;
  noCloseOnBackdrop?: boolean;
  showCloseButton?: boolean;
  position?: "start" | "end" | "top" | "bottom";
}

// Define props with defaults
const props = withDefaults(defineProps<VueDrawerProps>(), {
  open: false,
  heading: "",
  description: "",
  noCloseOnEscape: false,
  noCloseOnBackdrop: false,
  showCloseButton: false,
  position: "bottom",
});

// Define emits
const emit = defineEmits<{
  close: [event: Event];
}>();

// Template ref
const drawerRef = ref<(HTMLElement & { open?: boolean }) | undefined>();

// Ensure the web component's `open` property stays in sync with the prop
watch(
  () => props.open,
  (newValue) => {
    if (drawerRef.value) {
      drawerRef.value.open = newValue;
    }
  }
);

// Event handlers
const handleClose = (event: Event) => {
  emit("close", event);
};

// Setup event listeners
onMounted(async () => {
  // Wait for web components to be defined
  await customElements.whenDefined("ag-drawer");

  if (!drawerRef.value) return;

  // Set initial value, and the watch will handle subsequent changes
  drawerRef.value.open = props.open;

  // Listen for "close" event (not "dialog-close") because ag-drawer
  // stops propagation of "dialog-close" and dispatches "close" instead
  drawerRef.value.addEventListener("close", handleClose);
});

onUnmounted(() => {
  if (!drawerRef.value) return;

  drawerRef.value.removeEventListener("close", handleClose);
});
</script>
