import type { Meta, StoryObj } from '@storybook/vue3';
import VueTag from './VueTag.vue';

const meta = {
  title: 'AgnosticUI/Tag',
  component: VueTag,
  tags: ['autodocs'],
  argTypes: {
    uppercase: { control: 'boolean' },
    removable: { control: 'boolean' },
  },
  args: {
    default: 'Tag',
  },
  render: (args: any) => ({
    components: { VueTag },
    setup() { return { args }; },
    template: '<VueTag v-bind="args">{{ args.default }}</VueTag>',
  }),
} satisfies Meta<typeof VueTag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
