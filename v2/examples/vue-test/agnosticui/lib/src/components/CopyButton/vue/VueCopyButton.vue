<template>
  <ag-copy-button
    ref="agComponent"
    :text="text"
    :label="label"
    :success-label="successLabel"
    :error-label="errorLabel"
    :timeout="timeout"
    :size="size"
    :variant="variant"
    v-bind="$attrs"
    @copy="$emit('copy', $event)"
    @copy-error="$emit('copy-error', $event)"
  >
    <span
      v-if="$slots['icon-copy']"
      slot="icon-copy"
    >
      <slot name="icon-copy" />
    </span>
    <span
      v-if="$slots['icon-copied']"
      slot="icon-copied"
    >
      <slot name="icon-copied" />
    </span>
    <span
      v-if="$slots['icon-error']"
      slot="icon-error"
    >
      <slot name="icon-error" />
    </span>
  </ag-copy-button>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { AgCopyButton } from "../core/CopyButton";
import "../core/CopyButton"; // Registers <ag-copy-button> on wrapper load

const props = withDefaults(
  defineProps<{
    text: string;
    label?: string;
    successLabel?: string;
    errorLabel?: string;
    timeout?: number;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    variant?:
      | "primary"
      | "secondary"
      | "success"
      | "warning"
      | "danger"
      | "ghost"
      | "monochrome";
  }>(),
  {
    label: "Copy to clipboard",
    successLabel: "Copied!",
    errorLabel: "Copy failed",
    timeout: 1000,
    size: "md",
    variant: "ghost",
  }
);

defineEmits<{
  (e: "copy", event: CustomEvent<{ text: string }>): void;
  (e: "copy-error", event: CustomEvent<{ error: Error }>): void;
}>();

const agComponent = ref<InstanceType<typeof AgCopyButton> | null>(null);
</script>
