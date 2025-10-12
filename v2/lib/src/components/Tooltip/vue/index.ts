export { default } from './VueTooltip.vue';
export { default as VueTooltip } from './VueTooltip.vue';

// Import types from core to ensure consistency
import type { TooltipProps, TooltipShowEvent, TooltipHideEvent } from '../core/_Tooltip';

/**
 * Vue-specific props interface derived from core TooltipProps
 *
 * This ensures Vue wrapper stays in sync with core component API.
 * We omit onShow/onHide from base props since Vue uses @show/@hide event binding.
 */
export interface VueTooltipProps extends Omit<TooltipProps, 'onShow' | 'onHide'> {
  // All core props are inherited: content, placement, distance, skidding, trigger, disabled
}

/**
 * Props interface with event handlers for programmatic usage
 * (Storybook, testing, imperative APIs)
 *
 * The core component dispatches 'show' and 'hide' events:
 *   this.dispatchEvent(new CustomEvent('show'))  → onShow handler
 *   this.dispatchEvent(new CustomEvent('hide'))  → onHide handler
 */
export interface VueTooltipPropsWithEvents extends VueTooltipProps {
  onShow?: (event: TooltipShowEvent) => void;
  onHide?: (event: TooltipHideEvent) => void;
}

// Re-export event types for consumer convenience
export type { TooltipShowEvent, TooltipHideEvent } from '../core/_Tooltip';
