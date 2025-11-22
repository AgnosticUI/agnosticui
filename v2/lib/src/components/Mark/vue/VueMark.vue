<template>
  <ag-mark
    :variant="variant"
    :search="search"
    .caseSensitive="caseSensitive"
    .matchAll="matchAll"
  >
    <slot />
  </ag-mark>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import type { MarkVariant } from "../core/_Mark";
import "../core/Mark"; // Registers the ag-mark web component

export default defineComponent({
  name: "VueMark",
  props: {
    variant: {
      type: String as PropType<MarkVariant>,
      default: "warning",
    },
    search: {
      type: String,
      default: undefined,
    },
    caseSensitive: {
      type: Boolean,
      default: false,
    },
    matchAll: {
      type: Boolean,
      default: false,
    },
  },
});
</script>
