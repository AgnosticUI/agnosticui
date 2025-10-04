// AgnosticUI Web Component Type Declarations for React

import type { DetailedHTMLProps, HTMLAttributes } from 'react';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'ag-button': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
        variant?: string;
        size?: string;
        shape?: string;
        bordered?: boolean;
        ghost?: boolean;
        link?: boolean;
        grouped?: boolean;
        type?: string;
        disabled?: boolean;
        loading?: boolean;
        toggle?: boolean;
        pressed?: boolean;
      };
      'ag-accordion': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
      'ag-accordion-item': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
        open?: boolean;
        'heading-level'?: number;
        disabled?: boolean;
        indicator?: boolean;
        background?: boolean;
      };
      'ag-toggle': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
        label?: string;
        checked?: boolean;
        size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
        variant?: 'default' | 'success' | 'warning' | 'danger';
        disabled?: boolean;
        readonly?: boolean;
        'labelled-by'?: string;
        'described-by'?: string;
        name?: string;
        value?: string;
      };
      'ag-dialog': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
        open?: boolean;
        heading?: string;
        description?: string;
        showCloseButton?: boolean;
        closeOnEscape?: boolean;
        closeOnBackdrop?: boolean;
        onDialogOpen?: (event: Event) => void;
        onDialogClose?: (event: Event) => void;
        onDialogCancel?: (event: Event) => void;
      };
    }
  }
}
