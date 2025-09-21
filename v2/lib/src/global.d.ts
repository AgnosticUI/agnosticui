import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'ag-accordion': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'ag-accordion-item': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        open?: boolean;
        'heading-level'?: number;
        disabled?: boolean;
      }, HTMLElement>;
      'ag-tooltip': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        content?: string;
        placement?: string;
        trigger?: string;
      }, HTMLElement>;
    }
  }
}

// Vue module declarations
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<Record<string, unknown>, Record<string, unknown>, unknown>;
  export default component;
}