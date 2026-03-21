import VueTagFx from './VueTagFx.vue';
import type { TagVariant, TagShape } from '../../Tag/core/Tag';

export { VueTagFx };

/** Props for VueTagFx */
export interface VueTagFxProps {
  variant?: TagVariant;
  shape?: TagShape;
  uppercase?: boolean;
  removable?: boolean;
  fx?: string;
  fxSpeed?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fxEase?: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'bounce' | 'spring-sm' | 'spring-md' | 'spring-lg';
  fxDisabled?: boolean;
}
