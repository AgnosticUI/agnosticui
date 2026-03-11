import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './Flex';

const meta: Meta = {
  title: 'AgnosticUI/Flex',
  component: 'ag-flex-row',
  tags: ['autodocs'],
  render: (args: any) => html`<ag-flex-row></ag-flex-row>`,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};
