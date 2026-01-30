import { LitElement, html } from 'lit';
import 'agnosticui-core/alert';

export class AlertLitExamples extends LitElement {
  // Render in light DOM to access global utility classes
  createRenderRoot() {
    return this;
  }

  static properties = {
    showSuccessAlert: { type: Boolean },
    showWarningAlert: { type: Boolean },
  };

  constructor() {
    super();
    this.showSuccessAlert = true;
    this.showWarningAlert = true;
  }

  handleWarningDismiss(event) {
    console.log('Warning dismissed, variant:', event.detail.variant);
    this.showWarningAlert = false;
  }

  render() {
    return html`
      <section>
        <div class="mbe4">
          <h2>Alerts</h2>
        </div>
        <div class="stacked">
          <ag-alert class="mbe2">Default alert</ag-alert>
          <ag-alert class="mbe2" variant="success">Success alert</ag-alert>
          <ag-alert class="mbe2" variant="info">Info alert</ag-alert>
          <ag-alert class="mbe2" variant="primary">Primary alert</ag-alert>
          <ag-alert class="mbe2" variant="warning">Warning alert</ag-alert>
          <ag-alert class="mbe2" variant="error">Error alert</ag-alert>
          <ag-alert class="mbe2" variant="danger">Danger alert</ag-alert>
          <ag-alert class="mbe2" variant="monochrome">Monochrome alert</ag-alert>
        </div>

        <div class="mbe4">
          <h2>Bordered</h2>
        </div>
        <div class="stacked">
          <ag-alert class="mbe2" bordered>Default alert</ag-alert>
          <ag-alert class="mbe2" bordered variant="success">Success alert</ag-alert>
          <ag-alert class="mbe2" bordered variant="info">Info alert</ag-alert>
          <ag-alert class="mbe2" bordered variant="primary">Primary alert</ag-alert>
          <ag-alert class="mbe2" bordered variant="warning">Warning alert</ag-alert>
          <ag-alert class="mbe2" bordered variant="error">Error alert</ag-alert>
          <ag-alert class="mbe2" bordered variant="danger">Danger alert</ag-alert>
          <ag-alert class="mbe2" bordered variant="monochrome">Monochrome alert</ag-alert>
        </div>

        <div class="mbe4">
          <h2>Bordered Left with Icon</h2>
        </div>
        <div class="stacked">
          <ag-alert class="mbe2" borderedleft>
            <div class="flex-inline items-center justify-center">
              <svg
                class="mie2"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--ag-secondary)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
              Default alert
            </div>
          </ag-alert>
          <ag-alert class="mbe2" borderedleft variant="success">
            <div class="flex-inline items-center justify-center">
              <svg
                class="mie2"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--ag-success)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
              Success alert
            </div>
          </ag-alert>
          <ag-alert class="mbe2" borderedleft variant="info">
            <div class="flex-inline items-center justify-center">
              <svg
                class="mie2"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--ag-secondary)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
              Info alert
            </div>
          </ag-alert>
          <ag-alert class="mbe2" borderedleft variant="primary">
            <div class="flex-inline items-center justify-center">
              <svg
                class="mie2"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--ag-primary)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
              Primary alert
            </div>
          </ag-alert>
          <ag-alert class="mbe2" borderedleft variant="warning">
            <div class="flex-inline items-center justify-center">
              <svg
                class="mie2"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--ag-warning)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
              Warning alert
            </div>
          </ag-alert>
          <ag-alert class="mbe2" borderedleft variant="error">
            <div class="flex-inline items-center justify-center">
              <svg
                class="mie2"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--ag-danger)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
              Error alert
            </div>
          </ag-alert>
          <ag-alert class="mbe2" borderedleft variant="danger">
            <div class="flex-inline items-center justify-center">
              <svg
                class="mie2"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--ag-danger)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
              Danger alert
            </div>
          </ag-alert>
          <ag-alert class="mbe2" borderedleft variant="monochrome">
            <div class="flex-inline items-center justify-center">
              <svg
                class="mie2"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--ag-text-primary)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
              Monochrome alert
            </div>
          </ag-alert>
        </div>

        <div class="mbe4">
          <h2>Rounded</h2>
        </div>
        <div class="stacked">
          <ag-alert class="mbe2" rounded>Default alert</ag-alert>
          <ag-alert class="mbe2" rounded variant="success">Success alert</ag-alert>
          <ag-alert class="mbe2" rounded variant="info">Info alert</ag-alert>
          <ag-alert class="mbe2" rounded variant="primary">Primary alert</ag-alert>
          <ag-alert class="mbe2" rounded variant="warning">Warning alert</ag-alert>
          <ag-alert class="mbe2" rounded variant="error">Error alert</ag-alert>
          <ag-alert class="mbe2" rounded variant="danger">Danger alert</ag-alert>
          <ag-alert class="mbe2" rounded variant="monochrome">Monochrome alert</ag-alert>
        </div>

        <div class="mbe4">
          <h2>Dismissible</h2>
          <p class="mbe2" style="color: var(--ag-text-secondary); font-size: 0.875rem;">
            Alerts can be dismissed by the user with a close button.
          </p>
        </div>
        <div class="stacked mbe4">
          ${this.showSuccessAlert
            ? html`
                <ag-alert
                  class="mbe2"
                  variant="success"
                  dismissible
                  @alert-dismiss=${() => (this.showSuccessAlert = false)}
                >
                  <strong>Success!</strong> Your changes have been saved. Click
                  the × to dismiss.
                </ag-alert>
              `
            : html`
                <button
                  @click=${() => (this.showSuccessAlert = true)}
                  class="mbe2"
                  style="padding: 0.5rem 1rem; cursor: pointer;"
                >
                  Show Success Alert
                </button>
              `}
          ${this.showWarningAlert
            ? html`
                <ag-alert
                  class="mbe2"
                  variant="warning"
                  dismissible
                  rounded
                  @alert-dismiss=${(e) => this.handleWarningDismiss(e)}
                >
                  <strong>Warning!</strong> This action may have unintended
                  consequences.
                </ag-alert>
              `
            : html`
                <button
                  @click=${() => (this.showWarningAlert = true)}
                  style="padding: 0.5rem 1rem; cursor: pointer;"
                >
                  Show Warning Alert
                </button>
              `}
        </div>

        <div class="mbe4">
          <h2>CSS Parts Customization</h2>
          <p class="mbe2" style="color: var(--ag-text-secondary); font-size: 0.875rem;">
            Customize alert appearance using CSS Shadow Parts without breaking
            encapsulation.
          </p>
        </div>
        <div class="stacked mbe4">
          <ag-alert class="custom-gradient-alert mbe2">
            This alert uses a vibrant gradient background with custom shadows
          </ag-alert>
          <ag-alert class="custom-card-alert mbe2">
            Card-style alert with elevation and hover effect
          </ag-alert>
        </div>

        <style>
          /* CSS Parts customization examples */

          /* Gradient alert style */
          .custom-gradient-alert::part(ag-alert) {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 1.5rem;
            border-radius: 12px;
            border: none;
            box-shadow: 0 8px 16px rgba(102, 126, 234, 0.3);
            font-weight: 600;
          }

          /* Card-style elevated alert */
          .custom-card-alert::part(ag-alert) {
            background: white;
            color: #333;
            padding: 1.5rem;
            border-radius: 16px;
            border: 1px solid #e5e7eb;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
          }

          .custom-card-alert::part(ag-alert):hover {
            transform: translateY(-2px);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
              0 10px 10px -5px rgba(0, 0, 0, 0.04);
          }
        </style>
      </section>
    `;
  }
}

customElements.define('alert-lit-examples', AlertLitExamples);
