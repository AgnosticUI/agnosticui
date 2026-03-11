import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './AspectRatio';

const meta: Meta = {
  title: 'AgnosticUI/AspectRatio',
  component: 'ag-aspect-ratio',
  tags: ['autodocs'],
  render: (args: any) => html`<ag-aspect-ratio></ag-aspect-ratio>`,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};
