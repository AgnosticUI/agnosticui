import { FlexContainer } from './core/_FlexContainer.js';

export class FlexInline extends FlexContainer {
  constructor() {
    super();
    this.inline = true;
  }
}

if (!customElements.get('ag-flex-inline')) {
  customElements.define('ag-flex-inline', FlexInline);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-flex-inline': FlexInline;
  }
}

// Re-export base types
export * from './core/_FlexContainer.js';
