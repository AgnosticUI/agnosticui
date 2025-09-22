import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('ag-dialog')
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

  @property({ type: Boolean })
  declare showCloseButton: boolean;

  private _previouslyFocusedElement: Element | null = null;

  constructor() {
    super();
    this.open = false;
    this.heading = '';
    this.description = '';
    this.closeOnEscape = true;
    this.closeOnBackdrop = true;
    this.showCloseButton = false;
  }

  private _handleKeydown = (event: KeyboardEvent) => {
    if (!this.open) return;

    if (event.key === 'Escape' && this.closeOnEscape) {
      event.preventDefault();
      this.dispatchEvent(new CustomEvent('dialog-cancel', { bubbles: true }));
      this.open = false;
      return;
    }

    if (event.key === 'Tab') {
      this._handleFocusTrap(event);
    }
  };

  private _handleFocusTrap(event: KeyboardEvent) {
    const focusableElements = this._getFocusableElements();
    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    const currentElement = document.activeElement as HTMLElement;

    if (event.shiftKey) {
      // Shift+Tab: moving backwards
      if (currentElement === firstElement || !this._isElementInDialog(currentElement)) {
        event.preventDefault();
        lastElement.focus();
      }
    } else {
      // Tab: moving forwards
      if (currentElement === lastElement || !this._isElementInDialog(currentElement)) {
        event.preventDefault();
        firstElement.focus();
      }
    }
  }

  private _isElementInDialog(element: Element | null): boolean {
    if (!element || !this.shadowRoot) return false;

    // Check if element is in shadow DOM
    if (this.shadowRoot.contains(element)) return true;

    // Check if element is slotted content
    return this.contains(element);
  }

  private _handleBackdropClick = (event: MouseEvent) => {
    if (!this.closeOnBackdrop || !this.open) return;

    const target = event.target as Element;
    const container = this.shadowRoot?.querySelector('.dialog-container');

    // Check if click is on shadow DOM content (dialog container or its children)
    const isOnShadowContent = container && container.contains(target);

    // Check if click is on slotted content (light DOM elements inside the dialog)
    const isOnSlottedContent = this.contains(target);

    // Only close if clicking neither on shadow content nor slotted content
    if (!isOnShadowContent && !isOnSlottedContent) {
      this.dispatchEvent(new CustomEvent('dialog-cancel', { bubbles: true }));
      this.open = false;
    }
  };

  private _handleCloseButtonClick = (event: MouseEvent) => {
    event.stopPropagation();
    this.dispatchEvent(new CustomEvent('dialog-close', { bubbles: true }));
    this.open = false;
  };

  private _getFocusableElements(): HTMLElement[] {
    if (!this.shadowRoot) return [];

    const selectors = [
      'button:not([disabled])',
      'ag-button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      'a[href]',
      '[tabindex]:not([tabindex="-1"]):not([disabled])'
    ].join(', ');

    const elements = Array.from(this.shadowRoot.querySelectorAll(selectors)) as HTMLElement[];
    const slottedElements = Array.from(this.querySelectorAll(selectors)) as HTMLElement[];

    return [...elements, ...slottedElements].filter(el =>
      el.offsetParent !== null && !el.hasAttribute('disabled')
    );
  }

  private _setInitialFocus() {
    const focusableElements = this._getFocusableElements();
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
    document.addEventListener('keydown', this._handleKeydown);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('keydown', this._handleKeydown);
    // Restore background scroll if component is removed while open
    if (this.open) {
      this._restoreBackgroundScroll();
    }
  }

  willUpdate(changedProperties: Map<string, unknown>) {
    if (changedProperties.has('open')) {
      const previousOpen = changedProperties.get('open');
      if (this.open && !previousOpen) {
        // Store currently focused element before opening dialog
        this._previouslyFocusedElement = document.activeElement;
        this._preventBackgroundScroll();
        this.dispatchEvent(new CustomEvent('dialog-open', { bubbles: true }));
      } else if (!this.open && previousOpen) {
        this.dispatchEvent(new CustomEvent('dialog-close', { bubbles: true }));
        this._restoreBackgroundScroll();
        // Restore focus after dialog closes
        this._restoreFocus();
      }
    }
  }

  private _preventBackgroundScroll() {
    // Count of open dialogs for proper multiple dialog handling
    const currentCount = parseInt(document.body.getAttribute('data-dialog-count') || '0');

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
    const currentCount = parseInt(document.body.getAttribute('data-dialog-count') || '0');
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
      background: var(--dialog-bg, #ffffff);
      border: 1px solid var(--dialog-border, #e5e7eb);
      border-radius: var(--dialog-radius, 1rem);
      box-shadow: var(--dialog-shadow, 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04));
      padding: var(--dialog-padding, 1.5rem);
      margin: var(--dialog-margin, 1rem);
    }

    .dialog-header {
      margin-bottom: var(--dialog-header-spacing, 1rem);
    }

    .dialog-header h2 {
      margin: 0;
      font-size: var(--dialog-heading-size, 1.25rem);
      font-weight: var(--dialog-heading-weight, 600);
      color: var(--dialog-heading-color, inherit);
    }

    .dialog-content {
      margin-bottom: var(--dialog-content-spacing, 1rem);
    }

    .dialog-content:last-child {
      margin-bottom: 0;
    }

    .dialog-content p {
      margin: 0 0 1rem 0;
      color: var(--dialog-description-color, #6b7280);
    }

    .dialog-footer {
      margin-top: var(--dialog-footer-spacing, 1rem);
    }

    .dialog-footer:empty {
      margin-top: 0;
    }

    .dialog-close-button {
      position: absolute;
      top: var(--dialog-close-top, 1rem);
      right: var(--dialog-close-right, 1rem);
      background: none;
      border: none;
      font-size: var(--dialog-close-size, 1.5rem);
      cursor: pointer;
      color: var(--dialog-close-color, #6b7280);
      line-height: 1;
      padding: var(--dialog-close-padding, 0.25rem);
      border-radius: var(--dialog-close-radius, 0.25rem);
    }

    .dialog-close-button:hover {
      background: var(--dialog-close-hover-bg, #f3f4f6);
      color: var(--dialog-close-hover-color, #374151);
    }

    .dialog-close-button:focus-visible {
      outline: 2px solid var(--agnostic-focus, #2563eb);
      outline-offset: 2px;
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