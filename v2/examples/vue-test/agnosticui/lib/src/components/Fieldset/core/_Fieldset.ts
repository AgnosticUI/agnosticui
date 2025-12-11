/**
 * AgnosticUI v2 Fieldset - Core Implementation
 *
 * A semantic fieldset component that groups related form controls with an optional legend.
 * Follows WAI-ARIA best practices for accessible form grouping.
 *
 * @element ag-fieldset
 * @slot - Default slot for form controls and other content
 * @csspart ag-fieldset - The fieldset element
 * @csspart ag-legend - The legend element
 * @csspart ag-content - The content wrapper div
 */

import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

/**
 * Interface for AgFieldset properties.
 *
 * @property {string} legend - Optional legend text for the fieldset
 * @property {boolean} bordered - Whether to apply borders and padding
 * @property {'vertical' | 'horizontal'} layout - Layout mode for the fieldset content
 * @property {boolean} legendHidden - Visually hide the legend while keeping it accessible
 */
export interface FieldsetProps {
  /** Optional legend text for the fieldset. */
  legend?: string;
  /** Whether to apply borders and padding. */
  bordered?: boolean;
  /** Layout mode: 'vertical' (default) or 'horizontal'. */
  layout?: 'vertical' | 'horizontal';
  /** Visually hide the legend while keeping it accessible. */
  legendHidden?: boolean;
}

/**
 * AgFieldset - Groups related form controls with optional legend and layout options.
 *
 * The fieldset element semantically groups related form controls, and the legend element
 * provides a descriptive title for the entire group. This is essential for accessibility,
 * as screen readers announce the legend before each control, providing crucial context.
 *
 * Use Cases:
 * - Multiple choice questions using radio buttons or checkboxes
 * - Related questions or fields (e.g., date inputs, address details)
 * - Any set of form controls that share a common purpose or context
 *
 * Accessibility:
 * - Always include a legend (use legendHidden if you want to hide it visually)
 * - The legend is announced by screen readers before each control in the fieldset
 * - Proper semantic grouping helps users understand relationships between controls
 *
 * @element ag-fieldset
 */
export class AgFieldset extends LitElement implements FieldsetProps {
  static styles = css`
    :host {
      display: block;
    }

    .ag-fieldset {
      border: 0;
      padding: 0;
      margin: 0;
      min-inline-size: auto;
    }

    .ag-fieldset--bordered {
      border: var(--ag-border-width-1) solid var(--ag-border);
      border-radius: var(--ag-radius-md);
      padding: var(--ag-fieldset-padding, var(--ag-space-4));
    }

    .ag-fieldset--horizontal .ag-fieldset-content {
      display: flex;
      flex-wrap: wrap;
      gap: var(--ag-fieldset-gap, var(--ag-space-4));
      align-items: flex-start;
    }

    .ag-fieldset-legend {
      font-weight: 600;
      font-size: var(--ag-font-size-base);
      color: var(--ag-text-primary);
      padding: 0;
    }

    .ag-fieldset-legend--hidden {
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

    .ag-fieldset-content {
      display: block;
    }
  `;

  @property({ type: String })
  legend = '';

  @property({ type: Boolean, reflect: true })
  bordered = false;

  @property({ type: String, reflect: true })
  layout: 'vertical' | 'horizontal' = 'vertical';

  @property({ type: Boolean, attribute: 'legend-hidden' })
  legendHidden = false;

  /**
   * Validate layout prop on connection
   */
  connectedCallback() {
    super.connectedCallback();
    if (this.layout !== 'vertical' && this.layout !== 'horizontal') {
      this.layout = 'vertical';
    }
  }

  render() {
    const classes = [
      'ag-fieldset',
      this.bordered ? 'ag-fieldset--bordered' : '',
      this.layout === 'horizontal' ? 'ag-fieldset--horizontal' : ''
    ].filter(Boolean).join(' ');

    const legendClasses = [
      'ag-fieldset-legend',
      this.legendHidden ? 'ag-fieldset-legend--hidden' : ''
    ].filter(Boolean).join(' ');

    return html`
      <fieldset
        class="${classes}"
        part="ag-fieldset"
      >
        ${this.legend ? html`
          <legend class="${legendClasses}" part="ag-legend">
            ${this.legend}
          </legend>
        ` : ''}

        <div class="ag-fieldset-content" part="ag-content">
          <slot></slot>
        </div>
      </fieldset>
    `;
  }
}
