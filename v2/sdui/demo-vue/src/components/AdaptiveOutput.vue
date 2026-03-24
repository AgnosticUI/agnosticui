<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import type { AgNode } from '@agnosticui/schema';
import { AgDynamicRenderer } from '@agnosticui/render-vue';
import { VueCollapsible } from 'agnosticui-core/collapsible/vue';
import type { CollapsibleToggleEvent } from 'agnosticui-core/collapsible';
import { step1Nodes, getNextNodes } from '../../../demo/src/fixtures/adaptive-questionnaire';
import { streamFixture } from '../../../demo/src/lib/stream';

const PANEL_AUTO_CLOSE_MS = 8000;

type ValidationError = { failingId: string; errorText: AgNode; errorAlert: AgNode };

function buildValidationErrors(nodeList: AgNode[], ans: Record<string, unknown>): ValidationError[] {
  const errors: ValidationError[] = [];
  for (const n of nodeList) {
    const raw = n as unknown as Record<string, unknown>;
    const val = ans[n.id];
    const label = String(raw['label'] || raw['legend'] || 'This field');
    let message: string | null = null;
    if (raw['required'] && (val === undefined || val === '')) {
      message = `${label} is required`;
    } else {
      const max = raw['max'] as string | undefined;
      if (max && typeof val === 'string' && val > max) {
        message = `${label} cannot be a future date`;
      }
      const min = raw['min'] as string | undefined;
      if (!message && min && typeof val === 'string' && val < min) {
        message = `${label} cannot be a past date`;
      }
    }
    if (message) {
      errors.push({
        failingId: n.id,
        errorText: { id: `${n.id}-error-text`, component: 'AgText', text: message } as AgNode,
        errorAlert: { id: `${n.id}-error-alert`, component: 'AgAlert', variant: 'danger', bordered: true, rounded: true, children: [`${n.id}-error-text`] } as AgNode,
      });
    }
  }
  return errors;
}

function injectValidationErrors(nodeList: AgNode[], errors: ValidationError[]): AgNode[] {
  const errorMap = new Map(errors.map(e => [e.failingId, e]));
  return nodeList.reduce<AgNode[]>((acc, n) => {
    acc.push(n);
    const err = errorMap.get(n.id);
    if (err) {
      acc.push(err.errorText);
      acc.push(err.errorAlert);
    }
    return acc;
  }, []);
}

const nodes = ref<AgNode[]>([]);
const answers = ref<Record<string, unknown>>({});
const panelOpen = ref(false);
let history: AgNode[][] = [];
let cancelStream: () => void = () => {};
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

async function runStream(fixture: AgNode[]) {
  cancelStream();
  let cancelled = false;
  cancelStream = () => { cancelled = true; };
  nodes.value = [];
  for await (const node of streamFixture(fixture)) {
    if (cancelled) break;
    nodes.value = [...nodes.value, node];
  }
}

const actions = {
  // Vue renderer passes { id, value } directly as the payload argument.
  ANSWER_CHANGE: (payload: unknown) => {
    const { id, value } = payload as { id: string; value: unknown };
    answers.value = { ...answers.value, [id]: value };
    const groupNode = nodes.value.find(n => n.id === id &&
      (n.component === 'AgSelectionButtonGroup' || n.component === 'AgSelectionCardGroup'));
    const groupChildren = groupNode
      ? ((groupNode as unknown as Record<string, unknown>)['children'] as string[] ?? [])
      : [];
    nodes.value = nodes.value
      .filter(n => n.id !== `${id}-error-text` && n.id !== `${id}-error-alert`)
      .map(n => {
        if (n.id === id && (n.component === 'AgSelectionButtonGroup' || n.component === 'AgSelectionCardGroup')) {
          return { ...n, value: value as string } as AgNode;
        }
        if (groupChildren.includes(n.id) && (n.component === 'AgSelectionButton' || n.component === 'AgSelectionCard')) {
          const btnRaw = n as unknown as Record<string, unknown>;
          return { ...n, checked: btnRaw['value'] === value } as AgNode;
        }
        return n;
      });
  },

  NEXT_STEP: () => {
    const errors = buildValidationErrors(nodes.value, answers.value);
    if (errors.length > 0) { nodes.value = injectValidationErrors(nodes.value, errors); return; }
    const next = getNextNodes(answers.value);
    history = [...history, nodes.value];
    openPanel();
    nodes.value = next;
  },

  PREV_STEP: () => {
    const prev = history[history.length - 1];
    if (!prev) return;
    history = history.slice(0, -1);
    nodes.value = prev;
  },

  SUBMIT: () => {
    const errors = buildValidationErrors(nodes.value, answers.value);
    if (errors.length > 0) { nodes.value = injectValidationErrors(nodes.value, errors); return; }
    const next = getNextNodes(answers.value);
    openPanel();
    nodes.value = next;
  },

  RESTART: () => {
    answers.value = {};
    history = [];
    openPanel();
    runStream(step1Nodes);
  },
};

onMounted(() => {
  openPanel();
  runStream(step1Nodes);
});

onUnmounted(() => {
  cancelStream();
  if (fadeTimer) clearTimeout(fadeTimer);
});
</script>

<template>
  <div>
    <VueCollapsible
      class="node-panel"
      :open="panelOpen"
      @toggle="handleCollapsibleToggle"
    >
      <template #summary>Accumulated answers</template>
      <pre class="node-panel-pre">{{ JSON.stringify(answers, null, 2) }}</pre>
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
