// v2/lib/src/components/Select/react/index.ts
export { ReactSelect } from './ReactSelect';
export type { ReactSelectProps } from './ReactSelect';

// Pull cleanly from core instead of routing through the component wrapper
export { _SelectFallback } from '../core/Select.js';
export type { SelectFallbackProps } from '../core/Select.js';
