import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

// Event types
export type CollapsibleToggleEvent = CustomEvent<{ open: boolean }>;

// Props interface
export interface CollapsibleProps {
  open?: boolean;
  bordered?: boolean;
  shadow?: boolean;
  // Indicator variants (mutually exclusive, priority: noIndicator > useX > useMinus > useChevron)
  useChevron?: boolean;
  useX?: boolean;
  useMinus?: boolean;
  noIndicator?: boolean;
  onToggle?: (event: CollapsibleToggleEvent) => void;
}

export class AgCollapsible extends LitElement implements CollapsibleProps {
  @property({ type: Boolean, reflect: true })
  public open = false;

  @property({ type: Boolean, reflect: true })
  public bordered = false;

  @property({ type: Boolean, reflect: true })
  public shadow = false;

  @property({ type: Boolean, reflect: true, attribute: 'use-chevron' })
  public useChevron = true; // Default indicator

  @property({ type: Boolean, reflect: true, attribute: 'use-x' })
  public useX = false;

  @property({ type: Boolean, reflect: true, attribute: 'use-minus' })
  public useMinus = false;

  @property({ type: Boolean, reflect: true, attribute: 'no-indicator' })
  public noIndicator = false;

  @property({ attribute: false })
  declare onToggle?: (event: CollapsibleToggleEvent) => void;

  static styles = css`
    :host {
      display: block;
    }

    /* Base details element */
    details {
      border: none;
      border-radius: var(--ag-radius-md);
    }

    :host([bordered]) details {
      border: var(--ag-border-width-1) solid var(--ag-border);
    }

    :host([shadow]) details {
      box-shadow: var(--ag-shadow-md);
    }

    summary {
      cursor: pointer;
      padding: var(--ag-space-4);
      display: flex;
      justify-content: space-between;
      align-items: center;
      list-style: none; /* Remove default marker */
      background: none;
      color: var(--ag-text-primary);
    }

    summary::-webkit-details-marker {
      display: none; /* Chrome */
    }

    summary:focus-visible {
      outline: var(--ag-focus-width) solid var(--ag-focus);
      outline-offset: var(--ag-focus-offset);
      transition: outline var(--ag-motion-medium) ease;
    }

    .collapsible-content {
      padding: var(--ag-space-4);
      margin-block-end: var(--ag-space-2);
    }

    /* Indicator wrapper - visible by default unless noIndicator is set */
    .indicator {
      display: block;
      flex-shrink: 0;
      transition: transform var(--ag-motion-slow) ease;
    }

    :host([no-indicator]) .indicator {
      display: none;
    }

    /* Chevron indicator (default): starts pointing down, rotates 180deg to point up when open */
    :host([use-chevron]) details[open] > summary .indicator {
      transform: rotate(180deg);
    }

    /* X indicator: starts rotated 180deg (upside-down plus), rotates to 45deg (X) when open */
    :host([use-x]) .indicator {
      transform: rotate(180deg);
    }
    :host([use-x]) details[open] > summary .indicator {
      transform: rotate(45deg);
    }

    /* Minus indicator: Plus swaps to minus icon when open - no rotation needed */
    :host([use-minus]) .indicator {
      /* No rotation - the icon swap from plus to minus provides the visual feedback */
      transform: none;
    }

    /* Respect prefers-reduced-motion */
    @media (prefers-reduced-motion: reduce) {
      summary:focus-visible,
      .indicator {
        transition: none;
      }
    }
  `;

  private _renderChevronIndicator() {
    return html`
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="m6 9 6 6 6-6"></path>
      </svg>
    `;
  }

  private _renderPlusIndicator() {
    return html`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M12 5v14"></path>
        <path d="M5 12h14"></path>
      </svg>
    `;
  }

  private _renderMinusIndicator() {
    return html`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M5 12h14"></path>
      </svg>
    `;
  }

  private _renderIndicator() {
    // Priority: noIndicator > useX > useMinus > useChevron (default)
    if (this.noIndicator) {
      return null;
    }

    if (this.useX) {
      return this._renderPlusIndicator();
    }

    if (this.useMinus) {
      // Render plus when closed, minus when open
      return this.open ? this._renderMinusIndicator() : this._renderPlusIndicator();
    }

    // Default: chevron
    return this._renderChevronIndicator();
  }

  private _onToggle(e: Event) {
    const details = e.target as HTMLDetailsElement;
    this.open = details.open;

    const toggleEvent = new CustomEvent<{ open: boolean }>('toggle', {
      detail: { open: this.open },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(toggleEvent);

    if (this.onToggle) {
      this.onToggle(toggleEvent);
    }
  }

  render() {
    return html`
      <details
        part="ag-collapsible-details"
        ?open=${this.open}
        @toggle=${this._onToggle}
      >
        <summary part="ag-collapsible-summary">
          <slot name="summary"></slot>
          <span class="indicator" part="ag-collapsible-indicator">
            <slot name="indicator">
              ${this._renderIndicator()}
            </slot>
          </span>
        </summary>
        <div class="collapsible-content" part="ag-collapsible-content">
          <slot></slot>
        </div>
      </details>
    `;
  }
}
