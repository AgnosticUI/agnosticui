<!-- Auto-generated from component-template.md - customize as needed -->

# MessageBubble

## Overview
[Brief 1-2 sentence description of the component's purpose]

## Interface
```typescript
export interface MessageBubbleProps {
  from?: 'me' | 'them';
  message?: string;
  time?: string;
  author?: string;
  avatarUrl?: string;
  footer?: string;
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info' | 'neutral' | 'monochrome';
}
```

## Usage Examples

### Basic Usage
```html
<!-- Lit/HTML Usage -->
<ag-messagebubble
  required-prop="value"
  optional-prop="value">
</ag-messagebubble>
```

### With Event Handling
```javascript
// JavaScript setup
const component = document.querySelector('ag-messagebubble');
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
