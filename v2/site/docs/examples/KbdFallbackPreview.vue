<template>
  <div class="vp-raw fallback-preview-container">
    <div v-html="fallbackHtml" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { _KbdFallback } from 'agnosticui-core/kbd/vue';
import 'agnosticui-core/styles/framework-components.css';

const props = withDefaults(defineProps<{
  variant?: 'default' | 'primary' | 'secondary' | 'info' | 'warning' | 'success' | 'danger' | 'error' | 'monochrome';
  size?: 'sm' | 'md' | 'lg';
  bordered?: boolean | string;
  background?: boolean | string;
  label?: string;
}>(), {
  variant: 'default',
  size: 'md',
  bordered: true,
  background: false,
  label: '⌘'
});

const fallbackHtml = computed(() => {
  return _KbdFallback({
    variant: props.variant,
    size: props.size,
    bordered: props.bordered,
    background: props.background,
    children: props.label
  });
});
</script>

<style scoped>
.fallback-preview-container {
  display: flex;
  gap: var(--ag-space-2, 0.5rem);
  align-items: center;
}
</style>
