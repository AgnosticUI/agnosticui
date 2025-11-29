import type { Meta, StoryObj } from '@storybook/web-components';
import { useArgs } from "storybook/preview-api";
import { html, nothing } from 'lit';
import { createElement, ChevronRight, Folder, User, Settings, Home } from 'lucide';
import {type AgSidebarProps } from 'agnosticui-core/sidebar';

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
    
    ag-sidebar[collapsed] ag-sidebar-nav-submenu {
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
    <ag-sidebar-nav-item>
      <button class="nav-button" aria-expanded="false">
        <ag-icon no-fill>${createElement(Folder)}</ag-icon>
        <span class="nav-label">Projects</span>
        <span class="chevron"><ag-icon no-fill>${createElement(ChevronRight)}</ag-icon></span>
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
      </button>
    </ag-sidebar-nav-item>
    <ag-sidebar-nav-item>
      <button class="nav-button" aria-expanded="false">
        <ag-icon no-fill>${createElement(Settings)}</ag-icon>
        <span class="nav-label">Settings</span>
        <span class="chevron"><ag-icon no-fill>${createElement(ChevronRight)}</ag-icon></span>
      </button>
      <ag-sidebar-nav-submenu>
        <div role="listitem" class="nav-subitem"><a href="#" class="nav-sublink">Profile</a></div>
        <div role="listitem" class="nav-subitem"><a href="#" class="nav-sublink">Billing</a></div>
        <div role="listitem" class="nav-subitem"><a href="#" class="nav-sublink">Security</a></div>
      </ag-sidebar-nav-submenu>
    </ag-sidebar-nav-item>
  </ag-sidebar-nav>
`;

// Basic example with mobile toggle built-in
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
        <div slot="header">
          <h2>My App</h2>
        </div>
        ${createNavContent()}
        <div slot="footer">
          <p>© 2024</p>
        </div>
      </ag-sidebar>
      <main style="flex: 1; padding: 2rem;">
        <h1>Main Content</h1>
        <p>This is the main content area. Resize the window to see mobile behavior.</p>
        <p style="color: var(--ag-text-secondary); font-size: 0.875rem;">
          On mobile, a floating toggle button will appear automatically with the custom panel icon.
        </p>
      </main>
    </div>
  `,
};

// Desktop rail mode with consumer-controlled toggle using custom icon
export const WithHeaderFooter: Story = {
  render: () => {
    const [args, updateArgs] = useArgs();

    const handleHeaderButtonClick = () => {
      // Check if we're in mobile by checking window width
      const isMobile = window.innerWidth < (args.breakpoint || 1024);
      
      if (isMobile && args.open) {
        // In mobile when open, close the sidebar
        updateArgs({ open: false });
      } else {
        // In desktop, toggle collapsed state
        updateArgs({ collapsed: !args.collapsed });
      }
    };

    return html`
    <style>
      ag-sidebar[collapsed] [slot="footer"] {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
    </style>
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
        <div slot="header" style="display: flex; align-items: center; justify-content: ${args.collapsed ? 'center' : 'space-between'};">
          ${!args.collapsed ? html`<h2 style="font-size: 1.125rem; font-weight: 600; color: var(--ag-text-primary); margin: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">My App</h2>` : nothing}
          <!-- Dual-purpose toggle: close in mobile, collapse in desktop -->
          <button
            class="desktop-collapse-toggle"
            @click=${handleHeaderButtonClick}
            aria-label=${args.collapsed ? 'Expand sidebar' : 'Close sidebar'}
            style="display: flex; align-items: center; justify-content: center; width: var(--ag-space-7); height: var(--ag-space-7); border: 1px solid var(--ag-border-subtle); border-radius: 0.375rem; background: var(--ag-background-secondary); color: var(--text-primary); cursor: pointer;"
          >
            ${PanelIcon()}
          </button>
        </div>
        ${createNavContent()}
        <div slot="footer" style="text-align: ${args.collapsed ? 'center' : 'left'};">
          <p class="footer-text" style="color: var(--ag-text-secondary); margin: 0; padding: 0; font-size: 0.875rem;">
            ${args.collapsed ? '©' : '© 2025'}
          </p>
        </div>
      </ag-sidebar>
      <main style="flex: 1; padding: 2rem;">
        <h1>Main Content</h1>
        <p><strong>Desktop (≥1024px):</strong> Use the panel icon button in the sidebar header to collapse to rail mode (icon-only view).</p>
        <p><strong>Mobile (&lt;1024px):</strong> Tap the floating button to open. Once open, use the panel icon in the header to close or toggle width.</p>
      </main>
    </div>
  `},
};

export const Collapsed: Story = {
  ...WithHeaderFooter,
  args: {
    collapsed: true,
  },
};

// Example with mobile toggle disabled (for custom implementations)
export const CustomMobileControl: Story = {
  render: () => {
    const [args, updateArgs] = useArgs();

    const toggleOpen = () => {
      updateArgs({ open: !args.open });
    };

    return html`
    <div style="display: flex; height: 500px; border: 1px solid #e5e7eb; border-radius: 0.5rem; overflow: hidden; position: relative;">
      <!-- Custom consumer toggle button with panel icon -->
      <button
        @click=${toggleOpen}
        style="position: fixed; top: 1rem; right: 1rem; z-index: 1002; width: 40px; height: 40px; border-radius: 50%; background: white; border: 1px solid #e5e7eb; box-shadow: 0 2px 8px rgba(0,0,0,0.15); cursor: pointer; display: flex; align-items: center; justify-content: center;"
        aria-label="Toggle menu"
      >
        ${PanelIcon()}
      </button>

      <ag-sidebar
        ?open=${args.open}
        ?collapsed=${args.collapsed}
        .position=${args.position}
        aria-label=${args['ariaLabel']}
        .breakpoint=${args.breakpoint}
        .variant=${args.variant}
        ?no-transition=${args['noTransition']}
        .width=${args.width}
        show-mobile-toggle="false"
      >
        <div slot="header">
          <h2>My App</h2>
        </div>
        ${createNavContent()}
        <div slot="footer">
          <p>© 2024</p>
        </div>
      </ag-sidebar>
      <main style="flex: 1; padding: 2rem;">
        <h1>Custom Mobile Toggle</h1>
        <p>Built-in mobile toggle is disabled. Using a custom button in top-right instead with the same panel icon.</p>
      </main>
    </div>
  `},
};

// Example showing different mobile toggle positions
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
            <div slot="header"><h3>${position}</h3></div>
            ${createNavContent()}
          </ag-sidebar>
        </div>
      `)}
    </div>
    <p style="margin-top: 1rem; color: var(--ag-text-secondary); font-size: 0.875rem;">
      Resize your browser to below 768px to see the custom panel icon toggle buttons in different positions.
    </p>
  `,
};
