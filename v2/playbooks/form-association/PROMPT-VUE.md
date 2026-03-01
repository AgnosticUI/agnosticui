# Vue Form Association (FACE) Playbook

## Overview

This playbook builds a **Contact Form** that demonstrates Form Associated Custom
Elements (FACE) with AgnosticUI's `ag-input` component. The key scenario is using
the browser's native `FormData` API and `form.elements` to loop through FACE-enabled
inputs for validation and submission — no manual per-field `v-model` state required.

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
npm create vite@latest vue-example -- --template vue-ts
```

### Install Dependencies

```bash
cd vue-example
npm install
npm install lit  # Required before CLI init
cd ..
```

### Initialize AgnosticUI

```bash
cd vue-example
npx agnosticui-cli init --framework vue --skip-prompts
npx agnosticui-cli add button input card divider toggle selection-button-group selection-button
cd ..
```

**Post-init verification:**
- Ensure `ag-tokens.css` and `ag-tokens-dark.css` are in `src/components/ag/styles/`
- Import both in `main.ts`

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

The "Newsletter Frequency" field uses `VueSelectionButtonGroup` (type="radio") with three
options: Weekly, Monthly, Only major announcements. Pass `:validationMessages` to override:

```vue
<VueSelectionButtonGroup
  type="radio"
  name="frequency"
  legend="How often would you like to hear from us?"
  :required="true"
  :validationMessages="{ valueMissing: 'Please select how often you\'d like to hear from us.' }"
>
  <ag-selection-button value="weekly" label="Weekly">Weekly</ag-selection-button>
  <ag-selection-button value="monthly" label="Monthly">Monthly</ag-selection-button>
  <ag-selection-button value="major" label="Only major announcements">Only major announcements</ag-selection-button>
</VueSelectionButtonGroup>
```

The "Terms & Conditions" field uses `VueToggle` (an `ag-toggle` direct-validity component).
Pass a custom `:validationMessages` prop to override the built-in fallback:

```vue
<VueToggle
  name="terms"
  label="I agree to the terms and conditions"
  :required="true"
  :validationMessages="{ valueMissing: 'Please accept the terms and conditions to continue.' }"
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
`ref` or reactive property needed for form values:

```ts
function handleSubmit(e: Event) {
  e.preventDefault();
  const form = e.target as HTMLFormElement;

  // FACE: ag-input values are included in FormData natively
  const data = new FormData(form);
  const payload = Object.fromEntries(data.entries());
  console.log(payload); // { fullName: "...", email: "...", ... }
}
```

### 2. Loop form.elements to Validate Programmatically

Before showing a success state, iterate `form.elements` and call `reportValidity()`
on each FACE-enabled input to surface browser validation UI:

```ts
function validateAll(form: HTMLFormElement): boolean {
  let valid = true;
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
`"Please check this field."`. Pass `:validationMessages` to replace them:

```ts
// Object keys match ValidityState flag names
{ valueMissing: 'Please accept the terms and conditions to continue.' }
```

`ag-input` does NOT use `validationMessages` — it delegates to the browser's inner
`<input>` element, so native constraint messages appear automatically.

### 4. Native Form Reset

Wire the Clear button to `form.reset()`. Because `ag-input` and `ag-toggle` both implement
`formResetCallback()`, all fields clear their values automatically:

```ts
function handleReset() {
  formRef.value?.reset();
  submissionData.value = null;
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

### App.vue

Create a single-file component using `<script setup lang="ts">`. Key behaviors:

1. **Template** — use `<form ref="formRef" @submit.prevent="handleSubmit">`
2. **Submit handler** — call `validateAll()`, then collect via `new FormData(form)`
3. **Success state** — a `submissionData` ref shown after valid submission
4. **Reset** — clear `submissionData` and call `formRef.value?.reset()`

Use `VueInput` for all text/email/tel/textarea fields. Pass:
- `:name` prop — required for FACE FormData submission
- `:required` prop on mandatory fields
- `:type` prop matching the field type
- `label` prop for visible labeling

Use `VueSelectionButtonGroup` (type="radio") for the Newsletter Frequency field. Pass:
- `name="frequency"` — the selected value appears in `FormData`
- `:required="true"` — makes the field mandatory
- `legend` — the visible group label
- `:validationMessages="{ valueMissing: 'Please select how often you\'d like to hear from us.' }"`
- Three `ag-selection-button` children with values `"weekly"`, `"monthly"`, `"major"`

Use `VueToggle` for the Terms & Conditions field. Pass:
- `name="terms"` — its checked value (`"on"`) appears in `FormData` when checked
- `:required="true"` — makes the field mandatory
- `label` — the visible label text
- `:validationMessages="{ valueMissing: 'Please accept the terms and conditions to continue.' }"`

### `main.ts` Token Imports

```ts
import './components/ag/styles/ag-tokens.css';
import './components/ag/styles/ag-tokens-dark.css';
```

### Vite Config Note

Ensure the `vite.config.ts` compiler options mark `ag-*` tags as custom elements
so Vue doesn't warn about unknown elements:

```ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('ag-'),
        },
      },
    }),
  ],
});
```

### Styling

- Wrap the form in a `VueCard` with `max-width: 540px`, centered with `margin: auto`
- Page padding: `var(--ag-space-8)` on all sides
- Stack fields vertically with `gap: var(--ag-space-4)` using a flex column container
- Button row: `display: flex; gap: var(--ag-space-3); justify-content: flex-end`
- Result card: `background: var(--ag-background-secondary)`, `border-radius: var(--ag-radius-md)`

### AgnosticUI Components to Use

| Component | Import path | Usage |
|-----------|------------|-------|
| `VueInput` | `./components/ag/Input` | Text, email, tel, textarea fields |
| `VueSelectionButtonGroup` | `./components/ag/SelectionButtonGroup` | Newsletter frequency (radio, with `validationMessages`) |
| `VueToggle` | `./components/ag/Toggle` | Terms & Conditions (with `validationMessages`) |
| `VueButton` | `./components/ag/Button` | Submit and clear actions |
| `VueCard` | `./components/ag/Card` | Form and result containers |
| `VueDivider` | `./components/ag/Divider` | Separator below heading |

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
