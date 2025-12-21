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
      'ag-menu-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        disabled?: boolean;
        'aria-label'?: string;
      }, HTMLElement>;
      'ag-menu': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        open?: boolean;
        placement?: 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end';
        'aria-label'?: string;
        'aria-labelledby'?: string;
      }, HTMLElement>;
      'ag-menu-item': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        value?: string;
        disabled?: boolean;
        href?: string;
        target?: string;
      }, HTMLElement>;
      'ag-menu-separator': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

// Vue module declarations
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<Record<string, unknown>, Record<string, unknown>, unknown>;
  export default component;
}