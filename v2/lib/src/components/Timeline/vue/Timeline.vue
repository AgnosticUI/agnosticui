<script setup lang="ts">
// v2/lib/src/components/Timeline/vue/Timeline.vue
import { ref } from "vue";
import "../core/Timeline.js"; // Import to register web components

interface Props {
  orientation?: "horizontal" | "vertical";
  variant?: "primary" | "success" | "warning" | "danger" | "monochrome" | "";
  compact?: boolean;
  responsive?: boolean;
  ariaLabel?: string;
}

const props = withDefaults(defineProps<Props>(), {
  orientation: "horizontal",
  variant: "",
  compact: false,
  responsive: false,
  ariaLabel: undefined,
});

const timelineRef = ref<HTMLElement>();
</script>

<template>
  <ag-timeline
    ref="timelineRef"
    :orientation="orientation"
    :variant="variant"
    :compact="compact"
    :responsive="responsive"
    :aria-label="ariaLabel"
  >
    <slot />
  </ag-timeline>
</template>
