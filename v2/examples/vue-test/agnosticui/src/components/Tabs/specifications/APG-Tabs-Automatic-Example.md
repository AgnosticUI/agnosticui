# WAI-ARIA APG Tabs with Automatic Activation Example

Source: https://www.w3.org/WAI/ARIA/apg/patterns/tabs/examples/tabs-automatic/

## Key Characteristics

- **Tabs are automatically activated when they receive focus**
- **Recommended only when panel content is instantly available**
- Designed for accessibility with specific ARIA roles and attributes

## Accessibility Features

- Tabpanels are focusable (with `tabindex="0"`)
- High contrast support for active and focused tabs
- Responsive design that works with screen magnification
- Full screen reader support

## Keyboard Interaction

- **Right/Left Arrow**: Move and activate tabs (automatic activation)
- **Home/End**: Jump to first/last tab
- **Tab key**: Navigate between tab list and tabpanel
- Focus moves WITH activation in automatic mode

## ARIA Implementation

### Required Roles
- Uses `role="tablist"` for tab container
- Uses `role="tab"` for individual tabs
- Uses `role="tabpanel"` for content panels

### State Management
- Manages `aria-selected="true/false"` state
- Uses `aria-controls` to link tabs and panels
- Implements roving tabindex for focus management
- Only active tab has `tabindex="0"`, others have `tabindex="-1"`

### Focus Management
- **Automatic Activation**: Tab activates immediately when focused
- Focus and selection move together
- Arrow keys both move focus AND activate the tab

## When to Use Automatic Activation

### ✅ Recommended When:
- Panel content loads instantly
- Content is already loaded and ready
- No network requests or heavy processing required
- Simple, static content

### ❌ Avoid When:
- Panel content requires loading time
- Network requests are needed
- Heavy processing or rendering required
- Could cause performance issues

## Implementation Notes

- Test thoroughly with assistive technologies
- Prioritize semantic HTML structure
- Follow "No ARIA is better than Bad ARIA" principle
- Ensure high contrast and visibility for focus states

## Example Use Case

The APG example demonstrates a tabs interface for Danish composers, showcasing an accessible, keyboard-navigable interface with automatic tab activation where all content is immediately available.