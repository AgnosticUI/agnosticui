import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { VueProgress } from 'agnosticui-core/progress/vue';

const meta = {
  title: 'AgnosticUI Vue/Progress',
  component: VueProgress,
  argTypes: {
    value: {
      control: 'number',
    },
    max: {
      control: 'number',
    },
    label: {
      control: 'text',
    },
  },
} satisfies Meta<typeof VueProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Default progress',
  },
};

export const WithValue: Story = {
  args: {
    label: 'Progress with value',
    value: 50,
  },
};

export const CustomMax: Story = {
  args: {
    label: 'Progress with custom max',
    value: 150,
    max: 200,
  },
};

export const Indeterminate: Story = {
  args: {
    label: 'Indeterminate progress',
  },
};

export const CSSPartsCustomization: Story = {
  args: {
    label: 'Customized with CSS Parts',
    value: 75,
  },
  render: (args) => ({
    components: { VueProgress },
    setup() {
      const styles = `
        <style>
          .custom-progress::part(progress-bar) {
            background-color: var(--ag-color-primary-light);
          }
          .custom-progress::part(progress-bar)::-webkit-progress-value {
            background-color: var(--ag-color-primary);
          }
          .custom-progress::part(progress-bar)::-moz-progress-bar {
            background-color: var(--ag-color-primary);
          }
        </style>
      `;
      return { args, styles };
    },
    template: `
      <div>
        <div v-html="styles"></div>
        <VueProgress v-bind="args" class="custom-progress" />
      </div>
    `,
  }),
};
