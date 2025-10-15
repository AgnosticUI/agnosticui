import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';


export type AlertType = 'warning' | 'info' | 'success' | 'error' | 'danger' | 'primary' | 'default';

export interface AlertProps {
  type?: AlertType;
  bordered?: boolean;
  rounded?: boolean;
  borderedLeft?: boolean;
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

  static styles = css`
    .alert {
      padding: var(--ag-alert-padding);
      background-color: var(--ag-info-background);
      color: var(--ag-info-text);
      border-width: var(--ag-alert-border-width);
      border-style: solid;
      border-color: transparent;
    }
    .alert-rounded {
      border-radius: var(--ag-alert-border-radius);
    }
    .alert-bordered {
      border-color: var(--ag-border);
    }
    .alert-border-left {
      border-left-width: var(--ag-alert-border-left-width);
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

  render() {
    const classes = [
      'alert',
      this.rounded ? 'alert-rounded' : '',
      this.bordered ? 'alert-bordered' : '',
      this.borderedLeft ? 'alert-border-left' : '',
      `alert-${this.type}`
    ].filter(Boolean).join(' ');

    return html`
      <div class="${classes}" role="alert">
        <slot></slot>
      </div>
    `;
  }
}
