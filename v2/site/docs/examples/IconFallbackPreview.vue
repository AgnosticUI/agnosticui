<template>
  <div class="vp-raw fallback-preview-container">
    <div class="ag-form-control-layout-stack" style="display: flex; gap: 1rem; align-items: center;">
      <!-- Size 24 Success Check Preview -->
      <div v-html="successIconHtml" />
      
      <!-- Size 36 Error X Cross Preview -->
      <div v-html="errorIconHtml" />
      
      <!-- Size 48 Info Warning Outline Preview -->
      <div v-html="warningOutlineIconHtml" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { _IconFallback } from 'agnosticui-core/icon/vue';
import 'agnosticui-core/styles/framework-components.css';

const successIconHtml = computed(() => {
  return _IconFallback({
    size: '24',
    type: 'success',
    slot: `<svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>`
  });
});

const errorIconHtml = computed(() => {
  return _IconFallback({
    size: '36',
    type: 'error',
    slot: `<svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>`
  });
});

const warningOutlineIconHtml = computed(() => {
  return _IconFallback({
    size: '48',
    type: 'warning',
    noFill: true,
    slot: `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>`
  });
});
</script>

<style scoped>
/* 
  Replicates the Web Component runtime coloring and vector properties 
  for pure static HTML server strings within the unstyled doc sandbox.
*/
.fallback-preview-container :deep(.ag-icon-base) {
  /* Enforce standard size calculations matching layout module geometry */
  display: inline-flex;
}

/* Replicate Lit semantic theme rules mapping using raw HTML attributes */
.fallback-preview-container :deep([type="success"]) { color: var(--ag-success, #4caf50); }
.fallback-preview-container :deep([type="error"]) { color: var(--ag-danger, #f44336); }
.fallback-preview-container :deep([type="warning"]) { color: var(--ag-warning, #ff9800); }
.fallback-preview-container :deep([type="info"]) { color: var(--ag-info, #2196f3); }
.fallback-preview-container :deep([type="primary"]) { color: var(--ag-primary, #3f51b5); }

/* Force raw SVG nodes to follow the parent theme variable color states */
.fallback-preview-container :deep(.ag-icon-base:not([no-fill]) svg) {
  width: 100%;
  height: 100%;
  fill: currentColor;
}

/* Force outline (no-fill) vector configurations to properly clear fill and apply stroke */
.fallback-preview-container :deep(.ag-icon-base[no-fill] svg) {
  width: 100%;
  height: 100%;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
}
</style>
