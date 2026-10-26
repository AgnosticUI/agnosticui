import VueFieldset from './VueFieldset.vue';
import type { FieldsetProps as VueFieldsetProps } from '../core/_Fieldset.js';

export { VueFieldset, type VueFieldsetProps };

// Direct core referencing to prevent compilation bottlenecks in downstream frameworks
export { _FieldsetFallback } from '../core/Fieldset.js';
export type { FieldsetFallbackProps } from '../core/Fieldset.js';
