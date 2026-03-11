import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './Progress';

const meta: Meta = {
  title: 'AgnosticUI/Progress',
  component: 'ag-progress',
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'number', min: 0, max: 100 } },
    max: { control: { type: 'number' } },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
  render: (args: any) => html`<ag-progress></ag-progress>`,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};
