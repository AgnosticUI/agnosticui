import{i as e}from"./Button.Bujdzq23.js";import{t as a}from"./Icon.odq14qpJ.js";const l=e`
  /* Label - Default (top position) */
  .ag-form-control__label {
    display: block;
    font-size: var(--ag-font-size-base);
    font-weight: 600;
    color: var(--ag-text-primary);
    line-height: var(--ag-line-height-base);
    margin-block-end: var(--ag-space-2);
  }

  /* Label bottom position - label appears below control */
  .ag-form-control__label--bottom {
    margin-block-end: 0;
    margin-block-start: var(--ag-space-2);
  }

  /* Visually hidden label (still accessible to screen readers) */
  .ag-form-control__label--hidden {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    margin: -1px !important;
    overflow: hidden !important;
    clip: rect(0, 0, 0, 0) !important;
    white-space: nowrap !important;
    border: 0 !important;
  }

  /* Horizontal layout wrapper - for start/end label positions */
  .ag-form-control--horizontal {
    display: flex;
    align-items: baseline; /* Align text baselines for visual centering */
    gap: var(--ag-space-3);
  }

  /* Horizontal label layout (start or end) - overrides display: block */
  .ag-form-control__label--horizontal {
    display: inline-block; /* Override display: block */
    min-inline-size: 100px;
    max-inline-size: 200px; /* Prevent super long labels */
    margin-inline-end: 0; /* Gap handles spacing */
    margin-block-end: 0;
    flex-shrink: 0; /* Don't let label shrink */
  }

  /* Label at start (before control) */
  .ag-form-control__label--start {
    order: -1; /* Ensure label comes first in flex layout */
  }

  /* Label at end (after control) */
  .ag-form-control__label--end {
    order: 1; /* Ensure label comes after in flex layout */
  }

  /* Input/control sizing for horizontal layout - progressive enhancement */
  .ag-form-control--horizontal input,
  .ag-form-control--horizontal textarea,
  .ag-form-control--horizontal select {
    /* Progressive enhancement with field-sizing (Chrome/Safari TP) */
    field-sizing: content;
    max-inline-size: 100%;
    min-inline-size: 100px;

    /* Fallback for browsers without field-sizing support */
    width: 200px;
    box-sizing: border-box;
  }

  /* When field-sizing is supported, allow natural growth */
  @supports (field-sizing: content) {
    .ag-form-control--horizontal input,
    .ag-form-control--horizontal textarea,
    .ag-form-control--horizontal select {
      width: auto;
    }
  }

  /* Required indicator (asterisk) */
  .ag-form-control__required {
    /* COLOR: We use a CSS variable for error text color to more easily toggle light and dark modes */
    color: var(--ag-error-text);
    margin-inline-start: var(--ag-space-1);
  }

  /* Helper text */
  .ag-form-control__helper {
    display: block;
    font-size: var(--ag-font-size-sm);
    color: var(--ag-text-primary);
    margin-block-start: var(--ag-space-1);
    margin-block-end: var(--ag-space-1);
  }

  /* Error text */
  .ag-form-control__error {
    display: block;
    font-size: var(--ag-font-size-sm);
    /* COLOR: We use a CSS variable for error text color to more easily toggle light and dark modes */
    color: var(--ag-error-text);
    margin-block-start: var(--ag-space-1);
    margin-block-end: var(--ag-space-1);
  }

  .ag-form-control__error[hidden] {
    display: none;
  }
`;function n(r){const o=a(r);return{inputId:`${o}-input`,labelId:`${o}-label`,helperId:`${o}-helper`,errorId:`${o}-error`}}function s(r){const o=[];return r.hasHelper&&o.push(r.helperId),r.hasError&&o.push(r.errorId),o.length>0?o.join(" "):void 0}function p(r){return r==="start"||r==="end"}export{l as a,n as i,p as t,s as u};
