import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './Icon';

const meta: Meta = {
  title: 'AgnosticUI/Icon',
  component: 'ag-icon',
  tags: ['autodocs'],
  render: (args: any) => html`<ag-icon></ag-icon>`,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};
