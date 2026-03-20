# AgnosticUI SDUI Specification — v1

This document is the authoritative reference for the AgnosticUI Server-Driven UI (SDUI) system.
It covers the node model, validation pipeline, codegen contract, action dispatch semantics, and
streaming assumptions.

Related files:
- `v2/schema/README.md` — developer quick-start
- `v2/schema/SYSTEM_PROMPT.md` — terse LLM tool definition
- `v2/schema/scripts/codegen.config.ts` — annotated source of design decisions

---

## 1. Node Model

### 1.1 Shape of `AgNode`

Every SDUI node is a plain JSON object (an `AgNode`) with exactly two required fields:

| Field | Type | Description |
|---|---|---|
| `id` | `string` | Unique identifier within the graph. Scoped per render call; not globally unique. |
| `component` | `string` (literal) | Selects the component variant. Must be one of the registered names (e.g. `"AgButton"`). |

All other fields are optional and component-specific. Every field must match the Zod schema for its
component exactly; unknown props cause validation failure (schemas use `.strict()`).

### 1.2 The Discriminated Union

`AgNode` is a TypeScript discriminated union exported from `src/types.ts`:

```ts
export type AgNode =
  | AgButtonNode
  | AgCardNode
  | AgInputNode
  | // ... (one member per registered component)
```

The `component` field is the discriminant. Each member is a separate `Ag*Node` interface with its
own set of optional props. This means TypeScript (and Zod) can give precise per-component errors
rather than generic "unexpected prop" messages.

### 1.3 Children Arrays

Container components express nesting through a `children?: string[]` field. The value is an array
of `id` strings referencing sibling nodes in the same flat array — it is NOT a nested object tree.

```json
[
  { "id": "card-1", "component": "AgCard", "shadow": true, "children": ["email-input", "btn-submit"] },
  { "id": "email-input", "component": "AgInput", "label": "Email", "type": "email" },
  { "id": "btn-submit", "component": "AgButton", "label": "Submit", "variant": "primary" }
]
```

The renderer builds a `Map<id, AgNode>` at render time and resolves references from it. The array
can therefore be in any order. Nodes not referenced as `children` by any other node are treated as
roots and rendered in declaration order.

### 1.4 Renderer Primitive: AgText

`AgText` is a renderer-only node type with no AgnosticUI core component counterpart. It renders a
plain HTML element with text content. It is defined in `rendererPrimitives` inside `codegen.config.ts`
and appended verbatim to all generated output files.

```ts
interface AgTextNode {
  id: string;
  component: 'AgText';
  text: string;                               // required
  el?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'label'; // defaults to 'span'
  children?: string[];
}
```

---

## 2. Validation Contract

### 2.1 `validate(value, options?)`

Single-node entry point. Wraps `AgNodeSchema.safeParse()`.

```ts
import { validate } from '@agnosticui/schema';

const result = validate(unknownValue);
if (result.success) {
  // result.data is a fully typed AgNode
} else {
  // result.errors: string[]  — "field.path: message" format, always present
  // result.hints: string[]   — actionable developer suggestions, present in dev mode
}
```

**Dev mode** is enabled when `options.dev` is `true`, or when `process.env.NODE_ENV !== 'production'`
(defaulting to dev when the environment variable is absent). Dev hints include the component name,
the offending field, and a concrete correction suggestion.

### 2.2 `validateGraph(nodes, options?)`

Graph-level entry point. Validates each node individually, then checks that every `children` ID
reference resolves to another node within the same array.

```ts
import { validateGraph } from '@agnosticui/schema';

const result = validateGraph(nodes);
if (result.success) {
  // all nodes valid, all child refs resolve
} else {
  // result.errors: GraphNodeError[] — one entry per failing node
  // each GraphNodeError: { nodeId, errors: string[], hints?: string[] }
}
```

**Child ID resolution:** if a node lists `"children": ["btn-x"]` but no node with `id: "btn-x"`
exists in the array, `validateGraph` adds a `child ref "btn-x" not found in graph` error to that
node's `GraphNodeError`. Single-node `validate()` does not perform this check.

**Unknown `component` values:** `AgNodeSchema` is a strict discriminated union. A node with an
unrecognized `component` string fails validation with a Zod "invalid_union_discriminator" error.

---

## 3. Codegen Pipeline

All six output files (`schema.ts`, `types.ts`, `index.ts`, and the three renderers) are
AUTO-GENERATED. Never edit them by hand. Run `npm run codegen` from `v2/schema/` to regenerate.

### 3.1 Source of Truth

The codegen reads every `v2/lib/src/components/*/core/_*.ts` file via ts-morph, extracts the
`*Props` interface, and derives the SDUI schema from it. The `codegen.config.ts` file contains
all design decisions that cannot be auto-detected from the source types.

### 3.2 `omitConfig`

Non-function props to exclude per component. Only needed for props that are runtime-stateful or
render-internal and cannot be expressed as a static JSON value:

- `AgButton`, `AgButtonFx`: `toggle`, `pressed` — toggle mode and current press state require JS tracking
- `AgCheckbox`: `indeterminate`, `theme` — tri-state requires programmatic setting; theme is an internal CSS hook
- `AgIconButton`, `AgIconButtonFx`: `pressed` — current toggle state
- `AgToggle`, `AgRating`, `AgSelectionButtonGroup`, `AgSelectionCardGroup`: `validationMessages` — complex nested object; `errorMessage` covers SDUI needs
- `AgScrollProgress`: `target` — HTMLElement reference, not JSON-serializable
- `AgPagination`: `offset`, `navigationLabels` — complex non-scalar types
- `AgSlider`: `value` — accepts a `number | [number, number]` tuple; not a simple JSON scalar

Function-typed props are auto-detected by type inspection and do not need to be listed here.

### 3.3 `actionAliasMap`

Maps each function prop name from the core interface to its SDUI string alias. Props in this map
get an optional `string` field in the generated schema (e.g. `on_click?: string`). Props not in
this map are silently dropped; low-level browser events (`onFocus`, `onBlur`, `onInput`) are not
SDUI-actionable and are intentionally excluded.

```ts
onClick              -> on_click
onChange             -> on_change
onTagRemove          -> on_remove
onAlertDismiss       -> on_dismiss
onDialogOpen         -> on_open   // also onDrawerOpen
onDialogClose        -> on_close  // also onDrawerClose
onDialogCancel       -> on_cancel // also onDrawerCancel
onShow               -> on_show   // Popover
onHide               -> on_hide   // Popover, Tooltip
onSelectionChange    -> on_change // SelectionCardGroup
```

### 3.4 `rendererSlotConfig`

Controls how each component renders its slot content. Components not listed default to `'none'`.

| Value | Behavior | Example components |
|---|---|---|
| `'none'` | Self-contained; no slot content emitted | AgInput, AgToggle, AgAvatar |
| `'label-child'` | Renders `node.label` as text content | AgButton, AgButtonFx |
| `'children'` | Renders child nodes recursively | AgCard, AgAlert, AgFieldset, AgTabs, AgSelectionCardGroup |

The renderer switches on this value at code-generation time, not at runtime — the decision is baked
into the emitted renderer switch case for each component.

### 3.5 `skipComponents`

Component directory names excluded from all generated output. These require controlled runtime state
that cannot be expressed as a static node:

| Component | Reason |
|---|---|
| Collapsible | open/close state |
| Combobox | complex filtering and multi-select state |
| Menu | open state and selected-value tracking |
| Pagination | current-page state |
| ScrollProgress | live scroll-position tracking — purely behavioral |
| ScrollToButton | scroll-detection behavioral component |
| Sidebar | open and collapsed state management |
| SidebarNav | no Props interface; pure slot composition |
| Slider | continuous value state requires two-way binding |
| Toast | autoDismiss and open/close lifecycle |
| VisuallyHidden | no Props interface; pure slot wrapper |

Future issues (#375 and related) track proposals for adding stateful SDUI support for a subset of
these (Combobox, Menu, Pagination, Sidebar, Slider, Toast).

### 3.6 `typeOverrides`

Explicit TypeScript type and Zod expression overrides for specific component props. Used when the
auto-detected type from the source interface is not what the SDUI schema should expose:

- `AgInput.type`: `InputType` in core includes `'textarea'`; SDUI excludes it because textarea is a
  fundamentally different HTML element and is treated as a separate SDUI concern.
- `AgDialog.drawerPosition`: ts-morph cannot resolve the local `EdgePosition` alias, so the enum
  members are spelled out explicitly.
- `AgPopover.placement`, `AgTooltip.placement`: ts-morph cannot resolve the `Placement` type from
  `@floating-ui/dom` (an external package) in CI, so the enum is spelled out.
- `AgRating.variant`: ts-morph resolves `RatingVariant` differently across environments; locked
  down explicitly for consistency.

### 3.7 `noUndefinedProps`

A narrow config for React-only rendering. Some Lit element props are `reflect: true` decorators
used in CSS attribute selectors (`:host([size="md"])`). Passing `undefined` via `@lit/react` removes
the attribute and breaks the CSS variable chain even when the component has constructor defaults.

For these props the codegen emits a conditional spread:
```tsx
{...(node.size !== undefined ? { size: node.size } : {})}
```
instead of the normal `size={node.size}`.

Affected: `AgToggle` (`size`, `variant`), `AgInput` (`value`, `size`).

### 3.8 `rendererPrimitives`

Hand-maintained node types that have no AgnosticUI core component counterpart. Each primitive
includes verbatim code blocks for the schema, types, and all three renderer switch cases. The
codegen appends them after the discovered-component output on every run.

Currently registered: `AgText`.

---

## 4. Stateful Component Policy

A component is considered "stateful" for SDUI purposes when its meaningful behavior requires
JS-tracked mutable state that cannot be expressed in the initial node props. The test is:

> Can the component render correctly given only a plain JSON object, with no subsequent imperative
> calls, event listeners, or framework reactivity?

Components that fail this test are listed in `skipComponents` and excluded from all generated output.
Components with partial state concerns (like `AgDialog` and `AgDrawer`, which have an `open` prop)
are included in the schema but their stateful lifecycle events (open/close/cancel) are wired as
action aliases so the caller can respond to them.

**Dialog and Drawer** are included despite having open/close state because:
1. `open` is a static boolean that can be set in the fixture.
2. The open/close lifecycle fires as action aliases (`on_open`, `on_close`, `on_cancel`) so the
   caller's actions map can respond without any renderer changes.
3. This is sufficient for SDUI's primary use case: AI-generated UI where the LLM sets initial state.

---

## 5. Action Dispatch Semantics

### 5.1 String Alias Resolution

All interactivity in SDUI is expressed as string aliases on node props (`on_click`, `on_change`,
`on_dismiss`, etc.). These are plain strings, not function references or expressions.

At render time, the renderer wires each alias to a lookup in the caller-supplied `actions` map:

```ts
// Emitted by codegen for AgButton:
onClick={() => dispatch(node.on_click, actions)}

// dispatch implementation (identical across all three renderers):
function dispatch(alias: string | undefined, actions: Actions): void {
  if (alias && actions[alias]) actions[alias]();
}
```

For events that carry a payload (currently `onSelectionChange`), the renderer emits a one-argument
lambda and passes the extracted value to the action function:

```ts
// React:
onSelectionChange={(e) => dispatch(node.on_change, actions, (e as CustomEvent<{value:string}>).detail.value)}
// Vue (wrappers emit detail directly, not wrapped in CustomEvent):
onSelectionChange={(e) => dispatch(node.on_change, actions, (e as {value:string}).value)}
```

### 5.2 XSS Boundary

The actions map is the only security boundary between SDUI node data and executable code. Three
invariants hold by construction:

1. Action values in nodes are `string | undefined`. There is no `eval()`, `Function()`, or dynamic
   import in any renderer.
2. Only keys present in the caller-supplied `actions` map are ever called. An unknown alias is
   silently ignored (the `dispatch` function no-ops when `actions[alias]` is `undefined`).
3. The caller controls the complete set of callable functions at mount time. A node cannot add new
   entries to the actions map or call any function not already registered.

This means an LLM-generated node can name any alias string, but it can only trigger behavior that
the host application already chose to expose.

### 5.3 Unknown Alias Behavior

If a node carries `on_click: "LAUNCH_MISSILES"` but `actions` does not have a `"LAUNCH_MISSILES"`
key, the click event fires, `dispatch` looks up the key, finds `undefined`, and returns without
doing anything. No error is thrown; no warning is logged.

---

## 6. Slot / Children Model

The three slot modes (`none`, `label-child`, `children`) are described in section 3.4 above.
This section adds implementation notes.

### 6.1 Root Detection

The renderer identifies root nodes (nodes to render at the top level) by building a set of all IDs
referenced as children, then treating every node whose ID is NOT in that set as a root. Roots are
rendered in array declaration order.

### 6.2 Recursive Rendering

When a node has `rendererSlot: 'children'`, the renderer recursively calls itself for each child
ID. The recursion bottoms out at leaf nodes (nodes with no `children` or with `rendererSlot: 'none'`).
Cycles in child references are not detected at render time — they should be caught by `validateGraph`
if needed.

### 6.3 `label-child` vs `children`

`label-child` is for components whose primary slot content is a short text string (the button
label). It reads `node.label` and renders it as the default slot. If the node also has `children`
IDs they are ignored for slot purposes (the label takes precedence).

`children` is for layout and container components. The `node.label` field (if present) is passed as
a prop, not as slot content.

---

## 7. Standard Schema Compliance

`AgNodeSchema` is a Zod v3 discriminated union. Zod v3 implements the
[Standard Schema](https://standardschema.dev) `v1` interface via the `~standard` property.

This means `AgNodeSchema` integrates without an adapter layer with any framework or tool that
accepts Standard Schema (e.g. TanStack Form, Conform, Valibot-compatible validators).

To use `AgNodeSchema` as a Standard Schema consumer:

```ts
import { AgNodeSchema } from '@agnosticui/schema';

// Standard Schema v1 interface
const result = AgNodeSchema['~standard'].validate(unknownValue);
if (result instanceof Promise) {
  // async path (Zod v3 is always synchronous, so this branch is unreachable)
}
```

Prefer the `validate()` wrapper for application code; it normalizes the output and handles dev hints.

---

## 8. Streaming Assumptions

### 8.1 Flat Array Model

The SDUI runtime uses an **array-at-a-time** model: the consumer receives a complete `AgNode[]`
and passes it to the renderer. There is no streaming of individual nodes or incremental graph
patching within a single render call.

### 8.2 Partial Arrays in Streaming Contexts

When an LLM streams a response token-by-token, the demo applications accumulate tokens and parse
the JSON array only after the full array delimiter (the closing `]`) arrives. The renderer is not
called with partial data.

If the consumer wants to show incremental feedback before the full array is available, it should
render a loading indicator at the application level — the renderer itself remains stateless and
receives only complete, valid arrays.

### 8.3 Rationale for Flat Array

A flat array (rather than a nested tree) was chosen because:
1. LLMs reliably emit flat lists; deeply nested JSON causes more hallucination and formatting errors.
2. Child references by ID are trivially parseable and diff-able.
3. The renderer builds an O(n) lookup map at mount time; there is no runtime cost to the flat structure.
4. `validateGraph` can check referential integrity in a single pass without tree traversal.

---

## 9. Versioning Policy

### 9.1 Current Version

The SDUI schema is at **v1**. The `component` enum values (e.g. `"AgButton"`) are the public API
surface. All field names and allowed values for each component are part of the v1 contract.

### 9.2 Breaking Changes

A breaking change is any modification that would cause a previously valid node to fail validation
or render differently. Examples:

- Removing a component from the registry (removing from `AgNodeSchema` discriminated union)
- Removing or renaming a field
- Narrowing an enum (removing an allowed value)
- Changing a field from optional to required

### 9.3 Non-Breaking Changes

- Adding a new component (new discriminant in the union)
- Adding a new optional field to an existing component
- Widening an enum (adding an allowed value)
- Adding a new `rendererPrimitive`

### 9.4 Communication

Breaking changes will be announced via:
1. A semver major version bump of `@agnosticui/schema` (and the renderer packages)
2. A `CHANGELOG.md` entry at the package root with a migration guide
3. A GitHub issue tagged `breaking-change` linking the affected components

Until `@agnosticui/schema` is published to npm (tracked in a future issue), the schema version is
communicated through the git tag on the `v2/schema/` directory.
