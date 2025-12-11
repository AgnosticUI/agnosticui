<template>
  <ag-drawer
    ref="drawerRef"
    .open="open"
    .noCloseOnEscape="noCloseOnEscape"
    .noCloseOnBackdrop="noCloseOnBackdrop"
    .showCloseButton="showCloseButton"
    .position="position"
    :heading="heading"
    :description="description"
    @drawer-open="handleOpen"
    @drawer-close="handleClose"
    @drawer-cancel="handleCancel"
    v-bind="$attrs"
  >
    <slot />
  </ag-drawer>
</template>

<script setup lang="ts">
import { ref } from "vue";
import "../core/Drawer";

export interface VueDrawerProps {
  open?: boolean;
  heading?: string;
  description?: string;
  noCloseOnEscape?: boolean;
  noCloseOnBackdrop?: boolean;
  showCloseButton?: boolean;
  position?: "start" | "end" | "top" | "bottom";
}

const props = withDefaults(defineProps<VueDrawerProps>(), {
  open: false,
  heading: "",
  description: "",
  noCloseOnEscape: false,
  noCloseOnBackdrop: false,
  showCloseButton: false,
  position: "bottom",
});

const emit = defineEmits<{
  "drawer-open": [event: Event];
  "drawer-close": [event: Event];
  "drawer-cancel": [event: Event];
  "update:open": [value: boolean];
}>();

const drawerRef = ref<HTMLElement>();

const handleOpen = (event: Event) => {
  emit("drawer-open", event);
  emit("update:open", true);
};

const handleClose = (event: Event) => {
  emit("drawer-close", event);
  emit("update:open", false);
};

const handleCancel = (event: Event) => {
  emit("drawer-cancel", event);
  emit("update:open", false);
};
</script>
