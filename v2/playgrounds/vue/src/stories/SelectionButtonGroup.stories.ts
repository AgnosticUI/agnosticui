import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { action } from 'storybook/actions';
import { VueSelectionButtonGroup } from 'agnosticui-core/selection-button-group/vue';
import { VueSelectionButton } from 'agnosticui-core/selection-button/vue';

const selectionChangeAction = action('selection-change');

const meta = {
  title: 'AgnosticUI Vue/SelectionButtonGroup',
  component: VueSelectionButtonGroup,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['radio', 'checkbox'],
      description: 'Selection mode: single (radio) or multiple (checkbox)',
    },
    name: {
      control: 'text',
      description: 'Name attribute for the input elements',
    },
    legend: {
      control: 'text',
      description: 'Legend text for the fieldset (accessibility)',
    },
    legendHidden: {
      control: 'boolean',
      description: 'Visually hide the legend while keeping it accessible',
    },
    theme: {
      control: 'select',
      options: ['', 'success', 'info', 'warning', 'error', 'monochrome'],
      description: 'Theme variant for buttons',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size variant for buttons',
    },
    shape: {
      control: 'select',
      options: ['', 'rounded', 'capsule'],
      description: 'Shape variant for buttons',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable all buttons in the group',
    },
  },
  args: {
    type: 'radio',
    name: 'payment-method',
    legend: 'Select payment method',
    legendHidden: false,
    theme: '',
    size: 'md',
    shape: '',
    disabled: false,
  },
} satisfies Meta<typeof VueSelectionButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RadioGroup: Story = {
  render: (args) => ({
    components: { VueSelectionButtonGroup, VueSelectionButton },
    setup() {
      const handleChange = (e: CustomEvent) => selectionChangeAction(e.detail);
      return { args, handleChange };
    },
    template: `
      <VueSelectionButtonGroup
        :type="args.type"
        :name="args.name"
        :legend="args.legend"
        :legend-hidden="args.legendHidden"
        :theme="args.theme"
        :size="args.size"
        :shape="args.shape"
        :disabled="args.disabled"
        @selection-change="handleChange"
      >
        <VueSelectionButton value="card" label="Credit Card">
          Credit Card
        </VueSelectionButton>
        <VueSelectionButton value="paypal" label="PayPal">
          PayPal
        </VueSelectionButton>
        <VueSelectionButton value="bank" label="Bank Transfer">
          Bank Transfer
        </VueSelectionButton>
      </VueSelectionButtonGroup>
    `,
  }),
};

export const CheckboxGroup: Story = {
  args: {
    type: 'checkbox',
    name: 'toppings',
    legend: 'Select toppings',
  },
  render: (args) => ({
    components: { VueSelectionButtonGroup, VueSelectionButton },
    setup() {
      const handleChange = (e: CustomEvent) => selectionChangeAction(e.detail);
      return { args, handleChange };
    },
    template: `
      <VueSelectionButtonGroup
        :type="args.type"
        :name="args.name"
        :legend="args.legend"
        :legend-hidden="args.legendHidden"
        :theme="args.theme"
        :size="args.size"
        :shape="args.shape"
        :disabled="args.disabled"
        @selection-change="handleChange"
      >
        <VueSelectionButton value="cheese" label="Extra Cheese">
          Extra Cheese
        </VueSelectionButton>
        <VueSelectionButton value="pepperoni" label="Pepperoni">
          Pepperoni
        </VueSelectionButton>
        <VueSelectionButton value="mushrooms" label="Mushrooms">
          Mushrooms
        </VueSelectionButton>
        <VueSelectionButton value="olives" label="Olives">
          Olives
        </VueSelectionButton>
      </VueSelectionButtonGroup>
    `,
  }),
};

export const AllThemes: Story = {
  render: () => ({
    components: { VueSelectionButtonGroup, VueSelectionButton },
    setup() {
      const handleChange = (e: CustomEvent) => selectionChangeAction(e.detail);
      return { handleChange };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 2rem;">
        <!-- Default (Primary) -->
        <div>
          <h3 style="margin-bottom: 0.5rem;">Default (Primary)</h3>
          <VueSelectionButtonGroup
            type="radio"
            name="theme-default"
            legend="Default theme"
            legend-hidden
            @selection-change="handleChange"
          >
            <VueSelectionButton value="a" label="Option A">Option A</VueSelectionButton>
            <VueSelectionButton value="b" label="Option B">Option B</VueSelectionButton>
            <VueSelectionButton value="c" label="Option C">Option C</VueSelectionButton>
          </VueSelectionButtonGroup>
        </div>

        <!-- Success -->
        <div>
          <h3 style="margin-bottom: 0.5rem;">Success</h3>
          <VueSelectionButtonGroup
            type="radio"
            name="theme-success"
            legend="Success theme"
            legend-hidden
            theme="success"
            @selection-change="handleChange"
          >
            <VueSelectionButton value="a" label="Option A">Option A</VueSelectionButton>
            <VueSelectionButton value="b" label="Option B">Option B</VueSelectionButton>
            <VueSelectionButton value="c" label="Option C">Option C</VueSelectionButton>
          </VueSelectionButtonGroup>
        </div>

        <!-- Info -->
        <div>
          <h3 style="margin-bottom: 0.5rem;">Info</h3>
          <VueSelectionButtonGroup
            type="radio"
            name="theme-info"
            legend="Info theme"
            legend-hidden
            theme="info"
            @selection-change="handleChange"
          >
            <VueSelectionButton value="a" label="Option A">Option A</VueSelectionButton>
            <VueSelectionButton value="b" label="Option B">Option B</VueSelectionButton>
            <VueSelectionButton value="c" label="Option C">Option C</VueSelectionButton>
          </VueSelectionButtonGroup>
        </div>

        <!-- Warning -->
        <div>
          <h3 style="margin-bottom: 0.5rem;">Warning</h3>
          <VueSelectionButtonGroup
            type="radio"
            name="theme-warning"
            legend="Warning theme"
            legend-hidden
            theme="warning"
            @selection-change="handleChange"
          >
            <VueSelectionButton value="a" label="Option A">Option A</VueSelectionButton>
            <VueSelectionButton value="b" label="Option B">Option B</VueSelectionButton>
            <VueSelectionButton value="c" label="Option C">Option C</VueSelectionButton>
          </VueSelectionButtonGroup>
        </div>

        <!-- Error -->
        <div>
          <h3 style="margin-bottom: 0.5rem;">Error</h3>
          <VueSelectionButtonGroup
            type="radio"
            name="theme-error"
            legend="Error theme"
            legend-hidden
            theme="error"
            @selection-change="handleChange"
          >
            <VueSelectionButton value="a" label="Option A">Option A</VueSelectionButton>
            <VueSelectionButton value="b" label="Option B">Option B</VueSelectionButton>
            <VueSelectionButton value="c" label="Option C">Option C</VueSelectionButton>
          </VueSelectionButtonGroup>
        </div>

        <!-- Monochrome -->
        <div>
          <h3 style="margin-bottom: 0.5rem;">Monochrome</h3>
          <VueSelectionButtonGroup
            type="radio"
            name="theme-monochrome"
            legend="Monochrome theme"
            legend-hidden
            theme="monochrome"
            @selection-change="handleChange"
          >
            <VueSelectionButton value="a" label="Option A">Option A</VueSelectionButton>
            <VueSelectionButton value="b" label="Option B">Option B</VueSelectionButton>
            <VueSelectionButton value="c" label="Option C">Option C</VueSelectionButton>
          </VueSelectionButtonGroup>
        </div>
      </div>
    `,
  }),
};

export const AllSizes: Story = {
  render: () => ({
    components: { VueSelectionButtonGroup, VueSelectionButton },
    setup() {
      const handleChange = (e: CustomEvent) => selectionChangeAction(e.detail);
      return { handleChange };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 2rem;">
        <!-- Small -->
        <div>
          <h3 style="margin-bottom: 0.5rem;">Small (sm)</h3>
          <VueSelectionButtonGroup
            type="radio"
            name="size-sm"
            legend="Small size"
            legend-hidden
            size="sm"
            @selection-change="handleChange"
          >
            <VueSelectionButton value="a" label="Option A">Option A</VueSelectionButton>
            <VueSelectionButton value="b" label="Option B">Option B</VueSelectionButton>
            <VueSelectionButton value="c" label="Option C">Option C</VueSelectionButton>
          </VueSelectionButtonGroup>
        </div>

        <!-- Medium (default) -->
        <div>
          <h3 style="margin-bottom: 0.5rem;">Medium (md) - Default</h3>
          <VueSelectionButtonGroup
            type="radio"
            name="size-md"
            legend="Medium size"
            legend-hidden
            size="md"
            @selection-change="handleChange"
          >
            <VueSelectionButton value="a" label="Option A">Option A</VueSelectionButton>
            <VueSelectionButton value="b" label="Option B">Option B</VueSelectionButton>
            <VueSelectionButton value="c" label="Option C">Option C</VueSelectionButton>
          </VueSelectionButtonGroup>
        </div>

        <!-- Large -->
        <div>
          <h3 style="margin-bottom: 0.5rem;">Large (lg)</h3>
          <VueSelectionButtonGroup
            type="radio"
            name="size-lg"
            legend="Large size"
            legend-hidden
            size="lg"
            @selection-change="handleChange"
          >
            <VueSelectionButton value="a" label="Option A">Option A</VueSelectionButton>
            <VueSelectionButton value="b" label="Option B">Option B</VueSelectionButton>
            <VueSelectionButton value="c" label="Option C">Option C</VueSelectionButton>
          </VueSelectionButtonGroup>
        </div>
      </div>
    `,
  }),
};

export const AllShapes: Story = {
  render: () => ({
    components: { VueSelectionButtonGroup, VueSelectionButton },
    setup() {
      const handleChange = (e: CustomEvent) => selectionChangeAction(e.detail);
      return { handleChange };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 2rem;">
        <!-- Default (rectangular) -->
        <div>
          <h3 style="margin-bottom: 0.5rem;">Default (rectangular)</h3>
          <VueSelectionButtonGroup
            type="radio"
            name="shape-default"
            legend="Default shape"
            legend-hidden
            @selection-change="handleChange"
          >
            <VueSelectionButton value="a" label="Option A">Option A</VueSelectionButton>
            <VueSelectionButton value="b" label="Option B">Option B</VueSelectionButton>
            <VueSelectionButton value="c" label="Option C">Option C</VueSelectionButton>
          </VueSelectionButtonGroup>
        </div>

        <!-- Rounded -->
        <div>
          <h3 style="margin-bottom: 0.5rem;">Rounded</h3>
          <VueSelectionButtonGroup
            type="radio"
            name="shape-rounded"
            legend="Rounded shape"
            legend-hidden
            shape="rounded"
            @selection-change="handleChange"
          >
            <VueSelectionButton value="a" label="Option A">Option A</VueSelectionButton>
            <VueSelectionButton value="b" label="Option B">Option B</VueSelectionButton>
            <VueSelectionButton value="c" label="Option C">Option C</VueSelectionButton>
          </VueSelectionButtonGroup>
        </div>

        <!-- Capsule (pill) -->
        <div>
          <h3 style="margin-bottom: 0.5rem;">Capsule (pill)</h3>
          <VueSelectionButtonGroup
            type="radio"
            name="shape-capsule"
            legend="Capsule shape"
            legend-hidden
            shape="capsule"
            @selection-change="handleChange"
          >
            <VueSelectionButton value="a" label="Option A">Option A</VueSelectionButton>
            <VueSelectionButton value="b" label="Option B">Option B</VueSelectionButton>
            <VueSelectionButton value="c" label="Option C">Option C</VueSelectionButton>
          </VueSelectionButtonGroup>
        </div>
      </div>
    `,
  }),
};

export const Disabled: Story = {
  args: {
    type: 'radio',
    name: 'disabled-example',
    legend: 'Disabled group',
    disabled: true,
  },
  render: (args) => ({
    components: { VueSelectionButtonGroup, VueSelectionButton },
    setup() {
      return { args };
    },
    template: `
      <VueSelectionButtonGroup
        :type="args.type"
        :name="args.name"
        :legend="args.legend"
        :disabled="args.disabled"
      >
        <VueSelectionButton value="a" label="Option A">Option A</VueSelectionButton>
        <VueSelectionButton value="b" label="Option B">Option B</VueSelectionButton>
        <VueSelectionButton value="c" label="Option C">Option C</VueSelectionButton>
      </VueSelectionButtonGroup>
    `,
  }),
};

export const HiddenLegend: Story = {
  args: {
    type: 'radio',
    name: 'hidden-legend',
    legend: 'This legend is visually hidden but accessible',
    legendHidden: true,
  },
  render: (args) => ({
    components: { VueSelectionButtonGroup, VueSelectionButton },
    setup() {
      return { args };
    },
    template: `
      <VueSelectionButtonGroup
        :type="args.type"
        :name="args.name"
        :legend="args.legend"
        :legend-hidden="args.legendHidden"
      >
        <VueSelectionButton value="a" label="Option A">Option A</VueSelectionButton>
        <VueSelectionButton value="b" label="Option B">Option B</VueSelectionButton>
      </VueSelectionButtonGroup>
    `,
  }),
};

export const CombinedVariants: Story = {
  render: () => ({
    components: { VueSelectionButtonGroup, VueSelectionButton },
    setup() {
      const handleChange = (e: CustomEvent) => selectionChangeAction(e.detail);
      return { handleChange };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 2rem;">
        <!-- Success + Capsule + Small -->
        <div>
          <h3 style="margin-bottom: 0.5rem;">Success + Capsule + Small</h3>
          <VueSelectionButtonGroup
            type="radio"
            name="combined-1"
            legend="Combined variant 1"
            legend-hidden
            theme="success"
            shape="capsule"
            size="sm"
            @selection-change="handleChange"
          >
            <VueSelectionButton value="a" label="Yes">Yes</VueSelectionButton>
            <VueSelectionButton value="b" label="No">No</VueSelectionButton>
            <VueSelectionButton value="c" label="Maybe">Maybe</VueSelectionButton>
          </VueSelectionButtonGroup>
        </div>

        <!-- Error + Rounded + Large -->
        <div>
          <h3 style="margin-bottom: 0.5rem;">Error + Rounded + Large</h3>
          <VueSelectionButtonGroup
            type="radio"
            name="combined-2"
            legend="Combined variant 2"
            legend-hidden
            theme="error"
            shape="rounded"
            size="lg"
            @selection-change="handleChange"
          >
            <VueSelectionButton value="a" label="Delete">Delete</VueSelectionButton>
            <VueSelectionButton value="b" label="Archive">Archive</VueSelectionButton>
            <VueSelectionButton value="c" label="Keep">Keep</VueSelectionButton>
          </VueSelectionButtonGroup>
        </div>

        <!-- Monochrome + Capsule + Checkbox -->
        <div>
          <h3 style="margin-bottom: 0.5rem;">Monochrome + Capsule + Checkbox</h3>
          <VueSelectionButtonGroup
            type="checkbox"
            name="combined-3"
            legend="Combined variant 3"
            legend-hidden
            theme="monochrome"
            shape="capsule"
            @selection-change="handleChange"
          >
            <VueSelectionButton value="bold" label="Bold">Bold</VueSelectionButton>
            <VueSelectionButton value="italic" label="Italic">Italic</VueSelectionButton>
            <VueSelectionButton value="underline" label="Underline">Underline</VueSelectionButton>
          </VueSelectionButtonGroup>
        </div>

        <!-- Info + Default Shape + Large -->
        <div>
          <h3 style="margin-bottom: 0.5rem;">Info + Default Shape + Large</h3>
          <VueSelectionButtonGroup
            type="radio"
            name="combined-4"
            legend="Combined variant 4"
            legend-hidden
            theme="info"
            size="lg"
            @selection-change="handleChange"
          >
            <VueSelectionButton value="daily" label="Daily">Daily</VueSelectionButton>
            <VueSelectionButton value="weekly" label="Weekly">Weekly</VueSelectionButton>
            <VueSelectionButton value="monthly" label="Monthly">Monthly</VueSelectionButton>
          </VueSelectionButtonGroup>
        </div>
      </div>
    `,
  }),
};

export const RealWorldExample: Story = {
  render: () => ({
    components: { VueSelectionButtonGroup, VueSelectionButton },
    setup() {
      const handleChange = (e: CustomEvent) => selectionChangeAction(e.detail);
      return { handleChange };
    },
    template: `
      <div style="max-width: 600px;">
        <h2 style="margin-bottom: 1rem;">Choose your subscription</h2>
        <VueSelectionButtonGroup
          type="radio"
          name="subscription"
          legend="Subscription plan"
          legend-hidden
          shape="rounded"
          @selection-change="handleChange"
        >
          <VueSelectionButton value="monthly" label="Monthly billing">
            Monthly - $9.99
          </VueSelectionButton>
          <VueSelectionButton value="quarterly" label="Quarterly billing">
            Quarterly - $24.99
          </VueSelectionButton>
          <VueSelectionButton value="annual" label="Annual billing">
            Annual - $79.99
          </VueSelectionButton>
        </VueSelectionButtonGroup>

        <div style="margin-top: 2rem;">
          <h3 style="margin-bottom: 0.5rem;">Add-ons (select multiple)</h3>
          <VueSelectionButtonGroup
            type="checkbox"
            name="addons"
            legend="Available add-ons"
            legend-hidden
            theme="success"
            shape="rounded"
            size="sm"
            @selection-change="handleChange"
          >
            <VueSelectionButton value="storage" label="Extra storage">
              Extra Storage +$2
            </VueSelectionButton>
            <VueSelectionButton value="support" label="Priority support">
              Priority Support +$5
            </VueSelectionButton>
            <VueSelectionButton value="backup" label="Auto backup">
              Auto Backup +$3
            </VueSelectionButton>
          </VueSelectionButtonGroup>
        </div>
      </div>
    `,
  }),
};

export const RTLSupport: Story = {
  render: () => ({
    components: { VueSelectionButtonGroup, VueSelectionButton },
    setup() {
      const handleChange = (e: CustomEvent) => selectionChangeAction(e.detail);
      return { handleChange };
    },
    template: `
      <div dir="rtl" style="font-family: system-ui, sans-serif;">
        <h3 style="margin-bottom: 1rem;">Right-to-Left (RTL) Layout</h3>
        <VueSelectionButtonGroup
          type="radio"
          name="payment-rtl"
          legend="בחר אמצעי תשלום"
          shape="rounded"
          @selection-change="handleChange"
        >
          <VueSelectionButton value="card" label="כרטיס אשראי">
            כרטיס אשראי
          </VueSelectionButton>
          <VueSelectionButton value="paypal" label="פייפאל">
            פייפאל
          </VueSelectionButton>
          <VueSelectionButton value="bank" label="העברה בנקאית">
            העברה בנקאית
          </VueSelectionButton>
        </VueSelectionButtonGroup>
        <p style="margin-top: 1rem; color: #666; font-size: 0.875rem;">
          The indicator badge appears on the top-left in RTL mode via <code>inset-inline-end</code>.
        </p>
      </div>
    `,
  }),
};
