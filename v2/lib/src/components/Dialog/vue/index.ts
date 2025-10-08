export { default as VueDialog } from './VueDialog.vue';
export { default as VueDialogHeader } from './VueDialogHeader.vue';
export { default as VueDialogFooter } from './VueDialogFooter.vue';

// Define props interface
export interface VueDialogProps {
  open?: boolean;
  heading?: string;
  description?: string;
  noCloseOnEscape?: boolean;
  noCloseOnBackdrop?: boolean;
  showCloseButton?: boolean;
}

/**
 * Extended props for VueDialog, including event handlers for dialog events.
 */
export interface VueDialogExtendedProps extends VueDialogProps {
  /** Emitted when the dialog is opened */
  onDialogOpen?: () => void;
  /** Emitted when the dialog is closed */
  onDialogClose?: () => void;
  /** Emitted when the dialog is canceled */
  onDialogCancel?: () => void;
}

// Define types separately since Vue component types are handled differently
export interface VueDialogHeaderProps {
  // No specific props for header
}

export interface VueDialogFooterProps {
  // No specific props for footer
}
