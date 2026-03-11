import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './Sidebar';
import '../../SidebarNav/core/SidebarNav';
import '../../Popover/core/Popover';

const HOME_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`;
const FOLDER_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`;
const USER_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;
const SETTINGS_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>`;
const CHEVRON_RIGHT_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`;
const PANEL_TOGGLE_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/></svg>`;

const NAV_STYLES = `
  .nav-button {
    display: flex;
    align-items: center;
    gap: var(--ag-space-3);
    position: relative;
    padding: var(--ag-space-2) var(--ag-space-3);
    margin-block-end: var(--ag-space-1);
    border: none;
    background: none;
    cursor: pointer;
    width: 100%;
    text-align: left;
    border-radius: var(--ag-radius-sm);
    transition: background var(--ag-fx-duration-sm);
    color: inherit;
  }
  .nav-button svg { flex-shrink: 0; }
  .nav-button:hover { background: var(--ag-background-secondary); }
  .nav-button.active {
    background: var(--ag-primary-background);
    color: var(--ag-primary-text);
    font-weight: 500;
  }
  .nav-label {
    flex-grow: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    transition: opacity var(--ag-sidebar-transition-duration) var(--ag-sidebar-transition-easing);
  }
  .chevron {
    display: flex;
    align-items: center;
    transition: transform var(--ag-fx-duration-md), opacity var(--ag-fx-duration-sm);
    margin-left: auto;
  }
  .nav-button[aria-expanded="true"] .chevron { transform: rotate(90deg); }
  ag-sidebar[collapsed] .nav-label,
  ag-sidebar[collapsed] .chevron {
    opacity: 0;
    pointer-events: none;
    display: none;
  }
  ag-sidebar[collapsed] .nav-button {
    width: auto;
    padding: var(--ag-space-2);
  }
  ag-sidebar[collapsed] ag-sidebar-nav-submenu:not(.popover-submenu),
  ag-sidebar:not([collapsed]) ag-popover,
  ag-sidebar[collapsed] .nav-button-expanded,
  ag-sidebar:not([collapsed]) .nav-button-collapsed {
    display: none !important;
  }
  ag-sidebar[collapsed] ag-popover.nav-button-collapsed {
    display: block !important;
  }
  ag-sidebar-nav-submenu {
    display: none;
    overflow: hidden;
  }
  ag-sidebar-nav-submenu[open] {
    display: block;
  }
  .nav-sublink {
    display: block;
    padding: var(--ag-space-2) var(--ag-space-3);
    margin-block-end: var(--ag-space-1);
    color: inherit;
    text-decoration: none;
    border-radius: var(--ag-radius-sm);
    transition: background var(--ag-fx-duration-sm);
  }
  .nav-sublink:hover { background: var(--ag-background-secondary); }
  .nav-button-collapsed::part(ag-popover-body) { padding: var(--ag-space-1); }
`;

const handleSubmenuToggle = (e: Event) => {
  e.preventDefault();
  e.stopPropagation();
  const button = e.currentTarget as HTMLElement;
  const navItem = button.closest('ag-sidebar-nav-item');
  if (!navItem) return;
  const submenu = navItem.querySelector('ag-sidebar-nav-submenu');
  if (!submenu) return;
  const isExpanded = button.getAttribute('aria-expanded') === 'true';
  button.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');
  if (isExpanded) submenu.removeAttribute('open');
  else submenu.setAttribute('open', '');
};

const toggleCollapse = (e: Event) => {
  const sidebar = (e.target as HTMLElement).closest('ag-sidebar') as any;
  if (sidebar && sidebar.toggleCollapse) sidebar.toggleCollapse();
};

const meta: Meta = {
  title: 'AgnosticUI/Sidebar',
  component: 'ag-sidebar',
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  argTypes: {
    collapsed: { control: 'boolean' },
    variant: { control: 'select', options: ['default', 'bordered', 'elevated'] },
  },
  args: { collapsed: false, variant: 'default' },
  render: (args: any) => html`
    <style>${NAV_STYLES}</style>
    <div style="position: relative; display: flex; height: 500px; border: 1px solid var(--ag-border-color); border-radius: 0.5rem; overflow: hidden; contain: layout;">
      <ag-sidebar
        ?collapsed=${args.collapsed}
        .variant=${args.variant}
        aria-label="Main navigation"
        show-mobile-toggle
      >
        <h2 slot="ag-header-start" style="margin: 0; font-size: 1.125rem; font-weight: 600;">Dashboard</h2>
        <button
          type="button"
          slot="ag-header-toggle"
          aria-label="Toggle sidebar"
          style="background: none; border: none; padding: 8px 0; cursor: pointer; display: flex; align-items: center; color: inherit;"
          @click=${toggleCollapse}
        >
          <span .innerHTML=${PANEL_TOGGLE_SVG}></span>
        </button>

        <ag-sidebar-nav>
          <ag-sidebar-nav-item>
            <button type="button" class="nav-button active" aria-current="page">
              <span .innerHTML=${HOME_SVG}></span>
              <span class="nav-label">Dashboard</span>
            </button>
          </ag-sidebar-nav-item>

          <ag-sidebar-nav-item>
            <button type="button" class="nav-button nav-button-expanded" aria-expanded="false" @click=${handleSubmenuToggle}>
              <span .innerHTML=${FOLDER_SVG}></span>
              <span class="nav-label">Projects</span>
              <span class="chevron"><span .innerHTML=${CHEVRON_RIGHT_SVG}></span></span>
            </button>
            <ag-popover class="nav-button-collapsed" placement="right-start" trigger-type="click" distance="8" arrow>
              <button slot="trigger" type="button" class="nav-button">
                <span .innerHTML=${FOLDER_SVG}></span>
              </button>
              <ag-sidebar-nav-popover-submenu slot="content">
                <a href="#" class="nav-sublink" @click=${(e: Event) => e.preventDefault()}>Project Alpha</a>
                <a href="#" class="nav-sublink" @click=${(e: Event) => e.preventDefault()}>Project Beta</a>
                <a href="#" class="nav-sublink" @click=${(e: Event) => e.preventDefault()}>Project Gamma</a>
              </ag-sidebar-nav-popover-submenu>
            </ag-popover>
            <ag-sidebar-nav-submenu>
              <a href="#" class="nav-sublink" @click=${(e: Event) => e.preventDefault()}>Project Alpha</a>
              <a href="#" class="nav-sublink" @click=${(e: Event) => e.preventDefault()}>Project Beta</a>
              <a href="#" class="nav-sublink" @click=${(e: Event) => e.preventDefault()}>Project Gamma</a>
            </ag-sidebar-nav-submenu>
          </ag-sidebar-nav-item>

          <ag-sidebar-nav-item>
            <button type="button" class="nav-button">
              <span .innerHTML=${USER_SVG}></span>
              <span class="nav-label">Team</span>
            </button>
          </ag-sidebar-nav-item>

          <ag-sidebar-nav-item>
            <button type="button" class="nav-button nav-button-expanded" aria-expanded="false" @click=${handleSubmenuToggle}>
              <span .innerHTML=${SETTINGS_SVG}></span>
              <span class="nav-label">Settings</span>
              <span class="chevron"><span .innerHTML=${CHEVRON_RIGHT_SVG}></span></span>
            </button>
            <ag-popover class="nav-button-collapsed" placement="right-start" trigger-type="click" distance="8" arrow>
              <button slot="trigger" type="button" class="nav-button">
                <span .innerHTML=${SETTINGS_SVG}></span>
              </button>
              <ag-sidebar-nav-popover-submenu slot="content">
                <a href="#" class="nav-sublink" @click=${(e: Event) => e.preventDefault()}>Profile</a>
                <a href="#" class="nav-sublink" @click=${(e: Event) => e.preventDefault()}>Billing</a>
                <a href="#" class="nav-sublink" @click=${(e: Event) => e.preventDefault()}>Security</a>
              </ag-sidebar-nav-popover-submenu>
            </ag-popover>
            <ag-sidebar-nav-submenu>
              <a href="#" class="nav-sublink" @click=${(e: Event) => e.preventDefault()}>Profile</a>
              <a href="#" class="nav-sublink" @click=${(e: Event) => e.preventDefault()}>Billing</a>
              <a href="#" class="nav-sublink" @click=${(e: Event) => e.preventDefault()}>Security</a>
            </ag-sidebar-nav-submenu>
          </ag-sidebar-nav-item>
        </ag-sidebar-nav>

        <div slot="ag-footer" style="font-size: 0.875rem; color: var(--ag-text-secondary);">
          © 2024 Company
        </div>
      </ag-sidebar>

      <main style="flex: 1; padding: 2rem; overflow: auto; background: var(--ag-background);">
        <h1 style="margin-top: 0;">Main Content</h1>
        <p>Click the panel toggle button to collapse the sidebar into rail mode.</p>
        <p>When collapsed, click icon-only items with submenus to see them in popovers.</p>
      </main>
    </div>
  `,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const Collapsed: Story = { args: { collapsed: true } };

export const Elevated: Story = { args: { variant: 'elevated' } };
