import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { VueRadio } from 'agnosticui-core/radio/vue';
import { VueFieldset } from 'agnosticui-core/fieldset/vue';

const meta = {
  title: 'AgnosticUI Vue/Radio',
  component: VueRadio,
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text', description: 'Name attribute for the radio input' },
    value: { control: 'text', description: 'Value of the radio input' },
    checked: { control: 'boolean', description: 'Whether the radio is checked' },
    disabled: { control: 'boolean', description: 'Whether the radio is disabled' },
    size: { control: 'select', options: ['small', 'medium', 'large'], description: 'Size' },
    theme: { control: 'select', options: ['default', 'primary', 'success', 'monochrome'], description: 'Theme' },
    labelText: { control: 'text', description: 'Label text' },
    labelPosition: { control: 'select', options: ['end', 'start'], description: 'Label position' },
    label: { control: 'text', description: 'Optional external label displayed above the radio' },
    labelHidden: { control: 'boolean', description: 'Visually hides the external label' },
    noLabel: { control: 'boolean', description: 'Removes the external label element' },
    required: { control: 'boolean', description: 'Marks the radio as required' },
    invalid: { control: 'boolean', description: 'Marks the radio as invalid' },
    errorMessage: { control: 'text', description: 'Error message displayed when invalid' },
    helpText: { control: 'text', description: 'Helper text displayed below the radio' },
  },
  args: {
    name: 'example',
    value: '1',
    checked: false,
    disabled: false,
    size: 'medium',
    theme: 'primary',
    labelText: 'Radio Option',
    labelPosition: 'end',
    label: '',
    labelHidden: false,
    noLabel: false,
    required: false,
    invalid: false,
    errorMessage: '',
    helpText: '',
  },
} satisfies Meta<typeof VueRadio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { VueRadio },
    setup() {
      return { args };
    },
    template: `<VueRadio v-bind="args" />`,
  }),
};

export const RadioGroup: Story = {
  render: (args) => ({
    components: { VueRadio, VueFieldset },
    setup() {
      return { args };
    },
    template: `
      <VueFieldset legend="Select Framework">
        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
          <VueRadio name="framework" value="react" :size="args.size" :theme="args.theme">React</VueRadio>
          <VueRadio name="framework" value="vue" :size="args.size" :theme="args.theme" :checked="true">Vue</VueRadio>
          <VueRadio name="framework" value="angular" :size="args.size" :theme="args.theme">Angular</VueRadio>
        </div>
      </VueFieldset>
    `,
  }),
};

export const AllThemes: Story = {
  render: (args) => ({
    components: { VueRadio, VueFieldset },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1.5rem;">
        <VueFieldset legend="Default Theme (Blue)">
          <div style="display: flex; gap: 1rem;">
            <VueRadio name="theme-default" value="1" :size="args.size" theme="default" label-text="Unchecked" />
            <VueRadio name="theme-default" value="2" :size="args.size" theme="default" label-text="Checked" :checked="true" />
          </div>
        </VueFieldset>
        <VueFieldset legend="Primary Theme (Blue)">
          <div style="display: flex; gap: 1rem;">
            <VueRadio name="theme-primary" value="1" :size="args.size" theme="primary" label-text="Unchecked" />
            <VueRadio name="theme-primary" value="2" :size="args.size" theme="primary" label-text="Checked" :checked="true" />
          </div>
        </VueFieldset>
        <VueFieldset legend="Success Theme (Green)">
          <div style="display: flex; gap: 1rem;">
            <VueRadio name="theme-green" value="1" :size="args.size" theme="green" label-text="Unchecked" />
            <VueRadio name="theme-green" value="2" :size="args.size" theme="green" label-text="Checked" :checked="true" />
          </div>
        </VueFieldset>

        <VueFieldset legend="Monochrome Theme (Black/White)">
          <div style="display: flex; gap: 1rem;">
            <VueRadio name="theme-mono" value="1" :size="args.size" theme="monochrome" label-text="Unchecked" />
            <VueRadio name="theme-mono" value="2" :size="args.size" theme="monochrome" label-text="Checked" :checked="true" />
          </div>
        </VueFieldset>
      </div>
    `,
  }),
};

export const AllSizes: Story = {
  render: () => ({
    components: { VueRadio },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1.5rem;">
        <div>
          <h3 style="margin-bottom: 0.5rem;">Small</h3>
          <VueRadio name="size-small" value="1" size="small" label-text="Small radio" :checked="true" />
        </div>
        <div>
          <h3 style="margin-bottom: 0.5rem;">Medium (Default)</h3>
          <VueRadio name="size-medium" value="1" size="medium" label-text="Medium radio" :checked="true" />
        </div>
        <div>
          <h3 style="margin-bottom: 0.5rem;">Large</h3>
          <VueRadio name="size-large" value="1" size="large" label-text="Large radio" :checked="true" />
        </div>
      </div>
    `,
  }),
};

export const WithExternalLabel: Story = {
  render: () => ({
    components: { VueRadio },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1.5rem;">
        <VueRadio
          name="shipping-method"
          value="standard"
          label="Shipping Method"
          label-text="Standard Shipping (5-7 days)"
          :checked="true"
        />

        <VueRadio
          name="payment-method"
          value="credit"
          label="Payment Method"
          label-text="Credit Card"
          help-text="We accept all major credit cards"
          :checked="true"
        />

        <VueRadio
          name="terms"
          value="agreed"
          label="Terms and Conditions"
          label-text="I agree to the terms and conditions"
          :required="true"
          help-text="Please read and accept our terms"
        />

        <VueRadio
          name="age-verify"
          value="confirmed"
          label="Age Verification"
          label-text="I confirm I am 18 years or older"
          :required="true"
          :invalid="true"
          error-message="You must confirm you are 18 or older to proceed"
        />
      </div>
    `,
  }),
};

export const ComparisonStandaloneVsExternal: Story = {
  render: () => ({
    components: { VueRadio },
    template: `
      <div style="display: flex; gap: 3rem;">
        <div style="flex: 1;">
          <h3 style="margin-bottom: 1rem;">Standard Radio (Internal Label)</h3>
          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            <VueRadio
              name="standard-plan"
              value="free"
              label-text="Free Plan"
              :checked="true"
            />
            <VueRadio
              name="standard-plan"
              value="pro"
              label-text="Pro Plan"
            />
            <VueRadio
              name="standard-plan"
              value="enterprise"
              label-text="Enterprise Plan"
            />
          </div>
        </div>
        <div style="flex: 1;">
          <h3 style="margin-bottom: 1rem;">
            Radio with External Label (Group Context)
          </h3>
          <VueRadio
            name="plan-selection"
            value="free"
            label="Choose Your Plan"
            label-text="Free Plan"
            help-text="Select the plan that best fits your needs"
            :checked="true"
          />
          <VueRadio
            name="plan-selection"
            value="pro"
            label-text="Pro Plan"
          />
          <VueRadio
            name="plan-selection"
            value="enterprise"
            label-text="Enterprise Plan"
          />
        </div>
      </div>
    `,
  }),
};
