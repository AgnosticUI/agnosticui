import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

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
  static styles = css`
    :host {
      display: inline-block;
      box-sizing: border-box;
    }

    .spinner {
      /**
       * Inspiration to utilize grid for this from
       * https://dockyard.com/blog/2020/03/02/accessible-loading-indicatorswith-no-extra-elements
       */
      display: grid;
      grid-template: "content" 100% / auto;
      place-items: center;
      box-sizing: border-box;
    }

    .spinner::before,
    .spinner::after {
      grid-area: content;
      width: var(--ag-space-8); /* 2rem = 32px */
      height: var(--ag-space-8);
      content: "";
      display: block;
      border-radius: 50%;
      border-width: var(--ag-border-width-3);
      border-style: solid;
    }

    /* Size variants */
    :host([size="small"]) .spinner::before,
    :host([size="small"]) .spinner::after {
      width: var(--ag-space-6); /* 1.5rem = 24px */
      height: var(--ag-space-6);
      border-width: var(--ag-border-width-2);
    }

    :host([size="large"]) .spinner::before,
    :host([size="large"]) .spinner::after {
      width: var(--ag-space-10); /* 2.5rem = 40px */
      height: var(--ag-space-10);
      border-width: 4px;
    }

    :host([size="xlarge"]) .spinner::before,
    :host([size="xlarge"]) .spinner::after {
      width: var(--ag-space-14); /* 3.5rem = 56px */
      height: var(--ag-space-14);
      border-width: 6px;
    }

    /**
     * Before is the muted background
     */
    .spinner::before {
      opacity: 0%;
      border-color: var(--spinner-color, var(--ag-text-primary));
    }

    /**
     * After is the inner "snake"
     */
    .spinner::after {
      opacity: 0%;
      border-color: transparent var(--spinner-color, var(--ag-text-primary)) transparent transparent;
      transition: opacity 0.1s;
      pointer-events: none;
      animation: loading-circle 1s ease-in-out infinite;
    }

    /**
     * Setting aria-busy to true results in corresponding opacity change to visually show spinner.
     */
    .spinner[aria-busy="true"]::before {
      opacity: 12%;
    }

    .spinner[aria-busy="true"]::after {
      opacity: 100%;
    }

    @keyframes loading-circle {
      to {
        transform: rotate(360deg);
      }
    }

    @media (prefers-reduced-motion), (update: slow) {
      .spinner::after {
        transition-duration: 0.001ms !important;
      }
    }

    /* Screen reader only text */
    .spinner-label {
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
  declare size: SpinnerSize;

  @property({ type: String, reflect: true, attribute: 'aria-label' })
  declare ariaLabel: string;

  constructor() {
    super();
    this.size = 'default';
    this.ariaLabel = 'Loading...';
  }

  render() {
    return html`
      <div
        class="spinner"
        part="ag-spinner"
        role="status"
        aria-live="polite"
        aria-busy="true"
      >
        <span class="spinner-label" part="ag-spinner-label">
          <slot>${this.ariaLabel}</slot>
        </span>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-spinner': AgSpinner;
  }
}
