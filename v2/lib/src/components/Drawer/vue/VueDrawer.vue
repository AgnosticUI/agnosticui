<template>
  <ag-drawer
    ref="drawerRef"
    :heading="heading"
    :description="description"
    v-bind="{
      ...(open ? { open: true } : {}),
      ...(noCloseOnEscape ? { 'no-close-on-escape': true } : {}),
      ...(noCloseOnBackdrop ? { 'no-close-on-backdrop': true } : {}),
      ...(showCloseButton ? { 'show-close-button': true } : {}),
      ...(position ? { position } : {}),
      ...$attrs
    }"
  >
    <slot />
  </ag-drawer>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from "vue";
import "../core/Drawer"; // Registers the ag-drawer web component

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
  "drawer-open": [event: Event];
  "drawer-close": [event: Event];
  "drawer-cancel": [event: Event];
  "update:open": [value: boolean];
}>();

// Template ref
const drawerRef = ref<HTMLElement>();

// Event handlers
const handleOpen = (event: Event) => {
  event.stopPropagation();
  emit("drawer-open", event);
  emit("update:open", true);
};

const handleClose = (event: Event) => {
  event.stopPropagation();
  emit("drawer-close", event);
  emit("update:open", false);
};

const handleCancel = (event: Event) => {
  event.stopPropagation();
  emit("drawer-cancel", event);
  emit("update:open", false);
};

// Setup event listeners
onMounted(async () => {
  // Wait for web components to be defined
  await customElements.whenDefined("ag-drawer");

  if (!drawerRef.value) return;

  const drawerEl = drawerRef.value as any;

  // Explicitly set boolean properties to ensure they're properly handled
  if (props.noCloseOnEscape !== undefined) {
    drawerEl.noCloseOnEscape = props.noCloseOnEscape;
  }
  if (props.noCloseOnBackdrop !== undefined) {
    drawerEl.noCloseOnBackdrop = props.noCloseOnBackdrop;
  }
  if (props.showCloseButton !== undefined) {
    drawerEl.showCloseButton = props.showCloseButton;
  }

  drawerRef.value.addEventListener("drawer-open", handleOpen);
  drawerRef.value.addEventListener("drawer-close", handleClose);
  drawerRef.value.addEventListener("drawer-cancel", handleCancel);
});

onUnmounted(() => {
  if (!drawerRef.value) return;

  drawerRef.value.removeEventListener("drawer-open", handleOpen);
  drawerRef.value.removeEventListener("drawer-close", handleClose);
  drawerRef.value.removeEventListener("drawer-cancel", handleCancel);
});

// Watch for prop changes and update web component properties
watch(
  [
    () => props.noCloseOnEscape,
    () => props.noCloseOnBackdrop,
    () => props.showCloseButton,
  ],
  () => {
    if (!drawerRef.value) return;

    const drawerEl = drawerRef.value as any;

    // Update boolean properties when props change
    if (props.noCloseOnEscape !== undefined) {
      drawerEl.noCloseOnEscape = props.noCloseOnEscape;
    }
    if (props.noCloseOnBackdrop !== undefined) {
      drawerEl.noCloseOnBackdrop = props.noCloseOnBackdrop;
    }
    if (props.showCloseButton !== undefined) {
      drawerEl.showCloseButton = props.showCloseButton;
    }
  }
);
</script>
