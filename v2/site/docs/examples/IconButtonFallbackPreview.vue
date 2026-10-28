<template>
  <div class="vp-raw fallback-preview-container">
    <div style="margin-bottom: 1rem; font-weight: 600; font-size: 0.9rem; color: var(--vp-c-text-1);">
      Option 2: Default Wireframe Ring Placeholder
    </div>
    <div class="ag-form-control-layout-stack" style="display: flex; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-bottom: 2rem;">
      <div v-html="ghostHtml" />
      <div v-html="primaryHtml" />
      <div v-html="dangerHtml" />
      <div v-html="unicodeHtml" />
    </div>

    <div style="margin-bottom: 0.5rem; font-weight: 600; font-size: 0.9rem; color: var(--vp-c-text-1);">
      Option 1: Empty Icon Frame (`useEmptyIcon="true"`)
    </div>
    
    <!-- Vector Calibrated Developer Tool Helper Block -->
    <div style="margin-bottom: 1rem; padding: 0.75rem 1rem; background-color: var(--vp-c-bg-alt); border-left: 4px solid var(--vp-c-brand-1); border-radius: 4px; font-size: 0.85rem; line-height: 1.4; color: var(--vp-c-text-2); display: flex; gap: 0.5rem; align-items: flex-start;">
      <Search :size="16" style="margin-top: 0.15rem; flex-shrink: 0; color: var(--vp-c-brand-1);" />
      <div>
        <strong>DevTools Verification Hook:</strong> Because the frame interior is completely clear in this mode, it appears visually blank before hydration. Inspect these elements in your browser to confirm that the server successfully processed the target by looking for the tracking <code>data-icon="..."</code> attribute on the hidden node.
      </div>
    </div>

    <div class="ag-form-control-layout-stack" style="display: flex; gap: 0.5rem; flex-wrap: wrap; align-items: center;">
      <div v-html="emptyGhostHtml" />
      <div v-html="emptyPrimaryHtml" />
      <div v-html="emptyDangerHtml" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Search } from 'lucide-vue-next';
import { _IconButtonFallback } from '../../../lib/src/components/IconButton/core/_IconButtonFallback.js';
import '../../../lib/dist/styles/framework-components.css';

// Option 2 Previews (Default)
const ghostHtml = computed(() => _IconButtonFallback({ label: 'Settings panel', icon: 'settings' }));
const primaryHtml = computed(() => _IconButtonFallback({ label: 'Save changes', variant: 'primary', icon: 'save' }));
const dangerHtml = computed(() => _IconButtonFallback({ label: 'Purge record', variant: 'danger', icon: 'trash' }));
const unicodeHtml = computed(() => _IconButtonFallback({ label: 'Dismiss banner', unicode: '×' }));

// Option 1 Previews (Empty Layout Frame)
const emptyGhostHtml = computed(() => _IconButtonFallback({ label: 'Settings panel', icon: 'settings', useEmptyIcon: true }));
const emptyPrimaryHtml = computed(() => _IconButtonFallback({ label: 'Save changes', variant: 'primary', icon: 'save', useEmptyIcon: true }));
const emptyDangerHtml = computed(() => _IconButtonFallback({ label: 'Purge record', variant: 'danger', icon: 'trash', useEmptyIcon: true }));
</script>

<style scoped>
.fallback-preview-container {
  padding: var(--ag-space-2);
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
