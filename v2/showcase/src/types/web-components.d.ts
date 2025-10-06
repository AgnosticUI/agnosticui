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
        noCloseOnEscape?: boolean;
        noCloseOnBackdrop?: boolean;
        onDialogOpen?: (event: Event) => void;
        onDialogClose?: (event: Event) => void;
        onDialogCancel?: (event: Event) => void;
      };
      'ag-drawer': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
        open?: boolean;
        heading?: string;
        description?: string;
        noCloseOnEscape?: boolean;
        noCloseOnBackdrop?: boolean;
        showCloseButton?: boolean;
        position?: 'start' | 'end' | 'top' | 'bottom';
      };
      'ag-icon-button': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
        label: string;
        icon?: string;
        unicode?: string;
        size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
        variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
        type?: 'button' | 'submit' | 'reset';
        disabled?: boolean;
        pressed?: boolean;
        loading?: boolean;
      };
      'ag-tooltip': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
        content?: string;
        placement?: 'top' | 'top-start' | 'top-end' | 'right' | 'right-start' | 'right-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end';
        distance?: number;
        skidding?: number;
        trigger?: string;
        disabled?: boolean;
      };
    }
  }
}
