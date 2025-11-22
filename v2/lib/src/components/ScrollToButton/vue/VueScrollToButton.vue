<template>
  <ag-scroll-to-button
    .visible="visible"
    :threshold="threshold"
  >
    <slot />
  </ag-scroll-to-button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "../core/ScrollToButton"; // Registers the ag-scroll-to-button web component

export default defineComponent({
  name: "VueScrollToButton",
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    threshold: {
      type: Number,
      default: 400,
    },
  },
});
</script>
