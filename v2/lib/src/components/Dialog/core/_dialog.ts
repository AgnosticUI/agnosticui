import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('agnostic-dialog')
export class AgnosticDialog extends LitElement {
  @property({ type: Boolean, reflect: true })
  declare open: boolean;

  @property({ type: String })
  declare heading: string;

  @property({ type: String })
  declare description: string;

  @property({ type: Boolean })
  declare closeOnEscape: boolean;

  @property({ type: Boolean })
  declare closeOnBackdrop: boolean;

  constructor() {
    super();
    this.open = false;
    this.heading = '';
    this.description = '';
    this.closeOnEscape = true;
    this.closeOnBackdrop = true;
  }

  private _handleKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && this.closeOnEscape && this.open) {
      event.preventDefault();
      this.dispatchEvent(new CustomEvent('dialog-cancel', { bubbles: true }));
      this.open = false;
    }
  };

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('keydown', this._handleKeydown);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('keydown', this._handleKeydown);
  }

  willUpdate(changedProperties: Map<string, any>) {
    if (changedProperties.has('open')) {
      const previousOpen = changedProperties.get('open');
      if (this.open && !previousOpen) {
        this.dispatchEvent(new CustomEvent('dialog-open', { bubbles: true }));
      } else if (!this.open && previousOpen) {
        this.dispatchEvent(new CustomEvent('dialog-close', { bubbles: true }));
      }
    }
  }

  static styles = css`
    :host {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1000;
    }

    :host([open]) {
      display: block;
    }

    .dialog-backdrop {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .dialog-container {
      max-width: 90vw;
      max-height: 90vh;
      position: relative;
    }
  `;

  render() {
    return html`
      <div
        class="dialog-backdrop"
        role="dialog"
        aria-modal="true"
        aria-labelledby=${this.heading ? 'dialog-heading' : nothing}
        aria-label=${!this.heading ? 'Dialog' : nothing}
        aria-describedby=${this.description ? 'dialog-description' : nothing}
      >
        <div class="dialog-container">
          ${this.heading ? html`<h2 id="dialog-heading">${this.heading}</h2>` : ''}
          ${this.description ? html`<p id="dialog-description">${this.description}</p>` : ''}
          <slot></slot>
        </div>
      </div>
    `;
  }
}