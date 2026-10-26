// Section 9 Direct Core Referencing: Native wrappers are exported, but 
// isomorphic fallback logic and types are pulled straight from the core.
import VueAvatar from './VueAvatar.vue';
import VueAvatarGroup from './VueAvatarGroup.vue';
import type { AvatarProps as VueAvatarProps } from '../core/_Avatar.js';

export { VueAvatar, VueAvatarGroup };
export type { VueAvatarProps };

export { _AvatarFallback } from '../core/_AvatarFallback.js';
export { _AvatarGroupFallback } from '../core/_AvatarGroupFallback.js';
export type { AvatarFallbackProps } from '../core/_AvatarFallback.js';
export type { AvatarGroupFallbackProps } from '../core/_AvatarGroupFallback.js';

// Re-export types for convenience
export type { AvatarSize, AvatarShape, AvatarVariant } from '../core/_Avatar.js';

export interface VueAvatarGroupProps {
  // No specific props for the group container
}
