/* v2/lib/src/components/Alert/core/_Alert.ts */
import { LitElement, html, css, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';
import '../../shared/CloseButton/CloseButton';
import styles from './alert-structure.module.css';
import structuralStylesText from './alert-structure.module.css?inline';

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

  static styles = [
    css`${unsafeCSS(structuralStylesText)}`
  ];

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
    const variantClass = this.variant === 'warning' ? styles.alertWarning :
                          this.variant === 'info' ? styles.alertInfo :
                          this.variant === 'success' ? styles.alertSuccess :
                          this.variant === 'primary' ? styles.alertPrimary :
                          this.variant === 'monochrome' ? styles.alertMonochrome :
                          (this.variant === 'danger' || this.variant === 'error') ? styles.alertDanger : '';

    const classes = [
      styles.alert,
      this.rounded ? styles.alertRounded : '',
      this.bordered ? styles.alertBordered : '',
      this.borderedLeft ? styles.alertBorderLeft : '',
      variantClass
    ].filter(Boolean).join(' ');

    return html`
      <div class="${classes}" part="ag-alert" role="alert">
        <div class="${styles.alertContent}">
          <slot></slot>
        </div>
        ${this.dismissible ? html`
          <div class="${styles.alertClose}">
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
