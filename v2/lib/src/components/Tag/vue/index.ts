// v2/lib/src/components/Tag/vue/index.ts
import VueTag from './VueTag.vue';
import type { TagVariant, TagShape } from '../core/_Tag'; 

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

