<template>
  <ag-button-fx
    ref="agComponent"
    v-bind="$attrs"
  >
    <slot />
  </ag-button-fx>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { ButtonFxProps } from "../core/_ButtonFx";
import "../core/_ButtonFx";

// Define props interface - if ButtonFx has specific props, add them here
// For now, keeping it simple since the original was a TODO
export interface VueButtonFxProps extends ButtonFxProps {}

// If there are specific props, define them here with defaults
// const props = defineProps<VueButtonFxProps>();

// Template ref
const agComponent = ref<(HTMLElement & ButtonFxProps) | null>(null);

// If there are events to emit, define them here
// const emit = defineEmits<{
//   'some-event': [detail: SomeEventDetail];
// }>();
</script>
