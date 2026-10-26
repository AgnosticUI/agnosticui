import VueBadge from './VueBadge.vue';
import type { BadgeVariant, BadgeSize } from '../core/Badge';

export { VueBadge };
export type {
  BadgeVariant as VueBadgeVariant,
  BadgeSize as VueBadgeSize
};

/** Props for VueBadge */
export interface VueBadgeProps {
  variant?: BadgeVariant;
  size?: BadgeSize;
  dot?: boolean;
  value?: number | null;
  max?: number;
  interactive?: boolean;
  statusLabel?: string | null;
  live?: "off" | "polite" | "assertive";
  hiddenFromAT?: boolean;
}

// Direct core reference bypass for cross-hydration stability
export { _BadgeFallback } from '../core/_BadgeFallback.js';
