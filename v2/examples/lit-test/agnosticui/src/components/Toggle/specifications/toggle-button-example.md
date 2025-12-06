# Toggle Example Using HTML Button

## Overview

This example demonstrates implementing an accessible toggle control using an HTML button with ARIA attributes and SVG graphics.

## Key Accessibility Features

- Uses a `button` element with `role="switch"`
- Provides visual and semantic state indicators
- Supports keyboard interaction
- Includes text and graphical state representation

## HTML Structure

```html
<div role="group" aria-labelledby="environmental-controls-heading">
  <h3 id="environmental-controls-heading">Environmental Controls</h3>

  <button role="switch" aria-checked="false">
    <span>Living Room Lights</span>
    <svg><!-- Switch graphic --></svg>
    <span class="on" aria-hidden="true">On</span>
    <span class="off" aria-hidden="true">Off</span>
  </button>

  <button role="switch" aria-checked="false">
    <span>Outdoor Lights</span>
    <svg><!-- Switch graphic --></svg>
    <span class="on" aria-hidden="true">On</span>
    <span class="off" aria-hidden="true">Off</span>
  </button>
</div>
```

## Keyboard Interactions

- `Tab`: Move focus to toggle
- `Space/Enter`: Toggle toggle state

## CSS Considerations

- Use `:hover` and `:focus` for visual feedback
- Ensure sufficient color contrast
- Use `currentcolor` for high contrast compatibility

## JavaScript Behavior

- Toggle `aria-checked` attribute
- Update visual state
- Manage toggle group interactions

## Accessibility Best Practices

- Use semantic HTML
- Provide clear state indicators
- Ensure keyboard and screen reader compatibility