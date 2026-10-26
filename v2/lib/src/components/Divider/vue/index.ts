// Section 9 Direct Core Referencing: Pull fallback systems cleanly from core targets
import VueDivider from './VueDivider.vue';
import type { DividerProps as VueDividerProps } from '../core/_Divider.js';

export { VueDivider };
export type { VueDividerProps };
export { _DividerFallback } from '../core/_DividerFallback.js';
export type { DividerFallbackProps } from '../core/_DividerFallback.js';
export type { DividerJustify, DividerSize, DividerVariant } from '../core/_Divider.js';
