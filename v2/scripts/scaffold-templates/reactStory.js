export const getReactStoryTemplate = ({ pascalCaseName, kebabCaseName }) => `
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import { React${pascalCaseName} } from 'agnosticui-core/${kebabCaseName}/react';

const meta: Meta<typeof React${pascalCaseName}> = {
  title: 'AgnosticUI/${pascalCaseName}',
  component: React${pascalCaseName},
  argTypes: {
    // TODO
  },
  args: {
    // TODO
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <React${pascalCaseName} {...args} />,
};
`;
