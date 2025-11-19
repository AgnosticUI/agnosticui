import { LitElement, html, css } from 'lit';
import { property, state } from 'lit/decorators.js';
import '../../IconButton/core/IconButton.js';

export class AgCopyButton extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
    }
  `;

  /**
   * The text to copy to the clipboard
   */
  @property({ type: String })
  text = '';

  /**
   * The label for the button (aria-label)
   */
  @property({ type: String })
  label = 'Copy to clipboard';

  /**
   * The label to show when the text has been copied
   */
  @property({ type: String, attribute: 'success-label' })
  successLabel = 'Copied!';

  /**
   * Size of the button
   */
  @property({ type: String })
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';

  /**
   * Variant of the button
   */
  @property({ type: String })
  variant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'ghost' | 'monochrome' = 'ghost';

  @state()
  private _isCopied = false;

  private _handleCopy() {
    if (!this.text) return;

    navigator.clipboard.writeText(this.text).then(() => {
      this._isCopied = true;
      this.dispatchEvent(new CustomEvent('copy', { detail: { text: this.text } }));

      setTimeout(() => {
        this._isCopied = false;
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  }

  render() {
    return html`
      <ag-icon-button
        .size="${this.size}"
        .variant="${this.variant}"
        .label="${this._isCopied ? this.successLabel : this.label}"
        @click="${this._handleCopy}"
      >
        ${this._isCopied
        ? html`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>`
        : html`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>`
      }
      </ag-icon-button>
    `;
  }
}
