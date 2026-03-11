import type { Meta, StoryObj } from '@storybook/vue3';
import VueProgress from './VueProgress.vue';

const meta = {
  title: 'AgnosticUI/Progress',
  component: VueProgress,
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'number', min: 0, max: 100 } },
    max: { control: { type: 'number' } },
    label: { control: 'text' },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
  },
  args: { value: 60, max: 100, label: 'Loading progress' },
  render: (args: any) => ({
    components: { VueProgress },
    setup() { return { args }; },
    template: '<VueProgress v-bind="args" />',
  }),
} satisfies Meta<typeof VueProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const HalfComplete: Story = { args: { value: 50, label: '50% complete' } };
export const NearlyDone: Story = { args: { value: 85, label: 'Almost there' } };
export const Indeterminate: Story = { args: { value: undefined, label: 'Loading...' } };
