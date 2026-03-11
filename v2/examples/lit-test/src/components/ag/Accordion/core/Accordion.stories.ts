import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './Accordion';

const meta: Meta = {
  title: 'AgnosticUI/Accordion',
  component: 'ag-accordion',
  tags: ['autodocs'],
  render: (args: any) => html`<ag-accordion></ag-accordion>`,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};
