# @agnosticui/render-vue

Vue renderer for [AgnosticUI](https://agnosticui.com) schema-driven UI (SDUI) nodes.

## Install

```bash
npm install @agnosticui/render-vue @agnosticui/schema agnosticui-core
```

## Peer dependencies

| Package | Version |
|---------|---------|
| `agnosticui-core` | `>=2.0.0-alpha.25` |
| `vue` | `>=3` |

## Usage

```vue
<script setup lang="ts">
import { AgDynamicRenderer } from '@agnosticui/render-vue';
import type { AgNode } from '@agnosticui/schema';

const nodes: AgNode[] = [
  { id: 'btn-1', component: 'AgButton', label: 'Click me', on_click: 'SUBMIT' },
];

const actions = {
  SUBMIT: () => console.log('submitted'),
};
</script>

<template>
  <AgDynamicRenderer :nodes="nodes" :actions="actions" />
</template>
```

## How it works

`AgDynamicRenderer` takes a flat array of `AgNode` objects and renders the corresponding AgnosticUI Vue components. Nodes reference each other by `id` via the `children` array; nodes not referenced as children are treated as roots.

Actions are dispatched through a string-alias map (`:actions` prop) — unknown aliases are silently ignored, providing an XSS boundary.
