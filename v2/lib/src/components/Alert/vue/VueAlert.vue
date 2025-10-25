<template>
  <ag-alert
    ref="alertRef"
    :type="type"
    :bordered="bordered || undefined"
    :rounded="rounded || undefined"
    :borderedLeft="borderedLeft || undefined"
    v-bind="$attrs"
  >
    <slot />
  </ag-alert>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import "../core/Alert"; // Registers the ag-alert web component
import type { AlertProps, AlertType } from "../core/Alert";

// Define props with defaults
const props = withDefaults(defineProps<AlertProps>(), {
  type: "default" as AlertType,
  bordered: false,
  rounded: false,
  borderedLeft: false,
});

// Template ref
const alertRef = ref<HTMLElement>();

// Setup event listeners
onMounted(async () => {
  // Wait for web components to be defined
  await customElements.whenDefined("ag-alert");
});
</script>
