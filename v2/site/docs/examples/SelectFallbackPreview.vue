<!-- v2/site/docs/examples/SelectFallbackPreview.vue -->
<script setup lang="ts">
import { computed } from 'vue';
import { _SelectFallback } from 'agnosticui-core/select/vue';

import 'agnosticui-core/styles/framework-components.css';

const props = withDefaults(defineProps<{
  label?: string;
  size?: 'small' | 'large' | '';
  required?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  errorMessage?: string;
  helpText?: string;
  labelPosition?: 'top' | 'start' | 'end' | 'bottom';
  optionPlaceholder?: string; // Add the string prop mapping boundary here
}>(), {
  label: 'Select Option',
  size: '',
  required: false,
  disabled: false,
  invalid: false,
  errorMessage: '',
  helpText: '',
  labelPosition: 'top',
  optionPlaceholder: ''
});

const fallbackHtml = computed(() => {
  return _SelectFallback({
    label: props.label,
    size: props.size,
    required: props.required,
    disabled: props.disabled,
    invalid: props.invalid,
    errorMessage: props.errorMessage,
    helpText: props.helpText,
    labelPosition: props.labelPosition,
    optionPlaceholder: props.optionPlaceholder // Simply forward the flat text token
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
