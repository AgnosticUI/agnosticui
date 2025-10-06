<template>
  <ag-drawer
    ref="drawerRef"
    :open="open || undefined"
    :heading="heading"
    :description="description"
    :no-close-on-escape="noCloseOnEscape"
    :no-close-on-backdrop="noCloseOnBackdrop"
    :show-close-button="showCloseButton"
    :position="position"
    v-bind="$attrs"
  >
    <slot />
  </ag-drawer>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
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
const drawerRef = ref<HTMLElement>();

// Event handlers
const handleDialogClose = (event: Event) => {
  emit("close", event);
};

// Setup event listeners and ensure position attribute is set
onMounted(async () => {
  // Wait for web components to be defined
  await customElements.whenDefined("ag-drawer");

  if (!drawerRef.value) return;

  // Explicitly set position attribute
  if (props.position) {
    drawerRef.value.setAttribute("position", props.position);
  }

  drawerRef.value.addEventListener("dialog-close", handleDialogClose);
});

onUnmounted(() => {
  if (!drawerRef.value) return;

  drawerRef.value.removeEventListener("dialog-close", handleDialogClose);
});
</script>
