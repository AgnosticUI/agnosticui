import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { fn } from "storybook/test";
import "agnosticui-core/slider";
import type { AgSlider } from "agnosticui-core/slider";

// Extend AgSlider with event handler props for Storybook
interface SliderProps extends AgSlider {
  onInput?: (detail: any) => void;
  onChange?: (detail: any) => void;
  onFocus?: (detail: any) => void;
  onBlur?: (detail: any) => void;
}

const meta: Meta<SliderProps> = {
  title: "AgnosticUI Lit/Slider",
  component: "ag-slider",
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "Label for the slider",
    },
    labelHidden: {
      control: "boolean",
      description: "Visually hide the label (still accessible to screen readers)",
    },
    noLabel: {
      control: "boolean",
      description: "Removes label entirely",
    },
    ariaLabel: {
      control: "text",
      description: "ARIA label when no visible label is provided",
    },
    min: {
      control: "number",
      description: "Minimum value",
    },
    max: {
      control: "number",
      description: "Maximum value",
    },
    step: {
      control: "number",
      description: "Step increment",
    },
    value: {
      control: "object",
      description: "Current value (number for single, [min, max] for dual range)",
    },
    dual: {
      control: "boolean",
      description: "Enable dual range mode with two thumbs",
    },
    vertical: {
      control: "boolean",
      description: "Vertical orientation",
    },
    filled: {
      control: "boolean",
      description: "Filled thumb variant (solid color instead of bordered)",
    },
    monochrome: {
      control: "boolean",
      description: "Black and white color scheme",
    },
    size: {
      control: "select",
      options: ["small", "default", "large"],
      description: "Size variant",
    },
    disabled: {
      control: "boolean",
      description: "Disable the slider",
    },
    readonly: {
      control: "boolean",
      description: "Make the slider read-only",
    },
    invalid: {
      control: "boolean",
      description: "Mark as invalid/error state",
    },
    errorMessage: {
      control: "text",
      description: "Error message text",
    },
    helpText: {
      control: "text",
      description: "Helper text",
    },
    showTooltip: {
      control: "boolean",
      description: "Show value tooltip on hover/focus",
    },
    showTicks: {
      control: "boolean",
      description: "Show tick marks along the track",
    },
    tickStep: {
      control: "number",
      description: "Interval for tick marks",
    },
  },
  args: {
    label: "Volume",
    labelHidden: false,
    noLabel: false,
    ariaLabel: "",
    min: 0,
    max: 100,
    step: 1,
    value: 50,
    dual: false,
    vertical: false,
    filled: false,
    monochrome: false,
    size: "default",
    disabled: false,
    readonly: false,
    invalid: false,
    errorMessage: "",
    helpText: "",
    showTooltip: false,
    showTicks: false,
    tickStep: 25,
    onInput: fn(),
    onChange: fn(),
    onFocus: fn(),
    onBlur: fn(),
  },
  parameters: {
    actions: {
      handles: ["input", "change", "focus", "blur"],
    },
  },
};

export default meta;

type Story = StoryObj<SliderProps>;

// Default story with all controls
export const Default: Story = {
  args: {},
  render: ({
    label,
    labelHidden,
    noLabel,
    ariaLabel,
    min,
    max,
    step,
    value,
    dual,
    vertical,
    filled,
    monochrome,
    size,
    disabled,
    readonly,
    invalid,
    errorMessage,
    helpText,
    showTooltip,
    showTicks,
    tickStep,
    onInput,
    onChange,
    onFocus,
    onBlur,
  }) => html`
    <ag-slider
      .label=${label}
      .labelHidden=${labelHidden}
      .noLabel=${noLabel}
      .ariaLabel=${ariaLabel}
      .min=${min}
      .max=${max}
      .step=${step}
      .value=${value}
      .dual=${dual}
      .vertical=${vertical}
      .filled=${filled}
      .monochrome=${monochrome}
      .size=${size}
      .disabled=${disabled}
      .readonly=${readonly}
      .invalid=${invalid}
      .errorMessage=${errorMessage}
      .helpText=${helpText}
      .showTooltip=${showTooltip}
      .showTicks=${showTicks}
      .tickStep=${tickStep}
      @input=${(e: CustomEvent) => onInput?.(e.detail)}
      @change=${(e: CustomEvent) => onChange?.(e.detail)}
      @focus=${() => onFocus?.({ type: "focus" })}
      @blur=${() => onBlur?.({ type: "blur" })}
    ></ag-slider>
  `,
};

// Basic Single Range
export const SingleRange: Story = {
  args: {
    label: "Volume",
    value: 50,
  },
  render: ({ label, value, onInput, onChange }) => html`
    <ag-slider
      .label=${label}
      .value=${value}
      @input=${(e: CustomEvent) => {
        onInput?.(e.detail);
        console.log("Input:", e.detail.value);
      }}
      @change=${(e: CustomEvent) => {
        onChange?.(e.detail);
        console.log("Change:", e.detail.value);
      }}
    ></ag-slider>
  `,
};

// Dual Range
export const DualRange: Story = {
  args: {
    label: "Price Range",
    dual: true,
    value: [25, 75],
    min: 0,
    max: 100,
  },
  render: ({ label, dual, value, min, max, onInput, onChange }) => html`
    <ag-slider
      .label=${label}
      .dual=${dual}
      .value=${value}
      .min=${min}
      .max=${max}
      @input=${(e: CustomEvent) => {
        onInput?.(e.detail);
        console.log("Input:", e.detail.value);
      }}
      @change=${(e: CustomEvent) => {
        onChange?.(e.detail);
        console.log("Change:", e.detail.value);
      }}
    ></ag-slider>
  `,
};

// With Tooltip
export const WithTooltip: Story = {
  args: {
    label: "Brightness",
    value: 60,
    showTooltip: true,
  },
  render: ({ label, value, showTooltip }) => html`
    <ag-slider
      .label=${label}
      .value=${value}
      .showTooltip=${showTooltip}
    ></ag-slider>
  `,
};

// With Ticks
export const WithTicks: Story = {
  args: {
    label: "Temperature",
    value: 50,
    showTicks: true,
    tickStep: 25,
  },
  render: ({ label, value, showTicks, tickStep }) => html`
    <ag-slider
      .label=${label}
      .value=${value}
      .showTicks=${showTicks}
      .tickStep=${tickStep}
    ></ag-slider>
  `,
};

// With Tooltip and Ticks
export const WithTooltipAndTicks: Story = {
  args: {
    label: "Quality",
    value: 75,
    showTooltip: true,
    showTicks: true,
    tickStep: 25,
  },
  render: ({ label, value, showTooltip, showTicks, tickStep }) => html`
    <ag-slider
      .label=${label}
      .value=${value}
      .showTooltip=${showTooltip}
      .showTicks=${showTicks}
      .tickStep=${tickStep}
    ></ag-slider>
  `,
};

// Size Variants
export const Small: Story = {
  args: {
    label: "Small Slider",
    size: "small",
    value: 40,
  },
  render: ({ label, size, value }) => html`
    <ag-slider .label=${label} .size=${size} .value=${value}></ag-slider>
  `,
};

export const Large: Story = {
  args: {
    label: "Large Slider",
    size: "large",
    value: 60,
  },
  render: ({ label, size, value }) => html`
    <ag-slider .label=${label} .size=${size} .value=${value}></ag-slider>
  `,
};

// Filled Variant
export const Filled: Story = {
  args: {
    label: "Filled Slider",
    filled: true,
    value: 55,
  },
  render: ({ label, filled, value }) => html`
    <ag-slider .label=${label} .filled=${filled} .value=${value}></ag-slider>
  `,
};

// Monochrome Variant
export const Monochrome: Story = {
  args: {
    label: "Monochrome Slider",
    monochrome: true,
    value: 60,
  },
  render: ({ label, monochrome, value }) => html`
    <ag-slider .label=${label} .monochrome=${monochrome} .value=${value}></ag-slider>
  `,
};

// Monochrome Filled
export const MonochromeFilled: Story = {
  args: {
    label: "Monochrome Filled Slider",
    monochrome: true,
    filled: true,
    value: 65,
  },
  render: ({ label, monochrome, filled, value }) => html`
    <ag-slider
      .label=${label}
      .monochrome=${monochrome}
      .filled=${filled}
      .value=${value}
    ></ag-slider>
  `,
};

// Vertical Orientation
export const Vertical: Story = {
  args: {
    label: "Vertical Slider",
    vertical: true,
    value: 70,
  },
  render: ({ label, vertical, value }) => html`
    <div style="height: 300px; display: flex; align-items: center;">
      <ag-slider
        .label=${label}
        .vertical=${vertical}
        .value=${value}
      ></ag-slider>
    </div>
  `,
};

// Vertical Dual Range
export const VerticalDualRange: Story = {
  args: {
    label: "Vertical Dual Range",
    vertical: true,
    dual: true,
    value: [30, 70],
  },
  render: ({ label, vertical, dual, value }) => html`
    <div style="height: 300px; display: flex; align-items: center;">
      <ag-slider
        .label=${label}
        .vertical=${vertical}
        .dual=${dual}
        .value=${value}
      ></ag-slider>
    </div>
  `,
};

// Step Increments
export const StepIncrements: Story = {
  args: {
    label: "Step by 10",
    value: 50,
    step: 10,
    showTicks: true,
    tickStep: 10,
  },
  render: ({ label, value, step, showTicks, tickStep }) => html`
    <ag-slider
      .label=${label}
      .value=${value}
      .step=${step}
      .showTicks=${showTicks}
      .tickStep=${tickStep}
    ></ag-slider>
  `,
};

// Custom Range
export const CustomRange: Story = {
  args: {
    label: "Custom Range (-50 to 50)",
    min: -50,
    max: 50,
    value: 0,
    step: 5,
    showTicks: true,
    tickStep: 25,
  },
  render: ({ label, min, max, value, step, showTicks, tickStep }) => html`
    <ag-slider
      .label=${label}
      .min=${min}
      .max=${max}
      .value=${value}
      .step=${step}
      .showTicks=${showTicks}
      .tickStep=${tickStep}
    ></ag-slider>
  `,
};

// States
export const Disabled: Story = {
  args: {
    label: "Disabled Slider",
    disabled: true,
    value: 45,
  },
  render: ({ label, disabled, value }) => html`
    <ag-slider .label=${label} .disabled=${disabled} .value=${value}></ag-slider>
  `,
};

export const ReadOnly: Story = {
  args: {
    label: "Read-Only Slider",
    readonly: true,
    value: 65,
  },
  render: ({ label, readonly, value }) => html`
    <ag-slider .label=${label} .readonly=${readonly} .value=${value}></ag-slider>
  `,
};

export const Invalid: Story = {
  args: {
    label: "Invalid Slider",
    invalid: true,
    value: 30,
    errorMessage: "Value must be between 50 and 100",
  },
  render: ({ label, invalid, value, errorMessage }) => html`
    <ag-slider
      .label=${label}
      .invalid=${invalid}
      .value=${value}
      .errorMessage=${errorMessage}
    ></ag-slider>
  `,
};

// With Help Text
export const WithHelpText: Story = {
  args: {
    label: "Contrast",
    value: 50,
    helpText: "Adjust the contrast level for better visibility",
  },
  render: ({ label, value, helpText }) => html`
    <ag-slider
      .label=${label}
      .value=${value}
      .helpText=${helpText}
    ></ag-slider>
  `,
};

// Form Integration
export const FormIntegration: Story = {
  args: {
    label: "Volume Control",
    name: "volume",
    value: 75,
  },
  render: ({ label, name, value }) => html`
    <form
      @submit=${(e: Event) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        console.log("Form submitted with volume:", formData.get("volume"));
        alert(`Volume submitted: ${formData.get("volume")}`);
      }}
    >
      <ag-slider .label=${label} .name=${name} .value=${value}></ag-slider>
      <br />
      <button type="submit" style="margin-top: 1rem;">Submit</button>
    </form>
  `,
};

// Dual Range Form Integration
export const DualRangeFormIntegration: Story = {
  args: {
    label: "Price Range Filter",
    name: "price",
    dual: true,
    value: [25, 75],
    min: 0,
    max: 1000,
    step: 10,
  },
  render: ({ label, name, dual, value, min, max, step }) => html`
    <form
      @submit=${(e: Event) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const prices = formData.getAll("price");
        console.log("Form submitted with price range:", prices);
        alert(`Price range: $${prices[0]} - $${prices[1]}`);
      }}
    >
      <ag-slider
        .label=${label}
        .name=${name}
        .dual=${dual}
        .value=${value}
        .min=${min}
        .max=${max}
        .step=${step}
        .showTooltip=${true}
      ></ag-slider>
      <br />
      <button type="submit" style="margin-top: 1rem;">Apply Filter</button>
    </form>
  `,
};

// Event Handling - Dual Dispatch Pattern
export const EventHandling: Story = {
  args: {
    label: "Event Testing",
    value: 50,
  },
  render: ({ label, value }) => {
    const events: string[] = [];
    const updateLog = () => {
      const log = document.getElementById('event-log');
      if (log) {
        log.innerHTML = events.slice(-10).reverse().join('<br>');
      }
    };

    return html`
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <ag-slider
          .label=${label}
          .value=${value}
          @input=${(e: CustomEvent) => {
            events.push(`📝 input event (CustomEvent): value=${JSON.stringify(e.detail.value)}`);
            updateLog();
          }}
          @change=${(e: CustomEvent) => {
            events.push(`✅ change event (CustomEvent): value=${JSON.stringify(e.detail.value)}`);
            updateLog();
          }}
          @focus=${() => {
            events.push(`🎯 focus event (FocusEvent)`);
            updateLog();
          }}
          @blur=${() => {
            events.push(`👋 blur event (FocusEvent)`);
            updateLog();
          }}
        ></ag-slider>

        <div style="padding: 1rem; background: var(--ag-background-secondary); border-radius: var(--ag-radius-md);">
          <h4 style="margin-top: 0;">Event Log (Last 10):</h4>
          <div id="event-log" style="font-family: monospace; font-size: 0.875rem; line-height: 1.5;">
            Interact with the slider to see events...
          </div>
        </div>

        <div style="padding: 1rem; background: var(--ag-background-tertiary); border-radius: var(--ag-radius-md);">
          <h4 style="margin-top: 0;">Dual-Dispatch Pattern:</h4>
          <ul style="margin: 0; padding-left: 1.5rem; font-size: 0.875rem;">
            <li><strong>input</strong> - Fires during drag (CustomEvent with detail.value)</li>
            <li><strong>change</strong> - Fires on drag end (CustomEvent with detail.value)</li>
            <li><strong>focus</strong> - Fires when thumb receives focus (native FocusEvent)</li>
            <li><strong>blur</strong> - Fires when thumb loses focus (native FocusEvent)</li>
          </ul>
        </div>
      </div>
    `;
  },
};

// Callback Props Pattern
export const CallbackProps: Story = {
  args: {
    label: "Callback Props Testing",
    value: 50,
  },
  render: ({ label, value }) => {
    const events: string[] = [];
    const updateLog = () => {
      const log = document.getElementById('callback-log');
      if (log) {
        log.innerHTML = events.slice(-10).reverse().join('<br>');
      }
    };

    const slider = document.createElement('ag-slider') as any;
    slider.label = label;
    slider.value = value;

    // Callback props
    slider.onInput = (e: CustomEvent) => {
      events.push(`📝 onInput callback: value=${JSON.stringify(e.detail.value)}`);
      updateLog();
    };

    slider.onChange = (e: CustomEvent) => {
      events.push(`✅ onChange callback: value=${JSON.stringify(e.detail.value)}`);
      updateLog();
    };

    slider.onFocus = (e: FocusEvent) => {
      events.push(`🎯 onFocus callback: type=${e.type}`);
      updateLog();
    };

    slider.onBlur = (e: FocusEvent) => {
      events.push(`👋 onBlur callback: type=${e.type}`);
      updateLog();
    };

    return html`
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        ${slider}

        <div style="padding: 1rem; background: var(--ag-background-secondary); border-radius: var(--ag-radius-md);">
          <h4 style="margin-top: 0;">Callback Log (Last 10):</h4>
          <div id="callback-log" style="font-family: monospace; font-size: 0.875rem; line-height: 1.5;">
            Interact with the slider to see callbacks...
          </div>
        </div>

        <div style="padding: 1rem; background: var(--ag-background-tertiary); border-radius: var(--ag-radius-md);">
          <h4 style="margin-top: 0;">Callback Props Pattern:</h4>
          <ul style="margin: 0; padding-left: 1.5rem; font-size: 0.875rem;">
            <li><code>onInput</code> - Callback for input events</li>
            <li><code>onChange</code> - Callback for change events</li>
            <li><code>onFocus</code> - Callback for focus events</li>
            <li><code>onBlur</code> - Callback for blur events</li>
          </ul>
          <p style="margin: 0.5rem 0 0; font-size: 0.875rem; color: var(--ag-text-secondary);">
            <strong>Note:</strong> Both addEventListener and callback props work simultaneously (dual-dispatch).
          </p>
        </div>
      </div>
    `;
  },
};

// Dual Range Events
export const DualRangeEvents: Story = {
  args: {
    label: "Dual Range Event Testing",
    dual: true,
    value: [25, 75],
  },
  render: ({ label, dual, value }) => {
    const events: string[] = [];
    const updateLog = () => {
      const log = document.getElementById('dual-event-log');
      if (log) {
        log.innerHTML = events.slice(-10).reverse().join('<br>');
      }
    };

    return html`
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <ag-slider
          .label=${label}
          .dual=${dual}
          .value=${value}
          @input=${(e: CustomEvent) => {
            const [min, max] = e.detail.value as [number, number];
            events.push(`📝 input: [${min}, ${max}] (range: ${max - min})`);
            updateLog();
          }}
          @change=${(e: CustomEvent) => {
            const [min, max] = e.detail.value as [number, number];
            events.push(`✅ change: [${min}, ${max}] (range: ${max - min})`);
            updateLog();
          }}
        ></ag-slider>

        <div style="padding: 1rem; background: var(--ag-background-secondary); border-radius: var(--ag-radius-md);">
          <h4 style="margin-top: 0;">Dual Range Event Log (Last 10):</h4>
          <div id="dual-event-log" style="font-family: monospace; font-size: 0.875rem; line-height: 1.5;">
            Drag either thumb to see events...
          </div>
        </div>

        <div style="padding: 1rem; background: var(--ag-background-tertiary); border-radius: var(--ag-radius-md);">
          <h4 style="margin-top: 0;">Dual Range Event Detail:</h4>
          <ul style="margin: 0; padding-left: 1.5rem; font-size: 0.875rem;">
            <li><code>detail.value</code> returns <code>[number, number]</code> array</li>
            <li>Index 0 = minimum value, Index 1 = maximum value</li>
            <li>Minimum gap enforced = step size (prevents thumbs overlapping)</li>
          </ul>
        </div>
      </div>
    `;
  },
};

// Accessibility Features
export const Accessible: Story = {
  args: {
    label: "Audio Volume",
    value: 50,
    ariaLabel: "Adjust audio volume level",
    helpText: "Use arrow keys to adjust in small increments",
  },
  render: ({ label, value, ariaLabel, helpText }) => html`
    <ag-slider
      .label=${label}
      .value=${value}
      .ariaLabel=${ariaLabel}
      .helpText=${helpText}
    ></ag-slider>
  `,
};

// CSS Parts Customization
export const Customization: Story = {
  args: {
    label: "Customized Slider",
    value: 60,
    showTooltip: true,
  },
  render: ({ label, value, showTooltip }) => html`
    <style>
      .custom-slider::part(ag-slider-track) {
        height: 8px;
        border-radius: 4px;
        background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
      }
      .custom-slider::part(ag-slider-progress) {
        background: linear-gradient(90deg, #f093fb 0%, #f5576c 100%);
      }
      .custom-slider::part(ag-slider-thumb) {
        width: 24px;
        height: 24px;
        background: white;
        border: 3px solid #667eea;
        box-shadow: 0 4px 8px rgba(102, 126, 234, 0.3);
      }
      .custom-slider::part(ag-slider-thumb):hover {
        border-color: #764ba2;
        box-shadow: 0 6px 12px rgba(118, 75, 162, 0.4);
      }
    </style>
    <ag-slider
      class="custom-slider"
      .label=${label}
      .value=${value}
      .showTooltip=${showTooltip}
    ></ag-slider>
  `,
};

// Multiple Sliders (Interactive Demo)
export const MultipleSliders: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <ag-slider label="Red" value="255" min="0" max="255" showTooltip></ag-slider>
      <ag-slider label="Green" value="165" min="0" max="255" showTooltip></ag-slider>
      <ag-slider label="Blue" value="0" min="0" max="255" showTooltip></ag-slider>
      <div style="margin-top: 1rem; padding: 2rem; background: rgb(255, 165, 0); border-radius: 8px;">
        <p style="color: white; margin: 0; text-align: center;">Color Preview</p>
      </div>
    </div>
  `,
};
