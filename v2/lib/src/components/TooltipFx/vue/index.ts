import VueTooltipFx from './VueTooltipFx.vue';
import type { TooltipProps, TooltipShowEvent, TooltipHideEvent } from '../../Tooltip/core/Tooltip';

export { VueTooltipFx };

/** Props for VueTooltipFx */
export interface VueTooltipFxProps extends Omit<TooltipProps, 'onShow' | 'onHide'> {
  fx?: string;
  fxSpeed?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fxEase?: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'bounce' | 'spring-sm' | 'spring-md' | 'spring-lg';
  fxDisabled?: boolean;
}

export interface VueTooltipFxPropsWithEvents extends VueTooltipFxProps {
  onShow?: (event: TooltipShowEvent) => void;
  onHide?: (event: TooltipHideEvent) => void;
}

export type { TooltipShowEvent, TooltipHideEvent } from '../../Tooltip/core/Tooltip';
