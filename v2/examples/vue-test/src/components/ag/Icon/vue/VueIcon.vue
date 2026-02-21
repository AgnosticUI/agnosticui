<template>
  <ag-icon
    .size="size"
    .type="type"
    .noFill="noFill"
    v-bind="$attrs"
  >
    <slot />
  </ag-icon>
</template>

<script setup lang="ts">
import type { IconProps } from "../core/Icon";
import "../core/Icon"; // Registers <ag-icon> on wrapper load

withDefaults(defineProps<IconProps>(), {
  size: "16" as const,
  type: "" as const,
});
</script>
