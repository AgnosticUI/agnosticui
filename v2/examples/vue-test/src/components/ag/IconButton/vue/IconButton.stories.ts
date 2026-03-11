import type { Meta, StoryObj } from '@storybook/vue3';
import VueIconButton from './VueIconButton.vue';

const meta = {
  title: 'AgnosticUI/IconButton',
  component: VueIconButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'ghost', 'monochrome'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    label: { control: 'text' },
    unicode: { control: 'text' },
  },
  args: { label: 'Action', unicode: '★', size: 'md', variant: 'primary' },
  render: (args: any) => ({
    components: { VueIconButton },
    setup() { return { args }; },
    template: '<VueIconButton v-bind="args" />',
  }),
} satisfies Meta<typeof VueIconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Variants: Story = {
  render: () => ({
    components: { VueIconButton },
    template: `
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <VueIconButton label="Primary" unicode="★" variant="primary" />
        <VueIconButton label="Secondary" unicode="★" variant="secondary" />
        <VueIconButton label="Success" unicode="★" variant="success" />
        <VueIconButton label="Danger" unicode="★" variant="danger" />
        <VueIconButton label="Ghost" unicode="★" variant="ghost" />
      </div>
    `,
  }),
};
export const Sizes: Story = {
  render: () => ({
    components: { VueIconButton },
    template: `
      <div style="display:flex;gap:8px;align-items:center">
        <VueIconButton label="XS" unicode="★" size="xs" variant="primary" />
        <VueIconButton label="SM" unicode="★" size="sm" variant="primary" />
        <VueIconButton label="MD" unicode="★" size="md" variant="primary" />
        <VueIconButton label="LG" unicode="★" size="lg" variant="primary" />
        <VueIconButton label="XL" unicode="★" size="xl" variant="primary" />
      </div>
    `,
  }),
};
