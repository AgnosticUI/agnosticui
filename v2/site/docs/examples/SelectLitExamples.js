
import { LitElement, html, css } from 'lit';
import 'agnosticui-core/select';

export class SelectLitExamples extends LitElement {
  static properties = {
    selectedFruit: { type: String },
    selectedColor: { type: String },
    selectedSports: { type: Array },
    eventLog: { type: Array }
  };

  constructor() {
    super();
    this.selectedFruit = '';
    this.selectedColor = '';
    this.selectedSports = [];
    this.eventLog = [];
  }

  createRenderRoot() {
    return this;
  }

  handleChange(e) {
    this.selectedFruit = e.detail.value;
  }

  handleColorChange(e) {
    this.selectedColor = e.detail.value;
  }

  handleSportsChange(e) {
    this.selectedSports = Array.from(e.target.shadowRoot.querySelector('select').selectedOptions, option => option.value);
  }

  logEvent(message) {
    this.eventLog = [message, ...this.eventLog].slice(0, 8);
    this.requestUpdate();
  }

  handleEventChange(e) {
    this.logEvent(`@change - value: ${e.detail.value}`);
  }

  render() {
    return html`
      <section>
        <div class="mbe4">
          <h2>Basic Select</h2>
          <p class="mbs2 mbe3">
            A standard select dropdown with custom styling.
          </p>
        </div>
        <div class="mbe4" style="max-width: 400px;">
          <ag-select
            label="Greatest Tennis Player"
            name="tennis"
          >
            <option value="">- Select a player -</option>
            <option value="andre">Andre Agassi</option>
            <option value="serena">Serena Williams</option>
            <option value="roger">Roger Federer</option>
            <option value="mac">John McEnroe</option>
            <option value="martina">Martina Navratilova</option>
            <option value="rafa">Rafael Nadal</option>
            <option value="borg">Bjorn Borg</option>
            <option value="althea">Althea Gibson</option>
          </ag-select>
        </div>

        <div class="mbe4">
          <h2>Size Variants</h2>
          <p class="mbs2 mbe3">
            The Select component comes in three sizes: small, default, and large.
          </p>
        </div>
        <div
          class="mbe4"
          style="max-width: 400px;"
        >
          <div class="mbe3">
            <ag-select
              label="Small Select"
              size="small"
              name="small"
            >
              <option value="">Select an option</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </ag-select>
          </div>

          <div class="mbe3">
            <ag-select
              label="Default Select"
              name="default"
            >
              <option value="">Select an option</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </ag-select>
          </div>

          <div class="mbe3">
            <ag-select
              label="Large Select"
              size="large"
              name="large"
            >
              <option value="">Select an option</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </ag-select>
          </div>
        </div>

        <div class="mbe4">
          <h2>Disabled State</h2>
          <p class="mbs2 mbe3">
            Selects can be disabled to prevent user interaction.
          </p>
        </div>
        <div
          class="mbe4"
          style="max-width: 400px;"
        >
          <ag-select
            label="Disabled Select"
            disabled
            name="disabled"
          >
            <option value="">Cannot select</option>
            <option value="1">Option 1</option>
          </ag-select>
        </div>

        <div class="mbe4">
          <h2>Multiple Selection</h2>
          <p class="mbs2 mbe3">
            Enable multiple selection mode with the <code>multiple</code> prop. Use Ctrl/Cmd + Click to select multiple options.
          </p>
        </div>
        <div
          class="mbe4"
          style="max-width: 400px;"
        >
          <ag-select
            label="Favorite Tennis Players (Select Multiple)"
            multiple
            multiple-size="6"
            name="multiple"
            @change="${this.handleSportsChange}"
          >
            <option value="andre">Andre Agassi</option>
            <option value="serena">Serena Williams</option>
            <option value="roger">Roger Federer</option>
            <option value="mac">John McEnroe</option>
            <option value="martina">Martina Navratilova</option>
            <option value="rafa">Rafael Nadal</option>
            <option value="borg">Bjorn Borg</option>
            <option value="althea">Althea Gibson</option>
          </ag-select>
          ${this.selectedSports.length > 0 ? html`
            <p
              style="margin-top: 0.75rem; padding: 0.75rem; background: var(--ag-background-secondary); border-radius: var(--ag-radius-md);"
            >
              You selected <strong>${this.selectedSports.length}</strong> sport(s): ${this.selectedSports.join(', ')}
            </p>
          ` : ''}
        </div>

        <div class="mbe4">
          <h2>With Change Handler</h2>
          <p class="mbs2 mbe3">
            Listen to selection changes with the <code>@change</code> event.
          </p>
        </div>
        <div
          class="mbe4"
          style="max-width: 400px;"
        >
          <ag-select
            label="Select a Fruit"
            name="fruit"
            @change="${this.handleChange}"
          >
            <option value="">Choose a fruit</option>
            <option value="apple">Apple</option>
            <option value="banana">Banana</option>
            <option value="orange">Orange</option>
            <option value="grape">Grape</option>
          </ag-select>
          ${this.selectedFruit ? html`
            <p
              style="margin-top: 0.75rem; padding: 0.75rem; background: var(--ag-background-secondary); border-radius: var(--ag-radius-md);"
            >
              You selected: <strong>${this.selectedFruit}</strong>
            </p>
          ` : ''}
        </div>

        <div class="mbe4">
          <h2>Event Handling</h2>
          <p class="mbs2 mbe3">
            The Select component fires multiple events: <code>@change</code>, <code>@focus</code>, <code>@blur</code>, and <code>@click</code>.
          </p>
        </div>
        <div
          class="mbe4"
          style="max-width: 600px;"
        >
          <ag-select
            label="Interact with this select to see events"
            name="events"
            @change="${this.handleEventChange}"
            @focus="${() => this.logEvent('@focus')}"
            @blur="${() => this.logEvent('@blur')}"
            @click="${() => this.logEvent('@click')}"
          >
            <option value="">Select an option</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </ag-select>
          ${this.eventLog.length > 0 ? html`
            <div
              style="margin-top: 0.75rem; padding: 0.75rem; background: var(--ag-background-secondary); border-radius: var(--ag-radius-md);"
            >
              <strong>Event Log (most recent first):</strong>
              <div style="margin-top: 0.5rem; font-family: monospace; font-size: 0.875rem; line-height: 1.6;">
                ${this.eventLog.map(event => html`<div>${event}</div>`)}
              </div>
            </div>
          ` : ''}
        </div>

        <div class="mbe4">
          <h2>External Label Support</h2>
          <p class="mbs2 mbe3">
            The Select component supports external labels with helper text, required fields, and validation states.
          </p>
        </div>
        <div
          class="mbe4"
          style="max-width: 400px;"
        >
          <div class="mbe3">
            <ag-select
              label="Favorite Framework"
              name="framework"
            >
              <option value="">Choose a framework</option>
              <option value="react">React</option>
              <option value="vue">Vue</option>
              <option value="angular">Angular</option>
              <option value="svelte">Svelte</option>
            </ag-select>
          </div>

          <div class="mbe3">
            <ag-select
              label="Country"
              help-text="Select your country of residence"
              name="country"
            >
              <option value="">Select a country</option>
              <option value="us">United States</option>
              <option value="uk">United Kingdom</option>
              <option value="ca">Canada</option>
              <option value="au">Australia</option>
            </ag-select>
          </div>

          <div class="mbe3">
            <ag-select
              label="Preferred Language"
              required
              help-text="This field is required"
              name="language"
            >
              <option value="">Select a language</option>
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
            </ag-select>
          </div>

          <div class="mbe3">
            <ag-select
              label="Payment Method"
              required
              invalid
              error-message="Please select a payment method to continue"
              name="payment"
            >
              <option value="">Select payment method</option>
              <option value="credit">Credit Card</option>
              <option value="debit">Debit Card</option>
              <option value="paypal">PayPal</option>
            </ag-select>
          </div>
        </div>

        <div class="mbe4">
          <h2>Label Positioning</h2>
          <p class="mbs2 mbe3">
            Control label position with <code>label-position</code>: 'top' (default), 'start', 'end', or 'bottom'.
            <strong>Note:</strong> 'bottom' is not recommended as the dropdown will cover the label.
          </p>
        </div>
        <div
          class="mbe4"
          style="max-width: 600px;"
        >
          <div class="mbe3">
            <ag-select
              label="Top Label (Default)"
              label-position="top"
              name="pos-top"
            >
              <option value="">Select option</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </ag-select>
          </div>

          <div class="mbe3">
            <ag-select
              label="Start Position"
              label-position="start"
              name="pos-start"
            >
              <option value="">Select option</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </ag-select>
          </div>

          <div class="mbe3">
            <ag-select
              label="End Position"
              label-position="end"
              name="pos-end"
            >
              <option value="">Select option</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </ag-select>
          </div>

          <div class="mbe3">
            <ag-select
              label="Bottom Position (Not Recommended)"
              label-position="bottom"
              name="pos-bottom"
              help-text="The dropdown will cover this label when opened"
            >
              <option value="">Select option</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </ag-select>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('select-lit-examples', SelectLitExamples);
