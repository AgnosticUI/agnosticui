# LLM Prompt Guide: Generating AgNode Graphs

This guide explains how to instruct a large language model to emit `AgNode[]` arrays for the AgnosticUI SDUI system instead of JSX, Vue templates, or raw HTML. For the full system picture (codegen, renderers, CI), see [sdui-architecture.md](./sdui-architecture.md).

---

## Why node graphs instead of JSX or HTML

- **Framework-agnostic:** a single `AgNode[]` array renders identically in React, Vue, and Lit via the matching `AgDynamicRenderer`.
- **Validatable at runtime:** `validateGraph()` checks every node against the Zod schema and verifies that all child ID references resolve within the graph, before any rendering occurs.
- **LLM-readable contract:** the `component` field is a string literal that maps to an exact Zod schema variant. The LLM only needs to know valid component names and their props.
- **Plain JSON:** nodes are ordinary objects with no functions, no imports, and no framework syntax. Any agent, pipeline, or storage layer can read, diff, or patch them.

---

## The system prompt template

Copy and customize the block below. Replace the schema JSON placeholder with the actual content of `v2/schema/agnosticui-schema.json` when context budget allows (see [Using agnosticui-schema.json as LLM context](#using-agnosticui-schemajson-as-llm-context)).

```
You are generating UI node graphs for the AgnosticUI SDUI system.

Output rules:
- Respond ONLY with a JSON code block containing an AgNode[] array.
- Do not include any prose, explanation, imports, or framework code.
- Every node MUST have a unique "id" (kebab-case string) and a "component" field.

Valid component names (use exactly as written):
AgAccordion, AgAlert, AgAspectRatio, AgAvatar, AgBadge, AgBadgeFx,
AgBreadcrumb, AgButton, AgButtonFx, AgCard, AgCheckbox, AgDialog,
AgDivider, AgDrawer, AgFieldset, AgHeader, AgIcon, AgIconButton,
AgIconButtonFx, AgInput, AgIntlFormatter, AgKbd, AgLink, AgLoader,
AgMark, AgMessageBubble, AgPopover, AgProgress, AgRadio, AgRating,
AgSelect, AgSelectionButton, AgSelectionButtonGroup, AgSelectionCard,
AgSelectionCardGroup, AgSpinner, AgTabs, AgTag, AgToggle, AgTooltip,
AgText

Graph structure rules:
- The graph is a FLAT array. Do not nest node objects inside other node objects.
- "children" is an array of ID strings, not an array of node objects.
  CORRECT:   { "id": "card-1", "component": "AgCard", "children": ["title-1", "btn-1"] }
  INCORRECT: { "id": "card-1", "component": "AgCard", "children": [{ "id": "title-1", ... }] }
- Every ID listed in a "children" array must appear as a top-level node in the array.

AgText (renderer primitive):
- Use AgText for headings, paragraphs, labels, and span text.
- Props: "text" (required string), "el" (optional: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "label")
- AgButton and similar label-child components must wrap their visible text in an AgText child node.

Action aliases (interactive callbacks):
- Do not use function values. Use string aliases instead.
- on_click     — button / link / icon-button click
- on_change    — input / toggle / select change
- on_dismiss   — dismissible alert dismiss
- on_toggle    — collapsible-style toggle
- on_open / on_close / on_cancel — dialog and drawer lifecycle
- on_show / on_hide — popover show/hide
- on_remove    — removable tag
- on_activate  — icon button activate

Prop validation:
- Use only enum values documented in agnosticui-schema.json for props like "variant", "size", "type".
- AgButton variant: "primary" | "secondary" | "success" | "warning" | "danger" | "monochrome"
- AgInput type: "text" | "password" | "email" | "number" | "search" | "tel" | "url" | "date" | "datetime-local" | "month" | "time" | "week"
- AgToggle size: "sm" | "md" | "lg"

The source of truth for all valid props and enums is agnosticui-schema.json.
```

---

## Few-shot example 1: valid login form graph

A complete `AgNode[]` for a login form with email, password, a remember-me toggle, and a sign-in button.

```json
[
  {
    "id": "login-email",
    "component": "AgInput",
    "label": "Email",
    "type": "email",
    "placeholder": "you@example.com",
    "required": true
  },
  {
    "id": "login-password",
    "component": "AgInput",
    "label": "Password",
    "type": "password",
    "required": true
  },
  {
    "id": "login-remember",
    "component": "AgToggle",
    "label": "Remember me"
  },
  {
    "id": "login-submit",
    "component": "AgButton",
    "variant": "primary",
    "type": "submit",
    "on_click": "handle_login",
    "children": ["login-submit-label"]
  },
  {
    "id": "login-submit-label",
    "component": "AgText",
    "text": "Sign in"
  }
]
```

Passing this to `validateGraph()`:

```ts
import { validateGraph } from '@agnosticui/schema';

const result = validateGraph(nodes);
// result.success === true
// result.errors  === []
```

---

## Few-shot example 2: common mistakes Zod rejects

### Mistake 1: invalid enum value on `variant`

```json
{
  "id": "btn-1",
  "component": "AgButton",
  "variant": "rainbow"
}
```

**Why it fails:** `variant` on `AgButton` is `z.enum(['primary', 'secondary', 'accent', 'success', 'warning', 'danger', 'monochrome'])`. The value `"rainbow"` is not a member.

**Fix:** use `"primary"` or another valid variant string.

### Mistake 2: nested objects in `children`

```json
{
  "id": "card-1",
  "component": "AgCard",
  "children": [
    { "id": "title-1", "component": "AgText", "text": "Hello" }
  ]
}
```

**Why it fails:** `children` is `z.array(z.string())`. An object is not a string.

**Fix:** make `title-1` a sibling in the top-level array and reference it by ID string.

```json
[
  { "id": "card-1", "component": "AgCard", "children": ["title-1"] },
  { "id": "title-1", "component": "AgText", "text": "Hello" }
]
```

### Mistake 3: missing `id` field

```json
{ "component": "AgDivider" }
```

**Why it fails:** every node schema includes `id: z.string()` as a required field.

**Fix:** add a unique kebab-case id: `"id": "divider-1"`.

### Mistake 4: component name that does not exist

```json
{ "id": "msg-1", "component": "AgTextarea", "label": "Message" }
```

**Why it fails:** `AgTextarea` is not a valid discriminated union variant. There is no `AgTextarea` component.

**Fix:** use `AgInput` with a `rows` prop for multi-line text:

```json
{ "id": "msg-1", "component": "AgInput", "label": "Message", "type": "text", "rows": 4 }
```

---

## Using `agnosticui-schema.json` as LLM context

The file `v2/schema/agnosticui-schema.json` is the machine-readable version of the full Zod schema, emitted by:

```bash
npm run codegen -- --emit-schema-json
```

It follows JSON Schema draft-07 and lists every component, every prop, and every valid enum value. Pass it as context in your system prompt when you want the LLM to have precise prop knowledge without relying on the enum list in the template above.

Example: injecting the schema JSON into a system prompt in Node.js:

```ts
import { readFileSync } from 'fs';
import { resolve } from 'path';

const schemaJson = readFileSync(
  resolve('v2/schema/agnosticui-schema.json'),
  'utf-8'
);

const systemPrompt = `
You are generating UI node graphs for the AgnosticUI SDUI system.
Respond ONLY with a JSON code block containing an AgNode[] array.

The full schema for all components is:

\`\`\`json
${schemaJson}
\`\`\`

Follow all rules in the schema exactly.
`;
```

Keep the schema JSON as close to the start of the context window as possible when budget is constrained. If the full file is too large, consider passing only the definition block for the specific component(s) you need.

---

## Validating the output

```ts
import { validateGraph } from '@agnosticui/schema';
import type { AgNode } from '@agnosticui/schema';

function assertValidGraph(nodes: unknown[]): AgNode[] {
  const result = validateGraph(nodes);

  if (!result.success) {
    const detail = result.errors
      .map(e => `  [${e.nodeId}] ${e.errors.join('; ')}`)
      .join('\n');
    throw new Error(`Invalid AgNode graph:\n${detail}`);
  }

  return nodes as AgNode[];
}

// Usage after receiving LLM output
const raw: unknown[] = JSON.parse(llmOutput);
const nodes: AgNode[] = assertValidGraph(raw);

// Now safe to pass to AgDynamicRenderer
```

`validateGraph()` never throws. It returns `{ success: boolean, errors: GraphNodeError[] }`. Each `GraphNodeError` carries the `nodeId` and an `errors: string[]` with field-path messages from Zod plus any unresolved child ID references.

---

## TODO: Agent runtime discovery (requires #389)

Once the Agent Runtime (#389) lands, the following will be available:

- `listComponents()` — returns all available component names
- `getComponentSchema(name)` — returns the JSON Schema for a specific component

These will enable dynamic discovery without needing to pass the full schema JSON as context.

---

## Further reading

- [sdui-architecture.md](./sdui-architecture.md) — full system architecture, codegen pipeline, CI gates
- [schema-coverage.md](./schema-coverage.md) — per-component prop coverage and omission reasons
