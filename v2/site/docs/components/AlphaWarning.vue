<template>
  <div class="alpha-warning">
    <div class="alpha-warning-header">
      <AlertCircle :size="20" />
      <span class="alpha-warning-title">Experimental Alpha</span>
    </div>
    <p class="alpha-warning-text">
      This library is a work-in-progress. We are releasing it early to gather feedback, but it is not ready for production.
    </p>
  </div>
</template>

<script setup>
import { AlertCircle } from 'lucide-vue-next';
</script>

<style scoped>
.alpha-warning {
  background-color: var(--vp-custom-block-warning-bg, #fef3cd);
  border: 1px solid var(--vp-custom-block-warning-border, #f0ad4e);
  border-left: 4px solid var(--vp-custom-block-warning-border, #f0ad4e);
  border-radius: 4px;
  padding: 16px;
  margin: 16px 0 24px;
}

.vp-doc .dark .alpha-warning {
  background-color: rgba(234, 179, 8, 0.1);
  border-color: rgba(234, 179, 8, 0.5);
}

.alpha-warning-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  color: var(--vp-custom-block-warning-text, #8a6d3b);
}

.vp-doc .dark .alpha-warning-header {
  color: rgba(234, 179, 8, 1);
}

.alpha-warning-title {
  font-weight: 600;
  font-size: 16px;
}

.alpha-warning-text {
  margin: 0;
  color: var(--vp-custom-block-warning-text, #8a6d3b);
  line-height: 1.6;
}

.vp-doc .dark .alpha-warning-text {
  color: rgba(234, 179, 8, 0.9);
}
</style>
