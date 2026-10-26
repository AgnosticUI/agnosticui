// Section 9 Direct Core Referencing Rule: Pull the isomorphic engine directly from core
export { ReactBadge } from './ReactBadge.js';
export type { ReactBadgeProps } from './ReactBadge.js';

// Clean export linkages mapping fallback utilities to downstream meta-framework bundles
export { _BadgeFallback } from '../core/_BadgeFallback.js';
export type { BadgeVariant, BadgeSize } from '../core/Badge.js';
