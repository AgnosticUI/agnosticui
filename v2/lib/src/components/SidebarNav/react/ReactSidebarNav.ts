import { createComponent } from '@lit/react';
import React from 'react';
import {
  AgSidebarNav,
  AgSidebarNavItem,
  AgSidebarNavSubmenu,
  AgSidebarNavPopoverSubmenu,
} from '../core/SidebarNav.js';

export const ReactSidebarNav = createComponent({
  tagName: 'ag-sidebar-nav',
  elementClass: AgSidebarNav,
  react: React,
});

export const ReactSidebarNavItem = createComponent({
  tagName: 'ag-sidebar-nav-item',
  elementClass: AgSidebarNavItem,
  react: React,
});

export const ReactSidebarNavSubmenu = createComponent({
  tagName: 'ag-sidebar-nav-submenu',
  elementClass: AgSidebarNavSubmenu,
  react: React,
});

export const ReactSidebarNavPopoverSubmenu = createComponent({
  tagName: 'ag-sidebar-nav-popover-submenu',
  elementClass: AgSidebarNavPopoverSubmenu,
  react: React,
});
