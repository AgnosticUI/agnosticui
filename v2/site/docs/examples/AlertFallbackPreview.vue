<!-- v2/site/docs/examples/AlertFallbackPreview.vue -->
<template>
  <div class="vp-raw fallback-preview-container">
    <div style="margin-bottom: 1rem; font-weight: 600; font-size: 0.9rem; color: var(--vp-c-text-1);">
      Standard Server-Side Fallback Previews
    </div>
    <div class="ag-form-control-layout-stack" style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 2rem;">
      <div v-html="defaultHtml" />
      <div v-html="successHtml" />
      <div v-html="infoHtml" />
      <div v-html="warningHtml" />
      <div v-html="dangerHtml" />
    </div>

    <div style="margin-bottom: 1rem; font-weight: 600; font-size: 0.9rem; color: var(--vp-c-text-1);">
      Visual Modifiers Previews (Bordered, Rounded, Dismissible)
    </div>
    <div class="ag-form-control-layout-stack" style="display: flex; flex-direction: column; gap: 0.75rem;">
      <div v-html="borderedHtml" />
      <div v-html="roundedHtml" />
      <div v-html="dismissibleHtml" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { _AlertFallback } from '../../../lib/src/components/Alert/core/_AlertFallback.js';
import '../../../lib/dist/styles/framework-components.css';

// Standard Variant Previews
const defaultHtml = computed(() => _AlertFallback({ slotDefault: 'Default status information alert notification.' }));
const successHtml = computed(() => _AlertFallback({ variant: 'success', slotDefault: 'Success: Secure record deployment synchronized cleanly.' }));
const infoHtml = computed(() => _AlertFallback({ variant: 'info', slotDefault: 'Info: System optimization pass executed successfully.' }));
const warningHtml = computed(() => _AlertFallback({ variant: 'warning', slotDefault: 'Warning: Deprecated database interface identified.' }));
const dangerHtml = computed(() => _AlertFallback({ variant: 'danger', slotDefault: 'Error: Terminal operational thread interruption.' }));

// Modifier Previews
const borderedHtml = computed(() => _AlertFallback({ variant: 'primary', bordered: true, slotDefault: 'Bordered baseline primary accent layout.' }));
const roundedHtml = computed(() => _AlertFallback({ variant: 'monochrome', rounded: true, slotDefault: 'Rounded corner layout boundary tracking block.' }));
const dismissibleHtml = computed(() => _AlertFallback({ variant: 'info', borderedLeft: true, dismissible: true, slotDefault: 'Dismissible alert frame with wireframe close token.' }));
</script>

<style scoped>
.fallback-preview-container {
  padding: var(--ag-space-2);
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
