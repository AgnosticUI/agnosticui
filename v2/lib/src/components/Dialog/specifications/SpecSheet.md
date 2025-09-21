# Dialog Component Specification

**Based on WAI-ARIA APG Specifications:**
- Pattern: https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/
- Examples: https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog/
- **Downloaded:** September 19, 2025
- **APG Version:** Current as of download date

**Additional Reference:**
- A11y-Dialog Implementation: https://github.com/KittyGiraudel/a11y-dialog
- **Analyzed:** September 19, 2025 - Key accessibility patterns extracted

## Component Purpose
A modal dialog component that overlays the primary window, prevents interaction with background content, and manages focus within the dialog content area.

## WAI-ARIA APG Requirements

### Required ARIA Attributes
- **`role="dialog"`** - Identifies the dialog container
- **`aria-modal="true"`** - Indicates the dialog blocks interaction with other content
- **`aria-labelledby`** OR **`aria-label`** - Provides accessible name for the dialog

### Optional ARIA Attributes
- **`aria-describedby`** - References element(s) that describe the dialog purpose

### Required Keyboard Interaction
| Key | Function |
|-----|----------|
| `Tab` | Moves focus to next focusable element within dialog |
| `Shift + Tab` | Moves focus to previous focusable element within dialog |
| `Escape` | Closes the dialog and returns focus to trigger element |

### Required Focus Management
1. **Initial Focus**: When dialog opens, focus moves to an element inside the dialog
2. **Focus Trapping**: Tab/Shift+Tab cycles only within dialog elements
3. **Focus Return**: When dialog closes, focus returns to triggering element
4. **Focus Placement Options**:
   - First interactive element in dialog
   - Static element with `tabindex="-1"`
   - Least destructive action (e.g., Cancel button)

### Required Modal Behavior
1. **Background Interaction**: Completely prevent interaction with content outside dialog
2. **Visual Treatment**: Background content should be visually dimmed/obscured
3. **Escape Key**: Must close dialog when pressed
4. **Background Click**: Should close dialog when clicking backdrop (common UX pattern)

## Component API Requirements

### Props/Attributes
- **`open`** (boolean) - Controls dialog visibility
- **`heading`** (string) - Dialog title/heading text
- **`closeOnEscape`** (boolean, default: true) - Enable/disable escape key closing
- **`closeOnBackdrop`** (boolean, default: true) - Enable/disable backdrop click closing

### Events
- **`dialog-open`** - Fired when dialog opens
- **`dialog-close`** - Fired when dialog closes
- **`dialog-cancel`** - Fired when dialog is cancelled (escape/backdrop)

### Slots
- **default** - Main dialog content
- **header** - Dialog header/title area
- **footer** - Dialog footer/action area

## Implementation Requirements

### HTML Structure
```html
<div role="dialog" aria-modal="true" aria-labelledby="dialog-heading">
  <div class="dialog-backdrop">
    <div class="dialog-container">
      <header class="dialog-header">
        <h2 id="dialog-heading">Dialog Title</h2>
        <button aria-label="Close dialog">×</button>
      </header>
      <div class="dialog-content">
        <!-- Main content -->
      </div>
      <footer class="dialog-footer">
        <!-- Action buttons -->
      </footer>
    </div>
  </div>
</div>
```

### Functional CSS Requirements
- **Backdrop**: Full viewport overlay to prevent background interaction
- **Container**: Centered dialog positioning
- **Hidden State**: `display: none` when closed
- **Focus Indicators**: Clear focus outlines for keyboard navigation

### JavaScript Requirements
1. **Focus Trap Implementation**: Cycle focus within dialog elements only
2. **Escape Key Handler**: Close dialog and return focus
3. **Backdrop Click Handler**: Close dialog when clicking outside content
4. **Initial Focus Placement**: Move focus to appropriate element on open
5. **ARIA Attribute Management**: Set proper roles and properties
6. **Event Dispatching**: Fire custom events for open/close/cancel

### Advanced Accessibility Patterns (from A11y-Dialog Analysis)
1. **Focus Management Enhancements**:
   - Store and restore previously focused element across Shadow DOM boundaries
   - Handle browser-specific focus quirks (e.g., Safari behavior)
   - Support focus trapping with `trapTabKey()` pattern
   - Set dialog container as focusable with `tabindex="-1"` when needed

2. **Enhanced Keyboard Interaction**:
   - Tab key cycling with proper boundary detection
   - Escape key handling with alert dialog exceptions
   - Support for nested dialog scenarios
   - Prevent default behaviors when appropriate

3. **Robust Event System**:
   - Custom events with prevention capability (`show`, `hide`, `destroy`)
   - Event delegation across Shadow DOM boundaries
   - Allow consumers to prevent default dialog behavior
   - Support for programmatic event triggering

4. **Advanced ARIA Management**:
   - Dynamic role switching (dialog vs alert dialog)
   - `aria-hidden` state management for background content
   - Proper modal state toggling with `aria-modal`
   - Support for complex dialog types and configurations

5. **Edge Case Handling**:
   - Nested dialog support and focus management
   - Popover interaction compatibility
   - Ignore focus trap mechanisms when needed
   - Memory cleanup and event listener management

## Test Coverage Requirements

### Accessibility Tests
- ARIA attributes are correctly set
- Focus management works properly
- Keyboard navigation follows APG patterns
- Screen reader announcements are correct

### Interaction Tests
- Dialog opens/closes properly
- Escape key closes dialog
- Backdrop click closes dialog
- Focus returns to trigger element
- Tab cycling stays within dialog

### API Tests
- Props control behavior correctly
- Events fire at appropriate times
- Slots render content properly
- CSS classes applied correctly

## Success Criteria
- ✅ All WAI-ARIA APG requirements implemented
- ✅ Comprehensive test suite (25+ tests)
- ✅ Almost headless styling (functional CSS only)
- ✅ Focus management fully working
- ✅ Keyboard navigation APG compliant
- ✅ Screen reader optimized
- ✅ Ejectable via `agui eject dialog`