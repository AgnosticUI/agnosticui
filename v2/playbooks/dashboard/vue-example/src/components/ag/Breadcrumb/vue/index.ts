export { default } from './VueBreadcrumb.vue';
export { default as VueBreadcrumb } from './VueBreadcrumb.vue';
import type { BreadcrumbItem } from '../core/_Breadcrumb';

// Define props interface
export interface VueBreadcrumbProps {
  items: BreadcrumbItem[];
  type?: 'default' | 'slash' | 'bullet' | 'arrow';
  ariaLabel?: string;
}
