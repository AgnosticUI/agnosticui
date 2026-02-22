import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';
import '../../shared/CloseButton/CloseButton';

export type AlertVariant = 'warning' | 'info' | 'success' | 'error' | 'danger' | 'primary' | 'default' | 'monochrome';

// Event detail interfaces
export interface AlertDismissEventDetail {
  variant: AlertVariant;
}

// Event type definitions
export type AlertDismissEvent = CustomEvent<AlertDismissEventDetail>;

export interface AlertProps {
  variant?: AlertVariant;
  bordered?: boolean;
  rounded?: boolean;
  borderedLeft?: boolean;
  dismissible?: boolean;
  // Event handlers
  onAlertDismiss?: (event: AlertDismissEvent) => void;
}

export class AgAlert extends LitElement implements AlertProps {
  @property({ type: String })
  declare variant: AlertVariant;

  @property({ type: Boolean })
  declare bordered: boolean;

  @property({ type: Boolean })
  declare rounded: boolean;

  @property({ type: Boolean })
  declare borderedLeft: boolean;

  @property({ type: Boolean })
  declare dismissible: boolean;

  @property({ attribute: false })
  declare onAlertDismiss?: (event: AlertDismissEvent) => void;

  constructor() {
    super();
    this.variant = 'default';
    this.bordered = false;
    this.rounded = false;
    this.borderedLeft = false;
    this.dismissible = false;
  }

  static styles = css`
    .alert {
      position: relative;
      padding: var(--ag-space-3);
      background-color: var(--ag-info-background);
      color: var(--ag-info-text);
      border-width: var(--ag-border-width-1);
      border-style: solid;
      border-color: transparent;
      display: flex;
      align-items: flex-start;
      gap: var(--ag-space-2);
    }
    .alert-content {
      flex: 1;
    }
    .alert-close {
      flex-shrink: 0;
      margin-inline-start: auto;
    }
    .alert-rounded {
      border-radius: var(--ag-radius-md);
    }
    .alert-bordered {
      border-color: var(--ag-border);
    }
    .alert-bordered.alert-warning {
      border-color: var(--ag-warning);
    }
    .alert-bordered.alert-info {
      border-color: var(--ag-info);
    }
    .alert-bordered.alert-success {
      border-color: var(--ag-success);
    }
    .alert-bordered.alert-danger,
    .alert-bordered.alert-error {
      border-color: var(--ag-danger);
    }
    .alert-bordered.alert-primary {
      border-color: var(--ag-primary);
    }
    .alert-border-left {
      border-inline-start-width: var(--ag-border-width-3);
      border-inline-start-color: var(--ag-border);
    }
    .alert-warning {
      background-color: var(--ag-warning-background);
      color: var(--ag-warning-text);
    }
    .alert-border-left.alert-warning {
      border-inline-start-color: var(--ag-warning);
    }
    .alert-info {
      background-color: var(--ag-info-background);
      color: var(--ag-info-text);
    }
    .alert-border-left.alert-info {
      border-inline-start-color: var(--ag-info);
    }
    .alert-success {
      background-color: var(--ag-success-background);
      color: var(--ag-success-text);
    }
    .alert-border-left.alert-success {
      border-inline-start-color: var(--ag-success);
    }
    .alert-danger,
    .alert-error {
      background-color: var(--ag-danger-background);
      color: var(--ag-danger-text);
    }
    .alert-border-left.alert-danger,
    .alert-border-left.alert-error {
      border-inline-start-color: var(--ag-danger);
    }
    .alert-primary {
      background-color: var(--ag-primary-background);
      color: var(--ag-primary-text);
    }
    .alert-border-left.alert-primary {
      border-inline-start-color: var(--ag-primary);
    }
    .alert-monochrome {
      background-color: var(--ag-info-background);
      color: var(--ag-text-primary);
    }
    .alert-bordered.alert-monochrome {
      border-color: var(--ag-text-primary);
    }
    .alert-border-left.alert-monochrome {
      border-inline-start-color: var(--ag-text-primary);
    }
  `;

  private _handleDismiss = () => {
    // Dual-dispatch pattern for custom event
    const dismissEvent = new CustomEvent<AlertDismissEventDetail>('alert-dismiss', {
      detail: {
        variant: this.variant
      },
      bubbles: true,
      composed: true
    });

    // Dispatch DOM event first
    this.dispatchEvent(dismissEvent);

    // Then invoke callback if provided
    if (this.onAlertDismiss) {
      this.onAlertDismiss(dismissEvent);
    }
  };

  render() {
    const classes = [
      'alert',
      this.rounded ? 'alert-rounded' : '',
      this.bordered ? 'alert-bordered' : '',
      this.borderedLeft ? 'alert-border-left' : '',
      `alert-${this.variant}`
    ].filter(Boolean).join(' ');

    return html`
      <div class="${classes}" part="ag-alert" role="alert">
        <div class="alert-content">
          <slot></slot>
        </div>
        ${this.dismissible ? html`
          <div class="alert-close">
            <ag-close-button
              @click=${this._handleDismiss}
              aria-label="Dismiss alert"
              size="sm"
            ></ag-close-button>
          </div>
        ` : ''}
      </div>
    `;
  }
}
