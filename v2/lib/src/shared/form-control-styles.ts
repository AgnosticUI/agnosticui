/**
 * Shared form control styles
 *
 * Common CSS styles for form controls (Input, Checkbox, Radio, Toggle, etc.)
 * Import these styles in component static styles array.
 */

import { css } from 'lit';

export const formControlStyles = css`
  /* Label */
  .ag-form-control__label {
    display: block;
    font-size: var(--ag-font-size-base);
    font-weight: 600;
    color: var(--ag-text-primary);
    line-height: var(--ag-line-height-base);
    margin-bottom: var(--ag-space-2);
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

  /* Horizontal layout wrapper - MUST come before label horizontal to establish flex context */
  .ag-form-control--horizontal {
    display: flex;
    align-items: baseline; /* Align text baselines for visual centering */
    gap: var(--ag-space-3);
  }

  /* Horizontal label layout (class-based) - overrides display: block */
  .ag-form-control__label--horizontal,
  .ag-form-control--horizontal .ag-form-control__label {
    display: inline-block; /* Override display: block */
    min-width: 100px;
    max-width: 200px; /* Prevent super long labels */
    margin-right: 0; /* Gap handles spacing */
    margin-bottom: 0;
    flex-shrink: 0; /* Don't let label shrink */
  }

  /* Horizontal label layout (host attribute-based for backwards compatibility) */
  :host([label-position="horizontal"]) .ag-form-control__label {
    display: inline-block;
    min-width: 100px;
    max-width: 200px;
    margin-right: 0;
    margin-bottom: 0;
    flex-shrink: 0;
  }

  /* Input/control sizing for horizontal layout - progressive enhancement */
  .ag-form-control--horizontal input,
  .ag-form-control--horizontal textarea,
  .ag-form-control--horizontal select {
    /* Progressive enhancement with field-sizing (Chrome/Safari TP) */
    field-sizing: content;
    max-width: 100%;
    min-width: 100px;

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
    color: var(--ag-danger);
    margin-left: var(--ag-space-1);
  }

  /* Helper text */
  .ag-form-control__helper {
    display: block;
    font-size: var(--ag-font-size-sm);
    color: var(--ag-text-secondary);
    margin-block-start: 2px; /* Smaller than --ag-space-1 (4px) for tighter spacing */
  }

  /* Error text */
  .ag-form-control__error {
    display: block;
    font-size: var(--ag-font-size-sm);
    color: var(--ag-danger);
    margin-block-start: 2px; /* Smaller than --ag-space-1 (4px) for tighter spacing */
  }

  .ag-form-control__error[hidden] {
    display: none;
  }
`;
