import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './MessageBubble';

const meta: Meta = {
  title: 'AgnosticUI/MessageBubble',
  component: 'ag-message-bubble',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
  },
  args: {
    label: 'MessageBubble',
  },
  render: (args: any) => html`<ag-message-bubble>${args.label}</ag-message-bubble>`,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};
