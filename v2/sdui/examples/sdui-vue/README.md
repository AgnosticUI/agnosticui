# sdui-vue — SDUI Smoke Test (React)

Browser smoke test for `@agnosticui/render-vue`. Renders an AgnosticUI
contact form from a JSON payload using the Vue renderer.

## How it works

```
contactFormNodes.ts          (static JSON payload — the SDUI "wire format")
        |
        | AgNode[]
        v
AgDynamicRenderer            (@agnosticui/render-vue)
  - validates each node
  - looks up node.component in the registry
  - spreads props onto the existing React wrapper
  - routes on_click / on_change through createDispatcher (XSS boundary)
        |
        | Vue vnodes
        v
VueButton / VueCard      (existing hand-rolled Vue adapters in agnosticui-core)
        |
        v
ag-button / ag-card ...      (Lit custom elements — the actual rendered UI)
```

The JSON payload is identical across all three smoke-test apps
(`sdui-vue`, `sdui-vue`, `sdui-lit`), demonstrating that one SDUI
payload drives any framework renderer.

## Run

```sh
npm install
npm run dev       # dev server
npm run build     # production build
npm run preview   # preview build on port 5177
```

## Related

- `v2/schema/` — the `@agnosticui/schema` package (validation + types)
- `v2/renderers/react/` — the renderer this app exercises
- `../sdui-vue/`, `../sdui-lit/` — same payload, different renderers
- Issue #351 — AgnosticUI Agent-Ready SDUI framework PRD
