# @agnosticui/render-lit

Lit/web-component renderer for [AgnosticUI](https://agnosticui.com) schema-driven UI (SDUI) nodes.

## Install

```bash
npm install @agnosticui/render-lit @agnosticui/schema agnosticui-core
```

## Peer dependencies

| Package | Version |
|---------|---------|
| `agnosticui-core` | `>=2.0.0-alpha.26` |
| `lit` | `^3.0.0` |

## Usage

```ts
import '@agnosticui/render-lit';
import type { AgNode } from '@agnosticui/schema';

const el = document.createElement('ag-dynamic-renderer');

el.nodes = [
  { id: 'btn-1', component: 'AgButton', label: 'Click me', on_click: 'SUBMIT' },
] satisfies AgNode[];

el.actions = {
  SUBMIT: () => console.log('submitted'),
};

document.body.appendChild(el);
```

## How it works

Registers an `<ag-dynamic-renderer>` custom element that accepts a `nodes` array of `AgNode` objects and an `actions` map. It renders into light DOM so child elements are accessible to parent frameworks.

Nodes reference each other by `id` via the `children` array; nodes not referenced as children are treated as roots. Actions are dispatched through the string-alias map — unknown aliases are silently ignored, providing an XSS boundary.
