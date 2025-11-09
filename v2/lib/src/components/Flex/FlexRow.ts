import { FlexContainer } from './core/_FlexContainer.js';

export class FlexRow extends FlexContainer {
  // Override default direction without setting in constructor
  // This avoids setting attributes during construction which React 19 doesn't allow
  protected _direction: 'row' | 'row-reverse' | 'column' | 'column-reverse' = 'row';
}

if (!customElements.get('ag-flex-row')) {
  customElements.define('ag-flex-row', FlexRow);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-flex-row': FlexRow;
  }
}

// Re-export base types
export * from './core/_FlexContainer.js';
