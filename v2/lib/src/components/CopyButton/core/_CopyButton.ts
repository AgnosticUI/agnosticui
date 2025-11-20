import { LitElement, html, css, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import '../../IconButton/core/IconButton.js';

/**
 * @slot icon-copy - Custom icon to show in the default (not copied) state
 * @slot icon-copied - Custom icon to show in the copied state
 * @slot icon-error - Custom icon to show when copy fails
 * 
 * Note: If providing custom icons, both icon-copy and icon-copied slots must be provided together. Providing only one will throw an error.
 * 
 * @csspart button - The icon button element
 * @csspart icon - The icon container (all states)
 * @csspart icon-copy - The copy icon (default state)
 * @csspart icon-copied - The checkmark icon (copied state)
 * @csspart icon-error - The error icon (error state)
 * 
 * @fires copy - Fired when text is successfully copied. Detail: { text: string }
 * @fires copy-error - Fired when copy fails. Detail: { error: Error }
 */
export class AgCopyButton extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
    }

    .sr-only {
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

    /* Stacked icon slots for smooth cross-fade between states */
    .ag-icon-stack {
      position: relative;
      /* Make this a block-level box so the parent IconButton's flex centering
         can reliably center the stacked slots. Inline alignment can interfere
         with flex layout in some browsers, causing the "pushed down" effect. */
      display: block;
      width: 1em;
      height: 1em;
    }

    /* Each slot occupies the full stack and is centered */
    .ag-icon-slot {
      position: absolute;
      inset: 0;
      /* Use grid centering to avoid baseline/line-height shifts during transitions */
      display: grid;
      place-items: center;
      opacity: 0;
      transition: opacity var(--ag-motion-fast, 150ms) ease-in-out;
      will-change: opacity;
      pointer-events: none;
    }

    .ag-icon-slot.visible {
      opacity: 1;
      pointer-events: auto;
    }

    /* Ensure slotted SVGs and fallback svgs size consistently to the IconButton's em-based icon box
       Use 1em so icons scale with the IconButton font-size and avoid layout shifts during cross-fade */
    .ag-icon-slot::slotted(svg),
    .ag-icon-slot svg {
      width: 1em;
      height: 1em;
      max-width: 100%;
      max-height: 100%;
      display: block;
    }
  `;

  /**
   * The text to copy to the clipboard
   */
  @property({ type: String })
  declare text: string;

  /**
   * The label for the button (aria-label)
   */
  @property({ type: String })
  declare label: string;

  /**
   * The label to show when the text has been copied
   */
  @property({ type: String, attribute: 'success-label' })
  declare successLabel: string;

  /**
   * The label to show when copy fails
   */
  @property({ type: String, attribute: 'error-label' })
  declare errorLabel: string;

  /**
   * Duration in milliseconds to show the success state
   */
  @property({ type: Number })
  declare timeout: number;

  /**
   * Size of the button
   */
  @property({ type: String })
  declare size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';

  /**
   * Variant of the button
   */
  @property({ type: String })
  declare variant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'ghost' | 'monochrome';



  @state()
  private _isCopied = false;

  @state()
  private _hasError = false;

  @state()
  private _announcement = '';

  private _timeoutId?: number;

  constructor() {
    super();
    // Initialize reactive properties in constructor
    this.text = '';
    this.label = 'Copy to clipboard';
    this.successLabel = 'Copied!';
    this.errorLabel = 'Copy failed';
    this.timeout = 1000;
    this.size = 'md';
    this.variant = 'ghost';
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    if (this._timeoutId) {
      clearTimeout(this._timeoutId);
    }
  }

  override firstUpdated() {
    this._validateSlots();
  }

  private _validateSlots() {
    const copySlot = this.querySelector('[slot="icon-copy"]');
    const copiedSlot = this.querySelector('[slot="icon-copied"]');

    const hasCopySlot = !!copySlot;
    const hasCopiedSlot = !!copiedSlot;

    // If one slot is provided but not the other, throw an error
    if (hasCopySlot !== hasCopiedSlot) {
      throw new Error(
        'AgCopyButton: Both "icon-copy" and "icon-copied" slots must be provided together. ' +
        `Currently provided: ${hasCopySlot ? 'icon-copy' : 'icon-copied'} only.`
      );
    }
  }

  private async _copyWithFallback(text: string): Promise<void> {
    // Try modern Clipboard API first
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return;
    }

    // Fallback to execCommand for older browsers or non-secure contexts
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      const successful = document.execCommand('copy');
      if (!successful) {
        throw new Error('execCommand copy failed');
      }
    } finally {
      document.body.removeChild(textArea);
    }
  }

  private _handleCopy() {
    if (!this.text) return;

    // Clear any existing timeout
    if (this._timeoutId) {
      clearTimeout(this._timeoutId);
    }

    // Reset error state
    this._hasError = false;

    this._copyWithFallback(this.text)
      .then(() => {
        this._isCopied = true;
        this._announcement = this.successLabel;
        this.dispatchEvent(new CustomEvent('copy', { 
          detail: { text: this.text },
          bubbles: true,
          composed: true
        }));

        this._timeoutId = window.setTimeout(() => {
          this._isCopied = false;
          this._announcement = '';
        }, this.timeout);
      })
      .catch((err: Error) => {
        this._hasError = true;
        this._announcement = this.errorLabel;
        this.dispatchEvent(new CustomEvent('copy-error', { 
          detail: { error: err },
          bubbles: true,
          composed: true
        }));

        this._timeoutId = window.setTimeout(() => {
          this._hasError = false;
          this._announcement = '';
        }, this.timeout);
      });
  }

  private _renderIcon() {
    // Render all three named slots stacked and toggle visibility via CSS for a smooth cross-fade
    return html`
      <span class="ag-icon-stack" part="icon-stack">
        <slot name="icon-error" part="icon icon-error" class="ag-icon-slot ${this._hasError ? 'visible' : ''}">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
          </svg>
        </slot>

        <slot name="icon-copied" part="icon icon-copied" class="ag-icon-slot ${this._isCopied && !this._hasError ? 'visible' : ''}">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
          </svg>
        </slot>

        <slot name="icon-copy" part="icon icon-copy" class="ag-icon-slot ${!this._isCopied && !this._hasError ? 'visible' : ''}">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
          </svg>
        </slot>
      </span>
    `;
  }

  render() {
    const currentLabel = this._hasError 
      ? this.errorLabel 
      : this._isCopied 
        ? this.successLabel 
        : this.label;

    return html`
      <ag-icon-button
        part="button"
        .size="${this.size}"
        .variant="${this.variant}"
        .label="${currentLabel}"
        @click="${this._handleCopy}"
      >
        ${this._renderIcon()}
      </ag-icon-button>
      
      ${this._announcement 
        ? html`<span class="sr-only" role="status" aria-live="polite" aria-atomic="true">
            ${this._announcement}
          </span>`
        : nothing
      }
    `;
  }
}
