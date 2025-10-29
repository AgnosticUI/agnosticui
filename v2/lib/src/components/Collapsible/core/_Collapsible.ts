import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

export interface CollapsibleProps {
  isOpen?: boolean;
  isSkinned?: boolean;
  isBordered?: boolean;
  isShadow?: boolean;
}

export class AgCollapsible extends LitElement implements CollapsibleProps {
  @property({ type: Boolean, reflect: true })
  public isOpen = false;

  @property({ type: Boolean, reflect: true })
  public isSkinned = true;

  @property({ type: Boolean, reflect: true })
  public isBordered = false;

  @property({ type: Boolean, reflect: true })
  public isShadow = false;

  static styles = css`
    :host {
      display: block;
    }

    /* Base details element - minimal styling when not skinned */
    details {
      border: none;
      border-radius: 0;
    }

    /* Skinned styling - matches Accordion patterns */
    :host([isskinned]) details {
      border-radius: var(--ag-radius-md);
    }

    :host([isbordered]) details {
      border: var(--ag-border-width-1) solid var(--ag-border);
    }

    :host([isshadow]) details {
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

    .indicator {
      display: block;
      flex-shrink: 0;
      transition: transform var(--ag-motion-slow) ease;
    }

    details[open] > summary .indicator {
      transform: rotate(180deg);
    }

    /* Respect prefers-reduced-motion */
    @media (prefers-reduced-motion: reduce) {
      summary:focus-visible,
      .indicator {
        transition: none;
      }
    }
  `;

  private _onToggle(e: Event) {
    this.isOpen = (e.target as HTMLDetailsElement).open;
    this.dispatchEvent(new CustomEvent('toggle', { detail: { isOpen: this.isOpen } }));
  }

  render() {
    return html`
      <details
        part="ag-collapsible-details"
        ?open=${this.isOpen}
        @toggle=${this._onToggle}
      >
        <summary part="ag-collapsible-summary">
          <slot name="summary"></slot>
          <span class="indicator" part="ag-collapsible-indicator">
            <slot name="indicator">
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
