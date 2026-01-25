export { default } from './VueButton.vue';
export { default as VueButton } from './VueButton.vue';

// Define props interface
export interface VueButtonProps {
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  loading?: boolean;
  toggle?: boolean;
  pressed?: boolean;
  ariaLabel?: string;
  ariaDescribedby?: string;
}
