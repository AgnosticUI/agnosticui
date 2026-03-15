# @agnosticui/schema

Schema definitions, Zod validation, and code generation for the AgnosticUI Server-Driven UI (SDUI) system.

## What is SDUI?

Server-Driven UI lets a server (or an LLM) describe a UI as a JSON node tree instead of sending HTML or framework-specific markup. The client receives that tree and renders it using its own component library — so the same JSON drives React, Vue, and Lit renderers with no client-side logic changes.

AgnosticUI uses this to let AI assistants generate valid, safe UI by emitting `AgNode[]` arrays. The schema package enforces what is valid, and the renderer packages turn it into real components.

## Code flow

```
v2/lib/src/components/*/core/_*.ts   (source of truth: TypeScript interfaces)
         |
         | npm run codegen  (from v2/schema/)
         v
v2/schema/src/types.ts        AgNode union type + per-component interfaces
v2/schema/src/schema.ts       Zod discriminated-union schema for every component
v2/schema/src/index.ts        Re-exports types, schemas, and validate()
         |
         | same codegen run
         v
v2/renderers/react/src/AgDynamicRenderer.tsx
v2/renderers/vue/src/AgDynamicRenderer.ts
v2/renderers/lit/src/AgDynamicRenderer.ts
```

All six files are **AUTO-GENERATED**. Never edit them by hand. Edit the core interfaces or `codegen.config.ts` and re-run codegen.

## Running codegen

```bash
cd v2/schema
npm run codegen
```

This reads every `v2/lib/src/components/*/core/_*.ts` file via ts-morph, extracts the `*Props` interface for each component, and regenerates all six output files.

## Checking for drift

```bash
cd v2/schema
npm run check-codegen
```

Generates all six files in memory and diffs them against the committed versions. Exits non-zero with a diff and exact `git add` instructions if anything is out of sync. CI runs this automatically on any PR touching `v2/lib/src/components/**`, `v2/schema/**`, or `v2/renderers/**`.

## Package contents

### `src/types.ts`

One `Ag*Node` interface per component, plus the `AgNode` discriminated union and `AgComponentName` type. Each interface has `id`, `component` (literal string), optional props derived from the core interface, and `children?: string[]` for nesting.

### `src/schema.ts`

One `Ag*Schema` Zod object per component, plus `AgNodeSchema` — a `z.discriminatedUnion('component', [...])` that validates any node against the correct component schema. Compatible with the [Standard Schema](https://standardschema.dev) spec.

### `src/validate.ts`

```ts
import { validate } from '@agnosticui/schema';

const result = validate(unknownNode);
if (result.success) {
  // result.data is a typed AgNode
} else {
  // result.errors is string[] with "field.path: message" entries
}
```

`validate()` wraps `AgNodeSchema.safeParse()` and normalizes Zod errors into human-readable strings. Use it at the boundary where untrusted JSON enters your system (API response, LLM tool call output, etc.).

## Renderer packages

Each renderer consumes a flat `AgNode[]` and an optional `actions` map:

```ts
// React
<AgDynamicRenderer nodes={nodes} actions={actions} />

// Vue
<AgDynamicRenderer :nodes="nodes" :actions="actions" />

// Lit
const el = document.querySelector('ag-dynamic-renderer');
el.nodes = nodes;
el.actions = actions;
```

Nodes not referenced as `children` by any other node are treated as roots. Child references are resolved from a `Map<id, AgNode>` built at render time, so the array can be in any order.

### The `actions` map and XSS boundary

Function props (onClick, onChange, etc.) are replaced in the schema with optional string aliases (`on_click`, `on_change`, etc.). The renderer dispatches them against the caller-supplied map:

```ts
onClick={() => dispatch(node.on_click, actions)}

function dispatch(alias: string | undefined, actions: Actions): void {
  if (alias) actions[alias]?.();
}
```

Only keys present in the `actions` map are ever called. An unknown alias is silently ignored. There is no `eval()`, no dynamic code execution, and no way for a JSON node to inject arbitrary behavior. The caller controls the full set of callable functions at mount time.

## `codegen.config.ts`

Four configuration objects control what codegen emits.

### `omitConfig`

Non-function props to exclude per component. Only needed for props that are runtime-stateful and cannot be expressed as a static JSON value (for example `toggle`/`pressed` require JS to track state; `indeterminate` is a tri-state that must be set programmatically). Do not list function-typed props here; they are auto-detected.

```ts
// Adding a new runtime-state prop to omit:
AgMyComponent: ['myStatefulProp'],
```

### `actionAliasMap`

Maps function prop names to their SDUI string alias. Props in this map get an optional `string` prop in the schema instead of being dropped. Props not in this map are silently dropped (low-level events like `onFocus` and `onBlur` are not SDUI-actionable).

```ts
onMyEvent: 'on_my_event',
```

### `rendererSlotConfig`

Controls how each component renders its content slot:

| Value | Behavior |
|---|---|
| `'none'` (default) | Self-contained, no slot content emitted |
| `'label-child'` | Renders `node.label` as text content (used by Button, ButtonFx) |
| `'children'` | Renders child nodes recursively (used by Alert, Card, Fieldset, etc.) |

### `skipComponents`

Component directory names excluded from all generated output. These require controlled runtime state that cannot be expressed in a static node tree (Dialog, Drawer, Toast, Slider, etc.). See issue #375 for the stateful SDUI design discussion.

### `typeOverrides`

Explicit TS type and Zod expression overrides for specific props. Use when the auto-detected type from the source interface is not what the SDUI schema should expose.

```ts
// AgInput.type excludes 'textarea' because textarea is a separate SDUI concern:
AgInput: {
  type: {
    tsType: "'text' | 'password' | 'email' | ...",
    zodExpr: "z.enum(['text', 'password', 'email', ...])",
  },
},
```

## M4 LLM test harness

"M4" is shorthand for claude-sonnet-**4** (the Claude 4 model family used in this test). `m4-llm-test.ts` is a smoke test that sends the `render_ui` tool definition to Claude and validates every returned node against the schema. It confirms that Claude does not hallucinate props and produces structurally correct output.

```bash
# Live run (requires an API key from console.anthropic.com)
ANTHROPIC_API_KEY=sk-... npm run m4

# Dry run (validates a hardcoded representative payload, no network needed)
npm run m4:dry
```

Claude Pro / Claude Code OAuth credentials do not work here. The Anthropic API requires a separate key (free tier available at console.anthropic.com, no paid plan required for low-volume testing).

## Standard Schema compliance

`AgNodeSchema` is a Zod v3 schema, which implements the [Standard Schema](https://standardschema.dev) `v1` interface via the `~standard` property. This means it integrates with any framework adapter that accepts Standard Schema without an additional adapter layer.
