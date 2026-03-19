# SDUI Schema Coverage Registry

Source of truth for which AgnosticUI components have schema coverage, renderer parity,
and why any props or components are omitted.

Generated schema lives in `v2/schema/src/` — run `npm run codegen` from `v2/schema/`
to regenerate. Relates to issue #390 and epic #389.

---

## Status key

| Status | Meaning |
|---|---|
| `complete` | All SDUI-viable props are in the schema; component is renderable |
| `partial` | Component is in the schema and renderable, but one or more declarative props were omitted — see notes |
| `omitted` | Entire component is excluded from the schema — see reason column |

Renderer parity columns: **R** = React, **V** = Vue, **L** = Lit.
A tick means the component case is present in that framework's `AgDynamicRenderer`.

---

## In-schema components (40 + 1 primitive)

| Component | Status | R | V | L | Notes |
|---|---|:---:|:---:|:---:|---|
| AgAccordion | complete | ✓ | ✓ | ✓ | |
| AgAlert | complete | ✓ | ✓ | ✓ | |
| AgAspectRatio | complete | ✓ | ✓ | ✓ | |
| AgAvatar | complete | ✓ | ✓ | ✓ | |
| AgBadge | complete | ✓ | ✓ | ✓ | |
| AgBadgeFx | complete | ✓ | ✓ | ✓ | |
| AgBreadcrumb | partial | ✓ | ✓ | ✓ | `items` prop skipped — complex nested array type that ts-morph cannot map to a simple scalar; use slot children instead |
| AgButton | complete | ✓ | ✓ | ✓ | `toggle`, `pressed` omitted — runtime toggle state, not declaratively settable |
| AgButtonFx | complete | ✓ | ✓ | ✓ | `toggle`, `pressed` omitted — same as AgButton |
| AgCard | complete | ✓ | ✓ | ✓ | |
| AgCheckbox | complete | ✓ | ✓ | ✓ | `indeterminate` omitted — tri-state requires JS; `theme` omitted — internal CSS hook |
| AgDialog | complete | ✓ | ✓ | ✓ | |
| AgDivider | complete | ✓ | ✓ | ✓ | |
| AgDrawer | complete | ✓ | ✓ | ✓ | |
| AgFieldset | complete | ✓ | ✓ | ✓ | |
| AgHeader | complete | ✓ | ✓ | ✓ | |
| AgIcon | complete | ✓ | ✓ | ✓ | |
| AgIconButton | complete | ✓ | ✓ | ✓ | `pressed` omitted — runtime toggle state |
| AgIconButtonFx | complete | ✓ | ✓ | ✓ | `pressed` omitted — same as AgIconButton |
| AgInput | complete | ✓ | ✓ | ✓ | |
| AgIntlFormatter | complete | ✓ | ✓ | ✓ | |
| AgKbd | complete | ✓ | ✓ | ✓ | |
| AgLink | complete | ✓ | ✓ | ✓ | |
| AgLoader | complete | ✓ | ✓ | ✓ | |
| AgMark | complete | ✓ | ✓ | ✓ | |
| AgMessageBubble | complete | ✓ | ✓ | ✓ | |
| AgPopover | complete | ✓ | ✓ | ✓ | |
| AgProgress | complete | ✓ | ✓ | ✓ | |
| AgRadio | complete | ✓ | ✓ | ✓ | |
| AgRating | complete | ✓ | ✓ | ✓ | `validationMessages` omitted — complex nested object; `errorMessage` covers SDUI needs |
| AgSelect | complete | ✓ | ✓ | ✓ | |
| AgSelectionButton | complete | ✓ | ✓ | ✓ | |
| AgSelectionButtonGroup | complete | ✓ | ✓ | ✓ | `validationMessages` omitted — same as AgRating |
| AgSelectionCard | complete | ✓ | ✓ | ✓ | |
| AgSelectionCardGroup | complete | ✓ | ✓ | ✓ | `validationMessages` omitted — same as AgRating |
| AgSpinner | complete | ✓ | ✓ | ✓ | |
| AgTabs | complete | ✓ | ✓ | ✓ | |
| AgTag | complete | ✓ | ✓ | ✓ | |
| AgText | complete | ✓ | ✓ | ✓ | Renderer-only primitive — no core component file; hand-maintained in `rendererPrimitives` |
| AgToggle | complete | ✓ | ✓ | ✓ | `validationMessages` omitted — same as AgRating |
| AgTooltip | complete | ✓ | ✓ | ✓ | |

---

## Omitted — stateful components (deferred, see issue #375)

These components require controlled open/close, selection, or scroll state that cannot
be expressed as a static JSON node. Deferred until the stateful SDUI design (#375) lands.

| Component | R | V | L | Reason |
|---|:---:|:---:|:---:|---|
| AgCollapsible | — | — | — | Requires open/close toggle state |
| AgCombobox | — | — | — | Complex filtering + multi-select state |
| AgMenu | — | — | — | Open state + active-item tracking |
| AgPagination | — | — | — | Current-page state; `offset`/`navigationLabels` not JSON-serializable |
| AgScrollProgress | — | — | — | Tracks live scroll position — purely behavioral |
| AgScrollToButton | — | — | — | Scroll-detection behavioral component |
| AgSidebar | — | — | — | Open + collapsed state management |
| AgSidebarNav | — | — | — | No Props interface; pure slot composition |
| AgSlider | — | — | — | Continuous value state requires two-way binding; `value` type is `number | [number, number]` |
| AgToast | — | — | — | Auto-dismiss + open/close lifecycle |
| AgVisuallyHidden | — | — | — | No Props interface; pure slot wrapper |

---

## Omitted — no Props interface detected

These components exist in `v2/lib/src/components/` but the codegen found no exported
`*Props` interface during ts-morph inspection. Each needs a Props interface defined in
its core file before it can be added to the schema.

| Component | R | V | L | Notes |
|---|:---:|:---:|:---:|---|
| AgCopyButton | — | — | — | No `CopyButtonProps` interface |
| AgEmptyState | — | — | — | No `EmptyStateProps` interface |
| AgFlex | — | — | — | No `FlexProps` interface; layout primitive |
| AgImage | — | — | — | No `ImageProps` interface |
| AgProgressRing | — | — | — | No `ProgressRingProps` interface |
| AgSkeletonLoader | — | — | — | No `SkeletonLoaderProps` interface |
| AgTimeline | — | — | — | No `TimelineProps` interface |

---

## Coverage summary

| Category | Count |
|---|---|
| Complete | 40 |
| Partial | 1 (AgBreadcrumb) |
| Omitted — stateful (deferred #375) | 11 |
| Omitted — no Props interface | 7 |
| **Total components in library** | **59** |
