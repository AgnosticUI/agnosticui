export { default } from './VueTabs.vue';
export { default as VueTabs } from './VueTabs.vue';
export { default as VueTab } from './VueTab.vue';
export { default as VueTabPanel } from './VueTabPanel.vue';

// Re-export types from core for convenience
export type { TabChangeEventDetail, TabChangeEvent, TabsProps } from '../core/Tabs';

// Import TabsProps to extend it
import type { TabsProps } from '../core/Tabs';

/**
 * Props for VueTabs component
 */
export interface VueTabsProps extends Omit<TabsProps, 'onTabChange'> {
  activeTab?: number;
}

/**
 * Props with event handlers for programmatic usage (e.g., Storybook, testing, imperative APIs)
 * In Vue templates, use @tab-change instead of :onTabChange
 */
export interface VueTabsPropsWithEvents extends VueTabsProps {
  onTabChange?: (detail: { activeTab: number; previousTab: number }) => void;
}

export interface VueTabProps {
  panel?: string;
  disabled?: boolean;
}

export interface VueTabPanelProps {
  hidden?: boolean;
}

