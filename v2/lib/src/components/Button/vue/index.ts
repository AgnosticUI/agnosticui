import type { ButtonProps } from '../core/Button.js';

export { default as VueButton } from './VueButton.vue';

/**
 * Vue Button Props
 * Following AgnosticUI v2 event conventions:
 * - Omit callback props (Vue uses emits)
 * - Support v-model:pressed via update:pressed emit
 */
export interface VueButtonProps
  extends Omit<ButtonProps, "onClick" | "onFocus" | "onBlur" | "onToggle"> {}

// Directly reference core to satisfy the TypeScript compiler
export { _ButtonFallback } from '../core/Button.js';
export type { ButtonFallbackProps } from '../core/Button.js';
