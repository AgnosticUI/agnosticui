# Dialog Component Specification

*Single source of truth for all AgnosticUI v2 Dialog implementation decisions*

## Component Overview

The Dialog component provides an accessible, minimalist and themeable implementation of modal dialogs following WAI-ARIA APG patterns. It handles focus management, escape key handling, backdrop interactions, and proper layering with comprehensive accessibility features.

## AI-First Design Goals

- **Canonical Pattern**: Immutable `_dialog.ts` with experimental `dialog.ts`
- **AI Extensibility**: Clear patterns for AI-driven modifications and styling
- **Minimalist & Themeable**: Functional CSS only, completely styleable externally
- **Accessibility First**: Comprehensive focus management and screen reader support

## Architecture

### Core Component
- `AgDialog` - Modal dialog with backdrop, focus trapping, and accessibility features

### File Structure
```
src/components/Dialog/
├── core/
│   ├── _dialog.ts              # Canonical, upgrade-safe source
│   └── _dialog.spec.ts         # Comprehensive test suite
├── react/
│   ├── ReactDialog.tsx        # React wrapper component
│   └── ReactDialog.spec.tsx   # React-specific tests
├── vue/
│   ├── VueDialog.vue          # Vue 3 wrapper component
│   ├── VueDialogHeader.vue    # Header subcomponent
│   ├── VueDialogFooter.vue    # Footer subcomponent
│   └── VueDialog.spec.ts      # Vue-specific tests
└── spec.md                    # This specification
```

## Functional Requirements

### Core Behavior
- **Modal Display**: Overlays content with backdrop
- **Focus Management**: Traps focus within dialog
- **Escape Handling**: Closes on Escape key (configurable)
- **Backdrop Interaction**: Closes on backdrop click (configurable)
- **Layering**: Proper z-index management
- **Body Scroll Lock**: Prevents background scrolling

### Configuration Options
- `open` - Controls dialog visibility
- `noCloseOnEscape` - Disable Escape key closing (default: false, meaning Escape closes by default)
- `noCloseOnBackdrop` - Disable backdrop click closing (default: false, meaning backdrop clicks close by default)
- `showCloseButton` - Display built-in close button (default: false)

### Content Areas
- **Header Slot**: Dialog title and optional close button
- **Default Slot**: Main dialog content
- **Footer Slot**: Action buttons and secondary content

### Dialog Variants
- **Modal**: Blocks interaction with background (default)
- **Alert Dialog**: For critical messages requiring immediate attention
- **Confirmation Dialog**: For user confirmation of actions

## WAI-ARIA APG Compliance (MANDATORY)

### Required Accessibility Features
- **Modal Behavior**: Prevents interaction with background content
- **Focus Management**: Focus moves to dialog and is trapped within
- **Keyboard Navigation**: Escape key handling, tab cycling
- **Screen Reader**: Proper role and labeling
- **Focus Restoration**: Returns focus to trigger element when closed

### ARIA Attributes
- `role="dialog"` or `role="alertdialog"` - Dialog identification
- `aria-modal="true"` - Modal behavior indication
- `aria-labelledby` - Associates with dialog title
- `aria-describedby` - Associates with dialog description
- `aria-hidden` - Manages visibility for screen readers

### Keyboard Interaction
- `Escape` - Closes dialog (if enabled)
- `Tab` - Cycles through focusable elements within dialog
- `Shift+Tab` - Reverse tab cycling
- Focus trapped within dialog boundaries

### Focus Management Requirements
1. **On Open**: Focus moves to first focusable element or dialog itself
2. **During Use**: Focus remains trapped within dialog
3. **On Close**: Focus returns to element that opened dialog
4. **Tab Wrapping**: First/last elements wrap focus appropriately

## Design Token Integration

### Core Styling
- **Backdrop**: `var(--ag-backdrop, rgba(0, 0, 0, 0.5))`
- **Background**: `var(--ag-surface-primary)`
- **Border**: `var(--ag-border-primary)`
- **Shadow**: `var(--ag-shadow-lg)` for elevation
- **Border Radius**: `var(--ag-radius-lg, 1rem)`

### Z-Index Management
- **Dialog Layer**: `var(--ag-z-index-modal, 1000)`
- **Backdrop**: Dialog z-index - 1
- **Focus Management**: Ensures proper layering

### Custom Properties
```css
/* Dialog Container */
--dialog-max-width: 32rem;
--dialog-max-height: 90vh;
--dialog-margin: var(--ag-space-4, 1rem);

/* Backdrop */
--dialog-backdrop-bg: rgba(0, 0, 0, 0.5);
--dialog-backdrop-blur: blur(2px);

/* Dialog Surface */
--dialog-bg: var(--ag-surface-primary);
--dialog-border: 1px solid var(--ag-border-primary);
--dialog-shadow: var(--ag-shadow-lg);
--dialog-radius: var(--ag-radius-lg, 1rem);

/* Content Spacing */
--dialog-padding: var(--ag-space-6, 1.5rem);
--dialog-header-padding: var(--ag-space-4, 1rem) var(--ag-space-6, 1.5rem);
--dialog-footer-padding: var(--ag-space-4, 1rem) var(--ag-space-6, 1.5rem);
```

## Usage Patterns

### Basic Dialog
```html
<ag-dialog open>
  <h2 slot="header">Dialog Title</h2>
  <p>Dialog content goes here.</p>
  <div slot="footer">
    <ag-button variant="primary">Confirm</ag-button>
    <ag-button>Cancel</ag-button>
  </div>
</ag-dialog>
```

### Alert Dialog
```html
<ag-dialog
  open
  role="alertdialog"
  no-close-on-backdrop>
  <h2 slot="header">Warning</h2>
  <p>This action cannot be undone.</p>
  <div slot="footer">
    <ag-button variant="danger">Delete</ag-button>
    <ag-button>Cancel</ag-button>
  </div>
</ag-dialog>
```

### Dialog with Close Button
```html
<ag-dialog
  open
  show-close-button>
  <h2 slot="header">Settings</h2>
  <form>
    <!-- Form content -->
  </form>
</ag-dialog>
```

### Programmatic Control
```javascript
const dialog = document.querySelector('ag-dialog');
dialog.open = true;  // Show dialog
dialog.open = false; // Hide dialog

// Event listeners
dialog.addEventListener('dialog-open', () => {
  console.log('Dialog opened');
});

dialog.addEventListener('dialog-close', () => {
  console.log('Dialog closed');
});
```

## Framework Integration

### React Wrapper
- **Component**: `ReactDialog`
- **Props**: TypeScript interfaces for all properties
- **Events**: onOpen, onClose, onBackdropClick
- **Portal Support**: Renders to document body by default

### Vue Wrapper
- **Components**: `VueDialog`, `VueDialogHeader`, `VueDialogFooter`
- **Props**: Vue 3 Composition API support
- **Events**: Vue event system integration
- **Teleport**: Uses Vue teleport for proper rendering

## Testing Requirements

### Unit Tests
- ✅ Dialog open/close behavior
- ✅ Focus management and trapping
- ✅ Escape key handling
- ✅ Backdrop click handling
- ✅ ARIA attribute presence
- ✅ Keyboard navigation
- ✅ Event dispatching
- ✅ Slot content rendering
- ✅ Close button functionality

### Integration Tests
- ✅ React wrapper functionality
- ✅ Vue wrapper functionality
- ✅ Portal/teleport behavior
- ✅ Cross-framework consistency
- ✅ Body scroll lock behavior

### Accessibility Tests
- ✅ Screen reader announcement
- ✅ Focus management flow
- ✅ Keyboard navigation
- ✅ Modal behavior verification
- ✅ ARIA attribute validation
- ✅ Color contrast compliance

## Quality Assurance

### Current Status
- **Implementation**: Complete with comprehensive feature set
- **Testing**: Full test coverage including recent timeout fixes
- **Framework Support**: React, Vue wrappers implemented
- **Accessibility**: WAI-ARIA compliant with focus management
- **Playground**: Interactive demos available

### Recent Improvements
- **Test Stability**: Fixed VueDialog updateComplete timeout issues (2024-09)
- **Focus Management**: Robust focus trapping implementation
- **Framework Wrappers**: Comprehensive React and Vue integration

### Known Limitations
- No built-in animation system (by design - use CSS or external animation)
- Maximum one modal dialog at a time (standard UX pattern)
- Requires manual focus restoration in some edge cases

## Performance Considerations

### Focus Management
- Uses efficient focus trap implementation
- Minimal DOM queries for performance
- Proper cleanup on dialog close

### Portal Rendering
- React: Uses React Portal for body rendering
- Vue: Uses Vue Teleport for proper placement
- Prevents z-index stacking issues

## External References

- [WAI-ARIA APG Dialog Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)
- [MDN Dialog Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)
- [Focus Management Guidelines](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/)

## Changelog

### v2.0.0-dev (Current)
- ✅ Initial implementation with full accessibility
- ✅ Framework wrappers for React, Vue
- ✅ Comprehensive test coverage
- ✅ Minimalist and themeable styling approach
- ✅ Focus management and trapping
- ✅ Keyboard navigation support
- ✅ Backdrop and escape handling
- ✅ Test stability improvements