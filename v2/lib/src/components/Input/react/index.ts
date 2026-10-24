// v2/lib/src/components/Input/react/index.ts
export { ReactInput } from './ReactInput';
export type { ReactInputProps } from './ReactInput';

// Pull cleanly from core instead of routing through the component wrapper
export { _InputFallback } from '../core/Input.js';
export type { InputFallbackProps } from '../core/Input.js';
