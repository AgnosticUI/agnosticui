<!-- Auto-generated from component-template.md - customize as needed -->

# Image

## Overview
[Brief 1-2 sentence description of the component's purpose]

## Interface
```typescript
export interface AgImageProps {
  // REQUIRED
  /** Image source URL */
  src: string;
  /** Alternative text for accessibility (required) */
  alt: string;

  // RESPONSIVE
  /** Array of source configurations for <picture> element */
  sources?: AgImageSource[];

  // LAYOUT (CLS Prevention)
  /** Intrinsic width in pixels */
  width?: number;
  /** Intrinsic height in pixels */
  height?: number;
  /** Aspect ratio in format "16/9" or auto-calculated from width/height */
  aspectRatio?: string;

  // DISPLAY
  /** CSS object-fit value */
  fit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  /** CSS object-position value */
  position?: string;

  // LOADING
  /** Native browser lazy loading */
  loading?: 'lazy' | 'eager';
  /** Enable simple opacity fade transition */
  fade?: boolean;
  /** Fade transition duration in milliseconds */
  duration?: number;

  // ERROR HANDLING
  /** Backup image source if primary fails to load */
  fallbackSrc?: string;
}
```

## Usage Examples

### Basic Usage
```html
<!-- Lit/HTML Usage -->
<ag-image
  required-prop="value"
  optional-prop="value">
</ag-image>
```

### With Event Handling
```javascript
// JavaScript setup
const component = document.querySelector('ag-image');
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
