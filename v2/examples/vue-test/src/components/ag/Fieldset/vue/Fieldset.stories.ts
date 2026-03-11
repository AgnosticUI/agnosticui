import type { Meta, StoryObj } from '@storybook/vue3';
import VueFieldset from './VueFieldset.vue';
import VueInput from '../../Input/vue/VueInput.vue';
import VueCheckbox from '../../Checkbox/vue/VueCheckbox.vue';

const meta = {
  title: 'AgnosticUI/Fieldset',
  component: VueFieldset,
  tags: ['autodocs'],
  argTypes: {
    bordered: { control: 'boolean' },
    layout: { control: 'select', options: ['vertical', 'horizontal'] },
    legendHidden: { control: 'boolean' },
    legend: { control: 'text' },
  },
  args: { legend: 'Personal Information', bordered: false, layout: 'vertical' },
  render: (args: any) => ({
    components: { VueFieldset, VueInput },
    setup() { return { args }; },
    template: `
      <VueFieldset v-bind="args">
        <VueInput label="First Name" type="text" />
        <VueInput label="Last Name" type="text" />
        <VueInput label="Email" type="email" />
      </VueFieldset>
    `,
  }),
} satisfies Meta<typeof VueFieldset>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Bordered: Story = { args: { legend: 'Contact Preferences', bordered: true } };
export const Horizontal: Story = { args: { legend: 'Options', layout: 'horizontal' } };
