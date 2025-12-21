# WAI-ARIA APG Menu Pattern Specification

**Source**: https://www.w3.org/WAI/ARIA/apg/patterns/menu/

## Overview

A menu is a widget that offers a list of choices to the user, such as a set of actions or functions. Menu widgets behave like native operating system menus, such as the menus that pull down from the menubars of many desktop applications.

### Key Characteristics

- A menu is usually opened by a menu button
- A menu can be opened by pressing a keyboard shortcut
- Menus can contain submenus (nested menus)
- Menus often close after an item is selected
- A menubar is a presentation of a menu that is always visible and is usually horizontally arranged

## Keyboard Interaction

### Menu Navigation

| Key | Function |
|-----|----------|
| **Tab/Shift+Tab** | Move keyboard focus into and out of the menubar |
| **Enter** | When focus is on a menu item, activates the menu item, causing the menu to close and the selected action to be performed |
| **Space** | (Optional) When focus is on a menuitemcheckbox, changes the state without closing the menu |
| **Down Arrow** | When focus is on a menu item in a menubar, opens the submenu and places focus on the first item in the submenu |
| **Up Arrow** | When focus is on a menu item in a menubar, opens the submenu and places focus on the last item in the submenu |
| **Right Arrow** | When focus is on a menu item in a menu, opens the submenu and places focus on the first item in the submenu |
| **Left Arrow** | When focus is on a menu item in a submenu of a menu, closes the submenu and returns focus to the parent menuitem |
| **Escape** | Close the menu that contains focus and return focus to the element or context |
| **Home** | Move focus to the first item in the current menu or menubar |
| **End** | Move focus to the last item in the current menu or menubar |

### Character Key Navigation

- Typing a letter moves focus to the next instance of a visible node whose title begins with that letter
- If search character is repeated rapidly, focus cycles among all items that start with the same character

## WAI-ARIA Roles, States, and Properties

### Container Elements

- **menu**: Applied to the element serving as the menu container
- **menubar**: Applied to an element with a horizontal collection of menu items

### Menu Items

- **menuitem**: Applied to each selectable menu item
- **menuitemcheckbox**: Applied to menu items with a checkable state whose possible values are true, false, or mixed
- **menuitemradio**: Applied to checkable menu items that are part of a set where only one item can be checked

### Essential Properties

- **aria-haspopup**: Set on menu button or trigger to indicate it has a popup menu
- **aria-expanded**: Indicates whether a submenu is open (true) or closed (false)
- **aria-checked**: For menuitemcheckbox and menuitemradio, indicates the checked state
- **aria-disabled**: Indicates menu items that are not actionable but are displayed
- **aria-orientation**: Set to horizontal for menubars, vertical for menus (default)

### Focus Management

- **tabindex**: Only one menu item in a menu has tabindex="0"; all others have tabindex="-1"
- Focus moves programmatically using roving tabindex technique

## Component Architecture

### Basic Menu Structure

```html
<div role="menu" aria-labelledby="menubutton">
  <div role="menuitem" tabindex="0">Menu Item 1</div>
  <div role="menuitem" tabindex="-1">Menu Item 2</div>
  <div role="menuitem" tabindex="-1">Menu Item 3</div>
</div>
```

### Menubar Structure

```html
<ul role="menubar" aria-label="Actions">
  <li role="none">
    <a role="menuitem" aria-haspopup="true" aria-expanded="false">File</a>
    <ul role="menu">
      <li role="none">
        <a role="menuitem">New</a>
      </li>
    </ul>
  </li>
</ul>
```

### Checkbox and Radio Menu Items

```html
<div role="menu">
  <div role="menuitemcheckbox" aria-checked="true" tabindex="0">Bold</div>
  <div role="menuitemcheckbox" aria-checked="false" tabindex="-1">Italic</div>
  <div role="separator"></div>
  <div role="menuitemradio" aria-checked="true" tabindex="-1">Left</div>
  <div role="menuitemradio" aria-checked="false" tabindex="-1">Center</div>
</div>
```

## Implementation Requirements

### Accessibility Requirements

1. **Focus Management**: Implement roving tabindex for keyboard navigation
2. **ARIA Labels**: Provide accessible names for all menu components
3. **State Communication**: Use aria-expanded, aria-checked appropriately
4. **Keyboard Navigation**: Support all required keyboard interactions
5. **Screen Reader Support**: Ensure menu structure is properly announced

### Visual Design Requirements

1. **Focus Indicators**: Clear visual focus indicators for keyboard users
2. **State Indicators**: Visual indicators for checked/unchecked states
3. **Hierarchy**: Clear visual hierarchy for submenus
4. **Responsive**: Adapt to different screen sizes and orientations

### Behavior Requirements

1. **Auto-close**: Menus close when clicking outside or pressing Escape
2. **Submenu Timing**: Appropriate hover/focus delays for submenu opening
3. **Selection**: Menu closes after item selection (unless checkbox)
4. **Disabled Items**: Handle disabled menu items appropriately

## Examples and Use Cases

### Simple Action Menu

- Context menus triggered by right-click
- Dropdown menus for actions
- Mobile menu overlays

### Navigation Menubar

- Primary site navigation
- Application menu bars
- Toolbar-style interfaces

### Complex Menus

- Editor menus with checkboxes and radio groups
- Multi-level navigation menus
- Contextual menus with dynamic content

## Best Practices

1. **Progressive Enhancement**: Start with semantic HTML, enhance with ARIA
2. **Mobile Considerations**: Adapt interaction patterns for touch interfaces
3. **Performance**: Lazy-load submenu content when appropriate
4. **Consistency**: Maintain consistent behavior across menu instances
5. **Testing**: Test with keyboard-only navigation and screen readers

## Common Pitfalls

1. **Missing Focus Management**: Not properly managing focus within menus
2. **Incorrect ARIA**: Using wrong roles or missing essential properties
3. **Poor Keyboard Support**: Not implementing all required keyboard interactions
4. **Auto-opening Submenus**: Making submenus too sensitive to hover
5. **Inadequate Visual Feedback**: Poor focus indicators or state feedback