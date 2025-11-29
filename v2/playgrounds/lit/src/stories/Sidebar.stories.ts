import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { createElement, ChevronRight, Folder, User, Settings, Home } from 'lucide';
import { type AgSidebarProps } from 'agnosticui-core/sidebar';

import 'agnosticui-core/sidebar-nav';
import 'agnosticui-core/icon';
import 'agnosticui-core/visually-hidden';

const meta: Meta<AgSidebarProps> = {
  title: 'AgnosticUI Lit/Sidebar',
  component: 'ag-sidebar',
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Controls sidebar visibility on mobile (below breakpoint)',
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
    breakpoint: {
      control: { type: 'number', min: 320, max: 1920, step: 1 },
      description: 'Pixel width below which mobile overlay behavior activates',
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
    breakpoint: 1024,
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

const createNavContent = () => html`
  <style>
    .nav-button {
      width: 100%;
      padding: var(--ag-space-2);
      border: none;
      background: transparent;
      border-radius: var(--ag-border-radius-sm);
      cursor: pointer;
      text-align: left;
      font-size: var(--ag-font-size-sm);
      color: var(--ag-text-primary);
      display: flex;
      align-items: center;
      gap: var(--ag-space-2);
      transition: background 0.15s;
      position: relative;
    }
    .nav-button:hover {
      background: var(--ag-background-secondary);
    }
    .nav-button.active {
      background: var(--ag-primary-background);
      color: var(--ag-text-primary);
    }
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
      bottom: 4px;
      right: 4px;
      width: 12px;
      height: 12px;
      background: var(--ag-primary-background, #3b82f6);
      border-radius: 2px;
      pointer-events: none;
    }
    
    .nav-button .collapsed-indicator svg {
      width: 8px;
      height: 8px;
      color: white;
    }

    .nav-sublink {
      display: block;
      padding: var(--ag-space-2);
      border-radius: var(--ag-radius-sm);
      text-decoration: none;
      color: var(--ag-text-primary);
      font-size: var(--ag-font-size-sm);
      transition: background 0.15s;
    }
    .nav-sublink:hover {
      background: var(--ag-background-secondary);
    }
    .nav-sublink.active {
      background: var(--ag-primary-background);
      color: var(--ag-primary-text);
      font-weight: 500;
    }

    /* Collapsed state (rail mode) styles */
    ag-sidebar[collapsed] .nav-button {
      justify-content: center;
      padding-inline: var(--ag-space-2);
    }
    ag-sidebar[collapsed] .nav-button .nav-label,
    ag-sidebar[collapsed] .nav-button .chevron {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border-width: 0;
    }
    
    /* Show indicator for items with submenus when collapsed */
    ag-sidebar[collapsed] .nav-button[aria-expanded] .collapsed-indicator {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    /* Hide submenus in collapsed mode */
    ag-sidebar[collapsed] ag-sidebar-nav-submenu {
      display: none !important;
    }

    /* Tooltip for collapsed state - shown on hover */
    .nav-button .nav-tooltip {
      position: absolute;
      left: 100%;
      margin-left: 8px;
      background: var(--ag-background-primary, white);
      border: 1px solid var(--ag-border, #e5e7eb);
      border-radius: 6px;
      padding: 8px 12px;
      white-space: nowrap;
      font-size: 0.875rem;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      z-index: 1000;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.15s;
    }

    ag-sidebar[collapsed] .nav-button:hover .nav-tooltip {
      opacity: 1;
    }

    ag-sidebar:not([collapsed]) .nav-tooltip {
      display: none;
    }
  </style>
  <ag-sidebar-nav>
    <ag-sidebar-nav-item>
      <button class="nav-button active" aria-current="page">
        <ag-icon no-fill>${createElement(Home)}</ag-icon>
        <span class="nav-label">Dashboard</span>
        <span class="nav-tooltip">Dashboard</span>
      </button>
    </ag-sidebar-nav-item>
    <ag-sidebar-nav-item>
      <button class="nav-button" aria-expanded="false">
        <ag-icon no-fill>${createElement(Folder)}</ag-icon>
        <span class="nav-label">Projects</span>
        <span class="chevron"><ag-icon no-fill>${createElement(ChevronRight)}</ag-icon></span>
        <span class="collapsed-indicator">
          <svg viewBox="0 0 8 8" fill="none">
            <path d="M2 3l2 2 2-2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </span>
        <span class="nav-tooltip">Projects (has submenu)</span>
      </button>
      <ag-sidebar-nav-submenu>
        <div role="listitem" class="nav-subitem"><a href="#" class="nav-sublink">Project Alpha</a></div>
        <div role="listitem" class="nav-subitem"><a href="#" class="nav-sublink">Project Beta</a></div>
      </ag-sidebar-nav-submenu>
    </ag-sidebar-nav-item>
    <ag-sidebar-nav-item>
      <button class="nav-button">
        <ag-icon no-fill>${createElement(User)}</ag-icon>
        <span class="nav-label">Team</span>
        <span class="nav-tooltip">Team</span>
      </button>
    </ag-sidebar-nav-item>
    <ag-sidebar-nav-item>
      <button class="nav-button" aria-expanded="false">
        <ag-icon no-fill>${createElement(Settings)}</ag-icon>
        <span class="nav-label">Settings</span>
        <span class="chevron"><ag-icon no-fill>${createElement(ChevronRight)}</ag-icon></span>
        <span class="collapsed-indicator">
          <svg viewBox="0 0 8 8" fill="none">
            <path d="M2 3l2 2 2-2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </span>
        <span class="nav-tooltip">Settings (has submenu)</span>
      </button>
      <ag-sidebar-nav-submenu>
        <div role="listitem" class="nav-subitem"><a href="#" class="nav-sublink">Profile</a></div>
        <div role="listitem" class="nav-subitem"><a href="#" class="nav-sublink">Billing</a></div>
        <div role="listitem" class="nav-subitem"><a href="#" class="nav-sublink">Security</a></div>
      </ag-sidebar-nav-submenu>
    </ag-sidebar-nav-item>
  </ag-sidebar-nav>
`;

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
        .breakpoint=${args.breakpoint}
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
          style="background: none; border: none; padding: 8px; cursor: pointer; display: flex; align-items: center; color: inherit;"
          aria-label="Toggle sidebar"
        >
          ${PanelIcon()}
        </button>

        ${createNavContent()}
        
        <div slot="footer" style="font-size: 0.875rem; color: var(--ag-text-secondary); overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
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
          <strong>Fixed:</strong> Toggle now consistently collapses/expands the sidebar without closing the mobile overlay.
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
          <div style="width: 32px; height: 32px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 8px; flex-shrink: 0;"></div>
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
        
        <div slot="footer" style="font-size: 0.75rem; color: var(--ag-text-secondary); overflow: hidden; text-overflow: ellipsis; text-align: center;">
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
          <strong>Fixed:</strong> Footer text is shorter and uses text-overflow. Toggle uses <code>toggleCollapse()</code>.
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
        <div style="background: #dcfce7; padding: 1rem; border-radius: 0.375rem; border: 1px solid #22c55e; margin-top: 1rem;">
          <strong>Note:</strong> Built-in toggle works correctly - it always toggles collapsed state.
        </div>
      </main>
    </div>
  `,
};

/**
 * Legacy monolithic header slot approach
 */
export const LegacyHeaderSlot: Story = {
  render: (args) => html`
    <div style="display: flex; height: 500px; border: 1px solid #e5e7eb; border-radius: 0.5rem; overflow: hidden;">
      <ag-sidebar
        ?open=${args.open}
        ?collapsed=${args.collapsed}
        ?show-mobile-toggle=${args['showMobileToggle']}
      >
        <div slot="header" style="display: flex; justify-content: space-between; align-items: center;">
          <h2 style="margin: 0; font-size: 1.125rem; font-weight: 600;">Legacy Header</h2>
          <button 
            @click=${(e: Event) => {
              const sidebar = (e.target as HTMLElement).closest('ag-sidebar') as any;
              sidebar?.toggleCollapse();
            }}
            style="background: none; border: none; padding: 8px; cursor: pointer; display: flex; align-items: center;"
            aria-label="Toggle sidebar"
          >
            ${PanelIcon()}
          </button>
        </div>

        ${createNavContent()}
        
        <div slot="footer" style="font-size: 0.875rem; color: var(--ag-text-secondary);">
          © 2024
        </div>
      </ag-sidebar>
      <main style="flex: 1; padding: 2rem; overflow: auto;">
        <h1>Legacy Approach</h1>
        <p>This uses the legacy monolithic <code>header</code> slot with manual layout.</p>
        <p style="background: #fef3c7; padding: 1rem; border-radius: 0.375rem; border: 1px solid #fbbf24;">
          <strong>Note:</strong> While still supported, the composable slots approach is recommended.
        </p>
      </main>
    </div>
  `,
};

/**
 * Collapsed rail mode with submenu indicators
 */
export const CollapsedRailMode: Story = {
  args: {
    collapsed: true,
    showHeaderToggle: true,
  },
  render: (args) => html`
    <div style="display: flex; height: 500px; border: 1px solid #e5e7eb; border-radius: 0.5rem; overflow: hidden;">
      <ag-sidebar
        ?collapsed=${args.collapsed}
        ?show-header-toggle=${args.showHeaderToggle}
        ?show-mobile-toggle=${args['showMobileToggle']}
      >
        <h2 slot="header-start" style="margin: 0; font-size: 1.125rem; font-weight: 600;">
          Navigation
        </h2>

        ${createNavContent()}
        
        <div slot="footer" style="font-size: 0.75rem; color: var(--ag-text-secondary); text-align: center;">
          v1.0
        </div>
      </ag-sidebar>
      <main style="flex: 1; padding: 2rem; overflow: auto;">
        <h1>Rail Mode</h1>
        <p>When collapsed, the sidebar shows icons only with improved visual affordances:</p>
        <ul>
          <li><strong>Corner indicators:</strong> Small blue badges on items with submenus</li>
          <li><strong>Tooltips:</strong> Hover over nav items to see their labels</li>
          <li><strong>Accessible:</strong> Labels remain in DOM for screen readers</li>
        </ul>
        <div style="background: #dbeafe; padding: 1rem; border-radius: 0.375rem; border: 1px solid #3b82f6; margin-top: 1rem;">
          <strong>Improved:</strong> Now shows visual indicators for items with submenus (Projects, Settings).
        </div>
        <div style="background: #fef3c7; padding: 1rem; border-radius: 0.375rem; border: 1px solid #fbbf24; margin-top: 1rem;">
          <strong>Limitation:</strong> Submenus are still inaccessible in collapsed mode. Consider implementing a popover/dropdown pattern for full functionality.
        </div>
      </main>
    </div>
  `,
};

/**
 * Example showing different mobile toggle positions
 */
export const MobileTogglePositions: Story = {
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem;">
      ${['top-left', 'top-right', 'bottom-left', 'bottom-right'].map(position => html`
        <div style="border: 1px solid #e5e7eb; border-radius: 0.5rem; overflow: hidden; height: 400px;">
          <ag-sidebar
            position="left"
            show-mobile-toggle
            mobile-toggle-position=${position}
            breakpoint="768"
          >
            <h3 slot="header-start" style="margin: 0; font-size: 1rem;">${position}</h3>
            ${createNavContent()}
          </ag-sidebar>
        </div>
      `)}
    </div>
    <p style="margin-top: 1rem; color: var(--ag-text-secondary); font-size: 0.875rem;">
      Resize your browser to below 768px to see the toggle buttons in different positions.
    </p>
  `,
};
