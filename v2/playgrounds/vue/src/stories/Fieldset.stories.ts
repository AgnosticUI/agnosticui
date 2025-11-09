import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { VueFieldset } from 'agnosticui-core/fieldset/vue';
import { VueInput } from 'agnosticui-core/input/vue';
import { VueCheckbox } from 'agnosticui-core/checkbox/vue';
import { VueRadio } from 'agnosticui-core/radio/vue';

const meta = {
  title: 'AgnosticUI Vue/Fieldset',
  component: VueFieldset,
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
  },
} satisfies Meta<typeof VueFieldset>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    legend: 'Personal Information',
  },
  render: (args) => ({
    components: { VueFieldset, VueInput },
    setup() {
      return { args };
    },
    template: `
      <VueFieldset v-bind="args">
        <VueInput
          id="first-name"
          name="first-name"
          label="First Name"
          type="text"
        />
        <VueInput
          id="last-name"
          name="last-name"
          label="Last Name"
          type="text"
        />
        <VueInput
          id="email"
          name="email"
          label="Email"
          type="email"
        />
      </VueFieldset>
    `,
  }),
};

export const Bordered: Story = {
  args: {
    legend: 'Contact Preferences',
    bordered: true,
  },
  render: (args) => ({
    components: { VueFieldset, VueCheckbox },
    setup() {
      return { args };
    },
    template: `
      <VueFieldset v-bind="args">
        <VueCheckbox
          id="email-updates"
          name="email-updates"
          labelText="Email updates"
        />
        <VueCheckbox
          id="sms-updates"
          name="sms-updates"
          labelText="SMS updates"
        />
        <VueCheckbox
          id="newsletter"
          name="newsletter"
          labelText="Newsletter subscription"
        />
      </VueFieldset>
    `,
  }),
};

export const HorizontalLayout: Story = {
  args: {
    legend: 'Payment Method',
    bordered: true,
    layout: 'horizontal',
  },
  render: (args) => ({
    components: { VueFieldset, VueRadio },
    setup() {
      return { args };
    },
    template: `
      <VueFieldset v-bind="args">
        <VueRadio
          id="payment-card"
          name="payment"
          value="card"
          labelText="Credit Card"
          :checked="true"
        />
        <VueRadio
          id="payment-paypal"
          name="payment"
          value="paypal"
          labelText="PayPal"
        />
        <VueRadio
          id="payment-bank"
          name="payment"
          value="bank"
          labelText="Bank Transfer"
        />
      </VueFieldset>
    `,
  }),
};

export const HiddenLegend: Story = {
  args: {
    legend: 'Accessible but Hidden Legend',
    legendHidden: true,
    bordered: true,
  },
  render: (args) => ({
    components: { VueFieldset, VueCheckbox },
    setup() {
      return { args };
    },
    template: `
      <VueFieldset v-bind="args">
        <p style="margin-top: 0;">
          The legend is visually hidden but still announced by screen readers for accessibility.
        </p>
        <VueCheckbox
          id="option1"
          name="option1"
          labelText="Option 1"
        />
        <VueCheckbox
          id="option2"
          name="option2"
          labelText="Option 2"
        />
      </VueFieldset>
    `,
  }),
};

export const RadioButtonGroup: Story = {
  args: {
    legend: 'Do you have a passport?',
    bordered: true,
  },
  render: (args) => ({
    components: { VueFieldset, VueRadio },
    setup() {
      return { args };
    },
    template: `
      <VueFieldset v-bind="args">
        <VueRadio
          id="yes"
          name="passport"
          value="yes"
          labelText="Yes"
        />
        <VueRadio
          id="no"
          name="passport"
          value="no"
          labelText="No"
        />
      </VueFieldset>
    `,
  }),
};

export const AddressFields: Story = {
  args: {
    legend: 'Your Address',
    bordered: true,
  },
  render: (args) => ({
    components: { VueFieldset, VueInput },
    setup() {
      return { args };
    },
    template: `
      <VueFieldset v-bind="args">
        <VueInput
          id="street"
          name="street"
          label="Street"
          type="text"
        />
        <VueInput
          id="city"
          name="city"
          label="Town or city"
          type="text"
        />
        <VueInput
          id="county"
          name="county"
          label="County"
          type="text"
        />
        <VueInput
          id="postcode"
          name="postcode"
          label="Postcode"
          type="text"
        />
      </VueFieldset>
    `,
  }),
};

export const CSSPartsCustomization: Story = {
  args: {
    legend: 'Customized with CSS Parts',
    bordered: true,
  },
  render: (args) => ({
    components: { VueFieldset, VueCheckbox },
    setup() {
      const styles = `
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
      `;
      return { args, styles };
    },
    template: `
      <div>
        <div v-html="styles"></div>
        <VueFieldset v-bind="args" class="custom-fieldset">
          <p style="margin: 0;">
            This fieldset has been customized using CSS Shadow Parts.
          </p>
          <VueCheckbox
            id="custom1"
            name="custom1"
            labelText="Custom Option 1"
          />
          <VueCheckbox
            id="custom2"
            name="custom2"
            labelText="Custom Option 2"
          />
        </VueFieldset>
      </div>
    `,
  }),
};
