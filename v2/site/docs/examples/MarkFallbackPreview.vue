<template>
  <div class="vp-raw fallback-preview-container">
    <div class="ag-form-control-layout-stack" style="display: flex; gap: 12px; flex-wrap: wrap;">
      <div v-html="staticHtml" />
      <div v-html="reactiveHtml" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { _MarkFallback } from 'agnosticui-core/mark/vue';
import 'agnosticui-core/styles/framework-components.css';

// Render static mode fallback visual previews
const staticHtml = computed(() => {
  return _MarkFallback({
    variant: 'success',
    children: 'Server Static Fallback'
  });
});

// Render reactive mode server-side string emulation
const reactiveHtml = computed(() => {
  return _MarkFallback({
    variant: 'warning',
    search: 'Isomorphic',
    matchAll: true,
    children: 'This Isomorphic preview is painted on request instantly.'
  });
});
</script>

<style scoped>
.fallback-preview-container {
  padding: 1rem;
  border: 1px dashed var(--vp-c-brand);
  border-radius: var(--ag-radius-sm);
  background-color: var(--vp-c-bg-soft);
  margin-bottom: 2rem;
}
</style>
