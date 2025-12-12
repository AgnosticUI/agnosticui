<template>
  <ag-tab
    slot="tab"
    :panel="panel"
    .disabled="disabled"
    :aria-disabled="disabled ? 'true' : null"
    v-bind="$attrs"
  >
    <slot />
  </ag-tab>
</template>

<script setup lang="ts">
// Define props interface
export interface VueTabProps {
  panel: string;
  disabled?: boolean;
}

// Define props
defineProps<VueTabProps>();
</script>
