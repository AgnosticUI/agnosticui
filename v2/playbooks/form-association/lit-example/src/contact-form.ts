import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import './components/ag/Input/core/Input';
import './components/ag/SelectionButtonGroup/core/SelectionButtonGroup';
import './components/ag/SelectionButton/core/SelectionButton';
import './components/ag/Radio/core/Radio';
import './components/ag/Checkbox/core/Checkbox';
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
      color: var(--ag-text-primary);
    }
    .result ul {
      margin: var(--ag-space-2) 0 0 0;
      padding: 0 0 0 var(--ag-space-4);
    }
    /* :state() demo — visual proof that CustomStateSet is working */
    ag-radio:state(checked),
    ag-checkbox:state(checked),
    ag-toggle:state(checked) {
      outline: 2px dashed #22c55e;
      outline-offset: 3px;
      border-radius: 4px;
    }
    ag-radio:state(invalid),
    ag-checkbox:state(invalid),
    ag-toggle:state(invalid) {
      outline: 2px dashed #ef4444;
      outline-offset: 3px;
      border-radius: 4px;
    }
    fieldset {
      border: 1px solid var(--ag-border-color, #e2e8f0);
      border-radius: var(--ag-radius-md, 6px);
      padding: var(--ag-space-3) var(--ag-space-4);
      margin: 0;
    }
    legend {
      padding: 0 var(--ag-space-2);
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--ag-text-primary);
    }
  `;

  @state() private _submissionData: FormPayload | null = null;

  private get _form(): HTMLFormElement | null {
    return this.shadowRoot?.querySelector('form') ?? null;
  }

  private _handleSubmit(e: Event) {
    e.preventDefault();
    console.log('[handleSubmit] called');
    const form = this._form;
    if (!form) return;

    const elements = Array.from(form.elements);
    console.log('[handleSubmit] form.elements count:', elements.length);
    elements.forEach((el) => {
      const input = el as HTMLInputElement;
      console.log(`  element: tag=${el.tagName} name="${input.name}" value="${input.value}"`);
    });

    // :state() verification — confirms CustomStateSet is wired up correctly
    ['AG-RADIO', 'AG-CHECKBOX', 'AG-TOGGLE'].forEach((tag) => {
      elements
        .filter((el) => el.tagName === tag)
        .forEach((el) => {
          const e = el as HTMLElement & { name?: string };
          console.log(
            `  ${tag.toLowerCase()} name="${e.name}" :state(checked)=${e.matches(':state(checked)')} :state(invalid)=${e.matches(':state(invalid)')}`
          );
        });
    });

    const valid = validateAll(form);
    console.log('[handleSubmit] validateAll result:', valid);
    if (!valid) return;

    const data = new FormData(form);
    const entries = [...data.entries()];
    console.log('[handleSubmit] FormData entries:', entries);
    this._submissionData = Object.fromEntries(entries) as FormPayload;

    this.updateComplete.then(() => {
      this.shadowRoot?.querySelector('.result')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
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
                ></ag-input>
              </div>
              <div>
                <ag-input
                  label="Email Address"
                  name="email"
                  type="email"
                  .required=${true}
                ></ag-input>
              </div>
              <div>
                <ag-input
                  label="Phone"
                  name="phone"
                  type="tel"
                ></ag-input>
              </div>
              <div>
                <ag-input
                  label="Message"
                  name="message"
                  type="textarea"
                  .required=${true}
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
                <fieldset>
                  <legend>Preferred contact method *</legend>
                  <ag-radio name="contactMethod" value="email" labelText="Email" .required=${true}></ag-radio>
                  <ag-radio name="contactMethod" value="phone" labelText="Phone" .required=${true}></ag-radio>
                  <ag-radio name="contactMethod" value="either" labelText="Either" .required=${true}></ag-radio>
                </fieldset>
              </div>
              <div>
                <ag-checkbox
                  name="subscribe"
                  value="yes"
                  labelText="Subscribe to our newsletter"
                ></ag-checkbox>
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
                <ag-button type="submit" variant="primary">Send Message →</ag-button>
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
