# Schema-Driven UI (SDUI)

**Schema-Driven UI** is an experimental runtime layer that lets you describe a screen as a
plain JSON array and render it with any AgnosticUI framework adapter — no templates, no
per-screen components.

The renderer is stateless. Swap the node array and the UI updates. That simplicity is the
whole point.

::: tip Early access
SDUI is new and evolving. The API is stable enough to build with, but not yet published to
npm. Feedback welcome via [GitHub issues](https://github.com/AgnosticUI/agnosticui/issues).
:::

---

## Live demos

Three identical apps, three frameworks. Each demo shows the same contact form, login form,
and pricing workflow — rendered entirely from JSON at runtime, with skin switching and dark
mode support.

| Framework | Demo |
|-----------|------|
| React | [agnosticui-demo-react.netlify.app](https://agnosticui-demo-react.netlify.app/) |
| Vue | [agnosticui-demo-vue.netlify.app](https://agnosticui-demo-vue.netlify.app/) |
| Lit | [agnosticui-demo-lit.netlify.app](https://agnosticui-demo-lit.netlify.app/) |

---

## How it works

A **node** is a plain object with an `id`, a `component` name, and optional props:

```ts
{ id: 'hero-btn', component: 'AgButton', variant: 'primary', on_click: 'SUBMIT_FORM' }
```

A **node array** is a flat list of nodes. Children are referenced by ID, not nested —
the renderer resolves the tree at render time:

```ts
const nodes: AgNode[] = [
  { id: 'form',       component: 'AgFieldset', children: ['name-input', 'email-input', 'submit-btn'] },
  { id: 'name-input', component: 'AgInput',    label: 'Full name', required: true },
  { id: 'email-input',component: 'AgInput',    label: 'Email', type: 'email', required: true },
  { id: 'submit-btn', component: 'AgButton',   variant: 'primary', on_click: 'SUBMIT_FORM' },
]
```

Pass the array and an actions map to the renderer:

::: code-group

```tsx [React]
import { AgDynamicRenderer } from '@agnosticui/render-react'

<AgDynamicRenderer nodes={nodes} actions={{ SUBMIT_FORM: () => handleSubmit() }} />
```

```vue [Vue]
<AgDynamicRenderer :nodes="nodes" :actions="{ SUBMIT_FORM: () => handleSubmit() }" />
```

```ts [Lit]
html`<ag-dynamic-renderer .nodes=${nodes} .actions=${{ SUBMIT_FORM: () => handleSubmit() }}></ag-dynamic-renderer>`
```

:::

---

## Supported components

All 50+ AgnosticUI components are available as SDUI nodes. The `component` field is the
PascalCase component name (`AgButton`, `AgInput`, `AgCard`, etc.). Props map directly to
the component's documented props.

A small set of inherently-stateful components (Dialog, Drawer, Toast, Collapsible) are
excluded — SDUI nodes are stateless and cannot own open/close lifecycle.

---

## Action dispatch

When a user clicks a button with `on_click: 'SOME_ALIAS'`, the renderer looks up
`'SOME_ALIAS'` in the `actions` map you provided and calls it. That's it.

```ts
const actions = {
  SUBMIT_FORM: () => { /* validate, call API, swap nodes, etc. */ },
  GO_BACK:     () => setStep(1),
  VIEW_PLANS:  () => runStream(pricingFixture),
}
```

Aliases are plain strings — the renderer never `eval`s them. You own the logic entirely.

---

## Form validation (FACE)

SDUI works naturally with AgnosticUI's [FACE components](/docs/form-association). Because
`ag-dynamic-renderer` renders into the light DOM, you can query FACE elements directly
and call `reportValidity()` before advancing to the next step:

```ts
import { AG_FACE_SELECTOR } from '@agnosticui/schema'

function validateOutput(container: Element | null): boolean {
  if (!container) return true
  const elements = container.querySelectorAll(AG_FACE_SELECTOR)
  let valid = true
  elements.forEach(el => {
    if (typeof (el as HTMLInputElement).reportValidity === 'function') {
      if (!(el as HTMLInputElement).reportValidity()) valid = false
    }
  })
  return valid
}
```

Call this inside your action handler before swapping the node array. The browser shows
native validation popovers on any failing field and the transition is blocked until all
fields pass.

---

## Streaming

`AgDynamicRenderer` accepts a partial array and updates incrementally as new nodes
arrive. This lets you stream UI from a server or LLM token-by-token:

```ts
async function streamNodes(fixture: AgNode[]) {
  for (const node of fixture) {
    await delay(80)            // simulate streaming latency
    setNodes(prev => [...prev, node])
  }
}
```

Each push triggers a re-render that adds exactly one more element. Existing nodes do not
re-mount.

---

## Validation and schema

Every node is validated against a Zod schema before rendering. Invalid nodes are dropped
with a console warning rather than crashing the renderer. The full schema is available
for pre-validating server payloads:

```ts
import { validateGraph } from '@agnosticui/schema'

const result = validateGraph(nodes)
if (!result.success) {
  console.warn(result.errors)
}
```

---

## Further reading

- [`v2/schema/SPECIFICATION.md`](https://github.com/AgnosticUI/agnosticui/blob/master/v2/schema/SPECIFICATION.md) — full technical specification covering the node model, codegen pipeline, action semantics, slot model, streaming, and versioning policy
- [`v2/schema/SYSTEM_PROMPT.md`](https://github.com/AgnosticUI/agnosticui/blob/master/v2/schema/SYSTEM_PROMPT.md) — condensed reference for LLM consumers generating node arrays
- [Form Association (FACE)](/docs/form-association) — how AgnosticUI form components work without a `<form>` wrapper
- [GitHub: AgnosticUI/agnosticui](https://github.com/AgnosticUI/agnosticui) — source for all three renderer packages and demo apps
