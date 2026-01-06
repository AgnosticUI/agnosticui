import { LitElement, html } from 'lit';
import 'agnosticui-core/slider';

export class SliderLitExamples extends LitElement {
  static properties = {
    eventValue: { type: Number },
    events: { type: Array },
    rangeValue: { type: Array },
    rangeEvents: { type: Array },
  };

  constructor() {
    super();
    this.eventValue = 50;
    this.events = [];
    this.rangeValue = [200, 800];
    this.rangeEvents = [];
  }

  // CRITICAL: Must include createRenderRoot() to use light DOM
  // Without this, global CSS utility classes won't work!
  createRenderRoot() {
    return this;
  }

  addEvent(event) {
    this.events = [
      ...this.events,
      `${new Date().toLocaleTimeString()}: ${event}`,
    ].slice(-10);
  }

  addRangeEvent(event) {
    this.rangeEvents = [
      ...this.rangeEvents,
      `${new Date().toLocaleTimeString()}: ${event}`,
    ].slice(-10);
  }

  handleInput(e) {
    this.eventValue = e.detail.value;
    this.addEvent(`📝 input: value=${e.detail.value}`);
  }

  handleChange(e) {
    this.addEvent(`✅ change: value=${e.detail.value}`);
  }

  handleFocus() {
    this.addEvent('🎯 focus');
  }

  handleBlur() {
    this.addEvent('👋 blur');
  }

  handleRangeInput(e) {
    this.rangeValue = e.detail.value;
    const [min, max] = e.detail.value;
    this.addRangeEvent(`📝 input: range=[$${min}, $${max}]`);
  }

  handleRangeChange(e) {
    const [min, max] = e.detail.value;
    this.addRangeEvent(`✅ change: range=[$${min}, $${max}]`);
  }

  render() {
    return html`
      <section>
        <div class="mbe4">
          <h2>Basic Slider</h2>
          <p class="mbs2 mbe3">Single value slider with label</p>
        </div>
        <div class="mbe4">
          <ag-slider
            label="Volume"
            value="75"
          ></ag-slider>
        </div>

        <div class="mbe4">
          <h2>Dual Range Slider</h2>
          <p class="mbs2 mbe3">Select a range with two thumbs</p>
        </div>
        <div class="mbe4">
          <ag-slider
            label="Price Range ($0 - $1000)"
            dual
            min="0"
            max="1000"
            .value="${[200, 800]}"
          ></ag-slider>
        </div>

        <div class="mbe4">
          <h2>Size Variants</h2>
          <p class="mbs2 mbe3">Three size options: small, default, and large</p>
        </div>
        <div
          class="mbe4"
          style="display: flex; flex-direction: column; gap: 2rem;"
        >
          <ag-slider
            label="Small"
            size="small"
            value="30"
          ></ag-slider>
          <ag-slider
            label="Default"
            size="default"
            value="50"
          ></ag-slider>
          <ag-slider
            label="Large"
            size="large"
            value="70"
          ></ag-slider>
        </div>

        <div class="mbe4">
          <h2>Style Variants</h2>
          <p class="mbs2 mbe3">Choose from filled and monochrome variants</p>
        </div>
        <div
          class="mbe4"
          style="display: flex; flex-direction: column; gap: 2rem;"
        >
          <fieldset style="border: 1px solid var(--ag-border); padding: 1rem; border-radius: var(--ag-radius-md);">
            <legend style="padding: 0 0.5rem; font-weight: 600;">Default (Primary Color)</legend>
            <ag-slider
              label="Standard"
              value="50"
            ></ag-slider>
          </fieldset>

          <fieldset style="border: 1px solid var(--ag-border); padding: 1rem; border-radius: var(--ag-radius-md);">
            <legend style="padding: 0 0.5rem; font-weight: 600;">Filled Variant</legend>
            <ag-slider
              label="Filled Thumb"
              filled
              value="60"
            ></ag-slider>
          </fieldset>

          <fieldset style="border: 1px solid var(--ag-border); padding: 1rem; border-radius: var(--ag-radius-md);">
            <legend style="padding: 0 0.5rem; font-weight: 600;">Monochrome (Adapts to Dark Mode)</legend>
            <ag-slider
              label="Monochrome"
              monochrome
              value="70"
            ></ag-slider>
          </fieldset>

          <fieldset style="border: 1px solid var(--ag-border); padding: 1rem; border-radius: var(--ag-radius-md);">
            <legend style="padding: 0 0.5rem; font-weight: 600;">Monochrome Filled</legend>
            <ag-slider
              label="Monochrome Filled"
              monochrome
              filled
              value="80"
            ></ag-slider>
          </fieldset>
        </div>

        <div class="mbe4">
          <h2>With Ticks and Tooltip</h2>
          <p class="mbs2 mbe3">Display tick marks and value tooltip</p>
        </div>
        <div
          class="mbe4"
          style="display: flex; flex-direction: column; gap: 2rem;"
        >
          <ag-slider
            label="With Tick Marks"
            show-ticks
            tick-step="25"
            value="50"
          ></ag-slider>
          <ag-slider
            label="With Tooltip"
            show-tooltip
            value="65"
          ></ag-slider>
          <ag-slider
            label="Ticks + Tooltip"
            show-ticks
            show-tooltip
            tick-step="20"
            value="40"
          ></ag-slider>
        </div>

        <div class="mbe4">
          <h2>Step Increments</h2>
          <p class="mbs2 mbe3">Control the granularity of value changes. Tick marks show the step intervals.</p>
        </div>
        <div
          class="mbe4"
          style="display: flex; flex-direction: column; gap: 2rem;"
        >
          <ag-slider
            label="Step 5"
            step="5"
            value="50"
            show-ticks
            tick-step="5"
          ></ag-slider>
          <ag-slider
            label="Step 10"
            step="10"
            value="50"
            show-ticks
            tick-step="10"
          ></ag-slider>
          <ag-slider
            label="Step 25 (Coarse)"
            step="25"
            value="50"
            show-ticks
            tick-step="25"
          ></ag-slider>
        </div>

        <div class="mbe4">
          <h2>Custom Range</h2>
          <p class="mbs2 mbe3">Configure min, max, and step values</p>
        </div>
        <div
          class="mbe4"
          style="display: flex; flex-direction: column; gap: 2rem;"
        >
          <ag-slider
            label="Temperature (°C)"
            min="-20"
            max="40"
            step="5"
            value="20"
          ></ag-slider>
          <ag-slider
            label="Percentage"
            min="0"
            max="100"
            step="1"
            value="75"
            help-text="Adjust from 0% to 100%"
          ></ag-slider>
        </div>

        <div class="mbe4">
          <h2>Vertical Orientation</h2>
          <p class="mbs2 mbe3">Vertical sliders for compact layouts</p>
        </div>
        <div
          class="mbe4"
          style="display: flex; gap: 2rem; align-items: flex-end;"
        >
          <ag-slider
            label="Volume"
            vertical
            value="75"
          ></ag-slider>
          <ag-slider
            label="Bass"
            vertical
            size="small"
            value="50"
          ></ag-slider>
          <ag-slider
            label="Treble"
            vertical
            size="large"
            value="60"
          ></ag-slider>
          <ag-slider
            label="Balance"
            vertical
            dual
            .value="${[25, 75]}"
          ></ag-slider>
        </div>

        <div class="mbe4">
          <h2>States</h2>
          <p class="mbs2 mbe3">Disabled, readonly, and invalid states</p>
        </div>
        <div
          class="mbe4"
          style="display: flex; flex-direction: column; gap: 2rem;"
        >
          <ag-slider
            label="Disabled"
            disabled
            value="50"
            help-text="This slider is disabled"
          ></ag-slider>
          <ag-slider
            label="Readonly"
            readonly
            value="65"
            help-text="This slider is readonly"
          ></ag-slider>
          <ag-slider
            label="Invalid"
            invalid
            error-message="Value must be at least 50"
            value="30"
          ></ag-slider>
        </div>

        <div class="mbe4">
          <h2>With Help Text</h2>
          <p class="mbs2 mbe3">Provide additional guidance with help text</p>
        </div>
        <div class="mbe4">
          <ag-slider
            label="Brightness"
            help-text="Adjust screen brightness level (affects battery life)"
            value="75"
          ></ag-slider>
        </div>

        <div class="mbe4">
          <h2>Event Testing</h2>
          <p class="mbs2 mbe3">
            Demonstrates the dual-dispatch event pattern: both CustomEvents (via @input/@change)
            and native events work simultaneously. Drag the slider to see real-time events.
          </p>
        </div>
        <div class="mbe4">
          <ag-slider
            label="Interactive Slider"
            .value="${this.eventValue}"
            @input="${this.handleInput}"
            @change="${this.handleChange}"
            @focus="${this.handleFocus}"
            @blur="${this.handleBlur}"
          ></ag-slider>
          <div
            class="event-log"
            style="margin-top: 1.5rem; padding: 1rem; background: var(--ag-background-secondary); border-radius: var(--ag-radius-md); border: 1px solid var(--ag-border);"
          >
            <h3 style="margin-top: 0; margin-bottom: 0.75rem; font-size: 0.95rem;">Event Log (last 10 events):</h3>
            ${this.events.length === 0 ? html`
              <div style="color: var(--ag-text-muted); font-size: 0.875rem; font-style: italic;">
                Interact with the slider to see events...
              </div>
            ` : this.events.map(event => html`
              <div style="font-family: monospace; font-size: 0.875rem; padding: 0.25rem 0; color: var(--ag-text-primary);">
                ${event}
              </div>
            `)}
          </div>
          <div style="margin-top: 1rem; font-size: 0.875rem; color: var(--ag-text-secondary);">
            Current value: <strong>${this.eventValue}</strong>
          </div>
        </div>

        <div class="mbe4">
          <h2>Dual Range Events</h2>
          <p class="mbs2 mbe3">Event handling with dual range sliders</p>
        </div>
        <div class="mbe4">
          <ag-slider
            label="Price Range Filter"
            dual
            min="0"
            max="1000"
            step="10"
            .value="${this.rangeValue}"
            @input="${this.handleRangeInput}"
            @change="${this.handleRangeChange}"
          ></ag-slider>
          <div
            class="event-log"
            style="margin-top: 1.5rem; padding: 1rem; background: var(--ag-background-secondary); border-radius: var(--ag-radius-md); border: 1px solid var(--ag-border);"
          >
            <h3 style="margin-top: 0; margin-bottom: 0.75rem; font-size: 0.95rem;">Range Event Log (last 10 events):</h3>
            ${this.rangeEvents.length === 0 ? html`
              <div style="color: var(--ag-text-muted); font-size: 0.875rem; font-style: italic;">
                Drag the range handles to see events...
              </div>
            ` : this.rangeEvents.map(event => html`
              <div style="font-family: monospace; font-size: 0.875rem; padding: 0.25rem 0; color: var(--ag-text-primary);">
                ${event}
              </div>
            `)}
          </div>
          <div style="margin-top: 1rem; font-size: 0.875rem; color: var(--ag-text-secondary);">
            Current range: <strong>$${this.rangeValue[0]} - $${this.rangeValue[1]}</strong>
          </div>
        </div>

        <div class="mbe4">
          <h2>CSS Shadow Parts Customization</h2>
          <p class="mbs2 mbe3">
            Use CSS Shadow Parts to customize the component's appearance.
            These examples show customized track, thumb, and label styling.
          </p>
        </div>
        <div
          class="mbe4"
          style="display: flex; flex-direction: column; gap: 2rem;"
        >
          <ag-slider
            label="Gradient Track"
            value="60"
            class="custom-slider-1"
          ></ag-slider>
          <ag-slider
            label="Large Thumb with Shadow"
            value="70"
            class="custom-slider-2"
          ></ag-slider>
          <ag-slider
            label="Fully Customized"
            value="50"
            class="custom-slider-3"
            help-text="Custom colors, sizing, and typography"
          ></ag-slider>
        </div>

        <div class="mbe4">
          <h2>External Label Support</h2>
          <p class="mbs2 mbe3">
            The Slider component supports external labels with helper text, required fields, and validation states.
          </p>
        </div>
        <div
          class="mbe4"
          style="max-width: 600px;"
        >
          <div class="mbe3">
            <ag-slider
              label="Volume Level"
              min="0"
              max="100"
              value="75"
            ></ag-slider>
          </div>

          <div class="mbe3">
            <ag-slider
              label="Brightness"
              help-text="Adjust screen brightness level (affects battery life)"
              min="0"
              max="100"
              value="50"
            ></ag-slider>
          </div>

          <div class="mbe3">
            <ag-slider
              label="Temperature"
              required
              help-text="This field is required"
              min="-20"
              max="40"
              value="20"
            ></ag-slider>
          </div>

          <div class="mbe3">
            <ag-slider
              label="Price Range"
              required
              invalid
              error-message="Please select a valid price range"
              min="0"
              max="1000"
              value="50"
            ></ag-slider>
          </div>
        </div>

        <div class="mbe4">
          <h2>Label Positioning</h2>
          <p class="mbs2 mbe3">
            Control label position with <code>label-position</code>: 'top' (default), 'start', 'end', or 'bottom'.
          </p>
        </div>
        <div
          class="mbe4"
          style="max-width: 600px;"
        >
          <div class="mbe3">
            <ag-slider
              label="Top Label (Default)"
              label-position="top"
              min="0"
              max="100"
              value="50"
            ></ag-slider>
          </div>

          <div class="mbe3">
            <ag-slider
              label="Start Position"
              label-position="start"
              min="0"
              max="100"
              value="60"
            ></ag-slider>
          </div>

          <div class="mbe3">
            <ag-slider
              label="End Position"
              label-position="end"
              min="0"
              max="100"
              value="70"
            ></ag-slider>
          </div>

          <div class="mbe3">
            <ag-slider
              label="Bottom Position"
              label-position="bottom"
              help-text="Bottom label position for alternative layouts"
              min="0"
              max="100"
              value="40"
            ></ag-slider>
          </div>
        </div>
      </section>
    `;
  }
}

// Register the custom element (at the bottom, NOT with decorator)
customElements.define('slider-lit-examples', SliderLitExamples);
