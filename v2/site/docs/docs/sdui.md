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

50 AgnosticUI components are available as SDUI nodes. The `component` field is the
PascalCase component name (`AgButton`, `AgInput`, `AgCard`, etc.). Props map directly to
the component's documented props.

A small number of components are excluded: `Collapsible` and `Toast` require open/close
lifecycle state that the stateless renderer cannot own. `Slider` and `Combobox` are
deferred pending schema design work.

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

Aliases are plain strings that you name yourself. They are not part of any protocol or
spec, and the renderer never `eval`s them. You own the naming and the logic entirely.

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

Each `reportValidity()` call asks the element to validate itself using whatever constraints
are declared on the node (`required`, `type="email"`, `minlength`, etc.) and show a native
browser tooltip if invalid. The loop collects all results so every failing field surfaces
at once rather than stopping at the first.

For logic that goes beyond built-in constraints, run a custom check before the loop and
use `setCustomValidity` to attach an error message the browser will display:

```ts
function validateOutput(container: Element | null): boolean {
  if (!container) return true

  // Custom check: phone must be exactly 10 digits
  const phoneEl = container.querySelector('ag-input[name="phone"]') as any
  if (phoneEl) {
    const ok = /^\d{10}$/.test(phoneEl.value ?? '')
    phoneEl.setCustomValidity(ok ? '' : 'Phone must be exactly 10 digits')
  }

  // Standard constraint validation across all FACE elements
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

Wire it into your action handler — the transition is blocked until all fields pass:

```ts
const actions = {
  SUBMIT_FORM: () => {
    if (!validateOutput(containerRef.current)) return
    runStream(confirmFixture)
  },
}
```

---

## Streaming

`AgDynamicRenderer` re-renders whenever its `nodes` prop changes. Because it diffs the
array rather than remounting, you can push one node at a time and the UI builds up
incrementally — exactly like watching an LLM stream tokens, except each token is a
fully-rendered component.

Here is the complete React picture:

```tsx
import { useState } from 'react'
import { AgDynamicRenderer } from '@agnosticui/render-react'
import type { AgNode } from '@agnosticui/schema'

function StreamingDemo({ fixture }: { fixture: AgNode[] }) {
  const [nodes, setNodes] = useState<AgNode[]>([])

  async function startStream() {
    setNodes([])                          // clear previous render
    for (const node of fixture) {
      await delay(80)                     // simulate network/LLM latency
      setNodes(prev => [...prev, node])   // one more node, one more re-render
    }
  }

  return (
    <>
      <button onClick={startStream}>Stream</button>
      {/* AgDynamicRenderer renders whatever is in `nodes` right now */}
      <AgDynamicRenderer nodes={nodes} actions={{}} />
    </>
  )
}
```

Each `setNodes` call gives `AgDynamicRenderer` a slightly longer array. It renders the
new node and leaves the existing ones untouched. When `fixture` comes from a real server
or LLM, replace `delay(80)` with your streaming read loop — the renderer does not care
where the nodes come from, only that the array grows.

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

- [`v2/sdui/schema/SPECIFICATION.md`](https://github.com/AgnosticUI/agnosticui/blob/master/v2/sdui/schema/SPECIFICATION.md) — full technical specification covering the node model, codegen pipeline, action semantics, slot model, streaming, and versioning policy
- [`v2/sdui/schema/SYSTEM_PROMPT.md`](https://github.com/AgnosticUI/agnosticui/blob/master/v2/sdui/schema/SYSTEM_PROMPT.md) — condensed reference for LLM consumers generating node arrays
- [Form Association (FACE)](/docs/form-association) — how AgnosticUI form components work without a `<form>` wrapper
- [GitHub: AgnosticUI/agnosticui](https://github.com/AgnosticUI/agnosticui) — source for all three renderer packages and demo apps
