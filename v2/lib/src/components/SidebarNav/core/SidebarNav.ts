import { AgSidebarNav } from './_SidebarNav.js';
import { AgSidebarNavItem } from './_SidebarNavItem.js';

if (!customElements.get('ag-sidebar-nav')) {
  customElements.define('ag-sidebar-nav', AgSidebarNav);
}
if (!customElements.get('ag-sidebar-nav-item')) {
  customElements.define('ag-sidebar-nav-item', AgSidebarNavItem);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-sidebar-nav': AgSidebarNav;
    'ag-sidebar-nav-item': AgSidebarNavItem;
  }
}

export * from './_SidebarNav.js';
export * from './_SidebarNavItem.js';
