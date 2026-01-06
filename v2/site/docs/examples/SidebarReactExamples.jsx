import { ReactSidebar } from "agnosticui-core/sidebar/react";
import {
  ReactSidebarNav,
  ReactSidebarNavItem,
  ReactSidebarNavSubmenu,
  ReactSidebarNavPopoverSubmenu,
} from "agnosticui-core/sidebar-nav/react";
import { ReactPopover } from "agnosticui-core/popover/react";
import { useState, useEffect } from "react";

// SVG Icons as inline components
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

const UserIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const SettingsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

const ChevronRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"/>
  </svg>
);

const PanelIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="3" rx="2" />
    <path d="M9 3v18" />
  </svg>
);

const CommandIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
  </svg>
);

export default function SidebarReactExamples() {
  const [sidebar1, setSidebar1] = useState({ isOpen: true, isCollapsed: false });
  const [sidebar2, setSidebar2] = useState({ isOpen: true, isCollapsed: false });
  const [sidebar3, setSidebar3] = useState({ isOpen: true, isCollapsed: false });
  const [sidebar4, setSidebar4] = useState({ isOpen: true });
  const [sidebar5, setSidebar5] = useState({ isOpen: true, isCollapsed: false, activeRoute: '/dashboard' });

  useEffect(() => {
    // Inject critical sidebar navigation styles
    const styleId = 'sidebar-nav-styles-react';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = `
        /* CRITICAL: Sidebar component width - must be defined! */
        ag-sidebar {
          width: var(--ag-sidebar-width, 280px);
          transition: width var(--ag-sidebar-transition-duration, 0.3s) var(--ag-sidebar-transition-easing, ease);
          overflow: visible;
        }

        ag-sidebar[collapsed] {
          width: 64px;
        }

        /* Fix disable-compact-mode sidebar visibility */
        ag-sidebar[disable-compact-mode][open] {
          display: flex !important;
          visibility: visible !important;
          opacity: 1 !important;
          width: var(--ag-sidebar-width, 280px) !important;
          transform: none !important;
        }

        /* Navigation button base styles */
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

        .nav-button svg {
          flex-shrink: 0;
        }

        .nav-button:hover {
          background: var(--ag-background-secondary);
        }

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
          color: var(--ag-text-muted);
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
          pointer-events: none;
          display: none;
        }

        /* Center icons in collapsed mode */
        ag-sidebar[collapsed] .nav-button {
          width: auto;
          padding: var(--ag-space-2);
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
          margin-block-end: var(--ag-space-1);
          color: inherit;
          text-decoration: none;
          border-radius: var(--ag-radius-sm);
          transition: background var(--ag-fx-duration-sm);
        }

        .nav-sublink:hover {
          background: var(--ag-background-secondary);
        }

        /* Active state styles for navigation tracking */
        .nav-button.active,
        .nav-sublink.active {
          background: var(--ag-primary-background);
          color: var(--ag-primary-text);
          font-weight: 500;
        }

        /* Popover submenu styles */
        .nav-button-collapsed::part(ag-popover-body) {
          padding: var(--ag-space-1);
        }

        /* Hide popover header for nav popovers */
        .nav-button-collapsed::part(ag-popover-header) {
          display: none;
        }
      `;
      document.head.appendChild(style);
    }

    // Set up event listeners for submenu toggles
    const buttons = document.querySelectorAll('.nav-button-expanded');
    buttons.forEach((button) => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const navItem = button.closest('ag-sidebar-nav-item');
        const submenu = navItem?.querySelector('ag-sidebar-nav-submenu');

        if (!submenu) return;

        const currentAriaExpanded = button.getAttribute('aria-expanded');
        const isCurrentlyExpanded = currentAriaExpanded === 'true';

        if (isCurrentlyExpanded) {
          button.setAttribute('aria-expanded', 'false');
          submenu.removeAttribute('open');
        } else {
          button.setAttribute('aria-expanded', 'true');
          submenu.setAttribute('open', '');
        }
      });
    });
  }, []);

  const toggleSidebar1Collapse = () => {
    setSidebar1({ ...sidebar1, isCollapsed: !sidebar1.isCollapsed });
  };

  const toggleSidebar2Collapse = () => {
    setSidebar2({ ...sidebar2, isCollapsed: !sidebar2.isCollapsed });
  };

  const toggleSidebar4Responsive = () => {
    setSidebar4({ ...sidebar4, isOpen: !sidebar4.isOpen });
  };

  const toggleSidebar5Collapse = () => {
    setSidebar5({ ...sidebar5, isCollapsed: !sidebar5.isCollapsed });
  };

  const handleNavClick = (route, e) => {
    e.preventDefault();
    setSidebar5({ ...sidebar5, activeRoute: route });

    const sidebar = e.target.closest('ag-sidebar');

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

  const handleSettingsClick = (e) => {
    handleNavClick('/settings', e);
    // Also toggle the submenu
    const button = e.currentTarget;
    const navItem = button.closest('ag-sidebar-nav-item');
    const submenu = navItem?.querySelector('ag-sidebar-nav-submenu');

    if (!submenu) return;

    const currentAriaExpanded = button.getAttribute('aria-expanded');
    const isCurrentlyExpanded = currentAriaExpanded === 'true';

    if (isCurrentlyExpanded) {
      button.setAttribute('aria-expanded', 'false');
      submenu.removeAttribute('open');
    } else {
      button.setAttribute('aria-expanded', 'true');
      submenu.setAttribute('open', '');
    }
  };

  return (
    <section>
      <div className="mbe4">
        <h2>Default Sidebar with Navigation</h2>
        <p>
          Demonstrates the sidebar with navigation items, submenus, and both expanded/collapsed states.
          Click the header toggle to collapse into rail mode (icon-only).
        </p>
      </div>
      <div className="mbe6">
        <div style={{ position: 'relative', display: 'flex', height: '500px', border: '1px solid var(--ag-border-color)', borderRadius: '0.5rem', overflow: 'hidden', contain: 'layout' }}>
          <ReactSidebar
            open={sidebar1.isOpen}
            collapsed={sidebar1.isCollapsed}
            showMobileToggle={true}
            onToggle={(open) => setSidebar1({ ...sidebar1, isOpen: open })}
            onCollapse={(collapsed) => setSidebar1({ ...sidebar1, isCollapsed: collapsed })}
          >
            <h2
              slot="ag-header-start"
              style={{ margin: 0, fontSize: '1.125rem', fontWeight: 600 }}
            >
              Dashboard
            </h2>
            <button
              type="button"
              slot="ag-header-toggle"
              onClick={toggleSidebar1Collapse}
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
                >
                  <HomeIcon />
                  <span className="nav-label">Dashboard</span>
                </button>
              </ReactSidebarNavItem>

              <ReactSidebarNavItem>
                <button
                  type="button"
                  className="nav-button nav-button-expanded"
                  aria-expanded="false"
                >
                  <FolderIcon />
                  <span className="nav-label">Projects</span>
                  <span className="chevron"><ChevronRightIcon /></span>
                </button>

                {/* Popover for COLLAPSED mode */}
                <ReactPopover
                  className="nav-button-collapsed"
                  placement="right-start"
                  triggerType="click"
                  distance={8}
                  arrow={true}
                >
                  <button
                    slot="trigger"
                    type="button"
                    className="nav-button"
                  >
                    <FolderIcon />
                    <span className="nav-label">Projects</span>
                    <span className="collapsed-indicator">
                      <svg viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 3l2 2 2-2" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                      </svg>
                    </span>
                  </button>
                  <ReactSidebarNavPopoverSubmenu
                    slot="content"
                    className="popover-submenu"
                  >
                    <a href="#" className="nav-sublink" onClick={(e) => e.preventDefault()}>Project Alpha</a>
                    <a href="#" className="nav-sublink" onClick={(e) => e.preventDefault()}>Project Beta</a>
                    <a href="#" className="nav-sublink" onClick={(e) => e.preventDefault()}>Project Gamma</a>
                  </ReactSidebarNavPopoverSubmenu>
                </ReactPopover>

                {/* Inline submenu for expanded mode */}
                <ReactSidebarNavSubmenu>
                  <a className="nav-sublink" href="#" onClick={(e) => e.preventDefault()}>Project Alpha</a>
                  <a className="nav-sublink" href="#" onClick={(e) => e.preventDefault()}>Project Beta</a>
                  <a className="nav-sublink" href="#" onClick={(e) => e.preventDefault()}>Project Gamma</a>
                </ReactSidebarNavSubmenu>
              </ReactSidebarNavItem>

              <ReactSidebarNavItem>
                <button
                  type="button"
                  className="nav-button"
                >
                  <UserIcon />
                  <span className="nav-label">Team</span>
                </button>
              </ReactSidebarNavItem>

              <ReactSidebarNavItem>
                <button
                  type="button"
                  className="nav-button nav-button-expanded"
                  aria-expanded="false"
                >
                  <SettingsIcon />
                  <span className="nav-label">Settings</span>
                  <span className="chevron"><ChevronRightIcon /></span>
                </button>

                {/* Popover for COLLAPSED mode */}
                <ReactPopover
                  className="nav-button-collapsed"
                  placement="right-start"
                  triggerType="click"
                  distance={8}
                  arrow={true}
                >
                  <button
                    slot="trigger"
                    type="button"
                    className="nav-button"
                  >
                    <SettingsIcon />
                    <span className="nav-label">Settings</span>
                    <span className="collapsed-indicator">
                      <svg viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 3l2 2 2-2" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                      </svg>
                    </span>
                  </button>
                  <ReactSidebarNavPopoverSubmenu
                    slot="content"
                    className="popover-submenu"
                  >
                    <a href="#" className="nav-sublink" onClick={(e) => e.preventDefault()}>Profile</a>
                    <a href="#" className="nav-sublink" onClick={(e) => e.preventDefault()}>Billing</a>
                    <a href="#" className="nav-sublink" onClick={(e) => e.preventDefault()}>Security</a>
                    <a href="#" className="nav-sublink" onClick={(e) => e.preventDefault()}>Preferences</a>
                  </ReactSidebarNavPopoverSubmenu>
                </ReactPopover>

                <ReactSidebarNavSubmenu>
                  <a className="nav-sublink" href="#" onClick={(e) => e.preventDefault()}>Profile</a>
                  <a className="nav-sublink" href="#" onClick={(e) => e.preventDefault()}>Billing</a>
                  <a className="nav-sublink" href="#" onClick={(e) => e.preventDefault()}>Security</a>
                  <a className="nav-sublink" href="#" onClick={(e) => e.preventDefault()}>Preferences</a>
                </ReactSidebarNavSubmenu>
              </ReactSidebarNavItem>
            </ReactSidebarNav>

            <div
              slot="ag-footer"
              style={{ fontSize: '0.875rem', color: 'var(--ag-text-secondary)' }}
            >
              © 2024 Company
            </div>
          </ReactSidebar>

          <main style={{ flex: 1, padding: '2rem', overflow: 'auto', background: 'var(--ag-background)' }}>
            <h1 style={{ marginTop: 0 }}>Main Content</h1>
            <p>Click the header toggle to collapse the sidebar into rail mode.</p>
            <p>When collapsed, hover over items with submenus to see them in popovers.</p>
          </main>
        </div>
      </div>

      <div className="mbe4">
        <h2>Sidebar with Header Actions</h2>
        <p>
          Demonstrates using <code>ag-header-start</code>, <code>ag-header-end</code>, and <code>ag-header-toggle</code> slots
          for a composable header layout with action buttons.
        </p>
      </div>
      <div className="mbe6">
        <div style={{ position: 'relative', display: 'flex', height: '500px', border: '1px solid var(--ag-border-color)', borderRadius: '0.5rem', overflow: 'hidden', contain: 'layout' }}>
          <ReactSidebar
            open={sidebar2.isOpen}
            collapsed={sidebar2.isCollapsed}
            showMobileToggle={true}
            onToggle={(open) => setSidebar2({ ...sidebar2, isOpen: open })}
            onCollapse={(collapsed) => setSidebar2({ ...sidebar2, isCollapsed: collapsed })}
          >
            <h2
              slot="ag-header-start"
              style={{ margin: 0, fontSize: '1.125rem', fontWeight: 600 }}
            >
              My Application
            </h2>
            <button
              type="button"
              slot="ag-header-end"
              onClick={() => {}}
              style={{ background: 'none', border: 'none', padding: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', color: 'inherit', borderRadius: '0.25rem' }}
              aria-label="Settings"
              title="Settings"
            >
              <SettingsIcon />
            </button>
            <button
              type="button"
              slot="ag-header-toggle"
              onClick={toggleSidebar2Collapse}
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
                >
                  <HomeIcon />
                  <span className="nav-label">Dashboard</span>
                </button>
              </ReactSidebarNavItem>
              <ReactSidebarNavItem>
                <button
                  type="button"
                  className="nav-button"
                >
                  <FolderIcon />
                  <span className="nav-label">Projects</span>
                </button>
              </ReactSidebarNavItem>
              <ReactSidebarNavItem>
                <button
                  type="button"
                  className="nav-button"
                >
                  <UserIcon />
                  <span className="nav-label">Team</span>
                </button>
              </ReactSidebarNavItem>
            </ReactSidebarNav>

            <div
              slot="ag-footer"
              style={{ fontSize: '0.875rem', color: 'var(--ag-text-secondary)' }}
            >
              © 2024 Company
            </div>
          </ReactSidebar>

          <main style={{ flex: 1, padding: '2rem', overflow: 'auto', background: 'var(--ag-background)' }}>
            <h1 style={{ marginTop: 0 }}>Header Actions Pattern</h1>
            <p>The header includes a settings button in the <code>ag-header-end</code> slot.</p>
            <p>This allows for flexible header layouts with multiple action buttons.</p>
          </main>
        </div>
      </div>

      <div className="mbe4">
        <h2>Sidebar with Built-in Toggle</h2>
        <p>
          Using <code>show-header-toggle</code> adds a built-in collapse button automatically.
        </p>
      </div>
      <div className="mbe6">
        <div style={{ position: 'relative', display: 'flex', height: '500px', border: '1px solid var(--ag-border-color)', borderRadius: '0.5rem', overflow: 'hidden', contain: 'layout' }}>
          <ReactSidebar
            open={sidebar3.isOpen}
            collapsed={sidebar3.isCollapsed}
            showHeaderToggle={true}
            showMobileToggle={true}
            onToggle={(open) => setSidebar3({ ...sidebar3, isOpen: open })}
            onCollapse={(collapsed) => setSidebar3({ ...sidebar3, isCollapsed: collapsed })}
          >
            <h2
              slot="ag-header-start"
              style={{ margin: 0, fontSize: '1.125rem', fontWeight: 600 }}
            >
              Built-in Toggle
            </h2>

            <ReactSidebarNav>
              <ReactSidebarNavItem>
                <button
                  type="button"
                  className="nav-button active"
                  aria-current="page"
                >
                  <HomeIcon />
                  <span className="nav-label">Dashboard</span>
                </button>
              </ReactSidebarNavItem>
              <ReactSidebarNavItem>
                <button
                  type="button"
                  className="nav-button"
                >
                  <FolderIcon />
                  <span className="nav-label">Projects</span>
                </button>
              </ReactSidebarNavItem>
              <ReactSidebarNavItem>
                <button
                  type="button"
                  className="nav-button"
                >
                  <UserIcon />
                  <span className="nav-label">Team</span>
                </button>
              </ReactSidebarNavItem>
            </ReactSidebarNav>

            <div
              slot="ag-footer"
              style={{ fontSize: '0.875rem', color: 'var(--ag-text-secondary)' }}
            >
              © 2024 Company
            </div>
          </ReactSidebar>

          <main style={{ flex: 1, padding: '2rem', overflow: 'auto', background: 'var(--ag-background)' }}>
            <h1 style={{ marginTop: 0 }}>Built-in Header Toggle</h1>
            <p>No need to provide a custom toggle button—the sidebar includes one automatically.</p>
          </main>
        </div>
      </div>

      <div className="mbe4">
        <h2>Disable Compact Mode</h2>
        <p>
          With <code>disable-compact-mode</code>, the sidebar has no intermediate collapsed/rail state.
          It's either fully open (expanded) or completely hidden. This pattern is used in applications like Claude AI Studio.
        </p>
      </div>
      <div className="mbe6">
        <div style={{ position: 'relative', display: 'flex', height: '500px', border: '1px solid var(--ag-border-color)', borderRadius: '0.5rem', overflow: 'hidden', contain: 'layout' }}>
          <ReactSidebar
            open={sidebar4.isOpen}
            disableCompactMode={true}
            showMobileToggle={true}
            onToggle={(open) => setSidebar4({ ...sidebar4, isOpen: open })}
          >
            <h2
              slot="ag-header-start"
              style={{ margin: 0, fontSize: '1.125rem', fontWeight: 600 }}
            >
              AI Studio
            </h2>
            <button
              type="button"
              slot="ag-header-toggle"
              onClick={toggleSidebar4Responsive}
              style={{ background: 'none', border: 'none', padding: '8px 0', cursor: 'pointer', display: 'flex', alignItems: 'center', color: 'inherit' }}
              aria-label="Toggle sidebar"
            >
              <CommandIcon />
            </button>

            <ReactSidebarNav>
              <ReactSidebarNavItem>
                <button
                  type="button"
                  className="nav-button active"
                  aria-current="page"
                >
                  <HomeIcon />
                  <span className="nav-label">Dashboard</span>
                </button>
              </ReactSidebarNavItem>
              <ReactSidebarNavItem>
                <button
                  type="button"
                  className="nav-button"
                >
                  <FolderIcon />
                  <span className="nav-label">Projects</span>
                </button>
              </ReactSidebarNavItem>
              <ReactSidebarNavItem>
                <button
                  type="button"
                  className="nav-button"
                >
                  <UserIcon />
                  <span className="nav-label">Team</span>
                </button>
              </ReactSidebarNavItem>
              <ReactSidebarNavItem>
                <button
                  type="button"
                  className="nav-button"
                >
                  <SettingsIcon />
                  <span className="nav-label">Settings</span>
                </button>
              </ReactSidebarNavItem>
            </ReactSidebarNav>

            <div
              slot="ag-footer"
              style={{ fontSize: '0.875rem', color: 'var(--ag-text-secondary)' }}
            >
              © 2024 Company
            </div>
          </ReactSidebar>

          <main style={{ flex: 1, padding: '2rem', overflow: 'auto', background: 'var(--ag-background)' }}>
            <h1 style={{ marginTop: 0 }}>Disable Compact Mode</h1>
            <p>Use the mobile toggle button to show/hide the sidebar.</p>
            <p>Notice there's no collapsed/rail mode—it's either fully visible or completely hidden.</p>
          </main>
        </div>
      </div>

      <div className="mbe4">
        <h2>Active Item Tracking</h2>
        <p>
          Click navigation items to see the active state change. This demonstrates how to track the current route
          and apply active styling to both top-level and submenu items.
        </p>
      </div>
      <div className="mbe6">
        <div style={{ position: 'relative', display: 'flex', height: '500px', border: '1px solid var(--ag-border-color)', borderRadius: '0.5rem', overflow: 'hidden', contain: 'layout' }}>
          <ReactSidebar
            open={sidebar5.isOpen}
            collapsed={sidebar5.isCollapsed}
            showMobileToggle={true}
            onToggle={(open) => setSidebar5({ ...sidebar5, isOpen: open })}
            onCollapse={(collapsed) => setSidebar5({ ...sidebar5, isCollapsed: collapsed })}
          >
            <h2
              slot="ag-header-start"
              style={{ margin: 0, fontSize: '1.125rem', fontWeight: 600 }}
            >
              Navigation
            </h2>
            <button
              type="button"
              slot="ag-header-toggle"
              onClick={toggleSidebar5Collapse}
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
                  onClick={(e) => handleNavClick('/dashboard', e)}
                >
                  <HomeIcon />
                  <span className="nav-label">Dashboard</span>
                </button>
              </ReactSidebarNavItem>

              <ReactSidebarNavItem>
                <button
                  type="button"
                  className="nav-button"
                  data-route="/projects"
                  onClick={(e) => handleNavClick('/projects', e)}
                >
                  <FolderIcon />
                  <span className="nav-label">Projects</span>
                </button>
              </ReactSidebarNavItem>

              <ReactSidebarNavItem>
                <button
                  type="button"
                  className="nav-button"
                  data-route="/team"
                  onClick={(e) => handleNavClick('/team', e)}
                >
                  <UserIcon />
                  <span className="nav-label">Team</span>
                </button>
              </ReactSidebarNavItem>

              <ReactSidebarNavItem>
                <button
                  type="button"
                  className="nav-button nav-button-expanded"
                  aria-expanded="false"
                  data-route="/settings"
                  onClick={handleSettingsClick}
                >
                  <SettingsIcon />
                  <span className="nav-label">Settings</span>
                  <span className="chevron"><ChevronRightIcon /></span>
                </button>

                <ReactPopover
                  className="nav-button-collapsed"
                  placement="right-start"
                  triggerType="click"
                  distance={8}
                  arrow={true}
                >
                  <button
                    slot="trigger"
                    type="button"
                    className="nav-button"
                    data-route="/settings"
                    onClick={(e) => handleNavClick('/settings', e)}
                  >
                    <SettingsIcon />
                    <span className="nav-label">Settings</span>
                    <span className="collapsed-indicator">
                      <svg viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 3l2 2 2-2" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                      </svg>
                    </span>
                  </button>
                  <ReactSidebarNavPopoverSubmenu
                    slot="content"
                    className="popover-submenu"
                  >
                    <a
                      href="#"
                      className="nav-sublink"
                      data-route="/settings/profile"
                      onClick={(e) => handleNavClick('/settings/profile', e)}
                    >Profile</a>
                    <a
                      href="#"
                      className="nav-sublink"
                      data-route="/settings/billing"
                      onClick={(e) => handleNavClick('/settings/billing', e)}
                    >Billing</a>
                    <a
                      href="#"
                      className="nav-sublink"
                      data-route="/settings/security"
                      onClick={(e) => handleNavClick('/settings/security', e)}
                    >Security</a>
                  </ReactSidebarNavPopoverSubmenu>
                </ReactPopover>

                <ReactSidebarNavSubmenu>
                  <a
                    className="nav-sublink"
                    href="#"
                    data-route="/settings/profile"
                    onClick={(e) => handleNavClick('/settings/profile', e)}
                  >Profile</a>
                  <a
                    className="nav-sublink"
                    href="#"
                    data-route="/settings/billing"
                    onClick={(e) => handleNavClick('/settings/billing', e)}
                  >Billing</a>
                  <a
                    className="nav-sublink"
                    href="#"
                    data-route="/settings/security"
                    onClick={(e) => handleNavClick('/settings/security', e)}
                  >Security</a>
                </ReactSidebarNavSubmenu>
              </ReactSidebarNavItem>
            </ReactSidebarNav>
          </ReactSidebar>

          <main style={{ flex: 1, padding: '2rem', overflow: 'auto', background: 'var(--ag-background)' }}>
            <h1 style={{ marginTop: 0 }}>Active Item Tracking</h1>
            <p>Current route: <strong>{sidebar5.activeRoute}</strong></p>
            <p>Click navigation items to see the active state change.</p>
            <ul>
              <li><strong>Active styling:</strong> Background color and font weight change</li>
              <li><strong>ARIA current:</strong> The active item has aria-current="page" for accessibility</li>
              <li><strong>Submenu support:</strong> Sublinks also track active state</li>
              <li><strong>Popover sync:</strong> Active state works in both inline and popover modes</li>
            </ul>
            <p>
              In a real application, you'd integrate this with your router (Vue Router, etc.) to automatically
              update the active state based on the current route.
            </p>
          </main>
        </div>
      </div>
    </section>
  );
}
