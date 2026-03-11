import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './Timeline';

const meta: Meta = {
  title: 'AgnosticUI/Timeline',
  component: 'ag-timeline',
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal'],
    },
    variant: {
      control: 'select',
      options: ['', 'primary', 'success', 'warning', 'danger', 'monochrome'],
    },
    compact: { control: 'boolean' },
  },
  render: (args: any) => html`<ag-timeline></ag-timeline>`,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};
