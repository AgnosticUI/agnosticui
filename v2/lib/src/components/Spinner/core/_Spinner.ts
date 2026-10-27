import { LitElement, html, css, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';
import styles from './spinner-structure.module.css';
import structuralStylesText from './spinner-structure.module.css?inline';

export type SpinnerSize = 'small' | 'default' | 'large' | 'xlarge';

/**
 * @csspart ag-spinner - The main spinner container element
 * @csspart ag-spinner-label - The screen reader text element
 */
export interface SpinnerProps {
  size?: SpinnerSize;
  ariaLabel?: string;
}

/**
 * Spinner component displays a circular rotating animation to indicate loading state
 *
 * @element ag-spinner
 * @slot default - Optional text to display instead of default aria label
 */
export class AgSpinner extends LitElement implements SpinnerProps {
  static styles = [
    css`${unsafeCSS(structuralStylesText)}`
  ];

  @property({ type: String, reflect: true })
  declare size: SpinnerSize;

  @property({ type: String, attribute: 'aria-label' })
  declare ariaLabel: string;

  constructor() {
    super();
    this.size = 'default';
    this.ariaLabel = 'Loading...';
  }

  render() {
    return html`
      <div
        class="${styles.spinner}"
        part="ag-spinner"
        role="status"
        aria-live="polite"
        aria-busy="true"
      >
        <span class="${styles.spinnerLabel}" part="ag-spinner-label">
          <slot>${this.ariaLabel}</slot>
        </span>
      </div>
    `;
  }
}
