# Menu

A menu (dropdown menu or context menu) is a popover component that displays a list of actions or options when triggered. Menus provide a compact way to present choices without cluttering the interface.

## Examples

<MenuExamples />

<script setup>
import MenuExamples from '../examples/MenuExamples.vue'
</script>

## Usage

::: details Vue
```vue
<template>
  <section>
    <!-- Basic menu -->
    <VueMenu menu-aria-label="Menu options">
      Menu
      <template #menu>
        <VueMenuItem value="edit">Edit</VueMenuItem>
        <VueMenuItem value="copy">Copy</VueMenuItem>
        <VueMenuItem value="paste">Paste</VueMenuItem>
        <VueMenuSeparator />
        <VueMenuItem value="delete">Delete</VueMenuItem>
      </template>
    </VueMenu>

    <!-- Menu with links -->
    <VueMenu menu-aria-label="Navigation menu">
      Navigation
      <template #menu>
        <VueMenuItem value="home" href="#home">Home</VueMenuItem>
        <VueMenuItem value="about" href="#about">About</VueMenuItem>
        <VueMenuItem value="contact" href="#contact">Contact</VueMenuItem>
      </template>
    </VueMenu>

    <!-- Menu with disabled items -->
    <VueMenu menu-aria-label="Menu with disabled items">
      Mixed States
      <template #menu>
        <VueMenuItem value="enabled1">Enabled Item</VueMenuItem>
        <VueMenuItem value="disabled1" :disabled="true">Disabled Item</VueMenuItem>
        <VueMenuItem value="enabled2">Another Enabled</VueMenuItem>
      </template>
    </VueMenu>

    <!-- Menu placement -->
    <VueMenu placement="bottom-end" menu-aria-label="Bottom end menu">
      Bottom End
      <template #menu>
        <VueMenuItem value="item1">Item 1</VueMenuItem>
        <VueMenuItem value="item2">Item 2</VueMenuItem>
      </template>
    </VueMenu>

    <!-- Event handling -->
    <VueMenu
      menu-aria-label="Event testing menu"
      @menu-open="handleMenuOpen"
      @menu-close="handleMenuClose"
      @menu-select="handleMenuSelect"
    >
      Event Test
      <template #menu>
        <VueMenuItem value="option1">Option 1</VueMenuItem>
        <VueMenuItem value="option2">Option 2</VueMenuItem>
      </template>
    </VueMenu>
  </section>
</template>

<script>
import VueMenu, { VueMenuItem, VueMenuSeparator } from "agnosticui-core/menu/vue";

export default {
  components: {
    VueMenu,
    VueMenuItem,
    VueMenuSeparator,
  },
  methods: {
    handleMenuOpen(detail) {
      console.log("Menu opened, open:", detail.open);
    },
    handleMenuClose(detail) {
      console.log("Menu closed, open:", detail.open);
    },
    handleMenuSelect(detail) {
      console.log("Selected:", detail.value);
    },
  },
};
</script>
```
:::

::: details React
```tsx
import { ReactMenuButton, ReactMenu, ReactMenuItem, ReactMenuSeparator } from 'agnosticui-core/menu/react';

export default function MenuExample() {
  const handleMenuOpen = (event) => {
    console.log("Menu opened, open:", event.detail.open);
  };

  const handleMenuClose = (event) => {
    console.log("Menu closed, open:", event.detail.open);
  };

  const handleMenuSelect = (event) => {
    console.log("Selected:", event.detail.value);
  };

  return (
    <section>
      {/* Basic menu */}
      <ReactMenuButton
        variant="chevron"
        size="md"
        onMenuOpen={handleMenuOpen}
        onMenuClose={handleMenuClose}
      >
        Menu
        <ReactMenu slot="menu" ariaLabel="Menu options">
          <ReactMenuItem value="edit" onMenuSelect={handleMenuSelect}>
            Edit
          </ReactMenuItem>
          <ReactMenuItem value="copy" onMenuSelect={handleMenuSelect}>
            Copy
          </ReactMenuItem>
          <ReactMenuItem value="paste" onMenuSelect={handleMenuSelect}>
            Paste
          </ReactMenuItem>
          <ReactMenuSeparator />
          <ReactMenuItem value="delete" onMenuSelect={handleMenuSelect}>
            Delete
          </ReactMenuItem>
        </ReactMenu>
      </ReactMenuButton>

      {/* Button variant */}
      <ReactMenuButton
        variant="button"
        size="md"
        buttonVariant="primary"
      >
        Actions
        <ReactMenu slot="menu" ariaLabel="Action menu">
          <ReactMenuItem value="new">New File</ReactMenuItem>
          <ReactMenuItem value="open">Open File</ReactMenuItem>
          <ReactMenuItem value="save">Save</ReactMenuItem>
        </ReactMenu>
      </ReactMenuButton>

      {/* Icon variant */}
      <ReactMenuButton
        variant="icon"
        size="md"
        unicode="⋮"
        ariaLabel="More options"
      >
        <ReactMenu slot="menu" ariaLabel="More options menu">
          <ReactMenuItem value="settings">Settings</ReactMenuItem>
          <ReactMenuItem value="profile">Profile</ReactMenuItem>
          <ReactMenuSeparator />
          <ReactMenuItem value="logout">Logout</ReactMenuItem>
        </ReactMenu>
      </ReactMenuButton>

      {/* Menu with links */}
      <ReactMenuButton
        variant="chevron"
        size="md"
        label="Navigation"
      >
        Navigation
        <ReactMenu slot="menu" ariaLabel="Navigation menu">
          <ReactMenuItem value="home" href="#home">Home</ReactMenuItem>
          <ReactMenuItem value="about" href="#about">About</ReactMenuItem>
          <ReactMenuItem value="contact" href="#contact">Contact</ReactMenuItem>
        </ReactMenu>
      </ReactMenuButton>

      {/* Disabled items */}
      <ReactMenuButton
        variant="button"
        size="md"
        buttonVariant="primary"
      >
        Mixed States
        <ReactMenu slot="menu" ariaLabel="Menu with disabled items">
          <ReactMenuItem value="enabled1">Enabled Item</ReactMenuItem>
          <ReactMenuItem value="disabled1" disabled>Disabled Item</ReactMenuItem>
          <ReactMenuItem value="enabled2">Another Enabled</ReactMenuItem>
        </ReactMenu>
      </ReactMenuButton>
    </section>
  );
}
```
:::

::: details Lit (Web Components)
```html
<script type="module">
  import 'agnosticui-core/menu';

  document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('#my-menu');

    // Using addEventListener pattern
    menuButton?.addEventListener('menu-open', (e) => {
      console.log('Menu opened, open:', e.detail.open);
    });

    menuButton?.addEventListener('menu-close', (e) => {
      console.log('Menu closed, open:', e.detail.open);
    });

    const menuItems = document.querySelectorAll('ag-menu-item');
    menuItems.forEach(item => {
      item.addEventListener('menu-select', (e) => {
        console.log('Selected:', e.detail.value);
      });
    });

    // Alternative: Using callback props pattern
    const menuButton2 = document.querySelector('#callback-menu');
    if (menuButton2) {
      menuButton2.onMenuOpen = (e) => {
        console.log('Menu opened via callback, open:', e.detail.open);
      };
      menuButton2.onMenuClose = (e) => {
        console.log('Menu closed via callback, open:', e.detail.open);
      };
    }
  });
</script>

<section>
  <!-- Basic menu -->
  <ag-menu-button id="my-menu" variant="chevron" size="md">
    Menu
    <ag-menu slot="menu" aria-label="Menu options">
      <ag-menu-item value="edit">Edit</ag-menu-item>
      <ag-menu-item value="copy">Copy</ag-menu-item>
      <ag-menu-item value="paste">Paste</ag-menu-item>
      <ag-menu-separator></ag-menu-separator>
      <ag-menu-item value="delete">Delete</ag-menu-item>
    </ag-menu>
  </ag-menu-button>

  <!-- Button variant -->
  <ag-menu-button variant="button" size="md" button-variant="primary">
    Actions
    <ag-menu slot="menu" aria-label="Action menu">
      <ag-menu-item value="new">New File</ag-menu-item>
      <ag-menu-item value="open">Open File</ag-menu-item>
      <ag-menu-item value="save">Save</ag-menu-item>
      <ag-menu-separator></ag-menu-separator>
      <ag-menu-item value="exit">Exit</ag-menu-item>
    </ag-menu>
  </ag-menu-button>

  <!-- Icon variant -->
  <ag-menu-button variant="icon" size="md" unicode="⋮" aria-label="More options">
    <ag-menu slot="menu" aria-label="More options menu">
      <ag-menu-item value="settings">Settings</ag-menu-item>
      <ag-menu-item value="profile">Profile</ag-menu-item>
      <ag-menu-separator></ag-menu-separator>
      <ag-menu-item value="logout">Logout</ag-menu-item>
    </ag-menu>
  </ag-menu-button>

  <!-- Menu with links -->
  <ag-menu-button variant="chevron" size="md">
    Navigation
    <ag-menu slot="menu" aria-label="Navigation menu">
      <ag-menu-item value="home" href="#home">Home</ag-menu-item>
      <ag-menu-item value="about" href="#about">About</ag-menu-item>
      <ag-menu-item value="contact" href="#contact">Contact</ag-menu-item>
    </ag-menu>
  </ag-menu-button>

  <!-- Disabled items -->
  <ag-menu-button variant="button" size="md" button-variant="primary">
    Mixed States
    <ag-menu slot="menu" aria-label="Menu with disabled items">
      <ag-menu-item value="enabled1">Enabled Item</ag-menu-item>
      <ag-menu-item value="disabled1" disabled>Disabled Item</ag-menu-item>
      <ag-menu-item value="enabled2">Another Enabled</ag-menu-item>
    </ag-menu>
  </ag-menu-button>
</section>
```
:::

## Props

### Menu Button (React/Lit)

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'chevron' \| 'button' \| 'icon'` | `'chevron'` | Visual style of the menu button |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Size of the menu button |
| `buttonVariant` | `'primary' \| 'secondary' \| 'ghost' \| 'danger'` | `'ghost'` | Button color variant (for button/icon variants) |
| `disabled` | `boolean` | `false` | Disables the menu button |
| `ariaLabel` | `string` | `''` | ARIA label for the menu button |
| `icon` | `string` | `''` | Icon to display |
| `unicode` | `string` | `''` | Unicode character for icon variant |
| `label` | `string` | `''` | Label text for the button |

### Menu (Vue)

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `disabled` | `boolean` | `false` | Disables the menu button |
| `ariaLabel` | `string` | `''` | ARIA label for the menu button |
| `open` | `boolean` | `false` | Whether the menu is open (controlled mode) |
| `placement` | `'bottom-start' \| 'bottom-end' \| 'top-start' \| 'top-end'` | `'bottom-start'` | Placement of the menu popover |
| `menuAriaLabel` | `string` | `''` | ARIA label for the menu |
| `menuAriaLabelledBy` | `string` | `''` | ARIA labelledby for the menu |

### Menu Item

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | `''` | Unique value for the menu item |
| `disabled` | `boolean` | `false` | Disables the menu item |
| `href` | `string` | `''` | URL for menu item link |
| `target` | `string` | `''` | Target for menu item link (e.g., `_blank`) |

## Events

### MenuButton Events

| Event | Framework | Detail | Description |
|-------|-----------|--------|-------------|
| `menu-open` | Vue: `@menu-open`<br>React: `onMenuOpen`<br>Lit: `@menu-open` or `.onMenuOpen` | `{ open: boolean }` | Fired when menu opens. The `open` property will be `true`. |
| `menu-close` | Vue: `@menu-close`<br>React: `onMenuClose`<br>Lit: `@menu-close` or `.onMenuClose` | `{ open: boolean }` | Fired when menu closes. The `open` property will be `false`. |
| `click` | Vue: `@click`<br>React: `onClick`<br>Lit: `@click` or `.onClick` | Native `MouseEvent` | Fired when the menu button is clicked (native composed event). |
| `focus` | Vue: `@focus`<br>React: `onFocus`<br>Lit: `@focus` or `.onFocus` | Native `FocusEvent` | Fired when the menu button receives focus (re-dispatched from host). |
| `blur` | Vue: `@blur`<br>React: `onBlur`<br>Lit: `@blur` or `.onBlur` | Native `FocusEvent` | Fired when the menu button loses focus (re-dispatched from host). |
| `keydown` | Vue: `@keydown`<br>React: `onKeyDown`<br>Lit: `@keydown` or `.onKeyDown` | Native `KeyboardEvent` | Fired when a key is pressed on the menu button (native composed event). |

### MenuItem Events

| Event | Framework | Detail | Description |
|-------|-----------|--------|-------------|
| `menu-select` | Vue: `@menu-select`<br>React: `onMenuSelect`<br>Lit: `@menu-select` or `.onMenuSelect` | `{ value: string }` | Fired when a menu item is selected. Contains the item's `value`. |
| `click` | Vue: `@click`<br>React: `onClick`<br>Lit: `@click` or `.onClick` | Native `MouseEvent` | Fired when the menu item is clicked (native composed event). |

### Menu Events

| Event | Framework | Detail | Description |
|-------|-----------|--------|-------------|
| `keydown` | Vue: `@menu-keydown`<br>React: `onKeyDown` on menu<br>Lit: `@keydown` or `.onKeyDown` | Native `KeyboardEvent` | Fired when a key is pressed in the menu (native composed event). |

### Event Patterns

AgnosticUI Menu supports **three event handling patterns**:

1. **addEventListener** (Lit/Vanilla JS):
```javascript
const menuButton = document.querySelector('ag-menu-button');
menuButton.addEventListener('menu-open', (e) => {
  console.log('Menu opened:', e.detail.open);
});
```

2. **Callback props** (Lit/Vanilla JS):
```javascript
const menuButton = document.querySelector('ag-menu-button');
menuButton.onMenuOpen = (e) => {
  console.log('Menu opened:', e.detail.open);
};
```

3. **Framework event handlers** (Vue/React):
```vue
<!-- Vue -->
<VueMenu @menu-open="handleMenuOpen" />
```
```tsx
// React
<ReactMenuButton onMenuOpen={handleMenuOpen} />
```

All three patterns work identically thanks to the **dual-dispatch** system.

## Components

### Vue
- **VueMenu**: Main menu component with button and popover
- **VueMenuItem**: Individual menu item (button or link)
- **VueMenuSeparator**: Visual separator between menu items

### React
- **ReactMenuButton**: Menu trigger button
- **ReactMenu**: Menu popover container
- **ReactMenuItem**: Individual menu item (button or link)
- **ReactMenuSeparator**: Visual separator between menu items

### Lit
- **ag-menu-button**: Menu trigger button
- **ag-menu**: Menu popover container
- **ag-menu-item**: Individual menu item (button or link)
- **ag-menu-separator**: Visual separator between menu items

## Slots

### Vue
- **Default slot**: Content for the menu button
- **#menu template slot**: Menu items

### React
- **children**: Content for the menu button
- **ReactMenu with slot="menu"**: Menu items

### Lit
- **Default slot**: Content for the menu button
- **ag-menu with slot="menu"**: Menu items

## Accessibility

The Menu component implements the [WAI-ARIA Menu Button Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/):

- Uses `role="button"` and `aria-haspopup="true"` for the menu trigger
- Uses `role="menu"` for the menu container
- Uses `role="menuitem"` for individual menu items
- Implements keyboard navigation:
  - **Enter/Space**: Opens the menu when focused on button
  - **Arrow Up/Down**: Navigates between menu items
  - **Home/End**: Jumps to first/last menu item
  - **Enter**: Selects the focused menu item
  - **Escape/Tab**: Closes the menu
- Manages focus automatically:
  - Focus moves to first item when menu opens
  - Focus returns to button when menu closes
  - Disabled items are skipped during navigation
- Supports `aria-label` for accessibility
- Menu items can be marked with `disabled` attribute

### Best Practices

- Always provide an `aria-label` or `menu-aria-label` for accessibility
- Use semantic grouping with `MenuSeparator` to organize related items
- Prefer menu items over buttons when presenting a list of actions
- Use the `href` prop for navigation items instead of click handlers
- Keep menu item labels concise and action-oriented
- Use the `disabled` prop rather than hiding items when possible
- For icon-only buttons, always provide an `aria-label`

## Variants

### Chevron Variant
The default variant shows text with a chevron indicator. Best for navigation menus or action lists.

### Button Variant
Styled as a button with optional color variants (`primary`, `secondary`, `ghost`, `danger`). Best for prominent actions.

### Icon Variant
Displays only an icon (using `unicode` or `icon` prop). Best for compact UIs or toolbar menus. Always requires an `aria-label`.

## Placement Options

The menu popover can be positioned relative to the button:
- `bottom-start`: Below button, aligned to start (default)
- `bottom-end`: Below button, aligned to end
- `top-start`: Above button, aligned to start
- `top-end`: Above button, aligned to end

## CSS Shadow Parts

| Part | Description |
| --- | --- |
| `ag-menu-trigger-chevron-button` | The menu button (chevron variant) |
| `ag-menu-trigger-icon-button` | The menu button (icon variant) |
| `ag-menu-trigger-regular-button` | The menu button (button variant) |
| `ag-menu-label` | The label inside the chevron button |
| `ag-menu-unicode-icon` | The unicode icon in the icon button |
| `ag-menu-chevron-icon` | The chevron icon in the chevron button |
| `ag-menu` | The menu container |
| `ag-menu-item` | A menu item |
| `ag-menu-item-button` | A menu item button |
| `ag-menu-separator` | A separator between menu items |

### Customization Example

```css
.custom-menu-button::part(ag-menu-trigger-chevron-button) {
  background-color: #4a5568;
  color: white;
  border: 2px solid #2d3748;
  border-radius: 8px;
}
.custom-menu-button::part(ag-menu-label) {
  font-weight: bold;
}
.custom-menu-button::part(ag-menu-chevron-icon) {
  color: #a0aec0;
}
.custom-menu::part(ag-menu) {
  background-color: #2d3748;
  border: 1px solid #4a5568;
  border-radius: 8px;
}
.custom-menu::part(ag-menu-item) {
  color: #e2e8f0;
}
.custom-menu::part(ag-menu-item):hover {
  background-color: #4a5568;
}
.custom-menu::part(ag-menu-separator) {
  background-color: #4a5568;
}
```
