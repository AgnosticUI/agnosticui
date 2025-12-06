<template>
  <ag-progress-ring
    .value="value"
    .size="size"
    .variant="variant"
    .label="label"
    .noAnimation="noAnimation"
  >
    <slot>{{ value }}%</slot>
  </ag-progress-ring>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import "../core/ProgressRing.js"; // Registers the ag-progress-ring web component

export default defineComponent({
  name: "VueProgressRing",
  props: {
    /**
     * Progress value (0–100)
     */
    value: {
      type: Number,
      default: 0,
    },
    /**
     * Size preset
     */
    size: {
      type: String as PropType<"small" | "medium" | "large">,
      default: "medium",
    },
    /**
     * Color variant
     */
    variant: {
      type: String as PropType<
        "primary" | "success" | "warning" | "danger" | "info"
      >,
      default: "primary",
    },
    /**
     * Accessible label
     */
    label: {
      type: String,
      default: "Progress",
    },
    /**
     * Disable animation (also respects prefers-reduced-motion)
     */
    noAnimation: {
      type: Boolean,
      default: false,
    },
  },
});
</script>
