<script setup lang="ts">
import { ref, watch } from 'vue';
import { AgDynamicRenderer } from '@agnosticui/render-vue';
import type { AgNode } from '@agnosticui/schema';
import { pickVariation } from '../../../demo/src/fixtures/index';
import { streamFixture } from '../../../demo/src/lib/stream';

const props = defineProps<{ workflow: string; seed: number }>();

const nodes = ref<AgNode[]>([]);

watch(
  () => [props.workflow, props.seed] as const,
  async ([workflow], _prev, onCleanup) => {
    let cancelled = false;
    onCleanup(() => { cancelled = true; });
    nodes.value = [];
    const fixture = pickVariation(workflow);
    for await (const node of streamFixture(fixture)) {
      if (cancelled) break;
      nodes.value = [...nodes.value, node];
    }
  },
  { immediate: true },
);
</script>

<template>
  <AgDynamicRenderer :nodes="nodes" />
</template>
