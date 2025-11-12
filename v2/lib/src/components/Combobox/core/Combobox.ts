/**
 * AgnosticUI v2 Combobox - Barrel Export
 *
 * This file registers the Combobox component and exports all public types.
 */

import { AgCombobox } from './_Combobox.js';

// Export all types and the component class
export * from './_Combobox.js';

// Register the custom element
if (!customElements.get('ag-combobox')) {
  customElements.define('ag-combobox', AgCombobox);
}

// Augment global HTMLElementTagNameMap for TypeScript
declare global {
  interface HTMLElementTagNameMap {
    'ag-combobox': AgCombobox;
  }
}
