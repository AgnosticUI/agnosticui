# Login Playbook - Internal Development Notes

> Internal notes for the login playbook development. User-facing documentation is in PROMPT.md.

---

## Core Library Issues (v2/lib)

These are CSS overrides or workarounds discovered during playbook development that ideally should be addressed in the AgnosticUI core library.

| Issue                                                           | Current Workaround                                                                                | Suggested Core Fix                                                   |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| Input label/placeholder font size defaults to var(--ag-space-4) | `ag-input::part(ag-input-label), ag-input::part(ag-input) { font-size: var(--ag-font-size-sm); }` | Consider 14px default or expose size prop                            |
| Checkbox label font size                                        | `ag-checkbox::part(ag-checkbox-label) { font-size: var(--ag-font-size-sm); }`                     | Consider 14px default or expose size prop                            |
| Checkbox wrapper has gap                                        | `ag-checkbox::part(ag-checkbox-wrapper) { gap: 0; }`                                              | Review if gap is needed in core                                      |
| Full-width buttons need two selectors                           | Both `ag-button { display: block; width: 100%; }` AND `::part(ag-button) { width: 100%; }`        | Consider `fullWidth` prop                                            |
| Icon addon slot content not centered                            | Wrap in `<span class="input-icon">` with flex centering                                           | Input component should center slot content                           |
| Non-bordered buttons shorter than bordered (38px vs 40px)       | None currently                                                                                    | Add transparent border to non-bordered variant for consistent height |
| Button height increases with icon content (40px → 42-44px)      | Use var(--ag-space-4) icons instead of 18px (brings to 42px)                                      | Constrain button content height or use flex alignment                |
| Social icons expand button height                               | `.social-icon { width: var(--ag-space-4); height: var(--ag-space-4); vertical-align: middle; }`   | Button should constrain content height                               |

---

## Development Changelog

- **Fourth fix** (button height normalization):
  - Changed social icon size from 18px to var(--ag-space-4) to reduce button height from 44px to 42px
  - Added `vertical-align: middle` to social icons

- **Third visual review fixes** (icon centering, auxiliary row alignment):
  - **Icon addon**: Wrap icon in `<span class="input-icon">` with `display: flex; align-items: center` to center icons
  - **Icon size**: Lucide icons render 18x24 without explicit sizing - add `.input-icon svg {   width: var(--ag-space-4); height: var(--ag-space-4); }`
  - **Auxiliary row**: Remove `align-items: center` - it misaligns checkbox and link

- **Second visual review fixes** (font sizes, button rounding, icons):
  - **Font sizes**: All labels, placeholders, checkbox text, and auxiliary row links should be 14px (`--ag-font-size-sm`)
  - **Button rounding**: All buttons need `shape="rounded"` prop for rounded corners
  - **Full-width buttons**: Need BOTH `display: block; width: 100%` on `ag-button` AND `::part(ag-button) { width: 100% }`
  - **Checkbox gap**: Remove wrapper gap via `ag-checkbox::part(ag-checkbox-wrapper) { gap: 0; }`
  - **Auxiliary row**: Added `flex-wrap: wrap; gap: var(--ag-space-2)` for better narrow screen handling
  - **Form width**: Removed `width: 100%` from `.login-form` (caused tablet overflow in Lit)
  - **Lit icons**: Use inline SVG strings instead of Lucide imports (Lucide export format doesn't work directly)
  - **Vue Link**: VueLink.vue must import `../core/Link` to register the web component

- **All three frameworks complete** (React, Vue, Lit):
  - All examples build successfully
  - Vue: tsconfig include paths may need manual fix (`src/**/*.ts` not `src*.ts`)
  - Lit: CSS tokens imported via `@import` in global CSS
  - Icons: React uses lucide-react, Vue uses lucide-vue-next, Lit uses inline SVG

- **Spacing and button fixes** (based on first visual review):
  - Logo: Changed to `--ag-space-6` margin and `text-align: center`
  - Title: Changed margin to `--ag-space-4` (was incorrectly `--ag-space-6`)
  - Full-width buttons: Must use `ag-button::part(ag-button)` to target shadow DOM
  - Social buttons: Changed from side-by-side grid to stacked vertical layout
  - Social button spacing: `margin-block-end: var(--ag-space-3)` between buttons
  - Checkbox: Core component provides margin, no gap needed on wrapper

- **React implementation complete**:
  - Fixed asset copy path: `../../graphics/` (not `../graphics/`)
  - Documented CLI TTY requirement workaround
  - Added working React code patterns for inputs with addons, buttons, social buttons
  - Verified build succeeds and dev server runs correctly

- **Initial version**: Created from original NOTES.md with corrections:
  - Fixed background image path: `v2/graphics/joshua-optimized.jpg`
  - Added missing components to CLI add command: `divider icon`
  - Fixed font weight: 400 (Regular) not 700
  - Added explicit logo.svg reference
  - Added font import instructions for index.html
  - Added input addon syntax examples for all frameworks
  - Added preconnect hints for Google Fonts
