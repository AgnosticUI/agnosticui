<!-- v2/site/docs/examples/CheckboxFallbackPreview.vue -->
<script setup lang="ts">
import { computed } from 'vue';
import { _CheckboxFallback } from 'agnosticui-core/checkbox/vue';

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
  return _CheckboxFallback({
    name: props.name,
    value: props.value,
    checked: props.checked,
    indeterminate: props.indeterminate,
    disabled: props.disabled,
    size: props.size,
    theme: props.theme,
    labelText: props.labelText,
    labelPosition: props.labelPosition,
    required: props.required,
    invalid: props.invalid,
    errorMessage: props.errorMessage,
    helpText: props.helpText,
    slotContent: props.slotContent
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
  padding: 1.5rem;
  border: 1px dashed var(--vp-c-divider);
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
  margin-block: 1rem;
  display: inline-block;
  min-width: 280px;
}

/* ==========================================================================
   LIGHT DOM SSR VISUAL COUPLING 
   Forces the fallback HTML layout parameters to paint with absolute parity
   before hydration scripts activate on the client window.
   ========================================================================== */

:deep(.checkbox-wrapper) {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  gap: 0;
}

:deep(.checkbox-wrapper--label-start) {
  flex-direction: row-reverse;
}

:deep(.checkbox-input) {
  position: absolute;
  width: 1px;
  height: 1px;
  opacity: 0;
  margin: 0;
  padding: 0;
  clip: rect(0, 0, 0, 0);
  overflow: hidden;
}

:deep(.checkbox-label) {
  position: relative;
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
}

:deep(.checkbox-label::before) {
  content: '';
  display: inline-block;
  flex-shrink: 0;
  margin-inline-end: var(--ag-space-3);
  border-radius: var(--ag-radius-sm);
  transition: all var(--ag-motion-fast) ease-in-out;
}

:deep(.checkbox-label::after) {
  content: '';
  position: absolute;
  display: block;
  opacity: 0;
  transform: rotate(40deg) scale(0);
  transform-origin: center center;
  transition: all var(--ag-motion-fast) ease-in-out;
}

/* Size Variants Scale Geometry */
:deep(.checkbox-label--small::before) { width: 14px; height: 14px; }
:deep(.checkbox-label--small::after) {
  inset-inline-start: 4px;
  top: 0px;
  width: 4px;
  height: 8px;
  border-inline-end: var(--ag-border-width-2) solid var(--ag-white);
  border-bottom: var(--ag-border-width-2) solid var(--ag-white);
}

:deep(.checkbox-label--medium::before) { width: 16px; height: 16px; }
:deep(.checkbox-label--medium::after) {
  inset-inline-start: 5px;
  top: 1px;
  width: 4px;
  height: 9px;
  border-inline-end: var(--ag-border-width-2) solid var(--ag-white);
  border-bottom: var(--ag-border-width-2) solid var(--ag-white);
}

:deep(.checkbox-label--large::before) { width: 18px; height: 18px; }
:deep(.checkbox-label--large::after) {
  inset-inline-start: 6px;
  top: 1px;
  width: 5px;
  height: 10px;
  border-inline-end: var(--ag-border-width-2) solid var(--ag-white);
  border-bottom: var(--ag-border-width-2) solid var(--ag-white);
}

/* State Driven Interactive Selectors */
:deep(.checkbox-input:focus + .checkbox-label::before) {
  box-shadow: 0 0 0 var(--ag-focus-width) rgba(var(--ag-focus), 0.5);
  outline: var(--ag-focus-width) solid rgba(var(--ag-focus), 0.5);
  outline-offset: var(--ag-focus-offset);
}

:deep(.checkbox-input:indeterminate + .checkbox-label::after) {
  transform: rotate(0deg) scale(1) translate(-6px);
  opacity: 1;
  border-inline-end: none;
  border-bottom: var(--ag-border-width-2) solid var(--ag-white);
  width: 8px;
  height: 0;
  inset-inline-start: 50%;
  top: 50%;
  margin-inline-start: -4px;
  margin-block-start: -1px;
}

:deep(.checkbox-input:checked + .checkbox-label::after) {
  opacity: 1;
  transform: rotate(40deg) scale(1) translate(2px);
}

/* Theme Color Matrix Combinations */
:deep(.checkbox-label--default::before) { border: var(--ag-border-width-2) solid var(--ag-primary-border); background: var(--ag-white); }
:deep(.checkbox-input:checked + .checkbox-label--default::before),
:deep(.checkbox-input:indeterminate + .checkbox-label--default::before) { background: var(--ag-primary); border-color: var(--ag-primary); }

:deep(.checkbox-label--primary::before) { border: var(--ag-border-width-2) solid var(--ag-primary-border); background: var(--ag-white); }
:deep(.checkbox-input:checked + .checkbox-label--primary::before),
:deep(.checkbox-input:indeterminate + .checkbox-label--primary::before) { background: var(--ag-primary); border-color: var(--ag-primary); }

:deep(.checkbox-label--success::before) { border: var(--ag-border-width-2) solid var(--ag-border); background: var(--ag-white); }
:deep(.checkbox-input:checked + .checkbox-label--success::before),
:deep(.checkbox-input:indeterminate + .checkbox-label--success::before) { background: var(--ag-success); border-color: var(--ag-success); }

:deep(.checkbox-label--monochrome::before) { border: var(--ag-border-width-2) solid var(--ag-black); background: var(--ag-white); }
:deep(.checkbox-input:checked + .checkbox-label--monochrome::before),
:deep(.checkbox-input:indeterminate + .checkbox-label--monochrome::before) { background: var(--ag-black); border-color: var(--ag-black); }

:deep(.checkbox-label-copy) { display: inline-block; }
:deep(.checkbox-label-copy--small) { font-size: var(--ag-font-size-sm); }
:deep(.checkbox-label-copy--medium) { font-size: var(--ag-font-size-sm); }
:deep(.checkbox-label-copy--large) { font-size: var(--ag-font-size-base); }
</style>
