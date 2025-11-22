<template>
  <ag-back-to-top
    .visible="visible"
    :threshold="threshold"
  >
    <slot />
  </ag-back-to-top>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "../core/BackToTop"; // Registers the ag-back-to-top web component

export default defineComponent({
  name: "VueBackToTop",
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
