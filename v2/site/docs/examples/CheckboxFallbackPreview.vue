<script setup lang="ts">
import { computed } from 'vue';
import { _CheckboxFallback } from 'agnosticui-core/checkbox';

import 'agnosticui-core/styles/framework-components.css';

const props = withDefaults(defineProps<{
  name?: string;
  value?: string;
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  theme?: 'default' | 'primary' | 'success' | 'monochrome';
  labelText?: string;
  labelPosition?: 'end' | 'start';
  required?: boolean;
  invalid?: boolean;
  errorMessage?: string;
  helpText?: string;
  slotContent?: string;
}>(), {
  name: '',
  value: '',
  checked: false,
  indeterminate: false,
  disabled: false,
  size: 'medium',
  theme: 'primary',
  labelText: 'Checkbox Option',
  labelPosition: 'end',
  required: false,
  invalid: false,
  errorMessage: '',
  helpText: '',
  slotContent: ''
});

const fallbackHtml = computed(() => {
  return _CheckboxFallback({ ...props });
});
</script>

<template>
  <div class="vp-raw fallback-preview-container">
    <div v-html="fallbackHtml" />
  </div>
</template>

<style scoped>
.fallback-preview-container {
  padding: 1.5rem;
  border: 1px dashed var(--vp-c-divider);
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
  margin-block: 1rem;
  display: inline-block;
  min-width: 280px;
}
</style>
