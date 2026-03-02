# Form Association (FACE) Playbook

A Contact Form demonstrating **Form Associated Custom Elements (FACE)** across React, Vue,
and Lit — `ag-input`, `ag-selection-button-group`, and `ag-toggle` submitting natively
with the parent `<form>`, programmatic validation via `form.elements`, and `form.reset()`
restoring all fields without manual state management.

::: tip New to FACE?
Read the [Form Association guide](/docs/form-association) first — it explains the core
concepts, framework-specific gotchas, and how to inspect FACE in action.
:::

## Working Examples

Three complete implementations are available in the repository:

| Framework | Source | Run |
|-----------|--------|-----|
| React | [`react-example/`](https://github.com/AgnosticUI/agnosticui/tree/master/v2/playbooks/form-association/react-example) | `cd react-example && npm install && npm run dev` |
| Vue | [`vue-example/`](https://github.com/AgnosticUI/agnosticui/tree/master/v2/playbooks/form-association/vue-example) | `cd vue-example && npm install && npm run dev` |
| Lit | [`lit-example/`](https://github.com/AgnosticUI/agnosticui/tree/master/v2/playbooks/form-association/lit-example) | `cd lit-example && npm install && npm run dev` |

Each example logs `form.elements`, the `validateAll` result, and the `FormData` entries to
the console so you can watch FACE work in real time.

## Form Fields

| Field | `name` | Component | Validation |
|-------|--------|-----------|------------|
| Full Name | `fullName` | `ag-input` (text) | `required` |
| Email Address | `email` | `ag-input` (email) | `required` |
| Phone | `phone` | `ag-input` (tel) | optional |
| Message | `message` | `ag-input` (textarea) | `required` |
| Newsletter frequency | `frequency` | `ag-selection-button-group` (radio) | `required` |
| Terms & Conditions | `terms` | `ag-toggle` | `required` |

## Components Used

| Component | Purpose |
|-----------|---------|
| `ag-input` | Text, email, tel, and textarea fields (FACE-enabled) |
| `ag-selection-button-group` | Radio group for newsletter frequency (FACE-enabled) |
| `ag-toggle` | Terms acceptance checkbox (FACE-enabled) |
| `ag-button` | Submit and Clear actions |
| `ag-card` | Form and result containers |
| `ag-divider` | Visual separator |

## Generate Your Own with an LLM

Use the PROMPT files to build a Contact Form from scratch:

| Prompt | Output | Use when |
|--------|--------|----------|
| [`PROMPT-3-FRAMEWORKS.md`](https://github.com/AgnosticUI/agnosticui/blob/master/v2/playbooks/form-association/PROMPT-3-FRAMEWORKS.md) | `react-example/`, `vue-example/`, `lit-example/` | Build all three at once |
| [`PROMPT-REACT.md`](https://github.com/AgnosticUI/agnosticui/blob/master/v2/playbooks/form-association/PROMPT-REACT.md) | React app | React only |
| [`PROMPT-VUE.md`](https://github.com/AgnosticUI/agnosticui/blob/master/v2/playbooks/form-association/PROMPT-VUE.md) | Vue app | Vue only |
| [`PROMPT-LIT.md`](https://github.com/AgnosticUI/agnosticui/blob/master/v2/playbooks/form-association/PROMPT-LIT.md) | Lit app | Lit only |

```bash
cd v2/playbooks/form-association
claude  # or your LLM of choice

# Then ask:
> Please follow the instructions in PROMPT-3-FRAMEWORKS.md
```

## Further Reading

- [Form Association guide](/docs/form-association) — concepts, framework gotchas, working examples
- [`FACE-NOTES.md`](https://github.com/AgnosticUI/agnosticui/blob/master/v2/lib/src/components/FACE-NOTES.md) — deep implementation notes, `validationMessages` prop, framework integration gotchas
- [`FACE-PLANNING.md`](https://github.com/AgnosticUI/agnosticui/blob/master/v2/lib/src/components/FACE-PLANNING.md) — FACE component roadmap and completed work
