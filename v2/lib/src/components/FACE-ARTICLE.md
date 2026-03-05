# Form-Associated Custom Elements in Practice

I was well over three quarters of the way through rewriting the AgnosticUI components in Lit when I realized I had a massive blind spot. My `<ag-input>` looked solid and fired events correctly, but it lacked Form-Associated Custom Element (FACE) support. This meant it was essentially invisible to native `<form>` submissions.

I was completely unaware of this until a conversation with my friend [Marc van Neerven](https://www.linkedin.com/in/mvneerven/). We were discussing the nuances of Web Component’s and Shadow DOM when Marc pointed out the importance of **form association**.

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

### Strategy 1: Delegate to the Native Form Engine

If a component renders a native `<input>`, `<textarea>`, or `<select>` in its Shadow DOM, don't reimplement the wheel. Just delegate to it. That inner element already knows how to run the browser's full constraint validation engine, giving you `required`, `minlength`, and `pattern` for free. To keep things DRY across `AgInput`, `AgSelect`, and `AgCheckbox`, we use a single utility helper, `syncInnerInputValidity`, to bridge that internal state to our host element.

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
    // We pass the inputEl as the "anchor" so the browser
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

`AgInput` established the pattern for the rest of the library. It's a textbook example of **Strategy 1: Delegation.**

**Value submission:** We call `_internals.setFormValue(this.value)` in three places: the `input` handler (every keystroke), the `change` handler (on commit), and during `firstUpdated`, Lit's lifecycle hook that runs after the component's first render. Syncing on `firstUpdated` is critical, as without it, the form doesn't know the initial value until the user clicks into the field.

**Validation (The Delegation Path):** Because `AgInput` renders a native `<input>`, we don't need to write custom logic for `required` or `minlength`. We simply point `ElementInternals` at the inner element’s state.

> **Wait, what if I don't have a native input?** > If you were building a custom slider or a star-rating component (Strategy 2), you wouldn't "sync" from an inner element. Instead, you would manually call `this._internals.setValidity({ valueMissing: true }, "Message")` inside your own property setters (like `set value()`).

**Accessible error messages:** The error container in `AgInput` uses `role="alert"` and `aria-atomic="true"`. The container is **always** in the DOM. We only swap out its text content when an error occurs. This matters because screen readers register the alert region on page load. If you show and hide the whole element instead, screen reader announcements become unreliable.

---

### AgToggle: The Checkbox-Pattern Component

`AgToggle` differs from text inputs in two ways.

**Null form value:** A native checkbox that is unchecked is simply absent from `FormData`, not an empty string. Passing `null` to `setFormValue` replicates this:

```typescript
this._internals.setFormValue(this.checked ? this.value || "on" : null);
```

The `'on'` default matches native checkbox behavior when no `value` attribute is set and the checkbox is checked. For any server processing form submissions, a missing key and an empty-string key are handled differently.

**Direct validity:** Only `required` applies. There is no inner `<input>` to delegate to, so we implement validity directly against `this.checked` (called in `_performToggle()` on every state change).

> **The `value` property default:** The component uses `this.value || 'on'` so that `FormData` always produces `'on'` when no explicit value is configured. The property itself defaults to `''`. This keeps form submission behavior correct while the property API stays clean.

---

### AgCheckbox: Where the Two Strategies Meet

`AgCheckbox` is perhaps the most instructive component in the rollout because it highlights exactly why we need FACE even when we are using native inputs.

**Shadow DOM inputs are invisible to parent forms.** Here's the deal: an `<input>` rendered inside a Shadow Root is isolated from the parent document, so even with a `name` and a `value`, it will **never** appear in the parent form's `FormData`. This isolation is why FACE isn't an optional feature; it's a requirement for any UI library or design system using Shadow DOM.

**Delegation still works.** Despite the isolation, that inner checkbox still has a native `.validity` object. We can still use **Strategy 1** by mirroring those properties to the host:

```typescript
private _syncValidity(): void {
  // Our utility helper doesn't care if it's an input, textarea, select, or checkbox
  syncInnerInputValidity(this._internals, this.inputRef);
}
```

**Syncing programmatic changes.** Unlike `AgInput`, where a user usually types to change the value, a checkbox is often toggled programmatically. Think of "Select All" buttons or state-driven resets. To make the component reliable, we have to handle both cases: the user's manual click and the developer's code. If we don't sync on both paths, the form data won't match what the user sees on the screen.

```typescript
// 1. User interaction path
handleChange(e: Event) {
  this.checked = (e.target as HTMLInputElement).checked;
  this._updateFormValue();
}

// 2. Programmatic path
override updated(changedProperties: PropertyValues) {
  super.updated(changedProperties);
  if (changedProperties.has('checked')) {
    this._updateFormValue();
  }
}

private _updateFormValue() {
  this._internals.setFormValue(this.checked ? (this.value || 'on') : null);
  this._syncValidity();
}
```

---

### AgSelect: Multi-Value and the FormData Overload

It's important to note that `AgSelect` is a direct wrapper around the native `<select>` element. Unlike "custom" dropdowns that use divs and ARIA lists, `AgSelect` uses the platform's native control. This allows us to leverage native properties that would be difficult to track manually.

**Handling multiple values:** `setFormValue()` has three overloads. While a string works for most components, `multiple` select requires the `FormData` overload. By passing a `FormData` object to `setFormValue`, you're providing a list of entries that the browser will automatically "spread" into the parent form's master collection at submission time.

```typescript
private _syncFormValue(): void {
  if (!this.selectElement) return;
  if (this.multiple) {
    const formData = new FormData();
    Array.from(this.selectElement.selectedOptions).forEach(opt => {
      // The browser merges these entries into the parent form's data
      formData.append(this.name, opt.value);
    });
    this._internals.setFormValue(formData);
  } else {
    this._internals.setFormValue(this.selectElement.value || '');
  }
}
```

**Resetting to the original selection:** Native elements have a built-in memory of their initial state. `option.defaultSelected` reflects the `selected` attribute as it was originally parsed from HTML. It's the perfect source of truth for our `formResetCallback`:

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

This ensures that hitting "Reset" restores the form to its original HTML state, matching the exact behavior users expect.

---

### AgRadio: Coordination Across Shadow Boundaries

Radio groups require coordination: when one is selected, others must deselect. While native `<input type="radio">` handles this automatically, elements isolated in separate Shadow DOM trees are "blind" to their siblings. This breaks everything from value syncing to `required` validation.

**The Strategy: Tapping into Lit's Reactive Loop**

We don't need a complex messaging system. When an `AgRadio` is checked, it finds other `<ag-radio>` instances with the same `name` and sets `instance.checked = false`.

Crucially, this isn't "magic." Because `checked` is a Lit `@property`, this manual assignment triggers the `updated()` lifecycle on every radio in the group. We then **tap into that lifecycle** to run our glue code, explicitly calling `setFormValue()` and `_syncValidity()` to push the new state into the `ElementInternals` engine:

```typescript
override updated(changedProperties: PropertyValues) {
  super.updated(changedProperties);
  // This is the "glue": Lit tells us something changed,
  // and we manually inform the browser's form engine.
  if (changedProperties.has('checked')) {
    this._internals.setFormValue(this.checked ? this.value : null);
    this._syncValidity();
  }
}
```

**The Trap: `required` and Shadow Isolation**

This is the biggest "gotcha." Normally, a browser knows a `required` radio group is valid if _any_ radio is checked. But because our inner inputs are isolated in separate Shadow Roots, the browser can't see the group. Each unchecked radio will incorrectly report `valueMissing: true`.

**The "Where am I?" Problem: Global vs. Encapsulated Scopes**

To understand why we need `this.getRootNode()`, we have to look at where our `<ag-radio>` tags are actually being placed. It isn't about the framework's internal engine; it's about whether the tags are sitting in the global document or inside a private "neighborhood":

- **The Global Scope (React/Vue/Static HTML):** You are usually placing `<ag-radio>` tags directly into the main page. Here, `document.querySelectorAll` works fine because everything is "on the main street."
- **The Encapsulated Scope (Svelte, Solid, Lit, or Vanilla WC):** If you build a component that uses its own Shadow DOM, any `ag-radio` you place inside it is hidden from the outside world. Even in Svelte or Solid, the **Web Components Shadow Root** acts as a barrier that the global `document` cannot pierce.

**The Fix: Group-Aware Validation with `getRootNode()`**

We have to manually verify the group state. Instead of asking the global `document`, we ask the element: "What is the root of the neighborhood I live in?" We use [this.getRootNode()](https://developer.mozilla.org/en-US/docs/Web/API/Node/getRootNode) to find that root.

- **In Global Scopes:** It returns the `document`.
- **In Encapsulated Components:** It returns that parent's `ShadowRoot`.

By querying that local root, we find our siblings regardless of how many layers of nesting are involved.

```typescript
private _isGroupChecked(): boolean {
  if (this.checked) return true;

  // Find our "neighborhood" (either the Document or a ShadowRoot)
  const root = this.getRootNode() as Document | ShadowRoot;

  // Now we can find all radios sharing our scope and `name`
  return Array.from(root.querySelectorAll(`ag-radio[name="${this.name}"]`))
    .some((el) => (el as AgRadio).checked);
}

private _syncValidity(): void {
  if (!this.required) return this._internals.setValidity({});

  if (this._isGroupChecked()) {
    this._internals.setValidity({});
  } else {
    this._internals.setValidity({ valueMissing: true }, this.validationMessage);
  }
}
```

**The Final Edge Case: Forcing Sync**

If you set `radio.checked = false` on a sibling that was _already_ false, Lit's `updated()` won't fire. But that sibling still needs to re-run `_syncValidity()` because the group state just changed. We have to force the sync manually:

```typescript
allRadios.forEach((radio) => {
  if (radio !== this && radio instanceof AgRadio) {
    radio.checked = false;
    // Force a re-sync because Lit won't trigger updated()
    // if the value was already false.
    radio._syncValidity();
  }
});
```

---

### AgSlider: Migrating Hand-Rolled FACE to the Mixin

AgSlider already had a partial, hand-rolled FACE infrastructure. It manually declared `static formAssociated`, called `attachInternals()`, and featured a custom `_updateFormValue()` method alongside six different getters for `form` and `validity`.

**The Problem: Missing the Lifecycle**

Because it didn't use our `FaceMixin`, it was missing critical browser integrations: `formDisabledCallback` (for `<fieldset>` propagation) and `formResetCallback` (for `form.reset()` support). It also failed to set its initial form value on boot.

**The Migration: Deletion as a Feature**

The refactor resulted in removing the manual `_internals` field, the constructor-based `attachInternals()`, and all six hand-rolled getters. `FaceMixin` now provides all of that out of the box.

We then added the "missing links" to handle initial state and resets:

```typescript
override firstUpdated() {
  // Capture the initial state provided by the consumer
  this._defaultValue = Array.isArray(this.value)
    ? ([...this.value] as [number, number])
    : this.value;

  this._updateFormValue();
}

override formResetCallback(): void {
  // Restore the captured default value
  this.value = Array.isArray(this._defaultValue)
    ? ([...this._defaultValue] as [number, number])
    : this._defaultValue;

  this._updateFormValue();
}
```

**Why `firstUpdated`?**

We capture `this._defaultValue` here because it's the first moment we can be sure the component has processed its initial properties. By shallow-copying the array for dual mode, we ensure that future movements of the slider don't accidentally mutate our "save point" for the form reset.

**The Dual-Slider**

The existing `_updateFormValue()` utilized a sophisticated `ElementInternals` feature: the **FormData overload**. In dual-slider mode, we need to submit both a `min` and `max` value under a single `name` key.

```typescript
// A peek at the existing logic inside _updateFormValue
const data = new FormData();
data.append(this.name, String(this.value[0]));
data.append(this.name, String(this.value[1]));
this._internals.setFormValue(data);
```

---

### AgRating: Direct Validity, No Native Element

AgRating uses a custom `role="slider"` div: there is no inner `<input>` at all. Like AgToggle, this means we must implement `_syncValidity()` directly on the host element. A rating of `0` is treated as the unselected state. We explicitly map this to the browser's `valueMissing` state so that `required` validation works as expected.

```typescript
private _syncValidity(): void {
  if (this.required && this.value === 0) {
    this._internals.setValidity({ valueMissing: true }, this.validationMessage);
  } else {
    this._internals.setValidity({});
  }
}

```

> **Note: Why treat 0 as null?**
> In a 5-star system, `0` usually means "unselected" rather than a score of zero. By submitting `null` for a `0` value, we ensure the field is omitted from the form payload. This allows the server to distinguish between an intentional score and a skipped field.

**The Unified Update Path**

In AgRating, all user interactions flow through the `commitValue()` method. This includes clicks, pointer events, and keyboard interactions. By wiring the FACE synchronization here, we ensure that every manual change is immediately reflected in the form state.

We also include a synchronization call in the `updated()` lifecycle to handle programmatic changes. These two points of contact keep the internal form state and the visual UI in lock-step without the need for complex event listeners.

```typescript
// Inside AgRating
commitValue(val: number) {
  this.value = val;
  this._updateFormValue(); // Syncs to ElementInternals
}

override updated(changedProperties: PropertyValues) {
  super.updated(changedProperties);
  if (changedProperties.has('value')) {
    this._updateFormValue(); // Syncs programmatic changes
    this._syncValidity();
  }
}
```

---

### SelectionButtonGroup and SelectionCardGroup: FACE on the Coordinator

Selection groups are composite widgets: they consist of individual buttons or cards inside a coordinating group element. The group is the brain, not the items. The group element manages the `name`, the `type` (`radio` vs. `checkbox`), and the full set of selected values.

This follows the same model as the native `<select>` element. The options are not form-associated; the select is. Both groups use a `type` property to determine form value semantics:

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

      // The browser merges these entries into the parent form's data
      this._internals.setFormValue(formData);
    }
  }
}
```

The `formResetCallback` (not shown) handles the cleanup. It clears internal values, resets the form value to null, and triggers `_syncValidity()`. This ensures a required group correctly reports as invalid after a reset while updating child elements so the UI reflects the cleared state immediately.

---

### AgCombobox: Managing Selection vs. Search

AgCombobox can appear complex because it manages a text input, a filtered dropdown, and a multi-tag UI. However, the form value logic is remarkably stable: only a committed selection counts as the value. While a user types, the `_searchTerm` state updates to filter the list, but `this.value` remains untouched until an option is explicitly selected.

To bridge this with `ElementInternals`, we synchronized the state across the two primary interaction paths:

```typescript
// Picking an item from the list
selectOption(optionOrValue: ComboboxOption | string) {
  // ... logic to update _selectedOptions
  this._selectionChanged(); // This updates this.value

  // FACE: sync form value and validity after selection
  this._syncFormValue();
  this._syncValidity();
}

// Clearing the selection
clearSelection() {
  this._selectedOptions = [];
  this._selectionChanged();

  // FACE: sync form value and validity on clear
  this._syncFormValue();
  this._syncValidity();
}
```

**The Update Override**

Like our other complex components, we use the `updated()` lifecycle as a safety net for programmatic changes. If a developer sets something like `combobox.value = 'CSS'` via JavaScript, the component detects the property change and triggers the synchronization logic.

```typescript
override updated(changedProperties: Map<string, unknown>) {
  super.updated(changedProperties);
  if (changedProperties.has('value')) {
    this._syncFormValue();
    this._syncValidity();
  }
}

```

**Handling Resets**
The `formResetCallback` ensures the component returns to a clean state when a form is cleared. It nulls the internal selection, clears the form value, and resets the validity state so that a `required` combobox doesn't stay in an "invalid" state after the user clicks reset.

---

## The Reality of ElementInternals

If there is one elephant in the room after this migration, it is this: implementing FACE is a significant undertaking. It is a necessary evil for anyone building a robust web component system. While it provides the magic of native form integration, it requires manual wiring for every state: validation, disabled states, and value syncing. These are features that we often take for granted in framework-specific components.

### Technical Gotchas

- **`formAssociated = true` is just an invitation.** Setting this property only "opens the door." Values do not appear in `FormData` until you call `setFormValue()`. Validation does not work until you call `setValidity()`. Nothing happens automatically.
- **Shadow DOM is invisible to Forms.** A native `<input>` inside a shadow root is invisible to an ancestor `<form>`. Using `setFormValue()` on the host element is the only way to create that connection.
- **The Submit Button Bridge.** Discovered during consumer testing, this issue highlights a specific shadow DOM limitation. A button inside a shadow root cannot trigger a parent form submission. We implemented a light DOM traversal using `this.closest('form').requestSubmit()` to bridge that gap.
- **Disabled states have two masters.** The `formDisabledCallback` only fires when an ancestor, such as a `<fieldset>`, is disabled. It does not fire when the element's own `disabled` attribute is toggled. You must manage both paths to ensure they do not overwrite each other.

### Universal Rules for Every FACE Component

These strategic lessons are universal rules for all FACE components. They apply whether you are delegating to a native input (Strategy 1) or managing state directly (Strategy 2).

- **The `firstUpdated` sync is non-negotiable.** Every component must call `setFormValue()` in `firstUpdated()`. Without this, a pre-filled form where the value is set via a property will not register its data until a user interacts with it.
- **Cover programmatic changes in `updated()`.** While event handlers cover user input, the `updated()` lifecycle covers everything else. This includes test code, parent components, and controlled modes. In Strategy 1, this ensures property changes reach the inner native element. In Strategy 2, it keeps `ElementInternals` in sync.
- **Null means "Absent," not "Empty."** For checkboxes and toggles, passing `null` to `setFormValue()` ensures the key is absent from the form payload. Passing an empty string `''` keeps the key present. Matching native checkbox behavior is critical for backend compatibility.
- **Complexity is often a mirage.** We expected radio groups and selection groups to require complex coordination. In reality, Lit's reactive property system was already the right shape. Wiring FACE into existing change paths was enough to propagate state automatically.

---

A few items remain on the roadmap — `formStateRestoreCallback`, cleaner disabled-state separation, and runtime validation injection — but the core contract is fulfilled.

The irony isn't lost on me. I spent months building form components and missed the most fundamental thing a form component needs to do: _participate in a form._

FACE humbled me, then saved me. Every `ag-*` form control now submits its value, respects resets, and responds to a disabled fieldset. All without a single line of consumer workaround code. Sometimes finishing _the thing_ properly is the whole point.
