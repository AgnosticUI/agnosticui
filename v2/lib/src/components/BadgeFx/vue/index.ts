import VueBadgeFx from './VueBadgeFx.vue';
import type { VueBadgeProps } from '../../Badge/vue/index';

export { VueBadgeFx };

/** Props for VueBadgeFx */
export interface VueBadgeFxProps extends VueBadgeProps {
  fx?: string;
  fxSpeed?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fxEase?: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'bounce' | 'spring-sm' | 'spring-md' | 'spring-lg';
  fxDisabled?: boolean;
}
