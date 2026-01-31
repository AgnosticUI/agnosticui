<template>
  <ag-selection-card
    :value="value"
    :label="label"
    .checked="checked"
    .disabled="disabled"
    v-bind="$attrs"
  >
    <slot />
  </ag-selection-card>
</template>

<script setup lang="ts">
import '../core/SelectionCard';

export interface VueSelectionCardProps {
  /** Unique value for this card (required) */
  value: string;
  /** Accessible label for this card (required) */
  label: string;
  /** Whether this card is selected */
  checked?: boolean;
  /** Whether this card is disabled */
  disabled?: boolean;
}

withDefaults(defineProps<VueSelectionCardProps>(), {
  value: '',
  label: '',
  checked: false,
  disabled: false,
});
</script>
