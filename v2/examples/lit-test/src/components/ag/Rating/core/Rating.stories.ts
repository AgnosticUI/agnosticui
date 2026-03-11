import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './Rating';

const meta: Meta = {
  title: 'AgnosticUI/Rating',
  component: 'ag-rating',
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'number', min: 0, max: 5 } },
    readonly: { control: 'boolean' },
    allowClear: { control: 'boolean' },
  },
  render: (args: any) => html`<ag-rating></ag-rating>`,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};
