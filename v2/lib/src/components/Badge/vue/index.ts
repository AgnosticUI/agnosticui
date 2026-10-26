// Section 9 Direct Core Referencing Rule: Pull the isomorphic engine directly from core
import VueBadge from './VueBadge.vue';
import type { BadgeProps as VueBadgeProps } from '../core/_Badge.js';

export { VueBadge };
export type { VueBadgeProps };

// Clean export linkages mapping fallback utilities to downstream meta-framework bundles
export { _BadgeFallback } from '../core/_BadgeFallback.js';
export type { BadgeVariant, BadgeSize } from '../core/Badge.js';
