import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './ScrollProgress';

const meta: Meta = {
  title: 'AgnosticUI/ScrollProgress',
  component: 'ag-scroll-progress',
  tags: ['autodocs'],
  render: (args: any) => html`<ag-scroll-progress></ag-scroll-progress>`,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};
