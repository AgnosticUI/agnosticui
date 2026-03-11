import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './IconButtonFx';

const meta: Meta = {
  title: 'AgnosticUI/IconButtonFx',
  component: 'ag-icon-button-fx',
  tags: ['autodocs'],
  render: (args: any) => html`<ag-icon-button-fx></ag-icon-button-fx>`,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};
