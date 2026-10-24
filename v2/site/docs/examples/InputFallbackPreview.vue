<!-- v2/site/docs/examples/InputFallbackPreview.vue -->
<script setup lang="ts">
import { computed } from 'vue';
import { _InputFallback } from 'agnosticui-core/input/vue';

import 'agnosticui-core/styles/framework-components.css';

const props = withDefaults(defineProps<{
  label?: string;
  labelHidden?: boolean;
  labelPosition?: 'top' | 'end' | 'bottom' | 'start';
  noLabel?: boolean;
  ariaLabel?: string;
  name?: string;
  type?: any;
  value?: string;
  placeholder?: string;
  rows?: number;
  cols?: number;
  size?: 'small' | 'default' | 'large';
  capsule?: boolean;
  rounded?: boolean;
  underlined?: boolean;
  underlinedWithBackground?: boolean;
  inline?: boolean;
  min?: string;
  max?: string;
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  invalid?: boolean;
  errorMessage?: string;
  helpText?: string;
  slotAddonLeft?: string;
  slotAddonRight?: string;
}>(), {
  label: 'Input Field',
  labelHidden: false,
  labelPosition: 'top',
  noLabel: false,
  ariaLabel: '',
  name: '',
  type: 'text',
  value: '',
  placeholder: '',
  rows: 4,
  cols: 50,
  size: 'default',
  capsule: false,
  rounded: false,
  underlined: false,
  underlinedWithBackground: false,
  inline: false,
  min: '',
  max: '',
  required: false,
  disabled: false,
  readonly: false,
  invalid: false,
  errorMessage: '',
  helpText: '',
  slotAddonLeft: '',
  slotAddonRight: ''
});

const fallbackHtml = computed(() => {
  return _InputFallback({
    label: props.label,
    labelHidden: props.labelHidden,
    labelPosition: props.labelPosition,
    noLabel: props.noLabel,
    ariaLabel: props.ariaLabel,
    name: props.name,
    type: props.type,
    value: props.value,
    placeholder: props.placeholder,
    rows: props.rows,
    cols: props.cols,
    size: props.size,
    capsule: props.capsule,
    rounded: props.rounded,
    underlined: props.underlined,
    underlinedWithBackground: props.underlinedWithBackground,
    inline: props.inline,
    min: props.min,
    max: props.max,
    required: props.required,
    disabled: props.disabled,
    readonly: props.readonly,
    invalid: props.invalid,
    errorMessage: props.errorMessage,
    helpText: props.helpText,
    slotAddonLeft: props.slotAddonLeft,
    slotAddonRight: props.slotAddonRight
  });
});
</script>

<template>
  <div class="vp-raw fallback-preview-container">
    <div v-html="fallbackHtml" />
  </div>
</template>

<style scoped>
.fallback-preview-container {
  padding: 2rem;
  border: 1px dashed var(--vp-c-divider);
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
  margin-block: 1rem;
}
</style>
