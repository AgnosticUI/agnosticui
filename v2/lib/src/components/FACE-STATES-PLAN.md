# Complete Plan: `ElementInternals.states` / `CustomStateSet`

## Implementation · Verification · Documentation

---

# Phase 1A — Core Implementation (lib source)

## 1. `shared/face-mixin.ts` — Add `_setState()` Helper

Add to `FaceElement` class:

```ts
protected _setState(state: string, active: boolean): void {
  if (!this._internals.states) return; // feature guard — Safari < 17.4, rare
  if (active) {
    this._internals.states.add(state);
  } else {
    this._internals.states.delete(state);
  }
}
```

Add to `FaceMixinInterface` declare class:

```ts
protected _setState(state: string, active: boolean): void;
```

---

## 2. `Checkbox/core/_Checkbox.ts` — Add `_syncStates()`

### States

* `checked`
* `indeterminate`
* `disabled`
* `required`
* `invalid`

### Call `_syncStates()`:

* After every `_syncValidity()` call site:

  * `firstUpdated`
  * `handleChange`
  * `updated`
* In `formResetCallback`

---

## 3. `Radio/core/_Radio.ts` — Add `_syncStates()`

### States

* `checked`
* `disabled`
* `required`
* `invalid`

### Call `_syncStates()`:

* After every `_syncValidity()` call site:

  * `firstUpdated`
  * `handleChange`
  * `updated`
* In `formResetCallback`

**Note:**
The sibling-uncheck chain via `updated()` ensures radios in a group automatically clear `checked` state — no extra code required. This is the same mechanism that already synchronizes FACE form values.

---

## 4. `Toggle/core/_Toggle.ts` — Add `_syncStates()` + `updated()` Hook

### States

* `checked`
* `disabled`
* `readonly`
* `required`
* `invalid`

### Required Changes

* Add new `updated()` hook watching:

  * `disabled`
  * `readonly`
* Call `_syncStates()` in:

  * `firstUpdated`
  * `_performToggle`
  * `formResetCallback`

### Important Clarification

* `invalid` reflects **FACE constraint validation**

  * `!this._internals.validity.valid`
  * Same signal used by `form.checkValidity()`
* `[invalid]` attribute is a consumer-set flag
* These are intentionally independent

---

## Syntax Note

Use:

```css
:state(checked)
```

Supported in:

* Chrome 125+
* Firefox 126+
* Safari 17.4+

The legacy `:--checked` syntax is obsolete and will not be used.

---

# Phase 1B — Publish Updated Package

## 1. Bump Version

```
v2/lib/package.json
alpha.17 → alpha.18
```

## 2. Build

```bash
cd v2/lib
npm run build
```

## 3. Publish

```bash
npm publish --tag alpha
```

This publishes:

```
agnosticui-core@2.0.0-alpha.20
```

---

# Phase 1C — Playbook Verification

This phase verifies:

* Updated components
* New form controls
* Visual + programmatic `:state()` proof

---

## C1. Update Component Files in Each Example

Run in each example directory:

```bash
npx agnosticui-cli init --framework react --skip-prompts
npx agnosticui-cli init --framework vue --skip-prompts
npx agnosticui-cli init --framework lit --skip-prompts
```

Add new components:

```bash
cd react-example && npx agnosticui-cli add Radio Checkbox && cd ..
cd vue-example   && npx agnosticui-cli add Radio Checkbox && cd ..
cd lit-example   && npx agnosticui-cli add Radio Checkbox && cd ..
```

---

## C2. Add `ag-radio` and `ag-checkbox` to Contact Form

### New Fields

| Field                    | Name            | Component                                 | Validation | Demonstrates                  |
| ------------------------ | --------------- | ----------------------------------------- | ---------- | ----------------------------- |
| Preferred Contact Method | `contactMethod` | `ag-radio` group (Email / Phone / Either) | required   | `:state(checked)` on radio    |
| Subscribe to updates     | `subscribe`     | `ag-checkbox`                             | optional   | `:state(checked)` on checkbox |

### Placement Order

```
Full Name *
Email Address *
Phone
Preferred Contact Method *
Subscribe to updates
Message *
Newsletter Frequency *
Terms & Conditions *
```

Update `PROMPT-3-FRAMEWORKS.md` to include these rows.

### Framework Usage

* **React**

  * `ReactRadio`
  * `ReactCheckbox`
* **Vue**

  * `VueRadio`
  * `VueCheckbox`
* **Lit**

  * `<ag-radio>`
  * `<ag-checkbox>`

---

## C3. Add `:state()` CSS + Console Verification

### CSS Block (Add to Global Styles)

```css
/* ── CustomStateSet (:state) demonstration ──────────────────────────────
 * These rules use :state() — not reflected DOM attributes.
 * This proves CustomStateSet works independently of attribute reflection.
 * ─────────────────────────────────────────────────────────────────────── */

/* Checked outline */
ag-toggle:state(checked),
ag-checkbox:state(checked) {
  outline: 2px dashed var(--ag-success);
  outline-offset: 4px;
  border-radius: var(--ag-radius-sm);
}

ag-radio:state(checked) {
  outline: 2px dashed var(--ag-primary);
  outline-offset: 4px;
  border-radius: var(--ag-radius-full);
}

/* Invalid outline */
ag-toggle:state(invalid),
ag-checkbox:state(invalid),
ag-radio:state(invalid) {
  outline: 2px solid var(--ag-danger);
  outline-offset: 4px;
  border-radius: var(--ag-radius-sm);
}
```

---

### Console Verification (Add to Submit Handler)

```ts
console.log('[CustomStateSet] :state() pseudo-class verification:');

const toggle   = /* ref to ag-toggle[name="terms"] */;
const checkbox = /* ref to ag-checkbox[name="subscribe"] */;
const radios   = /* Array of ag-radio[name="contactMethod"] */;

console.log('  ag-toggle:state(checked)  =', toggle?.matches(':state(checked)'));
console.log('  ag-toggle:state(invalid)  =', toggle?.matches(':state(invalid)'));
console.log('  ag-checkbox:state(checked)=', checkbox?.matches(':state(checked)'));

radios.forEach((r, i) =>
  console.log(`  ag-radio[${i}]:state(checked)=`, r.matches(':state(checked)'))
);
```

---

### Obtaining Element References

* **Lit**

  ```ts
  this.shadowRoot?.querySelector(...)
  ```
* **React**

  ```ts
  formRef.current?.querySelector(...)
  ```
* **Vue**

  ```ts
  formRef.value?.querySelector(...)
  ```

---

## C4. Update Acceptance Criteria

Add to `PROMPT-3-FRAMEWORKS.md`:

* [ ] `ag-radio` group submits selected value in `FormData`
* [ ] `ag-checkbox` submits `"on"` when checked
* [ ] `ag-toggle:state(checked)` outline visible when on
* [ ] `ag-radio:state(checked)` outline visible on selected radio
* [ ] `ag-checkbox:state(checked)` outline visible when checked
* [ ] Console shows `:state(checked) = true` correctly
* [ ] Console shows `:state(invalid) = true` when validation fails

---

# Phase 1D — Documentation Updates

---

## D1. `FACE-NOTES.md`

### Mark Complete

```
[x] CustomStateSet via _internals.states
```

### Add Section

## AgToggle, AgCheckbox, AgRadio: CustomStateSet / `:state()`

Cover:

* States exposed per component
* `_setState()` helper
* Feature guard rationale
* Call-site pattern
* `:state(checked)` vs `[checked]`
* `indeterminate` state (Checkbox only)
* `invalid` tracking FACE validity

Fix any legacy `:--checked` syntax.

---

## D2. `FACE-ARTICLE.md`

### Updates

* Replace deferred note under:

  ```
  ### CustomStateSet / :state() pseudo-class
  ```
* Remove from:

  ```
  ## What's Next
  ```
* Add new walkthrough section:

### CustomStateSet: Exposing Checked, Invalid, and Disabled

Cover:

* `_setState()` helper
* Feature guard
* FACE validation vs `[invalid]`
* Checkbox `indeterminate` state

---

## D3. `site/docs/docs/form-association.md`

Add:

# Custom State Pseudo-Classes (`:state()`)

Explain:

* Uses `ElementInternals.states`
* No DOM attribute mutation required

### Browser Support

* Chrome 125+
* Firefox 126+
* Safari 17.4+

---

### States by Component

| Component     | State           | When Active   |
| ------------- | --------------- | ------------- |
| `ag-toggle`   | `checked`       | Toggle on     |
|               | `disabled`      | Disabled      |
|               | `readonly`      | Readonly      |
|               | `required`      | Required      |
|               | `invalid`       | FACE invalid  |
| `ag-checkbox` | `checked`       | Checked       |
|               | `indeterminate` | Indeterminate |
|               | `disabled`      | Disabled      |
|               | `required`      | Required      |
|               | `invalid`       | FACE invalid  |
| `ag-radio`    | `checked`       | Selected      |
|               | `disabled`      | Disabled      |
|               | `required`      | Required      |
|               | `invalid`       | FACE invalid  |

---

### CSS Usage

Provide `:state()` selector example.

---

### `:state(invalid)` vs `[invalid]`

Clarify distinction between:

* FACE validation state
* Consumer-controlled attribute

---

## D4. `site/docs/playbooks/form-association.md`

Update:

* Form Fields table
* Components Used table
* Add note about `:state()` CSS demo

---

# Scope Summary

| File                                            | Change                                  |
| ----------------------------------------------- | --------------------------------------- |
| `lib/src/shared/face-mixin.ts`                  | Add `_setState()`                       |
| `lib/src/components/Checkbox/core/_Checkbox.ts` | Add `_syncStates()`                     |
| `lib/src/components/Radio/core/_Radio.ts`       | Add `_syncStates()`                     |
| `lib/src/components/Toggle/core/_Toggle.ts`     | Add `_syncStates()` + `updated()`       |
| `lib/package.json`                              | Version bump                            |
| `PROMPT-3-FRAMEWORKS.md`                        | Add fields + criteria                   |
| `3× example/src/`                               | CLI refresh + CSS + console logs        |
| `FACE-NOTES.md`                                 | Mark done + add section                 |
| `FACE-ARTICLE.md`                               | Replace deferred note + add walkthrough |
| `site/docs/docs/form-association.md`            | Add `:state()` section                  |
| `site/docs/playbooks/form-association.md`       | Update tables + demo note               |
