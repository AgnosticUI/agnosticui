export const getLitStoryTemplate = ({ pascalCaseName, kebabCaseName }) => `
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { fn } from 'storybook/test';
import 'agnosticui-core/${kebabCaseName}';
import type { ${pascalCaseName}Props } from 'agnosticui-core/${kebabCaseName}';

const meta: Meta<${pascalCaseName}Props> = {
  title: 'AgnosticUI/${pascalCaseName}',
  component: 'ag-${kebabCaseName}',
  argTypes: {
    // TODO
  },
  args: {
    // TODO
  },
};

export default meta;
type Story = StoryObj<${pascalCaseName}Props>;

export const Default: Story = {
  render: (args) => html`<ag-${kebabCaseName}></ag-${kebabCaseName}>`,
};
`;
