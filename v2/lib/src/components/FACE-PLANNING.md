# FACE Planning: AgnosticUI Form Components

*Form Associated Custom Elements (FACE) implementation roadmap.*
*Each entry below should become its own GitHub Issue, scoped like Issue #274.*

---

## What is FACE?

FACE (`static formAssociated = true` + `attachInternals()`) enables custom elements to
participate natively in HTML forms: value submission, constraint validation, disabled
propagation, and `form.reset()` support. See `Input/FACE-NOTES.md` for the full
implementation pattern.

**Baseline:** Browser support ~95% globally as of Jan 2026. No polyfill needed.

---

## Component Inventory

### ✅ Completed

| Component | Issue | Notes |
|-----------|-------|-------|
| `AgInput` | #274 | Includes textarea mode; value submission, reset, disabled, constraint validation |

---

### 🔲 Pending — Straightforward Lift

These components follow the same basic FACE pattern as `AgInput`.

#### `AgCheckbox` (`components/Checkbox/`)

- **Form value:** `"on"` when checked (matching native checkbox), or the `value` attribute
- **Additional FACE work:**
  - `get checked()` / `set checked()` getter-setter pair
  - `formResetCallback()` restores `defaultChecked` state
  - `click()` method to toggle checked state programmatically
  - `setFormValue(checked ? value : null)` — null excludes it from FormData (native behavior)
- **Complexity:** Medium. Checkbox semantics (indeterminate, defaultChecked) add surface area.

#### `AgRadio` (`components/Radio/`)

- **Form value:** The `value` attribute of the checked radio within a group
- **Additional FACE work:**
  - Radio groups share a `name` — only the checked radio submits its value
  - `formResetCallback()` must restore `defaultChecked`
  - Click handling must uncheck sibling radios with the same `name` in the same form
- **Complexity:** High. Radio group coordination across elements requires careful
  event-based communication or a shared group registry.

#### `AgToggle` (`components/Toggle/`)

- Functionally similar to a checkbox (on/off)
- **Form value:** `"on"` or `null` (same as checkbox)
- **Complexity:** Low-Medium. Same pattern as AgCheckbox.

#### `AgSelect` (`components/Select/`)

- **Form value:** The selected option's `value`
- **Additional FACE work:**
  - Multi-select: `setFormValue(FormData)` — use `FormData` overload to submit multiple values
  - `formResetCallback()` restores `defaultValue` / `defaultSelected`
- **Complexity:** Medium. Multi-select adds complexity.

---

### 🔲 Pending — More Complex

#### `AgCombobox` (`components/Combobox/`)

- **Form value:** The committed input value or selected option value
- **Additional FACE work:**
  - Must decide: does typing into the input count as the form value, or only selecting?
  - Two modes (free-text vs constrained select) require different validity semantics
- **Complexity:** High. The UX contract between free-text and option selection affects
  what "valid" means, which must be documented before implementing.

#### `AgSlider` (`components/Slider/`)

- **Form value:** Current numeric value as a string
- **Additional FACE work:**
  - `min` / `max` / `step` constraint validation via `setValidity({ rangeUnderflow: true })` etc.
  - `formResetCallback()` restores `defaultValue`
- **Complexity:** Medium.

---

### 🔲 Pending — Composite / Multi-Value Components

These have multiple internal controls or submit multiple values.

#### `AgRating` (`components/Rating/`)

- **Form value:** The numeric rating (e.g. `"3"`)
- **Complexity:** Low-Medium. Keyboard interaction (arrow keys) must update form value.

#### `AgSelectionButton` / `AgSelectionCard` (`components/SelectionButton/`, `components/SelectionCard/`)

- These function like radio buttons or checkboxes depending on configuration
- **Complexity:** Medium. Must mirror the checked/unchecked pattern of AgCheckbox/AgRadio.

---

### 🔲 Out of Scope for FACE

These components are not form controls and do not need FACE:

| Component | Reason |
|-----------|--------|
| `AgButton` | Triggers actions; `type="submit"` is handled natively by the inner `<button>` |
| `AgAlert` | Display only |
| `AgDialog` | Container, not a value |
| `AgTabs` | Navigation, not a form field |
| `AgAccordion` | Display/navigation |
| `AgToast` | Notifications |
| `AgPagination` | Navigation |
| `AgBadge`, `AgTag`, `AgMark` | Display only |
| All layout/utility components | Display only |

---

## Implementation Order (Recommended)

1. `AgToggle` — lowest complexity, establishes checkbox-like FACE pattern
2. `AgCheckbox` — medium complexity, needed before AgRadio
3. `AgSelect` — medium complexity, high usage in forms
4. `AgRadio` — high complexity (group coordination), block on AgCheckbox
5. `AgSlider` — medium complexity, self-contained
6. `AgRating` — medium complexity
7. `AgSelectionButton` / `AgSelectionCard` — depends on Radio/Checkbox patterns
8. `AgCombobox` — high complexity, requires UX decision on free-text vs constrained

---

## Notes on Radio Group Coordination

AgRadio groups require all radios with the same `name` in the same form to behave
as a group — clicking one unchecks the others. Native `<input type="radio">` handles
this automatically. With FACE:

- Option 1: Walk the DOM on click to find siblings with matching `name` + `form`
- Option 2: Use a shared `Map<string, Set<AgRadio>>` keyed on `[formId]:[name]`, updated
  via `formAssociatedCallback` / `disconnectedCallback`

Option 1 is simpler; Option 2 is more efficient for large forms. This decision should
be documented in a `Radio/FACE-NOTES.md` as part of the AgRadio issue.

---

## References

- `Input/FACE-NOTES.md` — detailed implementation notes from Issue #274
- [WHATWG FACE Spec](https://html.spec.whatwg.org/dev/custom-elements.html#custom-elements-face-example)
- [MDN: ElementInternals](https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals)
