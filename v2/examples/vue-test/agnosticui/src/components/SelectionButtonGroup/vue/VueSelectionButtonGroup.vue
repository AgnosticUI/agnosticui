<template>
  <ag-selection-button-group
    :type="type"
    :name="name"
    :legend="legend"
    :legend-hidden="legendHidden"
    :theme="theme"
    :size="size"
    :shape="shape"
    :value="value"
    :values="values"
    .disabled="disabled"
    @selection-change="handleSelectionChange"
    v-bind="$attrs"
  >
    <slot />
  </ag-selection-button-group>
</template>

<script setup lang="ts">
import '../core/SelectionButtonGroup';
import type {
  SelectionButtonType,
  SelectionButtonChangeEventDetail,
  SelectionButtonGroupTheme,
  SelectionButtonGroupSize,
  SelectionButtonGroupShape,
} from '../core/SelectionButtonGroup';

export interface VueSelectionButtonGroupProps {
  /** Selection mode: 'radio' (single) or 'checkbox' (multiple) */
  type?: SelectionButtonType;
  /** Name attribute for the input elements */
  name: string;
  /** Legend text for the fieldset (accessibility) */
  legend?: string;
  /** Visually hide the legend while keeping it accessible */
  legendHidden?: boolean;
  /** Theme variant for buttons */
  theme?: SelectionButtonGroupTheme;
  /** Size variant for buttons */
  size?: SelectionButtonGroupSize;
  /** Shape variant for buttons */
  shape?: SelectionButtonGroupShape;
  /** Controlled value for radio mode */
  value?: string;
  /** Controlled values for checkbox mode */
  values?: string[];
  /** Disable all buttons in the group */
  disabled?: boolean;
}

withDefaults(defineProps<VueSelectionButtonGroupProps>(), {
  type: 'radio',
  name: '',
  legend: '',
  legendHidden: false,
  theme: '',
  size: 'md',
  shape: '',
  value: '',
  values: () => [],
  disabled: false,
});

const emit = defineEmits<{
  'selection-change': [detail: SelectionButtonChangeEventDetail];
  'update:value': [value: string];
  'update:values': [values: string[]];
}>();

const handleSelectionChange = (event: Event) => {
  const detail = (event as CustomEvent<SelectionButtonChangeEventDetail>).detail;
  emit('selection-change', detail);
  // Support v-model:value for radio
  if (detail.selectedValues.length <= 1) {
    emit('update:value', detail.selectedValues[0] || '');
  }
  // Support v-model:values for checkbox
  emit('update:values', detail.selectedValues);
};
</script>
