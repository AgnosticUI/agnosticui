import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "agnosticui-core/fieldset";
import "agnosticui-core/input";
import "agnosticui-core/checkbox";
import "agnosticui-core/radio";
import type { FieldsetProps } from "agnosticui-core/fieldset";

const meta: Meta<FieldsetProps> = {
  title: "AgnosticUI Lit/Fieldset",
  component: "ag-fieldset",
  argTypes: {
    legend: {
      control: "text",
      description: "Optional legend text for the fieldset",
      defaultValue: "",
    },
    bordered: {
      control: "boolean",
      description: "Whether to apply borders and padding",
      defaultValue: false,
    },
    layout: {
      control: "select",
      options: ["vertical", "horizontal"],
      description: "Layout mode for the fieldset content",
      defaultValue: "vertical",
    },
    legendHidden: {
      control: "boolean",
      description: "Visually hide the legend while keeping it accessible",
      defaultValue: false,
    },
  },
  args: {
    legend: "",
    bordered: false,
    layout: "vertical",
    legendHidden: false,
  },
};

export default meta;
type Story = StoryObj<FieldsetProps>;

export const Default: Story = {
  args: {
    legend: "Personal Information",
  },
  render: (args) => html`
    <ag-fieldset
      .legend=${args.legend}
      .bordered=${args.bordered}
      .layout=${args.layout}
      .legendHidden=${args.legendHidden}
    >
      <ag-input
        id="first-name"
        name="first-name"
        label="First Name"
        type="text"
      ></ag-input>
      <ag-input
        id="last-name"
        name="last-name"
        label="Last Name"
        type="text"
      ></ag-input>
      <ag-input
        id="email"
        name="email"
        label="Email"
        type="email"
      ></ag-input>
    </ag-fieldset>
  `,
};

export const Bordered: Story = {
  args: {
    legend: "Contact Preferences",
    bordered: true,
  },
  render: (args) => html`
    <ag-fieldset
      .legend=${args.legend}
      .bordered=${args.bordered}
      .layout=${args.layout}
      .legendHidden=${args.legendHidden}
    >
      <ag-checkbox
        id="email-updates"
        name="email-updates"
        labelText="Email updates"
      ></ag-checkbox>
      <ag-checkbox
        id="sms-updates"
        name="sms-updates"
        labelText="SMS updates"
      ></ag-checkbox>
      <ag-checkbox
        id="newsletter"
        name="newsletter"
        labelText="Newsletter subscription"
      ></ag-checkbox>
    </ag-fieldset>
  `,
};

export const HorizontalLayout: Story = {
  args: {
    legend: "Payment Method",
    bordered: true,
    layout: "horizontal",
  },
  render: (args) => html`
    <ag-fieldset
      .legend=${args.legend}
      .bordered=${args.bordered}
      .layout=${args.layout}
      .legendHidden=${args.legendHidden}
    >
      <ag-radio
        id="payment-card"
        name="payment"
        value="card"
        labelText="Credit Card"
        .checked=${true}
      ></ag-radio>
      <ag-radio
        id="payment-paypal"
        name="payment"
        value="paypal"
        labelText="PayPal"
      ></ag-radio>
      <ag-radio
        id="payment-bank"
        name="payment"
        value="bank"
        labelText="Bank Transfer"
      ></ag-radio>
    </ag-fieldset>
  `,
};

export const HiddenLegend: Story = {
  args: {
    legend: "Accessible but Hidden Legend",
    legendHidden: true,
    bordered: true,
  },
  render: (args) => html`
    <ag-fieldset
      .legend=${args.legend}
      .bordered=${args.bordered}
      .layout=${args.layout}
      .legendHidden=${args.legendHidden}
    >
      <p style="margin-top: 0;">
        The legend is visually hidden but still announced by screen readers for accessibility.
      </p>
      <ag-checkbox
        id="option1"
        name="option1"
        labelText="Option 1"
      ></ag-checkbox>
      <ag-checkbox
        id="option2"
        name="option2"
        labelText="Option 2"
      ></ag-checkbox>
    </ag-fieldset>
  `,
};

export const RadioButtonGroup: Story = {
  args: {
    legend: "Do you have a passport?",
    bordered: true,
  },
  render: (args) => html`
    <ag-fieldset
      .legend=${args.legend}
      .bordered=${args.bordered}
      .layout=${args.layout}
      .legendHidden=${args.legendHidden}
    >
      <ag-radio
        id="yes"
        name="passport"
        value="yes"
        labelText="Yes"
      ></ag-radio>
      <ag-radio
        id="no"
        name="passport"
        value="no"
        labelText="No"
      ></ag-radio>
    </ag-fieldset>
  `,
};

export const AddressFields: Story = {
  args: {
    legend: "Your Address",
    bordered: true,
  },
  render: (args) => html`
    <ag-fieldset
      .legend=${args.legend}
      .bordered=${args.bordered}
      .layout=${args.layout}
      .legendHidden=${args.legendHidden}
    >
      <ag-input
        id="street"
        name="street"
        label="Street"
        type="text"
      ></ag-input>
      <ag-input
        id="city"
        name="city"
        label="Town or city"
        type="text"
      ></ag-input>
      <ag-input
        id="county"
        name="county"
        label="County"
        type="text"
      ></ag-input>
      <ag-input
        id="postcode"
        name="postcode"
        label="Postcode"
        type="text"
      ></ag-input>
    </ag-fieldset>
  `,
};

export const CSSPartsCustomization: Story = {
  args: {
    legend: "Customized with CSS Parts",
    bordered: true,
  },
  render: (args) => html`
    <style>
      .custom-fieldset::part(ag-fieldset) {
        border-color: var(--ag-primary);
        border-width: 2px;
      }
      .custom-fieldset::part(ag-legend) {
        color: var(--ag-primary);
        font-size: 1.25rem;
      }
      .custom-fieldset::part(ag-content) {
        background: var(--ag-background-secondary);
        padding: var(--ag-space-2);
        border-radius: var(--ag-radius-sm);
      }
    </style>
    <ag-fieldset
      class="custom-fieldset"
      .legend=${args.legend}
      .bordered=${args.bordered}
      .layout=${args.layout}
      .legendHidden=${args.legendHidden}
    >
      <p style="margin: 0;">
        This fieldset has been customized using CSS Shadow Parts.
      </p>
      <ag-checkbox
        id="custom1"
        name="custom1"
        labelText="Custom Option 1"
      ></ag-checkbox>
      <ag-checkbox
        id="custom2"
        name="custom2"
        labelText="Custom Option 2"
      ></ag-checkbox>
    </ag-fieldset>
  `,
};
