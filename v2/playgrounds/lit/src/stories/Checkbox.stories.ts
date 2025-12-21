import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "agnosticui-core/checkbox";
import "agnosticui-core/fieldset";
import type { Checkbox } from "agnosticui-core/checkbox";

const meta: Meta<Checkbox> = {
  title: "AgnosticUI Lit/Checkbox",
  component: "ag-checkbox",
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: "text",
      description: "Name attribute for the checkbox input",
    },
    value: {
      control: "text",
      description: "Value of the checkbox input",
    },
    checked: {
      control: "boolean",
      description: "Whether the checkbox is checked",
    },
    indeterminate: {
      control: "boolean",
      description: "Whether the checkbox is in indeterminate state",
    },
    disabled: {
      control: "boolean",
      description: "Whether the checkbox is disabled",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "Size of the checkbox",
    },
    theme: {
      control: "select",
      options: ["default", "primary", "success", "monochrome"],
      description: "Color theme variant",
    },
    labelText: {
      control: "text",
      description: "Label text for the checkbox",
    },
    labelPosition: {
      control: "select",
      options: ["end", "start"],
      description: "Position of label relative to checkbox",
    },
  },
  args: {
    name: "example",
    value: "1",
    checked: false,
    indeterminate: false,
    disabled: false,
    size: "medium",
    theme: "primary",
    labelText: "Checkbox Option",
    labelPosition: "end",
  },
};

export default meta;
type Story = StoryObj<Checkbox>;

export const Default: Story = {
  render: (args) => html`
    <ag-checkbox
      .name=${args.name}
      .value=${args.value}
      .checked=${args.checked}
      .indeterminate=${args.indeterminate}
      .disabled=${args.disabled}
      .size=${args.size}
      .theme=${args.theme}
      .labelPosition=${args.labelPosition}
      >${args.labelText}</ag-checkbox
    >
  `,
};

export const CheckboxGroup: Story = {
  args: {
    name: "features",
  },
  render: (args) => html`
    <ag-fieldset legend="Select Features">
      <div style="display: flex; flex-direction: column; gap: 0.75rem;">
        <ag-checkbox
          name="features"
          value="dark-mode"
          .size=${args.size}
          .theme=${args.theme}
          .checked=${true}
          >Dark Mode</ag-checkbox
        >
        <ag-checkbox
          name="features"
          value="notifications"
          .size=${args.size}
          .theme=${args.theme}
          >Notifications</ag-checkbox
        >
        <ag-checkbox
          name="features"
          value="analytics"
          .size=${args.size}
          .theme=${args.theme}
          .checked=${true}
          >Analytics</ag-checkbox
        >
      </div>
    </ag-fieldset>
  `,
};

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
  },
  render: (args) => html`
    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
      <ag-checkbox
        name="select-all"
        value="all"
        .size=${args.size}
        .theme=${args.theme}
        .indeterminate=${true}
        >Select All (Indeterminate)</ag-checkbox
      >
      <div
        style="padding-left: 1.5rem; display: flex; flex-direction: column; gap: 0.5rem;"
      >
        <ag-checkbox
          name="items"
          value="item1"
          .size=${args.size}
          .theme=${args.theme}
          .checked=${true}
          >Item 1</ag-checkbox
        >
        <ag-checkbox
          name="items"
          value="item2"
          .size=${args.size}
          .theme=${args.theme}
          >Item 2</ag-checkbox
        >
        <ag-checkbox
          name="items"
          value="item3"
          .size=${args.size}
          .theme=${args.theme}
          .checked=${true}
          >Item 3</ag-checkbox
        >
      </div>
    </div>
  `,
};

export const SmallSize: Story = {
  args: {
    size: "small",
    name: "small-example",
  },
  render: (args) => html`
    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
      <ag-checkbox
        name="small"
        value="1"
        .size=${args.size}
        .theme=${args.theme}
        >Small Checkbox 1</ag-checkbox
      >
      <ag-checkbox
        name="small"
        value="2"
        .size=${args.size}
        .theme=${args.theme}
        .checked=${true}
        >Small Checkbox 2</ag-checkbox
      >
    </div>
  `,
};

export const LargeSize: Story = {
  args: {
    size: "large",
    name: "large-example",
  },
  render: (args) => html`
    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
      <ag-checkbox
        name="large"
        value="1"
        .size=${args.size}
        .theme=${args.theme}
        >Large Checkbox 1</ag-checkbox
      >
      <ag-checkbox
        name="large"
        value="2"
        .size=${args.size}
        .theme=${args.theme}
        .checked=${true}
        >Large Checkbox 2</ag-checkbox
      >
    </div>
  `,
};

export const PrimaryTheme: Story = {
  args: {
    theme: "primary",
    name: "primary-example",
  },
  render: (args) => html`
    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
      <ag-checkbox
        name="primary"
        value="1"
        .size=${args.size}
        .theme=${args.theme}
        >Primary Option 1</ag-checkbox
      >
      <ag-checkbox
        name="primary"
        value="2"
        .size=${args.size}
        .theme=${args.theme}
        .checked=${true}
        >Primary Option 2</ag-checkbox
      >
    </div>
  `,
};

export const MonochromeTheme: Story = {
  args: {
    theme: "monochrome",
    name: "mono-example",
  },
  render: (args) => html`
    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
      <ag-checkbox name="mono" value="1" .size=${args.size} .theme=${args.theme}
        >Monochrome Option 1</ag-checkbox
      >
      <ag-checkbox
        name="mono"
        value="2"
        .size=${args.size}
        .theme=${args.theme}
        .checked=${true}
        >Monochrome Option 2</ag-checkbox
      >
    </div>
  `,
};

export const Disabled: Story = {
  args: {
    disabled: true,
    name: "disabled-example",
  },
  render: (args) => html`
    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
      <ag-checkbox
        name="disabled"
        value="1"
        .size=${args.size}
        .theme=${args.theme}
        .disabled=${true}
        >Disabled Unchecked</ag-checkbox
      >
      <ag-checkbox
        name="disabled"
        value="2"
        .size=${args.size}
        .theme=${args.theme}
        .disabled=${true}
        .checked=${true}
        >Disabled Checked</ag-checkbox
      >
      <ag-checkbox
        name="disabled"
        value="3"
        .size=${args.size}
        .theme=${args.theme}
        .disabled=${true}
        .indeterminate=${true}
        >Disabled Indeterminate</ag-checkbox
      >
    </div>
  `,
};

export const LabelStart: Story = {
  args: {
    labelPosition: "start",
    name: "label-start",
  },
  render: (args) => html`
    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
      <ag-checkbox
        name="label-start"
        value="1"
        .size=${args.size}
        .theme=${args.theme}
        .labelPosition=${args.labelPosition}
        >Label on left</ag-checkbox
      >
      <ag-checkbox
        name="label-start"
        value="2"
        .size=${args.size}
        .theme=${args.theme}
        .labelPosition=${args.labelPosition}
        .checked=${true}
        >Label on left (checked)</ag-checkbox
      >
    </div>
  `,
};

export const AllThemes: Story = {
  args: {
    name: "all-themes",
  },
  render: (args) => html`
    <div style="display: flex; flex-direction: column; gap: 1.5rem;">
      <ag-fieldset legend="Default Theme (Primary)">
        <div style="display: flex; gap: 1rem;">
          <ag-checkbox
            name="theme-default"
            value="1"
            .size=${args.size}
            theme="default"
            >Unchecked</ag-checkbox
          >
          <ag-checkbox
            name="theme-default"
            value="2"
            .size=${args.size}
            theme="default"
            labelText="Checked"
            .checked=${true}
          ></ag-checkbox>
          <ag-checkbox
            name="theme-default"
            value="3"
            .size=${args.size}
            theme="default"
            labelText="Indeterminate"
            .indeterminate=${true}
          ></ag-checkbox>
        </div>
      </ag-fieldset>

      <ag-fieldset legend="Primary Theme (Blue)">
        <div style="display: flex; gap: 1rem;">
          <ag-checkbox
            name="theme-primary"
            value="1"
            .size=${args.size}
            theme="primary"
            >Unchecked</ag-checkbox
          >
          <ag-checkbox
            name="theme-primary"
            value="2"
            .size=${args.size}
            theme="primary"
            labelText="Checked"
            .checked=${true}
          ></ag-checkbox>
          <ag-checkbox
            name="theme-primary"
            value="3"
            .size=${args.size}
            theme="primary"
            labelText="Indeterminate"
            .indeterminate=${true}
          ></ag-checkbox>
        </div>
      </ag-fieldset>
      <ag-fieldset legend="Success Theme (Green)">
        <div style="display: flex; gap: 1rem;">
          <ag-checkbox
            name="theme-success"
            value="1"
            .size=${args.size}
            theme="success"
            >Unchecked</ag-checkbox
          >
          <ag-checkbox
            name="theme-success"
            value="2"
            .size=${args.size}
            theme="success"
            labelText="Checked"
            .checked=${true}
          ></ag-checkbox>
          <ag-checkbox
            name="theme-success"
            value="3"
            .size=${args.size}
            theme="success"
            labelText="Indeterminate"
            .indeterminate=${true}
          ></ag-checkbox>
        </div>
      </ag-fieldset>

      <ag-fieldset legend="Monochrome Theme (Black/White)">
        <div style="display: flex; gap: 1rem;">
          <ag-checkbox
            name="theme-mono"
            value="1"
            .size=${args.size}
            theme="monochrome"
            >Unchecked</ag-checkbox
          >
          <ag-checkbox
            name="theme-mono"
            value="2"
            .size=${args.size}
            theme="monochrome"
            labelText="Checked"
            .checked=${true}
          ></ag-checkbox>
          <ag-checkbox
            name="theme-mono"
            value="3"
            .size=${args.size}
            theme="monochrome"
            labelText="Indeterminate"
            .indeterminate=${true}
          ></ag-checkbox>
        </div>
      </ag-fieldset>
    </div>
  `,
};

export const AllSizes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1.5rem;">
      <div>
        <h3 style="margin-bottom: 0.5rem;">Small</h3>
        <ag-checkbox
          name="size-small"
          value="1"
          size="small"
          labelText="Small checkbox"
          .checked=${true}
        ></ag-checkbox>
      </div>
      <div>
        <h3 style="margin-bottom: 0.5rem;">Medium (Default)</h3>
        <ag-checkbox
          name="size-medium"
          value="1"
          size="medium"
          labelText="Medium checkbox"
          .checked=${true}
        ></ag-checkbox>
      </div>
      <div>
        <h3 style="margin-bottom: 0.5rem;">Large</h3>
        <ag-checkbox
          name="size-large"
          value="1"
          size="large"
          labelText="Large checkbox"
          .checked=${true}
        ></ag-checkbox>
      </div>
    </div>
  `,
};

export const CheckmarkAnimation: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
      <p style="margin-bottom: 0.5rem;">
        Click to see the checkmark animation:
      </p>
      <ag-checkbox name="animation" value="1"
        >Click me to see animation</ag-checkbox
      >
    </div>
  `,
};

export const EventTesting: Story = {
  args: {
    labelText: "Checkbox to test events",
  },
  render: (args) => html`
    <div
      style="display: flex; flex-direction: column; align-items: flex-start; padding: 1rem; gap: 1.5rem;"
    >
      <div>
        <h3 style="margin: 0 0 0.5rem 0;">Event Handling Patterns</h3>
        <p style="margin: 0; color: #6b7280; font-size: 0.875rem;">
          Checkbox demonstrates both addEventListener and callback prop patterns
        </p>
      </div>

      <div style="display: flex; flex-direction: column; gap: 1rem; width: 100%;">
        <!-- Pattern 1: addEventListener (DOM event) -->
        <div style="border: 1px solid #e5e7eb; border-radius: 8px; padding: 1rem;">
          <p style="margin: 0 0 0.75rem 0; font-weight: 600;">
            Pattern 1: addEventListener
          </p>
          <ag-checkbox
            name="test1"
            value="option1"
            .labelText=${args.labelText}
            .size=${args.size}
            .theme=${args.theme}
            @change=${(e: CustomEvent) => {
              console.log('addEventListener pattern:', e.detail);
            }}
          ></ag-checkbox>
          <p style="font-size: 0.75rem; color: #6b7280; margin: 0.5rem 0 0 0;">
            Uses @change (addEventListener via Lit template)
          </p>
        </div>

        <!-- Pattern 2: Callback prop -->
        <div style="border: 1px solid #e5e7eb; border-radius: 8px; padding: 1rem;">
          <p style="margin: 0 0 0.75rem 0; font-weight: 600;">
            Pattern 2: Callback Prop
          </p>
          <ag-checkbox
            name="test2"
            value="option2"
            .labelText=${args.labelText}
            .size=${args.size}
            .theme=${"primary"}
            .onChange=${(e: CustomEvent) => {
              console.log('Callback prop pattern:', e.detail);
            }}
          ></ag-checkbox>
          <p style="font-size: 0.75rem; color: #6b7280; margin: 0.5rem 0 0 0;">
            Uses .onChange callback prop
          </p>
        </div>

        <!-- Pattern 3: Both (dual-dispatch) -->
        <div style="border: 1px solid #e5e7eb; border-radius: 8px; padding: 1rem;">
          <p style="margin: 0 0 0.75rem 0; font-weight: 600;">
            Pattern 3: Both (Dual-Dispatch)
          </p>
          <ag-checkbox
            name="test3"
            value="option3"
            .labelText=${args.labelText}
            .size=${args.size}
            .theme=${"monochrome"}
            @change=${(e: CustomEvent) => {
              console.log('DOM event fired:', e.detail);
            }}
            .onChange=${(e: CustomEvent) => {
              console.log('Callback also fired:', e.detail);
            }}
          ></ag-checkbox>
          <p style="font-size: 0.75rem; color: #6b7280; margin: 0.5rem 0 0 0;">
            Both patterns work simultaneously
          </p>
        </div>

        <!-- Pattern 4: Click event -->
        <div style="border: 1px solid #e5e7eb; border-radius: 8px; padding: 1rem;">
          <p style="margin: 0 0 0.75rem 0; font-weight: 600;">
            Pattern 4: Native Click Event
          </p>
          <ag-checkbox
            name="test4"
            value="option4"
            .labelText=${args.labelText}
            .size=${args.size}
            .theme=${args.theme}
            @click=${(e: MouseEvent) => {
              console.log('Click event:', e);
            }}
            .onClick=${(e: MouseEvent) => {
              console.log('Click callback prop:', e);
            }}
          ></ag-checkbox>
          <p style="font-size: 0.75rem; color: #6b7280; margin: 0.5rem 0 0 0;">
            Native click event works via addEventListener and callback prop
          </p>
        </div>
      </div>

      <p style="font-size: 0.875rem; color: #6b7280; margin: 0; padding: 1rem; background: #f9fafb; border-radius: 8px; width: 100%;">
        💡 Check the Actions panel below and browser console for event logs
      </p>
    </div>
  `,
};

// External Label/Helper/Error Support
export const WithExternalLabel: Story = {
  render: () => html`
    <div style="padding: 50px; max-width: 600px;">
      <h3 style="margin-top: 0;">External Label/Helper/Error Support</h3>
      <p style="margin-bottom: 1.5rem; color: #6b7280;">
        Checkboxes can now have an optional external label, helper text, and error message
        using the shared form control utilities. Useful for checkbox groups or standalone checkboxes.
      </p>

      <div style="display: flex; flex-direction: column; gap: 2rem;">
        <!-- Basic external label -->
        <ag-checkbox
          name="terms"
          value="agreed"
          .label=${"Terms and Conditions"}
          .labelText=${"I agree to the terms and conditions"}
        ></ag-checkbox>

        <!-- With helper text -->
        <ag-checkbox
          name="newsletter"
          value="subscribed"
          .label=${"Newsletter Subscription"}
          .labelText=${"Send me weekly updates"}
          .helpText=${"You can unsubscribe at any time"}
        ></ag-checkbox>

        <!-- Required field -->
        <ag-checkbox
          name="required-checkbox"
          value="yes"
          .label=${"Required Agreement"}
          .labelText=${"I acknowledge I have read the privacy policy"}
          .required=${true}
          .helpText=${"This field is required to proceed"}
        ></ag-checkbox>

        <!-- With error -->
        <ag-checkbox
          name="invalid-checkbox"
          value="yes"
          .label=${"Age Verification"}
          .labelText=${"I confirm I am 18 years or older"}
          .required=${true}
          .invalid=${true}
          .errorMessage=${"You must confirm you are 18 or older"}
        ></ag-checkbox>

        <!-- Checkbox group with external label -->
        <div>
          <ag-checkbox
            name="features"
            value="feature1"
            .label=${"Select Features"}
            .labelText=${"Email notifications"}
            .helpText=${"Choose the features you want to enable"}
          ></ag-checkbox>
          <ag-checkbox
            name="features"
            value="feature2"
            .labelText=${"SMS notifications"}
            style="margin-top: 0.5rem;"
          ></ag-checkbox>
          <ag-checkbox
            name="features"
            value="feature3"
            .labelText=${"Push notifications"}
            style="margin-top: 0.5rem;"
          ></ag-checkbox>
        </div>
      </div>
    </div>
  `,
};

// Comparison: Standalone vs With External Label
export const ComparisonStandaloneVsExternal: Story = {
  render: () => html`
    <div style="padding: 50px; max-width: 900px;">
      <h3 style="margin-top: 0;">Standalone vs External Label Comparison</h3>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-top: 1.5rem;">
        <!-- Standalone (traditional) -->
        <div>
          <h4 style="margin-top: 0;">Standalone Checkbox</h4>
          <p style="color: #6b7280; font-size: 0.875rem; margin-bottom: 1rem;">
            Traditional checkbox with internal label text only
          </p>

          <div style="display: flex; flex-direction: column; gap: 1rem;">
            <ag-checkbox
              name="standalone1"
              value="option1"
              .labelText=${"Accept terms and conditions"}
            ></ag-checkbox>

            <ag-checkbox
              name="standalone2"
              value="option2"
              .labelText=${"Subscribe to newsletter"}
              .checked=${true}
            ></ag-checkbox>

            <ag-checkbox
              name="standalone3"
              value="option3"
              .labelText=${"Enable notifications"}
              .disabled=${true}
            ></ag-checkbox>
          </div>
        </div>

        <!-- With External Label -->
        <div>
          <h4 style="margin-top: 0;">With External Label</h4>
          <p style="color: #6b7280; font-size: 0.875rem; margin-bottom: 1rem;">
            Checkbox with external label, helper text, and validation
          </p>

          <div style="display: flex; flex-direction: column; gap: 1.5rem;">
            <ag-checkbox
              name="external1"
              value="option1"
              .label=${"Agreement"}
              .labelText=${"Accept terms and conditions"}
              .helpText=${"Required to create an account"}
              .required=${true}
            ></ag-checkbox>

            <ag-checkbox
              name="external2"
              value="option2"
              .label=${"Communication Preferences"}
              .labelText=${"Subscribe to newsletter"}
              .helpText=${"Weekly updates about new features"}
              .checked=${true}
            ></ag-checkbox>

            <ag-checkbox
              name="external3"
              value="option3"
              .label=${"Notification Settings"}
              .labelText=${"Enable notifications"}
              .invalid=${true}
              .errorMessage=${"This option is currently unavailable"}
            ></ag-checkbox>
          </div>
        </div>
      </div>
    </div>
  `,
};
