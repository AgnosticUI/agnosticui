<template>
  <ag-badge-fx
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
    :fx="fx"
    :fx-speed="fxSpeed"
    :fx-ease="fxEase"
    .fxDisabled="fxDisabled"
    v-bind="$attrs"
  >
    <slot />
  </ag-badge-fx>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { BadgeSize, BadgeVariant } from "../../Badge/core/Badge";
import type { BadgeFx } from "../core/BadgeFx";
import "../core/BadgeFx";

// Define props interface
interface VueBadgeFxProps {
  variant?: BadgeVariant;
  size?: BadgeSize;
  dot?: boolean;
  value?: number | null;
  max?: number;
  interactive?: boolean;
  statusLabel?: string | null;
  live?: "off" | "polite" | "assertive";
  hiddenFromAT?: boolean;
  fx?: string;
  fxSpeed?: "xs" | "sm" | "md" | "lg" | "xl";
  fxEase?:
    | "ease"
    | "ease-in"
    | "ease-out"
    | "ease-in-out"
    | "bounce"
    | "spring-sm"
    | "spring-md"
    | "spring-lg";
  fxDisabled?: boolean;
}

// Define props with defaults matching core component
const props = withDefaults(defineProps<VueBadgeFxProps>(), {
  variant: "default",
  size: "md",
  dot: false,
  value: null,
  max: 99,
  interactive: false,
  statusLabel: null,
  live: "off",
  hiddenFromAT: false,
  fxSpeed: "md",
  fxEase: "ease",
  fxDisabled: false,
});

const agComponent = ref<InstanceType<typeof BadgeFx> | null>(null);
</script>
