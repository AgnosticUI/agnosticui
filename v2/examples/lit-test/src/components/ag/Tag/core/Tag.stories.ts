import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './Tag';

const meta: Meta = {
  title: 'AgnosticUI/Tag',
  component: 'ag-tag',
  tags: ['autodocs'],
  argTypes: {
    uppercase: { control: 'boolean' },
    removable: { control: 'boolean' },
    label: { control: 'text' },
  },
  args: {
    label: 'Tag',
  },
  render: (args: any) => html`<ag-tag>${args.label}</ag-tag>`,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};
