import { ReactRadio } from "agnosticui-core/radio/react";
import { ReactFieldset } from "agnosticui-core/fieldset/react";

export default function RadioReactExamples() {
  return (
    <section>
      <div className="mbe4">
        <h2>Default Radio</h2>
        <p className="mbs2 mbe3">Basic radio buttons with default theme (primary)</p>
      </div>
      <ReactFieldset legend="Choose your plan">
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <ReactRadio name="plan" value="free" labelText="Free Plan" />
          <ReactRadio name="plan" value="pro" labelText="Pro Plan" checked />
          <ReactRadio name="plan" value="enterprise" labelText="Enterprise Plan" />
        </div>
      </ReactFieldset>

      <div className="mbe4">
        <h2>Radio Group</h2>
        <p className="mbs2 mbe3">Multiple radio button groups</p>
      </div>
      <div
        className="mbe4"
        style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
      >
        <ReactFieldset legend="Select Framework">
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <ReactRadio name="framework" value="react" labelText="React" />
            <ReactRadio name="framework" value="vue" labelText="Vue" checked />
            <ReactRadio name="framework" value="angular" labelText="Angular" />
            <ReactRadio name="framework" value="svelte" labelText="Svelte" />
          </div>
        </ReactFieldset>

        <ReactFieldset legend="Deployment Environment">
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <ReactRadio
              name="environment"
              value="development"
              labelText="Development"
              checked
            />
            <ReactRadio name="environment" value="staging" labelText="Staging" />
            <ReactRadio name="environment" value="production" labelText="Production" />
          </div>
        </ReactFieldset>
      </div>

      <div className="mbe4">
        <h2>Size Variants</h2>
        <p className="mbs2 mbe3">Three size options: small, medium (default), and large</p>
      </div>
      <div className="mbe4" style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        <ReactRadio name="size-demo" value="small" size="small" labelText="Small" checked />
        <ReactRadio
          name="size-demo2"
          value="medium"
          size="medium"
          labelText="Medium"
          checked
        />
        <ReactRadio name="size-demo3" value="large" size="large" labelText="Large" checked />
      </div>

      <div className="mbe4">
        <h2>Theme Variants</h2>
        <p className="mbs2 mbe3">
          Choose from default (green), primary (blue), or monochrome (black/white) themes
        </p>
      </div>
      <div
        className="mbe4"
        style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
      >
        <ReactFieldset legend="Default Theme (Blue)">
          <div style={{ display: "flex", gap: "1rem" }}>
            <ReactRadio name="theme-default" value="1" theme="default" labelText="Unchecked" />
            <ReactRadio
              name="theme-default"
              value="2"
              theme="default"
              labelText="Checked"
              checked
            />
          </div>
        </ReactFieldset>
        <ReactFieldset legend="Primary Theme (Blue)">
          <div style={{ display: "flex", gap: "1rem" }}>
            <ReactRadio name="theme-primary" value="1" theme="primary" labelText="Unchecked" />
            <ReactRadio
              name="theme-primary"
              value="2"
              theme="primary"
              labelText="Checked"
              checked
            />
          </div>
        </ReactFieldset>
        <ReactFieldset legend="Success Theme (Green)">
          <div style={{ display: "flex", gap: "1rem" }}>
            <ReactRadio name="theme-success" value="1" theme="success" labelText="Unchecked" />
            <ReactRadio
              name="theme-success"
              value="2"
              theme="success"
              labelText="Checked"
              checked
            />
          </div>
        </ReactFieldset>

        <ReactFieldset legend="Monochrome Theme (Black/White)">
          <div style={{ display: "flex", gap: "1rem" }}>
            <ReactRadio
              name="theme-mono"
              value="1"
              theme="monochrome"
              labelText="Unchecked"
            />
            <ReactRadio
              name="theme-mono"
              value="2"
              theme="monochrome"
              labelText="Checked"
              checked
            />
          </div>
        </ReactFieldset>
      </div>

      <div className="mbe4">
        <h2>Disabled State</h2>
        <p className="mbs2 mbe3">Radio buttons can be disabled to prevent interaction</p>
      </div>
      <div className="mbe4" style={{ display: "flex", gap: "1rem" }}>
        <ReactRadio
          name="disabled-demo"
          value="1"
          labelText="Disabled Unchecked"
          disabled
        />
        <ReactRadio
          name="disabled-demo2"
          value="2"
          labelText="Disabled Checked"
          checked
          disabled
        />
      </div>

      <div className="mbe4">
        <h2>Keyboard Navigation with Disabled Radios</h2>
        <p className="mbs2 mbe3">
          Disabled radios are automatically skipped when navigating with arrow keys. Try using{" "}
          <kbd>↑</kbd> / <kbd>↓</kbd> or <kbd>←</kbd> / <kbd>→</kbd> arrow keys, or{" "}
          <kbd>HOME</kbd> and <kbd>END</kbd> (to jump to start and end respectively) to navigate
          between options. The disabled middle option will be skipped.
        </p>
      </div>
      <ReactFieldset legend="Select Shipping Method">
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <ReactRadio
            name="keyboard-nav-demo"
            value="standard"
            labelText="Standard Shipping - $5.99"
            checked
          />
          <ReactRadio
            name="keyboard-nav-demo"
            value="express"
            labelText="Express Shipping - Currently Unavailable"
            disabled
          />
          <ReactRadio
            name="keyboard-nav-demo"
            value="overnight"
            labelText="Overnight Shipping - $24.99"
          />
        </div>
      </ReactFieldset>

      <div className="mbe4">
        <h2>Label Position</h2>
        <p className="mbs2 mbe3">
          Labels can be positioned at the end (default) or start of the radio button
        </p>
      </div>
      <div
        className="mbe4"
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <ReactRadio
          name="position-demo"
          value="1"
          labelText="Label on End (Default)"
          labelPosition="end"
          checked
        />
        <ReactRadio
          name="position-demo2"
          value="2"
          labelText="Label on Start"
          labelPosition="start"
          checked
        />
      </div>

      <div className="mbe4">
        <h2>Inline Layout</h2>
        <p className="mbs2 mbe3">Radio buttons can be laid out horizontally for compact forms</p>
      </div>
      <ReactFieldset legend="Gender">
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <ReactRadio name="gender" value="male" labelText="Male" />
          <ReactRadio name="gender" value="female" labelText="Female" checked />
          <ReactRadio name="gender" value="other" labelText="Other" />
        </div>
      </ReactFieldset>

      <div className="mbe4">
        <h2>External Label Support</h2>
        <p className="mbs2 mbe3">
          Radio buttons support optional external labels, helper text, and error messages for
          validation feedback.
        </p>
      </div>
      <div className="stacked mbe4">
        <ReactRadio
          name="shipping-method"
          value="standard"
          label="Shipping Method"
          labelText="Standard Shipping (5-7 days)"
          checked
          className="mbe2"
        />

        <ReactRadio
          name="payment-method"
          value="credit"
          label="Payment Method"
          labelText="Credit Card"
          helpText="We accept all major credit cards"
          checked
          className="mbe2"
        />

        <ReactRadio
          name="terms-agreement"
          value="agreed"
          label="Terms and Conditions"
          labelText="I agree to the terms and conditions"
          required
          helpText="Please read and accept our terms to proceed"
          className="mbe2"
        />

        <ReactRadio
          name="age-verify"
          value="confirmed"
          label="Age Verification"
          labelText="I confirm I am 18 years or older"
          required
          invalid
          errorMessage="You must confirm you are 18 or older to proceed"
          className="mbe2"
        />
      </div>

      <div className="mbe4">
        <h2>CSS Shadow Parts Customization</h2>
        <p className="mbs2 mbe3">
          Use CSS Shadow Parts to customize the component's appearance.
        </p>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactRadio
          name="custom"
          value="1"
          labelText="Customized indicator"
          checked
          className="custom-radio-1"
        />
      </div>
    </section>
  );
}
