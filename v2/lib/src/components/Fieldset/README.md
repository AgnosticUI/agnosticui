<!-- Auto-generated from component-template.md - customize as needed -->

# Fieldset

## Overview
[Brief 1-2 sentence description of the component's purpose]

## Interface
```typescript
export interface FieldsetProps {
  /** Optional legend text for the fieldset. */
  legend?: string;
  /** Whether to apply borders and padding. */
  bordered?: boolean;
  /** Layout mode: 'vertical' (default) or 'horizontal'. */
  layout?: 'vertical' | 'horizontal';
  /** Visually hide the legend while keeping it accessible. */
  legendHidden?: boolean;
}
```

## Usage Examples

### Basic Usage
```html
<!-- Lit/HTML Usage -->
<ag-fieldset
  required-prop="value"
  optional-prop="value">
</ag-fieldset>
```

### With Event Handling
```javascript
// JavaScript setup
const component = document.querySelector('ag-fieldset');
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
