<template>
  <div class="vp-raw fallback-preview-container">
    <div class="ag-form-control-layout-stack" style="display: flex; flex-direction: column; gap: 1rem; width: 100%;">
      <!-- Text Variant Fallback -->
      <div v-html="textHtml" />
      
      <!-- Circular Variant Fallback -->
      <div v-html="circularHtml" />
      
      <!-- Rectangular Variant Fallback -->
      <div v-html="rectangularHtml" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { _SkeletonLoaderFallback } from 'agnosticui-core/skeleton/vue';
import 'agnosticui-core/styles/framework-components.css';

const textHtml = _SkeletonLoaderFallback({
  variant: 'text',
  effect: 'pulse',
  intensity: 'light'
});

const circularHtml = _SkeletonLoaderFallback({
  variant: 'circular',
  width: '60px',
  effect: 'pulse',
  intensity: 'light'
});

const rectangularHtml = _SkeletonLoaderFallback({
  variant: 'rectangular',
  width: '100%',
  height: '150px',
  effect: 'sheen',
  intensity: 'medium'
});
</script>

<style scoped>
.fallback-preview-container {
  padding: 1.5rem;
  border: 1px dashed var(--vp-c-brand);
  border-radius: 8px;
  background-color: var(--vp-c-bg-alt);
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
