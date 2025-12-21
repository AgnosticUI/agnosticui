# Loader Component Specification

## Overview

The Loader component displays a three-dot blinking animation to indicate loading state. It provides visual feedback to users during asynchronous operations while maintaining accessibility.

## V1 Analysis

Based on v1 implementation (`loading.css`, `loading.hbs`):

### Features to Port
- **Three-dot blink animation**: Three dots positioned horizontally that blink with staggered delays
- **Size variants**: small, default, large
- **Visibility control**: Uses `aria-busy` attribute to control opacity (hidden by default, visible when busy)
- **Customizable color**: Supports color customization via CSS custom property
- **Reduced motion support**: Respects `prefers-reduced-motion` media query
- **Accessibility**: Includes screen reader text, role="status", aria-live="polite"

### V1 Implementation Details
- Uses `::before` and `::after` pseudo-elements plus the main element for three dots
- Absolute positioning with calculated offsets based on size
- Blink animation with 50% keyframe (transparent background)
- Animation delays: 0s (before), 250ms (main), 500ms (after)
- Opacity: 0% when `aria-busy="false"`, 100% when `aria-busy="true"`

## Component API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'small' \| 'default' \| 'large'` | `'default'` | Controls the size of the loader dots |
| `ariaLabel` | `string` | `'Loading...'` | Screen reader text describing loading state |

### Slots

| Slot | Description |
|------|-------------|
| (default) | Optional text to display instead of default aria label |

### CSS Shadow Parts

| Part | Description |
|------|-------------|
| `ag-loader` | The main container element |
| `ag-loader-label` | The screen reader text element |

### Custom Properties (for customization)

Users can customize appearance via CSS custom properties:

```css
ag-loader {
  --ag-loader-color: var(--ag-primary); /* Custom dot color */
}
```

**IMPORTANT**: Internally, the component should use core design tokens directly, NOT component-specific tokens:
- Use `var(--ag-gray-dark)` for default color
- Use `var(--ag-space-*)` for spacing
- Use `var(--ag-radius-*)` for border radius

## Design Tokens to Use

### Spacing
- `--ag-space-16`: Default loader size
- `--ag-space-12`: Small loader size
- `--ag-space-18`: Large loader size
- `--ag-radius-6`: Default border radius for dots
- `--ag-radius-8`: Large border radius for dots

### Colors
- `--ag-gray-dark`: Default dot color

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
- When reduced motion is preferred, disable or minimize animations

## Visual States

### Default State
- Opacity: 0% (visually hidden)
- `aria-busy="false"`

### Loading State
- Opacity: 100% (visible)
- Three dots blinking in sequence with staggered delays
- `aria-busy="true"`

## Animation Behavior

### Blink Animation
- Duration: 1s per cycle, infinite
- Keyframes: 50% { background-color: transparent }
- Delays:
  - First dot (::before): 0s
  - Second dot (main): 250ms
  - Third dot (::after): 500ms

### Reduced Motion
- When `prefers-reduced-motion` is active:
  - Set `transition-duration: 0.001ms !important`
  - Apply to `.loader`, `.loader::before`, `.loader::after`

## Implementation Notes

### CSS Structure
1. Use relative positioning for main element with absolute positioned pseudo-elements
2. Calculate dot sizes as half of the loader size variables
3. Position dots horizontally with negative left for ::before and positive left for ::after
4. Account for negative positioning with margin-left on main element

### Shadow DOM Considerations
- All styling must work within Shadow DOM
- Expose necessary parts for customization
- Use `:host` selectors appropriately

### Size Calculations
- Dots are half the size of the specified loader size
- Positioning offsets equal the full loader size
- Small: 12px total, 6px dots
- Default: 16px total, 8px dots
- Large: 18px total, 9px dots

## Testing Requirements

### Unit Tests (minimum 12 tests)

1. **Props**
   - [ ] Renders with default size
   - [ ] Renders small size variant
   - [ ] Renders large size variant
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
   - [ ] Applies blink animation
   - [ ] Has correct animation delays on pseudo-elements
   - [ ] Respects prefers-reduced-motion

5. **CSS Shadow Parts**
   - [ ] Exposes ag-loader part
   - [ ] Exposes ag-loader-label part

6. **Structure**
   - [ ] Uses correct CSS selectors for size variants
   - [ ] Properly positions pseudo-elements

## Framework-Specific Considerations

### React
- Use `createComponent` from `@lit/react`
- Export proper TypeScript types

### Vue
- Use template ref with `ref="agComponent"`
- Sync props with `watchEffect`
- Forward default slot for custom label text

## Examples to Include in Storybook

1. Default loader
2. Small loader
3. Large loader
4. Custom color loader
5. With custom aria label
6. Loading state toggling (interactive)

## Documentation Examples

1. Basic usage in all three frameworks
2. Size variants
3. Color customization via CSS custom properties
4. Integration with async operations
5. Accessibility best practices
