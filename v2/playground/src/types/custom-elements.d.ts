import 'react';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'ag-accordion': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'ag-accordion-item': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        open?: boolean;
      };
    }
  }
}
