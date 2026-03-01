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
| `AgRating` | #312 | Direct validity (no inner input); null when value=0; positive values submit as string |
| `AgSelectionButtonGroup` | #314 | FACE on group (not items); radio=string, checkbox=FormData overload; formReset clears internal state |
| `AgSelectionCardGroup` | #314 | Same pattern as AgSelectionButtonGroup |
| `AgCombobox` | #316 | Direct validity; no free-text mode — only `selectOption()`/`clearSelection()` commit values; single=string, multiple=FormData overload |

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
6. ✅ `AgRating` — direct validity; null when value=0
7. ✅ `AgSelectionButtonGroup` / `AgSelectionCardGroup` — FACE on group element; radio/checkbox via FormData overload
8. ✅ `AgCombobox` — no free-text mode exists; only `selectOption()`/`clearSelection()` commit values; simpler than anticipated

---

## References

- `FACE-NOTES.md` — detailed implementation notes from Issue #274
- [WHATWG FACE Spec](https://html.spec.whatwg.org/dev/custom-elements.html#custom-elements-face-example)
- [MDN: ElementInternals](https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals)
