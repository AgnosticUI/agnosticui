import type { Meta, StoryObj } from '@storybook/web-components';
import { useArgs } from "storybook/preview-api";
import { html, nothing } from 'lit';
import { createElement, Folder, User, Settings, Home, PanelLeftClose, PanelLeftOpen, PanelRightClose, PanelRightOpen } from 'lucide';
import {type AgSidebarProps } from 'agnosticui-core/sidebar';
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
  },
  args: {
    open: false,
    collapsed: false,
    position: 'left',
    ariaLabel: 'Main navigation',
    breakpoint: 1024,
    variant: 'default',
    noTransition: false,
  },
};

export default meta;
type Story = StoryObj<AgSidebarProps>;

const createNavContent = () => html`
  <style>
    /* Light DOM styles for slotted content */
    .nav-menu {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .nav-item {
      margin-bottom: 4px;
    }
    .nav-button {
      width: 100%;
      padding: 8px;
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
      background: var(--ag-background-secondary);;
    }
    .nav-button.active {
      background: var(--ag-primary-background);
      color: var(--ag-text-primary);
    }
    /* Icon styling within nav-button */
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
      transition: transform 0.2s;
      font-size: 12px;
    }
    .nav-button[aria-expanded="true"] .chevron {
      transform: rotate(90deg);
    }
    /* Sub-menu styles */
    .nav-submenu {
      list-style: none;
      margin-left: 0.875rem;
      border-left: 1px solid var(--ag-border-subtle);
      padding-left: 0.625rem;
      margin-block-start: var(--ag-space-1);
      margin-block-end: var(--ag-space-1);
      display: none; /* Hidden by default */
    }
    .nav-submenu.open {
      display: block;
    }
    .nav-sublink {
      display: block;
      padding: var(--ag-space-2);
      border-radius: var(--ag-radius-md);
      text-decoration: none;
      color: var(--ag-text-primary);
      font-size: var(--ag-font-size-sm);
      transition: background 0.15s;
    }
    .nav-sublink:hover {
      background: var(--ag-background-tertiary);
      color: var(--ag-text-primary);
    }
    .nav-sublink:active,
    .nav-sublink.active {
      background: var(--ag-primary-background);
      color: var(--ag-text-primary);
    }

    /* Collapsed state (rail mode) styles */
    ag-sidebar[collapsed] .nav-button {
      justify-content: center;
      padding-inline: 8px; /* Adjust horizontal padding for collapsed state */
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
    ag-sidebar[collapsed] .nav-submenu {
      /* Ensure submenus are hidden when sidebar is collapsed */
      display: none;
    }
  </style>
  <ul class="nav-menu">
    <li class="nav-item">
      <button class="nav-button active" aria-current="page">
        <ag-icon no-fill>${createElement(Home)}</ag-icon>
        <span class="nav-label">Dashboard</span>
      </button>
    </li>
    <li class="nav-item">
      <button class="nav-button" aria-expanded="false">
        <ag-icon no-fill>${createElement(Folder)}</ag-icon>
        <span class="nav-label">Projects</span>
        <span class="chevron">›</span>
      </button>
      <ul class="nav-submenu">
        <li class="nav-subitem"><a href="#" class="nav-sublink">Project Alpha</a></li>
        <li class="nav-subitem"><a href="#" class="nav-sublink">Project Beta</a></li>
      </ul>
    </li>
    <li class="nav-item">
      <button class="nav-button">
        <ag-icon no-fill>${createElement(User)}</ag-icon>
        <span class="nav-label">Team</span>
      </button>
    </li>
    <li class="nav-item">
      <button class="nav-button" aria-expanded="false">
        <ag-icon no-fill>${createElement(Settings)}</ag-icon>
        <span class="nav-label">Settings</span>
        <span class="chevron">›</span>
      </button>
      <ul class="nav-submenu">
        <li class="nav-subitem"><a href="#" class="nav-sublink">Profile</a></li>
        <li class="nav-subitem"><a href="#" class="nav-sublink">Billing</a></li>
        <li class="nav-subitem"><a href="#" class="nav-sublink">Security</a></li>
      </ul>
    </li>
  </ul>
`;

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
        <p>This is the main content area.</p>
      </main>
    </div>
  `,
};

export const WithHeaderFooter: Story = {
  render: () => {
    const [args, updateArgs] = useArgs(); // Correct usage

    const getToggleIcon = (collapsed: boolean, position: 'left' | 'right') => {
      if (position === 'left') {
        return collapsed ? createElement(PanelLeftOpen) : createElement(PanelLeftClose);
      } else {
        return collapsed ? createElement(PanelRightOpen) : createElement(PanelRightClose);
      }
    };

    const toggleCollapsed = () => {
      updateArgs({ collapsed: !args.collapsed });
    };

    return html`
    <style>
      ag-sidebar[collapsed] [slot="footer"] {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: var(--ag-space-2);
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
      >
        <div slot="header" style="display: flex; align-items: center; justify-content: ${args.collapsed ? 'center' : 'space-between'};">
          ${!args.collapsed ? html`<h2 style="font-size: 1.125rem; font-weight: 600; color: var(--ag-text-primary); margin: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">My App</h2>` : nothing}
          <button
            @click=${toggleCollapsed}
            aria-label=${args.collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            style="display: flex; align-items: center; justify-content: center; width: 2rem; height: 2rem; border: 1px solid var(--ag-border-subtle); border-radius: 0.375rem; background: var(--ag-background-secondary); color: var(--text-primary); cursor: pointer;"
          >
            <ag-icon no-fill>${getToggleIcon(args.collapsed, args.position)}</ag-icon>
          </button>
        </div>
        ${createNavContent()}
        <div slot="footer" style="text-align: ${args.collapsed ? 'center' : 'left'};">
          <p class="footer-text" style="color: var(--ag-text-secondary) margin: 0; font-size: 0.875rem;">
            ${args.collapsed ? '©' : '© 2025'}
          </p>
        </div>
      </ag-sidebar>
      <main style="flex: 1; padding: 2rem;">
        <h1>Main Content</h1>
        <p>This is the main content area.</p>
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
