import { FlexContainer } from './core/_FlexContainer.js';

export class FlexCol extends FlexContainer {
  // Override default direction without setting in constructor
  // This avoids setting attributes during construction which React 19 doesn't allow
  protected _direction: 'row' | 'row-reverse' | 'column' | 'column-reverse' = 'column';
}

if (!customElements.get('ag-flex-col')) {
  customElements.define('ag-flex-col', FlexCol);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-flex-col': FlexCol;
  }
}

// Re-export base types
export * from './core/_FlexContainer.js';
