import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { VueSpinner } from '../../../../lib/src/components/Spinner/vue';

const meta = {
  title: 'AgnosticUI Vue/Spinner',
  component: VueSpinner,
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'default', 'large', 'xlarge'],
      description: 'Spinner size',
    },
    ariaLabel: { control: 'text', description: 'Screen reader text' },
  },
  args: {
    size: 'default',
    ariaLabel: 'Loading...',
  },
} satisfies Meta<typeof VueSpinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { VueSpinner },
    setup() {
      return { args };
    },
    template: `<VueSpinner v-bind="args" />`,
  }),
};

export const Small: Story = {
  args: {
    size: 'small',
  },
  render: (args) => ({
    components: { VueSpinner },
    setup() {
      return { args };
    },
    template: `<VueSpinner v-bind="args" />`,
  }),
};

export const Large: Story = {
  args: {
    size: 'large',
  },
  render: (args) => ({
    components: { VueSpinner },
    setup() {
      return { args };
    },
    template: `<VueSpinner v-bind="args" />`,
  }),
};

export const XLarge: Story = {
  args: {
    size: 'xlarge',
  },
  render: (args) => ({
    components: { VueSpinner },
    setup() {
      return { args };
    },
    template: `<VueSpinner v-bind="args" />`,
  }),
};

export const AllSizes: Story = {
  render: () => ({
    components: { VueSpinner },
    template: `
      <div style="display: flex; gap: 2rem; align-items: center;">
        <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
          <VueSpinner size="small" />
          <span style="font-size: 0.875rem; color: var(--ag-gray-dark);">Small</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
          <VueSpinner size="default" />
          <span style="font-size: 0.875rem; color: var(--ag-gray-dark);">Default</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
          <VueSpinner size="large" />
          <span style="font-size: 0.875rem; color: var(--ag-gray-dark);">Large</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
          <VueSpinner size="xlarge" />
          <span style="font-size: 0.875rem; color: var(--ag-gray-dark);">XLarge</span>
        </div>
      </div>
    `,
  }),
};

export const CustomColor: Story = {
  render: () => ({
    components: { VueSpinner },
    setup() {
      const styles = `
        <style>
          .custom-spinner {
            --spinner-color: var(--ag-primary);
          }
        </style>
      `;
      return { styles };
    },
    template: `
      <div>
        <div v-html="styles"></div>
        <div style="display: flex; gap: 2rem; align-items: center;">
          <VueSpinner class="custom-spinner" />
        </div>
      </div>
    `,
  }),
};

export const CustomLabel: Story = {
  args: {
    ariaLabel: 'Processing your request...',
  },
  render: (args) => ({
    components: { VueSpinner },
    setup() {
      return { args };
    },
    template: `<VueSpinner v-bind="args" />`,
  }),
};

export const CSSPartsCustomization: Story = {
  render: () => ({
    components: { VueSpinner },
    setup() {
      const styles = `
        <style>
          .custom-spinner::part(ag-spinner) {
            transform: scale(2);
          }
        </style>
      `;
      return { styles };
    },
    template: `
      <div>
        <div v-html="styles"></div>
        <div style="display: flex; gap: 2rem; align-items: center; padding: 2rem;">
          <VueSpinner class="custom-spinner" />
        </div>
      </div>
    `,
  }),
};
