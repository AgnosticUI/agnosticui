import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { VueLoader } from '../../../../lib/src/components/Loader/vue';

const meta = {
  title: 'AgnosticUI Vue/Loader',
  component: VueLoader,
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: 'Loader size',
    },
    ariaLabel: { control: 'text', description: 'Screen reader text' },
  },
  args: {
    size: 'default',
    ariaLabel: 'Loading...',
  },
} satisfies Meta<typeof VueLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { VueLoader },
    setup() {
      return { args };
    },
    template: `<VueLoader v-bind="args" />`,
  }),
};

export const Small: Story = {
  args: {
    size: 'small',
  },
  render: (args) => ({
    components: { VueLoader },
    setup() {
      return { args };
    },
    template: `<VueLoader v-bind="args" />`,
  }),
};

export const Large: Story = {
  args: {
    size: 'large',
  },
  render: (args) => ({
    components: { VueLoader },
    setup() {
      return { args };
    },
    template: `<VueLoader v-bind="args" />`,
  }),
};

export const AllSizes: Story = {
  render: () => ({
    components: { VueLoader },
    template: `
      <div style="display: flex; gap: 2rem; align-items: center;">
        <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
          <VueLoader size="small" />
          <span style="font-size: 0.875rem; color: var(--ag-gray-dark);">Small</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
          <VueLoader size="default" />
          <span style="font-size: 0.875rem; color: var(--ag-gray-dark);">Default</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
          <VueLoader size="large" />
          <span style="font-size: 0.875rem; color: var(--ag-gray-dark);">Large</span>
        </div>
      </div>
    `,
  }),
};

export const CustomColor: Story = {
  render: () => ({
    components: { VueLoader },
    setup() {
      const styles = `
        <style>
          .custom-loader {
            --loading-color: var(--ag-primary);
          }
        </style>
      `;
      return { styles };
    },
    template: `
      <div>
        <div v-html="styles"></div>
        <div style="display: flex; gap: 2rem; align-items: center;">
          <VueLoader class="custom-loader" />
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
    components: { VueLoader },
    setup() {
      return { args };
    },
    template: `<VueLoader v-bind="args" />`,
  }),
};

export const CSSPartsCustomization: Story = {
  render: () => ({
    components: { VueLoader },
    setup() {
      const styles = `
        <style>
          .custom-loader::part(ag-loader) {
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
          <VueLoader class="custom-loader" />
        </div>
      </div>
    `,
  }),
};
