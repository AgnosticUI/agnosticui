import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { fn } from 'storybook/test';
import { ReactSidebar, type ReactSidebarProps } from 'agnosticui-core/sidebar/react';
import {
  ReactSidebarNav,
  ReactSidebarNavItem,
  ReactSidebarNavSubmenu,
  ReactSidebarNavPopoverSubmenu,
} from 'agnosticui-core/sidebar-nav/react';
import { ReactPopover } from 'agnosticui-core/popover/react';
import { Home, Folder, User, Settings, Command, ChevronRight } from 'lucide-react';

const meta: Meta<ReactSidebarProps> = {
  title: 'AgnosticUI React/Sidebar',
  component: ReactSidebar,
  tags: ['autodocs'],
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
    onToggle: {
      action: 'toggle',
      description: 'Emitted when sidebar is toggled (mobile open/close)',
    },
    onCollapse: {
      action: 'collapse',
      description: 'Emitted when sidebar is collapsed/expanded (desktop rail mode)',
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
    onToggle: fn(),
    onCollapse: fn(),
  },
} satisfies Meta<ReactSidebarProps>;

export default meta;
type Story = StoryObj<typeof meta>;

// Custom panel icon component
const PanelIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.7314 1.00488C16.109 1.11926 18 2.98393 18 5.2666V12.7334C18 15.0898 15.9853 17 13.5 17H4.5C2.09247 17 0.126505 15.2074 0.00585938 12.9531L0 12.7334V5.2666C3.72355e-05 2.91022 2.01474 1 4.5 1H13.5L13.7314 1.00488ZM4.5 2.33301C2.79139 2.33301 1.40629 3.6466 1.40625 5.2666V12.7334C1.40629 14.3534 2.79139 15.667 4.5 15.667H4.625V2.33301H4.5ZM6.03125 15.667H13.5C15.2086 15.667 16.5937 14.3534 16.5938 12.7334V5.2666C16.5937 3.6466 15.2086 2.33301 13.5 2.33301H6.03125V15.667Z" fill="currentColor"/>
  </svg>
);

// Shared submenu toggle handler
const handleSubmenuToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  e.stopPropagation();

  const button = e.currentTarget;
  const navItem = button.parentElement;

  if (!navItem || navItem.tagName.toLowerCase() !== 'ag-sidebar-nav-item') {
    return;
  }

  const submenu = navItem.querySelector('ag-sidebar-nav-submenu');
  if (!submenu || !('open' in submenu)) {
    return;
  }

  // Use the submenu's actual state as the source of truth, not the button's aria attribute
  const isCurrentlyOpen = (submenu as any).open;

  if (isCurrentlyOpen) {
    button.setAttribute('aria-expanded', 'false');
    (submenu as { open: boolean }).open = false;
  } else {
    button.setAttribute('aria-expanded', 'true');
    (submenu as { open: boolean }).open = true;
  }
};

// Reusable navigation content
const createNavContent = () => {
  return (
    <>
      <style>{`
        .nav-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--ag-space-3);
          position: relative;
        }

        .nav-button svg {
          flex-shrink: 0;
        }

        .nav-button .chevron {
          transition: transform var(--ag-fx-duration-md);
          margin-left: auto;
        }
        .nav-button[aria-expanded="true"] .chevron {
          transform: rotate(90deg);
        }

        /* Collapsed state indicator - small corner arrow */
        .nav-button .collapsed-indicator {
          display: none;
          position: absolute;
          bottom: -3px;
          right: 0;
          width: var(--ag-space-3);
          height: var(--ag-space-3);
        }

        .nav-button .collapsed-indicator svg {
          color: var(--ag-text-muted);
          transform: rotate(315deg);
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

        /* Hide/show patterns for collapsed/expanded modes */
        ag-sidebar[collapsed] ag-sidebar-nav-submenu:not(.popover-submenu),
        ag-sidebar:not([collapsed]) .nav-button-collapsed,
        ag-sidebar[collapsed] .nav-button-expanded,
        ag-sidebar:not([collapsed]) .nav-button-collapsed {
          display: none !important;
        }
      `}</style>
      <ReactSidebarNav>
        <ReactSidebarNavItem>
          <button type="button" className="nav-button active" aria-current="page">
            <Home size={20} />
            <span className="nav-label">Dashboard</span>
          </button>
        </ReactSidebarNavItem>

        {/* Projects with submenu */}
        <ReactSidebarNavItem>
          {/* Button for EXPANDED mode */}
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

          {/* Popover for COLLAPSED mode */}
          <ReactPopover
            className="nav-button-collapsed"
            placement="right-start"
            triggerType="click"
            distance={8}
            arrow={true}
            showHeader={false}
          >
            <button slot="trigger" type="button" className="nav-button">
              <Folder size={20} />
              <span className="nav-label">Projects</span>
              <span className="collapsed-indicator">
                <svg viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 3l2 2 2-2" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                </svg>
              </span>
            </button>
            <ReactSidebarNavPopoverSubmenu slot="content" className="popover-submenu">
              <a href="#" className="nav-sublink">Project Alpha</a>
              <a href="#" className="nav-sublink">Project Beta</a>
              <a href="#" className="nav-sublink">Project Gamma</a>
            </ReactSidebarNavPopoverSubmenu>
          </ReactPopover>

          {/* Inline submenu for expanded mode */}
          <ReactSidebarNavSubmenu>
            <a className="nav-sublink" href="#">Project Alpha</a>
            <a className="nav-sublink" href="#">Project Beta</a>
            <a className="nav-sublink" href="#">Project Gamma</a>
          </ReactSidebarNavSubmenu>
        </ReactSidebarNavItem>

        <ReactSidebarNavItem>
          <button type="button" className="nav-button">
            <User size={20} />
            <span className="nav-label">Team</span>
          </button>
        </ReactSidebarNavItem>

        {/* Settings with submenu */}
        <ReactSidebarNavItem>
          {/* Button for EXPANDED mode */}
          <button
            type="button"
            className="nav-button nav-button-expanded"
            aria-expanded="false"
            onClick={handleSubmenuToggle}
          >
            <Settings size={20} />
            <span className="nav-label">Settings</span>
            <span className="chevron"><ChevronRight size={16} /></span>
          </button>

          {/* Popover for COLLAPSED mode */}
          <ReactPopover
            className="nav-button-collapsed"
            placement="right-start"
            triggerType="click"
            distance={8}
            arrow={true}
            showHeader={false}
          >
            <button slot="trigger" type="button" className="nav-button">
              <Settings size={20} />
              <span className="nav-label">Settings</span>
              <span className="collapsed-indicator">
                <svg viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 3l2 2 2-2" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                </svg>
              </span>
            </button>
            <ReactSidebarNavPopoverSubmenu slot="content" className="popover-submenu">
              <a href="#" className="nav-sublink">Profile</a>
              <a href="#" className="nav-sublink">Billing</a>
              <a href="#" className="nav-sublink">Security</a>
              <a href="#" className="nav-sublink">Preferences</a>
            </ReactSidebarNavPopoverSubmenu>
          </ReactPopover>

          <ReactSidebarNavSubmenu>
            <a className="nav-sublink" href="#">Profile</a>
            <a className="nav-sublink" href="#">Billing</a>
            <a className="nav-sublink" href="#">Security</a>
            <a className="nav-sublink" href="#">Preferences</a>
          </ReactSidebarNavSubmenu>
        </ReactSidebarNavItem>
      </ReactSidebarNav>
    </>
  );
};

/**
 * Default story - uses toggleCollapse() for consistent collapse behavior
 */
export const Default: Story = {
  render: (args: ReactSidebarProps) => (
    <div style={{ display: 'flex', height: '500px', border: '1px solid #e5e7eb', borderRadius: '0.5rem', overflow: 'hidden' }}>
      <ReactSidebar {...args}>
        <h2 slot="ag-header-start" style={{ margin: 0, fontSize: '1.125rem', fontWeight: 600 }}>
          My Application
        </h2>
        <button
          type="button"
          slot="ag-header-toggle"
          onClick={(e) => {
            const sidebar = (e.target as HTMLElement).closest('ag-sidebar');
            if (sidebar && 'toggleCollapse' in sidebar) {
              (sidebar as { toggleCollapse: () => void }).toggleCollapse();
            }
          }}
          style={{ background: 'none', border: 'none', padding: '8px 0', cursor: 'pointer', display: 'flex', alignItems: 'center', color: 'inherit' }}
          aria-label="Toggle sidebar"
        >
          <PanelIcon />
        </button>

        {createNavContent()}

        <div slot="ag-footer" style={{ fontSize: '0.875rem', color: 'var(--ag-text-secondary)' }}>
          © 2024 Company
        </div>
      </ReactSidebar>
      <main style={{ flex: 1, padding: '2rem', overflow: 'auto' }}>
        <h1>Composable Header Slots</h1>
        <p>This example uses <code>toggleCollapse()</code> which only toggles the collapsed state.</p>
        <ul>
          <li><code>ag-header-start</code> - Logo/title (hidden when collapsed)</li>
          <li><code>ag-header-toggle</code> - Custom toggle button (auto-positioned)</li>
        </ul>
        <div style={{ background: '#dbeafe', padding: '1rem', borderRadius: '0.375rem', border: '1px solid #3b82f6', marginTop: '1rem' }}>
          <strong>✨ New:</strong> Toggle between expanded and collapsed modes. Hover over Projects or Settings when collapsed to see submenu popovers!
        </div>
      </main>
    </div>
  ),
};

/**
 * Shows header-end slot with proper overflow handling
 */
export const WithHeaderActions: Story = {
  render: (args: ReactSidebarProps) => (
    <div style={{ display: 'flex', height: '500px', border: '1px solid #e5e7eb', borderRadius: '0.5rem', overflow: 'hidden' }}>
      <ReactSidebar
        open={args.open}
        collapsed={args.collapsed}
        showMobileToggle={args.showMobileToggle}
        onToggle={args.onToggle}
        onCollapse={args.onCollapse}
      >
        <div slot="ag-header-start" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', minWidth: 0 }}>
          <div style={{ width: '32px', height: '32px', background: 'var(--ag-primary-100)', color: 'var(--ag-primary-600)', borderRadius: '8px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Command size={20} />
          </div>
          <h2 style={{ margin: 0, fontSize: '1.125rem', fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Dashboard</h2>
        </div>

        <button
          type="button"
          slot="ag-header-end"
          style={{ background: 'none', border: 'none', padding: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', flexShrink: 0 }}
          aria-label="Settings"
          title="Settings"
        >
          <Settings size={20} />
        </button>

        <button
          type="button"
          slot="ag-header-toggle"
          onClick={(e) => {
            const sidebar = (e.target as HTMLElement).closest('ag-sidebar');
            if (sidebar && 'toggleCollapse' in sidebar) {
              (sidebar as { toggleCollapse: () => void }).toggleCollapse();
            }
          }}
          style={{ background: 'none', border: 'none', padding: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
          aria-label="Toggle sidebar"
        >
          <PanelIcon />
        </button>

        {createNavContent()}

        <div slot="ag-footer" style={{ fontSize: '0.75rem', color: 'var(--ag-text-secondary)', textAlign: 'center' }}>
          v1.0
        </div>
      </ReactSidebar>
      <main style={{ flex: 1, padding: '2rem', overflow: 'auto' }}>
        <h1>Header with Actions</h1>
        <p>This example shows proper overflow handling in collapsed mode.</p>
        <ul>
          <li><code>ag-header-start</code> - Logo and title (hidden when collapsed)</li>
          <li><code>ag-header-end</code> - Settings button (always visible, icon-only)</li>
          <li><code>ag-header-toggle</code> - Toggle button</li>
        </ul>
        <div style={{ background: '#dbeafe', padding: '1rem', borderRadius: '0.375rem', border: '1px solid #3b82f6', marginTop: '1rem' }}>
          <strong>Try it:</strong> Collapse the sidebar and hover over Projects or Settings to access their submenus via popover!
        </div>
      </main>
    </div>
  ),
};

/**
 * Shows the built-in header toggle feature
 */
export const WithBuiltInToggle: Story = {
  render: (args: ReactSidebarProps) => (
    <div style={{ display: 'flex', height: '500px', border: '1px solid #e5e7eb', borderRadius: '0.5rem', overflow: 'hidden' }}>
      <ReactSidebar
        open={args.open}
        collapsed={args.collapsed}
        showHeaderToggle={true}
        showMobileToggle={args.showMobileToggle}
        onToggle={args.onToggle}
        onCollapse={args.onCollapse}
      >
        <h2 slot="ag-header-start" style={{ margin: 0, fontSize: '1.125rem', fontWeight: 600 }}>
          Built-in Toggle
        </h2>

        {createNavContent()}

        <div slot="ag-footer" style={{ fontSize: '0.875rem', color: 'var(--ag-text-secondary)' }}>
          © 2024 Company
        </div>
      </ReactSidebar>
      <main style={{ flex: 1, padding: '2rem', overflow: 'auto' }}>
        <h1>Built-in Header Toggle</h1>
        <p>Using <code>showHeaderToggle</code> adds a built-in collapse button automatically.</p>
        <p>The built-in toggle always uses <code>toggleCollapse()</code> internally for consistent behavior.</p>
        <p>
          <strong>Note:</strong> Built-in toggle works correctly - it always toggles collapsed state. Hover over submenu items when collapsed!
        </p>
      </main>
    </div>
  ),
};

/**
 * Legacy monolithic header slot approach - Logo as Toggle Pattern
 * This demonstrates how consumers can use slot="header" for full control,
 * enabling patterns like a logo that doubles as a toggle button.
 */
export const LegacyHeaderSlot: Story = {
  render: (args: ReactSidebarProps) => (
    <>
      <style>{`
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
      `}</style>
      <div style={{ display: 'flex', height: '500px', border: '1px solid #e5e7eb', borderRadius: '0.5rem', overflow: 'hidden' }}>
        <ReactSidebar
          open={args.open}
          collapsed={args.collapsed}
          showMobileToggle={args.showMobileToggle}
          onToggle={args.onToggle}
          onCollapse={args.onCollapse}
        >
          <button
            type="button"
            slot="ag-header"
            className="logo-toggle"
            onClick={(e) => {
              const sidebar = (e.target as HTMLElement).closest('ag-sidebar');
              if (sidebar && 'toggleCollapse' in sidebar) {
                (sidebar as { toggleCollapse: () => void }).toggleCollapse();
              }
            }}
            aria-label="Toggle sidebar"
          >
            <div className="logo-icon">A</div>
            <span className="logo-text">AgnosticUI</span>
          </button>

          {createNavContent()}

          <div slot="ag-footer" style={{ fontSize: '0.75rem', color: 'var(--ag-text-secondary)', textAlign: 'center' }}>
            v2.0
          </div>
        </ReactSidebar>
        <main style={{ flex: 1, padding: '2rem', overflow: 'auto' }}>
          <h1>Logo as Toggle Pattern</h1>
          <p>This example demonstrates the <strong>logo-as-toggle pattern</strong> using the monolithic <code>slot="ag-header"</code>.</p>
          <ul>
            <li><strong>Expanded:</strong> Shows full branding (logo + text)</li>
            <li><strong>Collapsed:</strong> Shows icon-only, centered</li>
            <li><strong>Interactive:</strong> Entire header acts as toggle button</li>
          </ul>
          <p style={{ background: '#dbeafe', padding: '1rem', borderRadius: '0.375rem', border: '1px solid #3b82f6', marginTop: '1rem' }}>
            <strong>Why use this pattern?</strong> When you need full control over header behavior in collapsed mode, such as keeping branding visible or creating custom interactive elements.
          </p>
          <p style={{ background: '#fef3c7', padding: '1rem', borderRadius: '0.375rem', border: '1px solid #fbbf24', marginTop: '1rem' }}>
            <strong>Note:</strong> For simpler use cases, the composable slots approach (<code>header-start</code>, <code>header-end</code>, <code>header-toggle</code>) is recommended.
          </p>
        </main>
      </div>
    </>
  ),
};

/**
 * AI Studio Pattern - Disable Compact Mode
 */
export const DisableCompactMode: Story = {
  render: (args: ReactSidebarProps) => (
    <div style={{ display: 'flex', height: '500px', border: '1px solid #e5e7eb', borderRadius: '0.5rem', overflow: 'hidden' }}>
      <ReactSidebar
        disableCompactMode
        open={args.open !== undefined ? args.open : true}
        showMobileToggle={args.showMobileToggle}
        onToggle={args.onToggle}
        onCollapse={args.onCollapse}
      >
        <h2 slot="ag-header-start" style={{ margin: 0, fontSize: '1.125rem', fontWeight: 600 }}>
          AI Studio
        </h2>
        <button
          type="button"
          slot="ag-header-toggle"
          onClick={(e) => {
            const sidebar = (e.target as HTMLElement).closest('ag-sidebar');
            if (sidebar && 'toggleResponsive' in sidebar) {
              (sidebar as { toggleResponsive: () => void }).toggleResponsive();
            }
          }}
          style={{ background: 'none', border: 'none', padding: '8px 0', cursor: 'pointer', display: 'flex', alignItems: 'center', color: 'inherit' }}
          aria-label="Toggle sidebar"
        >
          <Command size={20} />
        </button>

        {createNavContent()}

        <div slot="ag-footer" style={{ fontSize: '0.75rem', color: 'var(--ag-text-secondary)', textAlign: 'center' }}>
          v2.0
        </div>
      </ReactSidebar>
      <main style={{ flex: 1, padding: '2rem', overflow: 'auto' }}>
        <h1>Disable Compact Mode</h1>
        <p>This sidebar uses <code>disableCompactMode</code> to implement the AI Studio pattern.</p>
        <ul>
          <li><strong>Desktop:</strong> Sidebar is either full-width or completely hidden (no rail mode)</li>
          <li><strong>Mobile:</strong> Same behavior - overlay or hidden</li>
          <li><strong>Simpler UX:</strong> Only two states instead of three</li>
        </ul>
        <p style={{ background: '#dbeafe', padding: '1rem', borderRadius: '0.375rem', border: '1px solid #3b82f6', marginTop: '1rem' }}>
          <strong>Use case:</strong> When your app doesn't need the compact/rail mode and prefers a simpler toggle pattern.
        </p>
        <p style={{ background: '#fef3c7', padding: '1rem', borderRadius: '0.375rem', border: '1px solid #fbbf24', marginTop: '1rem' }}>
          <strong>Note:</strong> When <code>disableCompactMode</code> is true, the <code>collapsed</code> prop is ignored.
        </p>
      </main>
    </div>
  ),
};

/**
 * Active Item Tracking Example
 * Demonstrates how to handle active state for navigation items, including submenus
 */
const WithActiveItemTrackingComponent = (args: ReactSidebarProps) => {
  const [activeRoute, setActiveRoute] = useState('/dashboard');
  const [isOpen, setIsOpen] = useState(true);

  const handleNavClick = (route: string) => (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault();
    setActiveRoute(route);

    const sidebar = (e.target as HTMLElement).closest('ag-sidebar');

    // Update top-level nav buttons
    const buttons = sidebar?.querySelectorAll('.nav-button');
    buttons?.forEach((btn) => {
      const isActive = btn.getAttribute('data-route') === route;
      btn.classList.toggle('active', isActive);
      if (isActive) {
        btn.setAttribute('aria-current', 'page');
      } else {
        btn.removeAttribute('aria-current');
      }
    });

    // Update sublinks (both inline and in popovers)
    const sublinks = sidebar?.querySelectorAll('.nav-sublink');
    sublinks?.forEach((link) => {
      const isActive = link.getAttribute('data-route') === route;
      link.classList.toggle('active', isActive);
      if (isActive) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  };

  const handleSubmenuToggleLocal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const button = e.currentTarget;

    // The button is a slotted child of ag-sidebar-nav-item
    const navItem = button.parentElement;
    if (!navItem || navItem.tagName.toLowerCase() !== 'ag-sidebar-nav-item') {
      return;
    }

    const submenu = navItem.querySelector('ag-sidebar-nav-submenu');
    if (!submenu || !('open' in submenu)) return;

    // Use the submenu's actual state as the source of truth
    const isCurrentlyOpen = (submenu as any).open;

    if (isCurrentlyOpen) {
      button.setAttribute('aria-expanded', 'false');
      (submenu as { open: boolean }).open = false;
    } else {
      button.setAttribute('aria-expanded', 'true');
      (submenu as { open: boolean }).open = true;
    }
  };

    return (
      <>
        <style>{`
          .nav-button.active,
          .nav-sublink.active {
            background: var(--ag-primary-background);
            color: var(--ag-primary-text);
            font-weight: 500;
          }

          .nav-button {
            display: flex;
            align-items: center;
            gap: var(--ag-space-3);
            position: relative;
          }

          .nav-button svg {
            flex-shrink: 0;
          }

          .nav-button .chevron {
            transition: transform var(--ag-fx-duration-md);
            margin-left: auto;
          }
          .nav-button[aria-expanded="true"] .chevron {
            transform: rotate(90deg);
          }

          .nav-button .collapsed-indicator {
            display: none;
            position: absolute;
            bottom: -3px;
            right: 0;
            width: var(--ag-space-3);
            height: var(--ag-space-3);
          }

          .nav-button .collapsed-indicator svg {
            color: var(--ag-text-muted);
            transform: rotate(315deg);
          }

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

          ag-sidebar[collapsed] .nav-button[aria-expanded] .collapsed-indicator {
            display: block;
          }

          .nav-button-collapsed::part(ag-popover-body) {
            padding: var(--ag-space-1);
          }

          ag-sidebar[collapsed] ag-sidebar-nav-submenu:not(.popover-submenu),
          ag-sidebar:not([collapsed]) .nav-button-collapsed,
          ag-sidebar[collapsed] .nav-button-expanded,
          ag-sidebar:not([collapsed]) .nav-button-collapsed {
            display: none !important;
          }
        `}</style>
        <div style={{ display: 'flex', height: '500px', border: '1px solid #e5e7eb', borderRadius: '0.5rem', overflow: 'hidden' }}>
          <ReactSidebar
            open={isOpen}
            collapsed={args.collapsed}
            showMobileToggle={true}
            onToggle={(e) => {
              setIsOpen(e.detail.open);
              args.onToggle?.(e);
            }}
            onCollapse={args.onCollapse}
          >
            <h2 slot="ag-header-start" style={{ margin: 0, fontSize: '1.125rem', fontWeight: 600 }}>
              Navigation
            </h2>
            <button
              type="button"
              slot="ag-header-toggle"
              onClick={(e) => {
                const sidebar = (e.target as HTMLElement).closest('ag-sidebar');
                if (sidebar && 'toggleCollapse' in sidebar) {
                  (sidebar as { toggleCollapse: () => void }).toggleCollapse();
                }
              }}
              style={{ background: 'none', border: 'none', padding: '8px 0', cursor: 'pointer', display: 'flex', alignItems: 'center', color: 'inherit' }}
              aria-label="Toggle sidebar"
            >
              <PanelIcon />
            </button>

            <ReactSidebarNav>
              <ReactSidebarNavItem>
                <button
                  type="button"
                  className="nav-button active"
                  aria-current="page"
                  data-route="/dashboard"
                  onClick={handleNavClick('/dashboard')}
                >
                  <Home size={20} />
                  <span className="nav-label">Dashboard</span>
                </button>
              </ReactSidebarNavItem>

              <ReactSidebarNavItem>
                <button
                  type="button"
                  className="nav-button"
                  data-route="/projects"
                  onClick={handleNavClick('/projects')}
                >
                  <Folder size={20} />
                  <span className="nav-label">Projects</span>
                </button>
              </ReactSidebarNavItem>

              <ReactSidebarNavItem>
                <button
                  type="button"
                  className="nav-button"
                  data-route="/team"
                  onClick={handleNavClick('/team')}
                >
                  <User size={20} />
                  <span className="nav-label">Team</span>
                </button>
              </ReactSidebarNavItem>

              {/* Settings with Submenu */}
              <ReactSidebarNavItem>
                {/* Expanded Mode Trigger */}
                <button
                  type="button"
                  className="nav-button nav-button-expanded"
                  aria-expanded="false"
                  onClick={handleSubmenuToggleLocal}
                >
                  <Settings size={20} />
                  <span className="nav-label">Settings</span>
                  <span className="chevron"><ChevronRight size={16} /></span>
                </button>

                {/* Collapsed Mode Trigger (Popover) */}
                <ReactPopover
                  className="nav-button-collapsed"
                  placement="right-start"
                  triggerType="click"
                  distance={8}
                  arrow={true}
                  showHeader={false}
                >
                  <button slot="trigger" type="button" className="nav-button">
                    <Settings size={20} />
                    <span className="nav-label">Settings</span>
                    <span className="collapsed-indicator">
                      <svg viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 3l2 2 2-2" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                      </svg>
                    </span>
                  </button>
                  <ReactSidebarNavPopoverSubmenu slot="content" className="popover-submenu">
                    <a href="#" className="nav-sublink" data-route="/settings/profile" onClick={handleNavClick('/settings/profile')}>Profile</a>
                    <a href="#" className="nav-sublink" data-route="/settings/billing" onClick={handleNavClick('/settings/billing')}>Billing</a>
                    <a href="#" className="nav-sublink" data-route="/settings/security" onClick={handleNavClick('/settings/security')}>Security</a>
                  </ReactSidebarNavPopoverSubmenu>
                </ReactPopover>

                {/* Inline Submenu */}
                <ReactSidebarNavSubmenu>
                  <a className="nav-sublink" href="#" data-route="/settings/profile" onClick={handleNavClick('/settings/profile')}>Profile</a>
                  <a className="nav-sublink" href="#" data-route="/settings/billing" onClick={handleNavClick('/settings/billing')}>Billing</a>
                  <a className="nav-sublink" href="#" data-route="/settings/security" onClick={handleNavClick('/settings/security')}>Security</a>
                </ReactSidebarNavSubmenu>
              </ReactSidebarNavItem>
            </ReactSidebarNav>
          </ReactSidebar>

          <main style={{ flex: 1, padding: '2rem', overflow: 'auto' }}>
            <h1>Active Item Tracking</h1>
            <p>Current route: <strong>{activeRoute}</strong></p>
            <p>Click navigation items to see the active state change.</p>
            <ul>
              <li><strong>Active styling:</strong> Background color and font weight change</li>
              <li><strong>Submenus:</strong> Works for inline submenus and collapsed popover menus</li>
              <li><strong>Accessibility:</strong> <code>aria-current="page"</code> is set on active item</li>
            </ul>
            <p>
              <strong>In a real app:</strong> Your router (React Router, Vue Router, etc.) would manage the active state. This example simulates that behavior with React state.
            </p>
          </main>
        </div>
      </>
    );
};

export const WithActiveItemTracking: Story = {
  render: (args: ReactSidebarProps) => <WithActiveItemTrackingComponent {...args} />,
};
