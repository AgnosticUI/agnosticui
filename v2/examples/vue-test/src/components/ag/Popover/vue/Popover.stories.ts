import type { Meta, StoryObj } from '@storybook/vue3';
import VuePopover from './VuePopover.vue';

const meta = {
  title: 'AgnosticUI/Popover',
  component: VuePopover,
  tags: ['autodocs'],
  argTypes: {
    placement: {
      control: 'select',
      options: ['top', 'top-start', 'top-end', 'right', 'bottom', 'bottom-start', 'bottom-end', 'left'],
    },
    triggerType: {
      control: 'select',
      options: ['click', 'hover', 'focus'],
    },
    arrow: { control: 'boolean' },
    showCloseButton: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: { placement: 'bottom', arrow: true, triggerType: 'click', showCloseButton: true },
  render: (args: any) => ({
    components: { VuePopover },
    setup() { return { args }; },
    template: `
      <VuePopover v-bind="args">
        <button slot="trigger">Open Popover</button>
        <span slot="title">Popover Title</span>
        <div slot="content">
          <p>Popover content goes here.</p>
        </div>
      </VuePopover>
    `,
  }),
} satisfies Meta<typeof VuePopover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const HoverTrigger: Story = {
  args: { triggerType: 'hover' },
  render: (args: any) => ({
    components: { VuePopover },
    setup() { return { args }; },
    template: `
      <VuePopover v-bind="args">
        <button slot="trigger">Hover Me</button>
        <span slot="title">Hover Popover</span>
        <div slot="content"><p>Opens on hover.</p></div>
      </VuePopover>
    `,
  }),
};
