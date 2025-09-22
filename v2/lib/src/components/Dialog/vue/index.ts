export { default as VueDialog } from './VueDialog.vue';
export { default as VueDialogHeader } from './VueDialogHeader.vue';
export { default as VueDialogFooter } from './VueDialogFooter.vue';

// Define types separately since Vue component types are handled differently
export interface VueDialogProps {
  open?: boolean;
  heading?: string;
  description?: string;
  closeOnEscape?: boolean;
  closeOnBackdrop?: boolean;
  showCloseButton?: boolean;
}

export interface VueDialogHeaderProps {
  // No specific props for header
}

export interface VueDialogFooterProps {
  // No specific props for footer
}