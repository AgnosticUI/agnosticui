import VueMark from './VueMark.vue';
import type { MarkProps } from '../core/_Mark.js';

// Retain the framework wrapper component
export { VueMark };

// Preserve the legacy type mapping to prevent downstream consumer compilation errors
export type { MarkProps as VueMarkProps };

// Add the new isomorphic fallback infrastructure additively
export { _MarkFallback } from '../core/_MarkFallback.js';
export type { MarkFallbackProps as VueMarkFallbackProps } from '../core/_MarkFallback.js';
