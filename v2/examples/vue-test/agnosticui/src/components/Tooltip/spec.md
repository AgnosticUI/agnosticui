# Tooltip Component Specification

*Based on WAI-ARIA Authoring Practices Guide (APG)*

## Overview

The Tooltip component provides supplementary, text-only information for UI elements. It appears on hover, focus, or click and is non-modal and non-interactive.

## APG Requirements

### ARIA Attributes
- **`role="tooltip"`**: Required on tooltip container
- **`aria-describedby`**: Required on trigger element, references tooltip `id`
- **Visibility**: Hidden from assistive technologies when not visible

### Interaction Model (WCAG 2.1 Compliance)

#### Keyboard Navigation
- **Trigger**: Appears on trigger element focus
- **Dismissal**:
  - Hidden when trigger loses focus
  - Escape key dismisses tooltip
- **Focus Management**: Tooltip never receives focus

#### Mouse/Pointer Interaction
- **Trigger**: Appears on mouseenter
- **Hoverable**: User can move pointer over tooltip content
- **Dismissible**: Hidden when pointer leaves trigger and tooltip
- **Persistent**: Remains visible until dismissed

#### Touch Interaction
- **Long Press**: Shows tooltip
- **Tap Outside**: Dismisses tooltip

### Content Guidelines
- **Text-Only**: No interactive content
- **Non-Essential**: Supplementary information only
- **Avoid `title` attribute**: Use ARIA instead

## Component API

### Properties
- `content: string` - Tooltip text content
- `placement: Placement` - Preferred position ('top', 'bottom', 'left', 'right')
- `distance: number` - Offset distance (default: 8px)
- `skidding: number` - Cross-axis offset (default: 0px)
- `trigger: string` - Activation method ('hover focus' default)
- `disabled: boolean` - Disable tooltip functionality

### Methods
- `show()` - Programmatically show tooltip
- `hide()` - Programmatically hide tooltip
- `toggle()` - Toggle tooltip visibility

### Events
- `show` - Fired when tooltip begins to show
- `hide` - Fired when tooltip begins to hide

### CSS Parts
- `base` - Tooltip container
- `arrow` - Tooltip arrow element

## Accessibility Requirements

### Keyboard Support
- ✅ **Focus**: Shows on trigger focus
- ✅ **Blur**: Hides when trigger loses focus
- ✅ **Escape**: Dismisses tooltip

### Screen Reader Support
- ✅ **ARIA**: Proper `role="tooltip"`
- ✅ **Association**: `aria-describedby` connects trigger to tooltip
- ✅ **Visibility**: Hidden when not displayed

### Visual Requirements
- ✅ **High Contrast**: Readable in high contrast mode
- ✅ **Reduced Motion**: Respects motion preferences
- ✅ **Color Independence**: Information not conveyed by color alone

## Implementation Notes

### Minimalist & Themeable Philosophy
- **Functional CSS Only**: Position, visibility, basic styling
- **No Visual Design**: Colors, fonts, decorative elements externalized
- **Customizable**: Easy to theme and style

### Progressive Enhancement
- **Works Without JS**: Content accessible in HTML
- **Enhanced with JS**: Positioning and interactions added

### Browser Support
- **Modern Browsers**: Chrome, Firefox, Safari, Edge
- **Floating UI**: Handles complex positioning scenarios
- **Graceful Degradation**: Basic functionality without advanced features