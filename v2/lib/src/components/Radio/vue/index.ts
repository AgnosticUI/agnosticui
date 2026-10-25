export { default as VueRadio } from './VueRadio.vue';

// Re-export props interface and types from core for convenience
export type { RadioProps as VueRadioProps, RadioChangeEventDetail, RadioChangeEvent, RadioSize, RadioTheme } from '../core/Radio.js';

// Isomorphic Fallback Engine Direct Core Referencing
export { _RadioFallback } from '../core/Radio.js';
