<script setup lang="ts">
import { ref, watch, onUnmounted } from 'vue';
import { AgDynamicRenderer } from '@agnosticui/render-vue';
import type { AgNode } from '@agnosticui/schema';
import { AG_FACE_SELECTOR } from '@agnosticui/schema';
import { pickVariation, confirmFixtures, workflowActions } from '../../../demo/src/fixtures/index';
import { streamFixture } from '../../../demo/src/lib/stream';

const PANEL_AUTO_CLOSE_MS = 8000;

const props = defineProps<{ workflow: string; seed: number }>();

const nodes = ref<AgNode[]>([]);
const actions = ref<Record<string, () => void>>({});
const wrapperEl = ref<HTMLElement | null>(null);
const panelOpen = ref(false);
let fadeTimer: ReturnType<typeof setTimeout> | null = null;

function openPanel() {
  panelOpen.value = true;
  if (fadeTimer) clearTimeout(fadeTimer);
  fadeTimer = setTimeout(() => { panelOpen.value = false; }, PANEL_AUTO_CLOSE_MS);
}

function togglePanel() {
  if (panelOpen.value) {
    if (fadeTimer) clearTimeout(fadeTimer);
    panelOpen.value = false;
  } else {
    openPanel();
  }
}

let cancelCurrentStream: () => void = () => {};

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

function validateOutput(): boolean {
  const container = wrapperEl.value;
  if (!container) return true;
  const elements = container.querySelectorAll(AG_FACE_SELECTOR);
  let valid = true;
  elements.forEach(el => {
    if (typeof (el as HTMLInputElement).reportValidity === 'function') {
      if (!(el as HTMLInputElement).reportValidity()) valid = false;
    }
  });
  return valid;
}

// Reset to step 1 when workflow or seed changes.
watch(
  () => [props.workflow, props.seed] as const,
  ([workflow], _prev, onCleanup) => {
    onCleanup(() => cancelCurrentStream());

    openPanel();

    // Rebuild actions map for the new workflow.
    const aliases = workflowActions[workflow] ?? {};
    const map: Record<string, () => void> = {};
    for (const [alias, confirmKey] of Object.entries(aliases)) {
      map[alias] = () => {
        if (!validateOutput()) return;
        const fixture = confirmFixtures[confirmKey];
        if (fixture) { openPanel(); runStream(fixture); }
      };
    }
    actions.value = map;

    runStream(pickVariation(workflow));
  },
  { immediate: true },
);

onUnmounted(() => { if (fadeTimer) clearTimeout(fadeTimer); });
</script>

<template>
  <div ref="wrapperEl">
    <div class="node-panel">
      <div class="node-panel-header">
        <span class="node-panel-label">Node array</span>
        <button class="node-panel-toggle" @click="togglePanel">
          {{ panelOpen ? 'Hide' : 'Show' }}
        </button>
      </div>
      <div :class="['node-panel-body', panelOpen ? 'is-open' : '']">
        <pre class="node-panel-pre">{{ JSON.stringify(nodes, null, 2) }}</pre>
      </div>
    </div>
    <AgDynamicRenderer :nodes="nodes" :actions="actions" />
  </div>
</template>

<style>
.node-panel {
  border: 1px solid var(--ag-border, #e5e7eb);
  border-radius: 6px;
  margin-block-end: 1rem;
  overflow: hidden;
}

.node-panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.4rem 0.75rem;
  background: var(--ag-background-secondary, #f3f4f6);
  border-bottom: 1px solid var(--ag-border, #e5e7eb);
}

.node-panel-label {
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--ag-text-muted, #666);
  font-family: monospace;
}

.node-panel-toggle {
  font-size: 0.7rem;
  cursor: pointer;
  padding: 0.15rem 0.5rem;
  border: 1px solid var(--ag-border, #ccc);
  border-radius: 4px;
  background: transparent;
  color: var(--ag-text-muted, #666);
  font-family: inherit;
  line-height: 1.4;
}

.node-panel-toggle:hover {
  background: var(--ag-border, #e5e7eb);
}

.node-panel-body {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease;
}

.node-panel-body.is-open {
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
