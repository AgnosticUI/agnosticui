# Lit Form Association (FACE) Playbook

## Overview

This playbook builds a **Contact Form** as a plain Lit web component that demonstrates
Form Associated Custom Elements (FACE) with AgnosticUI's `ag-input`. The key scenario
is using the browser's native `FormData` API and `form.elements` to loop through
FACE-enabled inputs for validation and submission.

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
npm create vite@latest lit-example -- --template vanilla-ts
```

### Install Dependencies

```bash
cd lit-example
npm install
npm install lit
cd ..
```

### Initialize AgnosticUI

```bash
cd lit-example
npx agnosticui-cli init --framework lit --skip-prompts
npx agnosticui-cli add button input card divider
cd ..
```

**Post-init verification:**
- Ensure `ag-tokens.css` and `ag-tokens-dark.css` are in `src/components/ag/styles/`
- Import both in `main.ts`

---

## Application Spec

Build a `<contact-form>` Lit component containing a **Contact Form** with:

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

Handle form submit with native `FormData` — `ag-input` values are included
automatically because they are form-associated:

```ts
private _handleSubmit(e: SubmitEvent) {
  e.preventDefault();
  const form = e.target as HTMLFormElement;

  // FACE: ag-input values are included in FormData natively
  const data = new FormData(form);
  this._submissionData = Object.fromEntries(data.entries()) as Record<string, string>;
}
```

### 2. Loop form.elements to Validate Programmatically

Iterate `form.elements` before showing success to surface browser validation tooltips:

```ts
private _validateAll(form: HTMLFormElement): boolean {
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

### 3. Native Form Reset

Call `form.reset()` on the clear button. `ag-input`'s `formResetCallback()` fires
automatically, clearing all values:

```ts
private _handleReset() {
  this.shadowRoot?.querySelector('form')?.reset();
  this._submissionData = null;
  this.requestUpdate();
}
```

---

## Component Layout

```
┌──────────────────────────────────────────┐
│  ag-card                                 │
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

### contact-form.ts

Create a `ContactForm` class extending `LitElement`. Key elements:

1. **Shadow DOM** — form lives inside shadow DOM, so `formRef` must query `this.shadowRoot`
2. **State** — a single `@state() private _submissionData: Record<string, string> | null = null`
3. **Import ag-input** — `import '../components/ag/Input/core/Input.js'`

### `main.ts`

```ts
import './components/ag/styles/ag-tokens.css';
import './components/ag/styles/ag-tokens-dark.css';
import './contact-form'; // registers <contact-form>
```

```html
<!-- index.html body -->
<contact-form></contact-form>
```

### Styling (inside component)

Use `css` tagged template with design tokens:
- Container: `max-width: 540px; margin: 0 auto; padding: var(--ag-space-8)`
- Fields container: `display: flex; flex-direction: column; gap: var(--ag-space-4)`
- Button row: `display: flex; gap: var(--ag-space-3); justify-content: flex-end`
- Result card: `background: var(--ag-background-secondary); border-radius: var(--ag-radius-md); padding: var(--ag-space-4)`

### AgnosticUI Components to Use

| Tag | Import | Usage |
|-----|--------|-------|
| `<ag-input>` | `../components/ag/Input/core/Input.js` | All form fields |
| `<ag-button>` | `../components/ag/Button/core/Button.js` | Submit and clear |
| `<ag-card>` | `../components/ag/Card/core/Card.js` | Form container |
| `<ag-divider>` | `../components/ag/Divider/core/Divider.js` | Separator |

---

## Acceptance Criteria

- [ ] Submitting with empty required fields shows browser validation tooltips
- [ ] Submitting with valid data shows a result card with the collected `FormData` values
- [ ] Clear button resets all fields to empty via `form.reset()`
- [ ] Email field rejects non-email values using native `type="email"` FACE constraint
- [ ] Phone field is optional — form submits without it
- [ ] All labels are visible and associated with their inputs
- [ ] Error messages are rendered with `role="alert"` for screen reader announcements
