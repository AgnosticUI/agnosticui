import type { Meta, StoryObj } from "@storybook/react";
import { ReactRadio } from "agnosticui-core/radio/react";
import { ReactFieldset } from "agnosticui-core/fieldset/react";

const meta: Meta<typeof ReactRadio> = {
  title: "AgnosticUI React/Radio",
  component: ReactRadio,
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
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <ReactRadio {...args} />,
};

export const RadioGroup: Story = {
  args: {
    name: "framework",
  },
  render: (args) => (
    <ReactFieldset legend="Select Framework">
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        <ReactRadio
          name={args.name}
          value="react"
          size={args.size}
          theme={args.theme}
          labelText="React"
        />
        <ReactRadio
          name={args.name}
          value="vue"
          size={args.size}
          theme={args.theme}
          labelText="Vue"
          checked
        />
        <ReactRadio
          name={args.name}
          value="angular"
          size={args.size}
          theme={args.theme}
          labelText="Angular"
        />
      </div>
    </ReactFieldset>
  ),
};

export const AllThemes: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <ReactFieldset legend="Default Theme (Primary)">
        <div style={{ display: "flex", gap: "1rem" }}>
          <ReactRadio
            name="theme-default"
            value="1"
            size={args.size}
            theme="default"
            labelText="Unchecked"
          />
          <ReactRadio
            name="theme-default"
            value="2"
            size={args.size}
            theme="default"
            labelText="Checked"
            checked
          />
        </div>
      </ReactFieldset>
      <ReactFieldset legend="Primary Theme (Blue)">
        <div style={{ display: "flex", gap: "1rem" }}>
          <ReactRadio
            name="theme-primary"
            value="1"
            size={args.size}
            theme="primary"
            labelText="Unchecked"
          />
          <ReactRadio
            name="theme-primary"
            value="2"
            size={args.size}
            theme="primary"
            labelText="Checked"
            checked
          />
        </div>
      </ReactFieldset>
      <ReactFieldset legend="Success Theme (Green)">
        <div style={{ display: "flex", gap: "1rem" }}>
          <ReactRadio
            name="theme-success"
            value="1"
            size={args.size}
            theme="success"
            labelText="Unchecked"
          />
          <ReactRadio
            name="theme-success"
            value="2"
            size={args.size}
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
            size={args.size}
            theme="monochrome"
            labelText="Unchecked"
          />
          <ReactRadio
            name="theme-mono"
            value="2"
            size={args.size}
            theme="monochrome"
            labelText="Checked"
            checked
          />
        </div>
      </ReactFieldset>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <div>
        <h3 style={{ marginBottom: "0.5rem" }}>Small</h3>
        <ReactRadio
          name="size-small"
          value="1"
          size="small"
          labelText="Small radio"
          checked
        />
      </div>
      <div>
        <h3 style={{ marginBottom: "0.5rem" }}>Medium (Default)</h3>
        <ReactRadio
          name="size-medium"
          value="1"
          size="medium"
          labelText="Medium radio"
          checked
        />
      </div>
      <div>
        <h3 style={{ marginBottom: "0.5rem" }}>Large</h3>
        <ReactRadio
          name="size-large"
          value="1"
          size="large"
          labelText="Large radio"
          checked
        />
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
      <ReactRadio
        name="disabled"
        value="1"
        size={args.size}
        theme={args.theme}
        disabled
        labelText="Disabled Unchecked"
      />
      <ReactRadio
        name="disabled"
        value="2"
        size={args.size}
        theme={args.theme}
        disabled
        checked
        labelText="Disabled Checked"
      />
    </div>
  ),
};

export const WithExternalLabel: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <ReactRadio
        name="shipping-method"
        value="standard"
        label="Shipping Method"
        labelText="Standard Shipping (5-7 days)"
        checked
      />

      <ReactRadio
        name="payment-method"
        value="credit"
        label="Payment Method"
        labelText="Credit Card"
        helpText="We accept all major credit cards"
        checked
      />

      <ReactRadio
        name="terms"
        value="agreed"
        label="Terms and Conditions"
        labelText="I agree to the terms and conditions"
        required={true}
        helpText="Please read and accept our terms"
      />

      <ReactRadio
        name="age-verify"
        value="confirmed"
        label="Age Verification"
        labelText="I confirm I am 18 years or older"
        required={true}
        invalid={true}
        errorMessage="You must confirm you are 18 or older to proceed"
      />
    </div>
  ),
};

export const ComparisonStandaloneVsExternal: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "3rem" }}>
      <div style={{ flex: 1 }}>
        <h3 style={{ marginBottom: "1rem" }}>Standard Radio (Internal Label)</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <ReactRadio
            name="standard-plan"
            value="free"
            labelText="Free Plan"
            checked
          />
          <ReactRadio
            name="standard-plan"
            value="pro"
            labelText="Pro Plan"
          />
          <ReactRadio
            name="standard-plan"
            value="enterprise"
            labelText="Enterprise Plan"
          />
        </div>
      </div>
      <div style={{ flex: 1 }}>
        <h3 style={{ marginBottom: "1rem" }}>
          Radio with External Label (Group Context)
        </h3>
        <ReactRadio
          name="plan-selection"
          value="free"
          label="Choose Your Plan"
          labelText="Free Plan"
          helpText="Select the plan that best fits your needs"
          checked
        />
        <ReactRadio
          name="plan-selection"
          value="pro"
          labelText="Pro Plan"
        />
        <ReactRadio
          name="plan-selection"
          value="enterprise"
          labelText="Enterprise Plan"
        />
      </div>
    </div>
  ),
};
