# Form Association (FACE) Playbook

A Contact Form demonstrating **Form Associated Custom Elements (FACE)** across React, Vue,
and Lit — `ag-input`, `ag-radio`, `ag-checkbox`, `ag-selection-button-group`, and `ag-toggle`
submitting natively with the parent `<form>`, programmatic validation via `form.elements`,
`form.reset()` restoring all fields without manual state management, and CSS `:state()`
pseudo-classes for styling from outside the shadow DOM.

::: tip New to FACE?
Read the [Form Association guide](/docs/form-association) first — it explains the core
concepts, framework-specific gotchas, and how to inspect FACE in action.
:::

<script setup>
import PlaybookStackBlitz from '../.vitepress/theme/components/PlaybookStackBlitz.vue'
</script>

## Live Examples

<PlaybookStackBlitz playbook="form-association" />

<div class="flex gap4 mbs4 mbe4">
  <a href="https://github.com/AgnosticUI/agnosticui/tree/master/v2/playbooks/form-association" target="_blank" rel="noopener">View on GitHub</a>
</div>

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
| Preferred contact method | `contactMethod` | `ag-radio` group (email/phone/either) | `required` |
| Newsletter signup | `subscribe` | `ag-checkbox` | optional |
| Newsletter frequency | `frequency` | `ag-selection-button-group` (radio) | `required` |
| Terms & Conditions | `terms` | `ag-toggle` | `required` |

## Components Used

| Component | Purpose |
|-----------|---------|
| `ag-input` | Text, email, tel, and textarea fields (FACE-enabled) |
| `ag-radio` | Required radio group — preferred contact method (FACE-enabled) |
| `ag-checkbox` | Optional newsletter signup (FACE-enabled) |
| `ag-selection-button-group` | Radio group for newsletter frequency (FACE-enabled) |
| `ag-toggle` | Required terms acceptance (FACE-enabled) |
| `ag-button` | Submit and Clear actions |
| `ag-card` | Form and result containers |
| `ag-divider` | Visual separator |

::: tip `:state()` CSS Demo
The form includes a live `:state()` demo — `ag-radio`, `ag-checkbox`, and `ag-toggle` get a
**green dashed outline** when `:state(checked)` and a **red dashed outline** when `:state(invalid)`.
The submit handler logs each element's `:state(checked)` and `:state(invalid)` values to the console.

Supported in Chrome 125+, Firefox 126+, and Safari 17.4+. See the
[Form Association guide](/docs/form-association#css-targetable-states-via-state) for details.
:::

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
