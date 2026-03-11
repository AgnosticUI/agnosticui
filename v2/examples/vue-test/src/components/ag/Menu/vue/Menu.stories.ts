import type { Meta, StoryObj } from '@storybook/vue3';
import { VueMenu, VueMenuItem, VueMenuSeparator } from './index';

const meta = {
  title: 'AgnosticUI/Menu',
  component: VueMenu,
  tags: ['autodocs'],
  argTypes: {
    buttonVariant: {
      control: 'select',
      options: ['', 'primary', 'secondary', 'success', 'warning', 'danger', 'monochrome'],
    },
    size: {
      control: 'select',
      options: ['x-sm', 'sm', 'md', 'lg', 'xl'],
    },
    disabled: { control: 'boolean' },
  },
  args: { size: 'md' },
  render: (args: any) => ({
    components: { VueMenu, VueMenuItem, VueMenuSeparator },
    setup() { return { args }; },
    template: `
      <VueMenu v-bind="args">
        <template #menu>
          <VueMenuItem value="edit">Edit</VueMenuItem>
          <VueMenuItem value="duplicate">Duplicate</VueMenuItem>
          <VueMenuSeparator />
          <VueMenuItem value="delete">Delete</VueMenuItem>
        </template>
      </VueMenu>
    `,
  }),
} satisfies Meta<typeof VueMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
