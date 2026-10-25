import type { InputProps } from '../core/Input.js';

export { default as VueInput } from './VueInput.vue';

/**
 * Vue Input Props
 * Following AgnosticUI v2 event conventions:
 * - Omit callback props (Vue uses emits)
 * - Support v-model:value via update:value emit
 */
export interface VueInputProps
  extends Omit<
    InputProps,
    "onClick" | "onInput" | "onChange" | "onFocus" | "onBlur"
  > {}

export { _InputFallback } from '../core/Input.js';
export type { InputFallbackProps } from '../core/Input.js';
