import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './VisuallyHidden';

const meta: Meta = {
  title: 'AgnosticUI/VisuallyHidden',
  component: 'ag-visually-hidden',
  tags: ['autodocs'],
  render: (args: any) => html`<ag-visually-hidden></ag-visually-hidden>`,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};
