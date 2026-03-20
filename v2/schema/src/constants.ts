/**
 * CSS selector matching all FACE-enabled components in the SDUI schema.
 * ag-combobox and ag-slider are excluded (both in skipComponents and not in schema).
 * Import this when building validation utilities for ag-dynamic-renderer output.
 */
export const AG_FACE_SELECTOR =
  'ag-input, ag-checkbox, ag-radio, ag-toggle, ag-select, ' +
  'ag-selection-button-group, ag-selection-card-group, ag-rating';
