import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "agnosticui-core/select";
import type { SelectProps } from "agnosticui-core/select";

const meta: Meta<SelectProps> = {
  title: "AgnosticUI Lit/Select",
  component: "ag-select",
  argTypes: {
    size: {
      control: "select",
      options: ["", "small", "large"],
      description: "Size variant of the select",
    },
    multiple: { control: "boolean", description: "Enable multiple selection" },
    disabled: { control: "boolean", description: "Disable the select" },
    name: { control: "text", description: "Form name attribute" },
    multipleSize: { control: "number", description: "Visible options for multiple select" },
    label: { control: "text", description: "External label text" },
    labelHidden: { control: "boolean", description: "Visually hide the label" },
    noLabel: { control: "boolean", description: "Remove the label element" },
    required: { control: "boolean", description: "Mark as required" },
    invalid: { control: "boolean", description: "Mark as invalid" },
    errorMessage: { control: "text", description: "Error message when invalid" },
    helpText: { control: "text", description: "Helper text below the select" },
  },
  args: {
    size: "",
    multiple: false,
    disabled: false,
    name: "tennis-players",
    multipleSize: undefined,
    label: "",
    labelHidden: false,
    noLabel: false,
    required: false,
    invalid: false,
    errorMessage: "",
    helpText: "",
  },
};

export default meta;
type Story = StoryObj<SelectProps>;

export const Default: Story = {
  render: ({ size, multiple, disabled, name }) => html`
    <div style="max-width: 400px;">
      <label for="tennis-select" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">
        Greatest Tennis Player
      </label>
      <ag-select
        id="tennis-select"
        .size=${size}
        .multiple=${multiple}
        .disabled=${disabled}
        .name=${name}
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
  `,
};

export const BasicSelect: Story = {
  render: () => html`
    <div style="max-width: 400px;">
      <label for="basic-select" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">
        Choose a fruit
      </label>
      <ag-select id="basic-select" name="fruit">
        <option value="">Select a fruit</option>
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="orange">Orange</option>
        <option value="grape">Grape</option>
      </ag-select>
    </div>
  `,
};

export const SmallSize: Story = {
  render: () => html`
    <div style="max-width: 400px;">
      <label for="small-select" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">
        Small Select
      </label>
      <ag-select id="small-select" .size=${"small"} name="small">
        <option value="">Select an option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </ag-select>
    </div>
  `,
};

export const LargeSize: Story = {
  render: () => html`
    <div style="max-width: 400px;">
      <label for="large-select" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">
        Large Select
      </label>
      <ag-select id="large-select" .size=${"large"} name="large">
        <option value="">Select an option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </ag-select>
    </div>
  `,
};

export const Disabled: Story = {
  render: () => html`
    <div style="max-width: 400px;">
      <label for="disabled-select" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">
        Disabled Select
      </label>
      <ag-select id="disabled-select" .disabled=${true} name="disabled">
        <option value="">Select an option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </ag-select>
    </div>
  `,
};

export const MultipleSelect: Story = {
  render: () => html`
    <div style="max-width: 400px;">
      <label for="multiple-select" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">
        Multiple Select (Ctrl/Cmd + Click)
      </label>
      <ag-select
        id="multiple-select"
        .multiple=${true}
        .multipleSize=${4}
        name="multiple"
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
    </div>
  `,
};

export const AllSizes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem; max-width: 400px;">
      <div>
        <label for="small" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">
          Small
        </label>
        <ag-select id="small" .size=${"small"}>
          <option value="">Select an option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </ag-select>
      </div>

      <div>
        <label for="default" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">
          Default
        </label>
        <ag-select id="default">
          <option value="">Select an option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </ag-select>
      </div>

      <div>
        <label for="large" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">
          Large
        </label>
        <ag-select id="large" .size=${"large"}>
          <option value="">Select an option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </ag-select>
      </div>
    </div>
  `,
};

export const WithChangeHandler: Story = {
  render: () => html`
    <div style="max-width: 400px;">
      <label for="change-select" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">
        Select with Change Handler
      </label>
      <ag-select
        id="change-select"
        name="change"
        @change=${(e: CustomEvent) => {
          const value = e.detail.value;
          alert(`Selected value: ${value}`);
        }}
      >
        <option value="">Select an option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </ag-select>
      <p style="margin-top: 1rem; font-size: 0.875rem; color: var(--ag-text-secondary);">
        Select an option to see the change event
      </p>
    </div>
  `,
};

export const EventTesting: Story = {
  render: () => {
    let outputEl: HTMLElement | null = null;
    const events: string[] = [];

    const log = (message: string) => {
      if (!outputEl) {
        outputEl = document.getElementById('event-output');
      }
      if (outputEl) {
        events.unshift(message);
        if (events.length > 8) events.pop();
        outputEl.innerHTML = events.map(e => `<div>${e}</div>`).join('');
      }
    };

    setTimeout(() => {
      outputEl = document.getElementById('event-output');
    }, 0);

    return html`
      <div style="max-width: 600px;">
        <h3 style="margin-bottom: 1rem;">Event Testing - addEventListener Pattern</h3>
        <label for="event-test-1" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">
          Select an option to see all events
        </label>
        <ag-select
          id="event-test-1"
          name="event-test"
          @change=${(e: CustomEvent) => log(`<strong>change:</strong> value=${e.detail.value}`)}
          @focus=${() => log('focus')}
          @blur=${() => log('blur')}
          @click=${() => log('click')}
        >
          <option value="">Select an option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </ag-select>

        <div style="margin-top: 1rem; padding: 1rem; background: var(--ag-background-secondary); border-radius: var(--ag-radius-md);">
          <strong>Event Log (newest first):</strong>
          <div id="event-output" style="margin-top: 0.5rem; font-family: monospace; font-size: 0.875rem; line-height: 1.6;">
            (select an option to see events)
          </div>
        </div>
      </div>
    `;
  },
};

export const CallbackProps: Story = {
  render: () => {
    let outputEl: HTMLElement | null = null;
    const events: string[] = [];

    const log = (message: string) => {
      if (!outputEl) {
        outputEl = document.getElementById('callback-output');
      }
      if (outputEl) {
        events.unshift(message);
        if (events.length > 8) events.pop();
        outputEl.innerHTML = events.map(e => `<div>${e}</div>`).join('');
      }
    };

    setTimeout(() => {
      outputEl = document.getElementById('callback-output');
      const select = document.getElementById('callback-test') as any;
      if (select) {
        select.onChange = (e: CustomEvent) => log(`<strong>onChange:</strong> value=${e.detail.value}`);
        select.onFocus = () => log('onFocus');
        select.onBlur = () => log('onBlur');
        select.onClick = () => log('onClick');
      }
    }, 0);

    return html`
      <div style="max-width: 600px;">
        <h3 style="margin-bottom: 1rem;">Event Testing - Callback Props Pattern</h3>
        <label for="callback-test" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">
          Select an option to see all callback events
        </label>
        <ag-select id="callback-test" name="callback-test">
          <option value="">Select an option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </ag-select>

        <div style="margin-top: 1rem; padding: 1rem; background: var(--ag-background-secondary); border-radius: var(--ag-radius-md);">
          <strong>Event Log (newest first):</strong>
          <div id="callback-output" style="margin-top: 0.5rem; font-family: monospace; font-size: 0.875rem; line-height: 1.6;">
            (select an option to see events)
          </div>
        </div>
      </div>
    `;
  },
};

export const DualDispatch: Story = {
  render: () => {
    let outputEl: HTMLElement | null = null;

    const log = (message: string) => {
      if (!outputEl) {
        outputEl = document.getElementById('dual-output');
      }
      if (outputEl) {
        outputEl.innerHTML += `<div>${message}</div>`;
      }
    };

    setTimeout(() => {
      outputEl = document.getElementById('dual-output');
      const select = document.getElementById('dual-test') as any;
      if (select) {
        select.onChange = (e: CustomEvent) => log(`✓ Callback: onChange - ${e.detail.value}`);
      }
    }, 0);

    return html`
      <div style="max-width: 600px;">
        <h3 style="margin-bottom: 1rem;">Event Testing - Dual Dispatch Pattern</h3>
        <p style="margin-bottom: 1rem; color: var(--ag-text-secondary);">
          Both addEventListener AND callback should fire for custom events
        </p>
        <label for="dual-test" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">
          Select with Both Patterns
        </label>
        <ag-select
          id="dual-test"
          name="dual-test"
          @change=${(e: CustomEvent) => log(`✓ addEventListener: change - ${e.detail.value}`)}
        >
          <option value="">Select an option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </ag-select>

        <div style="margin-top: 1rem; padding: 1rem; background: var(--ag-background-secondary); border-radius: var(--ag-radius-md);">
          <strong>Event Log:</strong>
          <div id="dual-output" style="margin-top: 0.5rem; font-family: monospace; font-size: 0.875rem; max-height: 200px; overflow-y: auto;">
            (interact with the select - both methods should fire)
          </div>
        </div>
      </div>
    `;
  },
};

export const WithExternalLabel: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 400px;">
      <ag-select
        .label=${"Favorite Framework"}
        name="framework"
      >
        <option value="">Choose a framework</option>
        <option value="react">React</option>
        <option value="vue">Vue</option>
        <option value="angular">Angular</option>
        <option value="svelte">Svelte</option>
      </ag-select>

      <ag-select
        .label=${"Country"}
        .helpText=${"Select your country of residence"}
        name="country"
      >
        <option value="">Select a country</option>
        <option value="us">United States</option>
        <option value="uk">United Kingdom</option>
        <option value="ca">Canada</option>
        <option value="au">Australia</option>
      </ag-select>

      <ag-select
        .label=${"Preferred Language"}
        .required=${true}
        .helpText=${"This field is required"}
        name="language"
      >
        <option value="">Select a language</option>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
      </ag-select>

      <ag-select
        .label=${"Payment Method"}
        .required=${true}
        .invalid=${true}
        .errorMessage=${"Please select a payment method to continue"}
        name="payment"
      >
        <option value="">Select payment method</option>
        <option value="credit">Credit Card</option>
        <option value="debit">Debit Card</option>
        <option value="paypal">PayPal</option>
      </ag-select>
    </div>
  `,
};

export const ComparisonStandaloneVsExternal: Story = {
  render: () => html`
    <div style="display: flex; gap: 3rem;">
      <div style="flex: 1;">
        <h3 style="margin-bottom: 1rem;">Standard Select (Manual Label)</h3>
        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
          <div>
            <label for="plan-1" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">
              Choose Plan
            </label>
            <ag-select id="plan-1" name="plan-1">
              <option value="">Select a plan</option>
              <option value="free">Free Plan</option>
              <option value="pro">Pro Plan</option>
              <option value="enterprise">Enterprise Plan</option>
            </ag-select>
          </div>
        </div>
      </div>
      <div style="flex: 1;">
        <h3 style="margin-bottom: 1rem;">
          Select with External Label
        </h3>
        <ag-select
          .label=${"Choose Plan"}
          .helpText=${"Select the plan that best fits your needs"}
          name="plan-2"
        >
          <option value="">Select a plan</option>
          <option value="free">Free Plan</option>
          <option value="pro">Pro Plan</option>
          <option value="enterprise">Enterprise Plan</option>
        </ag-select>
      </div>
    </div>
  `,
};
