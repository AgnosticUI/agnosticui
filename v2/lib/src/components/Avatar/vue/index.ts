import VueAvatar from './VueAvatar.vue';
import VueAvatarGroup from './VueAvatarGroup.vue';
import type { AvatarProps as VueAvatarProps } from '../core/Avatar';

export { VueAvatar, VueAvatarGroup };
export type { VueAvatarProps };

// Re-export types for convenience
export type { AvatarSize, AvatarShape, AvatarVariant } from '../core/Avatar';

export interface VueAvatarGroupProps {
  // No specific props for the group container
}
