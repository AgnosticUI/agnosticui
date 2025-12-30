<!-- Auto-generated from component-template.md - customize as needed -->

# ProgressRing

## Overview
[Brief 1-2 sentence description of the component's purpose]

## Interface
```typescript
export interface AgProgressRingProps {
  /** Progress value (0–100) */
  value?: number;
  /** Size preset */
  size?: 'small' | 'medium' | 'large';
  /** Color variant */
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'info';
  /** Accessible label */
  label?: string;
  /** Disable animation (also respects prefers-reduced-motion) */
  'no-animation'?: boolean;
}
```

## Usage Examples

### Basic Usage
```html
<!-- Lit/HTML Usage -->
<ag-progressring
  required-prop="value"
  optional-prop="value">
</ag-progressring>
```

### With Event Handling
```javascript
// JavaScript setup
const component = document.querySelector('ag-progressring');
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
