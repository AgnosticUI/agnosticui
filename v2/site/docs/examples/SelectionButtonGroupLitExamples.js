import { LitElement, html, css } from 'lit';
import 'agnosticui-core/selection-button-group';
import 'agnosticui-core/selection-button';

export class SelectionButtonGroupLitExamples extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .examples-container {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .example-section {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .example-section h3 {
      margin: 0;
      font-size: 1rem;
      font-weight: 600;
    }

    .selection-output {
      margin: 0;
      font-size: 0.875rem;
      color: var(--vp-c-text-2, #666);
    }

    .theme-grid,
    .size-grid,
    .shape-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
    }

    .theme-label,
    .size-label,
    .shape-label {
      margin: 0 0 0.5rem 0;
      font-size: 0.875rem;
      color: var(--vp-c-text-2, #666);
    }
  `;

  static properties = {
    radioSelection: { type: String },
    checkboxSelection: { type: Array },
  };

  constructor() {
    super();
    this.radioSelection = '';
    this.checkboxSelection = [];
  }

  _handleRadioChange(e) {
    this.radioSelection = e.detail.selectedValues[0] || '';
  }

  _handleCheckboxChange(e) {
    this.checkboxSelection = [...e.detail.selectedValues];
  }

  render() {
    return html`
      <div class="examples-container">
        <!-- Radio Group -->
        <section class="example-section">
          <h3>Radio Group (Single Selection)</h3>
          <ag-selection-button-group
            type="radio"
            name="payment-method"
            legend="Select payment method"
            shape="rounded"
            @selection-change=${this._handleRadioChange}
          >
            <ag-selection-button value="card" label="Credit Card">
              Credit Card
            </ag-selection-button>
            <ag-selection-button value="paypal" label="PayPal">
              PayPal
            </ag-selection-button>
            <ag-selection-button value="bank" label="Bank Transfer">
              Bank Transfer
            </ag-selection-button>
          </ag-selection-button-group>
          <p class="selection-output">Selected: ${this.radioSelection || 'None'}</p>
        </section>

        <!-- Checkbox Group -->
        <section class="example-section">
          <h3>Checkbox Group (Multiple Selection)</h3>
          <ag-selection-button-group
            type="checkbox"
            name="toppings"
            legend="Select toppings"
            shape="rounded"
            @selection-change=${this._handleCheckboxChange}
          >
            <ag-selection-button value="cheese" label="Extra Cheese">
              Extra Cheese
            </ag-selection-button>
            <ag-selection-button value="pepperoni" label="Pepperoni">
              Pepperoni
            </ag-selection-button>
            <ag-selection-button value="mushrooms" label="Mushrooms">
              Mushrooms
            </ag-selection-button>
            <ag-selection-button value="olives" label="Olives">
              Olives
            </ag-selection-button>
          </ag-selection-button-group>
          <p class="selection-output">Selected: ${this.checkboxSelection.join(', ') || 'None'}</p>
        </section>

        <!-- Theme Variants -->
        <section class="example-section">
          <h3>Theme Variants</h3>
          <div class="theme-grid">
            <div>
              <p class="theme-label">Default (Primary)</p>
              <ag-selection-button-group
                type="radio"
                name="theme-default"
                legend="Default theme"
                legend-hidden
                shape="rounded"
              >
                <ag-selection-button value="a" label="Option A">A</ag-selection-button>
                <ag-selection-button value="b" label="Option B">B</ag-selection-button>
              </ag-selection-button-group>
            </div>
            <div>
              <p class="theme-label">Success</p>
              <ag-selection-button-group
                type="radio"
                name="theme-success"
                legend="Success theme"
                legend-hidden
                theme="success"
                shape="rounded"
              >
                <ag-selection-button value="a" label="Option A">A</ag-selection-button>
                <ag-selection-button value="b" label="Option B">B</ag-selection-button>
              </ag-selection-button-group>
            </div>
            <div>
              <p class="theme-label">Info</p>
              <ag-selection-button-group
                type="radio"
                name="theme-info"
                legend="Info theme"
                legend-hidden
                theme="info"
                shape="rounded"
              >
                <ag-selection-button value="a" label="Option A">A</ag-selection-button>
                <ag-selection-button value="b" label="Option B">B</ag-selection-button>
              </ag-selection-button-group>
            </div>
            <div>
              <p class="theme-label">Warning</p>
              <ag-selection-button-group
                type="radio"
                name="theme-warning"
                legend="Warning theme"
                legend-hidden
                theme="warning"
                shape="rounded"
              >
                <ag-selection-button value="a" label="Option A">A</ag-selection-button>
                <ag-selection-button value="b" label="Option B">B</ag-selection-button>
              </ag-selection-button-group>
            </div>
            <div>
              <p class="theme-label">Error</p>
              <ag-selection-button-group
                type="radio"
                name="theme-error"
                legend="Error theme"
                legend-hidden
                theme="error"
                shape="rounded"
              >
                <ag-selection-button value="a" label="Option A">A</ag-selection-button>
                <ag-selection-button value="b" label="Option B">B</ag-selection-button>
              </ag-selection-button-group>
            </div>
            <div>
              <p class="theme-label">Monochrome</p>
              <ag-selection-button-group
                type="radio"
                name="theme-monochrome"
                legend="Monochrome theme"
                legend-hidden
                theme="monochrome"
                shape="rounded"
              >
                <ag-selection-button value="a" label="Option A">A</ag-selection-button>
                <ag-selection-button value="b" label="Option B">B</ag-selection-button>
              </ag-selection-button-group>
            </div>
          </div>
        </section>

        <!-- Size Variants -->
        <section class="example-section">
          <h3>Size Variants</h3>
          <div class="size-grid">
            <div>
              <p class="size-label">Small (sm)</p>
              <ag-selection-button-group
                type="radio"
                name="size-sm"
                legend="Small size"
                legend-hidden
                size="sm"
                shape="rounded"
              >
                <ag-selection-button value="a" label="Option A">Option A</ag-selection-button>
                <ag-selection-button value="b" label="Option B">Option B</ag-selection-button>
              </ag-selection-button-group>
            </div>
            <div>
              <p class="size-label">Medium (md) - Default</p>
              <ag-selection-button-group
                type="radio"
                name="size-md"
                legend="Medium size"
                legend-hidden
                size="md"
                shape="rounded"
              >
                <ag-selection-button value="a" label="Option A">Option A</ag-selection-button>
                <ag-selection-button value="b" label="Option B">Option B</ag-selection-button>
              </ag-selection-button-group>
            </div>
            <div>
              <p class="size-label">Large (lg)</p>
              <ag-selection-button-group
                type="radio"
                name="size-lg"
                legend="Large size"
                legend-hidden
                size="lg"
                shape="rounded"
              >
                <ag-selection-button value="a" label="Option A">Option A</ag-selection-button>
                <ag-selection-button value="b" label="Option B">Option B</ag-selection-button>
              </ag-selection-button-group>
            </div>
          </div>
        </section>

        <!-- Shape Variants -->
        <section class="example-section">
          <h3>Shape Variants</h3>
          <div class="shape-grid">
            <div>
              <p class="shape-label">Default (rectangular)</p>
              <ag-selection-button-group
                type="radio"
                name="shape-default"
                legend="Default shape"
                legend-hidden
              >
                <ag-selection-button value="a" label="Option A">Option A</ag-selection-button>
                <ag-selection-button value="b" label="Option B">Option B</ag-selection-button>
              </ag-selection-button-group>
            </div>
            <div>
              <p class="shape-label">Rounded</p>
              <ag-selection-button-group
                type="radio"
                name="shape-rounded"
                legend="Rounded shape"
                legend-hidden
                shape="rounded"
              >
                <ag-selection-button value="a" label="Option A">Option A</ag-selection-button>
                <ag-selection-button value="b" label="Option B">Option B</ag-selection-button>
              </ag-selection-button-group>
            </div>
            <div>
              <p class="shape-label">Capsule (pill)</p>
              <ag-selection-button-group
                type="radio"
                name="shape-capsule"
                legend="Capsule shape"
                legend-hidden
                shape="capsule"
              >
                <ag-selection-button value="a" label="Option A">Option A</ag-selection-button>
                <ag-selection-button value="b" label="Option B">Option B</ag-selection-button>
              </ag-selection-button-group>
            </div>
          </div>
        </section>
        <!-- Disabled Group State -->
        <section class="example-section">
          <h3>Disabled Group State</h3>
          <ag-selection-button-group
            type="radio"
            name="disabled-group-example"
            legend="Disabled group"
            shape="rounded"
            disabled
          >
            <ag-selection-button value="a" label="Option A">Option A</ag-selection-button>
            <ag-selection-button value="b" label="Option B">Option B</ag-selection-button>
            <ag-selection-button value="c" label="Option C">Option C</ag-selection-button>
          </ag-selection-button-group>
        </section>
        <!-- Disabled Buttons State -->
        <section class="example-section">
          <h3>Disabled Individual Buttons State</h3>
          <ag-selection-button-group
            type="radio"
            name="disabled-buttons-example"
            legend="Disabled individual buttons"
            shape="rounded"
          >
            <ag-selection-button value="a" label="Option A">Option A</ag-selection-button>
            <ag-selection-button disabled value="b" label="Option B">Option B</ag-selection-button>
            <ag-selection-button value="c" label="Option C">Option C</ag-selection-button>
            <ag-selection-button disabled value="d" label="Option D">Option D</ag-selection-button>
            <ag-selection-button value="e" label="Option E">Option E</ag-selection-button>
          </ag-selection-button-group>
        </section>
      </div>
    `;
  }
}

customElements.define('selection-button-group-lit-examples', SelectionButtonGroupLitExamples);
