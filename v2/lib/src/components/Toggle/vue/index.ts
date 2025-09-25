export { default as VueToggle } from './VueToggle.vue';

// Define types separately since Vue component types are handled differently
export interface VueToggleProps {
  label?: string;
  checked?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'success' | 'warning' | 'danger';
  disabled?: boolean;
  readonly?: boolean;
  labelledBy?: string;
  describedBy?: string;
  name?: string;
  value?: string;
}