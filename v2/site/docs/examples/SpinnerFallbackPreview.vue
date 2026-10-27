<template>
  <div class="vp-raw fallback-preview-container">
    <div v-html="fallbackHtml" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { _SpinnerFallback } from 'agnosticui-core/spinner/vue';
import 'agnosticui-core/styles/framework-components.css';

const props = withDefaults(defineProps<{
  size?: 'small' | 'default' | 'large' | 'xlarge';
  ariaLabel?: string;
}>(), {
  size: 'default',
  ariaLabel: 'Loading...'
});

const fallbackHtml = computed(() => {
  return _SpinnerFallback({
    size: props.size,
    ariaLabel: props.ariaLabel
  });
});
</script>

<style scoped>
.fallback-preview-container {
  display: inline-flex;
  padding: var(--ag-space-4, 1rem);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
}
</style>
