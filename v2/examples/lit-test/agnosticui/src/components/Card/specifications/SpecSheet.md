# Card Component Specification Sheet

This document summarizes the requirements for the AgnosticUI Card component based on the provided specification files and v1 reference implementation.

## 1. Core Functional Requirements

- **Primary Action**: The entire card surface should be interactive, triggering a primary action (e.g., navigating to a URL).
- **Secondary Actions**: The card must support additional, independent interactive elements like buttons or links (e.g., a "Details" button or a tag link).
- **Text Selection**: Users must be able to select and copy text content within the card without accidentally triggering the primary action.

## 2. Accessibility (A11y) Requirements

- **Semantic Primary Action**: The primary action must be a semantic `<a>` (or `<button>`) element. Do NOT wrap the entire card in an `<a>` tag, as this is invalid if the card contains other interactive elements.
- **Clear Link Text**: The primary action link/button should contain concise, descriptive text so it can be understood out of context (e.g., in a screen reader's link list). It should read as `Lilith, link`, not `Lilith, 10 year old British Shorthair, link`.
- **Keyboard Focus**: The card and all interactive elements within it must have clear, visible focus states. The default focus outline can be removed only if it is replaced by a more visible custom style (e.g., a colored border).
- **Screen Reader Experience**: When cards are in a list, the list structure (`<ul>`, `<li>`) should be used so screen readers can announce the position (e.g., "list, four items").
- **Reduced Motion**: The component must respect `prefers-reduced-motion` media query for animations.

## 3. Implementation Details: Pseudo-Content Overlay

The recommended implementation uses a CSS pseudo-element to create the large, clickable area.

- **Card Container (`:host`)**: Must have `position: relative` to serve as the positioning context for the overlay.
- **Primary Action (`.card-primary-action`)**:
  - This is the actual `<a>` tag with class `.card-primary-action`.
  - It should have a `::after` pseudo-element with the following properties:
    - `content: '';`
    - `position: absolute;`
    - `inset: 0;` (or `top:0; right:0; bottom:0; left:0;`)
    - `z-index: 1;` (placing it above the card content but below secondary actions).
- **Text Content (card content)**:
  - Must have `position: relative` and `z-index: 2` to ensure it appears *above* the primary action's pseudo-element, making it selectable.
- **Secondary Actions (`.card-secondary-action`)**:
  - Must have `position: relative` and a `z-index` of `2` or higher to sit on top of the primary action's pseudo-element, ensuring they are clickable.

## 4. Component Props & Variants (from v1 Reference)

Based on the v1 CSS specification, the Card component should support:

### Boolean Props:
- **`isSkinned`** (default: true): Applies background color and border
- **`isStacked`**: Applies vertical stacking with margin between slotted children
- **`isShadow`**: Applies box-shadow with hover enhancement
- **`isAnimated`**: Enables smooth transitions on hover (translateY + box-shadow)
- **`isRounded`**: Applies border-radius (note: also applied when `isSkinned` is true)

### Variant Prop:
- **`variant`**: String enum supporting: `'success' | 'info' | 'error' | 'warning' | ''`
  - **success**: Light green background with dark green text
  - **info**: Light blue background with dark blue text
  - **error**: Light red background with dark red text
  - **warning**: Light yellow background with dark yellow/brown text

## 5. Styling & Design Tokens

- **Hover & Focus States**: The card container should change its appearance on `:hover` and `:focus-within`. This provides visual feedback when any element inside the card is active.
- **Design Tokens**: All styling (borders, colors, padding, etc.) must use AgnosticUI v2 design tokens (`--ag-*`). For example:
  - Spacing: `--ag-space-1`, `--ag-space-2`, `--ag-space-3`, etc.
  - Border widths: `--ag-border-width-1`, `--ag-border-width-2`, `--ag-border-width-3`
  - Border colors: `--ag-border`, `--ag-border-subtle`
  - Radius: `--ag-radius-sm`, `--ag-radius-md`, `--ag-radius-lg`
  - Shadows: `--ag-shadow-sm`, `--ag-shadow-md`, `--ag-shadow-lg`, `--ag-shadow-xl`
  - Timing: `--ag-timing-fast`, `--ag-timing-slow`
  - Variant colors: `--ag-success-light`, `--ag-success-dark`, etc.

### ⚠️ CRITICAL: Correct Token Usage Patterns

**Border styling:**
```css
/* CORRECT: Use border-width-N and --ag-border */
border: var(--ag-border-width-1) solid var(--ag-border);
border: var(--ag-border-width-2) solid var(--ag-border-subtle);

/* WRONG: These tokens DO NOT exist */
border: var(--ag-border-width) solid var(--ag-border-color); /* ❌ */
```

**Component-specific tokens:**
- ❌ DO NOT create component-specific tokens like `--ag-alert-padding`, `--ag-card-border-width`
- ✅ USE core tokens directly: `--ag-space-3`, `--ag-border-width-1`
- Components should consume core design tokens, not create their own

### ⚠️ CRITICAL: CSS Attribute Selectors for Boolean Props

**Lit reflects boolean properties as present/absent, NOT as `="true"`/`="false"` strings.**

✅ **CORRECT:**
```css
:host([isskinned]) { /* styles when isskinned is true */ }
:host([isshadow]) { /* styles when isshadow is true */ }
:host([isanimated]) { /* styles when isanimated is true */ }
```

❌ **WRONG (common mistake):**
```css
:host([isskinned="true"]) { /* will NOT work! */ }
:host([isshadow="true"]) { /* will NOT work! */ }
:host([isanimated="true"]) { /* will NOT work! */ }
```

When a boolean prop is `true`, Lit renders: `<ag-card isskinned>` (attribute present)
When a boolean prop is `false`, Lit renders: `<ag-card>` (attribute absent)

**Testing:** Always include a test that verifies CSS selectors use `[attrname]` not `[attrname="true"]`

## 6. Animation Behavior

When `isAnimated` is true:
- Default state: Smooth transitions on box-shadow and transform
- Hover state: Card translates up by -3px with enhanced timing
- Respects `prefers-reduced-motion` media query by disabling animations

## 7. Slot Structure

The component should support three slots:
- **header**: Optional header content
- **default**: Main card content
- **footer**: Optional footer content
