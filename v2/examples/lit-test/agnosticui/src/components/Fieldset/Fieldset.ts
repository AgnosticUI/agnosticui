/**
 * AgnosticUI v2 Fieldset - Barrel File
 *
 * This file handles custom element registration and TypeScript declarations.
 */

import { AgFieldset } from './core/_Fieldset.js';

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

// Re-export everything from core
export * from './core/_Fieldset.js';
