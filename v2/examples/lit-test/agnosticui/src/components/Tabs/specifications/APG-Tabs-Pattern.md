# WAI-ARIA APG Tabs Pattern Specification

Source: https://www.w3.org/WAI/ARIA/apg/patterns/tabs/

## About This Pattern

Tabs are a user interface component that:
- Display one content panel at a time
- Have a set of tab elements arranged along an edge (typically top)
- Include a tab list containing individual tabs
- Show one panel as active when initialized

## Key Terms

- **"Tabs" or "Tabbed Interface"**: The complete set of tab elements and panels
- **"Tab List"**: Container for tab elements
- **"Tab"**: Label for a specific panel that can be activated
- **"Tabpanel"**: Content area associated with a specific tab

## Keyboard Interaction

Keyboard controls include:
- **Tab**: Move focus in/out of tab list
- **Left/Right Arrows**: Navigate between tabs
- **Space/Enter**: Activate a tab
- **Home/End**: Move to first/last tab
- **Shift+F10**: Open associated popup menu (if supported)

## WAI-ARIA Requirements

### Required Roles
- Use `role="tablist"` for tab container
- Use `role="tab"` for individual tabs
- Use `role="tabpanel"` for content panels

### Required Properties
- Set `aria-controls` to link tabs and panels
- Mark active tab with `aria-selected="true"`
- Set inactive tabs with `aria-selected="false"`
- Use `aria-labelledby` to associate panels with their tabs

### Focus Management
- Tab list should be included in the tab sequence
- Only the active tab should be focusable (tabindex="0")
- Inactive tabs should have tabindex="-1"
- Arrow keys should move focus between tabs

## Examples Provided by APG
- Tabs with Automatic Activation
- Tabs with Manual Activation

## Implementation Notes
The specification provides comprehensive guidance for creating accessible, keyboard-navigable tab interfaces that work with assistive technologies.