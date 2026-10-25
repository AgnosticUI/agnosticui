<script setup lang="ts">
import { computed } from 'vue';
import { _RadioFallback } from 'agnosticui-core/radio';
import 'agnosticui-core/styles/framework-components.css';

const props = withDefaults(defineProps<{
  labelText?: string;
  size?: 'small' | 'medium' | 'large';
  theme?: 'default' | 'primary' | 'success' | 'monochrome';
  required?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  errorMessage?: string;
  helpText?: string;
  labelPosition?: 'end' | 'start';
  label?: string;
  labelHidden?: boolean;
  noLabel?: boolean;
  checked?: boolean;
  name?: string;
}>(), {
  labelText: '',
  size: 'medium',
  theme: 'primary',
  required: false,
  disabled: false,
  invalid: false,
  errorMessage: '',
  helpText: '',
  labelPosition: 'end',
  label: '',
  labelHidden: false,
  noLabel: false,
  checked: false,
  name: 'fallback-radio'
});

const fallbackHtml = computed(() => {
  return _RadioFallback({
    labelText: props.labelText,
    size: props.size,
    theme: props.theme,
    required: props.required,
    disabled: props.disabled,
    invalid: props.invalid,
    errorMessage: props.errorMessage,
    helpText: props.helpText,
    labelPosition: props.labelPosition,
    label: props.label,
    labelHidden: props.labelHidden,
    noLabel: props.noLabel,
    checked: props.checked,
    name: props.name
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
