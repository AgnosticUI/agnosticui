import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { createElement, ChevronRight, Folder, User, Settings, Home, Command } from 'lucide';
import { type AgSidebarProps } from 'agnosticui-core/sidebar';

import 'agnosticui-core/sidebar-nav';
import 'agnosticui-core/icon';
import 'agnosticui-core/visually-hidden';
import 'agnosticui-core/popover';

const meta: Meta<AgSidebarProps> = {
  title: 'AgnosticUI Lit/Sidebar',
  component: 'ag-sidebar',
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Controls sidebar visibility on mobile',
    },
    collapsed: {
      control: 'boolean',
      description: 'Controls collapsed/rail state (icon-only) on desktop',
    },
    position: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Sidebar position on the screen',
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessible label for the navigation landmark',
    },
    variant: {
      control: 'select',
      options: ['default', 'bordered', 'elevated'],
      description: 'Visual style variant',
    },
    noTransition: {
      control: 'boolean',
      description: 'Disable animations (respects prefers-reduced-motion)',
    },
    width: {
      control: 'text',
      description: 'Custom width (sets CSS variable)',
    },
    disableCompactMode: {
      control: 'boolean',
      description: 'Disable compact/rail mode. Sidebar is either full-width or hidden (AI Studio pattern)',
    },
    showMobileToggle: {
      control: 'boolean',
      description: 'Show built-in floating toggle button on mobile',
    },
    mobileTogglePosition: {
      control: 'select',
      options: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
      description: 'Position of mobile toggle button',
    },
    showHeaderToggle: {
      control: 'boolean',
      description: 'Show built-in collapse toggle in header',
    },
  },
  args: {
    open: false,
    collapsed: false,
    position: 'left',
    ariaLabel: 'Main navigation',
    variant: 'default',
    noTransition: false,
    showMobileToggle: true,
    mobileTogglePosition: 'top-left',
    showHeaderToggle: false,
  },
};

export default meta;
type Story = StoryObj<AgSidebarProps>;

// Custom panel icon component
const PanelIcon = () => html`
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.7314 1.00488C16.109 1.11926 18 2.98393 18 5.2666V12.7334C18 15.0898 15.9853 17 13.5 17H4.5C2.09247 17 0.126505 15.2074 0.00585938 12.9531L0 12.7334V5.2666C3.72355e-05 2.91022 2.01474 1 4.5 1H13.5L13.7314 1.00488ZM4.5 2.33301C2.79139 2.33301 1.40629 3.6466 1.40625 5.2666V12.7334C1.40629 14.3534 2.79139 15.667 4.5 15.667H4.625V2.33301H4.5ZM6.03125 15.667H13.5C15.2086 15.667 16.5937 14.3534 16.5938 12.7334V5.2666C16.5937 3.6466 15.2086 2.33301 13.5 2.33301H6.03125V15.667Z" fill="currentColor"/>
  </svg>
`;

const createNavContent = () => {
  // Define the toggle handler outside the template for better debugging
  const handleSubmenuToggle = (e: Event) => {
    e.preventDefault();
    e.stopPropagation();

    const button = e.currentTarget as HTMLElement;
    const navItem = button.closest('ag-sidebar-nav-item');
    const submenu = navItem?.querySelector('ag-sidebar-nav-submenu') as HTMLElement;

    if (!submenu) {
      console.warn('No submenu found');
      return;
    }

    // Check current state - be explicit about string comparison
    const currentAriaExpanded = button.getAttribute('aria-expanded');
    const isCurrentlyExpanded = currentAriaExpanded === 'true';

    // Toggle to opposite state
    if (isCurrentlyExpanded) {
      // Currently expanded, so collapse it
      button.setAttribute('aria-expanded', 'false');
      submenu.removeAttribute('open');
      console.log('→ Collapsing submenu');
    } else {
      // Currently collapsed, so expand it
      button.setAttribute('aria-expanded', 'true');
      submenu.setAttribute('open', '');
      console.log('→ Expanding submenu');
    }
  };

  return html`
    <style>
      .nav-button ag-icon {
        flex-shrink: 0;
      }

      .nav-button .chevron {
        transition: transform var(--ag-fx-duration-md);
      }
      .nav-button[aria-expanded="true"] .chevron ag-icon {
        transform: rotate(90deg);
      }

      /* Collapsed state indicator - small corner arrow */
      .nav-button .collapsed-indicator {
        display: none;
        position: absolute;
        bottom: -3px;
        right: 0px;
        width: var(--ag-space-3);
        height: var(--ag-space-3);
      }
      
      .nav-button .collapsed-indicator svg {
        color: var(--ag-text-muted);
        transform: rotate(315deg)
      }

      /* Collapsed state (rail mode) styles */
      ag-sidebar[collapsed] .nav-button {
        padding-inline: var(--ag-space-2);
      }
      
      .nav-button .nav-label {
        flex-grow: 1;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .nav-button .nav-label,
      .nav-button .chevron {
        transition: opacity var(--ag-sidebar-transition-duration) var(--ag-sidebar-transition-easing);
        white-space: nowrap;
      }
      
      ag-sidebar[collapsed] .nav-button .nav-label,
      ag-sidebar[collapsed] .nav-button .chevron {
        opacity: 0;
        pointer-events: none;
        display: none;
      }
      
      /* Show indicator for submenus when collapsed */
      ag-sidebar[collapsed] .nav-button[aria-expanded] .collapsed-indicator {
        display: block;
      }

      .nav-button-collapsed::part(ag-popover-body) {
        padding: var(--ag-space-1);
      }

      /* Hide inline submenus in collapsed mode */
      ag-sidebar[collapsed] ag-sidebar-nav-submenu:not(.popover-submenu) {
        display: none !important;
      }

      /* Completely hide popover element when not collapsed */
      ag-sidebar:not([collapsed]) ag-popover {
        display: none !important;
      }

      /* Show the collapsed-mode button only when collapsed */
      ag-sidebar[collapsed] .nav-button-expanded {
        display: none !important;
      }

      /* Show the expanded-mode button only when not collapsed */
      ag-sidebar:not([collapsed]) .nav-button-collapsed {
        display: none !important;
      }
    </style>
    <ag-sidebar-nav>
      <ag-sidebar-nav-item>
        <button class="nav-button active" aria-current="page">
          <ag-icon no-fill>${createElement(Home)}</ag-icon>
          <span class="nav-label">Dashboard</span>
        </button>
      </ag-sidebar-nav-item>

      <!-- Projects with submenu - FIXED TOGGLE LOGIC -->
      <ag-sidebar-nav-item>
        <!-- Button for EXPANDED mode -->
        <button
          class="nav-button nav-button-expanded"
          aria-expanded="false"
          @click=${handleSubmenuToggle}
        >
          <ag-icon no-fill>${createElement(Folder)}</ag-icon>
          <span class="nav-label">Projects</span>
          <span class="chevron"><ag-icon no-fill>${createElement(ChevronRight)}</ag-icon></span>
        </button>

        <!-- Button for COLLAPSED mode (inside popover with click trigger) -->
        <ag-popover
          class="nav-button-collapsed"
          placement="right-start"
          trigger-type="click"
          distance="8"
          ?arrow=${true}
          .showHeader=${false}
        >
          <button slot="trigger" class="nav-button">
            <ag-icon no-fill>${createElement(Folder)}</ag-icon>
            <span class="nav-label">Projects</span>
            <span class="collapsed-indicator">
              <svg viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 3l2 2 2-2" stroke="currentColor" stroke-width="1" stroke-linecap="round"/>
              </svg>
            </span>
          </button>

          <ag-sidebar-nav-popover-submenu slot="content">
            <a href="#" class="nav-sublink">Project Alpha</a>
            <a href="#" class="nav-sublink">Project Beta</a>
            <a href="#" class="nav-sublink">Project Gamma</a>
          </ag-sidebar-nav-popover-submenu slot="content">
        </ag-popover>

        <!-- Inline submenu for expanded mode -->
        <ag-sidebar-nav-submenu>
          <a class="nav-sublink" href="#">Project Alpha</a></div>
          <a class="nav-sublink" href="#">Project Beta</a></div>
          <a class="nav-sublink" href="#">Project Gamma</a></div>
        </ag-sidebar-nav-submenu>
      </ag-sidebar-nav-item>

      <ag-sidebar-nav-item>
        <button class="nav-button">
          <ag-icon no-fill>${createElement(User)}</ag-icon>
          <span class="nav-label">Team</span>
        </button>
      </ag-sidebar-nav-item>

      <!-- Settings with submenu - FIXED TOGGLE LOGIC -->
      <ag-sidebar-nav-item>
        <!-- Button for EXPANDED mode -->
        <button
          class="nav-button nav-button-expanded"
          aria-expanded="false"
          @click=${handleSubmenuToggle}
        >
          <ag-icon no-fill>${createElement(Settings)}</ag-icon>
          <span class="nav-label">Settings</span>
          <span class="chevron"><ag-icon no-fill>${createElement(ChevronRight)}</ag-icon></span>
        </button>

        <!-- Button for COLLAPSED mode (inside popover with click trigger) -->
        <ag-popover
          class="nav-button-collapsed"
          placement="right-start"
          trigger-type="click"
          distance="8"
          ?arrow=${true}
          .showHeader=${false}
        >
          <button slot="trigger" class="nav-button">
            <ag-icon no-fill>${createElement(Settings)}</ag-icon>
            <span class="nav-label">Settings</span>
            <span class="collapsed-indicator">
              <svg viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 3l2 2 2-2" stroke="currentColor" stroke-width="1" stroke-linecap="round"/>
              </svg>
            </span>
          </button>

          <ag-sidebar-nav-popover-submenu slot="content">
            <a href="#" class="nav-sublink">Profile</a>
            <a href="#" class="nav-sublink">Billing</a>
            <a href="#" class="nav-sublink">Security</a>
            <a href="#" class="nav-sublink">Preferences</a>
          </ag-sidebar-nav-popover-submenu>
        </ag-popover>

        <ag-sidebar-nav-submenu>
          <a class="nav-sublink" href="#">Profile</a></div>
          <a class="nav-sublink" href="#">Billing</a></div>
          <a class="nav-sublink" href="#">Security</a></div>
          <a class="nav-sublink" href="#">Preferences</a></div>
        </ag-sidebar-nav-submenu>
      </ag-sidebar-nav-item>
    </ag-sidebar-nav>
  `;
};

/**
 * Default story - uses toggleCollapse() for consistent collapse behavior
 */
export const Default: Story = {
  render: (args) => html`
    <div style="display: flex; height: 500px; border: 1px solid #e5e7eb; border-radius: 0.5rem; overflow: hidden;">
      <ag-sidebar
        ?open=${args.open}
        ?collapsed=${args.collapsed}
        .position=${args.position}
        aria-label=${args['ariaLabel']}
        .variant=${args.variant}
        ?no-transition=${args['noTransition']}
        .width=${args.width}
        ?show-mobile-toggle=${args['showMobileToggle']}
        .mobile-toggle-position=${args['mobileTogglePosition']}
      >
        <h2 slot="header-start" style="margin: 0; font-size: 1.125rem; font-weight: 600;">
          My Application
        </h2>
        <button 
          slot="header-toggle"
          @click=${(e: Event) => {
      const sidebar = (e.target as HTMLElement).closest('ag-sidebar') as any;
      sidebar?.toggleCollapse();
    }}
          style="background: none; border: none; padding: 8px 0; cursor: pointer; display: flex; align-items: center; color: inherit;"
          aria-label="Toggle sidebar"
        >
          ${PanelIcon()}
        </button>

        ${createNavContent()}
        
        <div slot="footer" style="font-size: 0.875rem; color: var(--ag-text-secondary);">
          © 2024 Company
        </div>
      </ag-sidebar>
      <main style="flex: 1; padding: 2rem; overflow: auto;">
        <h1>Composable Header Slots</h1>
        <p>This example uses <code>toggleCollapse()</code> which only toggles the collapsed state.</p>
        <ul>
          <li><code>header-start</code> - Logo/title (hidden when collapsed)</li>
          <li><code>header-toggle</code> - Custom toggle button (auto-positioned)</li>
        </ul>
        <div style="background: #dbeafe; padding: 1rem; border-radius: 0.375rem; border: 1px solid #3b82f6; margin-top: 1rem;">
          <strong>✨ New:</strong> Toggle between expanded and collapsed modes. Hover over Projects or Settings when collapsed to see submenu popovers!
        </div>
      </main>
    </div>
  `,
};

/**
 * Shows header-end slot with proper overflow handling
 */
export const WithHeaderActions: Story = {
  render: (args) => html`
    <div style="display: flex; height: 500px; border: 1px solid #e5e7eb; border-radius: 0.5rem; overflow: hidden;">
      <ag-sidebar
        ?open=${args.open}
        ?collapsed=${args.collapsed}
        ?show-mobile-toggle=${args['showMobileToggle']}
      >
        <div slot="header-start" style="display: flex; align-items: center; gap: 0.75rem; min-width: 0;">
          <div style="width: 32px; height: 32px; background: var(--ag-primary-100); color: var(--ag-primary-600); border-radius: 8px; flex-shrink: 0; display: flex; align-items: center; justify-content: center;">
            <ag-icon no-fill>${createElement(Command)}</ag-icon>
          </div>
          <h2 style="margin: 0; font-size: 1.125rem; font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">Dashboard</h2>
        </div>

        <button 
          slot="header-end"
          style="background: none; border: none; padding: 8px; cursor: pointer; display: flex; align-items: center; flex-shrink: 0;"
          aria-label="Settings"
          title="Settings"
        >
          <ag-icon no-fill>${createElement(Settings)}</ag-icon>
        </button>

        <button 
          slot="header-toggle"
          @click=${(e: Event) => {
      const sidebar = (e.target as HTMLElement).closest('ag-sidebar') as any;
      sidebar?.toggleCollapse();
    }}
          style="background: none; border: none; padding: 8px; cursor: pointer; display: flex; align-items: center;"
          aria-label="Toggle sidebar"
        >
          ${PanelIcon()}
        </button>

        ${createNavContent()}
        
        <div slot="footer" style="font-size: 0.75rem; color: var(--ag-text-secondary); text-align: center;">
          v1.0
        </div>
      </ag-sidebar>
      <main style="flex: 1; padding: 2rem; overflow: auto;">
        <h1>Header with Actions</h1>
        <p>This example shows proper overflow handling in collapsed mode.</p>
        <ul>
          <li><code>header-start</code> - Logo and title (hidden when collapsed)</li>
          <li><code>header-end</code> - Settings button (always visible, icon-only)</li>
          <li><code>header-toggle</code> - Toggle button</li>
        </ul>
        <div style="background: #dbeafe; padding: 1rem; border-radius: 0.375rem; border: 1px solid #3b82f6; margin-top: 1rem;">
          <strong>Try it:</strong> Collapse the sidebar and hover over Projects or Settings to access their submenus via popover!
        </div>
      </main>
    </div>
  `,
};

/**
 * Shows the built-in header toggle feature
 */
export const WithBuiltInToggle: Story = {
  render: (args) => html`
    <div style="display: flex; height: 500px; border: 1px solid #e5e7eb; border-radius: 0.5rem; overflow: hidden;">
      <ag-sidebar
        ?open=${args.open}
        ?collapsed=${args.collapsed}
        ?show-header-toggle=${true}
        ?show-mobile-toggle=${args['showMobileToggle']}
      >
        <h2 slot="header-start" style="margin: 0; font-size: 1.125rem; font-weight: 600;">
          Built-in Toggle
        </h2>

        ${createNavContent()}
        
        <div slot="footer" style="font-size: 0.875rem; color: var(--ag-text-secondary);">
          © 2024 Company
        </div>
      </ag-sidebar>
      <main style="flex: 1; padding: 2rem; overflow: auto;">
        <h1>Built-in Header Toggle</h1>
        <p>Using <code>show-header-toggle</code> adds a built-in collapse button automatically.</p>
        <p>The built-in toggle always uses <code>toggleCollapse()</code> internally for consistent behavior.</p>
        <p>
          <strong>Note:</strong> Built-in toggle works correctly - it always toggles collapsed state. Hover over submenu items when collapsed!
        </p>
      </main>
    </div>
  `,
};

/**
 * Legacy monolithic header slot approach - Logo as Toggle Pattern
 * This demonstrates how consumers can use slot="header" for full control,
 * enabling patterns like a logo that doubles as a toggle button.
 */
export const LegacyHeaderSlot: Story = {
  render: (args) => html`
    <style>
      .logo-toggle {
        display: flex;
        align-items: center;
        gap: var(--ag-space-3);
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;
        width: 100%;
        transition: all var(--ag-sidebar-transition-duration, 200ms);
      }
      
      .logo-toggle:hover {
        opacity: 0.8;
      }
      
      .logo-icon {
        width: 32px;
        height: 32px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-radius: 8px;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: bold;
        font-size: 1.25rem;
      }
      
      .logo-text {
        font-size: 1.125rem;
        font-weight: 600;
        white-space: nowrap;
        transition: opacity var(--ag-sidebar-transition-duration, 200ms);
      }
      
      /* Hide text when sidebar is collapsed */
      ag-sidebar[collapsed] .logo-text {
        opacity: 0;
        width: 0;
        overflow: hidden;
      }
      
      /* Center logo when collapsed */
      ag-sidebar[collapsed] .logo-toggle {
        justify-content: center;
        gap: unset;
      }
    </style>
    <div style="display: flex; height: 500px; border: 1px solid #e5e7eb; border-radius: 0.5rem; overflow: hidden;">
      <ag-sidebar
        ?open=${args.open}
        ?collapsed=${args.collapsed}
        ?show-mobile-toggle=${args['showMobileToggle']}
      >
        <button 
          slot="header" 
          class="logo-toggle"
          @click=${(e: Event) => {
      const sidebar = (e.target as HTMLElement).closest('ag-sidebar') as any;
      sidebar?.toggleCollapse();
    }}
          aria-label="Toggle sidebar"
        >
          <div class="logo-icon">A</div>
          <span class="logo-text">AgnosticUI</span>
        </button>

        ${createNavContent()}
        
        <div slot="footer" style="font-size: 0.75rem; color: var(--ag-text-secondary); text-align: center;">
          v2.0
        </div>
      </ag-sidebar>
      <main style="flex: 1; padding: 2rem; overflow: auto;">
        <h1>Logo as Toggle Pattern</h1>
        <p>This example demonstrates the <strong>logo-as-toggle pattern</strong> using the legacy <code>slot="header"</code>.</p>
        <ul>
          <li><strong>Expanded:</strong> Shows full branding (logo + text)</li>
          <li><strong>Collapsed:</strong> Shows icon-only, centered</li>
          <li><strong>Interactive:</strong> Entire header acts as toggle button</li>
        </ul>
        <p style="background: #dbeafe; padding: 1rem; border-radius: 0.375rem; border: 1px solid #3b82f6; margin-top: 1rem;">
          <strong>Why use this pattern?</strong> When you need full control over header behavior in collapsed mode, such as keeping branding visible or creating custom interactive elements.
        </p>
        <p style="background: #fef3c7; padding: 1rem; border-radius: 0.375rem; border: 1px solid #fbbf24; margin-top: 1rem;">
          <strong>Note:</strong> For simpler use cases, the composable slots approach (<code>header-start</code>, <code>header-end</code>, <code>header-toggle</code>) is recommended.
        </p>
      </main>
    </div>
  `,
};

/**
 * AI Studio Pattern - Disable Compact Mode
 */
export const DisableCompactMode: Story = {
  render: (args) => html`
    <div style="display: flex; height: 500px; border: 1px solid #e5e7eb; border-radius: 0.5rem; overflow: hidden;">
      <ag-sidebar
        disable-compact-mode
        ?open=${args.open !== undefined ? args.open : true}
        ?show-mobile-toggle=${args['showMobileToggle']}
      >
        <h2 slot="header-start" style="margin: 0; font-size: 1.125rem; font-weight: 600;">
          AI Studio
        </h2>
        <button 
          slot="header-toggle"
          @click=${(e: Event) => {
      const sidebar = (e.target as HTMLElement).closest('ag-sidebar') as any;
      sidebar?.toggleResponsive();
    }}
          style="background: none; border: none; padding: 8px 0; cursor: pointer; display: flex; align-items: center; color: inherit;"
          aria-label="Toggle sidebar"
        >
          ${createElement(Command)}
        </button>

        ${createNavContent()}
        
        <div slot="footer" style="font-size: 0.75rem; color: var(--ag-text-secondary); text-align: center;">
          v2.0
        </div>
      </ag-sidebar>
      <main style="flex: 1; padding: 2rem; overflow: auto;">
        <h1>Disable Compact Mode</h1>
        <p>This sidebar uses <code>disableCompactMode</code> to implement the AI Studio pattern.</p>
        <ul>
          <li><strong>Desktop:</strong> Sidebar is either full-width or completely hidden (no rail mode)</li>
          <li><strong>Mobile:</strong> Same behavior - overlay or hidden</li>
          <li><strong>Simpler UX:</strong> Only two states instead of three</li>
        </ul>
        <p style="background: #dbeafe; padding: 1rem; border-radius: 0.375rem; border: 1px solid #3b82f6; margin-top: 1rem;">
          <strong>Use case:</strong> When your app doesn't need the compact/rail mode and prefers a simpler toggle pattern.
        </p>
        <p style="background: #fef3c7; padding: 1rem; border-radius: 0.375rem; border: 1px solid #fbbf24; margin-top: 1rem;">
          <strong>Note:</strong> When <code>disableCompactMode</code> is true, the <code>collapsed</code> prop is ignored.
        </p>
      </main>
    </div>
  `,
};

/**
 * Active Item Tracking Example
 * Demonstrates how to handle active state for navigation items, including submenus
 */
export const WithActiveItemTracking: Story = {
  render: (args) => {
    // Simulated route state (in a real app, this would come from your router)
    let activeRoute = "/dashboard";

    const handleNavClick = (route: string) => (e: Event) => {
      e.preventDefault();
      activeRoute = route;
      console.log('Navigating to:', activeRoute);

      const sidebar = (e.target as HTMLElement).closest("ag-sidebar");

      // Update top-level nav buttons
      const buttons = sidebar?.querySelectorAll(".nav-button");
      buttons?.forEach((btn) => {
        // For parent items of submenus, we might want to keep them active if a child is active
        // But for this simple example, we'll just track exact matches
        const isActive = btn.getAttribute("data-route") === route;
        btn.classList.toggle("active", isActive);
        if (isActive) {
          btn.setAttribute("aria-current", "page");
        } else {
          btn.removeAttribute("aria-current");
        }
      });

      // Update sublinks (both inline and in popovers)
      // Note: In a real app, you might need to query popovers separately if they are ported to body
      // But here they are in the DOM tree
      const sublinks = sidebar?.querySelectorAll(".nav-sublink");
      sublinks?.forEach((link) => {
        const isActive = link.getAttribute("data-route") === route;
        link.classList.toggle("active", isActive);
        if (isActive) {
          link.setAttribute("aria-current", "page");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    };

    const handleSubmenuToggle = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
      const button = e.currentTarget as HTMLElement;
      const navItem = button.closest('ag-sidebar-nav-item');
      const submenu = navItem?.querySelector('ag-sidebar-nav-submenu') as HTMLElement;

      if (!submenu) return;

      const isCurrentlyExpanded = button.getAttribute('aria-expanded') === 'true';

      if (isCurrentlyExpanded) {
        button.setAttribute('aria-expanded', 'false');
        submenu.removeAttribute('open');
      } else {
        button.setAttribute('aria-expanded', 'true');
        submenu.setAttribute('open', '');
      }
    };

    return html`
      <div
        style="display: flex; height: 500px; border: 1px solid #e5e7eb; border-radius: 0.5rem; overflow: hidden;"
      >
        <ag-sidebar
          ?open=${args.open}
          ?collapsed=${args.collapsed}
          ?show-mobile-toggle=${args["showMobileToggle"]}
        >
          <h2
            slot="header-start"
            style="margin: 0; font-size: 1.125rem; font-weight: 600;"
          >
            Navigation
          </h2>
          <button
            slot="header-toggle"
            @click=${(e: Event) => {
        const sidebar = (e.target as HTMLElement).closest(
          "ag-sidebar"
        ) as any;
        sidebar?.toggleCollapse();
      }}
            style="background: none; border: none; padding: 8px 0; cursor: pointer; display: flex; align-items: center; color: inherit;"
            aria-label="Toggle sidebar"
          >
            ${PanelIcon()}
          </button>

          <ag-sidebar-nav>
            <ag-sidebar-nav-item>
              <button
                class="nav-button active"
                aria-current="page"
                data-route="/dashboard"
                @click=${handleNavClick("/dashboard")}
              >
                <ag-icon no-fill>${createElement(Home)}</ag-icon>
                <span class="nav-label">Dashboard</span>
              </button>
            </ag-sidebar-nav-item>

            <ag-sidebar-nav-item>
              <button
                class="nav-button"
                data-route="/projects"
                @click=${handleNavClick("/projects")}
              >
                <ag-icon no-fill>${createElement(Folder)}</ag-icon>
                <span class="nav-label">Projects</span>
              </button>
            </ag-sidebar-nav-item>

            <ag-sidebar-nav-item>
              <button
                class="nav-button"
                data-route="/team"
                @click=${handleNavClick("/team")}
              >
                <ag-icon no-fill>${createElement(User)}</ag-icon>
                <span class="nav-label">Team</span>
              </button>
            </ag-sidebar-nav-item>

            <!-- Settings with Submenu -->
            <ag-sidebar-nav-item>
              <!-- Expanded Mode Trigger -->
              <button
                class="nav-button nav-button-expanded"
                aria-expanded="false"
                @click=${handleSubmenuToggle}
              >
                <ag-icon no-fill>${createElement(Settings)}</ag-icon>
                <span class="nav-label">Settings</span>
                <span class="chevron"><ag-icon no-fill>${createElement(ChevronRight)}</ag-icon></span>
              </button>

              <!-- Collapsed Mode Trigger (Popover) -->
              <ag-popover
                class="nav-button-collapsed"
                placement="right-start"
                trigger-type="click"
                distance="8"
                ?arrow=${true}
                .showHeader=${false}
              >
                <button slot="trigger" class="nav-button">
                  <ag-icon no-fill>${createElement(Settings)}</ag-icon>
                  <span class="nav-label">Settings</span>
                  <span class="collapsed-indicator">
                    <svg viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 3l2 2 2-2" stroke="currentColor" stroke-width="1" stroke-linecap="round"/>
                    </svg>
                  </span>
                </button>

                <ag-sidebar-nav-popover-submenu slot="content">
                  <a href="#" class="nav-sublink" data-route="/settings/profile" @click=${handleNavClick("/settings/profile")}>Profile</a>
                  <a href="#" class="nav-sublink" data-route="/settings/billing" @click=${handleNavClick("/settings/billing")}>Billing</a>
                  <a href="#" class="nav-sublink" data-route="/settings/security" @click=${handleNavClick("/settings/security")}>Security</a>
                </ag-sidebar-nav-popover-submenu>
              </ag-popover>

              <!-- Inline Submenu -->
              <ag-sidebar-nav-submenu>
                <a class="nav-sublink" href="#" data-route="/settings/profile" @click=${handleNavClick("/settings/profile")}>Profile</a>
                <a class="nav-sublink" href="#" data-route="/settings/billing" @click=${handleNavClick("/settings/billing")}>Billing</a>
                <a class="nav-sublink" href="#" data-route="/settings/security" @click=${handleNavClick("/settings/security")}>Security</a>
              </ag-sidebar-nav-submenu>
            </ag-sidebar-nav-item>
          </ag-sidebar-nav>
        </ag-sidebar>

        <main style="flex: 1; padding: 2rem; overflow: auto;">
          <h1>Active Item Tracking</h1>
          <p>Click navigation items to see the active state change.</p>
          <ul>
            <li>
              <strong>Active styling:</strong> Background color and font weight
              change
            </li>
            <li>
              <strong>Submenus:</strong> Works for inline submenus and collapsed popover menus
            </li>
            <li>
              <strong>Accessibility:</strong>
              <code>aria-current="page"</code> is set on active item
            </li>
          </ul>
          <p>
            <strong>In a real app:</strong> Your router (React Router, Vue
            Router, etc.) would manage the active state. This example simulates
            that behavior with vanilla JavaScript.
          </p>
        </main>
      </div>
      <style>
        /* Active State Styles */
        .nav-button.active,
        .nav-button[aria-current="page"],
        .nav-sublink.active,
        .nav-sublink[aria-current="page"] {
          background: var(--ag-primary-background);
          color: var(--ag-primary-text);
          font-weight: 500;
        }

        /* Essential Sidebar Styles for Collapse Behavior */
        .nav-button ag-icon {
          flex-shrink: 0;
        }
        .nav-button .nav-label {
          flex-grow: 1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .nav-button .chevron {
          margin-left: auto;
          transition: transform var(--ag-fx-duration-md);
        }
        .nav-button[aria-expanded="true"] .chevron ag-icon {
          transform: rotate(90deg);
        }

        /* Collapsed state indicator - small corner arrow */
        .nav-button .collapsed-indicator {
          display: none;
          position: absolute;
          bottom: -3px;
          right: 0px;
          width: var(--ag-space-3);
          height: var(--ag-space-3);
          background: transparent;
          border-radius: 2px;
          pointer-events: none;
        }
        
        .nav-button .collapsed-indicator svg {
          width: var(--ag-space-3);
          height: var(--ag-space-3);
          color: var(--ag-text-muted);
          transform: rotate(315deg)
        }

        /* Collapsed state (rail mode) styles */
        ag-sidebar[collapsed] .nav-button {
          justify-content: center;
          padding-inline: var(--ag-space-2);
          gap: unset;
        }
        
        .nav-button .nav-label,
        .nav-button .chevron {
          will-change: opacity, transform;
          transition: opacity var(--ag-sidebar-transition-duration, 200ms) var(--ag-sidebar-transition-easing, ease-in-out),
                      transform var(--ag-sidebar-transition-duration, 200ms) var(--ag-sidebar-transition-easing, ease-in-out);
          transform-origin: left center;
        }
        
        ag-sidebar[collapsed] .nav-button .nav-label,
        ag-sidebar[collapsed] .nav-button .chevron {
          opacity: 0;
          width: 0;
          transform: scaleX(0);
          overflow: hidden;
          white-space: nowrap;
          pointer-events: none;
        }

        /* Show indicator for items with submenus when collapsed */
        ag-sidebar[collapsed] .nav-button[aria-expanded] .collapsed-indicator {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        /* Hide inline submenus in collapsed mode */
        ag-sidebar[collapsed] ag-sidebar-nav-submenu:not(.popover-submenu) {
          display: none !important;
        }

        /* Completely hide popover element when not collapsed */
        ag-sidebar:not([collapsed]) ag-popover {
          display: none !important;
        }

        /* Show the collapsed-mode button only when collapsed */
        ag-sidebar[collapsed] .nav-button-expanded {
          display: none !important;
        }

        /* Show the expanded-mode button only when not collapsed */
        ag-sidebar:not([collapsed]) .nav-button-collapsed {
          display: none !important;
        }
        
        .nav-button-collapsed::part(ag-popover-body) {
          padding: var(--ag-space-1);
        }
      </style>
    `;
  },
};
