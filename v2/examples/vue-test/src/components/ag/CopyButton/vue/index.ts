import VueCopyButton from './VueCopyButton.vue';

export { VueCopyButton };

/** Props for VueCopyButton */
export interface VueCopyButtonProps {
  text: string;
  label?: string;
  successLabel?: string;
  errorLabel?: string;
  timeout?: number;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'ghost' | 'monochrome';
}

/** Emits for VueCopyButton */
export interface VueCopyButtonEmits {
  (e: 'copy', event: CustomEvent<{ text: string }>): void;
  (e: 'copy-error', event: CustomEvent<{ error: Error }>): void;
}
