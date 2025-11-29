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

// Built-in header toggle with fallback icon (showHeaderToggle enabled)
// Built-in header toggle with fallback icon (showHeaderToggle enabled)
export const WithHeaderToggleFallback: Story = {
  render: () => {
    const [args] = useArgs();

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
          show-header-toggle
        >
          <div slot="header">
            <h2 style="font-size: 1.125rem; font-weight: 600; color: var(--ag-text-primary); margin: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">My App</h2>
          </div>
          ${createNavContent()}
          <div slot="footer" style="text-align: left;">
            <p class="footer-text" style="color: var(--ag-text-secondary); margin: 0; padding: 0; font-size: 0.875rem;">
              © 2025
            </p>
          </div>
        </ag-sidebar>
        <main style="flex: 1; padding: 2rem;">
            <h1>Built-in Header Toggle – component-provided (fallback icon)</h1>
            <p>The Sidebar component provides a built-in header toggle. Use this when you want the component to render the toggle button for you.</p>
            <p><strong>Desktop (≥1024px):</strong> Click the button to collapse to rail mode (icon-only view).</p>
            <p><strong>Mobile (&lt;1024px):</strong> Tap the floating button to open. Once open, use the header toggle to close the sidebar.</p>
        </main>
      </div>
    `;
  }
};
WithHeaderToggleFallback.storyName = 'Built-in Header Toggle (fallback icon)';

// Consumer-controlled header toggle (custom implementation)
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
        <h1>Consumer Header Toggle — consumer-provided header control</h1>
        <p>Consumers fully control the header layout and button behavior in this example.</p>
        <p><strong>Desktop (≥1024px):</strong> Use the panel icon button in the sidebar header to collapse to rail mode (icon-only view).</p>
        <p><strong>Mobile (&lt;1024px):</strong> Tap the floating button to open. Once open, use the panel icon in the header to close or toggle width.</p>
      </main>
    </div>
  `},
};
WithHeaderFooter.storyName = 'Consumer Header Toggle (consumer-controlled)';

// Story demonstrating consumer-provided slotted toggle icon with collapse-only header toggle
export const WithCustomToggleIconAndBuiltInHeader: Story = {
  render: () => {
    const [args, updateArgs] = useArgs();

    const handleHeaderButtonClick = () => {
      // Collapse/expand only (no mobile close behavior)
      updateArgs({ collapsed: !args.collapsed });
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
          <!-- Consumer provided toggle icon via named slot (styled to show custom icon color) -->
          <span slot="ag-toggle-icon" style="color: #5379b0; display: inline-block;">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8817 1C12.188 1 13.2299 0.999865 14.0582 1.08522C14.9009 1.17206 15.6137 1.35458 16.2296 1.78011C16.5941 2.032 16.9148 2.33701 17.1797 2.68368C17.6271 3.2694 17.819 3.94735 17.9103 4.74869C18.0001 5.53653 17.9999 6.52733 17.9999 7.76972V10.2302C17.9999 11.4726 18.0001 12.4634 17.9103 13.2512C17.819 14.0526 17.6271 14.7306 17.1797 15.3163C16.9148 15.6629 16.5941 15.968 16.2296 16.2198C15.6137 16.6453 14.9009 16.8279 14.0582 16.9147C13.2299 17.0001 12.188 17 10.8817 17H7.1181C5.81177 17 4.76996 17.0001 3.94157 16.9147C3.09897 16.8279 2.38613 16.6453 1.77026 16.2198C1.40572 15.968 1.08501 15.6629 0.820163 15.3163C0.372724 14.7306 0.18081 14.0526 0.0895005 13.2512C-0.00025096 12.4634 -0.000109054 11.4726 -0.000109054 10.2302V7.76972C-0.000109054 6.52733 -0.00025096 5.53653 0.0895005 4.74869C0.18081 3.94735 0.372724 3.2694 0.820163 2.68368C1.08501 2.33701 1.40572 2.032 1.77026 1.78011C2.38613 1.35458 3.09897 1.17206 3.94157 1.08522C4.76996 0.999865 5.81177 1 7.1181 1H10.8817ZM6.78332 2.48593V15.5654C7.05707 15.5664 7.35039 15.5708 7.66562 15.5708L10.8817 15.5446C12.2218 15.5446 13.166 15.5441 13.8929 15.4693C14.6051 15.3959 15.0183 15.2584 15.33 15.0431C15.5647 14.8809 15.7718 14.6839 15.9424 14.4608C16.1687 14.1643 16.3132 13.7713 16.3904 13.0939C16.4691 12.4027 16.4697 11.5047 16.4697 10.2302V7.76972C16.4697 6.49525 16.4691 5.59726 16.3904 4.90603C16.3132 4.22864 16.1687 3.83566 15.9424 3.53919C15.7718 3.31599 15.5647 3.119 15.33 2.95684C15.0183 2.74158 14.6051 2.60411 13.8929 2.53073C13.166 2.45588 12.2218 2.45533 10.8817 2.45533L7.66562 2.48156C7.35039 2.48156 7.05707 2.4849 6.78332 2.48593ZM5.53892 2.48156C5.32343 2.49218 4.29154 2.51172 4.107 2.53073C3.39474 2.60411 2.98152 2.74158 2.6698 2.95684C2.4351 3.119 2.22798 3.31599 2.05746 3.53919C1.83112 3.83566 1.68658 4.22864 1.60942 4.90603C1.53072 5.59726 1.53015 6.49525 1.53015 7.76972V10.2302C1.53015 11.5047 1.53072 12.4027 1.60942 13.0939C1.68658 13.7713 1.83112 14.1643 2.05746 14.4608C2.22798 14.6839 2.4351 14.8809 2.6698 15.0431C2.98152 15.2584 3.39474 15.3959 4.107 15.4693C4.29152 15.4882 5.32345 15.5602 5.53892 15.5708V2.48156Z" fill="currentColor"/>
            </svg>
          </span>

          <div slot="header" style="display: flex; align-items: center; justify-content: space-between;">
            ${html`<h2 style="font-size: 1.125rem; font-weight: 600; color: var(--ag-text-primary); margin: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">My App</h2>`}
            <button
              class="header-collapse-toggle"
              @click=${handleHeaderButtonClick}
              aria-label=${args.collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
              style="display: flex; align-items: center; justify-content: center; width: var(--ag-space-7); height: var(--ag-space-7); border: 1px solid var(--ag-border-subtle); border-radius: 0.375rem; background: var(--ag-background-secondary); color: var(--ag-text-primary); cursor: pointer;"
            >
              ${PanelIcon()}
            </button>
          </div>
          ${createNavContent()}
          <div slot="footer" style="text-align: left;">
            <p class="footer-text" style="color: var(--ag-text-secondary); margin: 0; padding: 0; font-size: 0.875rem;">
              © 2025
            </p>
          </div>
        </ag-sidebar>
          <main style="flex: 1; padding: 2rem;">
          <h1>Custom Floating Toggle Icon (colored) + Built-in Header</h1>
          <p>Consumer supplies a custom floating toggle icon (styled in blue) with a collapse/expand-only header button. The floating toggle controls mobile visibility; the header button toggles collapsed state.</p>
        </main>
      </div>
    `;
  }
};
WithCustomToggleIconAndBuiltInHeader.storyName = 'Custom Toggle (colored) + Built-in Header';

// Story demonstrating consumer-provided slotted toggle icon with consumer header
export const WithCustomToggleIcon: Story = {
  render: () => {
    const [args, updateArgs] = useArgs();

    const handleHeaderButtonClick = () => {
      const isMobile = window.innerWidth < (args.breakpoint || 1024);
      if (isMobile && args.open) {
        updateArgs({ open: false });
      } else {
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
          <!-- Consumer provided toggle icon via named slot -->
          <svg style="color: #64748b;" slot="ag-toggle-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8817 1C12.188 1 13.2299 0.999865 14.0582 1.08522C14.9009 1.17206 15.6137 1.35458 16.2296 1.78011C16.5941 2.032 16.9148 2.33701 17.1797 2.68368C17.6271 3.2694 17.819 3.94735 17.9103 4.74869C18.0001 5.53653 17.9999 6.52733 17.9999 7.76972V10.2302C17.9999 11.4726 18.0001 12.4634 17.9103 13.2512C17.819 14.0526 17.6271 14.7306 17.1797 15.3163C16.9148 15.6629 16.5941 15.968 16.2296 16.2198C15.6137 16.6453 14.9009 16.8279 14.0582 16.9147C13.2299 17.0001 12.188 17 10.8817 17H7.1181C5.81177 17 4.76996 17.0001 3.94157 16.9147C3.09897 16.8279 2.38613 16.6453 1.77026 16.2198C1.40572 15.968 1.08501 15.6629 0.820163 15.3163C0.372724 14.7306 0.18081 14.0526 0.0895005 13.2512C-0.00025096 12.4634 -0.000109054 11.4726 -0.000109054 10.2302V7.76972C-0.000109054 6.52733 -0.00025096 5.53653 0.0895005 4.74869C0.18081 3.94735 0.372724 3.2694 0.820163 2.68368C1.08501 2.33701 1.40572 2.032 1.77026 1.78011C2.38613 1.35458 3.09897 1.17206 3.94157 1.08522C4.76996 0.999865 5.81177 1 7.1181 1H10.8817ZM6.78332 2.48593V15.5654C7.05707 15.5664 7.35039 15.5708 7.66562 15.5708L10.8817 15.5446C12.2218 15.5446 13.166 15.5441 13.8929 15.4693C14.6051 15.3959 15.0183 15.2584 15.33 15.0431C15.5647 14.8809 15.7718 14.6839 15.9424 14.4608C16.1687 14.1643 16.3132 13.7713 16.3904 13.0939C16.4691 12.4027 16.4697 11.5047 16.4697 10.2302V7.76972C16.4697 6.49525 16.4691 5.59726 16.3904 4.90603C16.3132 4.22864 16.1687 3.83566 15.9424 3.53919C15.7718 3.31599 15.5647 3.119 15.33 2.95684C15.0183 2.74158 14.6051 2.60411 13.8929 2.53073C13.166 2.45588 12.2218 2.45533 10.8817 2.45533L7.66562 2.48156C7.35039 2.48156 7.05707 2.4849 6.78332 2.48593ZM5.53892 2.48156C5.32343 2.49218 4.29154 2.51172 4.107 2.53073C3.39474 2.60411 2.98152 2.74158 2.6698 2.95684C2.4351 3.119 2.22798 3.31599 2.05746 3.53919C1.83112 3.83566 1.68658 4.22864 1.60942 4.90603C1.53072 5.59726 1.53015 6.49525 1.53015 7.76972V10.2302C1.53015 11.5047 1.53072 12.4027 1.60942 13.0939C1.68658 13.7713 1.83112 14.1643 2.05746 14.4608C2.22798 14.6839 2.4351 14.8809 2.6698 15.0431C2.98152 15.2584 3.39474 15.3959 4.107 15.4693C4.29152 15.4882 5.32345 15.5602 5.53892 15.5708V2.48156Z" fill="currentColor"/>
          </svg>

          <div slot="header" style="display: flex; align-items: center; justify-content: ${args.collapsed ? 'center' : 'space-between'};">
            ${!args.collapsed ? html`<h2 style="font-size: 1.125rem; font-weight: 600; color: var(--ag-text-primary); margin: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">My App</h2>` : nothing}
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
          <h1>Custom Floating Toggle Icon (colored) + Consumer Header</h1>
          <p>This story demonstrates providing a custom SVG for the floating toggle via the <code>ag-toggle-icon</code> slot. The consumer header shows how you might wire your own collapse/close behavior.</p>
        </main>
      </div>
    `;
  }
};
WithCustomToggleIcon.storyName = 'Custom Toggle (colored) + Consumer Header';

// Removed redundant "Collapsed" variants — these were similar to the above stories and
// could be derived using the Controls panel (collapsed=true). Keeping the examples concise.

// Custom mobile floating toggle (upper-right) + consumer header toggle
// - Floating toggle: visible only on mobile, placed at upper-right to highlight customization; toggles open/close
// - Header toggle: consumer-provided, maintains dual-purpose behavior (close on mobile when open, collapse on desktop)
export const CustomMobileControl: Story = {
  render: () => {
    const [args, updateArgs] = useArgs();

    const handleHeaderButtonClick = () => {
      // Always toggle collapsed state (expand/collapse). Do not treat header button
      // as a mobile open/dismiss control in this story.
      updateArgs({ collapsed: !args.collapsed });
    };

    const toggleOpen = () => updateArgs({ open: !args.open });

    return html`
    <style>
      /* custom floating toggle sits upper-right on mobile only */
      .custom-floating-toggle {
        position: fixed;
        top: 1rem;
        right: 1rem;
        z-index: 1002;
        width: 44px;
        height: 44px;
        border-radius: 50%;
        background: white;
        border: 1px solid #e5e7eb;
        box-shadow: 0 2px 8px rgba(0,0,0,0.15);
        display: none;
        align-items: center;
        justify-content: center;
        color: #64748b; /* custom slate-blue for consumer-provided control */
      }
      /* show on mobile (below 1024px) */
      @media (max-width: 1023px) {
        .custom-floating-toggle { display: flex; }
      }
      .consumer-header-toggle {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: var(--ag-space-7);
        height: var(--ag-space-7);
        border: 1px solid var(--ag-border-subtle);
        border-radius: 0.375rem;
        background: var(--ag-background-secondary);
        color: var(--ag-text-primary);
        cursor: pointer;
      }
    </style>

    <div style="display: flex; height: 500px; border: 1px solid #e5e7eb; border-radius: 0.5rem; overflow: hidden;">
      <!-- custom floating toggle (consumer placement) -->
      <button
        class="custom-floating-toggle"
        @click=${toggleOpen}
        aria-label="Toggle sidebar"
        title="Custom mobile toggle"
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
        ?show-mobile-toggle=${false}
      >
        <!-- Hide the built-in floating toggle button (exposed as a part) for this story.
             This avoids rendering an empty fallback circle while keeping header toggle and
             our custom upper-right floating toggle. -->
        <style>
          ag-sidebar::part(ag-sidebar-toggle-button) {
            display: none !important;
          }
        </style>
        <div slot="header" style=${`display: flex; align-items: center; justify-content: ${args.collapsed ? 'center' : 'space-between'};`}>
          ${!args.collapsed ? html`<h2 style="font-size: 1.125rem; font-weight: 600; color: var(--ag-text-primary); margin: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">My App</h2>` : nothing}
          <button
            class="consumer-header-toggle"
            @click=${handleHeaderButtonClick}
            aria-label=${args.collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            ${PanelIcon()}
          </button>
        </div>

        ${createNavContent()}
        <div slot="footer">
          <p style="color: var(--ag-text-secondary); margin: 0; padding: 0; font-size: 0.875rem;">© 2024</p>
        </div>
      </ag-sidebar>
      <main style="flex: 1; padding: 2rem;">
        <h1>Custom Mobile Toggle (upper-right) + Consumer Header</h1>
        <p><strong>Mobile (&lt;1024px):</strong> The floating custom toggle appears at the upper-right and opens/dismisses the sidebar overlay. It is styled with a slate-blue color to indicate consumer customization.</p>
        <p><strong>Desktop (≥1024px):</strong> The header contains a consumer toggle button that collapses/expands the sidebar (desktop rail). The floating custom toggle is hidden on desktop.</p>
        <p style="color: var(--ag-text-secondary); font-size: 0.875rem; margin-top: 1rem;">This clearly separates mobile open/dismiss (floating toggle) from desktop collapse/expand (header toggle).</p>
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
