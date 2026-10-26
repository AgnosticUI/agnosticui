<template>
  <div class="vp-raw fallback-preview-container">
    <h3 class="preview-heading">Isomorphic Motion Subclass Server Fallback Render Preview</h3>
    <div class="preview-row">
      <!-- Animated configurations fall back gracefully to baseline unstyled namespace elements -->
      <div v-html="avatarBounceHtml" />
      <div v-html="avatarPulseHtml" />
      <div v-html="avatarShimmerHtml" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
// Section 4 Centralized Markup Injection Guardrail: Subclass shares global structural fallback pipelines
import { _AvatarFallback } from 'agnosticui-core/avatar/vue';
import 'agnosticui-core/styles/framework-components.css';

const avatarBounceHtml = computed(() => _AvatarFallback({
  text: 'BO',
  variant: 'default',
  size: 'md'
}));

const avatarPulseHtml = computed(() => _AvatarFallback({
  text: 'PU',
  variant: 'success',
  size: 'md'
}));

const avatarShimmerHtml = computed(() => _AvatarFallback({
  text: 'SH',
  variant: 'error',
  size: 'md'
}));
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
</style>
