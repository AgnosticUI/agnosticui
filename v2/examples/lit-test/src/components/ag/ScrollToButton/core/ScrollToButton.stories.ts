import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './ScrollToButton';

const meta: Meta = {
  title: 'AgnosticUI/ScrollToButton',
  component: 'ag-scroll-to-button',
  tags: ['autodocs'],
  render: (args: any) => html`<ag-scroll-to-button></ag-scroll-to-button>`,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};
