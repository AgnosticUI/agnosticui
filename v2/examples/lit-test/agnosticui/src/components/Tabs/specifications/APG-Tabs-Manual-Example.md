# WAI-ARIA APG Tabs with Manual Activation Example

Source: https://www.w3.org/WAI/ARIA/apg/patterns/tabs/examples/tabs-manual/

## Key Characteristics

- **Tabs require two-step activation for keyboard users:**
  1. Focus the tab (with arrow keys)
  2. Activate the tab with Space, Enter, or mouse click
- Focus and activation are **separate** actions

## When to Use Manual Activation

### ✅ Recommended When:
- Panel content cannot be displayed instantly
- All panel content is not immediately present in the DOM
- Panel content requires loading time
- Network requests or heavy processing needed
- Better user control is desired

### ✅ Advantages:
- More control for users
- Better for slow-loading content
- Prevents accidental activation
- Reduces performance impact of arrow key navigation

## Accessibility Features

- Visual differentiation between active and inactive tabs
- Focus ring on child `span` element for better visibility
- Full ARIA implementation with proper roles and states
- Screen reader support with clear state announcements

## Keyboard Behavior

### Focus Movement (WITHOUT Activation)
- **Arrow Keys**: Navigate between tabs (focus only, no activation)
- **Home/End**: Jump to first/last tab (focus only)
- **Tab**: Move between tab list and panel content

### Activation (Separate from Focus)
- **Enter/Space**: Activate the currently focused tab
- **Mouse click**: Direct activation
- Only these actions change the active panel

## ARIA Implementation

### Required Roles
- `role="tablist"` container
- `role="tab"` buttons with `aria-selected` state
- `role="tabpanel"` with `aria-labelledby`

### State Management
- `aria-selected="true"` for active tab
- `aria-selected="false"` for inactive tabs
- `aria-controls` links tabs to their panels
- `aria-labelledby` links panels to their tabs

### Focus Management
- Roving tabindex pattern
- Only focused tab has `tabindex="0"`
- Other tabs have `tabindex="-1"`
- Focus can move independently of activation

## Contrast with Automatic Activation

| Aspect | Manual Activation | Automatic Activation |
|--------|------------------|---------------------|
| **Focus & Activation** | Separate actions | Combined action |
| **Arrow Keys** | Move focus only | Move focus AND activate |
| **Enter/Space** | Required to activate | Not needed (already active) |
| **Best For** | Complex/slow content | Simple/instant content |
| **User Control** | High | Lower |

## Example Use Case

The APG example demonstrates a tabs interface for Danish composers, showcasing how manual activation provides better user control and prevents accidental panel changes when navigating with arrow keys.