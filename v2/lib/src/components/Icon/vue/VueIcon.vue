<template>
  <ag-icon
    ref="agComponent"
    .size="size"
    .type="type"
    .noFill="noFill"
    v-bind="$attrs"
  >
    <slot />
  </ag-icon>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { IconProps, AgIcon } from "../core/Icon";
import "../core/Icon"; // Registers <ag-icon> on wrapper load

const props = withDefaults(defineProps<IconProps>(), {
  size: "16" as const,
  type: "" as const,
});
const agComponent = ref<InstanceType<typeof AgIcon> | null>(null);
</script>
