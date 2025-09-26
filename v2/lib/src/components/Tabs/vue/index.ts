export { default as VueTabs } from './VueTabs.vue';
export { default as VueTab } from './VueTab.vue';
export { default as VueTabPanel } from './VueTabPanel.vue';

// Define types separately since Vue component types are handled differently
export interface VueTabsProps {
  activeTab?: number;
  activation?: 'manual' | 'automatic';
  orientation?: 'horizontal' | 'vertical';
  ariaLabel?: string;
  ariaLabelledBy?: string;
}

export interface VueTabProps {
  panel?: string;
  disabled?: boolean;
}

export interface VueTabPanelProps {
  hidden?: boolean;
}