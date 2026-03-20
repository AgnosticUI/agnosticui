<script setup lang="ts">
import { ref, watch } from 'vue';
import { AgDynamicRenderer } from '@agnosticui/render-vue';
import type { AgNode } from '@agnosticui/schema';
import { pickVariation, confirmFixtures, workflowActions } from '../../../demo/src/fixtures/index';
import { streamFixture } from '../../../demo/src/lib/stream';

// Only these aliases require form validation before advancing to step 2.
const FORM_ACTIONS = new Set(['SUBMIT_FORM', 'SUBMIT_LOGIN']);

const props = defineProps<{ workflow: string; seed: number }>();

const nodes = ref<AgNode[]>([]);
const actions = ref<Record<string, () => void>>({});
const wrapperEl = ref<HTMLElement | null>(null);

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
  const elements = container.querySelectorAll('ag-input, ag-checkbox, ag-toggle');
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

    // Rebuild actions map for the new workflow.
    const aliases = workflowActions[workflow] ?? {};
    const map: Record<string, () => void> = {};
    for (const [alias, confirmKey] of Object.entries(aliases)) {
      map[alias] = () => {
        if (FORM_ACTIONS.has(alias) && !validateOutput()) return;
        const fixture = confirmFixtures[confirmKey];
        if (fixture) runStream(fixture);
      };
    }
    actions.value = map;

    runStream(pickVariation(workflow));
  },
  { immediate: true },
);
</script>

<template>
  <div ref="wrapperEl">
    <AgDynamicRenderer :nodes="nodes" :actions="actions" />
  </div>
</template>
