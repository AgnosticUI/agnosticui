import type { Meta, StoryObj } from '@storybook/vue3';
import VueHeader from './VueHeader.vue';

const meta = {
  title: 'AgnosticUI/Header',
  component: VueHeader,
  tags: ['autodocs'],
  argTypes: {
    sticky: { control: 'boolean' },
    contentJustify: {
      control: 'select',
      options: ['start', 'end', 'between', 'around', 'center'],
    },
  },
  args: { sticky: false, contentJustify: 'between' },
  render: (args: any) => ({
    components: { VueHeader },
    setup() { return { args }; },
    template: `
      <VueHeader v-bind="args">
        <template #logo>
          <a href="#" style="text-decoration:none;font-weight:700;font-size:1.25rem">AgnosticUI</a>
        </template>
        <nav>
          <ul style="display:flex;gap:1.5rem;list-style:none;margin:0;padding:0">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </VueHeader>
    `,
  }),
} satisfies Meta<typeof VueHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
