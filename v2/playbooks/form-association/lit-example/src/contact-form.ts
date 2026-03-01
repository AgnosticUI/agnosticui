import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import './components/ag/Input/core/Input';
import './components/ag/SelectionButtonGroup/core/SelectionButtonGroup';
import './components/ag/SelectionButton/core/SelectionButton';
import './components/ag/Toggle/core/Toggle';
import './components/ag/Button/core/Button';
import './components/ag/Card/core/Card';
import './components/ag/Divider/core/Divider';

type FormPayload = Record<string, string>;

function validateAll(form: HTMLFormElement): boolean {
  let valid = true;
  for (const el of Array.from(form.elements)) {
    if (typeof (el as HTMLInputElement).reportValidity === 'function') {
      if (!(el as HTMLInputElement).reportValidity()) valid = false;
    }
  }
  return valid;
}

@customElement('contact-form')
export class ContactForm extends LitElement {
  static override styles = css`
    :host {
      display: block;
      padding: var(--ag-space-8);
    }
    .wrapper {
      max-width: 540px;
      margin: 0 auto;
    }
    .card-body {
      padding: var(--ag-space-6);
    }
    h2 {
      margin: 0 0 var(--ag-space-2) 0;
    }
    form {
      display: flex;
      flex-direction: column;
      gap: var(--ag-space-4);
      margin-top: var(--ag-space-4);
    }
    .actions {
      display: flex;
      gap: var(--ag-space-3);
      justify-content: flex-end;
      margin-top: var(--ag-space-2);
    }
    .result {
      margin-top: var(--ag-space-4);
      padding: var(--ag-space-4);
      background: var(--ag-background-secondary);
      border-radius: var(--ag-radius-md);
    }
    .result ul {
      margin: var(--ag-space-2) 0 0 0;
      padding: 0 0 0 var(--ag-space-4);
    }
  `;

  @state() private _submissionData: FormPayload | null = null;

  private get _form(): HTMLFormElement | null {
    return this.shadowRoot?.querySelector('form') ?? null;
  }

  private _handleSubmit(e: Event) {
    e.preventDefault();
    const form = this._form;
    if (!form) return;
    if (!validateAll(form)) return;
    const data = new FormData(form);
    this._submissionData = Object.fromEntries(data.entries()) as FormPayload;
  }

  private _handleReset() {
    this._form?.reset();
    this._submissionData = null;
  }

  override render() {
    return html`
      <div class="wrapper">
        <ag-card>
          <div class="card-body">
            <h2>Contact Us</h2>
            <ag-divider></ag-divider>
            <form @submit=${this._handleSubmit} novalidate>
              <div>
                <ag-input
                  label="Full Name"
                  name="fullName"
                  type="text"
                  .required=${true}
                  unique-id="fullName"
                ></ag-input>
              </div>
              <div>
                <ag-input
                  label="Email Address"
                  name="email"
                  type="email"
                  .required=${true}
                  unique-id="email"
                ></ag-input>
              </div>
              <div>
                <ag-input
                  label="Phone"
                  name="phone"
                  type="tel"
                  unique-id="phone"
                ></ag-input>
              </div>
              <div>
                <ag-input
                  label="Message"
                  name="message"
                  type="textarea"
                  .required=${true}
                  unique-id="message"
                ></ag-input>
              </div>
              <div>
                <ag-selection-button-group
                  name="frequency"
                  type="radio"
                  legend="How often would you like to hear from us?"
                  .required=${true}
                  .validationMessages=${{ valueMissing: 'Please select a newsletter frequency.' }}
                >
                  <ag-selection-button value="weekly">Weekly</ag-selection-button>
                  <ag-selection-button value="monthly">Monthly</ag-selection-button>
                  <ag-selection-button value="major">Only major announcements</ag-selection-button>
                </ag-selection-button-group>
              </div>
              <div>
                <ag-toggle
                  label="I agree to the Terms & Conditions"
                  name="terms"
                  .required=${true}
                  .validationMessages=${{ valueMissing: 'Please accept the terms and conditions to continue.' }}
                ></ag-toggle>
              </div>
              <div class="actions">
                <ag-button type="button" @click=${this._handleReset}>Clear</ag-button>
                <ag-button type="submit" mode="primary">Send Message →</ag-button>
              </div>
            </form>
          </div>
        </ag-card>

        ${this._submissionData
          ? html`
              <div class="result" role="alert">
                <strong>✓ Message sent!</strong>
                <ul>
                  ${Object.entries(this._submissionData).map(
                    ([key, value]) => html`<li><strong>${key}:</strong> ${value}</li>`
                  )}
                </ul>
              </div>
            `
          : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'contact-form': ContactForm;
  }
}
