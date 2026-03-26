<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import type { AgNode } from '@agnosticui/schema';
import { AgDynamicRenderer } from '@agnosticui/render-vue';
import { collapsibleFixture } from '../../../demo/src/fixtures/collapsible-demo';
import { streamFixture } from '../../../demo/src/lib/stream';

const nodes = ref<AgNode[]>([]);
let cancelled = false;

async function runStream(fixture: AgNode[]) {
  cancelled = false;
  nodes.value = [];
  for await (const node of streamFixture(fixture)) {
    if (cancelled) break;
    nodes.value = [...nodes.value, node];
  }
}

onMounted(() => runStream(collapsibleFixture));
onUnmounted(() => { cancelled = true; });

const actions = {
  // When a collapsible toggles, open it and close all others (accordion behavior).
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
  <AgDynamicRenderer :nodes="nodes" :actions="actions" />
</template>
