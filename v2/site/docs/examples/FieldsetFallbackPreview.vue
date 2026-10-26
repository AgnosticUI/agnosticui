<template>
  <div class="vp-raw fallback-preview-container">
    <!-- Render ONLY the target layout variation matching the active Markdown header context -->
    <div v-if="variant === 'vertical'" v-html="verticalFallback" />
    <div v-else-if="variant === 'horizontal'" v-html="horizontalFallback" />
  </div>
</template>

<script setup lang="ts">
import { _FieldsetFallback } from 'agnosticui-core/fieldset';
import 'agnosticui-core/styles/framework-components.css';

// Accept variant context bounds from the markdown container declaration
defineProps({
  variant: {
    type: String,
    required: true,
    validator: (val: string) => ['vertical', 'horizontal'].includes(val)
  }
});

// 1. Isolated string compilation for the Standard Stacked Configuration
const verticalFallback = _FieldsetFallback({
  legend: 'Account Credentials',
  bordered: true,
  layout: 'vertical',
  children: `
    <div style="margin-bottom: 1rem;">
      <label style="display: block; font-size: 0.875rem; margin-bottom: 0.25rem; font-weight: 500;">Email Address</label>
      <input type="email" style="border: 1px solid var(--vp-c-divider); padding: 0.5rem; border-radius: 4px; width: 100%; max-width: 320px; background: transparent; color: inherit;" />
    </div>
    <div>
      <label style="display: block; font-size: 0.875rem; margin-bottom: 0.25rem; font-weight: 500;">Password</label>
      <input type="password" style="border: 1px solid var(--vp-c-divider); padding: 0.5rem; border-radius: 4px; width: 100%; max-width: 320px; background: transparent; color: inherit;" />
    </div>
  `
});

// 2. Isolated string compilation for the Mandatory Horizontal Row Layout
const horizontalFallback = _FieldsetFallback({
  legend: 'Communication Channels (Accessible Alternative Text)',
  legendHidden: true,
  bordered: false,
  layout: 'horizontal',
  children: `
    <label style="display: inline-flex; align-items: center; gap: 0.5rem; margin-right: 1.5rem; cursor: pointer;">
      <input type="checkbox" checked style="cursor: pointer;" /> Push Notification Channels
    </label>
    <label style="display: inline-flex; align-items: center; gap: 0.5rem; cursor: pointer;">
      <input type="checkbox" style="cursor: pointer;" /> Direct SMS Dispatches
    </label>
  `
});
</script>

<style scoped>
.fallback-preview-container {
  display: block;
  padding: 1.5rem;
  border: 1px dashed var(--vp-c-divider);
  border-radius: 8px;
  background-color: var(--vp-c-bg-alt);
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
}
</style>
