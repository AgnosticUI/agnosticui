import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { Position } from '../../../utils/positioning';
import type { AlertType } from '../../Alert/core/_Alert';
import '../../Alert/core/Alert';
import '../../shared/CloseButton/CloseButton';

// Event types
export type ToastOpenEvent = CustomEvent<void>;
export type ToastCloseEvent = CustomEvent<void>;
export type ToastDismissEvent = CustomEvent<void>;

// Re-export AlertType as ToastType for convenience
export type ToastType = AlertType;

// Props interface following INTERFACE_STANDARDS.md
export interface ToastProps {
  open?: boolean;
  type?: ToastType;
  position?: Position;
  duration?: number;
  autoDismiss?: boolean;
  showCloseButton?: boolean;
  pauseOnHover?: boolean;
  bordered?: boolean;
  rounded?: boolean;
  borderedLeft?: boolean;
  // Event handlers
  onToastOpen?: (event: ToastOpenEvent) => void;
  onToastClose?: (event: ToastCloseEvent) => void;
  onToastDismiss?: (event: ToastDismissEvent) => void;
}

/**
 * Toast Component
 *
 * A non-modal notification element that appears at viewport edges or corners
 * to provide brief, contextual feedback to users.
 *
 * @element ag-toast
 *
 * @fires toast-open - Dispatched when toast becomes visible
 * @fires toast-close - Dispatched when toast is dismissed
 * @fires toast-dismiss - Dispatched when auto-dismiss timer completes
 *
 * @slot - Default slot for toast message content
 *
 * @csspart ag-toast - The outer container
 * @csspart ag-toast-content - The content wrapper
 */
@customElement('ag-toast')
export class Toast extends LitElement implements ToastProps {
  @property({ type: Boolean, reflect: true })
  declare open: boolean;

  @property({ type: String })
  declare type: ToastType;

  @property({ type: String, reflect: true })
  declare position: Position;

  @property({ type: Number })
  declare duration: number;

  @property({ type: Boolean })
  declare autoDismiss: boolean;

  @property({ type: Boolean })
  declare showCloseButton: boolean;

  @property({ type: Boolean })
  declare pauseOnHover: boolean;

  @property({ type: Boolean })
  declare bordered: boolean;

  @property({ type: Boolean })
  declare rounded: boolean;

  @property({ type: Boolean })
  declare borderedLeft: boolean;

  @state()
  private _isHovered = false;

  private _autoDismissTimer: number | null = null;
  private _timerStartTime: number | null = null;
  private _remainingTime: number | null = null;

  constructor() {
    super();
    this.open = false;
    this.type = 'default';
    this.position = 'top-end';
    this.duration = 5000;
    this.autoDismiss = true;
    this.showCloseButton = true;
    this.pauseOnHover = true;
    this.bordered = false;
    this.rounded = true;
    this.borderedLeft = false;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._clearTimer();
  }

  willUpdate(changedProperties: Map<string, unknown>) {
    if (changedProperties.has('open')) {
      const previousOpen = changedProperties.get('open');
      if (this.open && !previousOpen) {
        // Opening
        this.dispatchEvent(new CustomEvent('toast-open', { bubbles: true }));
        if (this.autoDismiss && this.duration > 0) {
          this._startTimer();
        }
      } else if (!this.open && previousOpen) {
        // Closing
        this._clearTimer();
        this.dispatchEvent(new CustomEvent('toast-close', { bubbles: true }));
      }
    }
  }

  private _startTimer() {
    this._clearTimer();
    this._timerStartTime = Date.now();
    this._remainingTime = this.duration;

    this._autoDismissTimer = window.setTimeout(() => {
      this._handleAutoDismiss();
    }, this.duration);
  }

  private _pauseTimer() {
    if (!this._autoDismissTimer || !this._timerStartTime) return;

    const elapsed = Date.now() - this._timerStartTime;
    this._remainingTime = Math.max(0, this.duration - elapsed);

    this._clearTimer();
  }

  private _resumeTimer() {
    if (!this.autoDismiss || this._remainingTime === null) return;

    this._timerStartTime = Date.now();
    this._autoDismissTimer = window.setTimeout(() => {
      this._handleAutoDismiss();
    }, this._remainingTime);
  }

  private _clearTimer() {
    if (this._autoDismissTimer) {
      window.clearTimeout(this._autoDismissTimer);
      this._autoDismissTimer = null;
      this._timerStartTime = null;
    }
  }

  private _handleAutoDismiss() {
    this.dispatchEvent(new CustomEvent('toast-dismiss', { bubbles: true }));
    this.open = false;
  }

  private _handleCloseButtonClick = () => {
    this._clearTimer();
    this.open = false;
  };

  private _handleMouseEnter = () => {
    if (this.pauseOnHover && this.autoDismiss) {
      this._isHovered = true;
      this._pauseTimer();
    }
  };

  private _handleMouseLeave = () => {
    if (this.pauseOnHover && this.autoDismiss) {
      this._isHovered = false;
      this._resumeTimer();
    }
  };

  private _handleKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && this.showCloseButton) {
      event.preventDefault();
      this._handleCloseButtonClick();
    }
  };

  private _isUrgentType(): boolean {
    return this.type === 'error' || this.type === 'danger' || this.type === 'warning';
  }

  static styles = css`
    :host {
      display: block;
      visibility: hidden;
      position: fixed;
      z-index: var(--ag-z-index-toast, 1000);
      pointer-events: none;
    }

    :host([open]) {
      visibility: visible;
      pointer-events: auto;
    }

    /* Edge positions - full width/height */
    :host([position="top"]) {
      top: var(--ag-space-4);
      left: 0;
      right: 0;
      width: 100%;
    }

    :host([position="bottom"]) {
      bottom: var(--ag-space-4);
      left: 0;
      right: 0;
      width: 100%;
    }

    :host([position="start"]) {
      top: 0;
      left: var(--ag-space-4);
      bottom: 0;
      height: 100%;
    }

    :host([position="end"]) {
      top: 0;
      right: var(--ag-space-4);
      bottom: 0;
      height: 100%;
    }

    /* Corner positions - constrained size */
    :host([position="top-start"]) {
      top: var(--ag-space-4);
      left: var(--ag-space-4);
    }

    :host([position="top-end"]) {
      top: var(--ag-space-4);
      right: var(--ag-space-4);
    }

    :host([position="bottom-start"]) {
      bottom: var(--ag-space-4);
      left: var(--ag-space-4);
    }

    :host([position="bottom-end"]) {
      bottom: var(--ag-space-4);
      right: var(--ag-space-4);
    }

    /* Toast container with animations */
    .toast-container {
      position: relative;
      opacity: 0;
      transform: translateY(-100%);
      transition: opacity var(--ag-motion-fast) ease-out,
                  transform var(--ag-motion-fast) ease-out;
    }

    :host([open]) .toast-container {
      opacity: 1;
      transform: translateY(0);
    }

    /* Transform variations based on position */
    :host([position="bottom"]) .toast-container,
    :host([position="bottom-start"]) .toast-container,
    :host([position="bottom-end"]) .toast-container {
      transform: translateY(100%);
    }

    :host([position="start"]) .toast-container {
      transform: translateX(-100%);
    }

    :host([position="end"]) .toast-container {
      transform: translateX(100%);
    }

    :host([position="bottom"][open]) .toast-container,
    :host([position="bottom-start"][open]) .toast-container,
    :host([position="bottom-end"][open]) .toast-container,
    :host([position="start"][open]) .toast-container,
    :host([position="end"][open]) .toast-container {
      transform: translateX(0) translateY(0);
    }

    /* Size constraints for corner positions */
    :host([position="top-start"]) .toast-container,
    :host([position="top-end"]) .toast-container,
    :host([position="bottom-start"]) .toast-container,
    :host([position="bottom-end"]) .toast-container {
      max-width: 400px;
      max-height: 200px;
    }

    /* Inner layout for content and close button */
    .toast-inner-layout {
      display: flex;
      align-items: center;
      gap: var(--ag-space-3);
    }

    .toast-content {
      flex: 1;
      min-width: 0; /* Allows content to shrink and wrap */
      display: flex;
      align-items: center;
      gap: var(--ag-space-2);
    }

    ag-close-button {
      flex-shrink: 0;
    }

    @media (prefers-reduced-motion: reduce) {
      .toast-container {
        transition: opacity var(--ag-motion-fast) ease;
        transform: none !important;
      }

      :host([open]) .toast-container {
        transform: none !important;
      }
    }
  `;

  render() {
    const role = this._isUrgentType() ? 'alert' : 'status';
    const ariaLive = this._isUrgentType() ? 'assertive' : 'polite';

    return html`
      <div
        class="toast-container"
        part="ag-toast"
        role="${role}"
        aria-live="${ariaLive}"
        aria-atomic="true"
        @mouseenter=${this._handleMouseEnter}
        @mouseleave=${this._handleMouseLeave}
        @keydown=${this._handleKeydown}
      >
        <ag-alert
          part="ag-toast-content"
          .type=${this.type}
          .bordered=${this.bordered}
          .rounded=${this.rounded}
          .borderedLeft=${this.borderedLeft}
        >
          <div class="toast-inner-layout">
            <div class="toast-content">
              <slot></slot>
            </div>
            ${this.showCloseButton ? html`
              <ag-close-button
                size="sm"
                .variant=${this.type}
                label="Dismiss notification"
                @close-button-click=${this._handleCloseButtonClick}
              ></ag-close-button>
            ` : nothing}
          </div>
        </ag-alert>
      </div>
    `;
  }
}
