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
npx agnosticui-cli add button input card divider
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

### 3. Native Form Reset

Wire the Clear button to `form.reset()`. Because `ag-input` implements
`formResetCallback()`, all inputs clear their values automatically:

```tsx
function handleReset() {
  formRef.current?.reset();
  // All ag-input values are cleared by the browser calling formResetCallback()
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

Use AgnosticUI `ReactInput` for all fields. Pass:
- `name` prop — required for FACE FormData submission
- `required` prop on mandatory fields
- `type` prop matching the field type
- `label` prop for visible labeling
- `errorMessage` prop with a sensible fallback message (shown when `invalid` is set)

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
| `ReactInput` | `./components/ag/Input` | All form fields |
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
- [ ] Clear button resets all fields to empty via `form.reset()`
- [ ] Email field rejects non-email values using native `type="email"` FACE constraint
- [ ] Phone field is optional — form submits without it
- [ ] All labels are visible and associated with their inputs
- [ ] Error messages are rendered with `role="alert"` for screen reader announcements
