<!-- Auto-generated from component-template.md - customize as needed -->

# Avatar

## Overview
[Brief 1-2 sentence description of the component's purpose]

## Interface
```typescript
export interface AvatarProps {
  /** Text content to display (typically initials like "AB") */
  text?: string;
  /** Image source URL */
  imgSrc?: string;
  /** Alt text for the image (required when imgSrc is provided for accessibility) */
  imgAlt?: string;
  /** Size of the avatar */
  size?: AvatarSize;
  /** Shape of the avatar */
  shape?: AvatarShape;
  /** Color variant */
  variant?: AvatarVariant;
  /** ARIA label for accessibility */
  ariaLabel?: string;
}
```

## Usage Examples

### Basic Usage
```html
<!-- Lit/HTML Usage -->
<ag-avatar
  required-prop="value"
  optional-prop="value">
</ag-avatar>
```

### With Event Handling
```javascript
// JavaScript setup
const component = document.querySelector('ag-avatar');
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
