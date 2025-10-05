import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { getFocusableElements } from '../../../utils/getFocusableElements';
import { isBackdropClick } from '../../../utils/handleBackdropClick';
import { isElementInContainer } from '../../../utils/isElementInContainer';

@customElement('ag-dialog')
export class AgnosticDialog extends LitElement {
  @property({ type: Boolean, reflect: true })
  declare open: boolean;

  @property({ type: String })
  declare heading: string;

  @property({ type: String })
  declare description: string;

  @property({ type: Boolean })
  declare noCloseOnEscape: boolean;

  @property({ type: Boolean })
  declare noCloseOnBackdrop: boolean;

  @property({ type: Boolean })
  declare showCloseButton: boolean;

  private _previouslyFocusedElement: Element | null = null;

  constructor() {
    super();
    this.open = false;
    this.heading = '';
    this.description = '';
    this.noCloseOnEscape = false;
    this.noCloseOnBackdrop = false;
    this.showCloseButton = false;
  }

  private _handleKeydown = (event: KeyboardEvent) => {
    // Note: This handler is only active when dialog is open (registered in willUpdate)

    if (event.key === 'Escape' && !this.noCloseOnEscape) {
      event.preventDefault();
      this.dispatchEvent(new CustomEvent('dialog-cancel', { bubbles: true }));
      this.open = false;
      return;
    }

    if (event.key === 'Tab') {
      this._handleFocusTrap(event);
      return;
    }

    // Prevent arrow keys from bubbling up to other components (like tabs)
    // when dialog is open to maintain proper focus trap
    if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)) {
      // Only prevent if the current focus is within the dialog
      const currentElement = document.activeElement;
      if (currentElement && isElementInContainer(currentElement, this.shadowRoot, this)) {
        event.stopPropagation();
      }
    }
  };

  private _handleFocusTrap(event: KeyboardEvent) {
    const focusableElements = getFocusableElements(this.shadowRoot, this);

    // If no focusable elements, prevent Tab from escaping and keep focus trapped
    if (focusableElements.length === 0) {
      event.preventDefault();
      // Ensure dialog element stays focused
      const dialogElement = this.shadowRoot?.querySelector('[role="dialog"]') as HTMLElement;
      if (dialogElement && document.activeElement !== dialogElement) {
        dialogElement.setAttribute('tabindex', '-1');
        dialogElement.focus();
      }
      return;
    }

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    // Get actual focused element (accounting for Shadow DOM)
    let currentElement = document.activeElement as HTMLElement;

    // If focus is in shadow root, get the actual focused element
    if (this.shadowRoot && currentElement === this && this.shadowRoot.activeElement) {
      currentElement = this.shadowRoot.activeElement as HTMLElement;
    }

    // Only trap if current element is in the dialog
    if (!isElementInContainer(currentElement, this.shadowRoot, this)) {
      // Focus is outside dialog, bring it back to first element
      event.preventDefault();
      firstElement.focus();
      return;
    }

    // Special case: single focusable element cycles to itself
    if (focusableElements.length === 1) {
      event.preventDefault();
      firstElement.focus();
      return;
    }

    if (event.shiftKey) {
      // Shift+Tab: moving backwards
      if (currentElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }
    } else {
      // Tab: moving forwards
      if (currentElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }
  }

  private _handleBackdropClick = (event: MouseEvent) => {
    if (this.noCloseOnBackdrop || !this.open) return;

    if (isBackdropClick(event, this.shadowRoot, '.dialog-container', this)) {
      this.dispatchEvent(new CustomEvent('dialog-cancel', { bubbles: true }));
      this.open = false;
    }
  };

  private _handleCloseButtonClick = (event: MouseEvent) => {
    event.stopPropagation();
    this.dispatchEvent(new CustomEvent('dialog-close', { bubbles: true }));
    this.open = false;
  };

  private _setInitialFocus() {
    const focusableElements = getFocusableElements(this.shadowRoot, this);
    if (focusableElements.length > 0) {
      focusableElements[0].focus();
    } else {
      // If no focusable elements, focus the dialog itself
      const dialogElement = this.shadowRoot?.querySelector('[role="dialog"]') as HTMLElement;
      if (dialogElement) {
        dialogElement.setAttribute('tabindex', '-1');
        dialogElement.focus();
      }
    }
  }

  private _restoreFocus() {
    if (this._previouslyFocusedElement && typeof (this._previouslyFocusedElement as HTMLElement).focus === 'function') {
      (this._previouslyFocusedElement as HTMLElement).focus();
    }
    this._previouslyFocusedElement = null;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    // Remove keydown listener if component is removed while open
    if (this.open) {
      document.removeEventListener('keydown', this._handleKeydown);
      this._restoreBackgroundScroll();
    }
  }

  willUpdate(changedProperties: Map<string, unknown>) {
    if (changedProperties.has('open')) {
      const previousOpen = changedProperties.get('open');
      if (this.open && !previousOpen) {
        // Opening: Add keydown listener for this dialog only
        document.addEventListener('keydown', this._handleKeydown);
        // Store currently focused element before opening dialog
        this._previouslyFocusedElement = document.activeElement;
        this._preventBackgroundScroll();
        this.dispatchEvent(new CustomEvent('dialog-open', { bubbles: true }));
      } else if (!this.open && previousOpen) {
        // Closing: Remove keydown listener for this dialog
        document.removeEventListener('keydown', this._handleKeydown);
        this.dispatchEvent(new CustomEvent('dialog-close', { bubbles: true }));
        this._restoreBackgroundScroll();
        // Restore focus after dialog closes
        this._restoreFocus();
      }
    }
  }

  private _preventBackgroundScroll() {
    // Count of open dialogs for proper multiple dialog handling
    const currentCount = parseInt(document.body.getAttribute('data-dialog-count') || '0', 10);

    if (currentCount === 0) {
      // First dialog - store original overflow and lock scroll
      document.body.setAttribute('data-dialog-original-overflow',
        document.body.style.overflow || '');
      document.body.style.overflow = 'hidden';
      document.body.setAttribute('data-dialog-scroll-locked', '');
    }

    document.body.setAttribute('data-dialog-count', (currentCount + 1).toString());
  }

  private _restoreBackgroundScroll() {
    const currentCount = parseInt(document.body.getAttribute('data-dialog-count') || '0', 10);
    const newCount = Math.max(0, currentCount - 1);

    document.body.setAttribute('data-dialog-count', newCount.toString());

    if (newCount === 0) {
      // Last dialog closing - restore original overflow
      const originalOverflow = document.body.getAttribute('data-dialog-original-overflow');
      document.body.style.overflow = originalOverflow || '';
      document.body.removeAttribute('data-dialog-original-overflow');
      document.body.removeAttribute('data-dialog-scroll-locked');
      document.body.removeAttribute('data-dialog-count');
    }
  }

  updated(changedProperties: Map<string, unknown>) {
    if (changedProperties.has('open') && this.open) {
      // Set initial focus after dialog is rendered and visible
      setTimeout(() => this._setInitialFocus(), 0);
    }
  }

  static styles = css`
    :host {
      display: block;
      visibility: hidden;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: var(--ag-z-index-modal);
    }

    :host([open]) {
      visibility: visible;
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
      background-color: rgb(50 50 50 / 60%);
      opacity: 0;
      transition: opacity var(--ag-motion-fast) ease;
    }

    :host([open]) .dialog-backdrop {
      opacity: 1;
    }

    .dialog-container {
      max-width: 90vw;
      max-height: 90vh;
      position: relative;
      background: var(--ag-background-primary);
      border: 1px solid var(--ag-border);
      border-radius: var(--ag-radius-lg);
      padding: var(--ag-space-6);
      margin: var(--ag-space-4);
      opacity: 0;
      transform: translateY(10%);
      transition: opacity var(--ag-motion-fast) ease, transform var(--ag-motion-slow) ease var(--ag-motion-fast);
    }

    :host([open]) .dialog-container {
      opacity: 1;
      transform: translateY(0);
    }

    .dialog-header {
      margin-bottom: var(--ag-space-4);
    }

    .dialog-header h2 {
      margin: 0;
      font-size: var(--ag-font-size-lg);
      font-weight: var(--ag-font-weight-semibold);
      color: var(--ag-text-primary);
    }

    .dialog-content {
      margin-bottom: var(--ag-space-4);
    }

    .dialog-content:last-child {
      margin-bottom: 0;
    }

    .dialog-content p {
      margin: 0 0 var(--ag-space-4) 0;
      color: var(--ag-text-secondary);
    }

    .dialog-footer {
      margin-top: var(--ag-space-4);
    }

    .dialog-footer:empty {
      margin-top: 0;
    }

    .dialog-close-button {
      position: absolute;
      top: var(--ag-space-4);
      right: var(--ag-space-4);
      background: none;
      border: none;
      font-size: var(--ag-font-size-xl);
      cursor: pointer;
      color: var(--ag-text-secondary);
      line-height: 1;
      padding: var(--ag-space-1);
      border-radius: var(--ag-radius-sm);
    }

    .dialog-close-button:hover {
      background: var(--ag-background-secondary);
      color: var(--ag-text-primary);
    }

    .dialog-close-button:focus-visible {
      outline: var(--ag-focus-width) solid var(--ag-focus);
      outline-offset: var(--ag-focus-offset);
    }

    @media (prefers-reduced-motion: reduce) {
      .dialog-backdrop,
      .dialog-container {
        transition: none;
      }
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
        @click=${this._handleBackdropClick}
      >
        <div class="dialog-container">
          <div class="dialog-header">
            <slot name="header">
              ${this.heading ? html`<h2 id="dialog-heading">${this.heading}</h2>` : ''}
            </slot>
            ${this.showCloseButton ? html`
              <button
                type="button"
                class="dialog-close-button"
                aria-label="Close dialog"
                @click=${this._handleCloseButtonClick}
              >
                ×
              </button>
            ` : ''}
          </div>
          <div class="dialog-content">
            ${this.description ? html`<p id="dialog-description">${this.description}</p>` : ''}
            <slot></slot>
          </div>
          <div class="dialog-footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    `;
  }
}