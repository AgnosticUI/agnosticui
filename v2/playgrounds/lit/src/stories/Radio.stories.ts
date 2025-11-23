import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "agnosticui-core/radio";
import type { AgRadio } from "agnosticui-core/radio";

const meta: Meta<AgRadio> = {
  title: "AgnosticUI Lit/Radio",
  component: "ag-radio",
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: "text",
      description: "Name attribute for the radio input (required for grouping)",
    },
    value: {
      control: "text",
      description: "Value of the radio input",
    },
    checked: {
      control: "boolean",
      description: "Whether the radio is checked",
    },
    disabled: {
      control: "boolean",
      description: "Whether the radio is disabled",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "Size of the radio button",
    },
    theme: {
      control: "select",
      options: ["default", "primary", "success", "monochrome"],
      description: "Color theme variant",
    },
    labelText: {
      control: "text",
      description: "Label text for the radio button",
    },
    labelPosition: {
      control: "select",
      options: ["end", "start"],
      description: "Position of label relative to radio",
    },
    label: {
      control: "text",
      description: "Optional external label displayed above the radio",
    },
    labelHidden: {
      control: "boolean",
      description: "Visually hides the external label",
    },
    noLabel: {
      control: "boolean",
      description: "Removes the external label element",
    },
    required: {
      control: "boolean",
      description: "Marks the radio as required",
    },
    invalid: {
      control: "boolean",
      description: "Marks the radio as invalid",
    },
    errorMessage: {
      control: "text",
      description: "Error message displayed when invalid",
    },
    helpText: {
      control: "text",
      description: "Helper text displayed below the radio",
    },
  },
  args: {
    name: "example",
    value: "1",
    checked: false,
    disabled: false,
    size: "medium",
    theme: "primary",
    labelText: "Radio Option",
    labelPosition: "end",
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
type Story = StoryObj<AgRadio>;

export const Default: Story = {
  render: (args) => html`
    <ag-radio
      .name=${args.name}
      .value=${args.value}
      .checked=${args.checked}
      .disabled=${args.disabled}
      .size=${args.size}
      .theme=${args.theme}
      .labelPosition=${args.labelPosition}
      >${args.labelText}</ag-radio
    >
  `,
};

export const RadioGroup: Story = {
  args: {
    name: "framework",
  },
  render: (args) => html`
    <fieldset
      style="border: 1px solid #e5e7eb; padding: 1rem; border-radius: 0.5rem;"
    >
      <legend style="padding: 0 0.5rem; font-weight: 600;">
        Select Framework
      </legend>
      <div style="display: flex; flex-direction: column; gap: 0.75rem;">
        <ag-radio
          .name=${args.name}
          value="react"
          .size=${args.size}
          .theme=${args.theme}
          >React</ag-radio
        >
        <ag-radio
          .name=${args.name}
          value="vue"
          .size=${args.size}
          .theme=${args.theme}
          .checked=${true}
          >Vue</ag-radio
        >
        <ag-radio
          .name=${args.name}
          value="angular"
          .size=${args.size}
          .theme=${args.theme}
          >Angular</ag-radio
        >
      </div>
    </fieldset>
  `,
};

export const InlineGroup: Story = {
  args: {
    name: "plan",
  },
  render: (args) => html`
    <fieldset
      style="border: 1px solid #e5e7eb; padding: 1rem; border-radius: 0.5rem;"
    >
      <legend style="padding: 0 0.5rem; font-weight: 600;">Choose Plan</legend>
      <div style="display: flex; gap: 1.5rem;">
        <ag-radio
          .name=${args.name}
          value="free"
          .size=${args.size}
          .theme=${args.theme}
          >Free</ag-radio
        >
        <ag-radio
          .name=${args.name}
          value="pro"
          .size=${args.size}
          .theme=${args.theme}
          .checked=${true}
          >Pro</ag-radio
        >
        <ag-radio
          .name=${args.name}
          value="enterprise"
          .size=${args.size}
          .theme=${args.theme}
          >Enterprise</ag-radio
        >
      </div>
    </fieldset>
  `,
};

export const SmallSize: Story = {
  args: {
    size: "small",
    name: "small-example",
  },
  render: (args) => html`
    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
      <ag-radio
        .name=${args.name}
        value="1"
        .size=${args.size}
        .theme=${args.theme}
        >Small Radio 1</ag-radio
      >
      <ag-radio
        .name=${args.name}
        value="2"
        .size=${args.size}
        .theme=${args.theme}
        .checked=${true}
        >Small Radio 2</ag-radio
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
      <ag-radio
        .name=${args.name}
        value="1"
        .size=${args.size}
        .theme=${args.theme}
        >Large Radio 1</ag-radio
      >
      <ag-radio
        .name=${args.name}
        value="2"
        .size=${args.size}
        .theme=${args.theme}
        .checked=${true}
        >Large Radio 2</ag-radio
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
      <ag-radio
        .name=${args.name}
        value="1"
        .size=${args.size}
        .theme=${args.theme}
        >Primary Option 1</ag-radio
      >
      <ag-radio
        .name=${args.name}
        value="2"
        .size=${args.size}
        .theme=${args.theme}
        .checked=${true}
        >Primary Option 2</ag-radio
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
      <ag-radio
        .name=${args.name}
        value="1"
        .size=${args.size}
        .theme=${args.theme}
        >Monochrome Option 1</ag-radio
      >
      <ag-radio
        .name=${args.name}
        value="2"
        .size=${args.size}
        .theme=${args.theme}
        .checked=${true}
        >Monochrome Option 2</ag-radio
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
      <ag-radio
        .name=${args.name}
        value="1"
        .size=${args.size}
        .theme=${args.theme}
        .disabled=${true}
        >Disabled Unchecked</ag-radio
      >
      <ag-radio
        .name=${args.name}
        value="2"
        .size=${args.size}
        .theme=${args.theme}
        .disabled=${true}
        .checked=${true}
        >Disabled Checked</ag-radio
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
      <ag-radio
        .name=${args.name}
        value="1"
        .size=${args.size}
        .theme=${args.theme}
        .labelPosition=${args.labelPosition}
        >Label on left</ag-radio
      >
      <ag-radio
        .name=${args.name}
        value="2"
        .size=${args.size}
        .theme=${args.theme}
        .labelPosition=${args.labelPosition}
        .checked=${true}
        >Label on left (checked)</ag-radio
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
      <fieldset
        style="border: 1px solid #e5e7eb; padding: 1rem; border-radius: 0.5rem;"
      >
        <legend style="padding: 0 0.5rem; font-weight: 600;">
          Default Theme (Primary)
        </legend>
        <div style="display: flex; gap: 1rem;">
          <ag-radio
            name="theme-default"
            value="1"
            .size=${args.size}
            theme="default"
            >Unchecked</ag-radio
          >
          <ag-radio
            name="theme-default"
            value="2"
            .size=${args.size}
            theme="default"
            .checked=${true}
            >Checked</ag-radio
          >
        </div>
      </fieldset>
<fieldset
        style="border: 1px solid #e5e7eb; padding: 1rem; border-radius: 0.5rem;"
      >
        <legend style="padding: 0 0.5rem; font-weight: 600;">
          Primary Theme (Blue)
        </legend>
        <div style="display: flex; gap: 1rem;">
          <ag-radio
            name="theme-primary"
            value="1"
            .size=${args.size}
            theme="primary"
            >Unchecked</ag-radio
          >
          <ag-radio
            name="theme-primary"
            value="2"
            .size=${args.size}
            theme="primary"
            .checked=${true}
            >Checked</ag-radio
          >
        </div>
      </fieldset>
      <fieldset
        style="border: 1px solid #e5e7eb; padding: 1rem; border-radius: 0.5rem;"
      >
        <legend style="padding: 0 0.5rem; font-weight: 600;">
          Success Theme (Green)
        </legend>
        <div style="display: flex; gap: 1rem;">
          <ag-radio
            name="theme-success"
            value="1"
            .size=${args.size}
            theme="success"
            >Unchecked</ag-radio
          >
          <ag-radio
            name="theme-success"
            value="2"
            .size=${args.size}
            theme="success"
            .checked=${true}
            >Checked</ag-radio
          >
        </div>
      </fieldset>

      <fieldset
        style="border: 1px solid #e5e7eb; padding: 1rem; border-radius: 0.5rem;"
      >
        <legend style="padding: 0 0.5rem; font-weight: 600;">
          Monochrome Theme (Black/White)
        </legend>
        <div style="display: flex; gap: 1rem;">
          <ag-radio
            name="theme-mono"
            value="1"
            .size=${args.size}
            theme="monochrome"
            >Unchecked</ag-radio
          >
          <ag-radio
            name="theme-mono"
            value="2"
            .size=${args.size}
            theme="monochrome"
            .checked=${true}
            >Checked</ag-radio
          >
        </div>
      </fieldset>
    </div>
  `,
};

export const AllSizes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1.5rem;">
      <div>
        <h3 style="margin-bottom: 0.5rem;">Small</h3>
        <ag-radio name="size-small" value="1" size="small" .checked=${true}
          >Small radio</ag-radio
        >
      </div>
      <div>
        <h3 style="margin-bottom: 0.5rem;">Medium (Default)</h3>
        <ag-radio name="size-medium" value="1" size="medium" .checked=${true}
          >Medium radio</ag-radio
        >
      </div>
      <div>
        <h3 style="margin-bottom: 0.5rem;">Large</h3>
        <ag-radio name="size-large" value="1" size="large" .checked=${true}
          >Large radio</ag-radio
        >
      </div>
    </div>
  `,
};

export const WithExternalLabel: Story = {
  args: {
    name: "external-label",
  },
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1.5rem;">
      <ag-radio
        name="shipping-method"
        value="standard"
        label="Shipping Method"
        .checked=${true}
        >Standard Shipping (5-7 days)</ag-radio
      >

      <ag-radio
        name="payment-method"
        value="credit"
        label="Payment Method"
        help-text="We accept all major credit cards"
        .checked=${true}
        >Credit Card</ag-radio
      >

      <ag-radio
        name="terms"
        value="agreed"
        label="Terms and Conditions"
        .required=${true}
        help-text="Please read and accept our terms"
        >I agree to the terms and conditions</ag-radio
      >

      <ag-radio
        name="age-verify"
        value="confirmed"
        label="Age Verification"
        .required=${true}
        .invalid=${true}
        error-message="You must confirm you are 18 or older to proceed"
        >I confirm I am 18 years or older</ag-radio
      >
    </div>
  `,
};

export const ComparisonStandaloneVsExternal: Story = {
  render: () => html`
    <div style="display: flex; gap: 3rem;">
      <div style="flex: 1;">
        <h3 style="margin-bottom: 1rem;">Standard Radio (Internal Label)</h3>
        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
          <ag-radio name="standard-plan" value="free" .checked=${true}
            >Free Plan</ag-radio
          >
          <ag-radio name="standard-plan" value="pro">Pro Plan</ag-radio>
          <ag-radio name="standard-plan" value="enterprise"
            >Enterprise Plan</ag-radio
          >
        </div>
      </div>
      <div style="flex: 1;">
        <h3 style="margin-bottom: 1rem;">
          Radio with External Label (Group Context)
        </h3>
        <ag-radio
          name="plan-selection"
          value="free"
          label="Choose Your Plan"
          help-text="Select the plan that best fits your needs"
          .checked=${true}
          >Free Plan</ag-radio
        >
        <ag-radio
          name="plan-selection"
          value="pro"
          >Pro Plan</ag-radio
        >
        <ag-radio
          name="plan-selection"
          value="enterprise"
          >Enterprise Plan</ag-radio
        >
      </div>
    </div>
  `,
};
