# FACE Implementation Notes

_Working notes captured during Issues #274 (AgInput) and #301 (AgToggle) and ongoing rollout._
_This file is the content source for a future article on implementing FACE in web components._

---

## What is FACE?

Form Associated Custom Elements (FACE) is a browser API that lets custom elements
participate in HTML forms the same way `<input>`, `<select>`, and `<textarea>` do.
Two things are required:

1. `static formAssociated = true` on the class
2. `this._internals = this.attachInternals()` in the constructor

Once those are in place, the browser treats the element as a real form control. It
gets included in `FormData` on submit, it participates in constraint validation, and the
browser routes form lifecycle events (`reset`, `disabled`) to it.

**Browser support (as of Jan 2026):** ~95% globally, Safari 16.4+. No polyfill needed.

---

## Spot-Checking That FACE Actually Works

Before getting into the details of the implementation, it's worth knowing how to verify
that a component is properly form-associated. There are a few ways to do this without
writing any tests.

### 1. FormData on submit

The simplest check. Build a small HTML page with a `<form>` containing your component
and a submit button. Add a submit handler that logs the form data:

```html
<form id="test-form">
  <ag-input name="email" label="Email" type="email"></ag-input>
  <button type="submit">Submit</button>
</form>

<script>
  document.getElementById('test-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    console.log(data); // { email: "whatever you typed" }
  });
</script>
```

If the component's `name` and value show up in that object, form submission is working.
If the key is missing entirely, `setFormValue()` isn't being called, or `formAssociated`
isn't set, or the `name` attribute is missing.

You can also set a breakpoint inside the submit handler and inspect the `FormData` object
in the debugger if you prefer.

### 2. DevTools console: `$0.form`

Click on the component in the Chrome DevTools Elements panel so it becomes `$0`, then
switch to the Console and type:

```js
$0.form       // should return the parent <form> element
$0.name       // should return the name attribute value
$0.willValidate // should return true
```

If `$0.form` returns `undefined` instead of a form element, the browser doesn't recognize
the element as form-associated. That means either `formAssociated = true` is missing or
`attachInternals()` wasn't called in the constructor.

You can also check that the element appears in the form's element collection:

```js
Array.from(document.querySelector('form').elements)
// your ag-* element should be in this list
```

Native inputs, selects, textareas, and FACE custom elements all show up here. Non-FACE
custom elements don't.

### 3. Constraint validation (defer until after IOC decisions)

Verifying that `required`, `minlength`, etc. actually block form submission and show
the right messages is worth testing, but it gets more involved once we add consumer
control over validation messages. The basic check is:

```js
$0.validity.valid     // false if the field is in an invalid state
$0.reportValidity()   // triggers browser validation UI, returns true/false
```

This is straightforward for components using the delegation strategy (AgInput). For
components with direct validity implementation (AgToggle, AgCheckbox), it's worth
confirming the right `ValidityState` flags are set. Leave the deeper validation spot
checks until after the IOC work is done since the message behavior will change.

---

## Why It Matters for Design Systems

Without FACE, a custom form component is invisible to `<form>`. It can look like an
input, behave like one, and fire all the right events — but the browser doesn't know it
exists as a form control.

What that means in practice:

- Values don't show up in `FormData` on submit. You have to collect them manually.
- `required`, `minlength`, `type="email"` — none of it applies to the host element.
  `form.checkValidity()` skips it entirely.
- `form.reset()` does nothing.
- `<fieldset disabled>` doesn't propagate disabled state into the component.

For a design system this is a real problem because it pushes integration work onto every
consumer. Every team using `ag-input` or `ag-toggle` has to manually collect values,
manually reset forms, manually handle disabled state from fieldsets. FACE removes all of
that.

---

## Lit Mixins: Why We Went This Route

When rolling FACE out across multiple components, the first question was where the shared
boilerplate should live. The boilerplate is identical on every form component:

- `static formAssociated = true`
- `attachInternals()` in the constructor
- `name` reflected property
- Getters for `form`, `validity`, `validationMessage`, `willValidate`
- `checkValidity()` and `reportValidity()`
- `formDisabledCallback()`

That's roughly 15-20 lines that have nothing to do with what any given component does.
Copying it everywhere works but means any future fix has to land in N files.

### Why Not a Base Class?

A shared `AgFormControl extends LitElement` base class is the obvious first instinct.
The problem is TypeScript (and JS) only allows single inheritance. Any component that
needs to extend something else is stuck. Base classes also accumulate unrelated stuff
over time.

### What a Lit Mixin Actually Is

A mixin is just a function that takes a class and returns a new class extending it with
additional behavior. Lit documents this pattern at [lit.dev/docs/composition/mixins](https://lit.dev/docs/composition/mixins/).

```typescript
type Constructor<T = {}> = new (...args: any[]) => T;

export const FaceMixin = <T extends Constructor<LitElement>>(superClass: T) => {
  class FaceElement extends superClass {
    static readonly formAssociated = true;
    protected _internals!: ElementInternals;

    constructor(...args: any[]) {
      super(...args);
      this._internals = this.attachInternals();
    }
    // ... shared getters, callbacks
  }
  return FaceElement as unknown as Constructor<FaceMixinInterface> & T;
};
```

At the call site:

```typescript
export class AgInput extends FaceMixin(LitElement) { ... }
export class AgToggle extends FaceMixin(LitElement) { ... }
```

Composable too: `MyElement extends MixinA(MixinB(LitElement))`.

### The TypeScript Wrinkle

Mixins with `protected` members hit a TypeScript error (TS4094) when declaration emit is
on. The Lit-recommended workaround is a companion `declare class` that describes the same
shape:

```typescript
// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export declare class FaceMixinInterface {
  static readonly formAssociated: boolean;
  protected _internals: ElementInternals;
  name: string;
  readonly form: HTMLFormElement | null;
  // ...
}
```

The mixin returns `FaceElement as unknown as Constructor<FaceMixinInterface> & T`.
Subclasses get a clean typed interface. It's a known pattern but the double-declaration
is a bit surprising the first time you see it.

---

## What We Put in FaceMixin vs. What Stayed in the Component

The hard part was deciding what counts as shared infrastructure vs. component-specific
behavior.

### What's in FaceMixin

Everything that depends only on `ElementInternals` and the FACE contract, not on what
the component looks like or what its value means:

| Member | Why it's here |
|--------|--------------|
| `static formAssociated = true` | Same on every FACE component |
| `attachInternals()` in constructor | Must happen in constructor; same everywhere |
| `name` reflected property | Needed for FormData; same shape on every component |
| `get form()` | Delegates to `_internals.form` |
| `get validity()` | Delegates to `_internals.validity` |
| `get validationMessage()` | Delegates to `_internals.validationMessage` |
| `get willValidate()` | Delegates to `_internals.willValidate` |
| `checkValidity()` | Thin wrapper on `_internals.checkValidity()` |
| `reportValidity()` | Thin wrapper on `_internals.reportValidity()` |
| `formDisabledCallback(disabled)` | Same pattern everywhere: sync `this.disabled` from fieldset |
| `formResetCallback()` no-op | Subclasses must override with their own reset logic |

### What Stays in the Component

Anything that depends on the component's own state, rendering, or what "value" means:

| Member | Why it stays |
|--------|-------------|
| `setFormValue()` calls | Only the component knows when its value changes and what to submit |
| `formResetCallback()` override | Each component has a different default state |
| `_syncValidity()` | Each component has different validation logic |

FaceMixin owns the infrastructure. The component owns the semantics.

---

## Two Validation Approaches

One of the more interesting things we figured out during the rollout is that constraint
validation falls into two different cases depending on what's inside the component.

### Delegating to an Inner Input (AgInput)

`AgInput` renders a native `<input>` or `<textarea>` inside its shadow DOM. That inner
element already runs the browser's full constraint validation — `required`, `minlength`,
`maxlength`, `type="email"`, `pattern` all work natively on it.

Instead of re-implementing all of that, we mirror the inner element's validity state into
`ElementInternals`. A small helper does this:

```typescript
export function syncInnerInputValidity(
  internals: ElementInternals,
  inputEl: HTMLInputElement | HTMLTextAreaElement | null | undefined
): void {
  if (!inputEl) return;
  if (!inputEl.validity.valid) {
    internals.setValidity(inputEl.validity, inputEl.validationMessage, inputEl);
  } else {
    internals.setValidity({});
  }
}
```

The third argument to `setValidity` is an anchor element — it tells the browser where
to render its native validation tooltip. Passing the inner `<input>` puts it in the right
place visually.

This gives us all of HTML5 constraint validation for free. New constraint types added to
the spec later will also just work.

### Direct Implementation (AgToggle, AgCheckbox, AgRadio, ...)

`AgToggle` uses `<button role="switch">` internally. No inner `<input>` to delegate to.
So we implement `_syncValidity()` directly against the component's own state:

```typescript
private _syncValidity(): void {
  if (this.required && !this.checked) {
    this._internals.setValidity({ valueMissing: true }, 'Please check this field.');
  } else {
    this._internals.setValidity({});
  }
}
```

For toggle and checkbox components, `required` is the only constraint that applies, so
this stays simple. For `AgSlider` you'd need `rangeUnderflow`, `rangeOverflow`, and
`stepMismatch`. For `AgCombobox` you'd need to decide whether free-text input counts as
a valid value or only a selected option does.

### The Rule

If your component renders an inner `<input>` or `<textarea>`, use `syncInnerInputValidity()`.
If not, implement `_syncValidity()` directly against component state.

---

## AgInput: The Reference Implementation

AgInput was the first component to get FACE and served as the pattern all others follow.

### What Changed

`AgInput` got `static formAssociated = true`, `attachInternals()`, the `name` property,
getters for `form`/`validity`/etc., `checkValidity`/`reportValidity`, `formDisabledCallback`,
`formResetCallback`, and `_syncValidity()` via delegation. Rather than putting all of this
on `AgInput` directly, we extracted it to `FaceMixin` so subsequent components could reuse it.

### Value Submission

`_internals.setFormValue(this.value)` is called:

- In `_handleInput` on every keystroke
- In `_handleChange` on commit (blur/enter)
- In `firstUpdated` to set the initial value on first render

### Validation Delegation

Uses `syncInnerInputValidity()`. All native HTML5 constraints work through the inner
`<input>` automatically. Called on input, change, and after first render.

### Accessible Error Messages

`_renderError()` uses `role="alert"` and `aria-atomic="true"` on the error container.
The element is always in the DOM so screen readers register it on page load, but its
content is only populated when `invalid && errorMessage`. That way the AT announcement
fires reliably when content changes, rather than when the element appears.

---

## AgToggle: The Checkbox-Pattern Component

AgToggle showed that FACE isn't one pattern — it's a family of them. Toggle and checkbox
components share semantics that are different from text inputs.

### The Null Form Value

```typescript
this._internals.setFormValue(this.checked ? (this.value || 'on') : null);
```

A native `<input type="checkbox">` that is unchecked is simply absent from `FormData`.
It doesn't submit an empty string. Passing `null` to `setFormValue` replicates this.
The `'on'` default matches what a native checkbox submits when no `value` attribute is set.

This sounds like a small detail but it matters for any server that processes form
submissions — a missing key and an empty string key are handled differently.

### Direct Validity

Only `required` applies to a toggle. No inner `<input>` to delegate to:

```typescript
private _syncValidity(): void {
  if (this.required && !this.checked) {
    this._internals.setValidity({ valueMissing: true }, 'Please check this field.');
  } else {
    this._internals.setValidity({});
  }
}
```

### Where _syncValidity Gets Called

For AgInput it's called on every keystroke. For AgToggle it's called in `_performToggle()`
on every state change. The timing is different but the principle is the same: validity
must always reflect current state.

---

## AgCheckbox: Same Pattern, Two Strategies Meet

AgCheckbox is the most instructive component in the rollout because it sits at the
intersection of both validation strategies. It looks like a checkbox (checked/unchecked,
`null` when unchecked) so the form value semantics match AgToggle — but internally it
renders a real `<input type="checkbox">`, which means we can delegate validation to it
just like AgInput.

### Shadow DOM Inputs Don't Submit to Parent Forms

This is worth spelling out because it's surprising the first time. `AgCheckbox` has an
inner `<input type="checkbox">` in its shadow DOM with `name` and `value` set on it. You
might expect that input to submit to the parent form. It doesn't. Shadow DOM inputs are
isolated from the parent document's form. The inner checkbox was never submitting anything.
Only `setFormValue()` connects the host element to the parent form.

This is also why FACE is necessary for any component that renders inputs inside shadow DOM.
The browser can't see them.

### Delegation Still Applies

Even though AgCheckbox is a checkbox-pattern component (null when unchecked), it still has
an inner `<input type="checkbox">` that runs native constraint validation. So `_syncValidity()`
can still delegate:

```typescript
private _syncValidity(): void {
  syncInnerInputValidity(this._internals, this.inputRef);
}
```

The inner `<input type="checkbox" required>` has `validity.valueMissing = true` when
unchecked. We mirror that into `ElementInternals`. No custom flag logic needed.

This is the delegation strategy working on a non-text input. The `syncInnerInputValidity`
helper doesn't care what type of input it is — it just mirrors whatever validity state
the native input has.

### Programmatic Changes Need Syncing Too

AgInput syncs on every keystroke. AgToggle syncs in `_performToggle`. AgCheckbox adds a
wrinkle: `checked` can be changed programmatically (a "select all" button, test code, a
parent component setting state). User interaction goes through `handleChange`. Programmatic
changes go through Lit's `updated()` lifecycle. Both paths need to call `setFormValue` and
`_syncValidity`:

```typescript
// User interaction
handleChange(e: Event) {
  this.checked = input.checked;
  this._internals.setFormValue(this.checked ? (this.value || 'on') : null);
  this._syncValidity();
}

// Programmatic assignment
updated(changedProperties: Map<string, unknown>) {
  if (changedProperties.has('checked') || changedProperties.has('indeterminate')) {
    this._internals.setFormValue(this.checked ? (this.value || 'on') : null);
    this._syncValidity();
  }
}
```

This is the right pattern for any component where state can change through user interaction
OR programmatic property assignment. It's worth calling out in the article because it's easy
to wire up the event handler path and forget the programmatic path.

### Indeterminate State

An indeterminate checkbox is visually neither checked nor unchecked. For form submission,
indeterminate is treated as unchecked: the field is absent from `FormData`. `formResetCallback`
restores both `checked` and `indeterminate` to false.

---

## AgSelect: Multi-Value Submission and a Wider Helper

AgSelect introduced two things the previous components hadn't needed.

### The FormData Overload

`setFormValue()` has three signatures. The one we've used so far takes a string (or null).
For multi-select, a single string isn't enough — the user may have several options selected,
all under the same key. `setFormValue()` also accepts a `FormData` object for exactly this:

```typescript
private _syncFormValue(): void {
  if (!this.selectElement) return;
  if (this.multiple) {
    const formData = new FormData();
    Array.from(this.selectElement.selectedOptions).forEach(opt => {
      formData.append(this.name, opt.value);
    });
    this._internals.setFormValue(formData);
  } else {
    this._internals.setFormValue(this.selectElement.value || '');
  }
}
```

This matches how a native `<select multiple>` works: all selected values are submitted
under the same `name` key, producing an array on the server side.

It's also worth separating `_syncFormValue()` from `_syncValidity()` as distinct private
methods. AgInput called them together in a single `_syncValidity()` call, but here the
form value logic is substantive enough to merit its own name — and `formResetCallback`
needs to call them independently anyway.

### Widening syncInnerInputValidity

The `syncInnerInputValidity` helper was typed for `HTMLInputElement | HTMLTextAreaElement`.
An `HTMLSelectElement` has the same `.validity` and `.validationMessage` properties, so
widening the type was a one-line change. The delegation strategy isn't tied to `<input>` —
any native form element with a `ValidityState` can serve as the validation source.

### Resetting to Default Selected

`option.defaultSelected` reflects the `selected` attribute as originally parsed from HTML.
It doesn't change when the user makes a selection. That makes it the correct anchor for
`formResetCallback`:

```typescript
formResetCallback(): void {
  if (this.selectElement) {
    Array.from(this.selectElement.options).forEach(opt => (opt.selected = opt.defaultSelected));
  }
  this._syncFormValue();
  this._internals.setValidity({});
}
```

This matches native `<select>` behavior: form reset restores to however the HTML was
originally written, not to "nothing selected."

---

## What We Skipped and Why

### `formAssociatedCallback(form)`

Fires when the element is associated or dissociated from a form (moved in the DOM). None
of our components need to react to form changes right now. Documented as a known extension
point.

### `formStateRestoreCallback(state, mode)`

Handles autofill and session history restore (back button). Deferred because it requires
UX decisions about what restoring a custom component's state should actually look like,
especially for composite components. Worth its own issue.

### Consumer-Controlled Validation Messages

The browser generates messages like "Please fill in this field." in whatever the browser's
locale is. That's fine for most apps. Internationalized apps need control over the copy.

Two approaches were designed (see next section). Both are deferred until the full FACE
rollout is done across all components, so we can apply the IOC API consistently everywhere
rather than making a decision mid-rollout and getting inconsistency.

---

## IOC Options for Consumer-Controlled Validation Messages

`ElementInternals.setValidity(flags, message, anchor)` takes a custom message string. If
we pass one, we override whatever the browser would say. The question is who provides
that string and how the component and consumer share the responsibility.

### Option A: Event-Driven (`ag-validate` event)

The component fires `ag-validate` when validity changes. The consumer handles it and
overwrites `event.detail.message` with whatever string they want.

```typescript
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

| Pro | Con |
|-----|-----|
| Works in plain HTML and all frameworks | Fires on every input event |
| Consumer has full per-instance control | Mutating `event.detail` is unfamiliar to many devs |
| No new component API needed | Synchronous only, no async validators |

### Option B: Validation Map Property

Consumer passes an object that maps `ValidityState` flag names to message strings.

```typescript
@property({ attribute: false })
validationMessages?: Partial<Record<keyof ValidityState, string>>;
```

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

| Pro | Con |
|-----|-----|
| Declarative and easy to read | Evaluated at render time, not validation time |
| Familiar (similar to many React form libraries) | Doesn't work in plain HTML, only framework wrappers |
| Easy to type with TypeScript | Consumer must know `ValidityState` flag names |

### Where We Landed

Both are useful. Option A covers more ground (plain HTML, all frameworks, runtime
messages). Option B is the nicer API in React/Vue. The cleanest path is probably Option B
as the primary API with Option A available for cases that need runtime control. Decision
deferred until the component rollout is complete.

---

## Things That Surprised Us Along the Way

- `formAssociated = true` does nothing by itself. Values don't appear in `FormData`
  until you call `setFormValue()` explicitly. Validation doesn't work until you call
  `setValidity()`. Nothing is inherited automatically. The annotation just opens the door.

- `formDisabledCallback` only fires when a `<fieldset disabled>` ancestor changes state.
  It does NOT fire when the element's own `disabled` attribute is set. You have to handle
  both paths. A future improvement worth making: use a private `_parentDisabled` flag and
  combine it with the element's own `disabled` in a getter, so the two sources don't stomp
  on each other.

- The inner `<input>` and the host element both have `required` and `disabled` attributes.
  They serve different purposes. The inner element handles native browser UI: the tooltip
  anchor, focus ring, placeholder styling. `ElementInternals` handles the host element's
  participation in the form. Both layers have to stay in sync.

- Passing `null` to `setFormValue` is different from passing an empty string. `null` means
  the field isn't in `FormData` at all. For checkbox and toggle components this distinction
  is important: unchecked means absent, not empty.

---

## Future Work

- [ ] `formStateRestoreCallback` for autofill and session history (separate issue)
- [ ] IOC validation messages across all FACE components (separate issue, after rollout completes)
- [ ] `CustomStateSet` via `_internals.states` for CSS pseudo-class support (`:--checked`, `:--invalid`, etc.)
- [ ] `_parentDisabled` refinement for `formDisabledCallback` to avoid conflict with local disabled attribute
- [ ] Apply FACE to remaining components per `FACE-PLANNING.md`
