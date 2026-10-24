<!-- v2/site/docs/examples/ButtonFallbackPreview.vue -->
<script setup lang="ts">
import { computed } from 'vue';
import { _ButtonFallback } from 'agnosticui-core/button/vue';

import 'agnosticui-core/styles/framework-components.css';

const props = withDefaults(defineProps<{
  variant?: 'success' | 'primary' | 'secondary' | 'warning' | 'danger' | 'monochrome' | '';
  size?: 'x-sm' | 'sm' | 'md' | 'lg' | 'xl';
  shape?: 'capsule' | 'rounded' | 'circle' | 'square' | 'rounded-square' | '';
  bordered?: boolean;
  ghost?: boolean;
  link?: boolean;
  grouped?: boolean;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  loading?: boolean;
  toggle?: boolean;
  pressed?: boolean;
  ariaLabel?: string;
  slotContent?: string;
}>(), {
  variant: '',
  size: 'md',
  shape: '',
  bordered: false,
  ghost: false,
  link: false,
  grouped: false,
  fullWidth: false,
  type: 'button',
  disabled: false,
  loading: false,
  toggle: false,
  pressed: false,
  ariaLabel: '',
  slotContent: 'Button'
});

const fallbackHtml = computed(() => {
  return _ButtonFallback({
    variant: props.variant,
    size: props.size,
    shape: props.shape,
    bordered: props.bordered,
    ghost: props.ghost,
    link: props.link,
    grouped: props.grouped,
    fullWidth: props.fullWidth,
    type: props.type,
    disabled: props.disabled,
    loading: props.loading,
    toggle: props.toggle,
    pressed: props.pressed,
    ariaLabel: props.ariaLabel,
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
  padding: 2rem;
  border: 1px dashed var(--vp-c-divider);
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
  margin-block: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
