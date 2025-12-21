import { createComponent, type EventName } from '@lit/react';
import React from 'react';
import { 
  AgSidebar, 
  type AgSidebarToggleEvent, 
  type AgSidebarCollapseEvent,
  type AgSidebarProps 
} from '../core/Sidebar.js';

export const ReactSidebar = createComponent({
  tagName: 'ag-sidebar',
  elementClass: AgSidebar,
  react: React,
  events: {
    onToggle: 'ag-sidebar-toggle' as EventName<AgSidebarToggleEvent>,
    onCollapse: 'ag-sidebar-collapse' as EventName<AgSidebarCollapseEvent>,
  },
});

// Export props type for React consumers
export type ReactSidebarProps = AgSidebarProps;

// Re-export event types for convenience
export type { AgSidebarToggleEvent, AgSidebarCollapseEvent };
