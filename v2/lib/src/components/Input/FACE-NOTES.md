# FACE Implementation Notes: AgInput

_Captured during implementation of GitHub Issue #274._
_This file will be used to derive a future article on refactoring FACE into web components._

---

## What is FACE?

Form Associated Custom Elements (FACE) is a browser API that lets custom elements
participate natively in HTML forms — just like `<input>`, `<select>`, and `<textarea>`.
It requires two things:

1. `static formAssociated = true` on the class
2. `this._internals = this.attachInternals()` in the constructor

Once set, the browser treats the custom element as a first-class form control, routing
form lifecycle events to it and including its value in `FormData` on submit.

**Browser support (as of Jan 2026):** ~95% global, including Safari 16.4+. No polyfill needed.

- Why is it important to implement Form-Associated Custom Elements when building web components?
  A. Implementing FACE is critical because it bridges the "capability gap" between standard HTML elements and custom Web Components. Without it, a custom input field (like a stylized slider or date picker) is essentially "invisible" to the browser's native <form> element

Native elements like <input>, <select>, or <textarea> participate in standard HTML forms which means:

- they will be included in the FormData object during a form submission. FACE is a means to
- they can utilize native form validation APIs (like setValidity() and checkValidity()), allowing your component to show built-in browser error messages and block form submission when invalid.
- they will be better understood by assistive technologies in terms of the role and state within the form
- required for access to the ElementInternals API, which provides lifecycle hooks specifically for form states, such as when a form is reset or its state changes.

---

## What Was Implemented

### Core API

| Added                                  | Purpose                                                   |
| -------------------------------------- | --------------------------------------------------------- |
| `static formAssociated = true`         | Registers the element as form-associated                  |
| `private _internals: ElementInternals` | Handle returned by `attachInternals()`                    |
| `name` property (reflected)            | Required for value to appear in `FormData`                |
| `get form()`                           | Returns the parent `<form>` or null                       |
| `get validity()`                       | Current `ValidityState`, mirrored from inner input        |
| `get validationMessage()`              | Browser-generated validation message                      |
| `get willValidate()`                   | Whether the element participates in constraint validation |
| `checkValidity()`                      | Silent validity check; fires `invalid` event if invalid   |
| `reportValidity()`                     | Shows browser validation UI if invalid                    |

### Lifecycle Callbacks

| Callback                         | Behavior                                                     |
| -------------------------------- | ------------------------------------------------------------ |
| `formResetCallback()`            | Clears `value`, resets `ElementInternals` value and validity |
| `formDisabledCallback(disabled)` | Syncs `this.disabled` from parent `<fieldset disabled>`      |

### Value Submission

`_internals.setFormValue(this.value)` is called:

- In `_handleInput` — on every keystroke
- In `_handleChange` — on commit (blur/enter)
- In `firstUpdated` — to set the initial value on render

### Constraint Validation

The key architectural decision was to **delegate validation to the inner `<input>`** via
`_syncValidity()` rather than re-implementing constraint logic from scratch:

```typescript
private _syncValidity(): void {
  if (!this._inputElement) return;
  const el = this._inputElement;
  if (!el.validity.valid) {
    this._internals.setValidity(el.validity, el.validationMessage, el);
  } else {
    this._internals.setValidity({});
  }
}
```

This means all native HTML5 constraint attributes (`required`, `minlength`, `maxlength`,
`type="email"`, `type="url"`, `pattern`, etc.) work automatically via the inner `<input>`,
and we mirror that state into `ElementInternals` so the custom element's validity reflects
the inner element. Called on input, change, and after first render.

### Accessibility: Error Message Announcements

`_renderError()` now includes `role="alert"` and `aria-atomic="true"` on the error div.
This ensures screen readers announce the error immediately when it becomes visible after
user interaction (e.g. blur or form submit attempt). The element is always in the DOM
(registered with ATs on page load) but content is only present when invalid — this
pattern ensures reliable live region announcements across browsers and screen readers.

---

## What Was NOT Implemented (and Why)

### `formAssociatedCallback(form)`

The callback that fires when the element is associated/dissociated with a form. Not
needed for this implementation since we don't need to react to form changes. Logged
as a known extension point.

### `formStateRestoreCallback(state, mode)`

Handles session history restore and autofill. Not implemented in this issue — flagged
for a follow-up issue since autofill behavior requires additional UX decisions.

### Consumer-Controlled Validation Messages

The browser generates validation messages like "Please fill in this field." The locale
and exact wording are browser-controlled. For most apps this is fine, but
internationalized apps or those with UX-specific copy need control over these strings.

**This is flagged for a follow-up issue.** Two approaches are documented below.

---

## IOC Options for Consumer-Controlled Validation Messages

### Background

`ElementInternals.setValidity(flags, message, anchor)` accepts a custom `message` string.
If we call it with a custom message, we override the browser's default. The question is:
_who provides that message, and how?_

This is the Inversion of Control (IOC) problem: the component knows _when_ something is
invalid, but the consumer knows _what message to show_ (locale, brand voice, UX copy).

---

### Option A: Event-Driven Callback (Custom `ag-validate` Event)

The component fires a `ag-validate` custom event when validity changes. The consumer
handles the event and returns a message by setting `event.detail.message`.

**Implementation sketch:**

```typescript
// In _syncValidity():
const validateEvent = new CustomEvent("ag-validate", {
  bubbles: true,
  composed: true,
  cancelable: false,
  detail: {
    validity: el.validity,
    nativeMessage: el.validationMessage,
    message: el.validationMessage, // consumer can overwrite this
  },
});
this.dispatchEvent(validateEvent);

const customMessage = validateEvent.detail.message ?? el.validationMessage;
this._internals.setValidity(el.validity, customMessage, el);
```

**Consumer usage:**

```html
<ag-input name="email" type="email" required @ag-validate="${(e)" ="">
  { if (e.detail.validity.valueMissing) e.detail.message =
  t('errors.emailRequired'); if (e.detail.validity.typeMismatch)
  e.detail.message = t('errors.emailInvalid'); }} ></ag-input
>
```

**Tradeoffs:**

| Pro                                               | Con                                                          |
| ------------------------------------------------- | ------------------------------------------------------------ |
| Pure IOC — consumer has full control per-instance | Event fires on every input (perf concern for large forms)    |
| Works with any i18n library                       | `CustomEvent` mutation pattern is unfamiliar to some devs    |
| No component API change needed                    | Message is synchronous only — no async validators            |
| Works across frameworks (vanilla, React, Vue)     | `detail.message` mutation relies on object reference sharing |

---

### Option B: Validation Map Property (`validationMessages`)

Consumer passes a plain object mapping `ValidityState` flag names to message strings.
The component uses this map when setting validity.

**Implementation sketch:**

```typescript
// New property on AgInput:
@property({ attribute: false })
validationMessages?: Partial<Record<keyof ValidityState, string>>;

// In _syncValidity():
const nativeMessage = el.validationMessage;
let message = nativeMessage;

if (this.validationMessages && !el.validity.valid) {
  for (const [flag, msg] of Object.entries(this.validationMessages)) {
    if (el.validity[flag as keyof ValidityState]) {
      message = msg;
      break;
    }
  }
}

this._internals.setValidity(el.validity, message, el);
```

**Consumer usage (React):**

```tsx
<AgInput
  name="email"
  type="email"
  required
  validationMessages={{
    valueMissing: t("errors.emailRequired"),
    typeMismatch: t("errors.emailInvalid"),
  }}
/>
```

**Tradeoffs:**

| Pro                                                | Con                                                             |
| -------------------------------------------------- | --------------------------------------------------------------- |
| Declarative — easy to read and understand          | Messages are evaluated at render time, not at validation time   |
| Familiar pattern (similar to React form libraries) | First-class support only in framework wrappers (not plain HTML) |
| No events required                                 | Consumer must know `ValidityState` key names                    |
| Easy to type with TypeScript                       | Doesn't support dynamic/computed messages without re-render     |

---

### Recommendation

Both options are viable. **Option A** is more powerful and works universally across
frameworks; **Option B** is more ergonomic in component-framework contexts (React, Vue).
A follow-up issue should decide which to implement (or both with Option B as the primary
API and Option A as an escape hatch).

---

## Known Complexity & Mental Model Notes

- `ElementInternals` does **not** automatically wire up form behaviors. Even with
  `formAssociated = true`, values are only submitted if you explicitly call
  `setFormValue()`. Required validation only works if you call `setValidity()` with
  the correct flags. Nothing is inherited automatically.

- `formDisabledCallback` only fires when the ancestor `<fieldset disabled>` state
  changes — it does not fire for the element's own `disabled` attribute. Both paths
  must be handled.

- The inner `<input>` still has its own `required` / `disabled` attributes for visual
  and native UX. The FACE layer adds the host element's form participation on top.

- `_syncValidity()` runs on every input event. This is correct — validity must stay
  current. For most inputs this is negligible; for very frequent updates (e.g. live
  regex matching on large forms), debouncing may be worth exploring.

---

## Future Work

### Suggestions for Improvement/Investigation

1. The `disabled` Property Sync
   In `formDisabledCallback`, you are forcefully setting `this.disabled`. However, if the component has its own `disabled` property via an attribute (e.g., `<ag-input disabled>`), and then the `<fieldset>` is enabled/disabled, you might create a conflict.

_Refinement: Use a private boolean like \_parentDisabled and combine it with the local disabled state in your Lit render() method or a getter._

2. Handling the "Value" Property
   Standard HTML form elements usually have a `value` property that mirrors what is in the form. While the mixin shouldn't call `setFormValue`, it might be helpful to include a placeholder or a standard getter for value in the interface to ensure all your form components share that property name.

### TODOs

- [ ] Implement `formStateRestoreCallback` for autofill / session history (new issue)
- [ ] Decide on IOC strategy for validation messages and implement (new issue)
- [ ] Add `CustomStateSet` (`_internals.states`) for CSS pseudo-class support (`:--invalid`, `:--focused`) (new issue)
- [ ] Apply FACE to remaining form components per `FACE-PLANNING.md`
