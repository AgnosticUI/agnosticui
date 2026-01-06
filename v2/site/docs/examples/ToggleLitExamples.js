import { LitElement, html } from 'lit';
import 'agnosticui-core/toggle';
import 'agnosticui-core/button';

export class ToggleLitExamples extends LitElement {
  createRenderRoot() {
    return this;
  }

  static get properties() {
    return {
      notificationsEnabled: { type: Boolean, state: true },
      darkModeEnabled: { type: Boolean, state: true },
      formData: { type: Object, state: true },
    };
  }

  constructor() {
    super();
    this.notificationsEnabled = false;
    this.darkModeEnabled = false;
    this.formData = {
      newsletter: false,
      name: "",
      value: "",
    };
    this.customToggleStyles = html`
      <style>
        .custom-toggle::part(ag-toggle-button) {
          border: 2px solid var(--ag-coral-50);
          border-radius: 9999px;
          padding: var(--ag-space-2) var(--ag-space-3);
        }
        .custom-toggle::part(ag-toggle-track) {
          background-color: #f0f0f0;
        }
        .custom-toggle::part(ag-toggle-handle) {
          background-color: var(--ag-coral-200);
          border: 2px solid #fff;
          box-shadow: 0 0 5px var(--ag-coral-200);
        }
        .custom-toggle[checked]::part(ag-toggle-track) {
          background-color: var(--ag-coral-300);
        }
        .custom-toggle[checked]::part(ag-toggle-handle) {
          background-color: #fff;
        }
      </style>
    `;
  }

  handleToggleChange(event) {
    this.notificationsEnabled = event.detail.checked;
    console.log("Toggle changed:", event.detail);
  }
  
  handleDarkModeToggle(event) {
    this.darkModeEnabled = event.detail.checked;
  }

  handleFormToggle(event) {
    this.formData = {
      newsletter: event.detail.checked,
      name: event.detail.name,
      value: event.detail.value,
    };
    console.log("Form toggle changed:", event.detail);
  }

  toggleDarkModeProgrammatically() {
    this.darkModeEnabled = !this.darkModeEnabled;
  }
  
  render() {
    return html`
      <section>
        <div class="mbe2">
          <h2>Default Toggles</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-toggle label="Default toggle"></ag-toggle>
          <ag-toggle label="Checked by default" checked></ag-toggle>
          <ag-toggle label="Disabled" disabled></ag-toggle>
          <ag-toggle label="Disabled and checked" checked disabled></ag-toggle>
        </div>

        <div class="mbe2">
          <h2>Sizes</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-toggle label="Extra small" size="xs"></ag-toggle>
          <ag-toggle label="Small" size="sm"></ag-toggle>
          <ag-toggle label="Medium (default)" size="md"></ag-toggle>
          <ag-toggle label="Large" size="lg"></ag-toggle>
          <ag-toggle label="Extra large" size="xl"></ag-toggle>
        </div>

        <div class="mbe2">
          <h2>Variants</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-toggle label="Default variant" checked></ag-toggle>
          <ag-toggle label="Success" variant="success" checked></ag-toggle>
          <ag-toggle label="Warning" variant="warning" checked></ag-toggle>
          <ag-toggle label="Danger" variant="danger" checked></ag-toggle>
          <ag-toggle label="Monochrome" variant="monochrome" checked></ag-toggle>
        </div>

        <div class="mbe2">
          <h2>Interactive Examples</h2>
          <p class="mbs2 mbe3">
            Demonstrates event handling with @toggle-change.
          </p>
        </div>
        <div class="stacked-mobile mbe4">
          <div>
            <ag-toggle
              label="Notifications (@toggle-change)"
              .checked=${this.notificationsEnabled}
              @toggle-change=${this.handleToggleChange}
            ></ag-toggle>
            <p style="margin-top: 0.5rem">
              Notifications: <strong>${this.notificationsEnabled ? 'Enabled' : 'Disabled'}</strong>
            </p>
          </div>
          <div>
            <ag-toggle
              label="Dark Mode"
              .checked=${this.darkModeEnabled}
              @toggle-change=${this.handleDarkModeToggle}
            ></ag-toggle>
            <p style="margin-top: 0.5rem">
              Dark mode: <strong>${this.darkModeEnabled ? 'On' : 'Off'}</strong>
            </p>
          </div>
          <div>
            <ag-toggle
              label="Newsletter Subscription"
              name="newsletter"
              value="subscribed"
              .checked=${this.formData.newsletter}
              @toggle-change=${this.handleFormToggle}
            ></ag-toggle>
            <p style="margin-top: 0.5rem; font-size: 0.875rem; color: var(--ag-text-secondary);">
              Form data: name="${this.formData.name}", value="${this.formData.value}", checked=${this.formData.newsletter}
            </p>
          </div>
        </div>
        <div class="mbe4 flex justify-center">
          <ag-button
            @click=${this.toggleDarkModeProgrammatically}
            mode="primary"
            size="small"
          >
            Toggle above programmatically
          </ag-button>
        </div>

        <div class="mbe4">
          <h2>Labels, Helper Text, and Validation</h2>
          <p class="mbs2 mbe3">
            The Toggle component supports labels, helper text, required fields, and validation states.
          </p>
        </div>
        <div class="mbe4" style="max-width: 600px;">
          <div class="mbe3">
            <ag-toggle label="Enable notifications"></ag-toggle>
          </div>
          <div class="mbe3">
            <ag-toggle
              label="Dark mode"
              help-text="Reduces eye strain in low-light environments"
            ></ag-toggle>
          </div>
          <div class="mbe3">
            <ag-toggle
              label="Two-factor authentication"
              required
              help-text="This setting is required for account security"
            ></ag-toggle>
          </div>
          <div class="mbe3">
            <ag-toggle
              label="Email notifications"
              required
              invalid
              error-message="You must enable email notifications to continue"
            ></ag-toggle>
          </div>
        </div>

        <div class="mbe4">
          <h2>Label Positioning</h2>
          <p class="mbs2 mbe3">
            Control label position with <code>label-position</code>: 'top' (default), 'start', 'end', or 'bottom'.
          </p>
        </div>
        <div class="mbe4" style="max-width: 600px;">
          <div class="mbe3">
            <ag-toggle label="Top Label (Default)" label-position="top"></ag-toggle>
          </div>
          <div class="mbe3">
            <ag-toggle label="Start Position" label-position="start"></ag-toggle>
          </div>
          <div class="mbe3">
            <ag-toggle label="End Position" label-position="end"></ag-toggle>
          </div>
          <div class="mbe3">
            <ag-toggle
              label="Bottom Position"
              label-position="bottom"
              help-text="Bottom label position for alternative layouts"
            ></ag-toggle>
          </div>
        </div>

        <div class="mbe2">
          <h2>CSS Shadow Parts Customization</h2>
        </div>
        <div class="stacked-mobile mbe4">
          ${this.customToggleStyles}
          <ag-toggle
            class="custom-toggle"
            label="Customized Toggle"
            checked
          ></ag-toggle>
        </div>
      </section>
    `;
  }
}
customElements.define('toggle-lit-examples', ToggleLitExamples);
