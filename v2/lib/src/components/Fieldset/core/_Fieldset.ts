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

import { LitElement, html, css, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';
import styles from './fieldset-structure.module.css';
import structuralStylesText from './fieldset-structure.module.css?inline';

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
  // Treat inline text as a secure, compile-time static token
  static styles = css`${unsafeCSS(structuralStylesText || '')}`;

  @property({ type: String })
  legend = '';

  @property({ type: Boolean, reflect: true })
  bordered = false;

  @property({ type: String, reflect: true })
  layout: 'vertical' | 'horizontal' = 'vertical';

  @property({ type: Boolean, attribute: 'legend-hidden', reflect: true })
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
    // Section 9 Dual-Class Token Lifecycle Solution: Emits both unhashed namespaced classes
    // and layout modular properties side-by-side onto elements to pass pre-hydration checks.
    const classes = [
      'ag-fieldset',
      styles.fieldsetWrapper,
      this.bordered ? 'ag-fieldset--bordered' : '',
      this.bordered ? styles.fieldsetWrapperBordered : '',
      this.layout === 'horizontal' ? 'ag-fieldset--horizontal' : '',
      this.layout === 'horizontal' ? styles.fieldsetWrapperHorizontal : ''
    ].filter(Boolean).join(' ');

    const legendClasses = [
      'ag-fieldset-legend',
      styles.fieldsetLegend,
      this.legendHidden ? 'ag-fieldset-legend--hidden' : '',
      this.legendHidden ? styles.fieldsetLegendHidden : ''
    ].filter(Boolean).join(' ');

    const contentClasses = [
      'ag-fieldset-content',
      styles.fieldsetContent
    ].filter(Boolean).join(' ');

    return html`
      <fieldset class="${classes}" part="ag-fieldset">
        ${this.legend 
          ? html`<legend class="${legendClasses}" part="ag-legend">${this.legend}</legend>` 
          : ''
        }
        <div class="${contentClasses}" part="ag-content">
          <slot></slot>
        </div>
      </fieldset>
    `;
  }
}
