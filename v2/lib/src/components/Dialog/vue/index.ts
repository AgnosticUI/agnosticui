export { default as VueDialog } from './VueDialog.vue';
export { default as VueDialogHeader } from './VueDialogHeader.vue';
export { default as VueDialogFooter } from './VueDialogFooter.vue';
import type { VueDialogProps } from './VueDialog.vue';

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
