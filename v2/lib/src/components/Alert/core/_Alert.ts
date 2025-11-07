import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '../../shared/CloseButton/CloseButton';

export type AlertType = 'warning' | 'info' | 'success' | 'error' | 'danger' | 'primary' | 'default';

// Event detail interfaces
export interface AlertDismissEventDetail {
  type: AlertType;
}

// Event type definitions
export type AlertDismissEvent = CustomEvent<AlertDismissEventDetail>;

export interface AlertProps {
  type?: AlertType;
  bordered?: boolean;
  rounded?: boolean;
  borderedLeft?: boolean;
  dismissible?: boolean;
  // Event handlers
  onAlertDismiss?: (event: AlertDismissEvent) => void;
}

@customElement('ag-alert')
export class Alert extends LitElement implements AlertProps {
  @property({ type: String })
  public type: AlertType = 'default';

  @property({ type: Boolean })
  public bordered = false;

  @property({ type: Boolean })
  public rounded = false;

  @property({ type: Boolean })
  public borderedLeft = false;

  @property({ type: Boolean })
  public dismissible = false;

  @property({ attribute: false })
  declare onAlertDismiss?: (event: AlertDismissEvent) => void;

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
      margin-left: auto;
    }
    .alert-rounded {
      border-radius: var(--ag-radius-md);
    }
    .alert-bordered {
      border-color: var(--ag-border);
    }
    .alert-border-left {
      border-left-width: var(--ag-border-width-3);
      border-left-color: var(--ag-border);
    }
    .alert-warning {
      background-color: var(--ag-warning-background);
      color: var(--ag-warning-text);
    }
    .alert-border-left.alert-warning {
      border-left-color: var(--ag-warning);
    }
    .alert-info {
      background-color: var(--ag-info-background);
      color: var(--ag-info-text);
    }
    .alert-border-left.alert-info {
      border-left-color: var(--ag-info);
    }
    .alert-success {
      background-color: var(--ag-success-background);
      color: var(--ag-success-text);
    }
    .alert-border-left.alert-success {
      border-left-color: var(--ag-success);
    }
    .alert-danger,
    .alert-error {
      background-color: var(--ag-danger-background);
      color: var(--ag-danger-text);
    }
    .alert-border-left.alert-danger,
    .alert-border-left.alert-error {
      border-left-color: var(--ag-danger);
    }
    .alert-primary {
      background-color: var(--ag-primary-background);
      color: var(--ag-primary-text);
    }
    .alert-border-left.alert-primary {
      border-left-color: var(--ag-primary);
    }
  `;

  private _handleDismiss = () => {
    // Dual-dispatch pattern for custom event
    const dismissEvent = new CustomEvent<AlertDismissEventDetail>('alert-dismiss', {
      detail: {
        type: this.type
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
      `alert-${this.type}`
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
