import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './Radio';

const meta: Meta = {
  title: 'AgnosticUI/Radio',
  component: 'ag-radio',
  tags: ['autodocs'],
  render: (args: any) => html`<ag-radio></ag-radio>`,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};
