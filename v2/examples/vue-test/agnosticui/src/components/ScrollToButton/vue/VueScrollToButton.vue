<template>
  <ag-scroll-to-button
    :label="label"
    :showLabel="showLabel"
    :icon="icon"
    :scrollThreshold="scrollThreshold"
    :target="target"
    :direction="direction"
    :smoothScroll="smoothScroll"
    :visible="visible"
    :size="size"
    :shape="shape"
  >
    <template v-if="$slots.icon">
      <span slot="icon">
        <slot name="icon" />
      </span>
    </template>
  </ag-scroll-to-button>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import "../core/ScrollToButton.js"; // Registers the ag-scroll-to-button web component

export default defineComponent({
  name: "VueScrollToButton",
  props: {
    /**
     * Accessible label for the button
     */
    label: {
      type: String,
      default: "Back to Top",
    },
    /**
     * Show the label text alongside the icon
     */
    showLabel: {
      type: Boolean,
      default: false,
    },
    /**
     * Show/hide the default icon
     */
    icon: {
      type: Boolean,
      default: true,
    },
    /**
     * Scroll threshold in pixels before showing the button
     */
    scrollThreshold: {
      type: Number,
      default: 400,
    },
    /**
     * Scroll target: "top", "bottom", or element ID/selector
     */
    target: {
      type: String as PropType<"top" | "bottom" | string>,
      default: "top",
    },
    /**
     * Arrow direction (auto-detects by default)
     */
    direction: {
      type: String as PropType<"up" | "down" | "auto">,
      default: "auto",
    },
    /**
     * Enable smooth scrolling animation
     */
    smoothScroll: {
      type: Boolean,
      default: true,
    },
    /**
     * Controls button visibility (usually controlled internally by scroll position)
     */
    visible: {
      type: Boolean,
      default: false,
    },
    /**
     * Button size
     */
    size: {
      type: String as PropType<"x-sm" | "sm" | "md" | "lg" | "xl">,
      default: "md",
    },
    /**
     * Button shape
     */
    shape: {
      type: String as PropType<
        "capsule" | "rounded" | "circle" | "square" | "rounded-square" | ""
      >,
      default: "",
    },
  },
});
</script>
