import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './Avatar';

const meta: Meta = {
  title: 'AgnosticUI/Avatar',
  component: 'ag-avatar',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    shape: {
      control: 'select',
      options: ['circle', 'square', 'rounded'],
    },
    variant: {
      control: 'select',
      options: ['', 'primary', 'success', 'warning', 'danger'],
    },
  },
  render: (args: any) => html`<ag-avatar></ag-avatar>`,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};
