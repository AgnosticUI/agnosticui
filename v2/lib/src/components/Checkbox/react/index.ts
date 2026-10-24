// v2/lib/src/components/Checkbox/react/index.ts
export { ReactCheckbox } from './ReactCheckbox';
export type { ReactCheckboxProps } from './ReactCheckbox';

// Reference core cleanly to avoid framework wrapper compiling circular loops
export { _CheckboxFallback } from '../core/Checkbox.js';
export type { CheckboxFallbackProps } from '../core/Checkbox.js';
