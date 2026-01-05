import { LitElement, html } from 'lit';
import 'agnosticui-core/checkbox';
import 'agnosticui-core/fieldset';

export class CheckboxLitExamples extends LitElement {
  // Render in light DOM to access global utility classes
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <section>
        <!-- Default Checkbox -->
        <div class="mbe4">
          <h2>Default Checkbox</h2>
          <p class="mbs2 mbe3">Basic checkbox with default theme (primary)</p>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-checkbox
            name="example"
            value="1"
            label-text="I agree to the terms and conditions"
          ></ag-checkbox>
          <ag-checkbox
            name="example"
            value="2"
            label-text="Subscribe to newsletter"
            checked
          ></ag-checkbox>
        </div>

        <!-- Checkbox Group -->
        <div class="mbe4">
          <h2>Checkbox Group</h2>
          <p class="mbs2 mbe3">Multiple checkboxes grouped together with a fieldset</p>
        </div>
        <ag-fieldset legend="Select your interests" class="mbe4">
          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            <ag-checkbox
              name="interests"
              value="tech"
              label-text="Technology"
              checked
            ></ag-checkbox>
            <ag-checkbox
              name="interests"
              value="design"
              label-text="Design"
            ></ag-checkbox>
            <ag-checkbox
              name="interests"
              value="business"
              label-text="Business"
              checked
            ></ag-checkbox>
            <ag-checkbox
              name="interests"
              value="science"
              label-text="Science"
            ></ag-checkbox>
          </div>
        </ag-fieldset>

        <!-- Indeterminate State -->
        <div class="mbe4">
          <h2>Indeterminate State</h2>
          <p class="mbs2 mbe3">Used for "select all" scenarios where some items are selected. Simply supply the <i>indeterminate</i> attribute to activate.</p>
        </div>
        <div class="mbe4" style="display: flex; flex-direction: column; gap: 0.75rem;">
          <ag-checkbox
            name="select-all"
            value="all"
            indeterminate
            label-text="Select All (Some selected)"
          ></ag-checkbox>
          <div style="padding-left: 1.5rem; display: flex; flex-direction: column; gap: 0.5rem;">
            <ag-checkbox
              name="items"
              value="item1"
              label-text="Item 1"
              checked
            ></ag-checkbox>
            <ag-checkbox
              name="items"
              value="item2"
              label-text="Item 2"
            ></ag-checkbox>
            <ag-checkbox
              name="items"
              value="item3"
              label-text="Item 3"
              checked
            ></ag-checkbox>
          </div>
        </div>

        <!-- Size Variants -->
        <div class="mbe4">
          <h2>Size Variants</h2>
          <p class="mbs2 mbe3">Three size options: small, medium (default), and large</p>
        </div>
        <div class="mbe4" style="display: flex; gap: 2rem; align-items: center;">
          <ag-checkbox
            name="size"
            value="small"
            size="small"
            label-text="Small"
            checked
          ></ag-checkbox>
          <ag-checkbox
            name="size"
            value="medium"
            size="medium"
            label-text="Medium"
            checked
          ></ag-checkbox>
          <ag-checkbox
            name="size"
            value="large"
            size="large"
            label-text="Large"
            checked
          ></ag-checkbox>
        </div>

        <!-- Theme Variants -->
        <div class="mbe4">
          <h2>Theme Variants</h2>
          <p class="mbs2 mbe3">Choose from default (green), primary (blue), or monochrome (black/white) themes</p>
        </div>
        <div class="mbe4" style="display: flex; flex-direction: column; gap: 1.5rem;">
          <ag-fieldset legend="Default Theme (Blue)">
            <div style="display: flex; gap: 1rem;">
              <ag-checkbox
                name="theme-default"
                value="1"
                theme="default"
                label-text="Unchecked"
              ></ag-checkbox>
              <ag-checkbox
                name="theme-default"
                value="2"
                theme="default"
                label-text="Checked"
                checked
              ></ag-checkbox>
              <ag-checkbox
                name="theme-default"
                value="3"
                theme="default"
                label-text="Indeterminate"
                indeterminate
              ></ag-checkbox>
            </div>
          </ag-fieldset>
          <ag-fieldset legend="Primary Theme (Blue)">
            <div style="display: flex; gap: 1rem;">
              <ag-checkbox
                name="theme-primary"
                value="1"
                theme="primary"
                label-text="Unchecked"
              ></ag-checkbox>
              <ag-checkbox
                name="theme-primary"
                value="2"
                theme="primary"
                label-text="Checked"
                checked
              ></ag-checkbox>
              <ag-checkbox
                name="theme-primary"
                value="3"
                theme="primary"
                label-text="Indeterminate"
                indeterminate
              ></ag-checkbox>
            </div>
          </ag-fieldset>
          <ag-fieldset legend="Success Theme (Green)">
            <div style="display: flex; gap: 1rem;">
              <ag-checkbox
                name="theme-success"
                value="1"
                theme="success"
                label-text="Unchecked"
              ></ag-checkbox>
              <ag-checkbox
                name="theme-success"
                value="2"
                theme="success"
                label-text="Checked"
                checked
              ></ag-checkbox>
              <ag-checkbox
                name="theme-success"
                value="3"
                theme="success"
                label-text="Indeterminate"
                indeterminate
              ></ag-checkbox>
            </div>
          </ag-fieldset>
          <ag-fieldset legend="Monochrome Theme (Black/White)">
            <div style="display: flex; gap: 1rem;">
              <ag-checkbox
                name="theme-mono"
                value="1"
                theme="monochrome"
                label-text="Unchecked"
              ></ag-checkbox>
              <ag-checkbox
                name="theme-mono"
                value="2"
                theme="monochrome"
                label-text="Checked"
                checked
              ></ag-checkbox>
              <ag-checkbox
                name="theme-mono"
                value="3"
                theme="monochrome"
                label-text="Indeterminate"
                indeterminate
              ></ag-checkbox>
            </div>
          </ag-fieldset>
        </div>

        <!-- Disabled State -->
        <div class="mbe4">
          <h2>Disabled State</h2>
          <p class="mbs2 mbe3">Checkboxes can be disabled to prevent interaction</p>
        </div>
        <div class="mbe4" style="display: flex; gap: 1rem;">
          <ag-checkbox
            name="disabled"
            value="1"
            label-text="Disabled Unchecked"
            disabled
          ></ag-checkbox>
          <ag-checkbox
            name="disabled"
            value="2"
            label-text="Disabled Checked"
            checked
            disabled
          ></ag-checkbox>
          <ag-checkbox
            name="disabled"
            value="3"
            label-text="Disabled Indeterminate"
            indeterminate
            disabled
          ></ag-checkbox>
        </div>

        <!-- Label Position -->
        <div class="mbe4">
          <h2>Label Position</h2>
          <p class="mbs2 mbe3">Labels can be positioned at the end (default) or start of the checkbox</p>
        </div>
        <div class="mbe4" style="display: flex; flex-direction: column; gap: 1rem;">
          <ag-checkbox
            name="position"
            value="1"
            label-text="Label on End (Default)"
            label-position="end"
            checked
          ></ag-checkbox>
          <ag-checkbox
            name="position"
            value="2"
            label-text="Label on Start"
            label-position="start"
            checked
          ></ag-checkbox>
        </div>

        <!-- External Label Support -->
        <div class="mbe4">
          <h2>External Label Support</h2>
          <p class="mbs2 mbe3">
            Checkboxes support optional external labels, helper text, and error messages for validation feedback.
          </p>
        </div>
        <div class="stacked mbe4">
          <ag-checkbox
            name="terms"
            value="agreed"
            label="Terms and Conditions"
            label-text="I agree to the terms and conditions"
            class="mbe2"
          ></ag-checkbox>

          <ag-checkbox
            name="newsletter"
            value="subscribed"
            label="Newsletter Subscription"
            label-text="Send me weekly updates"
            help-text="You can unsubscribe at any time"
            class="mbe2"
          ></ag-checkbox>

          <ag-checkbox
            name="required-check"
            value="yes"
            label="Required Agreement"
            label-text="I acknowledge I have read the privacy policy"
            required
            help-text="This field is required to proceed"
            class="mbe2"
          ></ag-checkbox>

          <ag-checkbox
            name="age-verify"
            value="yes"
            label="Age Verification"
            label-text="I confirm I am 18 years or older"
            required
            invalid
            error-message="You must confirm you are 18 or older"
            class="mbe2"
          ></ag-checkbox>
        </div>

        <!-- CSS Shadow Parts Customization -->
        <div class="mbe4">
          <h2>CSS Shadow Parts Customization</h2>
          <p class="mbs2 mbe3">
            Use CSS Shadow Parts to customize the component's appearance.
          </p>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-checkbox
            name="custom"
            value="1"
            label-text="Customized with rounded indicator"
            checked
            class="custom-checkbox-1"
          ></ag-checkbox>
          <ag-checkbox
            name="custom"
            value="3"
            label-text="Fully customized"
            checked
            theme="primary"
            class="custom-checkbox-3"
          ></ag-checkbox>
        </div>
      </section>
    `;
  }
}

// Register the custom element
customElements.define('checkbox-lit-examples', CheckboxLitExamples);
