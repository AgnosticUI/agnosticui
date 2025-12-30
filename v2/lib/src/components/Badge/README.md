<!-- Auto-generated from component-template.md - customize as needed -->

# Badge

## Overview
[Brief 1-2 sentence description of the component's purpose]

## Interface
```typescript
export interface BadgeProps {
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'primary' | 'info' | 'neutral' | 'monochrome';
  size?: 'xs' | 'sm' | 'md';
  dot?: boolean;
  value?: number | null;
  max?: number;
  interactive?: boolean;
  statusLabel?: string | null;
  live?: 'off' | 'polite' | 'assertive';
  hiddenFromAT?: boolean;
}
```

## Usage Examples

### Basic Usage
```html
<!-- Lit/HTML Usage -->
<ag-badge
  required-prop="value"
  optional-prop="value">
</ag-badge>
```

### With Event Handling
```javascript
// JavaScript setup
const component = document.querySelector('ag-badge');
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
