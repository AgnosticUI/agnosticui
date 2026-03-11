import type { Meta, StoryObj } from '@storybook/vue3';
import { VueTabs, VueTab, VueTabPanel } from './index';

const meta = {
  title: 'AgnosticUI/Tabs',
  component: VueTabs,
  tags: ['autodocs'],
  argTypes: {
    activation: {
      control: 'select',
      options: ['manual', 'automatic'],
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
  args: { activation: 'manual', ariaLabel: 'Example tabs' },
  render: (args: any) => ({
    components: { VueTabs, VueTab, VueTabPanel },
    setup() { return { args }; },
    template: `
      <VueTabs v-bind="args">
        <VueTab panel="panel-1">Tab 1</VueTab>
        <VueTab panel="panel-2">Tab 2</VueTab>
        <VueTab panel="panel-3">Tab 3</VueTab>
        <VueTabPanel panel="panel-1">Content for Tab 1</VueTabPanel>
        <VueTabPanel panel="panel-2">Content for Tab 2</VueTabPanel>
        <VueTabPanel panel="panel-3">Content for Tab 3</VueTabPanel>
      </VueTabs>
    `,
  }),
} satisfies Meta<typeof VueTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Vertical: Story = { args: { orientation: 'vertical', ariaLabel: 'Vertical tabs' } };
