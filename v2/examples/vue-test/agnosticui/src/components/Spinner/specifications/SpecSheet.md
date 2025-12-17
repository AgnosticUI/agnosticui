# Spinner Component Specification

## Overview

The Spinner component displays a circular rotating animation to indicate loading state. It provides visual feedback to users during asynchronous operations while maintaining accessibility.

## V1 Analysis

Based on v1 implementation (`spinner.css`, `spinner.hbs`):

### Features to Port
- **Circular rotating animation**: Spinning circle with partial border creating "snake" effect
- **Size variants**: small, default, large, xlarge
- **Visibility control**: Uses `aria-busy` attribute to control opacity (hidden by default, visible when busy)
- **Customizable color**: Supports color customization via CSS custom property
- **Reduced motion support**: Respects `prefers-reduced-motion` media query
- **Accessibility**: Includes screen reader text, role="status", aria-live="polite"

### V1 Implementation Details
- Uses CSS Grid to overlay `::before` and `::after` pseudo-elements
- `::before` creates muted background circle (12% opacity)
- `::after` creates rotating partial border (the "snake")
- 360deg rotation animation with 1s duration, ease-in-out
- Opacity: 0% when `aria-busy="false"`, 100% when `aria-busy="true"`
- Border widths scale with size

## Component API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'small' \| 'default' \| 'large' \| 'xlarge'` | `'default'` | Controls the size of the spinner |
| `ariaLabel` | `string` | `'Loading...'` | Screen reader text describing loading state |

### Slots

| Slot | Description |
|------|-------------|
| (default) | Optional text to display instead of default aria label |

### CSS Shadow Parts

| Part | Description |
|------|-------------|
| `ag-spinner` | The main container element |
| `ag-spinner-label` | The screen reader text element |

### Custom Properties (for customization)

Users can customize appearance via CSS custom properties:

```css
ag-spinner {
  --ag-spinner-color: var(--ag-primary); /* Custom spinner color */
}
```

**IMPORTANT**: Internally, the component should use core design tokens directly, NOT component-specific tokens:
- Use `var(--ag-gray-dark)` for default color
- Use design token values for sizing

## Design Tokens to Use

### Sizing
- Small: 24px width/height, 2px border
- Default: 32px width/height, 3px border
- Large: 40px width/height, 4px border
- XLarge: 56px width/height, 6px border

### Colors
- `--ag-gray-dark`: Default spinner color

## Accessibility Requirements

### ARIA Attributes
- `role="status"`: Identifies the element as a status indicator
- `aria-live="polite"`: Announces changes to screen readers without interrupting
- `aria-busy="true"` when loading, `"false"` when not loading
- Screen reader text must be visually hidden but accessible

### Keyboard Interaction
- No keyboard interaction required (informational only)

### Screen Reader Behavior
- Must announce loading state changes
- Must provide meaningful text alternative
- Should not interrupt user's current activity (polite, not assertive)

### Motion Accessibility
- Must respect `prefers-reduced-motion` media query
- When reduced motion is preferred, minimize transition duration

## Visual States

### Default State
- Opacity: 0% (visually hidden)
- `aria-busy="false"`

### Loading State
- Opacity: 100% for rotating border, 12% for background circle
- Continuous 360deg rotation
- `aria-busy="true"`

## Animation Behavior

### Rotation Animation
- Name: `loading-circle`
- Duration: 1s
- Timing: ease-in-out
- Iteration: infinite
- Transform: rotate(0deg) to rotate(360deg)

### Reduced Motion
- When `prefers-reduced-motion` or `update: slow`:
  - Set `transition-duration: 0.001ms !important`

## Implementation Notes

### CSS Structure
1. Use CSS Grid with single cell for overlaying pseudo-elements
2. Grid template: `"content" 100% / auto`
3. Use `place-items: center` for centering
4. Both pseudo-elements share `grid-area: content`
5. Both are circles with `border-radius: 50%`

### Pseudo-element Roles
- `::before`: Background circle
  - Full border with `border-color: var(--spinner-color)`
  - Opacity: 0% default, 12% when `aria-busy="true"`

- `::after`: Rotating "snake"
  - Partial border: `transparent var(--spinner-color) transparent transparent`
  - Opacity: 0% default, 100% when `aria-busy="true"`
  - Animated rotation
  - `pointer-events: none`

### Shadow DOM Considerations
- All styling must work within Shadow DOM
- Expose necessary parts for customization
- Use `:host` selectors appropriately

### Size Specifications
- Small: 24px × 24px, 2px border (use design token equivalent)
- Default: 32px × 32px, 3px border
- Large: 40px × 40px, 4px border
- XLarge: 56px × 56px, 6px border

## Testing Requirements

### Unit Tests (minimum 12 tests)

1. **Props**
   - [ ] Renders with default size
   - [ ] Renders small size variant
   - [ ] Renders large size variant
   - [ ] Renders xlarge size variant
   - [ ] Accepts custom aria label

2. **Visibility**
   - [ ] Initially hidden (opacity 0%)
   - [ ] Shows when aria-busy is true
   - [ ] Hides when aria-busy is false

3. **Accessibility**
   - [ ] Has role="status"
   - [ ] Has aria-live="polite"
   - [ ] Contains screen reader text
   - [ ] Screen reader text is visually hidden but accessible

4. **Animation**
   - [ ] Applies rotation animation
   - [ ] Respects prefers-reduced-motion

5. **CSS Shadow Parts**
   - [ ] Exposes ag-spinner part
   - [ ] Exposes ag-spinner-label part

6. **Structure**
   - [ ] Uses correct CSS selectors for size variants
   - [ ] Uses grid layout for pseudo-element overlay

## Framework-Specific Considerations

### React
- Use `createComponent` from `@lit/react`
- Export proper TypeScript types

### Vue
- Use template ref with `ref="agComponent"`
- Sync props with `watchEffect`
- Forward default slot for custom label text

## Examples to Include in Storybook

1. Default spinner
2. Small spinner
3. Large spinner
4. XLarge spinner
5. Custom color spinner
6. With custom aria label
7. Loading state toggling (interactive)

## Documentation Examples

1. Basic usage in all three frameworks
2. Size variants
3. Color customization via CSS custom properties
4. Integration with async operations
5. Accessibility best practices
6. Comparison with Loader component (when to use which)
