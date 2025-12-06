import '../core/Popover'; // Import to register the custom element
import VuePopover from './VuePopover.vue';
import type { PopoverProps, PopoverShowEvent, PopoverHideEvent } from '../core/_Popover';
import type { Placement } from '@floating-ui/dom';

export { VuePopover };
export type { PopoverProps, PopoverShowEvent, PopoverHideEvent, Placement };
