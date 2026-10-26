// Section 9 Direct Core Referencing: Native wrappers are exported, but 
// isomorphic fallback logic and types are pulled straight from the core.
export { ReactAvatar, ReactAvatarGroup } from './ReactAvatar.js';
export type { ReactAvatarProps, ReactAvatarGroupProps } from './ReactAvatar.js';
export { _AvatarFallback } from '../core/_AvatarFallback.js';
export { _AvatarGroupFallback } from '../core/_AvatarGroupFallback.js';
export type { AvatarFallbackProps } from '../core/_AvatarFallback.js';
export type { AvatarGroupFallbackProps } from '../core/_AvatarGroupFallback.js';
export type { AvatarSize, AvatarShape, AvatarVariant } from '../core/_Avatar.js';
