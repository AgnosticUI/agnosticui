import { LitElement, html, css, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';
import styles from './loader-structure.module.css';
import structuralStylesText from './loader-structure.module.css?inline';

export type LoaderSize = 'small' | 'default' | 'large';

/**
 * @csspart ag-loader - The main loader container element
 * @csspart ag-loader-label - The screen reader text element
 */
export interface LoaderProps {
  size?: LoaderSize;
  ariaLabel?: string;
}

/**
 * Loader component displays a three-dot blinking animation to indicate loading state
 *
 * @element ag-loader
 * @slot default - Optional text to display instead of default aria label
 */
export class Loader extends LitElement implements LoaderProps {
  static styles = [
    css`${unsafeCSS(structuralStylesText)}`
  ];

  @property({ type: String, reflect: true })
  size: LoaderSize = 'default';

  @property({ type: String, reflect: true, attribute: 'aria-label' })
  ariaLabel = 'Loading...';

  render() {
    return html`
      <div
        class="${styles.loader}"
        part="ag-loader"
        aria-busy="true"
      >
        <span class="${styles.loaderLabel}" role="progressbar" aria-label="Loading" part="ag-loader-label">
          <slot>${this.ariaLabel}</slot>
        </span>
      </div>
    `;
  }
}
