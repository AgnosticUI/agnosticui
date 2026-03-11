import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ReactSidebar } from './ReactSidebar';
import {
  ReactSidebarNav,
  ReactSidebarNavItem,
  ReactSidebarNavSubmenu,
  ReactSidebarNavPopoverSubmenu,
} from '../../SidebarNav/react/index';
import { ReactPopover } from '../../Popover/react/ReactPopover';

const HomeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);
const FolderIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
  </svg>
);
const UsersIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const SettingsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"/>
    <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
  </svg>
);
const ChevronRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"/>
  </svg>
);

const NAV_CSS = `
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

function handleSubmenuToggle(e: React.MouseEvent) {
  e.preventDefault();
  e.stopPropagation();
  const button = e.currentTarget as HTMLElement;
  const navItem = button.closest('ag-sidebar-nav-item');
  const submenu = navItem?.querySelector('ag-sidebar-nav-submenu');
  if (!submenu) return;
  const isExpanded = button.getAttribute('aria-expanded') === 'true';
  button.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');
  if (isExpanded) submenu.removeAttribute('open');
  else submenu.setAttribute('open', '');
}

function SidebarDemo({ initialCollapsed = false, variant = 'default' }: { initialCollapsed?: boolean; variant?: string }) {
  const [collapsed, setCollapsed] = useState(initialCollapsed);
  return (
    <>
      <style>{NAV_CSS}</style>
      <div style={{ position: 'relative', display: 'flex', height: '500px', border: '1px solid var(--ag-border-color)', borderRadius: '0.5rem', overflow: 'hidden', contain: 'layout' as any }}>
        <ReactSidebar collapsed={collapsed} variant={variant as any} aria-label="Main navigation" showMobileToggle>
          <h2 slot="ag-header-start" style={{ margin: 0, fontSize: '1.125rem', fontWeight: 600 }}>Dashboard</h2>
          <button
            type="button"
            slot="ag-header-toggle"
            onClick={() => setCollapsed(c => !c)}
            style={{ background: 'none', border: 'none', padding: '8px 0', cursor: 'pointer', display: 'flex', alignItems: 'center', color: 'inherit' }}
            aria-label="Toggle sidebar"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
              <path d="M9 3v18"/>
            </svg>
          </button>
          <ReactSidebarNav>
            <ReactSidebarNavItem>
              <button type="button" className="nav-button active" aria-current="page">
                <HomeIcon /><span className="nav-label">Dashboard</span>
              </button>
            </ReactSidebarNavItem>
            <ReactSidebarNavItem>
              <button type="button" className="nav-button nav-button-expanded" aria-expanded="false" onClick={handleSubmenuToggle}>
                <FolderIcon /><span className="nav-label">Projects</span>
                <span className="chevron"><ChevronRightIcon /></span>
              </button>
              <ReactPopover className="nav-button-collapsed" placement="right-start" triggerType="click" distance={8} arrow={true}>
                <button slot="trigger" type="button" className="nav-button"><FolderIcon /></button>
                <ReactSidebarNavPopoverSubmenu slot="content">
                  <a href="#" className="nav-sublink" onClick={e => e.preventDefault()}>Project Alpha</a>
                  <a href="#" className="nav-sublink" onClick={e => e.preventDefault()}>Project Beta</a>
                  <a href="#" className="nav-sublink" onClick={e => e.preventDefault()}>Project Gamma</a>
                </ReactSidebarNavPopoverSubmenu>
              </ReactPopover>
              <ReactSidebarNavSubmenu>
                <a className="nav-sublink" href="#" onClick={e => e.preventDefault()}>Project Alpha</a>
                <a className="nav-sublink" href="#" onClick={e => e.preventDefault()}>Project Beta</a>
                <a className="nav-sublink" href="#" onClick={e => e.preventDefault()}>Project Gamma</a>
              </ReactSidebarNavSubmenu>
            </ReactSidebarNavItem>
            <ReactSidebarNavItem>
              <button type="button" className="nav-button">
                <UsersIcon /><span className="nav-label">Team</span>
              </button>
            </ReactSidebarNavItem>
            <ReactSidebarNavItem>
              <button type="button" className="nav-button nav-button-expanded" aria-expanded="false" onClick={handleSubmenuToggle}>
                <SettingsIcon /><span className="nav-label">Settings</span>
                <span className="chevron"><ChevronRightIcon /></span>
              </button>
              <ReactPopover className="nav-button-collapsed" placement="right-start" triggerType="click" distance={8} arrow={true}>
                <button slot="trigger" type="button" className="nav-button"><SettingsIcon /></button>
                <ReactSidebarNavPopoverSubmenu slot="content">
                  <a href="#" className="nav-sublink" onClick={e => e.preventDefault()}>Profile</a>
                  <a href="#" className="nav-sublink" onClick={e => e.preventDefault()}>Billing</a>
                  <a href="#" className="nav-sublink" onClick={e => e.preventDefault()}>Security</a>
                </ReactSidebarNavPopoverSubmenu>
              </ReactPopover>
              <ReactSidebarNavSubmenu>
                <a className="nav-sublink" href="#" onClick={e => e.preventDefault()}>Profile</a>
                <a className="nav-sublink" href="#" onClick={e => e.preventDefault()}>Billing</a>
                <a className="nav-sublink" href="#" onClick={e => e.preventDefault()}>Security</a>
              </ReactSidebarNavSubmenu>
            </ReactSidebarNavItem>
          </ReactSidebarNav>
          <div slot="ag-footer" style={{ fontSize: '0.875rem', color: 'var(--ag-text-secondary)' }}>
            © 2024 Company
          </div>
        </ReactSidebar>
        <main style={{ flex: 1, padding: '2rem', overflow: 'auto', background: 'var(--ag-background)' }}>
          <h1 style={{ marginTop: 0 }}>Main Content</h1>
          <p>Click the header toggle to collapse the sidebar into rail mode.</p>
          <p>When collapsed, click icon-only items with submenus to see them in popovers.</p>
        </main>
      </div>
    </>
  );
}

const meta = {
  title: 'AgnosticUI/Sidebar',
  component: ReactSidebar,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof ReactSidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { render: () => <SidebarDemo /> };
export const Collapsed: Story = { render: () => <SidebarDemo initialCollapsed={true} /> };
export const Elevated: Story = { render: () => <SidebarDemo variant="elevated" /> };
