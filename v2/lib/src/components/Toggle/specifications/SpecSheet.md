# Toggle Component Specification Sheet

## Component Name Decision: Toggle vs Switch

**DECISION: Use "Toggle"** for the component name while implementing full WAI-ARIA Switch pattern compliance.

### Rationale:
- **Toggle** is more universally recognized across UI frameworks (React, Vue, Flutter, iOS, Android)
- **Toggle** provides flexibility for potential future enhancements beyond binary states
- **Toggle** better matches user mental models and visual metaphors
- We can implement full WAI-ARIA Switch pattern using `role="switch"` regardless of component name
- **Toggle** allows for broader interpretation while maintaining semantic correctness

## Overview

The Toggle component is an accessible binary input control that allows users to choose between two states: on/off, enabled/disabled, or true/false. It implements the WAI-ARIA Switch pattern for maximum accessibility while providing a modern, flexible toggle interface.

## Core Requirements

### Accessibility (MANDATORY)
- **WCAG 2.1 AA Compliance**: Full keyboard navigation and screen reader support
- **WAI-ARIA Switch Pattern**: Complete implementation with proper roles and attributes
- **High Contrast Support**: Minimum 4.5:1 contrast ratios in all states
- **Reduced Motion**: Respect user's motion preferences

### Functional Requirements
- **Binary State Management**: Clear on/off state indication
- **Immediate Feedback**: Instant visual and programmatic state changes
- **Event Handling**: Proper change events for form integration
- **Value Binding**: Support for controlled and uncontrolled usage patterns

### Visual Requirements
- **Almost Headless**: Minimal functional CSS only
- **Size Variants**: xs, sm, md, lg, xl with consistent proportions
- **State Indication**: Clear visual distinction between on/off states
- **Smooth Transitions**: Configurable animations with performance optimization

## API Specification

### Props/Attributes
```typescript
interface ToggleProps {
  // Core Functionality
  checked?: boolean;           // Current toggle state
  defaultChecked?: boolean;    // Initial state for uncontrolled usage
  disabled?: boolean;          // Disable interaction
  readonly?: boolean;          // Visual only, no interaction

  // Accessibility
  label?: string;             // Accessible label
  labelledBy?: string;        // Reference to labeling element
  describedBy?: string;       // Reference to description

  // Visual Variants
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'success' | 'warning' | 'danger';

  // Events
  onChange?: (checked: boolean, event: Event) => void;
  onFocus?: (event: FocusEvent) => void;
  onBlur?: (event: FocusEvent) => void;

  // Advanced
  name?: string;              // Form integration
  value?: string;             // Form value
  tabIndex?: number;          // Tab order control
}
```

### Size Specifications
```css
/* Size variants with 2:1 width:height ratio */
--toggle-xs: 16px × 8px   (handle: 6px)
--toggle-sm: 20px × 10px  (handle: 8px)
--toggle-md: 24px × 12px  (handle: 10px)  /* Default */
--toggle-lg: 32px × 16px  (handle: 14px)
--toggle-xl: 40px × 20px  (handle: 18px)
```

## Implementation Approach

### Foundation: Button-Based Switch Pattern
Based on WAI-ARIA APG analysis, we'll use the **button approach** with `role="switch"`:

```html
<button
  role="switch"
  aria-checked="false"
  aria-labelledby="toggle-label"
  class="ag-toggle"
>
  <span class="ag-toggle__track">
    <span class="ag-toggle__handle"></span>
  </span>
  <span class="ag-toggle__state" aria-hidden="true">Off</span>
</button>
```

### Rationale for Button-Based Approach:
1. **Semantic HTML**: Uses native button element
2. **Keyboard Support**: Built-in Space/Enter support
3. **Focus Management**: Natural focus behavior
4. **Screen Reader Support**: Excellent compatibility
5. **Event Handling**: Standard click events

## Accessibility Implementation

### ARIA Attributes (MANDATORY)
```html
<!-- Required ARIA attributes -->
role="switch"                    <!-- Identifies as switch control -->
aria-checked="true|false"        <!-- Current state -->
tabindex="0"                     <!-- Focusable -->

<!-- Labeling (one required) -->
aria-label="Toggle notifications" <!-- OR -->
aria-labelledby="label-id"        <!-- OR -->
<!-- Visible text content in button -->

<!-- Optional but recommended -->
aria-describedby="desc-id"       <!-- Additional description -->
```

### Keyboard Interactions (MANDATORY)
- **Space**: Toggle state (primary activation)
- **Enter**: Toggle state (secondary activation)
- **Tab**: Move focus to/from toggle
- **Shift+Tab**: Move focus in reverse order

### Screen Reader Announcements
- **On Focus**: "Toggle notifications, switch, off" (or current state)
- **On Activation**: "Toggle notifications, switch, on" (new state)
- **State Changes**: Announce new state immediately

## CSS Architecture (Almost Headless)

### Functional CSS (REQUIRED)
```css
.ag-toggle {
  /* Essential functionality */
  display: inline-flex;
  align-items: center;
  border: 0;
  background: transparent;
  cursor: pointer;
  position: relative;
  transition: all var(--ag-transition-duration, 200ms) ease;
}

.ag-toggle:disabled {
  cursor: not-allowed;
  opacity: 0.6;
  pointer-events: none;
}

.ag-toggle:focus-visible {
  outline: var(--ag-focus-width, 2px) solid var(--ag-focus);
  outline-offset: var(--ag-focus-offset, 2px);
}

.ag-toggle__track {
  /* Track structure */
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 9999px;
  transition: inherit;
}

.ag-toggle__handle {
  /* Handle positioning */
  position: absolute;
  border-radius: 50%;
  transition: transform var(--ag-transition-duration, 200ms) ease;
  transform: translateX(0); /* Default position */
}

.ag-toggle[aria-checked="true"] .ag-toggle__handle {
  transform: translateX(calc(var(--toggle-width) - var(--handle-size)));
}

/* Size variants */
.ag-toggle--xs {
  --toggle-width: 16px;
  --toggle-height: 8px;
  --handle-size: 6px;
}
.ag-toggle--sm {
  --toggle-width: 20px;
  --toggle-height: 10px;
  --handle-size: 8px;
}
.ag-toggle--md {
  --toggle-width: 24px;
  --toggle-height: 12px;
  --handle-size: 10px;
}
.ag-toggle--lg {
  --toggle-width: 32px;
  --toggle-height: 16px;
  --handle-size: 14px;
}
.ag-toggle--xl {
  --toggle-width: 40px;
  --toggle-height: 20px;
  --handle-size: 18px;
}
```

### Visual Styling (EXTERNAL - Not in Component)
```css
/* Example external styling */
.ag-toggle__track {
  background: var(--ag-gray-300);
  width: var(--toggle-width);
  height: var(--toggle-height);
}

.ag-toggle[aria-checked="true"] .ag-toggle__track {
  background: var(--ag-primary);
}

.ag-toggle__handle {
  background: white;
  width: var(--handle-size);
  height: var(--handle-size);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
```

## JavaScript Behavior

### Core Functionality
```typescript
class AgnosticToggle {
  private _checked: boolean = false;

  get checked(): boolean {
    return this._checked;
  }

  set checked(value: boolean) {
    if (this._checked !== value) {
      this._checked = value;
      this.updateARIA();
      this.dispatchChangeEvent();
    }
  }

  private updateARIA(): void {
    this.setAttribute('aria-checked', this._checked.toString());
  }

  private handleClick = (event: Event): void => {
    if (!this.disabled && !this.readonly) {
      this.checked = !this.checked;
    }
  }

  private handleKeydown = (event: KeyboardEvent): void => {
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      this.handleClick(event);
    }
  }
}
```

## Component Variants

### Size Variants
- **xs**: Ultra-compact for dense layouts
- **sm**: Mobile-optimized size
- **md**: Default desktop size
- **lg**: Prominent controls
- **xl**: High-visibility interfaces

### Visual Variants
- **default**: Standard gray/primary color scheme
- **success**: Green indication for positive actions
- **warning**: Yellow/amber for cautionary states
- **danger**: Red for destructive or critical toggles

## Form Integration

### Form Compatibility
```html
<form>
  <fieldset>
    <legend>Notification Preferences</legend>
    <ag-toggle
      name="email-notifications"
      value="enabled"
      checked
      label="Email notifications">
    </ag-toggle>
    <ag-toggle
      name="push-notifications"
      value="enabled"
      label="Push notifications">
    </ag-toggle>
  </fieldset>
</form>
```

### FormData Integration
- Checked toggles submit their `name` and `value`
- Unchecked toggles don't contribute to form data
- Supports standard form validation patterns

## Testing Requirements

### Accessibility Testing (MANDATORY)
- [ ] Screen reader compatibility (NVDA, JAWS, VoiceOver)
- [ ] Keyboard navigation functionality
- [ ] High contrast mode visibility
- [ ] Focus management behavior
- [ ] ARIA attribute correctness

### Cross-Browser Testing
- [ ] Chrome, Firefox, Safari, Edge compatibility
- [ ] Mobile browser support
- [ ] Performance with reduced motion

### User Testing
- [ ] Motor accessibility (large touch targets)
- [ ] Cognitive accessibility (clear state indication)
- [ ] Visual accessibility (contrast, size options)

## Performance Considerations

### Optimization Strategies
- **CSS Transform-based animations**: Hardware accelerated
- **Minimal repaints**: Use transform and opacity for animations
- **Reduced motion support**: Disable animations when requested
- **Event delegation**: Efficient event handling patterns

### Memory Management
- **Event cleanup**: Remove listeners on disconnect
- **State synchronization**: Efficient update patterns
- **CSS custom properties**: Dynamic theming support

## Framework Integration Examples

### React Integration
```tsx
const [isEnabled, setIsEnabled] = useState(false);

<Toggle
  checked={isEnabled}
  onChange={(checked) => setIsEnabled(checked)}
  label="Enable notifications"
  size="md"
/>
```

### Vue Integration
```vue
<Toggle
  v-model:checked="isEnabled"
  label="Enable notifications"
  size="md"
  @change="handleToggleChange"
/>
```

### Svelte Integration
```svelte
<ag-toggle
  bind:checked={isEnabled}
  label="Enable notifications"
  size="md"
  on:change={handleToggleChange}
/>
```

## File Structure and Naming Convention

### Directory Structure
```
/lib/src/components/Toggle/
├── SpecSheet.md                        # 📋 Master specification
├── core/
│   ├── _Toggle.ts                     # 🔒 Canonical implementation
│   └── Toggle.ts                      # ✏️ Editable override version
├── react/
│   └── ReactToggle.tsx                # ⚛️ React wrapper
├── vue/
│   └── VueToggle.vue                  # 🔧 Vue wrapper
├── svelte/
│   └── SvelteToggle.svelte           # 📦 Svelte wrapper
└── specifications/                    # 📚 Reference materials
    ├── wai-aria-toggle-pattern.md
    ├── wai-aria-toggle-examples.md
    ├── toggle-button-example.md
    ├── toggle-checkbox-example.md
    └── toggle-switch-design-guide.md
```

### Naming Convention
- **Component**: `ag-toggle` (web component tag)
- **CSS Classes**: `.ag-toggle` prefix
- **Events**: `toggle-change` (consistent with other components)
- **Props**: Standard toggle terminology
- **Files**: All use "Toggle" in naming (not "Switch")

### WAI-ARIA Switch Pattern Compliance
- Implements full WAI-ARIA Switch pattern using `role="switch"`
- All accessibility requirements preserved
- Component name "Toggle" with semantic "switch" role provides flexibility

## Success Criteria

### Functional Success
- [ ] Accurate state management
- [ ] Proper event dispatching
- [ ] Form integration compatibility
- [ ] Framework wrapper functionality

### Accessibility Success
- [ ] WAI-ARIA Switch pattern compliance
- [ ] Full keyboard accessibility
- [ ] Screen reader compatibility
- [ ] High contrast support

### Design Success
- [ ] Almost headless architecture
- [ ] Consistent size variants
- [ ] Smooth animation support
- [ ] Cross-browser visual consistency

### Performance Success
- [ ] <16ms interaction response time
- [ ] Smooth 60fps animations
- [ ] Minimal memory footprint
- [ ] Efficient re-render patterns

This specification provides the foundation for implementing a robust, accessible, and flexible Toggle component that follows WAI-ARIA Switch patterns while offering modern UI/UX expectations.