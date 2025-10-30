import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

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
@customElement('ag-loader')
export class Loader extends LitElement implements LoaderProps {
  static styles = css`
    :host {
      display: inline-block;
      box-sizing: border-box;
    }

    .loader {
      --loading-size: var(--ag-space-4); /* 1rem = 16px */

      position: relative;
      box-sizing: border-box;
      animation: blink 1s infinite;
      animation-delay: 250ms;

      /* Make up for negative positioning */
      margin-left: var(--loading-size);

      /* Initially set zero until aria-busy becomes true */
      opacity: 0%;
    }

    .loader,
    .loader::before,
    .loader::after {
      width: calc(var(--loading-size) / 2);
      height: calc(var(--loading-size) / 2);
      border-radius: var(--ag-radius-md);
      background-color: var(--loading-color, var(--ag-text-primary));
    }

    /* SMALL */
    :host([size="small"]) .loader {
      --loading-size: var(--ag-space-3); /* 0.75rem = 12px */
    }

    /* LARGE */
    :host([size="large"]) .loader {
      --loading-size: var(--ag-space-5); /* 1.25rem = 20px */
    }

    :host([size="large"]) .loader,
    :host([size="large"]) .loader::before,
    :host([size="large"]) .loader::after {
      border-radius: var(--ag-radius-lg);
    }

    .loader::before,
    .loader::after {
      content: "";
      display: inline-block;
      position: absolute;
      top: 0;
      animation: blink 1s infinite;
    }

    .loader::before {
      left: calc(-1 * var(--loading-size));
      animation-delay: 0s;
    }

    .loader::after {
      left: var(--loading-size);
      animation-delay: 500ms;
    }

    /**
     * Setting aria-busy to true results in corresponding opacity change to visually show loader.
     */
    .loader[aria-busy="true"] {
      opacity: 100%;
    }

    @keyframes blink {
      50% {
        background-color: transparent;
      }
    }

    @media (prefers-reduced-motion), (update: slow) {
      .loader,
      .loader::before,
      .loader::after {
        animation-duration: 0.001ms !important;
      }
    }

    /* Screen reader only text */
    .loader-label {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border-width: 0;
    }
  `;

  @property({ type: String, reflect: true })
  size: LoaderSize = 'default';

  @property({ type: String, reflect: true, attribute: 'aria-label' })
  ariaLabel = 'Loading...';

  render() {
    return html`
      <div
        class="loader"
        part="ag-loader"
        role="status"
        aria-live="polite"
        aria-busy="true"
      >
        <span class="loader-label" part="ag-loader-label">
          <slot>${this.ariaLabel}</slot>
        </span>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-loader': Loader;
  }
}
