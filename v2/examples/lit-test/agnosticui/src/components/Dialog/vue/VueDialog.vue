<template>
  <ag-dialog
    ref="dialogRef"
    .open="open"
    .noCloseOnEscape="noCloseOnEscape"
    .noCloseOnBackdrop="noCloseOnBackdrop"
    .showCloseButton="showCloseButton"
    :heading="heading"
    :description="description"
    @dialog-open="handleDialogOpen"
    @dialog-close="handleDialogClose"
    @dialog-cancel="handleDialogCancel"
    v-bind="$attrs"
  >
    <slot />
  </ag-dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";
import "../core/Dialog";

export interface VueDialogProps {
  open?: boolean;
  heading?: string;
  description?: string;
  noCloseOnEscape?: boolean;
  noCloseOnBackdrop?: boolean;
  showCloseButton?: boolean;
}

const props = withDefaults(defineProps<VueDialogProps>(), {
  open: false,
  noCloseOnEscape: false,
  noCloseOnBackdrop: false,
  showCloseButton: false,
});

const emit = defineEmits<{
  "dialog-open": [event: Event];
  "dialog-close": [event: Event];
  "dialog-cancel": [event: Event];
  "update:open": [value: boolean];
}>();

const dialogRef = ref<HTMLElement>();

const handleDialogOpen = (event: Event) => {
  emit("dialog-open", event);
  emit("update:open", true);
};

const handleDialogClose = (event: Event) => {
  emit("dialog-close", event);
  emit("update:open", false);
};

const handleDialogCancel = (event: Event) => {
  emit("dialog-cancel", event);
  emit("update:open", false);
};
</script>
