# Menu Component Specification Sheet

## Overview

The Menu component provides an accessible dropdown menu system following WAI-ARIA APG patterns. It consists of a MenuButton trigger and a Menu container with MenuItem children, supporting keyboard navigation, focus management, and submenu functionality.

## Component Architecture

### Core Components

1. **MenuButton** - Trigger button that opens/closes menu
2. **Menu** - Container for menu items with ARIA roles
3. **MenuItem** - Individual menu items (actions, links, or submenu triggers)
4. **MenuSeparator** - Visual dividers between menu sections
5. **MenuItemCheckbox** - Checkable menu items (future enhancement)
6. **MenuItemRadio** - Radio button menu items (future enhancement)

## WAI-ARIA APG Compliance

### Keyboard Navigation Requirements

| Key | Function |
|-----|----------|
| **Enter/Space** | Opens menu from button, activates menu item |
| **Down Arrow** | Opens menu and moves to first item, or moves to next item |
| **Up Arrow** | Opens menu and moves to last item, or moves to previous item |
| **Right Arrow** | Opens submenu and moves to first submenu item |
| **Left Arrow** | Closes submenu and returns to parent item |
| **Escape** | Closes menu and returns focus to button |
| **Home** | Moves to first menu item |
| **End** | Moves to last menu item |
| **Tab/Shift+Tab** | Closes menu and moves focus to next/previous element |

### ARIA Roles and Properties

#### MenuButton
- `role="button"` (implicit on button element)
- `aria-haspopup="menu"`
- `aria-expanded="true|false"`
- `aria-controls="menu-id"` (optional)

#### Menu
- `role="menu"`
- `aria-labelledby="button-id"` (optional)
- `aria-orientation="vertical"` (default)

#### MenuItem
- `role="menuitem"`
- `tabindex="0"` (focused item) or `tabindex="-1"` (other items)
- `aria-disabled="true"` (for disabled items)
- `aria-haspopup="menu"` (for submenu triggers)
- `aria-expanded="true|false"` (for submenu triggers)

## Technical Requirements

### Focus Management
- **Roving tabindex pattern** within menu
- **Focus returns to button** when menu closes
- **Focus moves to first item** when menu opens
- **Circular navigation** within menu items

### Menu Positioning
- **Dropdown positioning** relative to button
- **Viewport collision detection** and repositioning
- **Responsive behavior** for mobile devices
- **Z-index management** for layering

### State Management
- **Open/closed state** synchronization
- **Active item tracking** for keyboard navigation
- **Submenu state management** (future)
- **Selection state** for checkbox/radio items (future)

## Design Token Integration

### Menu Container
```css
--ag-menu-bg: Background color
--ag-menu-border: Border color
--ag-menu-shadow: Dropdown shadow
--ag-menu-radius: Border radius
--ag-menu-padding: Container padding
--ag-menu-min-width: Minimum width
--ag-menu-max-width: Maximum width
--ag-menu-z-index: Z-index for layering
```

### Menu Items
```css
--ag-menu-item-padding: Item padding
--ag-menu-item-bg: Default background
--ag-menu-item-bg-hover: Hover background
--ag-menu-item-bg-focus: Focus background
--ag-menu-item-bg-active: Active background
--ag-menu-item-text: Default text color
--ag-menu-item-text-hover: Hover text color
--ag-menu-item-text-disabled: Disabled text color
```

### Menu Button
```css
--ag-menubutton-bg: Default background
--ag-menubutton-border: Border color
--ag-menubutton-text: Text color
--ag-menubutton-bg-hover: Hover background
--ag-menubutton-bg-active: Active background
--ag-menubutton-indicator-color: Arrow color
```

### Separators
```css
--ag-menu-separator-color: Separator color
--ag-menu-separator-margin: Separator spacing
```

## Component Properties

### MenuButton Props
```typescript
interface MenuButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  ariaLabel?: string;
  onMenuOpen?: () => void;
  onMenuClose?: () => void;
}
```

### Menu Props
```typescript
interface MenuProps {
  children: React.ReactNode;
  open?: boolean;
  placement?: 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end';
  ariaLabel?: string;
  ariaLabelledBy?: string;
  onClose?: () => void;
  onItemSelect?: (value: string) => void;
}
```

### MenuItem Props
```typescript
interface MenuItemProps {
  children: React.ReactNode;
  value?: string;
  disabled?: boolean;
  href?: string;
  target?: string;
  onClick?: (event: Event) => void;
}
```

## Usage Examples

### Basic Action Menu
```html
<ag-menu-button>
  Actions
  <ag-menu slot="menu">
    <ag-menu-item value="edit">Edit</ag-menu-item>
    <ag-menu-item value="copy">Copy</ag-menu-item>
    <ag-menu-separator></ag-menu-separator>
    <ag-menu-item value="delete">Delete</ag-menu-item>
  </ag-menu>
</ag-menu-button>
```

### Navigation Menu
```html
<ag-menu-button>
  Navigation
  <ag-menu slot="menu">
    <ag-menu-item href="/home">Home</ag-menu-item>
    <ag-menu-item href="/about">About</ag-menu-item>
    <ag-menu-item href="/contact">Contact</ag-menu-item>
  </ag-menu>
</ag-menu-button>
```

### Context Menu
```html
<ag-menu-button aria-label="More options">
  ⋯
  <ag-menu slot="menu">
    <ag-menu-item value="share">Share</ag-menu-item>
    <ag-menu-item value="bookmark">Bookmark</ag-menu-item>
    <ag-menu-item value="report">Report</ag-menu-item>
  </ag-menu>
</ag-menu-button>
```

## Test Coverage Requirements

### Component Initialization (5+ tests)
- Default properties and rendering
- Custom properties handling
- Slot content rendering
- Empty menu handling
- ARIA role verification

### ARIA Compliance (8+ tests)
- MenuButton ARIA attributes
- Menu container ARIA attributes
- MenuItem ARIA attributes and roles
- Focus management and tabindex
- aria-expanded state changes
- aria-disabled handling
- aria-haspopup implementation
- Screen reader announcements

### Keyboard Navigation (10+ tests)
- Enter/Space opening menu
- Arrow key navigation
- Home/End navigation
- Escape closing menu
- Tab/Shift+Tab behavior
- Character key navigation
- Focus return to button
- Roving tabindex pattern
- Menu item activation
- Keyboard vs mouse interaction

### Menu Interaction (8+ tests)
- Click to open/close menu
- Outside click closing
- Menu item selection
- Menu item click handling
- Link navigation behavior
- Disabled item handling
- Custom event emission
- State synchronization

### Positioning & Layout (5+ tests)
- Default positioning
- Viewport collision handling
- Responsive behavior
- Z-index management
- Menu sizing constraints

## Framework Integration

### React Wrapper
```typescript
import { ReactMenuButton, Menu, MenuItem, MenuSeparator } from 'agnosticui-core/menu/react';

<ReactMenuButton onMenuOpen={...} onMenuClose={...}>
  Actions
  <Menu onItemSelect={...}>
    <MenuItem value="edit">Edit</MenuItem>
    <MenuSeparator />
    <MenuItem value="delete">Delete</MenuItem>
  </Menu>
</ReactMenuButton>
```

### Vue Wrapper
```vue
<template>
  <VueMenuButton @menu-open="..." @menu-close="...">
    Actions
    <VueMenu @item-select="...">
      <VueMenuItem value="edit">Edit</VueMenuItem>
      <VueMenuSeparator />
      <VueMenuItem value="delete">Delete</VueMenuItem>
    </VueMenu>
  </VueMenuButton>
</template>
```

### Svelte Integration
```svelte
<ag-menu-button on:menu-open={...} on:menu-close={...}>
  Actions
  <ag-menu slot="menu" on:item-select={...}>
    <ag-menu-item value="edit">Edit</ag-menu-item>
    <ag-menu-separator></ag-menu-separator>
    <ag-menu-item value="delete">Delete</ag-menu-item>
  </ag-menu>
</ag-menu-button>
```

## Accessibility Features

### Screen Reader Support
- Proper role announcements
- State change notifications
- Menu structure understanding
- Navigation feedback

### Keyboard Users
- Full keyboard accessibility
- Visual focus indicators
- Consistent navigation patterns
- No keyboard traps

### Motor Impairments
- Large click targets
- Forgiving hover states
- Reasonable timing for interactions
- Alternative interaction methods

## Implementation Notes

### Almost Headless Philosophy
- **Functional CSS only**: Display states, positioning, accessibility
- **No visual styling**: Colors, fonts, decorative elements via tokens
- **Behavior focus**: Keyboard navigation, focus management, ARIA
- **Customizable appearance**: Through CSS custom properties

### Performance Considerations
- **Lazy rendering**: Menu content only when needed
- **Event delegation**: Efficient event handling
- **Minimal DOM**: Clean component structure
- **Bundle size**: Optimize for production use

### Browser Compatibility
- **Modern browsers**: ES2020+ support
- **Polyfill support**: For older browsers if needed
- **Touch devices**: Appropriate touch interactions
- **Mobile optimization**: Responsive menu behavior

## Quality Assurance

### Automated Testing
- **Unit tests**: All component functionality
- **Integration tests**: Framework wrapper behavior
- **Accessibility tests**: ARIA compliance verification
- **Visual regression**: Consistent appearance

### Manual Testing
- **Keyboard navigation**: All interaction patterns
- **Screen reader**: VoiceOver, NVDA, JAWS testing
- **Mobile devices**: Touch interaction verification
- **Browser testing**: Cross-browser compatibility

## Future Enhancements

### Advanced Features
- **Submenu support**: Nested menu functionality
- **MenuItemCheckbox**: Checkable menu items
- **MenuItemRadio**: Radio button menu items
- **Menu positioning**: Advanced collision detection
- **Virtualization**: For large menu lists

### Integration Features
- **Command palette**: Search within menu items
- **Menu bar**: Horizontal menu bar component
- **Context menus**: Right-click menu support
- **Mobile drawer**: Slide-out menu behavior
- **Mega menus**: Large, complex menu layouts