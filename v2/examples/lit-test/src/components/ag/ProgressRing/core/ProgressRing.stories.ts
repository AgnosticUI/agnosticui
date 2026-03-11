import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './ProgressRing';

const meta: Meta = {
  title: 'AgnosticUI/ProgressRing',
  component: 'ag-progress-ring',
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'number', min: 0, max: 100 } },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'danger', 'info'],
    },
  },
  render: (args: any) => html`<ag-progress-ring></ag-progress-ring>`,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};
