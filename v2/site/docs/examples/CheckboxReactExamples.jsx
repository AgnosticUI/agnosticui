import { ReactCheckbox } from "agnosticui-core/checkbox/react";
import { ReactFieldset } from "agnosticui-core/fieldset/react";

export default function CheckboxReactExamples() {
  return (
    <section>
      {/* Default Checkbox */}
      <div className="mbe4">
        <h2>Default Checkbox</h2>
        <p className="mbs2 mbe3">Basic checkbox with default theme (primary)</p>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactCheckbox
          name="example"
          value="1"
          labelText="I agree to the terms and conditions"
        />
        <ReactCheckbox
          name="example"
          value="2"
          labelText="Subscribe to newsletter"
          checked
        />
      </div>

      {/* Checkbox Group */}
      <div className="mbe4">
        <h2>Checkbox Group</h2>
        <p className="mbs2 mbe3">Multiple checkboxes grouped together with a fieldset</p>
      </div>
      <ReactFieldset legend="Select your interests" className="mbe4">
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <ReactCheckbox
            name="interests"
            value="tech"
            labelText="Technology"
            checked
          />
          <ReactCheckbox
            name="interests"
            value="design"
            labelText="Design"
          />
          <ReactCheckbox
            name="interests"
            value="business"
            labelText="Business"
            checked
          />
          <ReactCheckbox
            name="interests"
            value="science"
            labelText="Science"
          />
        </div>
      </ReactFieldset>

      {/* Indeterminate State */}
      <div className="mbe4">
        <h2>Indeterminate State</h2>
        <p className="mbs2 mbe3">Used for "select all" scenarios where some items are selected. Simply supply the <i>indeterminate</i> attribute to activate.</p>
      </div>
      <div className="mbe4" style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        <ReactCheckbox
          name="select-all"
          value="all"
          indeterminate
          labelText="Select All (Some selected)"
        />
        <div style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <ReactCheckbox
            name="items"
            value="item1"
            labelText="Item 1"
            checked
          />
          <ReactCheckbox
            name="items"
            value="item2"
            labelText="Item 2"
          />
          <ReactCheckbox
            name="items"
            value="item3"
            labelText="Item 3"
            checked
          />
        </div>
      </div>

      {/* Size Variants */}
      <div className="mbe4">
        <h2>Size Variants</h2>
        <p className="mbs2 mbe3">Three size options: small, medium (default), and large</p>
      </div>
      <div className="mbe4" style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        <ReactCheckbox
          name="size"
          value="small"
          size="small"
          labelText="Small"
          checked
        />
        <ReactCheckbox
          name="size"
          value="medium"
          size="medium"
          labelText="Medium"
          checked
        />
        <ReactCheckbox
          name="size"
          value="large"
          size="large"
          labelText="Large"
          checked
        />
      </div>

      {/* Theme Variants */}
      <div className="mbe4">
        <h2>Theme Variants</h2>
        <p className="mbs2 mbe3">Choose from default (green), primary (blue), or monochrome (black/white) themes</p>
      </div>
      <div className="mbe4" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <ReactFieldset legend="Default Theme (Blue)">
          <div style={{ display: "flex", gap: "1rem" }}>
            <ReactCheckbox
              name="theme-default"
              value="1"
              theme="default"
              labelText="Unchecked"
            />
            <ReactCheckbox
              name="theme-default"
              value="2"
              theme="default"
              labelText="Checked"
              checked
            />
            <ReactCheckbox
              name="theme-default"
              value="3"
              theme="default"
              labelText="Indeterminate"
              indeterminate
            />
          </div>
        </ReactFieldset>
        <ReactFieldset legend="Primary Theme (Blue)">
          <div style={{ display: "flex", gap: "1rem" }}>
            <ReactCheckbox
              name="theme-primary"
              value="1"
              theme="primary"
              labelText="Unchecked"
            />
            <ReactCheckbox
              name="theme-primary"
              value="2"
              theme="primary"
              labelText="Checked"
              checked
            />
            <ReactCheckbox
              name="theme-primary"
              value="3"
              theme="primary"
              labelText="Indeterminate"
              indeterminate
            />
          </div>
        </ReactFieldset>
        <ReactFieldset legend="Success Theme (Green)">
          <div style={{ display: "flex", gap: "1rem" }}>
            <ReactCheckbox
              name="theme-success"
              value="1"
              theme="success"
              labelText="Unchecked"
            />
            <ReactCheckbox
              name="theme-success"
              value="2"
              theme="success"
              labelText="Checked"
              checked
            />
            <ReactCheckbox
              name="theme-success"
              value="3"
              theme="success"
              labelText="Indeterminate"
              indeterminate
            />
          </div>
        </ReactFieldset>
        <ReactFieldset legend="Monochrome Theme (Black/White)">
          <div style={{ display: "flex", gap: "1rem" }}>
            <ReactCheckbox
              name="theme-mono"
              value="1"
              theme="monochrome"
              labelText="Unchecked"
            />
            <ReactCheckbox
              name="theme-mono"
              value="2"
              theme="monochrome"
              labelText="Checked"
              checked
            />
            <ReactCheckbox
              name="theme-mono"
              value="3"
              theme="monochrome"
              labelText="Indeterminate"
              indeterminate
            />
          </div>
        </ReactFieldset>
      </div>

      {/* Disabled State */}
      <div className="mbe4">
        <h2>Disabled State</h2>
        <p className="mbs2 mbe3">Checkboxes can be disabled to prevent interaction</p>
      </div>
      <div className="mbe4" style={{ display: "flex", gap: "1rem" }}>
        <ReactCheckbox
          name="disabled"
          value="1"
          labelText="Disabled Unchecked"
          disabled
        />
        <ReactCheckbox
          name="disabled"
          value="2"
          labelText="Disabled Checked"
          checked
          disabled
        />
        <ReactCheckbox
          name="disabled"
          value="3"
          labelText="Disabled Indeterminate"
          indeterminate
          disabled
        />
      </div>

      {/* Label Position */}
      <div className="mbe4">
        <h2>Label Position</h2>
        <p className="mbs2 mbe3">Labels can be positioned at the end (default) or start of the checkbox</p>
      </div>
      <div className="mbe4" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <ReactCheckbox
          name="position"
          value="1"
          labelText="Label on End (Default)"
          labelPosition="end"
          checked
        />
        <ReactCheckbox
          name="position"
          value="2"
          labelText="Label on Start"
          labelPosition="start"
          checked
        />
      </div>

      {/* External Label Support */}
      <div className="mbe4">
        <h2>External Label Support</h2>
        <p className="mbs2 mbe3">
          Checkboxes support optional external labels, helper text, and error messages for validation feedback.
        </p>
      </div>
      <div className="stacked mbe4">
        <ReactCheckbox
          name="terms"
          value="agreed"
          label="Terms and Conditions"
          labelText="I agree to the terms and conditions"
          className="mbe2"
        />

        <ReactCheckbox
          name="newsletter"
          value="subscribed"
          label="Newsletter Subscription"
          labelText="Send me weekly updates"
          helpText="You can unsubscribe at any time"
          className="mbe2"
        />

        <ReactCheckbox
          name="required-check"
          value="yes"
          label="Required Agreement"
          labelText="I acknowledge I have read the privacy policy"
          required
          helpText="This field is required to proceed"
          className="mbe2"
        />

        <ReactCheckbox
          name="age-verify"
          value="yes"
          label="Age Verification"
          labelText="I confirm I am 18 years or older"
          required
          invalid
          errorMessage="You must confirm you are 18 or older"
          className="mbe2"
        />
      </div>

      {/* CSS Shadow Parts Customization */}
      <div className="mbe4">
        <h2>CSS Shadow Parts Customization</h2>
        <p className="mbs2 mbe3">
          Use CSS Shadow Parts to customize the component's appearance.
        </p>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactCheckbox
          name="custom"
          value="1"
          labelText="Customized with rounded indicator"
          checked
          className="custom-checkbox-1"
        />
        <ReactCheckbox
          name="custom"
          value="3"
          labelText="Fully customized"
          checked
          theme="primary"
          className="custom-checkbox-3"
        />
      </div>
    </section>
  );
}
