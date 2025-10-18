export const getVueStoryTemplate = ({ pascalCaseName, kebabCaseName }) => `
import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from 'storybook/test';
import { Vue${pascalCaseName} } from 'agnosticui-core/${kebabCaseName}/vue';

const meta = {
  title: 'AgnosticUI/${pascalCaseName}',
  component: Vue${pascalCaseName},
  argTypes: {
    // TODO
  },
  args: {
    // TODO
  },
} satisfies Meta<typeof Vue${pascalCaseName}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { Vue${pascalCaseName} },
    setup() {
      return { args };
    },
    template: \`<Vue${pascalCaseName} v-bind="args" />\`,
  }),
};
`