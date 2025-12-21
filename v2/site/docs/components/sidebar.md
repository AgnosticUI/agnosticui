# Sidebar

<AlphaWarning />


A collapsible sidebar component for navigation with support for expanded/collapsed states, nested navigation, submenus, and responsive behavior. The Sidebar adapts seamlessly across desktop and mobile viewports with optional rail mode (icon-only) on desktop and overlay mode on mobile.

## Examples

<SidebarExamples />

<script setup>
import AlphaWarning from '../components/AlphaWarning.vue'
import SidebarExamples from '../examples/SidebarExamples.vue'
</script>

## Usage

::: tip
The framework examples below `import` AgnosticUI as an `npm` package. Alternatively, you can use the **CLI for complete control, AI/LLM visibility, and full code ownership**:
```bash
npx ag init --framework FRAMEWORK # react, vue, lit, svelte, etc.
npx ag add Sidebar
```
The CLI copies source code directly into your project, giving you full visibility and control. After running `npx ag add`, you'll receive exact import instructions.
:::

::: details Vue
```vue
<template>
  <div style="display: flex; height: 100vh;">
    <VueSidebar
      :open="isOpen"
      :collapsed="isCollapsed"
      :show-mobile-toggle="true"
      @update:open="isOpen = $event"
      @update:collapsed="isCollapsed = $event"
    >
      <h2 slot="ag-header-start" style="margin: 0; font-size: 1.125rem; font-weight: 600;">
        Dashboard
      </h2>
      <button
        type="button"
        slot="ag-header-toggle"
        @click="toggleCollapse"
        style="background: none; border: none; padding: 8px 0; cursor: pointer;"
        aria-label="Toggle sidebar"
      >
        <PanelIcon />
      </button>

      <VueSidebarNav>
        <VueSidebarNavItem>
          <button type="button" class="nav-button active" aria-current="page">
            <Home :size="20" />
            <span class="nav-label">Dashboard</span>
          </button>
        </VueSidebarNavItem>

        <VueSidebarNavItem>
          <!-- Button for expanded mode with rotating chevron -->
          <button
            type="button"
            class="nav-button nav-button-expanded"
            aria-expanded="false"
            @click="handleSubmenuToggle"
          >
            <Folder :size="20" />
            <span class="nav-label">Projects</span>
            <span class="chevron"><ChevronRight :size="16" /></span>
          </button>

          <!-- Popover for collapsed mode - shows when sidebar is collapsed -->
          <VuePopover
            class="nav-button-collapsed"
            placement="right-start"
            trigger-type="click"
            :distance="8"
            :arrow="true"
          >
            <button slot="trigger" type="button" class="nav-button" aria-expanded="false">
              <Folder :size="20" />
              <span class="nav-label">Projects</span>
              <span class="collapsed-indicator">
                <svg viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 3l2 2 2-2" stroke="currentColor" stroke-width="1" stroke-linecap="round"/>
                </svg>
              </span>
            </button>
            <VueSidebarNavPopoverSubmenu slot="content" class="nav-popover-submenu">
              <a href="#" class="nav-sublink">Project Alpha</a>
              <a href="#" class="nav-sublink">Project Beta</a>
            </VueSidebarNavPopoverSubmenu>
          </VuePopover>

          <!-- Inline submenu for expanded mode -->
          <VueSidebarNavSubmenu>
            <a class="nav-sublink" href="#">Project Alpha</a>
            <a class="nav-sublink" href="#">Project Beta</a>
          </VueSidebarNavSubmenu>
        </VueSidebarNavItem>
      </VueSidebarNav>

      <div slot="ag-footer" style="font-size: 0.875rem; color: #6b7280;">
        © 2024 Company
      </div>
    </VueSidebar>

    <main style="flex: 1; padding: 2rem;">
      <h1>Main Content</h1>
    </main>
  </div>
</template>

<script>
import VueSidebar from "agnosticui-core/sidebar/vue";
import {
  VueSidebarNav,
  VueSidebarNavItem,
  VueSidebarNavSubmenu,
  VueSidebarNavPopoverSubmenu,
} from "agnosticui-core/sidebar-nav/vue";
import { VuePopover } from "agnosticui-core/popover/vue";
import { Home, Folder, ChevronRight } from "lucide-vue-next";

export default {
  components: {
    VueSidebar,
    VueSidebarNav,
    VueSidebarNavItem,
    VueSidebarNavSubmenu,
    VueSidebarNavPopoverSubmenu,
    VuePopover,
    Home,
    Folder,
    ChevronRight,
  },
  data() {
    return {
      isOpen: true,
      isCollapsed: false,
    };
  },
  methods: {
    toggleCollapse() {
      // Access the sidebar element to call toggleCollapse
      const sidebar = this.$el.querySelector('ag-sidebar');
      if (sidebar && sidebar.toggleCollapse) {
        sidebar.toggleCollapse();
      }
    },
    handleSubmenuToggle(e) {
      const button = e.currentTarget;
      const navItem = button.closest("ag-sidebar-nav-item");
      const submenu = navItem?.querySelector("ag-sidebar-nav-submenu");

      if (!submenu) return;

      const isExpanded = button.getAttribute("aria-expanded") === "true";

      if (isExpanded) {
        button.setAttribute("aria-expanded", "false");
        submenu.removeAttribute("open");
      } else {
        button.setAttribute("aria-expanded", "true");
        submenu.setAttribute("open", "");
      }
    },
  },
};
</script>
```
:::

::: details React
```tsx
import { useState } from 'react';
import { ReactSidebar } from 'agnosticui-core/sidebar/react';
import {
  ReactSidebarNav,
  ReactSidebarNavItem,
  ReactSidebarNavSubmenu,
  ReactSidebarNavPopoverSubmenu,
} from 'agnosticui-core/sidebar-nav/react';
import { ReactPopover } from 'agnosticui-core/popover/react';
import { Home, Folder, ChevronRight } from 'lucide-react';

export default function SidebarExample() {
  const [isOpen, setIsOpen] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleSubmenuToggle = (e) => {
    const button = e.currentTarget;
    const navItem = button.closest("ag-sidebar-nav-item");
    const submenu = navItem?.querySelector("ag-sidebar-nav-submenu");

    if (!submenu) return;

    const isExpanded = button.getAttribute("aria-expanded") === "true";

    if (isExpanded) {
      button.setAttribute("aria-expanded", "false");
      submenu.removeAttribute("open");
    } else {
      button.setAttribute("aria-expanded", "true");
      submenu.setAttribute("open", "");
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <ReactSidebar
        open={isOpen}
        collapsed={isCollapsed}
        showMobileToggle={true}
        onToggle={(open) => setIsOpen(open)}
        onCollapse={(collapsed) => setIsCollapsed(collapsed)}
      >
        <h2 slot="ag-header-start" style={{ margin: 0, fontSize: '1.125rem', fontWeight: 600 }}>
          Dashboard
        </h2>

        <ReactSidebarNav>
          <ReactSidebarNavItem>
            <button type="button" className="nav-button active" aria-current="page">
              <Home size={20} />
              <span className="nav-label">Dashboard</span>
            </button>
          </ReactSidebarNavItem>

          <ReactSidebarNavItem>
            {/* Button for expanded mode with rotating chevron */}
            <button
              type="button"
              className="nav-button nav-button-expanded"
              aria-expanded="false"
              onClick={handleSubmenuToggle}
            >
              <Folder size={20} />
              <span className="nav-label">Projects</span>
              <span className="chevron"><ChevronRight size={16} /></span>
            </button>

            {/* Popover for collapsed mode - shows when sidebar is collapsed */}
            <ReactPopover
              className="nav-button-collapsed"
              placement="right-start"
              triggerType="click"
              distance={8}
              arrow={true}
            >
              <button slot="trigger" type="button" className="nav-button" aria-expanded="false">
                <Folder size={20} />
                <span className="nav-label">Projects</span>
                <span className="collapsed-indicator">
                  <svg viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 3l2 2 2-2" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                  </svg>
                </span>
              </button>
              <ReactSidebarNavPopoverSubmenu slot="content" className="nav-popover-submenu">
                <a href="#project-alpha" className="nav-sublink">Project Alpha</a>
                <a href="#project-beta" className="nav-sublink">Project Beta</a>
              </ReactSidebarNavPopoverSubmenu>
            </ReactPopover>

            {/* Inline submenu for expanded mode */}
            <ReactSidebarNavSubmenu>
              <a className="nav-sublink" href="#">Project Alpha</a>
              <a className="nav-sublink" href="#">Project Beta</a>
            </ReactSidebarNavSubmenu>
          </ReactSidebarNavItem>
        </ReactSidebarNav>

        <div slot="ag-footer" style={{ fontSize: '0.875rem', color: 'var(--ag-text-secondary)' }}>
          © 2024 Company
        </div>
      </ReactSidebar>

      <main style={{ flex: 1, padding: '2rem' }}>
        <h1>Main Content</h1>
      </main>
    </div>
  );
}
```
:::

::: details Lit (Web Components)
```typescript
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import 'agnosticui-core/sidebar';
import 'agnosticui-core/sidebar-nav';
import 'agnosticui-core/popover';

@customElement('sidebar-example')
export class SidebarExample extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
  `;

  firstUpdated() {
    // Set up event listeners for submenu toggles in the shadow DOM
    const buttons = this.shadowRoot?.querySelectorAll('.nav-button-expanded');
    buttons?.forEach((button) => {
      button.addEventListener('click', (e: Event) => {
        const navItem = (e.currentTarget as HTMLElement).closest('ag-sidebar-nav-item');
        const submenu = navItem?.querySelector('ag-sidebar-nav-submenu');

        if (!submenu) return;

        const isExpanded = button.getAttribute('aria-expanded') === 'true';

        if (isExpanded) {
          button.setAttribute('aria-expanded', 'false');
          submenu.removeAttribute('open');
        } else {
          button.setAttribute('aria-expanded', 'true');
          submenu.setAttribute('open', '');
        }
      });
    });
  }

  render() {
    return html`
      <div style="display: flex; height: 100vh;">
        <ag-sidebar
          id="sidebar"
          show-mobile-toggle
        >
          <h2 slot="ag-header-start" style="margin: 0; font-size: 1.125rem; font-weight: 600;">
            Dashboard
          </h2>

          <ag-sidebar-nav>
            <ag-sidebar-nav-item>
              <button type="button" class="nav-button active" aria-current="page">
                <svg><!-- Home icon --></svg>
                <span class="nav-label">Dashboard</span>
              </button>
            </ag-sidebar-nav-item>

            <ag-sidebar-nav-item>
              <!-- Button for expanded mode with rotating chevron -->
              <button
                type="button"
                class="nav-button nav-button-expanded"
                aria-expanded="false"
              >
                <svg><!-- Folder icon --></svg>
                <span class="nav-label">Projects</span>
                <span class="chevron"><!-- ChevronRight icon --></span>
              </button>

              <!-- Popover for collapsed mode - shows when sidebar is collapsed -->
              <ag-popover
                class="nav-button-collapsed"
                placement="right-start"
                trigger-type="click"
                distance="8"
                arrow
              >
                <button slot="trigger" type="button" class="nav-button" aria-expanded="false">
                  <svg><!-- Folder icon --></svg>
                  <span class="nav-label">Projects</span>
                  <span class="collapsed-indicator">
                    <svg viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 3l2 2 2-2" stroke="currentColor" stroke-width="1" stroke-linecap="round"/>
                    </svg>
                  </span>
                </button>
                <ag-sidebar-nav-popover-submenu slot="content" class="nav-popover-submenu">
                  <a class="nav-sublink" href="#">Project Alpha</a>
                  <a class="nav-sublink" href="#">Project Beta</a>
                </ag-sidebar-nav-popover-submenu>
              </ag-popover>

              <!-- Inline submenu for expanded mode -->
              <ag-sidebar-nav-submenu>
                <a class="nav-sublink" href="#">Project Alpha</a>
                <a class="nav-sublink" href="#">Project Beta</a>
              </ag-sidebar-nav-submenu>
            </ag-sidebar-nav-item>
          </ag-sidebar-nav>

          <div slot="ag-footer" style="font-size: 0.875rem; color: var(--ag-text-secondary);">
            © 2024 Company
          </div>
        </ag-sidebar>

        <main style="flex: 1; padding: 2rem;">
          <h1>Main Content</h1>
        </main>
      </div>
    `;
  }
}
```

**Note:** When using sidebar components within a custom element's shadow DOM, set up event listeners in the component's lifecycle (e.g., `firstUpdated()`) rather than using `DOMContentLoaded`, as `document.querySelector()` cannot access elements inside shadow DOM. Use `this.shadowRoot.querySelector()` instead.
:::

## Props

### Sidebar Component

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | `false` | Controls sidebar visibility on mobile |
| `collapsed` | `boolean` | `false` | Controls collapsed/rail state (icon-only) on desktop |
| `position` | `'left' \| 'right'` | `'left'` | Position of the sidebar |
| `ariaLabel` | `string` | `'Navigation'` | ARIA label for the sidebar |
| `variant` | `'default' \| 'bordered' \| 'elevated'` | `'default'` | Visual variant of the sidebar |
| `noTransition` | `boolean` | `false` | Disable transitions |
| `width` | `string` | - | Custom width for the sidebar (e.g., '300px') |
| `disableCompactMode` | `boolean` | `false` | Disable compact/rail mode (sidebar is either full-width or hidden) |
| `showMobileToggle` | `boolean` | `false` | Show the mobile toggle button |
| `mobileTogglePosition` | `'top-left' \| 'top-right' \| 'bottom-left' \| 'bottom-right'` | `'top-left'` | Position of the mobile toggle button |
| `showHeaderToggle` | `boolean` | `false` | Show the built-in header toggle button |

### Navigation Components

The Sidebar uses companion components for navigation:
- `VueSidebarNav` / `ReactSidebarNav` / `ag-sidebar-nav` - Container for navigation items
- `VueSidebarNavItem` / `ReactSidebarNavItem` / `ag-sidebar-nav-item` - Individual navigation item wrapper
- `VueSidebarNavSubmenu` / `ReactSidebarNavSubmenu` / `ag-sidebar-nav-submenu` - Inline submenu for expanded mode
- `VueSidebarNavPopoverSubmenu` / `ReactSidebarNavPopoverSubmenu` / `ag-sidebar-nav-popover-submenu` - Popover submenu for collapsed mode

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `@update:open` (Vue) / `onToggle` (React) / `toggle` (Lit) | `boolean` | Emitted when the sidebar open state changes |
| `@update:collapsed` (Vue) / `onCollapse` (React) / `collapse` (Lit) | `boolean` | Emitted when the sidebar collapsed state changes |

## Slots

### Vue
- **slot="ag-header-start"**: Left-aligned header content (logo or title)
- **slot="ag-header-end"**: Right-aligned header content (actions, before toggle)
- **slot="ag-header-toggle"**: Custom collapse toggle button (always rightmost)
- **slot="ag-header"**: Monolithic header slot (legacy, for full custom header)
- **Default slot**: Main content area for navigation
- **slot="ag-footer"**: Footer content

### React
- **slot="ag-header-start"**: Left-aligned header content
- **slot="ag-header-end"**: Right-aligned header content
- **slot="ag-header-toggle"**: Custom collapse toggle button
- **slot="ag-header"**: Monolithic header slot (legacy)
- **children**: Main content area for navigation
- **slot="ag-footer"**: Footer content

### Lit
- **slot="ag-header-start"**: Left-aligned header content
- **slot="ag-header-end"**: Right-aligned header content
- **slot="ag-header-toggle"**: Custom collapse toggle button
- **slot="ag-header"**: Monolithic header slot (legacy)
- **Default slot**: Main content area for navigation
- **slot="ag-footer"**: Footer content

## Methods

| Method | Description |
|--------|-------------|
| `toggleCollapse()` | Toggles the collapsed state of the sidebar |
| `toggleResponsive()` | Toggles the responsive open/close state (used with `disableCompactMode`) |

## Accessibility

The Sidebar component follows accessibility best practices:

- Uses semantic HTML with proper ARIA attributes
- Implements `role="navigation"` with customizable `aria-label`
- Supports keyboard navigation with **Tab** and **Shift+Tab**
- Active navigation items use `aria-current="page"` for screen readers
- Submenu buttons use `aria-expanded` to indicate state
- Focus management for smooth keyboard navigation
- Mobile overlay includes backdrop for visual separation
- Toggle buttons have proper `aria-label` attributes
- Collapsed state indicators are handled with appropriate ARIA attributes

### Best Practices

- Always provide an `ariaLabel` to identify the sidebar navigation purpose
- Use `aria-current="page"` on the active navigation item
- Ensure submenu buttons have `aria-expanded` attribute
- Provide clear visual indicators for active states
- Use the `.nav-label` class on text content that should hide in collapsed mode
- Structure navigation buttons with flexbox for proper icon/label layout
- Include both inline and popover versions of submenus for responsive behavior
- Test keyboard navigation flow through all items
- Ensure mobile toggle is easily accessible (consider thumb zones)

## Use Cases

### Expanded/Collapsed Mode (Default)
The sidebar can toggle between full-width (expanded) and icon-only (rail/collapsed) modes on desktop. On mobile, it becomes an overlay that can be opened/closed.

**Use for:**
- Dashboard applications with complex navigation
- Admin panels with multiple sections
- Documentation sites with nested navigation

### Disable Compact Mode
With `disableCompactMode`, the sidebar has no intermediate collapsed state—it's either fully open or completely hidden. This matches patterns like Claude AI Studio.

**Use for:**
- Applications where icon-only mode isn't needed
- Simpler navigation structures
- Mobile-first applications

### Header Patterns

**Composable Header** (`ag-header-start`, `ag-header-end`, `ag-header-toggle`):
- Logo/title on the left
- Actions (settings, notifications) in the middle
- Toggle button on the right

**Monolithic Header** (`ag-header`):
- Full control over header layout
- Logo-as-toggle pattern
- Custom header interactions

**Built-in Toggle** (`show-header-toggle`):
- Automatic toggle button
- No custom header slot needed
- Consistent behavior

### Navigation Patterns

**Simple Navigation**: Single-level menu with icons and labels

**Nested Navigation**: Submenus that expand inline when sidebar is expanded, and show in popovers when collapsed

**Active Item Tracking**: Visual indication of current page with styling and `aria-current`

## Styling Navigation

The Sidebar component provides the structure, but navigation button styling is typically handled in your application CSS (global light DOM styles). Here's the complete CSS required for a fully functional sidebar with all features:

```css
/* CRITICAL: Sidebar component width - must be defined! */
ag-sidebar {
  /* Expanded width */
  width: 260px;
  transition: width 0.3s ease;
  overflow: visible; /* Allow popovers to show outside */
}

ag-sidebar[collapsed] {
  /* Collapsed width - icon only */
  width: 64px;
}

/* Navigation button base styles */
.nav-button {
  display: flex;
  align-items: center;
  gap: var(--ag-space-3);
  position: relative; /* Required for collapsed-indicator positioning */
  padding: var(--ag-space-2) var(--ag-space-3);
  border: none;
  background: none;
  cursor: pointer;
  width: 100%;
  text-align: left;
  border-radius: var(--ag-radius-md);
  transition: all var(--ag-fx-duration-sm);
  color: var(--ag-text-primary);
  font-size: var(--ag-font-size-base);
}

.nav-button:hover {
  background: var(--ag-background-secondary);
}

.nav-button.active {
  background: var(--ag-primary);
  color: white;
  font-weight: 500;
}

.nav-label {
  flex-grow: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: opacity var(--ag-fx-duration-sm);
}

/* Chevron rotation for expanded submenus */
.chevron {
  display: flex;
  align-items: center;
  transition: transform var(--ag-fx-duration-md), opacity var(--ag-fx-duration-sm);
  margin-left: auto;
}

.nav-button[aria-expanded="true"] .chevron {
  transform: rotate(90deg);
}

/* Collapsed indicator - small triangle at 4:30 position */
.collapsed-indicator {
  display: none;
  position: absolute;
  bottom: -1px;
  right: -1px;
  width: var(--ag-space-3);
  height: var(--ag-space-3);
}

.collapsed-indicator svg {
  color: var(--ag-text-secondary);
  transform: rotate(315deg);
}

/* Show collapsed indicator in collapsed mode for buttons with submenus */
ag-sidebar[collapsed] .nav-button[aria-expanded] .collapsed-indicator {
  display: block;
}

/* CRITICAL: Properly handle collapsed state */
ag-sidebar[collapsed] .nav-label,
ag-sidebar[collapsed] .chevron {
  opacity: 0;
  width: 0;
  overflow: hidden;
}

/* Center icons in collapsed mode */
ag-sidebar[collapsed] .nav-button {
  justify-content: center;
  padding: var(--ag-space-2);
  gap: 0;
}

/* Visibility rules for expanded vs collapsed mode */
ag-sidebar[collapsed] ag-sidebar-nav-submenu:not(.popover-submenu),
ag-sidebar:not([collapsed]) ag-popover,
ag-sidebar[collapsed] .nav-button-expanded,
ag-sidebar:not([collapsed]) .nav-button-collapsed {
  display: none !important;
}

/* Fix popover centering in collapsed mode */
ag-sidebar[collapsed] ag-popover.nav-button-collapsed {
  display: block !important;
}

/* CRITICAL: Submenu visibility - hidden by default, visible when open */
ag-sidebar-nav-submenu {
  display: none;
  overflow: hidden;
}

ag-sidebar-nav-submenu[open] {
  display: block;
}

/* Submenu link styles */
.nav-sublink {
  display: block;
  padding: var(--ag-space-2) var(--ag-space-3);
  padding-left: var(--ag-space-8);
  color: var(--ag-text-secondary);
  text-decoration: none;
  border-radius: var(--ag-radius-md);
  transition: background var(--ag-fx-duration-sm);
}

.nav-sublink:hover {
  background: var(--ag-background-secondary);
  color: var(--ag-text-primary);
}

/* Popover submenu styles */
.nav-popover-submenu .nav-sublink {
  padding-left: var(--ag-space-3);
}

/* Popover content padding for nav popovers in collapsed mode */
.nav-button-collapsed::part(ag-popover-body) {
  padding: var(--ag-space-1);
}

/* Hide popover header for nav popovers */
.nav-button-collapsed::part(ag-popover-header) {
  display: none;
}
```

### Collapsed Indicator Markup

When using popovers for collapsed mode submenus, add the collapsed indicator inside the trigger button:

```html
<button slot="trigger" type="button" class="nav-button" aria-expanded="false">
  <FolderIcon />
  <span class="nav-label">Projects</span>
  <span class="collapsed-indicator">
    <svg viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 3l2 2 2-2" stroke="currentColor" stroke-width="1" stroke-linecap="round"/>
    </svg>
  </span>
</button>
```

This small triangular indicator appears at the bottom-right corner (4:30 clock position) when the sidebar is collapsed, helping users identify which navigation items have submenus.
