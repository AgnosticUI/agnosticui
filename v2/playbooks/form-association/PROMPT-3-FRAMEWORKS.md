# Form Association (FACE) Playbook — 3 Frameworks

## Overview

This playbook builds a **Contact Form** in React, Vue, and Lit that demonstrates
Form Associated Custom Elements (FACE) with AgnosticUI's `ag-input` component.
Each framework gets an identical form built in its idiomatic style.

**What this demonstrates:**
- `ag-input` submitting values natively with the parent `<form>` (no manual state wiring)
- Iterating `form.elements` to validate all fields programmatically
- Native `form.reset()` restoring all inputs to their default state
- `required` and `type="email"` constraint validation via FACE
- Accessible error messages announced by screen readers via `role="alert"`

**Outputs:** `react-example/`, `vue-example/`, `lit-example/`

---

## Application Spec (same across all frameworks)

Build a single-page **Contact Form** with the following fields:

| Field | `name` attr | `type` | Validation |
|-------|------------|--------|-----------|
| Full Name | `fullName` | `text` | `required` |
| Email Address | `email` | `email` | `required` |
| Phone | `phone` | `tel` | optional |
| Message | `message` | `textarea` | `required` |

**Two actions:**
- **Send Message** — validates all fields, submits, shows collected data
- **Clear** — calls `form.reset()` to restore all inputs to empty

---

## Key FACE Patterns (framework-agnostic)

### FormData Collection

```js
// Works identically in all three frameworks
const data = new FormData(formElement);
const payload = Object.fromEntries(data.entries());
// { fullName: "...", email: "...", phone: "...", message: "..." }
```

`ag-input` values appear in `FormData` natively because FACE components call
`this._internals.setFormValue()` on every input event.

### Validate All Fields

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

Calling `reportValidity()` on each element surfaces browser constraint validation
tooltips (required, type=email, etc.) for the first failing field.

### Form Reset

```js
formElement.reset();
// ag-input's formResetCallback() fires, clearing all values
```

---

## React Setup (`react-example/`)

```bash
npm create vite@latest react-example -- --template react-ts
cd react-example && npm install && npm install lit && cd ..
cd react-example && npx agnosticui-cli init --framework react --skip-prompts
cd react-example && npx agnosticui-cli add button input card divider && cd ..
```

### React Implementation Notes

- Use `useRef<HTMLFormElement>` for the form element
- `handleSubmit(e: React.FormEvent)` — `e.preventDefault()`, then `validateAll`, then `FormData`
- `handleReset()` — `formRef.current?.reset()` + clear success state
- Import tokens in `main.tsx`:
  ```tsx
  import './components/ag/styles/ag-tokens.css';
  import './components/ag/styles/ag-tokens-dark.css';
  ```

---

## Vue Setup (`vue-example/`)

```bash
npm create vite@latest vue-example -- --template vue-ts
cd vue-example && npm install && npm install lit && cd ..
cd vue-example && npx agnosticui-cli init --framework vue --skip-prompts
cd vue-example && npx agnosticui-cli add button input card divider && cd ..
```

### Vue Implementation Notes

- Use `<form ref="formRef" @submit.prevent="handleSubmit">`
- `formRef` is `Ref<HTMLFormElement | null>`
- Import tokens in `main.ts`
- `vite.config.ts` must mark `ag-*` as custom elements:
  ```ts
  vue({ template: { compilerOptions: { isCustomElement: (tag) => tag.startsWith('ag-') } } })
  ```

---

## Lit Setup (`lit-example/`)

```bash
npm create vite@latest lit-example -- --template vanilla-ts
cd lit-example && npm install && npm install lit && cd ..
cd lit-example && npx agnosticui-cli init --framework lit --skip-prompts
cd lit-example && npx agnosticui-cli add button input card divider && cd ..
```

### Lit Implementation Notes

- Build a `<contact-form>` custom element extending `LitElement`
- Query `this.shadowRoot?.querySelector('form')` — form is inside shadow DOM
- `@state() private _submissionData: Record<string, string> | null = null`
- Import tokens + register element in `main.ts`

---

## Shared Layout (all frameworks)

```
┌──────────────────────────────────────────┐
│  Card                                    │
│  ┌────────────────────────────────────┐  │
│  │  Contact Us                        │  │
│  │  ─────────────────────────────     │  │
│  │  Full Name *                       │  │
│  │  [________________________]        │  │
│  │                                    │  │
│  │  Email Address *                   │  │
│  │  [________________________]        │  │
│  │                                    │  │
│  │  Phone                             │  │
│  │  [________________________]        │  │
│  │                                    │  │
│  │  Message *                         │  │
│  │  [________________________]        │  │
│  │  [________________________]        │  │
│  │  [________________________]        │  │
│  │                                    │  │
│  │  [ Clear ]  [ Send Message → ]     │  │
│  └────────────────────────────────────┘  │
│                                          │
│  ┌─ Result (after valid submit) ─────────┐│
│  │  ✓ Message sent!                     ││
│  │  fullName: Jane Doe                  ││
│  │  email: jane@example.com             ││
│  └──────────────────────────────────────┘│
└──────────────────────────────────────────┘
```

**Styling tokens:**
- Card max-width: `540px`, centered
- Page padding: `var(--ag-space-8)`
- Field gap: `var(--ag-space-4)`
- Button gap: `var(--ag-space-3)`, right-aligned
- Result background: `var(--ag-background-secondary)`, `border-radius: var(--ag-radius-md)`

---

## AgnosticUI Components

| Component | React | Vue | Lit tag |
|-----------|-------|-----|---------|
| Input | `ReactInput` | `VueInput` | `<ag-input>` |
| Button | `ReactButton` | `VueButton` | `<ag-button>` |
| Card | `ReactCard` | `VueCard` | `<ag-card>` |
| Divider | `ReactDivider` | `VueDivider` | `<ag-divider>` |

---

## Acceptance Criteria (all three frameworks)

- [ ] Submitting with empty required fields shows browser validation tooltips
- [ ] Submitting with valid data shows a result card with the collected `FormData` values
- [ ] Clear button resets all fields to empty via `form.reset()`
- [ ] Email field rejects non-email values using native `type="email"` FACE constraint
- [ ] Phone field is optional — form submits without it
- [ ] All labels are visible and associated with their inputs
- [ ] Error messages are rendered with `role="alert"` for screen reader announcements
- [ ] All three framework implementations are functionally identical
