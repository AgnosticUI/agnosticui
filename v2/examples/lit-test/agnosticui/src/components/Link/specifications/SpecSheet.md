# Link Component Specification

## Overview
The Link component is a simple, accessible wrapper around the native HTML `<a>` element that provides consistent styling, variants, and states while preserving native browser accessibility features.

## Core Requirements

### Accessibility (from LinkSpec.md)
1. **Native Semantics**: Must render a native `<a>` element to ensure:
   - Automatic keyboard navigation (Tab key)
   - Screen reader announcements
   - Native focus management
   - Browser right-click context menu support

2. **Descriptive Link Text**:
   - Content inside the anchor (via `<slot>`) should clearly describe the link's purpose
   - Support `aria-label` attribute for complex content scenarios
   - Avoid generic text like "Click Here" or "Learn More" without context

3. **Keyboard Navigability**:
   - Links with `href` are automatically keyboard-focusable
   - Must provide clear, visible focus indicator (outline or background change)
   - Use design token `--ag-focus` for focus styling

4. **Visual Distinguishability**:
   - Links must be visually distinguishable from non-link text
   - Typically underlined and a different color
   - Clear hover and focus states

5. **Anti-Patterns to Avoid**:
   - Do NOT wrap anchor around other interactive elements (buttons, etc.)
   - Do NOT use empty anchor tags
   - Do NOT remove underlines without strong visual alternative

## Props/Attributes

### Required Props
- `href` (String): The URL the link points to (required for proper semantics)

### Optional Props
- `variant` (String): Visual style variant
  - Options: `''` (default), `'success'`, `'warning'`, `'danger'`
  - Default: `''` (uses primary link color)

- `isButton` (Boolean): Styles the link to look like a button
  - Default: `false`

- `external` (Boolean): Indicates external link (adds `rel="noopener noreferrer"` and `target="_blank"`)
  - Default: `false`

- `disabled` (Boolean): Visually and functionally disables the link
  - Default: `false`
  - Implementation: Remove `href` when disabled, add `aria-disabled="true"`

## Design Tokens (from ag-tokens.css)

### Colors
- **Default Link**: `--ag-primary` (#0550ae light, #1158c7 dark)
- **Hover/Focus**: `--ag-primary-dark` (#0a3069 light, #0d419d dark)
- **Success Variant**: `--ag-success` / `--ag-success-dark`
- **Warning Variant**: `--ag-warning` / `--ag-warning-dark`
- **Danger Variant**: `--ag-danger` / `--ag-danger-dark`
- **Disabled**: `--ag-text-muted` (#6b7280 light, #9198A1 dark)

### Focus
- **Focus Outline Color**: `rgba(var(--ag-focus), 0.5)` (37, 99, 235 light / 88, 166, 255 dark)
- **Focus Width**: `--ag-focus-width` (2px)
- **Focus Offset**: `--ag-focus-offset` (2px)

### Motion
- **Transition Duration**: `--ag-motion-medium` (0.2s)

### Spacing
- **Button Padding (when isButton)**: `--ag-space-2` and `--ag-space-4`

### Border
- **Border Width**: `--ag-border-width-1` (1px)
- **Radius (when isButton)**: `--ag-radius-md` (0.375rem)

## Styling Patterns

### Default Link
- Color: `--ag-primary`
- Text decoration: underline
- Hover: Darken to `--ag-primary-dark`
- Focus: Visible outline using `--ag-focus` tokens
- Smooth transition: `--ag-motion-medium`

### Button-Style Link (isButton)
- Based on Button component pattern
- Padding: `--ag-space-2` (vertical) `--ag-space-4` (horizontal)
- Border radius: `--ag-radius-md`
- No underline
- Background color based on variant
- Hover: Darken background

### Disabled State
- Remove `href` attribute (makes non-interactive)
- Add `aria-disabled="true"`
- Color: `--ag-text-muted`
- Cursor: `not-allowed`
- Opacity: 0.6
- No hover effects

### Variants
Each variant changes the link color:
- **success**: `--ag-success` / hover: `--ag-success-dark`
- **warning**: `--ag-warning` / hover: `--ag-warning-dark`
- **danger**: `--ag-danger` / hover: `--ag-danger-dark`

## CSS Shadow Parts
Expose the following parts for customization:
- `ag-link`: The internal `<a>` element

## Events
No custom events needed - rely on native events:
- `click`: Native click event (bubbles naturally)
- `focus`: Native focus event
- `blur`: Native blur event

Optional callback props for convenience (especially in frameworks):
- `onClick?: (event: MouseEvent) => void`
- `onFocus?: (event: FocusEvent) => void`
- `onBlur?: (event: FocusEvent) => void`

## HTML Structure
```html
<ag-link href="/path" variant="success">
  <slot></slot> <!-- Link text or content -->
</ag-link>
```

Renders as:
```html
<a href="/path" part="ag-link">
  [slotted content]
</a>
```

## Testing Requirements

### Unit Tests (minimum 12 tests)
1. Renders with default props
2. Renders with href attribute
3. Applies variant classes correctly (success, warning, danger)
4. Handles disabled state (removes href, adds aria-disabled)
5. Handles external links (adds rel and target attributes)
6. Handles isButton styling
7. Exposes CSS shadow part 'ag-link'
8. Slotted content renders correctly
9. Click event fires on enabled link
10. Click event does not navigate when disabled
11. Focus and blur events work correctly
12. Correct CSS attribute selectors used (not [attr="true"])

### Accessibility Tests
1. Renders native `<a>` element
2. Keyboard navigable (focusable with Tab)
3. Has visible focus indicator
4. Disabled links have aria-disabled="true"
5. External links have proper rel/target attributes

## Framework Integration

### React
- Use `@lit/react` createComponent
- No special event mapping needed (native events work automatically)

### Vue
- Standard Vue wrapper pattern
- Sync props reactively using `watchEffect`
- Forward slots properly

## Storybook Stories

### Required Stories (all 3 frameworks)
1. **Default**: Basic link with href
2. **Variants**: Success, Warning, Danger variants
3. **Button Style**: Link styled as button (isButton)
4. **Disabled**: Disabled link state
5. **External**: External link with icon/indicator
6. **CSS Parts Customization**: Custom styling via shadow parts

## Documentation Requirements

### API Table
- Props: href, variant, isButton, external, disabled
- Events: onClick, onFocus, onBlur
- Slots: default (link content)
- CSS Parts: ag-link

### Examples
- Basic usage
- All variants
- Button-style links
- External links
- Disabled state
- CSS Parts customization
