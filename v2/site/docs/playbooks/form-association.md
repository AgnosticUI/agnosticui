# Form Association (FACE)

A Contact Form that demonstrates **Form Associated Custom Elements (FACE)** — `ag-input` values submitted natively with the parent `<form>`, looping `form.elements` for programmatic validation, and `form.reset()` restoring all fields without manual state management.

::: tip PROMPT Files Only
This playbook ships PROMPT files only — no pre-built examples. Run a prompt with Claude or another LLM to generate the working app in React, Vue, or Lit.
:::

## What is FACE?

Form Associated Custom Elements (`static formAssociated = true` + `attachInternals()`) let custom elements participate natively in HTML forms — just like `<input>`, `<select>`, and `<textarea>`.

Without FACE, a custom input is invisible to the browser's `<form>`: its value is excluded from `FormData`, constraint validation doesn't work, and `form.reset()` has no effect. FACE bridges that gap.

**Browser support:** ~95% globally as of Jan 2026, including Safari 16.4+. No polyfill needed.

## What `ag-input` Does via FACE

| Behavior | How |
|----------|-----|
| Value submitted with `<form>` | `_internals.setFormValue()` on every input event |
| `required`, `minlength`, `type="email"` validation | `_syncValidity()` delegates to inner `<input>`, mirrors result to `ElementInternals` |
| `form.reset()` clears field | `formResetCallback()` resets value and validity state |
| `<fieldset disabled>` propagation | `formDisabledCallback()` syncs disabled state from ancestor fieldset |
| `form.checkValidity()` / `reportValidity()` | Exposed via `ElementInternals` getters |

## Key Patterns Demonstrated

### Native FormData — No Per-Field State

```js
const data = new FormData(formElement);
const payload = Object.fromEntries(data.entries());
// { fullName: "...", email: "...", phone: "...", message: "..." }
```

`ag-input` values appear in `FormData` natively because FACE components call `setFormValue()` on every input event.

### Loop form.elements to Validate All Fields

```js
function validateAll(form) {
  let valid = true;
  for (const el of Array.from(form.elements)) {
    if (typeof el.reportValidity === 'function') {
      if (!el.reportValidity()) valid = false;
    }
  }
  return valid;
}
```

`form.elements` includes FACE custom elements alongside native inputs. Calling `reportValidity()` on each surfaces browser validation tooltips for the first failing field.

### Native Form Reset

```js
formElement.reset();
// ag-input's formResetCallback() fires automatically — no manual state clearing needed
```

## Generate the Examples

Use the PROMPT files to build the Contact Form with your LLM:

| Prompt | Output | Use when |
|--------|--------|----------|
| [`PROMPT-3-FRAMEWORKS.md`](https://github.com/AgnosticUI/agnosticui/blob/master/v2/playbooks/form-association/PROMPT-3-FRAMEWORKS.md) | `react-example/`, `vue-example/`, `lit-example/` | Build all three at once |
| [`PROMPT-REACT.md`](https://github.com/AgnosticUI/agnosticui/blob/master/v2/playbooks/form-association/PROMPT-REACT.md) | React app | React only |
| [`PROMPT-VUE.md`](https://github.com/AgnosticUI/agnosticui/blob/master/v2/playbooks/form-association/PROMPT-VUE.md) | Vue app | Vue only |
| [`PROMPT-LIT.md`](https://github.com/AgnosticUI/agnosticui/blob/master/v2/playbooks/form-association/PROMPT-LIT.md) | Lit app | Lit only |

**How to use:**

```bash
cd v2/playbooks/form-association
claude  # or your LLM of choice

# Then ask:
> Please follow the instructions in PROMPT-3-FRAMEWORKS.md
```

## Form Fields

| Field | `name` | Type | Validation |
|-------|--------|------|-----------|
| Full Name | `fullName` | `text` | `required` |
| Email Address | `email` | `email` | `required` |
| Phone | `phone` | `tel` | optional |
| Message | `message` | `textarea` | `required` |

## Components Used

| Component | Purpose |
|-----------|---------|
| `ag-input` | All form fields (FACE-enabled) |
| `ag-button` | Submit and Clear actions |
| `ag-card` | Form and result containers |
| `ag-divider` | Visual separator below heading |

## Further Reading

- [`FACE-NOTES.md`](https://github.com/AgnosticUI/agnosticui/blob/master/v2/lib/src/components/Input/FACE-NOTES.md) — Implementation notes for `ag-input`, IOC options for custom validation messages
- [`FACE-PLANNING.md`](https://github.com/AgnosticUI/agnosticui/blob/master/v2/lib/src/components/FACE-PLANNING.md) — Roadmap for applying FACE to `ag-checkbox`, `ag-select`, `ag-radio`, and others
