import type { Meta, StoryObj } from '@storybook/vue3';
import VueIntlFormatter from './VueIntlFormatter.vue';

const meta = {
  title: 'AgnosticUI/IntlFormatter',
  component: VueIntlFormatter,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['date', 'number', 'percent', 'currency'],
    },
    lang: { control: 'text' },
  },
  args: { type: 'number', value: 1234567.89, lang: 'en-US' },
  render: (args: any) => ({
    components: { VueIntlFormatter },
    setup() { return { args }; },
    template: '<VueIntlFormatter v-bind="args" />',
  }),
} satisfies Meta<typeof VueIntlFormatter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Currency: Story = {
  args: { type: 'currency', value: 9999.99, currency: 'USD', lang: 'en-US' },
};
export const Date: Story = {
  args: { type: 'date', date: '2024-06-15', dateStyle: 'long', lang: 'en-US' },
};
export const Percent: Story = {
  args: { type: 'percent', value: 0.754, lang: 'en-US' },
};
