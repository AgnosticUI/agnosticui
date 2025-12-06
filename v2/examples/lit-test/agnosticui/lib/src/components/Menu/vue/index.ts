export { default } from './VueMenu.vue';
export { default as VueMenu } from './VueMenu.vue';
export { default as VueMenuItem } from './VueMenuItem.vue';
export { default as VueMenuSeparator } from './VueMenuSeparator.vue';

// Re-export types from core for convenience
import type {
  MenuButtonProps,
} from '../core/Menu';

export type {
  MenuOpenEventDetail,
  MenuCloseEventDetail,
  MenuSelectEventDetail,
} from '../core/Menu';

// Define props interface for VueMenu
export interface VueMenuProps
  extends Omit<
    MenuButtonProps,
    | "onClick"
    | "onFocus"
    | "onBlur"
    | "onKeyDown"
    | "onMenuOpen"
    | "onMenuClose"
  > {
  open?: boolean;
  placement?: string;
  menuAriaLabel?: string;
  menuAlign?: "left" | "right";
  menuType?: "default" | "single-select";
  selectedValue?: string;
  checkHiddenItems?: boolean;
}

export interface VueMenuItemProps {
  value: string;
  disabled?: boolean;
  href?: string;
  target?: string;
  variant?: string;
  checked?: boolean;
  selected?: boolean;
}

export interface VueMenuSeparatorProps {
  // No specific props for separator
}
