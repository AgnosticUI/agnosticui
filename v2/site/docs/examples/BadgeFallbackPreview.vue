<template>
  <div class="vp-raw fallback-preview-container">
    <div v-html="fallbackHtml" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { _BadgeFallback } from 'agnosticui-core/badge/vue';
import 'agnosticui-core/styles/framework-components.css';

const props = withDefaults(defineProps<{
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'primary' | 'info' | 'neutral' | 'monochrome';
  size?: 'xs' | 'sm' | 'md';
  dot?: boolean;
  value?: number | null;
  max?: number;
  interactive?: boolean;
  statusLabel?: string | null;
  live?: 'off' | 'polite' | 'assertive';
  hiddenFromAT?: boolean;
}>(), {
  variant: 'default',
  size: 'md',
  dot: false,
  value: null,
  max: 99,
  interactive: false,
  statusLabel: null,
  live: 'off',
  hiddenFromAT: false
});

const fallbackHtml = computed(() => {
  return _BadgeFallback({
    variant: props.variant,
    size: props.size,
    dot: props.dot,
    value: props.value,
    max: props.max,
    interactive: props.interactive,
    statusLabel: props.statusLabel,
    live: props.live,
    hiddenFromAT: props.hiddenFromAT
  });
});
</script>

<style scoped>
.fallback-preview-container {
  padding: 1.5rem;
  border: 1px dashed var(--vp-c-divider);
  border-radius: 8px;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  display: inline-flex;
}
</style>
