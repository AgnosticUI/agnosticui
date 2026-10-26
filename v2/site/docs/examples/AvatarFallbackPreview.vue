<template>
  <!-- Section 7 File A: Pure layout wrapper isolated from theme typography collision pools -->
  <div class="vp-raw fallback-preview-container">
    <h3 class="preview-heading">Isomorphic Server Fallback Render Preview</h3>
    
    <!-- Render individual fallback engine items -->
    <div class="preview-row">
      <div v-html="avatarInitialsHtml" />
      <div v-html="avatarImageHtml" />
      <div v-html="avatarInfoHtml" />
    </div>

    <!-- Render fallback grouping layouts -->
    <div class="preview-row group-row">
      <div v-html="avatarGroupHtml" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { _AvatarFallback, _AvatarGroupFallback } from 'agnosticui-core/avatar/vue';
import 'agnosticui-core/styles/framework-components.css';

// Evaluate raw server-side output markup strings
const avatarInitialsHtml = computed(() => _AvatarFallback({ 
  text: 'AB', 
  variant: 'default',
  size: 'md' 
}));

const avatarImageHtml = computed(() => _AvatarFallback({
  // FIX: Provide a valid inline data URI SVG profile placeholder so it paints beautifully without network asset paths
  imgSrc: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23a1a1aa"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5-4-8-4z"/></svg>',
  imgAlt: 'User profile graphic',
  size: 'md'
}));

const avatarInfoHtml = computed(() => _AvatarFallback({
  text: 'FX',
  variant: 'info',
  size: 'lg'
}));

const avatarGroupHtml = computed(() => {
  const item1 = _AvatarFallback({ text: 'JD', variant: 'monochrome', size: 'lg' });
  const item2 = _AvatarFallback({ text: 'RL', variant: 'monochrome', size: 'lg' });
  const item3 = _AvatarFallback({ text: 'KL', variant: 'monochrome', size: 'lg' });
  
  return _AvatarGroupFallback({
    children: `${item1}${item2}${item3}`
  });
});
</script>

<style scoped>
.fallback-preview-container {
  margin: var(--ag-space-4) 0;
  padding: var(--ag-space-6);
  border: 1px solid var(--ag-border);
  border-radius: var(--ag-radius-md);
  background: var(--ag-background-primary);
}

.preview-heading {
  margin-top: 0 !important;
  margin-bottom: var(--ag-space-4);
  font-size: var(--ag-font-size-sm);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--ag-text-secondary);
}

.preview-row {
  display: flex;
  align-items: center;
  gap: var(--ag-space-4);
}

.group-row {
  margin-top: var(--ag-space-6);
  padding-top: var(--ag-space-4);
  border-top: 1px dashed var(--ag-border);
}
</style>
