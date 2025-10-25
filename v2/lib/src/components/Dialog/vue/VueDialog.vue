<template>
  <ag-dialog
    ref="dialogRef"
    :heading="heading"
    :description="description"
    v-bind="{
      ...(open ? { open: true } : {}),
      ...(noCloseOnEscape ? { 'no-close-on-escape': true } : {}),
      ...(noCloseOnBackdrop ? { 'no-close-on-backdrop': true } : {}),
      ...(showCloseButton ? { 'show-close-button': true } : {}),
      ...$attrs
    }"
  >
    <slot />
  </ag-dialog>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from "vue";
import "../core/Dialog"; // Registers the ag-dialog web component

// Define props interface
export interface VueDialogProps {
  open?: boolean;
  heading?: string;
  description?: string;
  noCloseOnEscape?: boolean;
  noCloseOnBackdrop?: boolean;
  showCloseButton?: boolean;
}

// Define props with defaults
const props = withDefaults(defineProps<VueDialogProps>(), {
  open: false,
  noCloseOnEscape: false,
  noCloseOnBackdrop: false,
  showCloseButton: false,
});

// Define emits
const emit = defineEmits<{
  "dialog-open": [];
  "dialog-close": [];
  "dialog-cancel": [];
  "update:open": [value: boolean];
}>();

// Template ref
const dialogRef = ref<HTMLElement>();

// Event handlers
const handleDialogOpen = (event: Event) => {
  event.stopPropagation();
  emit("dialog-open");
};

const handleDialogClose = (event: Event) => {
  event.stopPropagation();
  emit("dialog-close");
  emit("update:open", false);
};

const handleDialogCancel = (event: Event) => {
  event.stopPropagation();
  emit("dialog-cancel");
};

// Setup event listeners
onMounted(async () => {
  // Wait for web components to be defined
  await customElements.whenDefined("ag-dialog");

  if (!dialogRef.value) return;

  const dialogEl = dialogRef.value as any;

  // Explicitly set boolean properties to ensure they're properly handled
  if (props.noCloseOnEscape !== undefined) {
    dialogEl.noCloseOnEscape = props.noCloseOnEscape;
  }
  if (props.noCloseOnBackdrop !== undefined) {
    dialogEl.noCloseOnBackdrop = props.noCloseOnBackdrop;
  }
  if (props.showCloseButton !== undefined) {
    dialogEl.showCloseButton = props.showCloseButton;
  }

  dialogRef.value.addEventListener("dialog-open", handleDialogOpen);
  dialogRef.value.addEventListener("dialog-close", handleDialogClose);
  dialogRef.value.addEventListener("dialog-cancel", handleDialogCancel);
});

onUnmounted(() => {
  if (!dialogRef.value) return;

  dialogRef.value.removeEventListener("dialog-open", handleDialogOpen);
  dialogRef.value.removeEventListener("dialog-close", handleDialogClose);
  dialogRef.value.removeEventListener("dialog-cancel", handleDialogCancel);
});

// Watch for prop changes and update web component properties
watch(
  [
    () => props.noCloseOnEscape,
    () => props.noCloseOnBackdrop,
    () => props.showCloseButton,
  ],
  () => {
    if (!dialogRef.value) return;

    const dialogEl = dialogRef.value as any;

    // Update boolean properties when props change
    if (props.noCloseOnEscape !== undefined) {
      dialogEl.noCloseOnEscape = props.noCloseOnEscape;
    }
    if (props.noCloseOnBackdrop !== undefined) {
      dialogEl.noCloseOnBackdrop = props.noCloseOnBackdrop;
    }
    if (props.showCloseButton !== undefined) {
      dialogEl.showCloseButton = props.showCloseButton;
    }
  }
);
</script>
