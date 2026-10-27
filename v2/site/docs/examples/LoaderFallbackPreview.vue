<template>
  <div class="vp-raw fallback-preview-container">
    <div v-html="fallbackHtml" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { _LoaderFallback } from 'agnosticui-core/loader/vue';
import 'agnosticui-core/styles/framework-components.css';

const props = withDefaults(defineProps<{
  size?: 'small' | 'default' | 'large';
  ariaLabel?: string;
}>(), {
  size: 'default',
  ariaLabel: 'Loading...'
});

const fallbackHtml = computed(() => {
  return _LoaderFallback({
    size: props.size,
    ariaLabel: props.ariaLabel
  });
});
</script>

<style scoped>
.fallback-preview-container {
  display: inline-flex;
  padding: var(--ag-space-4, 1rem);
}
</style>
