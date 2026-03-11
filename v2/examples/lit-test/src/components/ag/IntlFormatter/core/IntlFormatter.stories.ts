import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './IntlFormatter';

const meta: Meta = {
  title: 'AgnosticUI/IntlFormatter',
  component: 'ag-intl-formatter',
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['number', 'date', 'currency', 'percent'] },
    lang: { control: 'text' },
    value: { control: 'text' },
  },
  args: { type: 'number', value: '1234567.89', lang: 'en-US' },
  render: (args: any) => html`
    <ag-intl-formatter
      .type=${args.type}
      .value=${args.value}
      .lang=${args.lang}
    ></ag-intl-formatter>
  `,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const Currency: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
      <ag-intl-formatter .type=${'currency'} .value=${'1234.56'} .lang=${'en-US'} .currency=${'USD'}></ag-intl-formatter>
      <ag-intl-formatter .type=${'currency'} .value=${'1234.56'} .lang=${'de-DE'} .currency=${'EUR'}></ag-intl-formatter>
    </div>
  `,
};

export const DateFormat: Story = {
  render: () => html`
    <ag-intl-formatter .type=${'date'} .date=${new Date().toISOString()} .lang=${'en-US'} .dateStyle=${'long'}></ag-intl-formatter>
  `,
};
