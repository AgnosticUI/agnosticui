import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './Spinner';

const meta: Meta = {
  title: 'AgnosticUI/Spinner',
  component: 'ag-spinner',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
  render: (args: any) => html`<ag-spinner></ag-spinner>`,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};
