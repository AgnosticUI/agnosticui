# React Form Association (FACE) Playbook

## Overview

This playbook builds a **Contact Form** that demonstrates Form Associated Custom
Elements (FACE) with AgnosticUI's `ag-input` component. The key scenario is using
the browser's native `FormData` API and `form.elements` to loop through FACE-enabled
inputs for validation and submission — no manual state management required.

**What this demonstrates:**
- `ag-input` submitting values natively with the parent `<form>`
- Iterating `form.elements` to validate all fields programmatically
- Native `form.reset()` restoring all inputs to their default state
- `required` and `type="email"` constraint validation via FACE
- `validationMessages` prop overriding built-in English fallback strings (i18n)
- Accessible error messages announced by screen readers via `role="alert"`

---

## Project Setup

### Prerequisites

_Note: The Vite project MUST be TypeScript enabled because the agnosticui-cli only works
properly in a TypeScript project._

```bash
npm create vite@latest react-example -- --template react-ts
```

### Install Dependencies

```bash
cd react-example
npm install
npm install lit  # Required before CLI init
cd ..
```

### Initialize AgnosticUI

```bash
cd react-example
npx agnosticui-cli init --framework react --skip-prompts
npx agnosticui-cli add button input card divider toggle selection-button-group selection-button
cd ..
```

**Post-init verification:**
- Ensure `ag-tokens.css` and `ag-tokens-dark.css` are in `src/components/ag/styles/`
- Import both in `main.tsx`

---

## Application Spec

Build a single-page **Contact Form** with the following fields:

| Field | `name` attr | `type` | Validation |
|-------|------------|--------|-----------|
| Full Name | `fullName` | `text` | `required` |
| Email Address | `email` | `email` | `required` |
| Phone | `phone` | `tel` | optional |
| Message | `message` | `textarea` | `required` |
| Newsletter Frequency | `frequency` | selection-button-group | `required` — uses `validationMessages` |
| Terms & Conditions | `terms` | toggle | `required` — uses `validationMessages` |

The "Newsletter Frequency" field uses `ReactSelectionButtonGroup` (type="radio") with three
options: Weekly, Monthly, Only major announcements. Pass `validationMessages` to override:

```tsx
<ReactSelectionButtonGroup
  type="radio"
  name="frequency"
  legend="How often would you like to hear from us?"
  required
  validationMessages={{ valueMissing: "Please select how often you'd like to hear from us." }}
>
  <ReactSelectionButton value="weekly" label="Weekly" />
  <ReactSelectionButton value="monthly" label="Monthly" />
  <ReactSelectionButton value="major" label="Only major announcements" />
</ReactSelectionButtonGroup>
```

The "Terms & Conditions" field uses `ReactToggle` (an `ag-toggle` direct-validity component).
Pass a custom `validationMessages` prop to override the built-in fallback:

```tsx
<ReactToggle
  name="terms"
  label="I agree to the terms and conditions"
  required
  validationMessages={{ valueMissing: "Please accept the terms and conditions to continue." }}
/>
```

This demonstrates `validationMessages` in a real form context: the custom string replaces
the generic `"Please check this field."` that the browser would otherwise show.

The form has two actions:
- **Send Message** — submits the form, validates all fields, shows collected data
- **Clear** — calls `form.reset()` to restore all inputs to empty

---

## Key FACE Patterns to Implement

### 1. Native FormData Collection

On submit, collect all values using the browser's `FormData` — no per-field
`useState` needed for form submission:

```tsx
function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const form = e.currentTarget;

  // FACE: ag-input values are included in FormData natively
  const data = new FormData(form);
  const payload = Object.fromEntries(data.entries());
  console.log(payload); // { fullName: "...", email: "...", ... }
}
```

### 2. Loop form.elements to Validate Programmatically

Before showing a success state, iterate `form.elements` and call `reportValidity()`
on each FACE-enabled input to surface browser validation UI:

```tsx
function validateAll(form: HTMLFormElement): boolean {
  let valid = true;
  // HTMLFormControlsCollection includes FACE custom elements alongside native inputs
  for (const el of Array.from(form.elements)) {
    if (typeof (el as any).reportValidity === 'function') {
      const elValid = (el as any).reportValidity();
      if (!elValid) valid = false;
    }
  }
  return valid;
}
```

### 3. `validationMessages` — Overriding Built-in Fallback Strings

Five AgnosticUI FACE components (`ag-toggle`, `ag-rating`, `ag-selection-button-group`,
`ag-selection-card-group`, `ag-combobox`) implement constraint validation directly via
`this._internals.setValidity()`. They ship with English fallback strings like
`"Please check this field."`. Pass `validationMessages` to replace them:

```tsx
// The object keys match ValidityState flag names
validationMessages={{ valueMissing: "Please accept the terms and conditions to continue." }}
```

`ag-input` does NOT use `validationMessages` — it delegates to the browser's inner
`<input>` element, so native constraint messages appear automatically.

### 4. Native Form Reset

Wire the Clear button to `form.reset()`. Because `ag-input` and `ag-toggle` both implement
`formResetCallback()`, all fields clear their values automatically:

```tsx
function handleReset() {
  formRef.current?.reset();
  // ag-input and ag-toggle values are cleared by the browser calling formResetCallback()
  setSubmissionData(null);
}
```

---

## Component Layout

```
┌──────────────────────────────────────────┐
│  AgCard                                  │
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
│  │  How often would you like to hear? *│  │
│  │  [Weekly] [Monthly] [Major only]   │  │
│  │                                    │  │
│  │  [○] I agree to the terms *        │  │
│  │                                    │  │
│  │  [ Clear ]  [ Send Message → ]     │  │
│  └────────────────────────────────────┘  │
│                                          │
│  ┌─ Submission Result (shown on submit) ─┐│
│  │  ✓ Message sent!                     ││
│  │  fullName: Jane Doe                  ││
│  │  email: jane@example.com             ││
│  └──────────────────────────────────────┘│
└──────────────────────────────────────────┘
```

---

## Implementation Details

### App.tsx

Create a React component using `useRef` for the form element. Key behaviors:

1. **Form submission** — prevent default, call `validateAll()`, then collect via `FormData`
2. **Success state** — after valid submission, show collected data in a result card
3. **Reset** — clear success state and call `form.reset()`

Use AgnosticUI `ReactInput` for all text/email/tel/textarea fields. Pass:
- `name` prop — required for FACE FormData submission
- `required` prop on mandatory fields
- `type` prop matching the field type
- `label` prop for visible labeling
- `errorMessage` prop with a sensible fallback message (shown when `invalid` is set)

Use `ReactSelectionButtonGroup` (type="radio") for the Newsletter Frequency field. Pass:
- `name="frequency"` — the selected value appears in `FormData`
- `required` — makes the field mandatory
- `legend` — the visible group label
- `validationMessages={{ valueMissing: "Please select how often you'd like to hear from us." }}`
- Three `ReactSelectionButton` children with values `"weekly"`, `"monthly"`, `"major"`

Use `ReactToggle` for the Terms & Conditions field. Pass:
- `name="terms"` — its checked value (`"on"`) appears in `FormData` when checked
- `required` — makes the field mandatory
- `label` — the visible label text
- `validationMessages={{ valueMissing: "Please accept the terms and conditions to continue." }}`

### Styling

- Wrap the form in an `AgCard` with `8px (--ag-space-2)` padding and `max-width: 540px`
- Center the card on the page with `margin: auto` and `padding: var(--ag-space-8)`
- Stack fields vertically with `gap: var(--ag-space-4)` using a flex column container
- Button row: `display: flex; gap: var(--ag-space-3); justify-content: flex-end`
- Result card: use a subtle `background: var(--ag-background-secondary)` background
  and `border-radius: var(--ag-radius-md)`

### AgnosticUI Components to Use

| Component | Import path | Usage |
|-----------|------------|-------|
| `ReactInput` | `./components/ag/Input` | Text, email, tel, textarea fields |
| `ReactSelectionButtonGroup` | `./components/ag/SelectionButtonGroup` | Newsletter frequency (radio, with `validationMessages`) |
| `ReactSelectionButton` | `./components/ag/SelectionButton` | Individual frequency options |
| `ReactToggle` | `./components/ag/Toggle` | Terms & Conditions (with `validationMessages`) |
| `ReactButton` | `./components/ag/Button` | Submit and clear actions |
| `ReactCard` | `./components/ag/Card` | Form and result containers |
| `ReactDivider` | `./components/ag/Divider` | Separator below heading |

---

## `main.tsx` Token Imports

```tsx
import './components/ag/styles/ag-tokens.css';
import './components/ag/styles/ag-tokens-dark.css';
```

---

## Acceptance Criteria

- [ ] Submitting with empty required fields shows browser validation tooltips
- [ ] Submitting with valid data shows a result card with the collected `FormData` values
- [ ] Clear button resets all fields to empty via `form.reset()` (including the toggle)
- [ ] Email field rejects non-email values using native `type="email"` FACE constraint
- [ ] Phone field is optional — form submits without it
- [ ] Newsletter frequency is required — submitting with no selection shows the custom `validationMessages.valueMissing` string, not the generic built-in fallback
- [ ] Terms toggle is required — submitting unchecked shows the custom `validationMessages.valueMissing` string, not the generic built-in fallback
- [ ] All labels are visible and associated with their inputs
- [ ] Error messages are rendered with `role="alert"` for screen reader announcements
