import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './Fieldset';

const meta: Meta = {
  title: 'AgnosticUI/Fieldset',
  component: 'ag-fieldset',
  tags: ['autodocs'],
  render: (args: any) => html`<ag-fieldset></ag-fieldset>`,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};
