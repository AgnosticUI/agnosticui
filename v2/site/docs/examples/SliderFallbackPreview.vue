<script setup lang="ts">
import { computed } from 'vue';
import { _SliderFallback } from 'agnosticui-core/slider/vue';
import 'agnosticui-core/styles/framework-components.css';

const singleHtml = computed(() => {
  return _SliderFallback({
    label: 'Baseline System Volume',
    value: 65,
    min: 0,
    max: 100,
    showTooltip: true
  });
});

const dualHtml = computed(() => {
  return _SliderFallback({
    label: 'Price Threshold Range',
    dual: true,
    value: [20, 80],
    min: 0,
    max: 100,
    showTicks: true,
    tickStep: 25
  });
});
</script>

<template>
  <div class="vp-raw fallback-preview-container">
    <!-- Single Range Preview -->
    <div class="preview-item">
      <h4>Isomorphic Server Fallback (Single Range)</h4>
      <div v-html="singleHtml" />
    </div>

    <!-- Dual Range Preview -->
    <div class="preview-item">
      <h4>Isomorphic Server Fallback (Dual Range Matrix)</h4>
      <div v-html="dualHtml" />
    </div>
  </div>
</template>

<style scoped>
.fallback-preview-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1.5rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
  margin-block: 1.5rem;
}
.preview-item h4 {
  margin-block-start: 0;
  margin-block-end: 1rem;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
</style>
