export { default } from './VueMenu.vue';
export { default as VueMenu } from './VueMenu.vue';
export { default as VueMenuItem } from './VueMenuItem.vue';
export { default as VueMenuSeparator } from './VueMenuSeparator.vue';

// Define types separately since Vue component types are handled differently
export interface VueMenuProps {
  ariaLabel?: string;
  ariaLabelledBy?: string;
}

export interface VueMenuItemProps {
  value: string;
  disabled?: boolean;
  href?: string;
  target?: string;
}

export interface VueMenuSeparatorProps {
  // No specific props for separator
}