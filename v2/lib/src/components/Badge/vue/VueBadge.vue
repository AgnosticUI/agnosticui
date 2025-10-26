<template>
  <ag-badge
    ref="agComponent"
    :variant="variant"
    :size="size"
    :dot="dot"
    v-bind="$attrs"
  >
    <slot />
  </ag-badge>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { BadgeSize, BadgeVariant } from "../core/Badge";
import type { AgBadge } from "../core/Badge"; // For stricter ref typing
import "../core/Badge"; // Registers <ag-badge> on wrapper load

const props = defineProps<{
  variant?: BadgeVariant;
  size?: BadgeSize;
  dot?: boolean;
}>();

const agComponent = ref<InstanceType<typeof AgBadge> | null>(null);
</script>
