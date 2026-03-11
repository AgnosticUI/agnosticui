import type { Meta, StoryObj } from '@storybook/vue3';
import VueBreadcrumb from './VueBreadcrumb.vue';

const ITEMS = [
  { label: 'Home', href: '#', isCurrent: false },
  { label: 'Category', href: '#', isCurrent: false },
  { label: 'Current Page', href: '#', isCurrent: true },
];

const meta = {
  title: 'AgnosticUI/Breadcrumb',
  component: VueBreadcrumb,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'slash', 'bullet', 'arrow'],
    },
  },
  args: { items: ITEMS, type: 'default' },
  render: (args: any) => ({
    components: { VueBreadcrumb },
    setup() { return { args }; },
    template: '<VueBreadcrumb v-bind="args" />',
  }),
} satisfies Meta<typeof VueBreadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Slash: Story = { args: { type: 'slash' } };
export const Arrow: Story = { args: { type: 'arrow' } };
