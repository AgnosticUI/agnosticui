<template>
  <ag-tab-panel
    slot="panel"
    :id="id"
    v-bind="$attrs"
  >
    <slot />
  </ag-tab-panel>
</template>

<script setup lang="ts">
// Define props interface
export interface VueTabPanelProps {
  id: string;
}

// Define props
defineProps<VueTabPanelProps>();
</script>