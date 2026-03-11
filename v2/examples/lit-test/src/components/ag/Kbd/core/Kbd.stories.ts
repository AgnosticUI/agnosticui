import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './Kbd';

const meta: Meta = {
  title: 'AgnosticUI/Kbd',
  component: 'ag-kbd',
  tags: ['autodocs'],
  argTypes: {
    bordered: { control: 'boolean' },
    background: { control: 'boolean' },
    label: { control: 'text' },
  },
  args: {
    label: 'Kbd',
  },
  render: (args: any) => html`<ag-kbd>${args.label}</ag-kbd>`,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};
