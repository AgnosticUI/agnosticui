<template>
  <ag-toast
    ref="toastRef"
    .open="open"
    .autoDismiss="autoDismiss"
    .showCloseButton="showCloseButton"
    .pauseOnHover="pauseOnHover"
    .bordered="bordered"
    .rounded="rounded"
    .borderedLeft="borderedLeft"
    :type="type"
    :position="position"
    :duration="duration"
    @toast-open="handleToastOpen"
    @toast-close="handleToastClose"
    @toast-dismiss="handleToastDismiss"
    v-bind="$attrs"
  >
    <slot />
  </ag-toast>
</template>

<script setup lang="ts">
import { ref } from "vue";
import "../core/Toast";
import type { ToastProps, ToastType } from "../core/Toast";
import type { Position } from "../../../utils/positioning";

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

const emit = defineEmits<{
  "toast-open": [event: Event];
  "toast-close": [event: Event];
  "toast-dismiss": [event: Event];
  "update:open": [value: boolean];
}>();

const toastRef = ref<HTMLElement>();

const handleToastOpen = (event: Event) => {
  emit("toast-open", event);
  emit("update:open", true);
};

const handleToastClose = (event: Event) => {
  emit("toast-close", event);
  emit("update:open", false);
};

const handleToastDismiss = (event: Event) => {
  emit("toast-dismiss", event);
  emit("update:open", false);
};
</script>
