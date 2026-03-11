import type { Meta, StoryObj } from '@storybook/vue3';
import VueButton from './VueButton.vue';

const meta = {
  title: 'AgnosticUI/Button',
  component: VueButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['', 'primary', 'secondary', 'success', 'warning', 'danger', 'monochrome'],
    },
    size: {
      control: 'select',
      options: ['x-sm', 'sm', 'md', 'lg', 'xl'],
    },
    shape: {
      control: 'select',
      options: ['', 'capsule', 'rounded', 'circle', 'square', 'rounded-square'],
    },
    bordered: { control: 'boolean' },
    ghost: { control: 'boolean' },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
  args: {
    default: 'Button',
  },
  render: (args: any) => ({
    components: { VueButton },
    setup() { return { args }; },
    template: '<VueButton v-bind="args">{{ args.default }}</VueButton>',
  }),
} satisfies Meta<typeof VueButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Variants: Story = {
  render: () => ({
    components: { VueButton },
    template: `
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <VueButton>Default</VueButton>
        <VueButton variant="primary">Primary</VueButton>
        <VueButton variant="secondary">Secondary</VueButton>
        <VueButton variant="success">Success</VueButton>
        <VueButton variant="warning">Warning</VueButton>
        <VueButton variant="danger">Danger</VueButton>
        <VueButton variant="monochrome">Monochrome</VueButton>
      </div>
    `,
  }),
};

export const Sizes: Story = {
  render: () => ({
    components: { VueButton },
    template: `
      <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">
        <VueButton size="x-sm">x-sm</VueButton>
        <VueButton size="sm">sm</VueButton>
        <VueButton size="md">md</VueButton>
        <VueButton size="lg">lg</VueButton>
        <VueButton size="xl">xl</VueButton>
      </div>
    `,
  }),
};

export const Bordered: Story = {
  render: () => ({
    components: { VueButton },
    template: `
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <VueButton bordered>Default</VueButton>
        <VueButton variant="primary" bordered>Primary</VueButton>
        <VueButton variant="success" bordered>Success</VueButton>
        <VueButton variant="danger" bordered>Danger</VueButton>
      </div>
    `,
  }),
};

export const Disabled: Story = { args: { variant: 'primary', disabled: true } };
export const Loading: Story = { args: { variant: 'primary', loading: true } };
