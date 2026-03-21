# sdui-react — SDUI Smoke Test (React)

Browser smoke test for `@agnosticui/render-react`. Renders an AgnosticUI
contact form from a JSON payload using the React renderer.

## How it works

```
contactFormNodes.ts          (static JSON payload — the SDUI "wire format")
        |
        | AgNode[]
        v
AgDynamicRenderer            (@agnosticui/render-react)
  - validates each node
  - looks up node.component in the registry
  - spreads props onto the existing React wrapper
  - routes on_click / on_change through createDispatcher (XSS boundary)
        |
        | React elements
        v
ReactButton / ReactCard      (existing @lit/react wrappers in agnosticui-core)
        |
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
npm run preview   # preview build on port 5176
```

## Related

- `v2/sdui/schema/` — the `@agnosticui/schema` package (validation + types)
- `v2/sdui/renderers/react/` — the renderer this app exercises
- `../sdui-vue/`, `../sdui-lit/` — same payload, different renderers
- Issue #351 — AgnosticUI Agent-Ready SDUI framework PRD
