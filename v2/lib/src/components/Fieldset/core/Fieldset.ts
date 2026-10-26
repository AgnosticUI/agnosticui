/**
 * AgnosticUI v2 Fieldset - Barrel File
 *
 * This file handles custom element registration and TypeScript declarations.
 */

import { AgFieldset } from './_Fieldset.js';

// Manual registration with conditional check
if (!customElements.get('ag-fieldset')) {
  customElements.define('ag-fieldset', AgFieldset);
}

// TypeScript type mapping for autocomplete
declare global {
  interface HTMLElementTagNameMap {
    'ag-fieldset': AgFieldset;
  }
}

export { AgFieldset } from './_Fieldset.js';
export type { FieldsetProps } from './_Fieldset.js';
export { _FieldsetFallback } from './_FieldsetFallback.js';
export type { FieldsetFallbackProps } from './_FieldsetFallback.js';
