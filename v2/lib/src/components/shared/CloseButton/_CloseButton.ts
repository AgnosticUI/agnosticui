import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Close button event
 */
export type CloseButtonClickEvent = CustomEvent<void>;

/**
 * Props interface for CloseButton
 */
export interface CloseButtonProps {
  /** Accessible label for the close button */
  label?: string;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Position variant for absolute positioning */
  position?: 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end';
  /** Event handler */
  onCloseButtonClick?: (event: CloseButtonClickEvent) => void;
}

/**
 * A reusable close button component for overlays, dialogs, toasts, etc.
 *
 * @element ag-close-button
 *
 * @fires close-button-click - Dispatched when the close button is clicked
 *
 * @csspart ag-close-button - The button element
 *
 * @example
 * ```html
 * <ag-close-button label="Close dialog"></ag-close-button>
 * ```
 */
@customElement('ag-close-button')
export class CloseButton extends LitElement implements CloseButtonProps {
  @property({ type: String })
  declare label: string;

  @property({ type: String })
  declare size: 'sm' | 'md' | 'lg';

  @property({ type: String, reflect: true })
  declare position: 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | undefined;

  constructor() {
    super();
    this.label = 'Close';
    this.size = 'md';
    this.position = undefined;
  }

  private _handleClick = (event: MouseEvent) => {
    event.stopPropagation();
    this.dispatchEvent(
      new CustomEvent('close-button-click', {
        bubbles: true,
        composed: true,
      })
    );
  };

  static styles = css`
    :host {
      display: inline-block;
    }

    .close-button {
      background: none;
      border: none;
      cursor: pointer;
      color: var(--ag-text-secondary);
      line-height: 1;
      padding: var(--ag-space-1);
      border-radius: var(--ag-radius-sm);
      transition: background-color var(--ag-motion-fast) ease,
                  color var(--ag-motion-fast) ease;
    }

    .close-button:hover {
      background: var(--ag-background-secondary);
      color: var(--ag-text-primary);
    }

    .close-button:focus-visible {
      outline: var(--ag-focus-width) solid var(--ag-focus);
      outline-offset: var(--ag-focus-offset);
    }

    /* Size variants */
    .close-button-sm {
      font-size: var(--ag-font-size-md);
      padding: var(--ag-space-0-5);
    }

    .close-button-md {
      font-size: var(--ag-font-size-xl);
      padding: var(--ag-space-1);
    }

    .close-button-lg {
      font-size: var(--ag-font-size-2xl);
      padding: var(--ag-space-2);
    }

    /* Position variants - for absolute positioning within parent */
    :host([position]) .close-button {
      position: absolute;
    }

    :host([position="top-start"]) .close-button {
      top: var(--ag-space-4);
      left: var(--ag-space-4);
    }

    :host([position="top-end"]) .close-button {
      top: var(--ag-space-4);
      right: var(--ag-space-4);
    }

    :host([position="bottom-start"]) .close-button {
      bottom: var(--ag-space-4);
      left: var(--ag-space-4);
    }

    :host([position="bottom-end"]) .close-button {
      bottom: var(--ag-space-4);
      right: var(--ag-space-4);
    }
  `;

  render() {
    const classes = [
      'close-button',
      `close-button-${this.size}`,
    ].join(' ');

    return html`
      <button
        type="button"
        class="${classes}"
        part="ag-close-button"
        aria-label="${this.label}"
        @click=${this._handleClick}
      >
        ×
      </button>
    `;
  }
}
