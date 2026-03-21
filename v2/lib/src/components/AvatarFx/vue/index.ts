import VueAvatarFx from './VueAvatarFx.vue';
import type { AvatarSize, AvatarShape, AvatarVariant } from '../../Avatar/core/Avatar';

export { VueAvatarFx };

/** Props for VueAvatarFx */
export interface VueAvatarFxProps {
  text?: string;
  imgSrc?: string;
  imgAlt?: string;
  size?: AvatarSize;
  shape?: AvatarShape;
  variant?: AvatarVariant;
  ariaLabel?: string;
  fx?: string;
  fxSpeed?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fxEase?: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'bounce' | 'spring-sm' | 'spring-md' | 'spring-lg';
  fxDisabled?: boolean;
}
