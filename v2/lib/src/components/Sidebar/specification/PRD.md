# AgSidebar Component - Product Requirements Document (v2)

**Component**: `ag-sidebar` / `AgSidebar`  
**Version**: 2.1.0 (Revised)
**Created**: 2024-11-25  
**Last Updated**: 2024-11-26
**Status**: Planning (Revised)

## Revision Summary
This document has been updated to reflect a fundamental architectural shift. The previous approach of composing the Sidebar with `ag-accordion` has been abandoned due to complexities in styling and layout control. The new direction is a self-contained "first principles" implementation where the Sidebar manages its own sub-menu structure and state, providing greater control, consistency, and a simpler consumer experience.

---

## Critical Implementation Notes

### 1. Rail Mode Accessibility (CRITICAL)

**Problem**: Using `display: none` to hide labels in rail mode removes them from the accessibility tree.

**Solution**: Use `<ag-visually-hidden>` component or a visually-hidden CSS pattern:

```html
<!-- ✅ CORRECT -->
<a href="/dashboard">
  <ag-icon name="dashboard"></ag-icon>
  <ag-visually-hidden>Dashboard</ag-visually-hidden>
</a>

<!-- ❌ WRONG -->
<a href="/dashboard">
  <ag-icon name="dashboard"></ag-icon>
  <span style="display: none">Dashboard</span>
</a>
```

### 2. FOUC Prevention (CRITICAL)

**Problem**: If JavaScript takes time to load, the sidebar might render in the wrong mode before hydration.

**Solution**: Use CSS media queries to provide the correct initial state before JavaScript runs.

```css
/* Default desktop behavior (no JS needed) */
@media (min-width: 1024px) {
  .sidebar-container {
    position: relative;
    transform: none;
  }
}

/* Default mobile behavior (no JS needed) */
@media (max-width: 1023px) {
  .sidebar-container {
    position: fixed;
    transform: translateX(-100%);
  }
  
  :host([open]) .sidebar-container {
    transform: translateX(0);
  }
}
```

### 3. Focus Trap Implementation (CRITICAL)

**Solution**: Use the `inert` attribute on main content when the mobile drawer is open.

```typescript
private _trapFocus() {
  const mainContent = document.querySelector('main');
  mainContent?.setAttribute('inert', '');
  
  // Focus first interactive element
  const firstFocusable = this.shadowRoot?.querySelector('button, a');
  (firstFocusable as HTMLElement)?.focus();
}

private _releaseFocus() {
  const mainContent = document.querySelector('main');
  mainContent?.removeAttribute('inert');
}
```

### 4. Breakpoint Transition Behavior

**Auto-Reset Logic**: When the viewport crosses the breakpoint threshold, the component automatically resets conflicting states:

- **Mobile → Desktop**: `open` is set to `false`. `collapsed` state is preserved.
- **Desktop → Mobile**: `open` is set to `false`. `collapsed` is set to `false` (mobile does not use rail mode).

---

## Table of Contents

1. [Overview](#overview)
2. [WAI-ARIA Compliance](#wai-aria-compliance)
3. [Component Architecture](#component-architecture)
4. [Props & Attributes](#props--attributes)
5. [Events](#events)
6. [Responsive Behavior](#responsive-behavior)
7. [Slots & CSS Shadow Parts](#slots--css-shadow-parts)
8. [Token System](#token-system)
9. [Keyboard Interactions](#keyboard-interactions)
10. [Implementation Guidelines](#implementation-guidelines)
11. [Examples & Use Cases](#examples--use-cases)

---

## Overview

### Purpose

`AgSidebar` is a flexible, accessible, self-contained sidebar navigation component. It provides collapsible navigation sections for desktop layouts and a responsive drawer for mobile, similar to patterns on claude.ai, GitHub, and modern web applications.

### Key Features

- ✅ **Self-Contained**: Manages its own sub-menu logic without external dependencies like `ag-accordion`.
- ✅ **Consistent Styling**: Ensures uniform height, padding, and hover effects for all navigation items, including those with sub-menus.
- ✅ **Left or right positioning**: Configurable sidebar placement.
- ✅ **Collapsible state**: Toggle between expanded and "rail" (icon-only) modes on desktop.
- ✅ **Responsive**: Automatically adapts from a persistent sidebar to an overlay drawer on mobile.
- ✅ **One Level of Nesting**: Supports a single level of sub-menus for simplicity and accessibility.
- ✅ **Fully Accessible**: Full keyboard navigation, ARIA attributes, and focus management.

### Component Variants

1. **Persistent Sidebar** (Desktop default) - Always visible, pushes main content.
2. **Temporary Drawer** (Mobile/Tablet) - Overlay with a backdrop, dismissible.
3. **Rail Mode** (Collapsed) - Icon-only sidebar.

---

## WAI-ARIA Compliance

### ARIA Pattern: Navigation Landmark with Disclosure Widgets

`AgSidebar` provides a `<nav>` landmark. The sub-menu functionality follows the ARIA Disclosure pattern, managed internally.

-   The `<nav>` element has an `aria-label` for landmark identification.
-   The button that toggles a sub-menu has `aria-expanded` and `aria-controls`.
-   The sub-menu `<ul>` has a unique `id` referenced by `aria-controls`.
-   Active navigation links should have `aria-current="page"` (consumer's responsibility).
-   No `role="menu"` is used, preserving a natural tab sequence for navigation.

---

## Component Architecture

### Core Structure

The `AgSidebar` will be built from first principles with a clear, minimal structure.

```
ag-sidebar
└── Shadow DOM
    ├── aside (part="ag-sidebar-container")
    │   ├── div.sidebar-header (part="ag-sidebar-header")
    │   │   └── slot (name="header")
    │   ├── div.sidebar-content (part="ag-sidebar-content")
    │   │   └── slot (default)
    │   └── div.sidebar-footer (part="ag-sidebar-footer")
    └── backdrop (for temporary mode)
```

### Navigation Structure Philosophy

**CRITICAL**: The `AgSidebar` now defines its own structure for navigation items and sub-menus. Consumers will use simple slotted `<div>`s or `<button>`s with specific classes or attributes to build the navigation menu. This replaces the `ag-accordion` dependency.

**Maximum nesting depth: ONE LEVEL**

```html
<ag-sidebar>
  <!-- An item with a sub-menu -->
  <div class="nav-item">
    <button class="nav-button" aria-expanded="false" onclick="toggleSubmenu(this)">
      <span>Nav Item One</span>
      <span class="chevron">›</span>
    </button>
    <ul class="nav-submenu">
      <li><a href="#" class="nav-sublink">Sub Item</a></li>
    </ul>
  </div>

  <!-- A single, direct navigation item -->
  <div class="nav-item">
    <a href="#" class="nav-button">
      <span>Nav Item Two</span>
    </a>
  </div>
</ag-sidebar>
```

**Rationale for this change**:
1.  **Direct Style Control**: Eliminates the struggle of overriding `ag-accordion` styles via `::part`.
2.  **Guaranteed Consistency**: Ensures all items (single, with sub-menu, sub-item links) have consistent height, padding, and hover effects.
3.  **Simplicity**: A single component is easier to understand, maintain, and use. The API is simpler for the consumer.

---

## Props & Attributes

Props remain largely the same, focusing on state, position, and responsiveness.

| Prop | Type | Default | Description |
|---|---|---|---|
| `open` | `boolean` | `false` | Controls sidebar visibility on mobile (below breakpoint). |
| `collapsed` | `boolean` | `false` | Controls collapsed/rail state on desktop. |
| `position` | `'left' \| 'right'` | `'left'` | Sidebar position on the screen. |
| `aria-label` | `string` | `'Navigation'` | Accessible label for the `<nav>` landmark. |
| `breakpoint` | `number` | `1024` | Pixel width below which mobile overlay behavior activates. |
| `variant` | `'default' \| 'bordered' \| 'elevated'` | `'default'` | Visual style variant. |
| `no-transition`| `boolean` | `false` | Disables all animations. |

---

## Events

Custom events remain the same.

| Event | Detail | Description |
|---|---|---|
| `sidebar-toggle` | `{ open: boolean }` | Fired when the mobile drawer opens or closes. |
| `sidebar-collapse` | `{ collapsed: boolean }` | Fired when the desktop rail mode is toggled. |
| `sidebar-breakpoint-change`| `{ isMobile: boolean, breakpoint: number }` | Fired when the viewport crosses the breakpoint. |

---

## Responsive Behavior

The responsive strategy is unchanged. The component automatically adapts between a persistent sidebar on desktop and an overlay drawer on mobile based on the `breakpoint` prop. The `open` prop controls the mobile drawer, and the `collapsed` prop controls the desktop rail mode.

---

## Slots & CSS Shadow Parts

### Slots

| Slot | Description |
|---|---|
| `default` | Main navigation content (a list of `.nav-item` divs). |
| `header` | Optional header content (logo, title, search). |
| `footer` | Optional footer content (user profile, settings). |

### CSS Shadow Parts

The component will expose the following parts for styling:

| Part | Element | Description |
|---|---|---|
| `ag-sidebar-container` | `<aside>` | The main sidebar container. |
| `ag-sidebar-header` | `<div>` | The wrapper for the `header` slot. |
| `ag-sidebar-content` | `<div>` | The scrollable wrapper for the default slot. |
| `ag-sidebar-footer` | `<div>` | The wrapper for the `footer` slot. |
| `ag-sidebar-backdrop` | `<div>` | The overlay backdrop for mobile view. |

**Note**: Navigation items (`.nav-item`, `.nav-button`, `.nav-submenu`, etc.) are styled directly in the Light DOM, as they are provided by the consumer in the default slot.

---

## Token System

The token system remains unchanged, providing customizable CSS variables for colors, spacing, and other design properties.

---

## Keyboard Interactions

-   **Focus Management**: `Tab` and `Shift+Tab` move focus between all interactive elements (buttons, links).
-   **Sub-menu Toggling**: `Enter` or `Space` on a `.nav-button` with a sub-menu will toggle its `aria-expanded` state and visibility.
-   **Mobile Drawer**: `Escape` closes the drawer on mobile.

---

## Implementation Guidelines

The implementation will follow the "first principles" static HTML prototype.

1.  **Structure**: The `render` method will create the `aside > header, content, footer` structure.
2.  **Styles**: The CSS from the prototype will be adapted into the `static styles` block, using CSS tokens where appropriate.
3.  **Sub-menu Logic**: A `private` method like `_handleSubmenuToggle` will be created. It will be attached to click events on slotted `.nav-button` elements that have sub-menus. This will be achieved via event delegation on the default slot.

    ```typescript
    private _handleSlotClick(event: Event) {
      const target = event.target as HTMLElement;
      const button = target.closest('.nav-button');
      
      if (button && button.hasAttribute('aria-expanded')) {
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', String(!isExpanded));
        
        const submenu = button.nextElementSibling;
        if (submenu && submenu.classList.contains('nav-submenu')) {
          submenu.classList.toggle('open');
        }
      }
    }
    
    // In render():
    html`<div class="sidebar-content" @click=${this._handleSlotClick}>
      <slot></slot>
    </div>`
    ```
4. **Item Consistency**: CSS will ensure `.nav-item` and `.nav-button` have consistent height and hover states, providing a seamless user experience.

---

## Examples & Use Cases

### Example: Sidebar with Sub-menus

```html
<ag-sidebar aria-label="Main navigation">
  <div slot="header">
    <h2>My App</h2>
  </div>

  <ul class="nav-menu">
    <li class="nav-item">
      <button class="nav-button" aria-expanded="false">
        <ag-icon name="folder"></ag-icon>
        <span class="nav-label">Projects</span>
        <span class="chevron">›</span>
      </button>
      <ul class="nav-submenu">
        <li class="nav-subitem"><a href="#" class="nav-sublink">Project Alpha</a></li>
        <li class="nav-subitem"><a href="#" class="nav-sublink">Project Beta</a></li>
      </ul>
    </li>
    <li class="nav-item">
      <a href="/dashboard" class="nav-button active" aria-current="page">
        <ag-icon name="dashboard"></ag-icon>
        <span class="nav-label">Dashboard</span>
      </a>
    </li>
  </ul>

  <div slot="footer">
    <!-- User profile info -->
  </div>
</ag-sidebar>
```

**Styling in Collapsed Mode**:
The component's internal CSS will handle hiding `.nav-label`, `.chevron`, and centering the `ag-icon` when `[collapsed]` is true, using the same visually-hidden technique.
```css
ag-sidebar[collapsed] .nav-label,
ag-sidebar[collapsed] .chevron {
  /* Visually-hidden CSS */
}
ag-sidebar[collapsed] .nav-button {
  justify-content: center;
}
```

---

## Testing Requirements

Testing requirements will be updated to match the new architecture, focusing on:
- Correct rendering of slotted nav items and sub-menus.
- Sub-menu toggling via click and keyboard.
- Correct `aria-expanded` state changes.
- Consistent styling in both expanded and collapsed modes.

---

## Design Decisions

- ✅ **Self-Contained Sub-menus**: The `Sidebar` is now fully responsible for its sub-menu functionality.
- ✅ **Composition with `ag-accordion`**: **REJECTED**. The new architecture avoids this.
- ✅ **One Level of Nesting**: The design strictly supports a single level of sub-menus.

**Next Steps**:
1.  Approve this revised PRD.
2.  Refactor `_Sidebar.ts` to implement the new architecture.
3.  Rewrite tests and Storybook stories to match.
