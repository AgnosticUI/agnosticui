# Toggle Example Using HTML Checkbox Input

## Overview

This example demonstrates implementing an accessible toggle using an HTML checkbox input, focusing on creating an intuitive and accessible user interface for toggle controls.

## HTML Structure

```html
<fieldset>
  <legend>Accessibility Preferences</legend>

  <div class="switch-container">
    <label>
      <input type="checkbox" role="switch">
      Reduced motion
      <span class="on" aria-hidden="true">On</span>
      <span class="off" aria-hidden="true">Off</span>
    </label>
  </div>

  <div class="switch-container">
    <label>
      <input type="checkbox" role="switch">
      Show captions
      <span class="on" aria-hidden="true">On</span>
      <span class="off" aria-hidden="true">Off</span>
    </label>
  </div>
</fieldset>
```

## Key Accessibility Features

- Uses `fieldset` and `legend` to group related toggles
- Implements `role="switch"` for semantic meaning
- Provides text alternatives with `aria-hidden` state indicators
- Supports keyboard interaction (Tab and Space keys)

## Keyboard Support

- **Tab**: Move focus to toggle
- **Space**: Toggle toggle state

## CSS Considerations

- Use border and spacing for visual differentiation
- Implement focus and hover states
- Ensure high contrast visibility
- Use pointer cursor for interactive elements

## JavaScript Behavior

Minimal JavaScript required, primarily leveraging native checkbox functionality:

```javascript
// Toggle switch state
checkbox.addEventListener('change', (event) => {
  // Optional custom logic on state change
});
```

## Best Practices

- Maximize semantic HTML
- Ensure cross-browser and assistive technology compatibility
- Test thoroughly with different devices and screen readers

**Note**: This is an illustrative example and should be carefully evaluated before production use.