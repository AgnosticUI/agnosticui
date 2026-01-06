import { LitElement, html } from 'lit';
import 'agnosticui-core/radio';
import 'agnosticui-core/fieldset';

export class RadioLitExamples extends LitElement {
  // Render in light DOM to access global utility classes
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <section>
        <div class="mbe4">
          <h2>Default Radio</h2>
          <p class="mbs2 mbe3">Basic radio buttons with default theme (primary)</p>
        </div>
        <ag-fieldset legend="Choose your plan">
          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            <ag-radio
              name="plan"
              value="free"
              .labelText=${"Free Plan"}
            ></ag-radio>
            <ag-radio
              name="plan"
              value="pro"
              .labelText=${"Pro Plan"}
              .checked=${true}
            ></ag-radio>
            <ag-radio
              name="plan"
              value="enterprise"
              .labelText=${"Enterprise Plan"}
            ></ag-radio>
          </div>
        </ag-fieldset>

        <div class="mbe4">
          <h2>Radio Group</h2>
          <p class="mbs2 mbe3">Multiple radio button groups</p>
        </div>
        <div
          class="mbe4"
          style="display: flex; flex-direction: column; gap: 1.5rem;"
        >
          <ag-fieldset legend="Select Framework">
            <div style="display: flex; flex-direction: column; gap: 0.75rem;">
              <ag-radio
                name="framework"
                value="react"
                .labelText=${"React"}
              ></ag-radio>
              <ag-radio
                name="framework"
                value="vue"
                .labelText=${"Vue"}
                .checked=${true}
              ></ag-radio>
              <ag-radio
                name="framework"
                value="angular"
                .labelText=${"Angular"}
              ></ag-radio>
              <ag-radio
                name="framework"
                value="svelte"
                .labelText=${"Svelte"}
              ></ag-radio>
            </div>
          </ag-fieldset>

          <ag-fieldset legend="Deployment Environment">
            <div style="display: flex; flex-direction: column; gap: 0.75rem;">
              <ag-radio
                name="environment"
                value="development"
                .labelText=${"Development"}
                .checked=${true}
              ></ag-radio>
              <ag-radio
                name="environment"
                value="staging"
                .labelText=${"Staging"}
              ></ag-radio>
              <ag-radio
                name="environment"
                value="production"
                .labelText=${"Production"}
              ></ag-radio>
            </div>
          </ag-fieldset>
        </div>

        <div class="mbe4">
          <h2>Size Variants</h2>
          <p class="mbs2 mbe3">Three size options: small, medium (default), and large</p>
        </div>
        <div
          class="mbe4"
          style="display: flex; gap: 2rem; align-items: center;"
        >
          <ag-radio
            name="size-demo"
            value="small"
            size="small"
            .labelText=${"Small"}
            .checked=${true}
          ></ag-radio>
          <ag-radio
            name="size-demo2"
            value="medium"
            size="medium"
            .labelText=${"Medium"}
            .checked=${true}
          ></ag-radio>
          <ag-radio
            name="size-demo3"
            value="large"
            size="large"
            .labelText=${"Large"}
            .checked=${true}
          ></ag-radio>
        </div>

        <div class="mbe4">
          <h2>Theme Variants</h2>
          <p class="mbs2 mbe3">Choose from default (green), primary (blue), or monochrome (black/white) themes</p>
        </div>
        <div
          class="mbe4"
          style="display: flex; flex-direction: column; gap: 1.5rem;"
        >
          <ag-fieldset legend="Default Theme (Blue)">
            <div style="display: flex; gap: 1rem;">
              <ag-radio
                name="theme-default"
                value="1"
                theme="default"
                .labelText=${"Unchecked"}
              ></ag-radio>
              <ag-radio
                name="theme-default"
                value="2"
                theme="default"
                .labelText=${"Checked"}
                .checked=${true}
              ></ag-radio>
            </div>
          </ag-fieldset>
          <ag-fieldset legend="Primary Theme (Blue)">
            <div style="display: flex; gap: 1rem;">
              <ag-radio
                name="theme-primary"
                value="1"
                theme="primary"
                .labelText=${"Unchecked"}
              ></ag-radio>
              <ag-radio
                name="theme-primary"
                value="2"
                theme="primary"
                .labelText=${"Checked"}
                .checked=${true}
              ></ag-radio>
            </div>
          </ag-fieldset>
          <ag-fieldset legend="Success Theme (Green)">
            <div style="display: flex; gap: 1rem;">
              <ag-radio
                name="theme-success"
                value="1"
                theme="success"
                .labelText=${"Unchecked"}
              ></ag-radio>
              <ag-radio
                name="theme-success"
                value="2"
                theme="success"
                .labelText=${"Checked"}
                .checked=${true}
              ></ag-radio>
            </div>
          </ag-fieldset>

          <ag-fieldset legend="Monochrome Theme (Black/White)">
            <div style="display: flex; gap: 1rem;">
              <ag-radio
                name="theme-mono"
                value="1"
                theme="monochrome"
                .labelText=${"Unchecked"}
              ></ag-radio>
              <ag-radio
                name="theme-mono"
                value="2"
                theme="monochrome"
                .labelText=${"Checked"}
                .checked=${true}
              ></ag-radio>
            </div>
          </ag-fieldset>
        </div>

        <div class="mbe4">
          <h2>Disabled State</h2>
          <p class="mbs2 mbe3">Radio buttons can be disabled to prevent interaction</p>
        </div>
        <div
          class="mbe4"
          style="display: flex; gap: 1rem;"
        >
          <ag-radio
            name="disabled-demo"
            value="1"
            .labelText=${"Disabled Unchecked"}
            .disabled=${true}
          ></ag-radio>
          <ag-radio
            name="disabled-demo2"
            value="2"
            .labelText=${"Disabled Checked"}
            .checked=${true}
            .disabled=${true}
          ></ag-radio>
        </div>

        <div class="mbe4">
          <h2>Keyboard Navigation with Disabled Radios</h2>
          <p class="mbs2 mbe3">
            Disabled radios are automatically skipped when navigating with arrow keys.
            Try using <kbd>↑</kbd> / <kbd>↓</kbd> or <kbd>←</kbd> / <kbd>→</kbd> arrow keys, or <kbd>HOME</kbd> and <kbd>END</kbd> (to jump to start and end respectively) to navigate between options.
            The disabled middle option will be skipped.
          </p>
        </div>
        <ag-fieldset legend="Select Shipping Method">
          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            <ag-radio
              name="keyboard-nav-demo"
              value="standard"
              .labelText=${"Standard Shipping - $5.99"}
              .checked=${true}
            ></ag-radio>
            <ag-radio
              name="keyboard-nav-demo"
              value="express"
              .labelText=${"Express Shipping - Currently Unavailable"}
              .disabled=${true}
            ></ag-radio>
            <ag-radio
              name="keyboard-nav-demo"
              value="overnight"
              .labelText=${"Overnight Shipping - $24.99"}
            ></ag-radio>
          </div>
        </ag-fieldset>

        <div class="mbe4">
          <h2>Label Position</h2>
          <p class="mbs2 mbe3">Labels can be positioned at the end (default) or start of the radio button</p>
        </div>
        <div
          class="mbe4"
          style="display: flex; flex-direction: column; gap: 1rem;"
        >
          <ag-radio
            name="position-demo"
            value="1"
            .labelText=${"Label on End (Default)"}
            label-position="end"
            .checked=${true}
          ></ag-radio>
          <ag-radio
            name="position-demo2"
            value="2"
            .labelText=${"Label on Start"}
            label-position="start"
            .checked=${true}
          ></ag-radio>
        </div>

        <div class="mbe4">
          <h2>Inline Layout</h2>
          <p class="mbs2 mbe3">Radio buttons can be laid out horizontally for compact forms</p>
        </div>
        <ag-fieldset legend="Gender">
          <div style="display: flex; gap: 1.5rem;">
            <ag-radio
              name="gender"
              value="male"
              .labelText=${"Male"}
            ></ag-radio>
            <ag-radio
              name="gender"
              value="female"
              .labelText=${"Female"}
              .checked=${true}
            ></ag-radio>
            <ag-radio
              name="gender"
              value="other"
              .labelText=${"Other"}
            ></ag-radio>
          </div>
        </ag-fieldset>

        <div class="mbe4">
          <h2>External Label Support</h2>
          <p class="mbs2 mbe3">
            Radio buttons support optional external labels, helper text, and error messages for validation feedback.
          </p>
        </div>
        <div class="stacked mbe4">
          <ag-radio
            name="shipping-method"
            value="standard"
            label="Shipping Method"
            .labelText=${"Standard Shipping (5-7 days)"}
            .checked=${true}
            class="mbe2"
          ></ag-radio>

          <ag-radio
            name="payment-method"
            value="credit"
            label="Payment Method"
            .labelText=${"Credit Card"}
            help-text="We accept all major credit cards"
            .checked=${true}
            class="mbe2"
          ></ag-radio>

          <ag-radio
            name="terms-agreement"
            value="agreed"
            label="Terms and Conditions"
            .labelText=${"I agree to the terms and conditions"}
            .required=${true}
            help-text="Please read and accept our terms to proceed"
            class="mbe2"
          ></ag-radio>

          <ag-radio
            name="age-verify"
            value="confirmed"
            label="Age Verification"
            .labelText=${"I confirm I am 18 years or older"}
            .required=${true}
            .invalid=${true}
            error-message="You must confirm you are 18 or older to proceed"
            class="mbe2"
          ></ag-radio>
        </div>

        <div class="mbe4">
          <h2>CSS Shadow Parts Customization</h2>
          <p class="mbs2 mbe3">
            Use CSS Shadow Parts to customize the component's appearance.
          </p>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-radio
            name="custom"
            value="1"
            .labelText=${"Customized indicator"}
            .checked=${true}
            class="custom-radio-1"
          ></ag-radio>
        </div>
      </section>

      <style>
        /* CSS Shadow Parts customization examples */
        .custom-radio-1::part(ag-radio-indicator) {
          border-width: 3px;
          transform: scale(1.3);
        }
      </style>
    `;
  }
}

// Register the custom element
customElements.define('radio-lit-examples', RadioLitExamples);
