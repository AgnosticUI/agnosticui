import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './Header';

const meta: Meta = {
  title: 'AgnosticUI/Header',
  component: 'ag-header',
  tags: ['autodocs'],
  render: (args: any) => html`<ag-header></ag-header>`,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};
