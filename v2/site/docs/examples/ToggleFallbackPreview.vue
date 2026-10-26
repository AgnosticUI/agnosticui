<template>
  <div class="vp-raw fallback-preview-container">
    <div v-html="fallbackHtml" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { _ToggleFallback } from 'agnosticui-core/toggle/vue';
import 'agnosticui-core/styles/framework-components.css';

const props = withDefaults(defineProps<{
  label?: string;
  labelPosition?: 'top' | 'start' | 'end' | 'bottom';
  labelHidden?: boolean;
  noLabel?: boolean;
  checked?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'monochrome';
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  invalid?: boolean;
  errorMessage?: string;
  helpText?: string;
}>(), {
  label: '',
  labelPosition: 'top',
  labelHidden: false,
  noLabel: false,
  checked: false,
  size: 'md',
  variant: 'default',
  disabled: false,
  readonly: false,
  required: false,
  invalid: false,
  errorMessage: '',
  helpText: ''
});

const fallbackHtml = computed(() => {
  return _ToggleFallback({
    label: props.label,
    labelPosition: props.labelPosition,
    labelHidden: props.labelHidden,
    noLabel: props.noLabel,
    checked: props.checked,
    size: props.size,
    variant: props.variant,
    disabled: props.disabled,
    readonly: props.readonly,
    required: props.required,
    invalid: props.invalid,
    errorMessage: props.errorMessage,
    helpText: props.helpText
  });
});
</script>

<style scoped>
.fallback-preview-container {
  padding: 1.5rem;
  border: 1px dashed var(--vp-c-divider);
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
  margin-top: 1rem;
  margin-bottom: 1.5rem;
}
</style>
