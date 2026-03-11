import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './Mark';

const meta: Meta = {
  title: 'AgnosticUI/Mark',
  component: 'ag-mark',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
  },
  args: {
    label: 'Mark',
  },
  render: (args: any) => html`<ag-mark>${args.label}</ag-mark>`,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};
