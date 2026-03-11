import type { Meta, StoryObj } from '@storybook/vue3';
import VueFlexRow from './VueFlexRow.vue';

const meta = {
  title: 'AgnosticUI/Flex',
  component: VueFlexRow,
  tags: ['autodocs'],
  argTypes: {
    justify: {
      control: 'select',
      options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],
    },
    wrap: {
      control: 'select',
      options: ['nowrap', 'wrap', 'wrap-reverse'],
    },
    align: {
      control: 'select',
      options: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
    },
  },
  render: (args: any) => ({
    components: { VueFlexRow },
    setup() { return { args }; },
    template: `
      <VueFlexRow v-bind="args" style="--flex-gap: 1rem">
        <div style="padding:1rem;background:#e0e7ff;border:1px solid #6366f1">Item 1</div>
        <div style="padding:1rem;background:#dbeafe;border:1px solid #3b82f6">Item 2</div>
        <div style="padding:1rem;background:#ddd6fe;border:1px solid #8b5cf6">Item 3</div>
      </VueFlexRow>
    `,
  }),
} satisfies Meta<typeof VueFlexRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Centered: Story = { args: { justify: 'center' } };
export const SpaceBetween: Story = { args: { justify: 'space-between' } };
