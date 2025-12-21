import { AgAspectRatio } from './_AspectRatio';

if (!customElements.get('ag-aspect-ratio')) {
  customElements.define('ag-aspect-ratio', AgAspectRatio);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-aspect-ratio': AgAspectRatio;
  }
}

export * from './_AspectRatio';
