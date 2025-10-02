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
    }
  }
}
