import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';


export type TagVariant = 'info' | 'warning' | 'error' | 'success' | 'primary' | '';
export type TagShape = 'pill' | 'round' | 'circle' | '';

/**
 * @element ag-tag
 * @csspart tag-wrapper - The main wrapper for the tag component.
 */
@customElement('ag-tag')
export class AgTag extends LitElement {
  static styles = css`
    :host {
      display: inline-flex;
      --tag-background-color: var(--ag-background-tertiary);
      /* Default text color - black that properly inverts in dark mode */
      --tag-color: var(--ag-text-primary);
      --tag-border-radius: var(--ag-radius-md);
    }

    .tag-wrapper {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      white-space: nowrap;
      padding: var(--ag-space-1) var(--ag-space-2);
      background-color: var(--tag-background-color);
      color: var(--tag-color);
      border-radius: var(--tag-border-radius);
      font-size: var(--ag-font-size-sm);
      line-height: var(--ag-line-height-sm);
    }

    /* Variants */
    :host([variant='info']) {
      --tag-background-color: var(--ag-info-background);
      --tag-color: var(--ag-info-text);
    }

    :host([variant='warning']) {
      --tag-background-color: var(--ag-warning-background);
      --tag-color: var(--ag-warning-text);
    }

    :host([variant='error']) {
      --tag-background-color: var(--ag-danger-background);
      --tag-color: var(--ag-danger-text);
    }

    :host([variant='success']) {
      --tag-background-color: var(--ag-success-background);
      --tag-color: var(--ag-success-text);
    }

    :host([variant='primary']) {
      --tag-background-color: var(--ag-primary-background);
      --tag-color: var(--ag-primary-text);
    }

    /* Shapes */
    :host([shape='circle']) .tag-wrapper {
      --tag-border-radius: var(--ag-radius-full);
    }
    :host([shape='circle']) .tag-wrapper {
      min-width: var(--ag-line-height-sm);
      min-height: var(--ag-line-height-sm);
      /* We need to override padding to make it perfectly circular */
      padding: var(--ag-space-2);
    }

    :host([shape='pill']) {
      --tag-border-radius: var(--ag-radius-full);
    }

    :host([shape='round']) {
      /* Default shape but kept for consistency */
      --tag-border-radius: var(--ag-radius-md);
    }

    /* Uppercase modifier */
    :host([uppercase]) .tag-wrapper {
      text-transform: uppercase;
      font-size: var(--ag-font-size-xs);
      letter-spacing: var(--ag-letter-spacing-wide);
    }

    /* Close slot */
    ::slotted([slot='close']) {
      margin-inline-start: var(--ag-space-1);
      padding: 2px;
      color: var(--tag-color);
      display: inline-flex;
      align-items: center;
      background: transparent;
      border: transparent;
      cursor: pointer;
    }
  `;

  /**
   * Sets the color variant of the tag.
   */
  @property({ type: String, reflect: true }) variant: TagVariant = '';

  /**
   * Sets the border-radius shape of the tag.
   */
  @property({ type: String, reflect: true }) shape: TagShape = '';

  /**
   * If `true`, the tag text will be transformed to uppercase.
   */
  @property({ type: Boolean, reflect: true }) uppercase = false;

  render() {
    return html`
      <div class="tag-wrapper" part="ag-tag-wrapper">
        <slot></slot>
        <slot name="close"></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-tag': AgTag;
  }
}
