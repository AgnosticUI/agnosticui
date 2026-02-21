<template>
  <ag-selection-card-group
    :type="type"
    :name="name"
    :legend="legend"
    :legend-hidden="legendHidden"
    :value="value"
    :values="values"
    .disabled="disabled"
    @selection-change="handleSelectionChange"
    v-bind="$attrs"
  >
    <slot />
  </ag-selection-card-group>
</template>

<script setup lang="ts">
import '../core/SelectionCardGroup';
import type { SelectionType, SelectionChangeEventDetail } from '../core/SelectionCardGroup';

export interface VueSelectionCardGroupProps {
  /** Selection mode: 'radio' (single) or 'checkbox' (multiple) */
  type?: SelectionType;
  /** Name attribute for the input elements */
  name: string;
  /** Legend text for the fieldset (accessibility) */
  legend?: string;
  /** Visually hide the legend while keeping it accessible */
  legendHidden?: boolean;
  /** Controlled value for radio mode */
  value?: string;
  /** Controlled values for checkbox mode */
  values?: string[];
  /** Disable all cards in the group */
  disabled?: boolean;
}

withDefaults(defineProps<VueSelectionCardGroupProps>(), {
  type: 'radio',
  name: '',
  legend: '',
  legendHidden: false,
  value: '',
  values: () => [],
  disabled: false,
});

const emit = defineEmits<{
  'selection-change': [detail: SelectionChangeEventDetail];
  'update:value': [value: string];
  'update:values': [values: string[]];
}>();

const handleSelectionChange = (event: Event) => {
  const detail = (event as CustomEvent<SelectionChangeEventDetail>).detail;
  emit('selection-change', detail);
  // Support v-model:value for radio
  if (detail.selectedValues.length <= 1) {
    emit('update:value', detail.selectedValues[0] || '');
  }
  // Support v-model:values for checkbox
  emit('update:values', detail.selectedValues);
};
</script>
