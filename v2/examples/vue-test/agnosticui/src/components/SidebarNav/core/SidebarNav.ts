import { AgSidebarNav } from './_SidebarNav.js';
import { AgSidebarNavItem } from './_SidebarNavItem.js';
import { AgSidebarNavSubmenu } from './_SidebarNavSubmenu.js';
import { AgSidebarNavPopoverSubmenu } from './_SidebarNavPopoverSubmenu.js';

if (!customElements.get('ag-sidebar-nav')) {
  customElements.define('ag-sidebar-nav', AgSidebarNav);
}
if (!customElements.get('ag-sidebar-nav-item')) {
  customElements.define('ag-sidebar-nav-item', AgSidebarNavItem);
}
if (!customElements.get('ag-sidebar-nav-submenu')) {
  customElements.define('ag-sidebar-nav-submenu', AgSidebarNavSubmenu);
}
if (!customElements.get('ag-sidebar-nav-popover-submenu')) {
  customElements.define('ag-sidebar-nav-popover-submenu', AgSidebarNavPopoverSubmenu);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-sidebar-nav': AgSidebarNav;
    'ag-sidebar-nav-item': AgSidebarNavItem;
    'ag-sidebar-nav-submenu': AgSidebarNavSubmenu;
    'ag-sidebar-nav-popover-submenu': AgSidebarNavPopoverSubmenu;
  }
}

export * from './_SidebarNav.js';
export * from './_SidebarNavItem.js';
export * from './_SidebarNavSubmenu.js';
export * from './_SidebarNavPopoverSubmenu.js';
