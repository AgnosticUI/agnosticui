<template>
  <div class="vp-raw fallback-preview-container">
    <!-- Section 7 Rule: Completely bypasses VitePress markdown theme overrides -->
    <div v-html="fallbackHtml" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
// Section 7 Rule: Pull directly from your framework/vue subpath build endpoint
import { _DividerFallback } from 'agnosticui-core/divider/vue';
import 'agnosticui-core/styles/framework-components.css';

interface Props {
  vertical?: boolean | string;
  justify?: 'center' | 'start' | 'end';
  size?: 'default' | 'small' | 'large' | 'xlarge';
  variant?: 'default' | 'success' | 'info' | 'warning' | 'error' | 'monochrome';
  text?: string;
}

const props = withDefaults(defineProps<Props>(), {
  vertical: false,
  justify: 'center',
  size: 'default',
  variant: 'default',
  text: ''
});

// Execute compile-time server string evaluation simulating baseline rendering
const fallbackHtml = computed(() => {
  return _DividerFallback({
    vertical: props.vertical,
    justify: props.justify,
    size: props.size,
    variant: props.variant,
    children: props.text
  });
});
</script>

<style scoped>
.fallback-preview-container {
  width: 100%;
  margin-block-start: var(--ag-space-4);
  margin-block-end: var(--ag-space-4);
}
</style>
