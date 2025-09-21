import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('agnostic-dialog')
export class AgnosticDialog extends LitElement {
  @property({ type: Boolean, reflect: true })
  declare open: boolean;

  @property({ type: String })
  declare heading: string;

  @property({ type: Boolean })
  declare closeOnEscape: boolean;

  @property({ type: Boolean })
  declare closeOnBackdrop: boolean;

  constructor() {
    super();
    this.open = false;
    this.heading = '';
    this.closeOnEscape = true;
    this.closeOnBackdrop = true;
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
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .dialog-container {
      background: white;
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
        aria-labelledby="dialog-heading"
      >
        <div class="dialog-container">
          <slot></slot>
        </div>
      </div>
    `;
  }
}