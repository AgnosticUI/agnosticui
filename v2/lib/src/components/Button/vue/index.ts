// v2/lib/src/components/Button/vue/index.ts
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

// Directly reference core to satisfy the TypeScript compiler
export { _ButtonFallback } from '../core/Button.js';
export type { ButtonFallbackProps } from '../core/Button.js';
