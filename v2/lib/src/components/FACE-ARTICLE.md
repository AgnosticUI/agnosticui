# Form-Associated Custom Elements in Practice

I was well over three quarters of the way through rewriting the AgnosticUI components in Lit when I realized I had a massive blind spot. My `<ag-input>` looked solid and fired events correctly, but it lacked Form-Associated Custom Element (FACE) support. This meant it was essentially invisible to native `<form>` submissions.

I was completely unaware of this until a conversation with my friend [Marc van Neerven](https://www.linkedin.com/in/mvneerven/). We were discussing accessibility hurdles with `<label>` elements inside a Web Component’s Shadow DOM when Marc pointed out the importance of **form association**.

Fueled by the mild embarrassment of having missed something so fundamental, I immediately started digging through MDN to understand how this Form-Associated Custom Element stuff worked. I understood that native HTML form controls have built-in submission logic and `FormData` support, but I had absolutely no idea the FACE API even existed.

It's a massive facepalm moment when you believe you're "code complete" on a dozen different form components only to realize they don't support the most basic functionality of a form. If you wrap a naively built custom element in a `<form>` and hit submit, the browser will have no idea the component is even there. Try setting a breakpoint on your submit handler; you'll see an empty `FormData` object staring back at you.

That empty object is what eventually reaches your server. Additionally, if you call `form.reset()`, your custom fields remain filled, and even a `<fieldset disabled>` wrapper gets completely ignored.

Fixing this meant retrofitting every single form component in AgnosticUI. It was a massive undertaking, but it forced me to distill the spec's complexities into a single, reusable Lit mixin. This helped encapsulate the boilerplate in one place, keeping the code DRY and ensuring my components finally became form-aware.

The following is what I learned during that process.

---

## What FACE Actually Is

Enabling FACE starts with a deceptive bit of boilerplate. You tell the browser your element wants to participate in forms, and then you grab a handle to the `ElementInternals` API.

```typescript
class MyInput extends HTMLElement {
  static formAssociated = true; // The "I'm a form control" flag

  constructor() {
    super();
    // This gives you the keys to the kingdom
    this._internals = this.attachInternals();
  }
}
```

If only it ended there. While those two steps "engage" the API, the actual work happens through `ElementInternals`. This is your side of the contract with the browser's form system. It isn't just a single property; it's a suite of methods that let your component finally talk to the parent `<form>`.

Through `_internals`, you can:

- **Submit a value:** Use `setFormValue()` so your element actually shows up in `FormData`.
- **Report validity:** Use `setValidity()` to participate in `form.checkValidity()` and trigger native browser validation UI.
- **Manage state:** Use the `.states` property to toggle custom pseudo-classes like `:state(checked)`, which is a lifesaver for styling.
- **Access metadata:** Read properties like `.form`, `.willValidate`, or `.validationMessage` directly from the instance.

On the flip side, the browser expects you to handle specific lifecycle callbacks. It'll call `formResetCallback` when the form clears, `formDisabledCallback` when a `<fieldset disabled>` ancestor changes, and `formStateRestoreCallback` when the browser tries to help the user autofill a form after a navigation.

It's a lot of "stuff" to manage. As of early 2026, browser support is around 95% (Safari 16.4+), so we're finally at a point where we can use this without reaching for a clunky polyfill.

---

## Why It Matters for Design Systems

If you've built a design system with non-form-aware components, this is what happens:

- **Values don't appear in `FormData` on submit.** This forces teams to manually collect values in JavaScript before sending anything to the server. Not ideal.
- **Standard attributes like `required` or `minlength` are ignored.** If a dev calls `form.checkValidity()`, the browser just skips over your custom elements entirely.
- **Calling `form.reset()` does nothing.** Teams have to write extra "cleanup" code just to clear out the state of your custom fields.
- **Wrapping components in a `<fieldset disabled>` is useless.** The components stay enabled because they aren't listening to the fieldset's state.

Every person consuming your library is forced to write custom integration code just to make a basic form work. By implementing FACE once at the component level, we remove that friction entirely. Let's fix that properly so our dev consumers get native form behavior for free.

---

## Sharing the Boilerplate: The Case for a Mixin

The first decision when rolling FACE out across a dozen components is where to put the shared code. The boilerplate is identical every time: you need the `static` flag, the `attachInternals()` call, and about six different getters to proxy the internal state.

In efforts to keep things DRY, a base class like `AgFormControl extends LitElement` seems like the obvious choice. But, JavaScript only allows single inheritance, so if a component already needs to extend something else, you’ll be stuck.

### The Lit Mixin Pattern

The solution is a mixin. It allows us to "plug in" form capabilities to any component while keeping the code DRY. To keep TypeScript happy with `protected` members, we use a companion `declare class`—this acts as a "blueprint" that tells the compiler exactly what the mixin is adding to the class.

```typescript
// 1. The "Blueprint" for TypeScript
export declare class FaceMixinInterface {
  static readonly formAssociated: boolean;
  protected _internals: ElementInternals;
  name: string;
  readonly form: HTMLFormElement | null;
  readonly validity: ValidityState;
  readonly validationMessage: string;
  readonly willValidate: boolean;
  checkValidity(): boolean;
  reportValidity(): boolean;
  formDisabledCallback(disabled: boolean): void;
  formResetCallback(): void;
}

type Constructor<T = {}> = new (...args: any[]) => T;

// 2. The Actual Mixin
export const FaceMixin = <T extends Constructor<LitElement>>(superClass: T) => {
  class FaceElement extends superClass {
    static readonly formAssociated = true;
    protected _internals: ElementInternals;

    @property({ type: String, reflect: true }) name = "";

    constructor(...args: any[]) {
      super(...args);
      this._internals = this.attachInternals();
    }

    get form() {
      return this._internals.form;
    }
    get validity() {
      return this._internals.validity;
    }
    get validationMessage() {
      return this._internals.validationMessage;
    }
    get willValidate() {
      return this._internals.willValidate;
    }

    checkValidity() {
      return this._internals.checkValidity();
    }
    reportValidity() {
      return this._internals.reportValidity();
    }

    formDisabledCallback(disabled: boolean) {
      (this as any).disabled = disabled;
    }

    formResetCallback() {
      /* Subclasses override this */
    }
  }
  // This cast merges the blueprint with the original class
  return FaceElement as unknown as Constructor<FaceMixinInterface> & T;
};
```

Using it is a one-liner: `export class AgInput extends FaceMixin(LitElement) { ... }`.

### Dividing the Labor

The mixin owns the **infrastructure**, but the component owns the **semantics**. Here is how I split the responsibilities:

- **The Mixin handles:** The `formAssociated` flag, `attachInternals`, the `name` property, and all proxy getters (like `validity` and `validationMessage`).
- **The Component handles:** Deciding _when_ to call `setFormValue()`, what actual value to submit, and the specific logic for `formResetCallback()`.

Each component knows what "value" means for itself. The mixin just provides the megaphone to tell the browser about it.

---

## Two Validation Strategies

One of the more instructive things the rollout revealed is that constraint validation splits cleanly into two strategies.

### Strategy 1: Let the Native Form Element Do the Work

If a component renders a native `<input>`, `<textarea>`, or `<select>` in its shadow DOM, delegate to it. That inner element already runs the browser's full constraint validation engine, so we get `required`, `minlength`, `pattern`, and every other native attribute for free. There's no reason to reimplement all of it.

Here's how we mirror the inner element's validity state into `ElementInternals`:

```typescript
export function syncInnerInputValidity(
  internals: ElementInternals,
  inputEl:
    | HTMLInputElement
    | HTMLTextAreaElement
    | HTMLSelectElement
    | null
    | undefined,
): void {
  if (!inputEl) return;

  if (!inputEl.validity.valid) {
    // We pass the inputEl as the "validation target" so the browser
    // knows where to point the validation bubble.
    internals.setValidity(inputEl.validity, inputEl.validationMessage, inputEl);
  } else {
    internals.setValidity({});
  }
}
```

The third argument to `setValidity` is the **validation target**. It tells the browser where to render the native validation bubble. By passing the inner `<input>`, the tooltip appears in the correct place (rather than floating awkwardly over the custom element's host boundary).

AgnosticUI components that use this pattern: `AgInput`, `AgCheckbox`, `AgSelect`.

> **The AgRadio Caveat:** Even though AgRadio renders an inner `<input type="radio">`, delegation isn't enough. Shadow DOM isolation actually breaks the native `required` constraint for radio groups. I'll explain how to handle that specifically in the AgRadio section below.

### Strategy 2: Implement Directly Against Component State

If a component uses a custom widget like `AgToggle` (which uses a `<button role="switch">`), there's no native input to delegate to. In these cases, we have to implement `_syncValidity()` directly against the component's reactive state.

While we use the `required` attribute in our component's API, the browser's internal validation engine tracks this failure as `valueMissing` so we use that in the call to `setValidity`.

```typescript
// AgToggle example
private _syncValidity(): void {
  if (this.required && !this.checked) {
    // Note: In a production library, 'validationMessage' should be a
    // localized property rather than a hard-coded string.
    this._internals.setValidity({ valueMissing: true }, this.validationMessage);
  } else {
    this._internals.setValidity({});
  }
}

```

For a required switch or checkbox, `valueMissing` is typically the only constraint that applies. A more complex custom component such as a range slider might, for example, account for flags like `rangeUnderflow` or `stepMismatch`.

**The rule:** If the component renders an inner native form control (like an `input`, `textarea`, or `select`), delegate. If it's a custom-built widget like `AgToggle`, we own the validation logic.

---

## How to Verify It's Working

The fastest way to confirm your FACE implementation is wired up correctly is to run a few manual "smoke tests" directly in the browser.

### 1. Check FormData on Submit

The ultimate proof is in the `FormData` object itself. Hook into a form's submit event and log the `entries`:

```javascript
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target).entries());
  console.log(data);
});
```

If your component's `name` and `value` are missing from that object, one of three things happened: `setFormValue()` wasn't called, `formAssociated` is missing, or the component doesn't have a `name` attribute set in the DOM.

### 2. Inspect via the DevTools Console

Select your component in the **Elements** panel so it becomes `$0` in the console, then run these checks:

```javascript
$0.form; // Should return the parent <form>, not undefined
$0.willValidate; // Should return true
$0.validity.valid; // Should reflect the current validation state
```

If `$0.form` returns `undefined`, the element isn't form-associated. This usually means `static formAssociated = true` is missing or `attachInternals()` wasn't called in the constructor.

### 3. Verify Form Participation

Finally, check if the form itself "sees" your component as one of its controls:

```javascript
Array.from(document.querySelector("form").elements).map((el) => el.tagName);
```

Your `<ag-*>` elements should appear in this list alongside native inputs.

---

## Component Walkthroughs

### AgInput: The Reference Implementation

`AgInput` established the pattern for the rest of the library. It is the textbook example of **Strategy 1: Delegation.**

**Value submission:** We call `_internals.setFormValue(this.value)` in three places: the `input` handler (every keystroke), the `change` handler (on commit), and during `firstUpdated`. Syncing on `firstUpdated` is vital—without it, the form doesn't know the initial value until the user clicks into the field.

**Validation (The Delegation Path):** Because `AgInput` renders a native `<input>`, we don't write custom logic for `required` or `minlength`. We simply point `ElementInternals` at the inner element’s state.

> **Wait, what if I don't have a native input?** > If you were building a custom slider or a star-rating component (Strategy 2), you wouldn't "sync" from an inner element. Instead, you would manually call `this._internals.setValidity({ valueMissing: true }, "Message")` inside your own property setters (like `set value()`).

**Accessible error messages:** The error container in `AgInput` uses `role="alert"` and `aria-atomic="true"`. Crucially, this container is **always** in the DOM; it isn't conditionally rendered. By only changing the _content_ of the alert, we ensure screen readers register the region on page load. If you "show/hide" the whole element, screen reader announcements become inconsistent.

---

### AgToggle: The Checkbox-Pattern Component

Toggle introduced two things that differ from text inputs.

**Null form value:** A native checkbox that is unchecked is simply absent from `FormData` — not an empty string. Passing `null` to `setFormValue` replicates this:

```typescript
this._internals.setFormValue(this.checked ? this.value || "on" : null);
```

The `'on'` default matches native checkbox behavior when no `value` attribute is set. This is a real distinction for any server that processes form submissions — a missing key and an empty-string key are handled differently.

**Direct validity:** Only `required` applies. No inner `<input>` to delegate to, so we implement it directly against `this.checked`. Called in `_performToggle()` on every state change.

> **The `value` property default:** Internally the component uses `this.value || 'on'` so that `FormData` submission always produces `'on'` when no value is configured. The property itself defaults to `''` — meaning "no explicit value set." The fallback keeps form behavior correct while the property API remains clean.

---

### AgCheckbox: Where the Two Strategies Meet

AgCheckbox is the most instructive component in the rollout because it sits at the intersection of both validation strategies.

**Shadow DOM inputs don't submit to parent forms.** This is worth spelling out because it's surprising the first time: `AgCheckbox` renders an inner `<input type="checkbox">` in shadow DOM with `name` and `value` set. You might expect that input to submit to the parent form. It doesn't. Shadow DOM inputs are isolated from the parent document's form. The inner checkbox was never submitting anything — only `setFormValue()` on the host connects the custom element to the form.

This is also why FACE is necessary for _any_ component that renders native inputs inside shadow DOM. The browser can't see them.

**Delegation still applies.** Even though AgCheckbox follows the checkbox-value pattern (null when unchecked), it renders a real `<input type="checkbox">` that runs native constraint validation. So `_syncValidity()` can delegate just like AgInput:

```typescript
private _syncValidity(): void {
  syncInnerInputValidity(this._internals, this.inputRef);
}
```

The delegation strategy doesn't care what type of input it mirrors — the helper reads `.validity` and `.validationMessage` and mirrors them. Any native form element works.

**Programmatic changes need syncing too.** AgInput syncs on every keystroke (user interaction). AgCheckbox adds a wrinkle: `checked` can be set programmatically — "select all" buttons, test code, parent components managing state. Both paths must call `setFormValue` and `_syncValidity`:

```typescript
// User interaction path
handleChange(e: Event) {
  this.checked = (e.target as HTMLInputElement).checked;
  this._internals.setFormValue(this.checked ? (this.value || 'on') : null);
  this._syncValidity();
}

// Programmatic path
override updated(changedProperties: Map<string, unknown>) {
  super.updated(changedProperties);
  if (changedProperties.has('checked') || changedProperties.has('indeterminate')) {
    this._internals.setFormValue(this.checked ? (this.value || 'on') : null);
    this._syncValidity();
  }
}
```

It's easy to wire up the event handler path and forget the programmatic path. Both are required.

---

### AgSelect: Multi-Value and the FormData Overload

`setFormValue()` has three overloads. The string overload covers most components. For multi-select, a single string isn't enough — the user may have several options selected, all under the same key. The `FormData` overload handles this:

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

This matches what a native `<select multiple>` produces: all selected values under the same `name` key, which yields an array on the server.

**Resetting to the original selection:** `option.defaultSelected` reflects the `selected` attribute as originally parsed from HTML. It doesn't change when the user makes a selection, making it the correct anchor for `formResetCallback`:

```typescript
override formResetCallback(): void {
  if (this.selectElement) {
    Array.from(this.selectElement.options)
      .forEach(opt => (opt.selected = opt.defaultSelected));
  }
  this._syncFormValue();
  this._internals.setValidity({});
}
```

This matches native `<select>` behavior: reset restores to however the HTML was originally written, not to "nothing selected."

---

### AgRadio: Group Sync and a Shadow DOM Isolation Surprise

AgRadio was flagged as high complexity in the planning document. Radio groups require coordination — when one is selected, the others must deselect and their FACE state must update. Native `<input type="radio">` gets this from the browser automatically. Elements in separate shadow DOM trees don't.

The form value coordination turned out to be simpler than expected. The validity coordination surfaced a real bug.

**Form value sync via Lit's reactive chain.** AgRadio already had `uncheckOtherRadiosInGroup()`, which walks the DOM to find sibling `ag-radio` elements with the same `name` and sets `sibling.checked = false` on each. That's a Lit `@property` assignment. Lit detects the change and calls `updated()` on each sibling. Wiring FACE sync there handles the group automatically:

```typescript
override updated(changedProperties: Map<string, unknown>) {
  super.updated(changedProperties);
  if (changedProperties.has('checked')) {
    this._syncFormValue();
    this._syncValidity();
  }
}
```

When the checked radio calls `uncheckOtherRadiosInGroup()`, each sibling's `checked` goes to `false`. Each sibling's `updated()` fires. Each sibling clears its form value. Lit's reactive property system is the coordination bus — no explicit cross-element notification needed.

**Form value semantics:** Each AgRadio is form-associated independently, all sharing a `name`. The checked radio submits `this.value`; unchecked radios pass `null`, excluding them from `FormData`. The result is exactly what a native radio group produces.

**Shadow DOM isolation breaks the delegation strategy for `required`.** This was not obvious until we tried it. AgRadio renders an inner `<input type="radio">` — which suggests delegation via `syncInnerInputValidity()` would work. In a native HTML radio group, the browser knows that `required` is satisfied if _any_ radio with the same name is checked. But each `ag-radio`'s inner input lives in its own isolated shadow root. The browser doesn't know about the other radios in other shadow trees. So each unchecked required radio independently reports `valueMissing: true` — even when another radio in the group is checked. `validateAll()` calls `reportValidity()` on each element; the unchecked ones fail with a spurious "Please select one of these options" tooltip.

The fix is direct group-aware validation: query the DOM to check whether _any_ `ag-radio[name="..."]` is checked. The key question is: what node should be the query root?

Our first instinct was to walk all the way up to the document, traversing through any shadow roots:

```typescript
// First attempt — wrong for Lit components
let root: Node = this.getRootNode();
while (root && 'host' in root) {
  const parent = (root as ShadowRoot).host?.getRootNode();
  if (parent && parent !== root) { root = parent; } else { break; }
}
const doc = root instanceof Document ? root : document;
return Array.from(doc.querySelectorAll(`ag-radio[name="${this.name}"]`))...
```

This worked in React and Vue (where `ag-radio` elements live in the document's light DOM), but failed in the Lit form-association example. In that example, the radios live inside `contact-form`'s shadow root — and `document.querySelectorAll()` cannot pierce shadow DOM. The traversal reached the document, the query found zero radios, and `_isGroupChecked()` always returned `false`.

The correct query scope isn't the document — it's wherever the radios actually live. `this.getRootNode()` returns exactly that: the shadow root for Lit-hosted elements, or the document for light-DOM elements. Use it directly:

```typescript
private _isGroupChecked(): boolean {
  if (this.checked) return true;
  // For radios inside a Lit shadow root, getRootNode() returns that shadow root
  // and querySelectorAll() reaches all radios within it.
  // For radios in document light DOM (React/Vue), getRootNode() returns the document.
  const root = this.getRootNode() as Document | ShadowRoot;
  return Array.from(root.querySelectorAll(`ag-radio[name="${this.name}"]`))
    .some((el) => (el as AgRadio).checked);
}

private _syncValidity(): void {
  if (!this.required) { this._internals.setValidity({}); return; }
  if (this._isGroupChecked()) {
    this._internals.setValidity({});
  } else {
    this._internals.setValidity({ valueMissing: true }, 'Please select one of these options.');
  }
}
```

The same `getRootNode()` scope applies to `uncheckOtherRadiosInGroup()` and `getRadiosInGroup()` — any method that queries for sibling `ag-radio` elements must use `this.getRootNode()`, not `document`.

**A second issue: siblings that were already unchecked don't re-sync.** When the user clicks radio B, `uncheckOtherRadiosInGroup()` sets `radio A.checked = false`. But radio A was _already_ `false`. Lit sees no property change and never calls `updated()` on radio A. Its `_syncValidity()` is never triggered. Radio A stays invalid in `_internals` even though the group now has a checked member.

The fix: `uncheckOtherRadiosInGroup()` explicitly calls `_syncValidity()` and `_syncStates()` on each sibling after setting `checked = false`. TypeScript allows this because both are instances of the same class, and TypeScript's `private` is class-level, not instance-level:

```typescript
allRadios.forEach((radio) => {
  if (radio !== this && radio instanceof AgRadio) {
    radio.checked = false;
    radio._syncValidity(); // force re-eval even if checked didn't change
    radio._syncStates();
  }
});
```

The lesson generalizes: whenever `uncheckOtherRadiosInGroup()` sets a property that was _already at its target value_, Lit won't fire `updated()`. Any FACE sync that depends on group state (not just this radio's own `checked`) must be explicitly triggered on siblings, not left to Lit's change detection.

---

### AgSlider: Migrating Hand-Rolled FACE to the Mixin

AgSlider was different — it already had partial FACE infrastructure written by hand. `static formAssociated = true`, `attachInternals()`, a `_updateFormValue()` method, and getters for `form` and `validity` were all already there.

The problem: it didn't use `FaceMixin`, so it was missing `formDisabledCallback` (fieldset disabled propagation) and `formResetCallback` (`form.reset()` support). It also never set its initial form value in `firstUpdated`.

**The migration was mostly deletion.** Remove `static formAssociated`, the private `_internals` field, `attachInternals()` from the constructor, the `name` property, and all six hand-rolled FACE getters. `FaceMixin` provides all of it. Then add the two missing pieces:

```typescript
override firstUpdated() {
  // Capture whatever value the consumer initially set
  this._defaultValue = Array.isArray(this.value)
    ? ([...this.value] as [number, number])
    : this.value;
  this._updateFormValue();
}

override formResetCallback(): void {
  this.value = Array.isArray(this._defaultValue)
    ? ([...this._defaultValue] as [number, number])
    : this._defaultValue;
  this._updateFormValue();
}
```

The existing `_updateFormValue()` already used the `FormData` overload for dual-slider mode — both min and max values submitted under the same `name` key. No changes needed there.

**Capturing default value:** `firstUpdated` fires after the component has processed its initial properties. Capturing `this.value` there ensures the default reflects whatever the consumer passed in, not the component's hardcoded default. For dual mode, the array is shallow-copied to avoid aliasing bugs when the live `value` changes.

---

### AgRating: Direct Validity, No Native Element

AgRating uses a custom `role="slider"` div — no inner `<input>`. Like AgToggle, that means implementing `_syncValidity()` directly.

A rating of `0` is the only empty state (the initial state, also reachable via `allowClear`):

```typescript
private _syncValidity(): void {
  if (this.required && this.value === 0) {
    this._internals.setValidity({ valueMissing: true }, 'Please select a rating.');
  } else {
    this._internals.setValidity({});
  }
}
```

For form value, `0` submits as `null` (absent from FormData), consistent with the checkbox/toggle convention — "nothing selected" means absent, not an empty string. Positive values submit as a string (`"3"`, `"3.5"` for half-star).

`commitValue()` is the single path all user interactions flow through — clicks, pointer up, keyboard. Wiring FACE sync there, plus in `updated()` for programmatic changes, covers both paths.

---

### SelectionButtonGroup and SelectionCardGroup: FACE on the Coordinator

Selection groups are composite widgets — individual buttons or cards inside a coordinating group element. The question is which element should be form-associated.

**The answer is the group, not the items.** The group is the element that knows the `name`, the `type` (`radio` vs. `checkbox`), and the full set of selected values. Individual buttons and cards have no name of their own — the group sets `_name` on them internally. This is the same model as native `<select>`: one form control that contains many `<option>` elements. The options aren't form-associated; the select is.

Both groups have a `type` property that determines the form value semantics, exactly like AgSelect's `multiple` property:

```typescript
private _syncFormValue(): void {
  const selected = this._getSelectedValues();
  if (this.type === 'radio') {
    // Single value or null
    this._internals.setFormValue(selected.length > 0 ? selected[0] : null);
  } else {
    // Multiple values via FormData overload
    if (selected.length === 0) {
      this._internals.setFormValue(null);
    } else {
      const formData = new FormData();
      selected.forEach(val => formData.append(this.name, val));
      this._internals.setFormValue(formData);
    }
  }
}
```

Both groups support a `required` prop. When `required` is set and nothing is selected, `_syncValidity()` sets `{ valueMissing: true }` — the same pattern as AgToggle and AgRating.

`formResetCallback` clears `_internalSelectedValues`, sets form value to null, calls `_syncValidity()` (so a required group correctly becomes invalid after reset), and syncs child elements so the UI reflects the cleared state immediately.

---

### AgCombobox: The "High Complexity" Component That Wasn't

The planning document flagged AgCombobox as high complexity with a deferred UX decision: does typing into the input count as the form value, or only selecting from the dropdown?

Reading the existing code answered it. There's no free-text mode. The component has two value-commit paths:

1. `selectOption()` — user picks from the dropdown
2. `clearSelection()` — user clicks the clear button

Everything else (typing in the search input, arrow-keying through options) updates `_searchTerm` for filtering but doesn't touch `this.value`. The form value is unambiguously the selected option — not whatever the user is typing.

Single and multiple modes follow the same patterns as AgSelect and the selection groups: `null` when nothing is selected, `FormData` overload for multiple selections. `_syncFormValue()` and `_syncValidity()` go in both commit paths, and `updated()` handles programmatic `value` changes.

`formResetCallback` calls through to `clearSelection()` internals, then explicitly nulls the form value and clears validity. The internal `_selectionChanged()` call also resets `_searchTerm` and `_displayLabel` so the input clears visually as well as semantically.

---

## Things That Surprised Us

**`formAssociated = true` does nothing by itself.** Values don't appear in `FormData` until you call `setFormValue()`. Validation doesn't work until you call `setValidity()`. The annotation just opens the door — nothing is wired automatically.

**`formDisabledCallback` only fires for inherited disabled.** It fires when a `<fieldset disabled>` ancestor changes state. It does _not_ fire when the element's own `disabled` attribute is set. Both paths must be handled separately. A future improvement: a private `_parentDisabled` flag combined with the element's own `disabled` in a getter, so the two sources don't stomp on each other.

**The inner `<input>` and the host both need `required` and `disabled`.** They serve different purposes. The inner element handles native browser UI: the tooltip anchor, focus ring, placeholder styling. `ElementInternals` handles the host element's participation in the form. Keeping both in sync is overhead but necessary.

**`null` and `''` are different.** Passing `null` to `setFormValue` means the field is absent from `FormData` entirely. Passing `''` means the field is present with an empty value. For checkbox and toggle components this distinction matters: unchecked should mean absent, not empty.

**Shadow DOM inputs don't submit to parent forms.** Worth stating explicitly: a native `<input name="email">` inside a shadow root is invisible to the ancestor form. Only `setFormValue()` on the host element creates the form connection. This is the fundamental reason FACE exists for shadow DOM components.

**Shadow DOM submit buttons can't submit parent forms either.** This is the exact mirror of the previous point, and it bit us in the form-association playbook. `ag-button` renders its inner `<button type="submit">` inside shadow DOM. From inside that shadow root, the button has no form owner — clicking it never triggers the parent `<form>`'s submit event, no matter how the framework wires up the `onSubmit` handler.

The fix is not FACE (AgButton has no form value). It's a light-DOM traversal from the host element: `this.closest('form')` works correctly from `ag-button` itself because the host element IS in the ancestor form's DOM tree. The inner shadow-DOM button is not.

```typescript
// In AgButton._handleClick:
if (this.type === "submit") {
  const form = this.closest("form");
  if (form) form.requestSubmit(); // triggers submit event + native validation pipeline
} else if (this.type === "reset") {
  const form = this.closest("form");
  if (form) form.reset();
}
```

`requestSubmit()` is preferred over `submit()` because it fires the `submit` event (which framework handlers listen to) and runs constraint validation. `submit()` skips both.

The practical rule: **anything that needs to interact with a parent form must traverse from the host element, not from inside shadow DOM.** This applies to value submission (FACE), validation, and form actions like submit and reset.

**Group coordination via Lit's reactive system was free.** We expected AgRadio's group sync to require explicit cross-element communication. It didn't — wiring `_syncFormValue()` inside `updated()` was enough. Lit's property change detection propagated FACE state through the group automatically.

---

## What We Skipped and Why

### `formAssociatedCallback(form)`

Fires when the element is associated or dissociated from a form (moved in the DOM). None of our components need to react to form changes. Documented as a known extension point for future use.

### `formStateRestoreCallback(state, mode)`

Handles autofill and browser session history restore (back button). Deferred because it requires UX decisions about what restoring a custom component's state should actually look like — especially for composite components like combobox and selection groups. Worth its own issue per component.

### Consumer-Controlled Validation Messages

We use hardcoded strings in `setValidity()` calls (`'Please select a rating.'`, `'Please check this field.'`). The browser generates its own locale-aware messages for delegated components. Both are fine for most apps — internationalized apps need control over the copy.

The chosen approach is a `validationMessages` prop: an object mapping `ValidityState` flag names to strings.

```tsx
<AgInput
  required
  validationMessages={{
    valueMissing: t("errors.required"),
    typeMismatch: t("errors.emailInvalid"),
  }}
/>
```

Declarative, typed, and familiar from React form libraries. The trade-off is that messages must be configured at render time, as there's no mechanism for replacing a message dynamically after the fact. That constraint is acceptable for the vast majority of use cases: most apps have fixed validation copy per locale, and the component re-renders whenever props change anyway.

An event-driven alternative (`ag-validate`) was considered but left out of scope. It would support runtime message injection (handy for async server-side errors), but at the cost of an unfamiliar `event.detail` mutation pattern and an extra event firing on every input. The added complexity isn't justified given how rarely that capability is needed.

### ~~`CustomStateSet` / `:state()` pseudo-class~~ — **Done**

`ElementInternals.states` is a `CustomStateSet` that lets you expose internal states as CSS pseudo-classes — `:state(checked)`, `:state(invalid)`, `:state(loading)`. Useful for styling from outside the shadow root without adding attributes.

Implemented across AgCheckbox, AgRadio, and AgToggle. Each component calls `_syncStates()` after `_syncValidity()` to keep `:state(checked)` and `:state(invalid)` in sync with the element's current state. The `_setState()` helper in `FaceMixin` guards for browser support and handles the `add`/`delete` pattern. See `FACE-NOTES.md` for the full walkthrough including the shadow DOM isolation bug discovered and fixed during AgRadio's implementation.

---

## Lessons

**Start with the reference implementation.** AgInput going first established the mixin pattern, the two validation strategies, and the naming conventions before any other component was written. Every subsequent component was an application of those patterns, not a fresh design.

**Write the `firstUpdated` sync.** Every component needs to call `setFormValue()` and `_syncValidity()` in `firstUpdated`. It's easy to forget. Without it, a pre-filled form (initial value set via prop) won't register its value in `FormData` until the user interacts with it.

**Cover programmatic changes in `updated()`.** Event handlers cover user interaction. `updated()` covers everything else — test code, parent components, controlled modes. Miss this and your FACE sync only works for interactive users.

**The FormData overload is there for multi-value fields.** `setFormValue()` accepts a `FormData` object. Any component that can produce multiple values under the same key (multi-select, checkbox groups, multi-combobox) needs it. The string overload alone can't represent those semantics.

**Null means absent.** For checkbox-style components, the form value should be `null` when unchecked, not `''`. A missing key and an empty-string key are not equivalent on the server. Match what native checkboxes do.

**The perceived complexity of radio groups and selection groups was unfounded.** In both cases, existing coordination mechanisms (Lit reactive properties for radio, internal group state for selection groups) were already the right shape. Wiring FACE into the existing change paths was enough.

**FACE and accessible design reinforce each other.** `name`, `required`, `disabled`, constraint validation — these are the same concerns that drive accessible form design. Adding FACE surfaced gaps in the accessible implementation at the same time it fixed form integration.

---

## What's Next

With the rollout complete, every `ag-*` form control participates natively in HTML forms. The remaining work:

- ~~**Consumer-controlled validation messages**~~ — **Done.** The `validationMessages` prop is live on all five direct-validity components (Toggle, Rating, SelectionButtonGroup, SelectionCardGroup, Combobox). Pass `{ valueMissing: 'Your copy here.' }` to override any hardcoded fallback string.
- ~~**Shadow DOM submit/reset button bridge**~~ — **Done.** `ag-button` now calls `this.closest('form').requestSubmit()` / `.reset()` from its host-element click handler.
- **`formStateRestoreCallback`** — autofill and back-button session restore, one issue per component
- ~~**`CustomStateSet`**~~ — **Done.** AgCheckbox, AgRadio, and AgToggle expose `:state(checked)` and `:state(invalid)` via `ElementInternals.states`. The `_setState()` helper in `FaceMixin` and per-component `_syncStates()` keep states current. Chrome 125+/Firefox 126+/Safari 17.4+.
- **`_parentDisabled` refinement** — separate `formDisabledCallback` state from the element's own `disabled` attribute to avoid the two sources overwriting each other

---

_Implementation notes for each component are in `FACE-NOTES.md`. The full component inventory and issue tracking are in `FACE-PLANNING.md`._
