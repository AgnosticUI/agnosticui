# WAI-ARIA APG Menu Button Pattern Specification

**Source**: https://www.w3.org/WAI/ARIA/apg/patterns/menubutton/

## Overview

A menu button is a button that opens a menu. It is often styled as a typical push button with a downward pointing arrow or triangle to hint that activating the button will display a menu.

### Key Characteristics

- Provides access to a list of actions, commands, or navigation links
- Typically appears as a button with a dropdown indicator
- Opens a menu when activated
- Follows the Menu and Menubar Pattern for the opened menu

## Keyboard Interaction

### Menu Button Behavior

| Key | Function |
|-----|----------|
| **Enter** | Opens the menu and places focus on the first menu item |
| **Space** | Opens the menu and places focus on the first menu item |
| **Down Arrow** | (Optional) Opens the menu and moves focus to the first menu item |
| **Up Arrow** | (Optional) Opens the menu and moves focus to the last menu item |

### When Menu is Open

The menu follows the standard Menu pattern keyboard interactions:

| Key | Function |
|-----|----------|
| **Escape** | Closes the menu and returns focus to the menu button |
| **Tab** | Closes the menu, moves focus to next focusable element |
| **Shift+Tab** | Closes the menu, moves focus to previous focusable element |

## WAI-ARIA Roles, States, and Properties

### Menu Button

- **role**: "button" (usually implicit on button element)
- **aria-haspopup**: "menu" or "true" to indicate the button opens a menu
- **aria-expanded**:
  - "false" when menu is closed
  - "true" when menu is open
- **aria-controls**: (Optional) References the ID of the menu element

### Associated Menu

- **role**: "menu" on the container element
- **aria-labelledby**: (Optional) References the ID of the menu button
- Follow standard Menu pattern ARIA implementation

## Component Architecture

### Basic Menu Button Structure

```html
<button
  type="button"
  aria-haspopup="menu"
  aria-expanded="false"
  aria-controls="menu1"
  id="menubutton1">
  Actions
  <span aria-hidden="true">▾</span>
</button>

<ul role="menu" aria-labelledby="menubutton1" id="menu1">
  <li role="none">
    <a role="menuitem" href="#action1">Action 1</a>
  </li>
  <li role="none">
    <a role="menuitem" href="#action2">Action 2</a>
  </li>
  <li role="none">
    <a role="menuitem" href="#action3">Action 3</a>
  </li>
</ul>
```

### With Submenus

```html
<button
  type="button"
  aria-haspopup="menu"
  aria-expanded="false">
  Navigation
</button>

<ul role="menu">
  <li role="none">
    <a role="menuitem" aria-haspopup="menu" aria-expanded="false">
      Products
    </a>
    <ul role="menu">
      <li role="none">
        <a role="menuitem">Product A</a>
      </li>
      <li role="none">
        <a role="menuitem">Product B</a>
      </li>
    </ul>
  </li>
</ul>
```

## Implementation Requirements

### Focus Management

1. **Initial Focus**: When menu opens, focus moves to first menu item
2. **Return Focus**: When menu closes, focus returns to menu button
3. **Roving Tabindex**: Implement roving tabindex within menu
4. **Escape Handling**: Escape key closes menu and returns focus

### Visual Design

1. **Button States**: Clear visual states for normal, hover, focus, and active
2. **Menu Visibility**: Clear indication when menu is open vs closed
3. **Dropdown Indicator**: Visual indicator (arrow) showing dropdown behavior
4. **Menu Positioning**: Proper positioning relative to button

### Behavior Requirements

1. **Click to Open**: Clicking button opens menu
2. **Click Outside**: Clicking outside menu closes it
3. **Selection Closes**: Selecting menu item typically closes menu
4. **State Synchronization**: aria-expanded reflects actual menu state

## Menu Button vs. Select

### Use Menu Button When:
- Actions need to be performed
- Navigation is the primary purpose
- Items are commands or functions
- Multiple selection patterns are needed

### Use Select When:
- Form input is needed
- Single value selection is required
- Options represent data values
- Standard form validation is important

## Common Patterns

### Action Menu Button
```html
<button aria-haspopup="menu">
  Actions <span aria-hidden="true">▾</span>
</button>
```

### Navigation Menu Button
```html
<button aria-haspopup="menu">
  Navigation <span aria-hidden="true">☰</span>
</button>
```

### Context Menu Button
```html
<button aria-haspopup="menu" aria-label="More options">
  <span aria-hidden="true">⋯</span>
</button>
```

## Best Practices

1. **Consistent Behavior**: Maintain consistent interaction patterns
2. **Clear Labeling**: Provide clear, descriptive button labels
3. **Visual Indicators**: Use consistent visual indicators for dropdown state
4. **Responsive Design**: Adapt menu positioning for different screen sizes
5. **Performance**: Consider lazy loading for complex menus

## Testing Considerations

1. **Keyboard Navigation**: Test all keyboard interactions
2. **Screen Reader**: Verify proper announcement of states and content
3. **Mobile**: Test touch interactions and responsive behavior
4. **Focus Management**: Ensure focus moves correctly in all scenarios
5. **State Changes**: Verify aria-expanded updates correctly