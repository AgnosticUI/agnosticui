import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './Image';

const meta: Meta = {
  title: 'AgnosticUI/Image',
  component: 'ag-image',
  tags: ['autodocs'],
  render: (args: any) => html`<ag-image></ag-image>`,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};
