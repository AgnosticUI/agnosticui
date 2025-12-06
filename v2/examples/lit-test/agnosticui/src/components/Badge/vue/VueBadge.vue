<template>
  <ag-badge
    ref="agComponent"
    :variant="variant"
    :size="size"
    .dot="dot"
    .interactive="interactive"
    .hiddenFromAT="hiddenFromAT"
    :value="value"
    :max="max"
    :status-label="statusLabel"
    :live="live"
    v-bind="$attrs"
  >
    <slot />
  </ag-badge>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { BadgeSize, BadgeVariant } from "../core/Badge";
import type { AgBadge } from "../core/Badge";
import "../core/Badge";

// Define props interface
interface VueBadgeProps {
  variant?: BadgeVariant;
  size?: BadgeSize;
  dot?: boolean;
  value?: number | null;
  max?: number;
  interactive?: boolean;
  statusLabel?: string | null;
  live?: "off" | "polite" | "assertive";
  hiddenFromAT?: boolean;
}

// Define props with defaults matching core component
const props = withDefaults(defineProps<VueBadgeProps>(), {
  variant: "default",
  size: "md",
  dot: false,
  value: null,
  max: 99,
  interactive: false,
  statusLabel: null,
  live: "off",
  hiddenFromAT: false,
});

const agComponent = ref<InstanceType<typeof AgBadge> | null>(null);
</script>
