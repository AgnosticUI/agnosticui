
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { fn } from 'storybook/test';
import 'agnosticui-core/button-fx';
import type { ButtonFxProps } from 'agnosticui-core/button-fx';

const meta: Meta<ButtonFxProps> = {
  title: 'AgnosticUI/ButtonFx',
  component: 'ag-button-fx',
  argTypes: {
    // TODO
  },
  args: {
    // TODO
  },
};

export default meta;
type Story = StoryObj<ButtonFxProps>;

export const Default: Story = {
  render: (args) => html`<ag-button-fx></ag-button-fx>`,
};
