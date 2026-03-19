<script setup lang="ts">
import { ref } from 'vue';
import WorkflowPicker from './components/WorkflowPicker.vue';
import StreamingOutput from './components/StreamingOutput.vue';

const workflow = ref('contact-form');
const seed = ref(0);

const handleSelect = (next: string) => {
  workflow.value = next;
  seed.value = 0;
};

const handleRegenerate = () => {
  seed.value += 1;
};
</script>

<template>
  <div class="demo-layout">
    <header class="demo-header">
      <h1 class="demo-title">AgnosticUI — Schema-Driven UI Demo (Vue)</h1>
      <p class="demo-subtitle">
        Select a workflow below. The output renders from a validated
        <code>AgNode[]</code> graph with simulated streaming.
      </p>
    </header>

    <section class="demo-picker">
      <div class="demo-picker-section">
        <WorkflowPicker @select="handleSelect" />
      </div>
    </section>

    <section class="demo-output">
      <div class="demo-output-header">
        <span class="demo-output-label">Generated output</span>
        <button class="demo-regenerate" @click="handleRegenerate">
          Regenerate
        </button>
      </div>
      <div class="demo-output-body">
        <StreamingOutput :workflow="workflow" :seed="seed" />
      </div>
    </section>
  </div>
</template>

<style>
.demo-layout {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.demo-header {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.demo-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
}

.demo-subtitle {
  margin: 0;
  color: var(--ag-color-muted, #666);
  font-size: 0.95rem;
}

.demo-subtitle code {
  font-size: 0.85em;
  background: var(--ag-background-alt, #f4f4f5);
  padding: 0.1em 0.4em;
  border-radius: 4px;
}

.demo-output-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.demo-output-label {
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--ag-color-muted, #666);
}

.demo-regenerate {
  font-size: 0.85rem;
  padding: 0.35rem 0.85rem;
  border: 1px solid var(--ag-border-color, #d1d5db);
  border-radius: 6px;
  background: transparent;
  cursor: pointer;
  color: inherit;
}

.demo-regenerate:hover {
  background: var(--ag-background-alt, #f4f4f5);
}

.demo-picker-section {
  background: var(--ag-background-secondary, #f3f4f6);
  border: 1px solid var(--ag-border, #e5e7eb);
  border-radius: 8px;
  padding: 1.25rem;
}

.demo-picker-section label {
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--ag-color-muted, #666);
  margin-bottom: 0.75rem;
}
</style>
