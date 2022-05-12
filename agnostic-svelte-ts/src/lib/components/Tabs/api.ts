import type { SvelteComponentTyped } from 'svelte';

export type Tab = {
	title: string;
	tabPanelComponent: SvelteComponentTyped;
	tabButtonComponent?: SvelteComponentTyped;
	isActive?: boolean;
	ariaControls?: string;
};

export type TabSizes = 'small' | 'large' | 'xlarge' | '';

export type NavigationDirection = 'asc' | 'desc';

//export { default as default } from './Tabs.svelte';
