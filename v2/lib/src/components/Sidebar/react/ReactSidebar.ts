
import { createComponent } from '@lit/react';
import React from 'react';
import { AgSidebar } from '../core/Sidebar.js';
export const ReactSidebar = createComponent({
  tagName: 'ag-sidebar',
  elementClass: AgSidebar,
  react: React,
  events: {
    onToggle: 'ag-sidebar-toggle',
    onCollapse: 'ag-sidebar-collapse',
    onBreakpointChange: 'ag-sidebar-breakpoint-change',
  },
});
