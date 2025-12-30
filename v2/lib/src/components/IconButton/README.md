<!-- Auto-generated from component-template.md - customize as needed -->

# IconButton

## Overview
[Brief 1-2 sentence description of the component's purpose]

## Interface
```typescript
export interface IconButtonProps {
  label?: string;
  icon?: string;
  unicode?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'ghost' | 'monochrome';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  pressed?: boolean;
  loading?: boolean;
  onIconButtonClick?: (event: IconButtonClickEvent) => void;
  onIconButtonActivate?: (event: IconButtonActivateEvent) => void;
}
```

## Usage Examples

### Basic Usage
```html
<!-- Lit/HTML Usage -->
<ag-iconbutton
  required-prop="value"
  optional-prop="value">
</ag-iconbutton>
```

### With Event Handling
```javascript
// JavaScript setup
const component = document.querySelector('ag-iconbutton');
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
