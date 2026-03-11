import type { Meta, StoryObj } from '@storybook/vue3';
import VueProgressRing from './VueProgressRing.vue';

const meta = {
  title: 'AgnosticUI/ProgressRing',
  component: VueProgressRing,
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    variant: { control: 'select', options: ['primary', 'success', 'warning', 'danger', 'info'] },
    label: { control: 'text' },
  },
  args: { value: 65, size: 'medium', variant: 'primary', label: 'Progress' },
  render: (args: any) => ({
    components: { VueProgressRing },
    setup() { return { args }; },
    template: '<VueProgressRing v-bind="args" />',
  }),
} satisfies Meta<typeof VueProgressRing>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Variants: Story = {
  render: () => ({
    components: { VueProgressRing },
    template: `
      <div style="display:flex;gap:1.5rem;align-items:center;flex-wrap:wrap">
        <VueProgressRing :value="65" variant="primary" label="Primary" />
        <VueProgressRing :value="80" variant="success" label="Success" />
        <VueProgressRing :value="45" variant="warning" label="Warning" />
        <VueProgressRing :value="30" variant="danger" label="Danger" />
        <VueProgressRing :value="55" variant="info" label="Info" />
      </div>
    `,
  }),
};
export const Sizes: Story = {
  render: () => ({
    components: { VueProgressRing },
    template: `
      <div style="display:flex;gap:1.5rem;align-items:center;flex-wrap:wrap">
        <VueProgressRing :value="65" size="small" label="Small" />
        <VueProgressRing :value="65" size="medium" label="Medium" />
        <VueProgressRing :value="65" size="large" label="Large" />
      </div>
    `,
  }),
};
