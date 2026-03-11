import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './ButtonFx';

const meta: Meta = {
  title: 'AgnosticUI/ButtonFx',
  component: 'ag-button-fx',
  tags: ['autodocs'],
  argTypes: {
    fx: {
      control: 'select',
      options: ['bounce', 'pulse', 'jelly', 'shake', 'pulse-wobble'],
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
    variant: {
      control: 'select',
      options: ['', 'primary', 'secondary', 'success', 'warning', 'danger', 'monochrome'],
    },
    size: {
      control: 'select',
      options: ['x-sm', 'sm', 'md', 'lg', 'xl'],
    },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
  },
  args: {
    fx: 'bounce',
    label: 'Click me',
  },
  render: (args: any) => html`<ag-button-fx fx=${args.fx}>${args.label}</ag-button-fx>`,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};
