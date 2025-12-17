<template>
  <ag-alert
    ref="alertRef"
    :type="type"
    :bordered="bordered || undefined"
    :rounded="rounded || undefined"
    :borderedLeft="borderedLeft || undefined"
    :dismissible="dismissible || undefined"
    @alert-dismiss="handleDismiss"
    v-bind="$attrs"
  >
    <slot />
  </ag-alert>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type {
  AlertProps,
  AlertType,
  AlertDismissEventDetail,
} from "../core/Alert";
import "../core/Alert"; // Registers the ag-alert web component

// Omit callback props (Vue uses emits instead)
export interface VueAlertProps extends Omit<AlertProps, "onAlertDismiss"> {}

// Define props with defaults
withDefaults(defineProps<VueAlertProps>(), {
  type: "default" as AlertType,
  bordered: false,
  rounded: false,
  borderedLeft: false,
  dismissible: false,
});

// Define emits for all events
const emit = defineEmits<{
  "alert-dismiss": [detail: AlertDismissEventDetail];
}>();

// Template ref
const alertRef = ref<HTMLElement>();

// Bridge handler for custom event
const handleDismiss = (event: Event) => {
  const dismissEvent = event as CustomEvent<AlertDismissEventDetail>;
  emit("alert-dismiss", dismissEvent.detail);
};
</script>
