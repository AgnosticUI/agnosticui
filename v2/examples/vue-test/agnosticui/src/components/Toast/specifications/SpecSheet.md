# Toast Component Specification

## Overview

The Toast component is a non-modal notification element that appears at viewport edges or corners to provide brief, contextual feedback to users. It leverages the Alert component's visual design and the positioning utility for flexible placement.

## Design Philosophy

- **Non-intrusive**: Does not block user interaction (no backdrop, focus trap, or scroll lock)
- **Informational**: Provides feedback without requiring immediate action
- **Auto-dismissing**: Disappears automatically after a configurable duration
- **Flexible positioning**: Can appear at any viewport edge or corner
- **Accessible**: Screen reader compatible with appropriate ARIA attributes

## Component Composition

### Leverages Existing Components

1. **Alert Component** (`_Alert.ts`): Provides the visual UI and semantic variants
2. **CloseButton Component** (`shared/CloseButton`): Optional manual dismiss
3. **Positioning Utility** (`utils/positioning.ts`): Viewport positioning logic

### Key Differences from Dialog

- **No modal behavior**: No backdrop, focus trap, or scroll management
- **Auto-dismiss**: Configurable timeout for automatic dismissal
- **All positions supported**: Includes corner positions (top-start, top-end, bottom-start, bottom-end) in addition to edges
- **Pause on hover**: Auto-dismiss timer pauses when user hovers over toast

## Props

### Required Props

- `open` (boolean): Controls visibility of the toast
  - Default: `false`
  - Reflects to attribute for styling

### Visual Props (from Alert)

- `type` (AlertType): Visual variant
  - Options: 'success' | 'error' | 'warning' | 'info' | 'danger' | 'primary' | 'default'
  - Default: 'default'
  - Determines background color, text color, and border color

- `bordered` (boolean): Adds visible border
  - Default: `false`

- `rounded` (boolean): Adds rounded corners
  - Default: `true` (differs from Alert's default for better toast UX)

- `borderedLeft` (boolean): Adds thick left border accent
  - Default: `false`

### Positioning Props

- `position` (Position): Viewport placement
  - Options: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'start' | 'end'
  - Default: 'top-end'
  - Uses positioning utility for CSS generation

### Behavior Props

- `duration` (number): Auto-dismiss timeout in milliseconds
  - Default: `5000` (5 seconds)
  - Set to `0` to disable auto-dismiss

- `autoDismiss` (boolean): Enable auto-dismiss behavior
  - Default: `true`
  - When false, toast remains until manually dismissed

- `showCloseButton` (boolean): Display manual dismiss button
  - Default: `true`
  - Uses CloseButton component

- `pauseOnHover` (boolean): Pause auto-dismiss when hovering
  - Default: `true`
  - Improves accessibility and UX

## Events

### Toast Events

- `toast-open`: Dispatched when toast becomes visible
  - Detail: `void`
  - Bubbles: `true`

- `toast-close`: Dispatched when toast is dismissed (manually or auto)
  - Detail: `void`
  - Bubbles: `true`

- `toast-dismiss`: Dispatched when auto-dismiss timer completes
  - Detail: `void`
  - Bubbles: `true`

## Slots

- **Default slot**: Toast message content
  - Accepts text, HTML, or other components

## CSS Shadow Parts

Exposed for external styling:

- `ag-toast`: The outer container
- `ag-toast-content`: The Alert-based content wrapper
- Parts from CloseButton (when `showCloseButton` is true)

## Accessibility

### ARIA Attributes

- `role="status"`: For informational toasts (default, info, primary, success)
  - Announces to screen readers without interrupting
  - aria-live="polite"

- `role="alert"`: For urgent toasts (error, danger, warning)
  - Announces immediately to screen readers
  - aria-live="assertive"

- `aria-atomic="true"`: Ensures entire message is read

### Keyboard Support

- **Escape**: Dismisses toast (if `showCloseButton` is true)
- **Hover**: Pauses auto-dismiss timer (if `pauseOnHover` is true)

### Screen Reader Considerations

- Toast messages should be concise and meaningful
- Auto-dismiss timing should allow adequate time for screen reader announcement
- Visual focus is not moved to toast (non-modal behavior)

## Positioning

### Edge Positions (Full Width/Height)

- `top`: Full width at top of viewport
- `bottom`: Full width at bottom of viewport
- `start`: Full height at left edge of viewport (LTR) / right edge (RTL)
- `end`: Full height at right edge of viewport (LTR) / left edge (RTL)

### Corner Positions (Constrained Size)

- `top-start`: Top-left corner (LTR) / Top-right corner (RTL)
- `top-end`: Top-right corner (LTR) / Top-left corner (RTL)
- `bottom-start`: Bottom-left corner (LTR) / Bottom-right corner (RTL)
- `bottom-end`: Bottom-right corner (LTR) / Bottom-left corner (RTL)

**Spacing**:
- Edge positions: `var(--ag-space-4)` from viewport edge
- Corner positions: `var(--ag-space-4)` from both edges

**Max Dimensions** (corner positions):
- Max width: `400px`
- Max height: `200px`

## Animation

### Entry Animation

- **Opacity**: 0 → 1
- **Transform**:
  - Top positions: `translateY(-100%)` → `translateY(0)`
  - Bottom positions: `translateY(100%)` → `translateY(0)`
  - Start position: `translateX(-100%)` → `translateX(0)`
  - End position: `translateX(100%)` → `translateX(0)`
- **Duration**: `var(--ag-motion-fast)` (150ms)
- **Easing**: `ease-out`

### Exit Animation

- **Opacity**: 1 → 0
- **Transform**: Reverse of entry
- **Duration**: `var(--ag-motion-fast)` (150ms)
- **Easing**: `ease-in`

### Reduced Motion

- Respects `prefers-reduced-motion: reduce`
- Disables transforms, keeps opacity transitions

## Behavior Details

### Auto-Dismiss Flow

1. Toast opens (`open` becomes `true`)
2. Timer starts (unless `autoDismiss` is `false`)
3. If user hovers and `pauseOnHover` is `true`, timer pauses
4. On mouse leave, timer resumes
5. When timer completes:
   - Dispatch `toast-dismiss` event
   - Set `open` to `false`
   - Dispatch `toast-close` event

### Manual Dismiss Flow

1. User clicks close button
2. Dispatch `toast-close` event
3. Set `open` to `false`
4. Clear any active auto-dismiss timer

### Stacking (Future Enhancement)

For multiple simultaneous toasts:
- Not implemented in v1 of Toast component
- Future: ToastManager or ToastContainer component
- Would handle toast queue, spacing, and z-index management

## Design Tokens Usage

### Spacing

- Container padding: `var(--ag-space-3)` (from Alert)
- Viewport offset: `var(--ag-space-4)`

### Colors

Inherited from Alert component:
- `--ag-{type}-background`
- `--ag-{type}-text`
- `--ag-{type}` (for borders)

### Motion

- Animation duration: `var(--ag-motion-fast)`
- Transition easing: `ease-in`, `ease-out`

### Z-Index

- `var(--ag-z-index-toast)`: Should be higher than content but lower than modals
- Fallback: `1000` (if token not defined)

## Testing Requirements

### Unit Tests (minimum 15 tests)

1. ✅ Renders with default props
2. ✅ Applies correct AlertType styling
3. ✅ Reflects `open` attribute
4. ✅ Reflects `position` attribute
5. ✅ Auto-dismisses after configured duration
6. ✅ Does not auto-dismiss when `autoDismiss` is false
7. ✅ Pauses timer on hover when `pauseOnHover` is true
8. ✅ Resumes timer on mouse leave
9. ✅ Dispatches `toast-open` event
10. ✅ Dispatches `toast-close` event
11. ✅ Dispatches `toast-dismiss` event on auto-dismiss
12. ✅ Clears timer on manual close
13. ✅ Renders CloseButton when `showCloseButton` is true
14. ✅ Uses `role="status"` for non-urgent types
15. ✅ Uses `role="alert"` for urgent types
16. ✅ Applies positioning CSS correctly
17. ✅ Uses design tokens (not hard-coded values)
18. ✅ Respects `prefers-reduced-motion`

### Accessibility Tests

1. ✅ Has appropriate ARIA role
2. ✅ Has aria-live attribute
3. ✅ Has aria-atomic="true"
4. ✅ Screen reader announcement timing is adequate

### Visual Tests (Storybook)

1. ✅ All type variants (7 types)
2. ✅ All position variants (8 positions)
3. ✅ With and without close button
4. ✅ Auto-dismiss demonstration
5. ✅ Pause on hover demonstration
6. ✅ Dark mode compatibility

## Implementation Notes

### Composition Pattern

```typescript
// Simplified structure
<div class="toast-container" [positioned via utility]>
  <div class="toast-content" [Alert-based styling]>
    <slot></slot>
  </div>
  <ag-close-button />
</div>
```

### Timer Management

- Use `setTimeout` for auto-dismiss
- Store timer ID in private property
- Clear timer in `disconnectedCallback`
- Pause/resume logic for hover interaction

### CSS Positioning

- Use `generatePositionCSS()` utility for base positioning
- Override max-width/max-height for corner positions
- Apply viewport offset (spacing) consistently

## Future Enhancements

1. **ToastManager**: Global service for toast queueing
2. **Stacking**: Multiple toasts with automatic spacing
3. **Action buttons**: Built-in action button support
4. **Progress bar**: Visual timer indicator
5. **Swipe to dismiss**: Touch gesture support
6. **Sound**: Optional audio notification
7. **Persistence**: Save dismissed state to prevent re-showing

## Related Components

- **Alert**: Provides visual UI and variants
- **CloseButton**: Manual dismiss functionality
- **Dialog**: Modal alternative for blocking notifications
- **Snackbar**: Alternative name/pattern (Material Design)
