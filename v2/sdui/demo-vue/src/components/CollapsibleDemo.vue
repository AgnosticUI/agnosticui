<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import type { AgNode } from '@agnosticui/schema';
import { AgDynamicRenderer } from '@agnosticui/render-vue';
import { VueCollapsible } from 'agnosticui-core/collapsible/vue';
import type { CollapsibleToggleEvent } from 'agnosticui-core/collapsible';
import { collapsibleFixture } from '../../../demo/src/fixtures/collapsible-demo';
import { streamFixture } from '../../../demo/src/lib/stream';

const PANEL_AUTO_CLOSE_MS = 8000;

const nodes = ref<AgNode[]>([]);
const panelOpen = ref(false);
let fadeTimer: ReturnType<typeof setTimeout> | null = null;
let cancelCurrentStream: () => void = () => {};

function openPanel() {
  panelOpen.value = true;
  if (fadeTimer) clearTimeout(fadeTimer);
  fadeTimer = setTimeout(() => { panelOpen.value = false; }, PANEL_AUTO_CLOSE_MS);
}

function handleCollapsibleToggle(e: CollapsibleToggleEvent) {
  const nowOpen = e.detail.open;
  panelOpen.value = nowOpen;
  if (nowOpen) {
    if (fadeTimer) clearTimeout(fadeTimer);
    fadeTimer = setTimeout(() => { panelOpen.value = false; }, PANEL_AUTO_CLOSE_MS);
  } else {
    if (fadeTimer) clearTimeout(fadeTimer);
  }
}

async function runStream(fixture: AgNode[]) {
  cancelCurrentStream();
  let cancelled = false;
  cancelCurrentStream = () => { cancelled = true; };
  nodes.value = [];
  for await (const node of streamFixture(fixture)) {
    if (cancelled) break;
    nodes.value = [...nodes.value, node];
  }
}

onMounted(() => { openPanel(); runStream(collapsibleFixture); });
onUnmounted(() => { cancelCurrentStream(); if (fadeTimer) clearTimeout(fadeTimer); });

const actions = {
  COLLAPSIBLE_TOGGLE: (payload: unknown) => {
    const { id, value } = payload as { id: string; value: boolean };
    nodes.value = nodes.value.map(n => {
      if (n.component !== 'AgCollapsible') return n;
      const raw = n as unknown as Record<string, unknown>;
      const newOpen = n.id === id ? value : (value ? false : raw['open'] as boolean);
      return { ...n, open: newOpen } as AgNode;
    });
  },
  SLIDER_CHANGE: (payload: unknown) => {
    const { value } = payload as { id: string; value: number };
    nodes.value = nodes.value.map(n =>
      n.id === 'slider-value' ? { ...n, text: `Count: ${value}` } as AgNode : n
    );
  },
};
</script>

<template>
  <VueCollapsible
    class="node-panel"
    :open="panelOpen"
    :onToggle="handleCollapsibleToggle"
  >
    <template #summary>Node array</template>
    <pre class="node-panel-pre">{{ JSON.stringify(nodes, null, 2) }}</pre>
  </VueCollapsible>
  <AgDynamicRenderer :nodes="nodes" :actions="actions" />
</template>

<style>
ag-collapsible.node-panel {
  display: block;
  border: 1px solid var(--ag-border, #e5e7eb);
  border-radius: 6px;
  overflow: hidden;
  margin-block-end: 1rem;
}

ag-collapsible.node-panel::part(ag-collapsible-summary) {
  padding: 0.4rem 0.75rem;
  background: var(--ag-background-secondary, #f3f4f6);
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--ag-text-muted, #666);
  font-family: monospace;
}

ag-collapsible.node-panel::part(ag-collapsible-indicator) {
  color: var(--ag-text-muted, #666);
}

ag-collapsible.node-panel::part(ag-collapsible-content) {
  padding: 0;
  border-top: 1px solid var(--ag-border, #e5e7eb);
  max-height: 320px;
  overflow-y: auto;
}

.node-panel-pre {
  margin: 0;
  padding: 0.75rem;
  font-family: monospace;
  font-size: 0.72rem;
  line-height: 1.5;
  color: var(--ag-text-primary, #111);
  background: var(--ag-background-primary, #fff);
  white-space: pre-wrap;
  word-break: break-all;
}
</style>
