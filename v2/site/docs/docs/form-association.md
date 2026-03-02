# Form Association (FACE)

**Form Associated Custom Elements (FACE)** is a browser API that lets custom elements
participate in HTML forms the same way native `<input>`, `<select>`, and `<textarea>` do.

AgnosticUI's form components use FACE out of the box — no wrappers, no manual state sync,
no custom submit handlers needed to collect values.

**Browser support:** ~95% globally as of 2026, including Safari 16.4+. No polyfill needed.

---

## What FACE Gives You

Without FACE, a custom input is invisible to the browser's `<form>`. With FACE, every
`ag-*` form control automatically:

| Behavior | How it works |
|----------|-------------|
| Value appears in `FormData` | `_internals.setFormValue()` called on every input/change event |
| `required`, `minlength`, `type="email"` etc. | Constraint validation via `ElementInternals.setValidity()` |
| `form.reset()` restores default state | `formResetCallback()` fires automatically |
| `<fieldset disabled>` propagation | `formDisabledCallback()` syncs from ancestor fieldset |
| `checkValidity()` / `reportValidity()` | Exposed via `ElementInternals` getters |

### FACE-enabled components

All form controls in AgnosticUI are FACE-enabled:

`ag-input` · `ag-textarea` · `ag-checkbox` · `ag-radio` · `ag-select` · `ag-toggle` ·
`ag-slider` · `ag-rating` · `ag-selection-button-group` · `ag-selection-card-group` · `ag-combobox`

### CSS-targetable states via `:state()`

`ag-checkbox`, `ag-radio`, and `ag-toggle` expose internal states through
[`ElementInternals.states`](https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals/states)
(`CustomStateSet`). You can style them from outside the shadow DOM using the `:state()` pseudo-class
— no extra attributes or classes needed.

| Component | `:state(checked)` | `:state(invalid)` |
|-----------|:-----------------:|:-----------------:|
| `ag-checkbox` | when checked | when required and unchecked |
| `ag-radio` | when checked | when required and no radio in the group is checked |
| `ag-toggle` | when on | when required and off |

**Browser support:** Chrome 125+, Firefox 126+, Safari 17.4+.

```css
/* Green outline when checked */
ag-checkbox:state(checked),
ag-radio:state(checked),
ag-toggle:state(checked) {
  outline: 2px dashed #22c55e;
  outline-offset: 3px;
}

/* Red outline when invalid */
ag-checkbox:state(invalid),
ag-radio:state(invalid),
ag-toggle:state(invalid) {
  outline: 2px dashed #ef4444;
  outline-offset: 3px;
}
```

::: tip Verifying `:state()` in the console
```js
document.querySelector('ag-radio[name="contactMethod"]').matches(':state(checked)') // true/false
document.querySelector('ag-checkbox[name="terms"]').matches(':state(invalid)')       // true/false
```
:::

---

## Core Patterns

### Native FormData — no per-field state

```js
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const data = new FormData(e.target)
  const payload = Object.fromEntries(data.entries())
  // { fullName: "Rob Levin", email: "...", frequency: "monthly", terms: "on" }
})
```

`ag-input` values appear in `FormData` natively because FACE components call
`setFormValue()` on every input event. You never need to manually track field values in
component state.

### Loop `form.elements` to validate all fields

```js
function validateAll(form) {
  let valid = true
  for (const el of Array.from(form.elements)) {
    if (typeof el.reportValidity === 'function') {
      if (!el.reportValidity()) valid = false
    }
  }
  return valid
}
```

`form.elements` includes FACE custom elements alongside native inputs. Calling
`reportValidity()` on each shows the browser's validation tooltip for the first failing field.

### Native form reset

```js
form.reset()
// ag-* formResetCallback() fires on each FACE element — no manual state clearing needed
```

---

## Framework Notes

### React: use `addEventListener`, not the `onSubmit` prop

When `ag-button` calls `form.requestSubmit()` from inside its Lit shadow DOM, React 18's
synthetic event delegation may not call `preventDefault()` in time, causing a full page
reload that wipes component state before the re-render.

**Use a native listener in `useEffect` instead:**

```tsx
useEffect(() => {
  const form = formRef.current
  if (!form) return
  function onSubmit(e: Event) {
    e.preventDefault()
    const data = new FormData(form!)
    setSubmissionData(Object.fromEntries(data.entries()))
  }
  form.addEventListener('submit', onSubmit)
  return () => form.removeEventListener('submit', onSubmit)
}, [])
```

This matches what Vue's `@submit.prevent` does internally and guarantees `preventDefault()`
runs before any browser navigation.

### Vue: explicitly bind `:name="name"` in wrappers

Vue 3's `$attrs` only passes through attributes that are **not** declared as props. If a
wrapper component's interface extends a core props type that includes `name`, Vue declares
`name` as a prop — and silently drops it from `$attrs`.

Always bind `:name="name"` explicitly in the template alongside `v-bind="$attrs"`:

```html
<ag-input :name="name" v-bind="$attrs" ...>
```

Without this, `ag-input` renders with `name=""` and its value is excluded from `FormData`.

### Lit: no special handling needed

Lit's `@submit=${handler}` binding is a direct `addEventListener` call.
`e.preventDefault()` always fires before browser navigation.

---

## Working Examples

The `form-association` playbook ships three complete working implementations — a Contact
Form with FACE-based validation across all three frameworks:

| Framework | Source |
|-----------|--------|
| React | [`v2/playbooks/form-association/react-example/`](https://github.com/AgnosticUI/agnosticui/tree/master/v2/playbooks/form-association/react-example) |
| Vue | [`v2/playbooks/form-association/vue-example/`](https://github.com/AgnosticUI/agnosticui/tree/master/v2/playbooks/form-association/vue-example) |
| Lit | [`v2/playbooks/form-association/lit-example/`](https://github.com/AgnosticUI/agnosticui/tree/master/v2/playbooks/form-association/lit-example) |

Each example logs `form.elements`, the `validateAll` result, and the final `FormData`
entries to the console so you can see FACE working in real time.

---

## Further Reading

- [Form Association Playbook](/playbooks/form-association) — PROMPT files for generating your own FACE-based forms with an LLM
- [`FACE-NOTES.md`](https://github.com/AgnosticUI/agnosticui/blob/master/v2/lib/src/components/FACE-NOTES.md) — deep implementation notes covering all FACE components, `validationMessages`, and `CustomStateSet`
- [`FACE-ARTICLE.md`](https://github.com/AgnosticUI/agnosticui/blob/master/v2/lib/src/components/FACE-ARTICLE.md) — full rollout story: mixin design, validation strategies, radio group shadow DOM isolation, and lessons learned
- [MDN: ElementInternals](https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals) — browser API reference
- [MDN: ElementInternals.states](https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals/states) — `CustomStateSet` and `:state()` pseudo-class
