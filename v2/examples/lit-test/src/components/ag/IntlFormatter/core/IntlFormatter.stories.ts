import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './IntlFormatter';

const meta: Meta = {
  title: 'AgnosticUI/IntlFormatter',
  component: 'ag-intl-formatter',
  tags: ['autodocs'],
  render: (args: any) => html`<ag-intl-formatter></ag-intl-formatter>`,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};
