<script setup lang="ts">
import { ref, watch, onUnmounted } from 'vue';
import { AgDynamicRenderer } from '@agnosticui/render-vue';
import type { AgNode } from '@agnosticui/schema';
import { AG_FACE_SELECTOR } from '@agnosticui/schema';
import { VueCollapsible } from 'agnosticui-core/collapsible/vue';
import type { CollapsibleToggleEvent } from 'agnosticui-core/collapsible';
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
    <VueCollapsible
      class="node-panel"
      :open="panelOpen"
      @toggle="handleCollapsibleToggle"
    >
      <template #summary>Node array</template>
      <pre class="node-panel-pre">{{ JSON.stringify(nodes, null, 2) }}</pre>
    </VueCollapsible>
    <AgDynamicRenderer :nodes="nodes" :actions="actions" />
  </div>
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
