<!-- Auto-generated from component-template.md - customize as needed -->

# Progress

## Overview
[Brief 1-2 sentence description of the component's purpose]

## Interface
```typescript
export interface ProgressProps {
  /**
   * The current value of the progress bar. If not provided, the progress bar is indeterminate.
   */
  value?: number;
  /**
   * The maximum value of the progress bar.
   * @default 100
   */
  max?: number;
  /**
   * An accessible label for the progress bar. This label is visually hidden but announced by screen readers.
   */
  label?: string;
  /**
   * Size of the progress bar
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
}
```

## Usage Examples

### Basic Usage
```html
<!-- Lit/HTML Usage -->
<ag-progress
  required-prop="value"
  optional-prop="value">
</ag-progress>
```

### With Event Handling
```javascript
// JavaScript setup
const component = document.querySelector('ag-progress');
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
