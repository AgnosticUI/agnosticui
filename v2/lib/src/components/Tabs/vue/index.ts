export { default as VueTabs } from './VueTabs.vue';
export { default as VueTab } from './VueTab.vue';
export { default as VueTabPanel } from './VueTabPanel.vue';

// Re-export types from core for convenience
export type { TabChangeEventDetail, TabChangeEvent } from '../core/_Tabs';

/**
 * Props for VueTabs component
 */
export interface VueTabsProps {
  activeTab?: number;
  activation?: 'manual' | 'automatic';
  orientation?: 'horizontal' | 'vertical';
  ariaLabel?: string;
  ariaLabelledBy?: string;
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