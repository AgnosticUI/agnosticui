<template>
  <ag-selection-button
    :value="value"
    :label="label"
    .checked="checked"
    .disabled="disabled"
    v-bind="$attrs"
  >
    <slot />
  </ag-selection-button>
</template>

<script setup lang="ts">
import '../core/SelectionButton';

export interface VueSelectionButtonProps {
  /** Unique value for this button (required) */
  value: string;
  /** Accessible label for this button (required) */
  label: string;
  /** Whether this button is selected */
  checked?: boolean;
  /** Whether this button is disabled */
  disabled?: boolean;
}

withDefaults(defineProps<VueSelectionButtonProps>(), {
  value: '',
  label: '',
  checked: false,
  disabled: false,
});
</script>
