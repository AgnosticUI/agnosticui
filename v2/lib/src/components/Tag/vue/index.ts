import VueTag from './VueTag.vue';
import type { TagVariant, TagShape } from '../core/Tag.js'; 

export { VueTag };
export type { 
  TagVariant as VueTagVariant, 
  TagShape as VueTagShape 
};

/** Props for VueTag */
export interface VueTagProps {
  variant?: TagVariant;
  shape?: TagShape;
  isUppercase?: boolean;
}

// Add the new isomorphic fallback infrastructure additively
export { _TagFallback } from '../core/_TagFallback.js';
export type { TagFallbackProps as VueTagFallbackProps } from '../core/_TagFallback.js';
