export { default as VueTooltip } from './VueTooltip.vue';

// Define props interface
export interface VueTooltipProps {
  content?: string;
  placement?: 'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end' | 'right-start' | 'right-end';
  distance?: number;
  skidding?: number;
  trigger?: string;
  disabled?: boolean;
}
