import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from 'storybook/test';
import { VueTooltip, type VueTooltipProps } from '../../../../lib/src/components/Tooltip/vue';

const meta = {
  title: 'AgnosticUI/Tooltip',
  component: VueTooltip,
  tags: ['autodocs'],
  argTypes: {
    placement: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      description: 'Tooltip placement',
    },
    content: {
      control: 'text',
      description: 'Tooltip content text',
    },
  },
  args: {
    content: 'Tooltip content',
    placement: 'top',
  },
} satisfies Meta<typeof VueTooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: 'This is the tooltip content',
    placement: 'top',
  },
  render: (args: VueTooltipProps) => ({
    components: { VueTooltip },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 50px;">
        <VueTooltip v-bind="args">
          <button>Hover over me</button>
        </VueTooltip>
      </div>
    `,
  }),
};

export const TopPlacement: Story = {
  args: {
    placement: 'top',
    content: 'This is a tooltip on the top',
  },
  render: (args: VueTooltipProps) => ({
    components: { VueTooltip },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 50px;">
        <VueTooltip v-bind="args">
          <button>Top Tooltip</button>
        </VueTooltip>
      </div>
    `,
  }),
};

export const RightPlacement: Story = {
  args: {
    placement: 'right',
    content: 'This is a tooltip on the right',
  },
  render: (args: VueTooltipProps) => ({
    components: { VueTooltip },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 50px;">
        <VueTooltip v-bind="args">
          <button>Right Tooltip</button>
        </VueTooltip>
      </div>
    `,
  }),
};

export const BottomPlacement: Story = {
  args: {
    placement: 'bottom',
    content: 'This is a tooltip on the bottom',
  },
  render: (args: VueTooltipProps) => ({
    components: { VueTooltip },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 50px;">
        <VueTooltip v-bind="args">
          <button>Bottom Tooltip</button>
        </VueTooltip>
      </div>
    `,
  }),
};

export const LeftPlacement: Story = {
  args: {
    placement: 'left',
    content: 'This is a tooltip on the left',
  },
  render: (args: VueTooltipProps) => ({
    components: { VueTooltip },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 50px;">
        <VueTooltip v-bind="args">
          <button>Left Tooltip</button>
        </VueTooltip>
      </div>
    `,
  }),
};