export { default } from './VueDrawer.vue';
export { default as VueDrawer } from './VueDrawer.vue';

// Define types separately since Vue component types are handled differently
export interface VueDrawerProps {
  open?: boolean;
  heading?: string;
  description?: string;
  noCloseOnEscape?: boolean;
  noCloseOnBackdrop?: boolean;
  showCloseButton?: boolean;
  position?: 'start' | 'end' | 'top' | 'bottom';
}
