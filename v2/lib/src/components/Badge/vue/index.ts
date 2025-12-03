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
}
