<!-- Auto-generated from component-template.md - customize as needed -->

# Timeline

## Overview
[Brief 1-2 sentence description of the component's purpose]

## Interface
```typescript
export interface AgTimelineProps {
  /** Orientation of the timeline */
  orientation?: 'horizontal' | 'vertical';
  /** Visual variant for styling connectors and markers */
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'monochrome' | '';
  /** Whether to use compact spacing */
  compact?: boolean;
  /** ARIA label for the timeline */
  ariaLabel?: string | null;
}
```

## Usage Examples

### Basic Usage
```html
<!-- Lit/HTML Usage -->
<ag-timeline
  required-prop="value"
  optional-prop="value">
</ag-timeline>
```

### With Event Handling
```javascript
// JavaScript setup
const component = document.querySelector('ag-timeline');
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
