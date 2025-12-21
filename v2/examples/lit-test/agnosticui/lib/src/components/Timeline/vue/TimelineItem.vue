<script setup lang="ts">
// v2/lib/src/components/Timeline/vue/TimelineItem.vue
import "../core/Timeline.js"; // Import to register web components

interface Props {
  markerAriaLabel?: string;
}

const props = withDefaults(defineProps<Props>(), {
  markerAriaLabel: undefined,
});
</script>

<template>
  <ag-timeline-item :marker-aria-label="markerAriaLabel">
    <span
      v-if="$slots['ag-start']"
      slot="ag-start"
    >
      <slot name="ag-start"></slot>
    </span>
    <span
      v-if="$slots['ag-marker']"
      slot="ag-marker"
    >
      <slot name="ag-marker"></slot>
    </span>
    <span
      v-if="$slots['ag-end']"
      slot="ag-end"
    >
      <slot name="ag-end"></slot>
    </span>
  </ag-timeline-item>
</template>
