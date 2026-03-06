import { AgImage } from './_Image';

// Manual registration with conditional check
if (!customElements.get('ag-image')) {
  customElements.define('ag-image', AgImage);
}

// TypeScript type mapping for autocomplete
declare global {
  interface HTMLElementTagNameMap {
    'ag-image': AgImage;
  }
}

// Re-export everything from the core component
export * from './_Image';
