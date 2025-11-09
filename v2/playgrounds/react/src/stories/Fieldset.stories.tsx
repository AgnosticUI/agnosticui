import type { Meta, StoryObj } from '@storybook/react';
import { ReactFieldset } from 'agnosticui-core/fieldset/react';
import { ReactInput } from 'agnosticui-core/input/react';
import { ReactCheckbox } from 'agnosticui-core/checkbox/react';
import { ReactRadio } from 'agnosticui-core/radio/react';
import type { ReactFieldsetProps } from 'agnosticui-core/fieldset/react';

const meta: Meta<typeof ReactFieldset> = {
  title: 'AgnosticUI React/Fieldset',
  component: ReactFieldset,
  argTypes: {
    legend: {
      control: 'text',
      description: 'Optional legend text for the fieldset',
      defaultValue: '',
    },
    bordered: {
      control: 'boolean',
      description: 'Whether to apply borders and padding',
      defaultValue: false,
    },
    layout: {
      control: 'select',
      options: ['vertical', 'horizontal'],
      description: 'Layout mode for the fieldset content',
      defaultValue: 'vertical',
    },
    legendHidden: {
      control: 'boolean',
      description: 'Visually hide the legend while keeping it accessible',
      defaultValue: false,
    },
  },
  args: {
    legend: '',
    bordered: false,
    layout: 'vertical',
    legendHidden: false,
  } as ReactFieldsetProps,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    legend: 'Personal Information',
  },
  render: (args) => (
    <ReactFieldset {...args}>
      <ReactInput
        id="first-name"
        name="first-name"
        label="First Name"
        type="text"
      />
      <ReactInput
        id="last-name"
        name="last-name"
        label="Last Name"
        type="text"
      />
      <ReactInput
        id="email"
        name="email"
        label="Email"
        type="email"
      />
    </ReactFieldset>
  ),
};

export const Bordered: Story = {
  args: {
    legend: 'Contact Preferences',
    bordered: true,
  },
  render: (args) => (
    <ReactFieldset {...args}>
      <ReactCheckbox
        id="email-updates"
        name="email-updates"
        labelText="Email updates"
      />
      <ReactCheckbox
        id="sms-updates"
        name="sms-updates"
        labelText="SMS updates"
      />
      <ReactCheckbox
        id="newsletter"
        name="newsletter"
        labelText="Newsletter subscription"
      />
    </ReactFieldset>
  ),
};

export const HorizontalLayout: Story = {
  args: {
    legend: 'Payment Method',
    bordered: true,
    layout: 'horizontal',
  },
  render: (args) => (
    <ReactFieldset {...args}>
      <ReactRadio
        id="payment-card"
        name="payment"
        value="card"
        labelText="Credit Card"
        checked
      />
      <ReactRadio
        id="payment-paypal"
        name="payment"
        value="paypal"
        labelText="PayPal"
      />
      <ReactRadio
        id="payment-bank"
        name="payment"
        value="bank"
        labelText="Bank Transfer"
      />
    </ReactFieldset>
  ),
};

export const HiddenLegend: Story = {
  args: {
    legend: 'Accessible but Hidden Legend',
    legendHidden: true,
    bordered: true,
  },
  render: (args) => (
    <ReactFieldset {...args}>
      <p style={{ marginTop: 0 }}>
        The legend is visually hidden but still announced by screen readers for accessibility.
      </p>
      <ReactCheckbox
        id="option1"
        name="option1"
        labelText="Option 1"
      />
      <ReactCheckbox
        id="option2"
        name="option2"
        labelText="Option 2"
      />
    </ReactFieldset>
  ),
};

export const RadioButtonGroup: Story = {
  args: {
    legend: 'Do you have a passport?',
    bordered: true,
  },
  render: (args) => (
    <ReactFieldset {...args}>
      <ReactRadio
        id="yes"
        name="passport"
        value="yes"
        labelText="Yes"
      />
      <ReactRadio
        id="no"
        name="passport"
        value="no"
        labelText="No"
      />
    </ReactFieldset>
  ),
};

export const AddressFields: Story = {
  args: {
    legend: 'Your Address',
    bordered: true,
  },
  render: (args) => (
    <ReactFieldset {...args}>
      <ReactInput
        id="street"
        name="street"
        label="Street"
        type="text"
      />
      <ReactInput
        id="city"
        name="city"
        label="Town or city"
        type="text"
      />
      <ReactInput
        id="county"
        name="county"
        label="County"
        type="text"
      />
      <ReactInput
        id="postcode"
        name="postcode"
        label="Postcode"
        type="text"
      />
    </ReactFieldset>
  ),
};

export const CSSPartsCustomization: Story = {
  args: {
    legend: 'Customized with CSS Parts',
    bordered: true,
  },
  render: (args) => (
    <>
      <style>{`
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
      `}</style>
      <ReactFieldset {...args} className="custom-fieldset">
        <p style={{ margin: 0 }}>
          This fieldset has been customized using CSS Shadow Parts.
        </p>
        <ReactCheckbox
          id="custom1"
          name="custom1"
          labelText="Custom Option 1"
        />
        <ReactCheckbox
          id="custom2"
          name="custom2"
          labelText="Custom Option 2"
        />
      </ReactFieldset>
    </>
  ),
};
