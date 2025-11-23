/**
 * AgnosticUI v2 Label - Core Implementation
 *
 * A Shadow DOM-safe label wrapper component for forms.
 *
 * Version: 2.0.0-dev
 */

import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

/**
 * Interface for AgLabel properties.
 *
 * @property {'vertical' | 'horizontal'} align - Label alignment/layout mode
 */
export interface LabelProps {
  /** Label alignment: 'vertical' (default) or 'horizontal' */
  align?: 'vertical' | 'horizontal';
}

/**
 * AgLabel - Shadow DOM-safe label wrapper.
 *
 * This component provides a styled label element that works within Shadow DOM contexts.
 * It's designed to work either standalone or as part of the FormControl system.
 *
 * Key Features:
 * - Shadow DOM compatible
 * - Supports vertical and horizontal layouts
 * - Uses AgnosticUI design tokens
 * - Accessible label surface
 *
 * @element ag-label
 * @slot - Default slot for label content
 * @csspart ag-label - The label element
 */
export class AgLabel extends LitElement implements LabelProps {
  static styles = css`
    :host {
      display: block;
    }

    .ag-label {
      display: block;
      font-size: var(--ag-font-size-base);
      font-weight: 600;
      color: var(--ag-text-primary);
      line-height: var(--ag-line-height-base);
      margin: 0;
      padding: 0;
    }

    :host([align="vertical"]) .ag-label {
      margin-bottom: var(--ag-space-2);
    }

    :host([align="horizontal"]) .ag-label {
      display: inline-flex;
      align-items: center;
      margin-right: var(--ag-space-3);
    }

    :host([align="horizontal"]) {
      display: inline-flex;
      align-items: center;
    }
  `;

  @property({ type: String, reflect: true })
  align: 'vertical' | 'horizontal' = 'vertical';

  constructor() {
    super();
    this.align = 'vertical';
  }

  connectedCallback() {
    super.connectedCallback();
    // Validate align prop
    if (this.align !== 'vertical' && this.align !== 'horizontal') {
      this.align = 'vertical';
    }
  }

  render() {
    return html`
      <label class="ag-label" part="ag-label">
        <slot></slot>
      </label>
    `;
  }
}
