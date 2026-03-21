# sdui-lit — SDUI Smoke Test (Lit)

Browser smoke test for `@agnosticui/render-lit`. Renders an AgnosticUI
contact form from a JSON payload using the Lit renderer.

## How it works

```
contactFormNodes.ts          (static JSON payload — the SDUI "wire format")
        |
        | AgNode[]
        v
<ag-dynamic-renderer>        (@agnosticui/render-lit — a LitElement)
  - validates each node
  - looks up node.component in the registry
  - sets properties directly on the custom element (light DOM render)
  - routes on_click / on_change through createDispatcher (XSS boundary)
        |
        | custom elements (light DOM)
        v
ag-button / ag-card ...      (Lit custom elements — the actual rendered UI)
```

The JSON payload is identical across all three smoke-test apps
(`sdui-react`, `sdui-vue`, `sdui-lit`), demonstrating that one SDUI
payload drives any framework renderer.

## Run

```sh
npm install
npm run dev       # dev server
npm run build     # production build
npm run preview   # preview build on port 5178
```

## Related

- `v2/schema/` — the `@agnosticui/schema` package (validation + types)
- `v2/renderers/lit/` — the renderer this app exercises
- `../sdui-react/`, `../sdui-vue/` — same payload, different renderers
- Issue #351 — AgnosticUI Agent-Ready SDUI framework PRD
