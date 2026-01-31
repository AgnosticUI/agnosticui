import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { action } from 'storybook/actions';
import { VueSelectionCardGroup } from 'agnosticui-core/selection-card-group/vue';
import { VueSelectionCard } from 'agnosticui-core/selection-card/vue';

const selectionChangeAction = action('selection-change');

const meta = {
  title: 'AgnosticUI Vue/SelectionCardGroup',
  component: VueSelectionCardGroup,
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
      description: 'Theme variant for cards',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable all cards in the group',
    },
  },
  args: {
    type: 'radio',
    name: 'interests',
    legend: 'Select your interests',
    legendHidden: false,
    theme: '',
    disabled: false,
  },
} satisfies Meta<typeof VueSelectionCardGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RadioGroup: Story = {
  render: (args) => ({
    components: { VueSelectionCardGroup, VueSelectionCard },
    setup() {
      const handleChange = (e: CustomEvent) => selectionChangeAction(e.detail);
      return { args, handleChange };
    },
    template: `
      <VueSelectionCardGroup
        :type="args.type"
        :name="args.name"
        :legend="args.legend"
        :legend-hidden="args.legendHidden"
        :theme="args.theme"
        :disabled="args.disabled"
        @selection-change="handleChange"
      >
        <VueSelectionCard value="tech" label="Technology">
          <div style="text-align: center; padding: 1rem;">
            <div style="font-size: 2rem;">💻</div>
            <div style="font-weight: 600;">Technology</div>
          </div>
        </VueSelectionCard>
        <VueSelectionCard value="art" label="Art & Design">
          <div style="text-align: center; padding: 1rem;">
            <div style="font-size: 2rem;">🎨</div>
            <div style="font-weight: 600;">Art & Design</div>
          </div>
        </VueSelectionCard>
        <VueSelectionCard value="music" label="Music">
          <div style="text-align: center; padding: 1rem;">
            <div style="font-size: 2rem;">🎵</div>
            <div style="font-weight: 600;">Music</div>
          </div>
        </VueSelectionCard>
      </VueSelectionCardGroup>
    `,
  }),
};

export const CheckboxGroup: Story = {
  args: {
    type: 'checkbox',
    name: 'features',
    legend: 'Select features to enable',
  },
  render: (args) => ({
    components: { VueSelectionCardGroup, VueSelectionCard },
    setup() {
      const handleChange = (e: CustomEvent) => selectionChangeAction(e.detail);
      return { args, handleChange };
    },
    template: `
      <VueSelectionCardGroup
        :type="args.type"
        :name="args.name"
        :legend="args.legend"
        :legend-hidden="args.legendHidden"
        :theme="args.theme"
        :disabled="args.disabled"
        @selection-change="handleChange"
      >
        <VueSelectionCard value="analytics" label="Analytics">
          <div style="text-align: center; padding: 1rem;">
            <div style="font-size: 2rem;">📊</div>
            <div style="font-weight: 600;">Analytics</div>
            <div style="font-size: 0.875rem; color: #666;">Track user behavior</div>
          </div>
        </VueSelectionCard>
        <VueSelectionCard value="notifications" label="Notifications">
          <div style="text-align: center; padding: 1rem;">
            <div style="font-size: 2rem;">🔔</div>
            <div style="font-weight: 600;">Notifications</div>
            <div style="font-size: 0.875rem; color: #666;">Push & email alerts</div>
          </div>
        </VueSelectionCard>
        <VueSelectionCard value="export" label="Export">
          <div style="text-align: center; padding: 1rem;">
            <div style="font-size: 2rem;">📤</div>
            <div style="font-weight: 600;">Export</div>
            <div style="font-size: 0.875rem; color: #666;">Download your data</div>
          </div>
        </VueSelectionCard>
      </VueSelectionCardGroup>
    `,
  }),
};

export const PricingTiers: Story = {
  args: {
    type: 'radio',
    name: 'pricing',
    legend: 'Choose your plan',
  },
  render: (args) => ({
    components: { VueSelectionCardGroup, VueSelectionCard },
    setup() {
      const handleChange = (e: CustomEvent) => selectionChangeAction(e.detail);
      return { args, handleChange };
    },
    template: `
      <VueSelectionCardGroup
        :type="args.type"
        :name="args.name"
        :legend="args.legend"
        @selection-change="handleChange"
      >
        <VueSelectionCard value="free" label="Free Plan">
          <div style="padding: 1.5rem; text-align: center;">
            <div style="font-size: 1.5rem; font-weight: 700;">Free</div>
            <div style="font-size: 2rem; font-weight: 700; margin: 0.5rem 0;">$0</div>
            <div style="color: #666; font-size: 0.875rem;">Perfect for getting started</div>
          </div>
        </VueSelectionCard>
        <VueSelectionCard value="pro" label="Pro Plan">
          <div style="padding: 1.5rem; text-align: center;">
            <div style="font-size: 1.5rem; font-weight: 700;">Pro</div>
            <div style="font-size: 2rem; font-weight: 700; margin: 0.5rem 0;">$29</div>
            <div style="color: #666; font-size: 0.875rem;">For growing teams</div>
          </div>
        </VueSelectionCard>
        <VueSelectionCard value="enterprise" label="Enterprise Plan">
          <div style="padding: 1.5rem; text-align: center;">
            <div style="font-size: 1.5rem; font-weight: 700;">Enterprise</div>
            <div style="font-size: 2rem; font-weight: 700; margin: 0.5rem 0;">Custom</div>
            <div style="color: #666; font-size: 0.875rem;">For large organizations</div>
          </div>
        </VueSelectionCard>
      </VueSelectionCardGroup>
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
    components: { VueSelectionCardGroup, VueSelectionCard },
    setup() {
      return { args };
    },
    template: `
      <VueSelectionCardGroup
        :type="args.type"
        :name="args.name"
        :legend="args.legend"
        :disabled="args.disabled"
      >
        <VueSelectionCard value="a" label="Option A">
          <div style="padding: 1rem; text-align: center;">Option A</div>
        </VueSelectionCard>
        <VueSelectionCard value="b" label="Option B">
          <div style="padding: 1rem; text-align: center;">Option B</div>
        </VueSelectionCard>
      </VueSelectionCardGroup>
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
    components: { VueSelectionCardGroup, VueSelectionCard },
    setup() {
      return { args };
    },
    template: `
      <VueSelectionCardGroup
        :type="args.type"
        :name="args.name"
        :legend="args.legend"
        :legend-hidden="args.legendHidden"
      >
        <VueSelectionCard value="a" label="Option A">
          <div style="padding: 1rem; text-align: center;">Option A</div>
        </VueSelectionCard>
        <VueSelectionCard value="b" label="Option B">
          <div style="padding: 1rem; text-align: center;">Option B</div>
        </VueSelectionCard>
      </VueSelectionCardGroup>
    `,
  }),
};

export const ThemeVariants: Story = {
  render: () => ({
    components: { VueSelectionCardGroup, VueSelectionCard },
    setup() {
      const handleChange = (e: CustomEvent) => selectionChangeAction(e.detail);
      return { handleChange };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 2rem;">
        <!-- Default (Primary/Blue) -->
        <div>
          <h3 style="margin-bottom: 0.5rem;">Default (Primary)</h3>
          <VueSelectionCardGroup
            type="radio"
            name="theme-default"
            legend="Default theme"
            legend-hidden
            @selection-change="handleChange"
          >
            <VueSelectionCard value="a" label="Option A">
              <div style="padding: 1rem; text-align: center;">Option A</div>
            </VueSelectionCard>
            <VueSelectionCard value="b" label="Option B">
              <div style="padding: 1rem; text-align: center;">Option B</div>
            </VueSelectionCard>
          </VueSelectionCardGroup>
        </div>

        <!-- Success -->
        <div>
          <h3 style="margin-bottom: 0.5rem;">Success</h3>
          <VueSelectionCardGroup
            type="radio"
            name="theme-success"
            legend="Success theme"
            legend-hidden
            theme="success"
            @selection-change="handleChange"
          >
            <VueSelectionCard value="a" label="Option A">
              <div style="padding: 1rem; text-align: center;">Option A</div>
            </VueSelectionCard>
            <VueSelectionCard value="b" label="Option B">
              <div style="padding: 1rem; text-align: center;">Option B</div>
            </VueSelectionCard>
          </VueSelectionCardGroup>
        </div>

        <!-- Info -->
        <div>
          <h3 style="margin-bottom: 0.5rem;">Info</h3>
          <VueSelectionCardGroup
            type="radio"
            name="theme-info"
            legend="Info theme"
            legend-hidden
            theme="info"
            @selection-change="handleChange"
          >
            <VueSelectionCard value="a" label="Option A">
              <div style="padding: 1rem; text-align: center;">Option A</div>
            </VueSelectionCard>
            <VueSelectionCard value="b" label="Option B">
              <div style="padding: 1rem; text-align: center;">Option B</div>
            </VueSelectionCard>
          </VueSelectionCardGroup>
        </div>

        <!-- Warning -->
        <div>
          <h3 style="margin-bottom: 0.5rem;">Warning</h3>
          <VueSelectionCardGroup
            type="radio"
            name="theme-warning"
            legend="Warning theme"
            legend-hidden
            theme="warning"
            @selection-change="handleChange"
          >
            <VueSelectionCard value="a" label="Option A">
              <div style="padding: 1rem; text-align: center;">Option A</div>
            </VueSelectionCard>
            <VueSelectionCard value="b" label="Option B">
              <div style="padding: 1rem; text-align: center;">Option B</div>
            </VueSelectionCard>
          </VueSelectionCardGroup>
        </div>

        <!-- Error -->
        <div>
          <h3 style="margin-bottom: 0.5rem;">Error</h3>
          <VueSelectionCardGroup
            type="radio"
            name="theme-error"
            legend="Error theme"
            legend-hidden
            theme="error"
            @selection-change="handleChange"
          >
            <VueSelectionCard value="a" label="Option A">
              <div style="padding: 1rem; text-align: center;">Option A</div>
            </VueSelectionCard>
            <VueSelectionCard value="b" label="Option B">
              <div style="padding: 1rem; text-align: center;">Option B</div>
            </VueSelectionCard>
          </VueSelectionCardGroup>
        </div>

        <!-- Monochrome -->
        <div>
          <h3 style="margin-bottom: 0.5rem;">Monochrome</h3>
          <VueSelectionCardGroup
            type="radio"
            name="theme-monochrome"
            legend="Monochrome theme"
            legend-hidden
            theme="monochrome"
            @selection-change="handleChange"
          >
            <VueSelectionCard value="a" label="Option A">
              <div style="padding: 1rem; text-align: center;">Option A</div>
            </VueSelectionCard>
            <VueSelectionCard value="b" label="Option B">
              <div style="padding: 1rem; text-align: center;">Option B</div>
            </VueSelectionCard>
          </VueSelectionCardGroup>
        </div>
      </div>
    `,
  }),
};
