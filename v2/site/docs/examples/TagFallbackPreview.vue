<template>
  <div class="vp-raw fallback-preview-container">
    <div class="ag-form-control-layout-stack" style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
      <div v-html="defaultHtml" class="fallback-tag-item" />
      <div v-html="pillHtml" class="fallback-tag-item" />
      <div v-html="uppercaseHtml" class="fallback-tag-item" />
      <div v-html="removableHtml" class="fallback-tag-item" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { _TagFallback } from 'agnosticui-core/tag/vue';
import 'agnosticui-core/styles/framework-components.css';

const defaultHtml = computed(() => {
  return _TagFallback({
    variant: 'primary',
    children: 'Standard Tag'
  });
});

const pillHtml = computed(() => {
  return _TagFallback({
    variant: 'success',
    shape: 'pill',
    children: 'Success Pill'
  });
});

const uppercaseHtml = computed(() => {
  return _TagFallback({
    variant: 'warning',
    uppercase: true,
    children: 'Alert Context'
  });
});

const removableHtml = computed(() => {
  return _TagFallback({
    variant: 'error',
    removable: true,
    children: 'Dismissible'
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
/* Ensure the wrapper treats internal hosts as block layout roots */
.fallback-tag-item :deep(.ag-tag-host) {
  display: inline-flex;
}
</style>
