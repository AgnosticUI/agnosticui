<template>
  <div class="vp-raw fallback-preview-container">
    <div class="ag-form-control-layout-stack" style="display: flex; flex-direction: column; gap: 0.5rem; width: 100%;">
      <p class="preview-explanation">
        The hidden content element below is successfully hidden from sight via server layout rules, but remains present in the DOM tree. Inspect or view the text nodes below using your browser tools:
      </p>
      <!-- Visually Hidden Server Fallback Example -->
      <div v-html="fallbackHtml" />
      <div class="dom-inspector-mock">
        <code>&lt;!-- DOM Node Present --&gt;</code>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { _VisuallyHiddenFallback } from 'agnosticui-core/visually-hidden/vue';
import 'agnosticui-core/styles/framework-components.css';

const fallbackHtml = _VisuallyHiddenFallback({
  slotDefault: 'This content is hidden from view but announceable by assistive technology screen readers.'
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
.preview-explanation {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  margin: 0 0 0.5rem 0;
}
.dom-inspector-mock {
  margin-top: 0.5rem;
  font-size: 0.85rem;
  color: var(--vp-c-brand);
}
</style>
