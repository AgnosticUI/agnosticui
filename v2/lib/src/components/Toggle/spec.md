# Toggle Component Specification

*Single source of truth for all AgnosticUI v2 Toggle implementation decisions*

## Component Overview

The Toggle component provides an accessible, minimalist and themeable implementation of on/off switches following WAI-ARIA APG patterns. It serves as an alternative to checkboxes for binary state changes with clear visual indication of the current state.

## AI-First Design Goals

- **Canonical Pattern**: Immutable `_Toggle.ts` with experimental `Toggle.ts`
- **AI Extensibility**: Clear patterns for AI-driven modifications and styling
- **Minimalist & Themeable**: Functional CSS only, completely styleable externally
- **Binary State**: Clear on/off indication with smooth state transitions

## Architecture

### Core Component
- `AgToggle` - Switch-style toggle with accessible state management

### File Structure
```
src/components/Toggle/
├── core/
│   ├── _Toggle.ts              # Canonical, upgrade-safe source
│   └── _Toggle.spec.ts         # Comprehensive test suite
├── react/
│   └── ReactToggle.tsx        # React wrapper component
├── vue/
│   └── VueToggle.vue          # Vue 3 wrapper component
├── svelte/
│   └── SvelteToggle.js        # Svelte integration
└── spec.md                    # This specification
```

## Functional Requirements

### Core Behavior
- **Binary State**: On/off, enabled/disabled, true/false states
- **Visual Indication**: Clear visual representation of current state
- **Keyboard Interaction**: Space key toggles state
- **Form Integration**: Works with forms as a checkbox replacement
- **Label Association**: Proper label-control relationship

### Toggle States
- `checked` - Boolean state (on/off)
- `disabled` - Non-interactive state
- `readonly` - Display-only state (state visible but not changeable)

### Size Variants
- `sm` - Small (compact forms)
- `md` - Medium (default)
- `lg` - Large (prominent toggles)

### Visual Variants
- `default` - Standard toggle styling
- `success` - Green indication for positive states
- `warning` - Yellow indication for caution states
- `danger` - Red indication for critical states

## WAI-ARIA APG Compliance (MANDATORY)

### Required Accessibility Features
- **Switch Role**: Uses `role="switch"` for screen readers
- **State Communication**: `aria-checked` indicates current state
- **Keyboard Navigation**: Space key activation
- **Label Association**: Explicit label-control relationship
- **Focus Management**: Visible focus indicator

### ARIA Attributes
- `role="switch"` - Switch control identification
- `aria-checked="true|false"` - Current toggle state
- `aria-disabled="true"` - For disabled state
- `aria-labelledby` or `aria-label` - Associated label text
- `aria-describedby` - Optional description text

### Keyboard Interaction
- `Space` - Toggles the switch state
- `Enter` - Alternative activation (optional)
- `Tab` - Moves focus to/from toggle
- **No Arrow Keys**: Switch is binary, not a selection

### Screen Reader Experience
- Announces as "switch" control type
- Communicates current state ("on" or "off")
- Reads associated label and description

## Design Token Integration

### Core Styling
- **Track Background**: Different colors for on/off states
- **Thumb**: Moveable indicator circle
- **Focus Ring**: High contrast focus indication
- **State Colors**: Semantic colors for different variants

### State-Based Tokens
```css
/* Off State */
--toggle-track-off: var(--ag-neutral-300);
--toggle-thumb-off: var(--ag-neutral-white);

/* On State */
--toggle-track-on: var(--ag-primary);
--toggle-thumb-on: var(--ag-neutral-white);

/* Disabled State */
--toggle-track-disabled: var(--ag-neutral-200);
--toggle-thumb-disabled: var(--ag-neutral-300);
```

### Custom Properties
```css
/* Size Control */
--toggle-width: 2.75rem;
--toggle-height: 1.5rem;
--toggle-thumb-size: 1.25rem;

/* Colors */
--toggle-track-bg: var(--ag-neutral-300);
--toggle-track-checked: var(--ag-primary);
--toggle-thumb-bg: var(--ag-neutral-white);
--toggle-thumb-shadow: var(--ag-shadow-sm);

/* Motion */
--toggle-transition: all var(--ag-motion-medium, 0.2s) ease;

/* Focus */
--toggle-focus-ring: var(--ag-focus);
--toggle-focus-width: var(--ag-focus-width, 2px);
--toggle-focus-offset: var(--ag-focus-offset, 2px);

/* Border */
--toggle-border: 2px solid transparent;
--toggle-radius: var(--ag-radius-full, 9999px);
```

## Usage Patterns

### Basic Toggle
```html
<ag-toggle>
  Enable notifications
</ag-toggle>
```

### Controlled Toggle
```html
<ag-toggle
  checked
  label="Dark mode">
</ag-toggle>
```

### Toggle with Description
```html
<ag-toggle
  label="Email notifications"
  description="Receive email updates about your account">
</ag-toggle>
```

### Form Integration
```html
<form>
  <ag-toggle
    name="newsletter"
    value="enabled"
    checked>
    Subscribe to newsletter
  </ag-toggle>
</form>
```

### Disabled Toggle
```html
<ag-toggle
  disabled
  label="Premium feature"
  description="Upgrade to enable this feature">
</ag-toggle>
```

### Size Variants
```html
<ag-toggle size="sm">Small toggle</ag-toggle>
<ag-toggle size="md">Medium toggle</ag-toggle>
<ag-toggle size="lg">Large toggle</ag-toggle>
```

## Framework Integration

### React Wrapper
- **Component**: `ReactToggle`
- **Props**: TypeScript interfaces for all properties
- **Events**: onChange, onFocus, onBlur
- **Controlled/Uncontrolled**: Supports both patterns

### Vue Wrapper
- **Component**: `VueToggle`
- **Props**: Vue 3 Composition API support
- **Events**: Vue event system (v-model support)
- **Reactivity**: Full reactive property binding

### Svelte Integration
- **Direct Usage**: Web component works natively
- **Event Binding**: `on:toggle-change` custom events
- **Prop Binding**: Reactive checked state

## Testing Requirements

### Unit Tests
- ✅ Toggle state changes (checked/unchecked)
- ✅ Keyboard interaction (Space key)
- ✅ Disabled state handling
- ✅ Form integration and value submission
- ✅ Label association
- ✅ Accessibility attributes
- ✅ Size variant rendering
- ✅ Event dispatching
- ✅ Visual state transitions

### Integration Tests
- ✅ React wrapper functionality
- ✅ Vue wrapper functionality
- ✅ Svelte integration
- ✅ Form submission behavior
- ✅ Cross-framework consistency

### Accessibility Tests
- ✅ Screen reader announcement
- ✅ Switch role identification
- ✅ State communication (aria-checked)
- ✅ Keyboard navigation
- ✅ Focus management
- ✅ Label association validation

## Quality Assurance

### Current Status
- **Implementation**: Complete with comprehensive feature set
- **Testing**: Full test coverage across all states and interactions
- **Framework Support**: React, Vue, Svelte wrappers implemented
- **Accessibility**: WAI-ARIA compliant switch pattern
- **Playground**: Interactive demos with all variants

### Visual Design
- **State Indication**: Clear visual differentiation between on/off
- **Smooth Transitions**: CSS transitions for state changes
- **Focus States**: High-contrast focus indication
- **Size Consistency**: Proportional sizing across variants

### Form Integration
- **Native Behavior**: Works with standard form submission
- **Value Mapping**: Proper form value handling
- **Validation**: Integrates with form validation patterns
- **Accessibility**: Screen reader form announcement

### Known Limitations
- No indeterminate state (by design - binary toggle only)
- No built-in animation customization (use CSS for advanced animations)
- Single toggle per component (no toggle groups)

## Toggle vs Checkbox Guidance

### Use Toggle When:
- Binary state change with immediate effect
- Settings and preferences
- Feature enabling/disabling
- Mode switching (light/dark theme)

### Use Checkbox When:
- Form submissions requiring explicit user action
- Multiple selections from a group
- Agreement to terms and conditions
- Data collection scenarios

## External References

- [WAI-ARIA APG Switch Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/switch/)
- [MDN ARIA Switch Role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/switch_role)
- [Switch vs Checkbox Guidelines](https://uxplanet.org/checkbox-vs-toggle-switch-7fc6e83f10b8)

## Changelog

### v2.0.0-dev (Current)
- ✅ Initial implementation with full accessibility
- ✅ Framework wrappers for React, Vue, Svelte
- ✅ Comprehensive test coverage
- ✅ Minimalist and themeable styling approach
- ✅ Design token integration
- ✅ Size variant support
- ✅ Form integration capabilities
- ✅ Smooth state transitions
- ✅ High-contrast focus management