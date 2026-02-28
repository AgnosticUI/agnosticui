import * as React from 'react';
import { createComponent, type EventName } from '@lit/react';
import {
  Tabs,
  Tab,
  TabPanel,
  type TabsProps,
  type TabChangeEvent,
} from '../core/Tabs';

/**
 * React-specific props interface for Tabs component
 * Extends core TabsProps with React-specific additions
 */
export interface ReactTabsProps extends TabsProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

/**
 * React-specific props interface for Tab component
 */
export interface ReactTabProps {
  panel: string;
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

/**
 * React-specific props interface for TabPanel component
 */
export interface ReactTabPanelProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

// Create Tabs component with @lit/react
export const ReactTabs = createComponent({
  tagName: 'ag-tabs',
  elementClass: Tabs,
  react: React,
  events: {
    onTabChange: 'tab-change' as EventName<TabChangeEvent>,
  },
});

// Create Tab component with @lit/react
export const ReactTab = createComponent({
  tagName: 'ag-tab',
  elementClass: Tab,
  react: React,
});

// Create TabPanel component with @lit/react
export const ReactTabPanel = createComponent({
  tagName: 'ag-tab-panel',
  elementClass: TabPanel,
  react: React,
});

// Re-export event types
export type { TabChangeEvent, TabChangeEventDetail } from '../core/Tabs';
