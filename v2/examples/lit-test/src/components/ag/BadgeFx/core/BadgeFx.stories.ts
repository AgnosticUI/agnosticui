import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './BadgeFx';

const meta: Meta = {
  title: 'AgnosticUI/BadgeFx',
  component: 'ag-badge-fx',
  tags: ['autodocs'],
  argTypes: {
    fx: {
      control: 'select',
      options: ['bounce', 'pulse', 'jelly'],
    },
    fxSpeed: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    fxEase: {
      control: 'select',
      options: ['ease', 'ease-in', 'ease-out', 'ease-in-out', 'bounce', 'spring-sm', 'spring-md', 'spring-lg'],
    },
    fxDisabled: { control: 'boolean' },
    label: { control: 'text' },
  },
  args: {
    fx: 'bounce',
    label: 'BadgeFx',
  },
  render: (args: any) => html`<ag-badge-fx fx=${args.fx}>${args.label}</ag-badge-fx>`,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};
