<!-- Auto-generated from component-template.md - customize as needed -->

# Radio

## Overview
[Brief 1-2 sentence description of the component's purpose]

## Interface
```typescript
export interface RadioProps {
  /**
   * Name attribute for the radio input (required for grouping)
   */
  name: string;
  /**
   * Value of the radio input
   */
  value: string;
  /**
   * Whether the radio is checked
   */
  checked: boolean;
  /**
   * Whether the radio is disabled
   */
  disabled: boolean;
  /**
   * Size of the radio button
   */
  size: RadioSize;
  /**
   * Color theme variant
   */
  theme: RadioTheme;
  /**
   * Label text for the radio button (internal label that wraps the radio)
   */
  labelText: string;
  /**
   * Position of labelText relative to radio (end = after radio, start = before radio)
   */
  labelPosition: 'end' | 'start';
  /**
   * Optional external label displayed above the radio (useful for groups or standalone with context)
   */
  label?: string;
  /**
   * Visually hides the external label while keeping it accessible to screen readers
   */
  labelHidden?: boolean;
  /**
   * Completely removes the external label element
   */
  noLabel?: boolean;
  /**
   * Marks the radio as required. Displays an asterisk (*) after the external label
   */
  required?: boolean;
  /**
   * Marks the radio as invalid. Sets aria-invalid and can display error message
   */
  invalid?: boolean;
  /**
   * Error message displayed when invalid. Linked via aria-describedby
   */
  errorMessage?: string;
  /**
   * Helper text displayed below the radio. Linked via aria-describedby
   */
  helpText?: string;
  /**
   * Callback for native click events
   */
  onClick?: (event: MouseEvent) => void;
  /**
   * Callback for change events (fired when radio selection changes)
   */
  onChange?: (event: RadioChangeEvent) => void;
}
```

## Usage Examples

### Basic Usage
```html
<!-- Lit/HTML Usage -->
<ag-radio
  required-prop="value"
  optional-prop="value">
</ag-radio>
```

### With Event Handling
```javascript
// JavaScript setup
const component = document.querySelector('ag-radio');
component.addEventListener('click', (e) => {
  console.log('Component clicked', e.detail);
});
```

## Accessibility Notes
- **ARIA Attributes**: [List any automatic ARIA attributes]
- **Keyboard Navigation**: [Describe keyboard support]
- **Screen Reader**: [Screen reader compatibility notes]

## Styling
- Uses CSS Shadow Parts: `part="[part-name]"` for styling
- CSS Custom Properties for theming
- Default styles can be overridden

## Dependencies
- [List any internal dependencies]
- [Browser support notes]
