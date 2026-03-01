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
| `AgToggle` | #301 | Direct validity (no inner input); null when unchecked; matches native checkbox semantics |
| `AgCheckbox` | #303 | Delegation via inner `<input type="checkbox">`; null when unchecked; indeterminate treated as unchecked |
| `AgSelect` | #305 | Delegation via inner `<select>`; `FormData` overload for multi-select; `defaultSelected` reset |
| `AgRadio` | #307 | Delegation via inner `<input type="radio">`; group FACE sync via Lit `updated()` reactive chain |
| `AgSlider` | #310 | Migrated from hand-rolled FACE to FaceMixin; `firstUpdated` captures default; dual mode uses FormData overload |

---

### 🔲 Pending — More Complex

#### `AgCombobox` (`components/Combobox/`)

- **Form value:** The committed input value or selected option value
- **Additional FACE work:**
  - Must decide: does typing into the input count as the form value, or only selecting?
  - Two modes (free-text vs constrained select) require different validity semantics
- **Complexity:** High. The UX contract between free-text and option selection affects
  what "valid" means, which must be documented before implementing.

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

1. ✅ `AgToggle` — lowest complexity, establishes checkbox-like FACE pattern
2. ✅ `AgCheckbox` — medium complexity, needed before AgRadio
3. ✅ `AgSelect` — medium complexity, high usage in forms
4. ✅ `AgRadio` — group coordination via Lit reactive chain (simpler than anticipated)
5. ✅ `AgSlider` — migrated hand-rolled FACE to FaceMixin; added firstUpdated + formResetCallback
6. `AgRating` — medium complexity
7. `AgSelectionButton` / `AgSelectionCard` — depends on Radio/Checkbox patterns
8. `AgCombobox` — high complexity, requires UX decision on free-text vs constrained

---

## References

- `FACE-NOTES.md` — detailed implementation notes from Issue #274
- [WHATWG FACE Spec](https://html.spec.whatwg.org/dev/custom-elements.html#custom-elements-face-example)
- [MDN: ElementInternals](https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals)
