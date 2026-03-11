import type { Meta, StoryObj } from '@storybook/vue3';
import VueIcon from './VueIcon.vue';
import { Star } from 'lucide-vue-next';

const meta = {
  title: 'AgnosticUI/Icon',
  component: VueIcon,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['14', '16', '18', '20', '24', '32', '36', '48'],
    },
    type: {
      control: 'select',
      options: ['', 'info', 'action', 'success', 'warning', 'error'],
    },
    noFill: { control: 'boolean' },
  },
  args: { size: '24', type: '' },
  render: (args: any) => ({
    components: { VueIcon, Star },
    setup() { return { args }; },
    template: '<VueIcon v-bind="args" no-fill><Star /></VueIcon>',
  }),
} satisfies Meta<typeof VueIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Types: Story = {
  render: () => ({
    components: { VueIcon, Star },
    template: `
      <div style="display:flex;gap:1rem;align-items:center">
        <VueIcon no-fill><Star /></VueIcon>
        <VueIcon type="info" no-fill><Star /></VueIcon>
        <VueIcon type="success" no-fill><Star /></VueIcon>
        <VueIcon type="warning" no-fill><Star /></VueIcon>
        <VueIcon type="error" no-fill><Star /></VueIcon>
      </div>
    `,
  }),
};
export const Sizes: Story = {
  render: () => ({
    components: { VueIcon, Star },
    template: `
      <div style="display:flex;gap:1rem;align-items:center">
        <VueIcon size="16" no-fill><Star /></VueIcon>
        <VueIcon size="20" no-fill><Star /></VueIcon>
        <VueIcon size="24" no-fill><Star /></VueIcon>
        <VueIcon size="32" no-fill><Star /></VueIcon>
        <VueIcon size="48" no-fill><Star /></VueIcon>
      </div>
    `,
  }),
};
