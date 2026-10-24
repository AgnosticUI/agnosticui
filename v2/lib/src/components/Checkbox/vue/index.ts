// v2/lib/src/components/Checkbox/vue/index.ts
import VueCheckbox from './VueCheckbox.vue';
import type { CheckboxProps } from '../core/Checkbox.js';

export { VueCheckbox };

// Define props interface matching the exact shape expected by VueCheckbox.vue
export interface VueCheckboxProps extends Omit<CheckboxProps, 'onClick' | 'onChange'> {}

// Reference core cleanly to avoid framework wrapper compiling circular loops
export { _CheckboxFallback } from '../core/Checkbox.js';
export type { CheckboxFallbackProps } from '../core/Checkbox.js';
