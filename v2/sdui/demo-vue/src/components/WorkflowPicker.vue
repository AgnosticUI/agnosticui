<script setup lang="ts">
import { ref, computed } from 'vue';
import { AgDynamicRenderer } from '@agnosticui/render-vue';
import { pickerFixture } from '../../../demo/src/fixtures/picker';
import type { AgNode } from '@agnosticui/schema';

const emit = defineEmits<{ select: [workflow: string] }>();

const selected = ref('contact-form');

const nodes = computed<AgNode[]>(() =>
  pickerFixture.map(node =>
    node.id === 'picker-group' ? { ...node, value: selected.value } as AgNode : node
  )
);

const actions = {
  'workflow-select': (payload: unknown) => {
    const value = (payload as { id: string; value: string }).value;
    selected.value = value;
    emit('select', value);
  },
};
</script>

<template>
  <AgDynamicRenderer :nodes="nodes" :actions="actions" />
</template>
