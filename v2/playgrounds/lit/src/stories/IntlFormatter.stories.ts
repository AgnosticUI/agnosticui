import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import "agnosticui-core/intl-formatter";

const meta: Meta = {
  title: 'AgnosticUI Lit/IntlFormatter',
  component: 'ag-intl-formatter',
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['date', 'number', 'percent', 'currency'],
      description: 'The type of formatting to apply',
    },
    lang: {
      control: 'text',
      description: 'Locale for formatting (e.g., en-US, fr-FR, de-DE)',
    },
    // Date-specific
    date: {
      control: 'text',
      if: { arg: 'type', eq: 'date' },
      description: 'The date value to format',
    },
    dateStyle: {
      control: 'select',
      options: ['full', 'long', 'medium', 'short'],
      if: { arg: 'type', eq: 'date' },
      description: 'Shortcut for date formatting style',
    },
    timeStyle: {
      control: 'select',
      options: ['full', 'long', 'medium', 'short'],
      if: { arg: 'type', eq: 'date' },
      description: 'Shortcut for time formatting style',
    },
    weekday: {
      control: 'select',
      options: ['narrow', 'short', 'long'],
      if: { arg: 'type', eq: 'date' },
    },
    year: {
      control: 'select',
      options: ['numeric', '2-digit'],
      if: { arg: 'type', eq: 'date' },
    },
    month: {
      control: 'select',
      options: ['numeric', '2-digit', 'narrow', 'short', 'long'],
      if: { arg: 'type', eq: 'date' },
    },
    day: {
      control: 'select',
      options: ['numeric', '2-digit'],
      if: { arg: 'type', eq: 'date' },
    },
    hour: {
      control: 'select',
      options: ['numeric', '2-digit'],
      if: { arg: 'type', eq: 'date' },
    },
    minute: {
      control: 'select',
      options: ['numeric', '2-digit'],
      if: { arg: 'type', eq: 'date' },
    },
    second: {
      control: 'select',
      options: ['numeric', '2-digit'],
      if: { arg: 'type', eq: 'date' },
    },
    hourFormat: {
      control: 'select',
      options: ['auto', '12', '24'],
      if: { arg: 'type', eq: 'date' },
    },
    timeZone: {
      control: 'text',
      if: { arg: 'type', eq: 'date' },
      description: 'IANA timezone (e.g., America/New_York)',
    },
    // Number-specific
    value: {
      control: 'number',
      if: { arg: 'type', neq: 'date' },
      description: 'The numeric value to format',
    },
    noGrouping: {
      control: 'boolean',
      if: { arg: 'type', neq: 'date' },
      description: 'Disable grouping separators',
    },
    minimumFractionDigits: {
      control: 'number',
      if: { arg: 'type', neq: 'date' },
    },
    maximumFractionDigits: {
      control: 'number',
      if: { arg: 'type', neq: 'date' },
    },
    minimumIntegerDigits: {
      control: 'number',
      if: { arg: 'type', neq: 'date' },
    },
    // Currency-specific
    currency: {
      control: 'text',
      if: { arg: 'type', eq: 'currency' },
      description: 'ISO 4217 currency code (e.g., USD, EUR, JPY)',
    },
    currencyDisplay: {
      control: 'select',
      options: ['symbol', 'narrowSymbol', 'code', 'name'],
      if: { arg: 'type', eq: 'currency' },
    },
  },
};

export default meta;
type Story = StoryObj;

// Date Stories
export const DateDefault: Story = {
  args: {
    type: 'date',
    date: '2024-01-15T14:30:00',
    lang: 'en-US',
  },
  render: (args) => html`
    <ag-intl-formatter
      type=${args.type}
      date=${args.date}
      lang=${args.lang}
    ></ag-intl-formatter>
  `,
};

export const DateWithStyles: Story = {
  args: {
    type: 'date',
    date: '2024-01-15T14:30:00',
    dateStyle: 'full',
    timeStyle: 'short',
    lang: 'en-US',
  },
  render: (args) => html`
    <ag-intl-formatter
      type=${args.type}
      date=${args.date}
      date-style=${args.dateStyle}
      time-style=${args.timeStyle}
      lang=${args.lang}
    ></ag-intl-formatter>
  `,
};

export const DateCustomFormat: Story = {
  args: {
    type: 'date',
    date: '2024-01-15T14:30:00',
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    lang: 'en-US',
  },
  render: (args) => html`
    <ag-intl-formatter
      type=${args.type}
      date=${args.date}
      weekday=${args.weekday}
      year=${args.year}
      month=${args.month}
      day=${args.day}
      lang=${args.lang}
    ></ag-intl-formatter>
  `,
};

export const DateWithTime: Story = {
  args: {
    type: 'date',
    date: '2024-01-15T14:30:00',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hourFormat: '12',
    lang: 'en-US',
  },
  render: (args) => html`
    <ag-intl-formatter
      type=${args.type}
      date=${args.date}
      year=${args.year}
      month=${args.month}
      day=${args.day}
      hour=${args.hour}
      minute=${args.minute}
      hour-format=${args.hourFormat}
      lang=${args.lang}
    ></ag-intl-formatter>
  `,
};

export const Date24Hour: Story = {
  args: {
    type: 'date',
    date: '2024-01-15T14:30:00',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourFormat: '24',
    lang: 'en-US',
  },
  render: (args) => html`
    <ag-intl-formatter
      type=${args.type}
      date=${args.date}
      hour=${args.hour}
      minute=${args.minute}
      second=${args.second}
      hour-format=${args.hourFormat}
      lang=${args.lang}
    ></ag-intl-formatter>
  `,
};

export const DateLocalized: Story = {
  name: 'Date - Multiple Locales',
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <div>
        <strong>English (US):</strong>
        <ag-intl-formatter
          type="date"
          date="2024-01-15T14:30:00"
          date-style="full"
          time-style="short"
          lang="en-US"
        ></ag-intl-formatter>
      </div>
      <div>
        <strong>French:</strong>
        <ag-intl-formatter
          type="date"
          date="2024-01-15T14:30:00"
          date-style="full"
          time-style="short"
          lang="fr-FR"
        ></ag-intl-formatter>
      </div>
      <div>
        <strong>German:</strong>
        <ag-intl-formatter
          type="date"
          date="2024-01-15T14:30:00"
          date-style="full"
          time-style="short"
          lang="de-DE"
        ></ag-intl-formatter>
      </div>
      <div>
        <strong>Japanese:</strong>
        <ag-intl-formatter
          type="date"
          date="2024-01-15T14:30:00"
          date-style="full"
          time-style="short"
          lang="ja-JP"
        ></ag-intl-formatter>
      </div>
      <div>
        <strong>Arabic:</strong>
        <ag-intl-formatter
          type="date"
          date="2024-01-15T14:30:00"
          date-style="full"
          time-style="short"
          lang="ar-SA"
        ></ag-intl-formatter>
      </div>
    </div>
  `,
};

// Number Stories
export const NumberDefault: Story = {
  args: {
    type: 'number',
    value: 1234567.89,
    lang: 'en-US',
  },
  render: (args) => html`
    <ag-intl-formatter
      type=${args.type}
      value=${args.value}
      lang=${args.lang}
    ></ag-intl-formatter>
  `,
};

export const NumberNoGrouping: Story = {
  args: {
    type: 'number',
    value: 1234567.89,
    noGrouping: true,
    lang: 'en-US',
  },
  render: (args) => html`
    <ag-intl-formatter
      type=${args.type}
      value=${args.value}
      no-grouping=${args.noGrouping}
      lang=${args.lang}
    ></ag-intl-formatter>
  `,
};

export const NumberFixedDecimals: Story = {
  args: {
    type: 'number',
    value: 100,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    lang: 'en-US',
  },
  render: (args) => html`
    <ag-intl-formatter
      type=${args.type}
      value=${args.value}
      minimum-fraction-digits=${args.minimumFractionDigits}
      maximum-fraction-digits=${args.maximumFractionDigits}
      lang=${args.lang}
    ></ag-intl-formatter>
  `,
};

export const NumberLocalized: Story = {
  name: 'Number - Multiple Locales',
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <div>
        <strong>English (US):</strong>
        <ag-intl-formatter
          type="number"
          value="1234567.89"
          lang="en-US"
        ></ag-intl-formatter>
      </div>
      <div>
        <strong>French:</strong>
        <ag-intl-formatter
          type="number"
          value="1234567.89"
          lang="fr-FR"
        ></ag-intl-formatter>
      </div>
      <div>
        <strong>German:</strong>
        <ag-intl-formatter
          type="number"
          value="1234567.89"
          lang="de-DE"
        ></ag-intl-formatter>
      </div>
      <div>
        <strong>Indian (Hindi):</strong>
        <ag-intl-formatter
          type="number"
          value="1234567.89"
          lang="hi-IN"
        ></ag-intl-formatter>
      </div>
    </div>
  `,
};

// Currency Stories
export const CurrencyUSD: Story = {
  args: {
    type: 'currency',
    value: 1234.56,
    currency: 'USD',
    lang: 'en-US',
  },
  render: (args) => html`
    <ag-intl-formatter
      type=${args.type}
      value=${args.value}
      currency=${args.currency}
      lang=${args.lang}
    ></ag-intl-formatter>
  `,
};

export const CurrencyEUR: Story = {
  args: {
    type: 'currency',
    value: 1234.56,
    currency: 'EUR',
    lang: 'en-US',
  },
  render: (args) => html`
    <ag-intl-formatter
      type=${args.type}
      value=${args.value}
      currency=${args.currency}
      lang=${args.lang}
    ></ag-intl-formatter>
  `,
};

export const CurrencyWithCode: Story = {
  args: {
    type: 'currency',
    value: 1234.56,
    currency: 'USD',
    currencyDisplay: 'code',
    lang: 'en-US',
  },
  render: (args) => html`
    <ag-intl-formatter
      type=${args.type}
      value=${args.value}
      currency=${args.currency}
      currency-display=${args.currencyDisplay}
      lang=${args.lang}
    ></ag-intl-formatter>
  `,
};

export const CurrencyWithName: Story = {
  args: {
    type: 'currency',
    value: 1234.56,
    currency: 'USD',
    currencyDisplay: 'name',
    lang: 'en-US',
  },
  render: (args) => html`
    <ag-intl-formatter
      type=${args.type}
      value=${args.value}
      currency=${args.currency}
      currency-display=${args.currencyDisplay}
      lang=${args.lang}
    ></ag-intl-formatter>
  `,
};

export const CurrencyLocalized: Story = {
  name: 'Currency - Multiple Locales',
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <div>
        <strong>USD in US:</strong>
        <ag-intl-formatter
          type="currency"
          value="1234.56"
          currency="USD"
          lang="en-US"
        ></ag-intl-formatter>
      </div>
      <div>
        <strong>EUR in Germany:</strong>
        <ag-intl-formatter
          type="currency"
          value="1234.56"
          currency="EUR"
          lang="de-DE"
        ></ag-intl-formatter>
      </div>
      <div>
        <strong>GBP in UK:</strong>
        <ag-intl-formatter
          type="currency"
          value="1234.56"
          currency="GBP"
          lang="en-GB"
        ></ag-intl-formatter>
      </div>
      <div>
        <strong>JPY in Japan:</strong>
        <ag-intl-formatter
          type="currency"
          value="123456"
          currency="JPY"
          lang="ja-JP"
        ></ag-intl-formatter>
      </div>
      <div>
        <strong>INR in India:</strong>
        <ag-intl-formatter
          type="currency"
          value="123456.78"
          currency="INR"
          lang="hi-IN"
        ></ag-intl-formatter>
      </div>
    </div>
  `,
};

export const CurrencyComparison: Story = {
  name: 'Currency - Display Formats',
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <div>
        <strong>Symbol (default):</strong>
        <ag-intl-formatter
          type="currency"
          value="1234.56"
          currency="USD"
          currency-display="symbol"
          lang="en-US"
        ></ag-intl-formatter>
      </div>
      <div>
        <strong>Narrow Symbol:</strong>
        <ag-intl-formatter
          type="currency"
          value="1234.56"
          currency="USD"
          currency-display="narrowSymbol"
          lang="en-US"
        ></ag-intl-formatter>
      </div>
      <div>
        <strong>Code:</strong>
        <ag-intl-formatter
          type="currency"
          value="1234.56"
          currency="USD"
          currency-display="code"
          lang="en-US"
        ></ag-intl-formatter>
      </div>
      <div>
        <strong>Name:</strong>
        <ag-intl-formatter
          type="currency"
          value="1234.56"
          currency="USD"
          currency-display="name"
          lang="en-US"
        ></ag-intl-formatter>
      </div>
    </div>
  `,
};

// Percent Stories
export const PercentDefault: Story = {
  args: {
    type: 'percent',
    value: 0.75,
    lang: 'en-US',
  },
  render: (args) => html`
    <ag-intl-formatter
      type=${args.type}
      value=${args.value}
      lang=${args.lang}
    ></ag-intl-formatter>
  `,
};

export const PercentWithDecimals: Story = {
  args: {
    type: 'percent',
    value: 0.8532,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    lang: 'en-US',
  },
  render: (args) => html`
    <ag-intl-formatter
      type=${args.type}
      value=${args.value}
      minimum-fraction-digits=${args.minimumFractionDigits}
      maximum-fraction-digits=${args.maximumFractionDigits}
      lang=${args.lang}
    ></ag-intl-formatter>
  `,
};

export const PercentLocalized: Story = {
  name: 'Percent - Multiple Locales',
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <div>
        <strong>English (US):</strong>
        <ag-intl-formatter
          type="percent"
          value="0.8532"
          minimum-fraction-digits="2"
          lang="en-US"
        ></ag-intl-formatter>
      </div>
      <div>
        <strong>French:</strong>
        <ag-intl-formatter
          type="percent"
          value="0.8532"
          minimum-fraction-digits="2"
          lang="fr-FR"
        ></ag-intl-formatter>
      </div>
      <div>
        <strong>German:</strong>
        <ag-intl-formatter
          type="percent"
          value="0.8532"
          minimum-fraction-digits="2"
          lang="de-DE"
        ></ag-intl-formatter>
      </div>
    </div>
  `,
};

// Styling Examples
export const StyledWithCSSParts: Story = {
  name: 'Styled with CSS Parts',
  render: () => html`
    <style>
      .styled-demo ag-intl-formatter::part(currency) {
        color: #16a34a;
        font-weight: bold;
        font-size: 1.25rem;
      }
      
      .styled-demo ag-intl-formatter::part(number) {
        font-family: 'Courier New', monospace;
        background: #f3f4f6;
        padding: 0.25rem 0.5rem;
        border-radius: 0.25rem;
      }
      
      .styled-demo ag-intl-formatter::part(date-time) {
        color: #2563eb;
        font-style: italic;
      }
      
      .styled-demo ag-intl-formatter::part(percent) {
        color: #dc2626;
        font-weight: 600;
      }
    </style>
    <div class="styled-demo" style="display: flex; flex-direction: column; gap: 1rem;">
      <div>
        <strong>Styled Currency:</strong>
        <ag-intl-formatter
          type="currency"
          value="1234.56"
          currency="USD"
          lang="en-US"
        ></ag-intl-formatter>
      </div>
      <div>
        <strong>Styled Number:</strong>
        <ag-intl-formatter
          type="number"
          value="1234567.89"
          lang="en-US"
        ></ag-intl-formatter>
      </div>
      <div>
        <strong>Styled Date:</strong>
        <ag-intl-formatter
          type="date"
          date="2024-01-15T14:30:00"
          date-style="long"
          time-style="short"
          lang="en-US"
        ></ag-intl-formatter>
      </div>
      <div>
        <strong>Styled Percent:</strong>
        <ag-intl-formatter
          type="percent"
          value="0.75"
          lang="en-US"
        ></ag-intl-formatter>
      </div>
    </div>
  `,
};

// Error Handling
export const ErrorHandling: Story = {
  name: 'Error Handling',
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <div>
        <strong>Invalid Date:</strong>
        <ag-intl-formatter
          type="date"
          date="invalid-date"
          lang="en-US"
          @format-error=${(e: CustomEvent) => {
            console.error('Format error:', e.detail);
          }}
        ></ag-intl-formatter>
        <em style="color: #6b7280; font-size: 0.875rem;">(Check console for error event)</em>
      </div>
      <div>
        <strong>Missing Currency Code:</strong>
        <ag-intl-formatter
          type="currency"
          value="1234.56"
          currency=""
          lang="en-US"
          @format-error=${(e: CustomEvent) => {
            console.error('Format error:', e.detail);
          }}
        ></ag-intl-formatter>
        <em style="color: #6b7280; font-size: 0.875rem;">(Check console for error event)</em>
      </div>
    </div>
  `,
};

// Real-world Examples
export const RealWorldPriceTable: Story = {
  name: 'Real World - Price Table',
  render: () => html`
    <style>
      .price-table {
        border-collapse: collapse;
        width: 100%;
        max-width: 600px;
      }
      .price-table th,
      .price-table td {
        padding: 0.75rem;
        text-align: left;
        border-bottom: 1px solid #e5e7eb;
      }
      .price-table th {
        background: #f9fafb;
        font-weight: 600;
      }
      .price-table tr:hover {
        background: #f9fafb;
      }
    </style>
    <table class="price-table">
      <thead>
        <tr>
          <th>Product</th>
          <th>Price (USD)</th>
          <th>Price (EUR)</th>
          <th>Price (JPY)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Basic Plan</td>
          <td>
            <ag-intl-formatter
              type="currency"
              value="9.99"
              currency="USD"
              lang="en-US"
            ></ag-intl-formatter>
          </td>
          <td>
            <ag-intl-formatter
              type="currency"
              value="8.99"
              currency="EUR"
              lang="de-DE"
            ></ag-intl-formatter>
          </td>
          <td>
            <ag-intl-formatter
              type="currency"
              value="1099"
              currency="JPY"
              lang="ja-JP"
            ></ag-intl-formatter>
          </td>
        </tr>
        <tr>
          <td>Pro Plan</td>
          <td>
            <ag-intl-formatter
              type="currency"
              value="29.99"
              currency="USD"
              lang="en-US"
            ></ag-intl-formatter>
          </td>
          <td>
            <ag-intl-formatter
              type="currency"
              value="26.99"
              currency="EUR"
              lang="de-DE"
            ></ag-intl-formatter>
          </td>
          <td>
            <ag-intl-formatter
              type="currency"
              value="3299"
              currency="JPY"
              lang="ja-JP"
            ></ag-intl-formatter>
          </td>
        </tr>
        <tr>
          <td>Enterprise</td>
          <td>
            <ag-intl-formatter
              type="currency"
              value="99.99"
              currency="USD"
              lang="en-US"
            ></ag-intl-formatter>
          </td>
          <td>
            <ag-intl-formatter
              type="currency"
              value="89.99"
              currency="EUR"
              lang="de-DE"
            ></ag-intl-formatter>
          </td>
          <td>
            <ag-intl-formatter
              type="currency"
              value="10999"
              currency="JPY"
              lang="ja-JP"
            ></ag-intl-formatter>
          </td>
        </tr>
      </tbody>
    </table>
  `,
};

export const RealWorldDashboard: Story = {
  name: 'Real World - Dashboard Stats',
  render: () => html`
    <style>
      .dashboard {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
        max-width: 900px;
      }
      .stat-card {
        background: white;
        border: 1px solid #e5e7eb;
        border-radius: 0.5rem;
        padding: 1.5rem;
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
      }
      .stat-label {
        font-size: 0.875rem;
        color: #6b7280;
        margin-bottom: 0.5rem;
      }
      .stat-value {
        font-size: 1.875rem;
        font-weight: 700;
        color: #111827;
      }
      .stat-change {
        font-size: 0.875rem;
        margin-top: 0.5rem;
      }
      .stat-change.positive {
        color: #16a34a;
      }
    </style>
    <div class="dashboard">
      <div class="stat-card">
        <div class="stat-label">Total Revenue</div>
        <div class="stat-value">
          <ag-intl-formatter
            type="currency"
            value="1234567.89"
            currency="USD"
            lang="en-US"
          ></ag-intl-formatter>
        </div>
        <div class="stat-change positive">
          ↑ <ag-intl-formatter
            type="percent"
            value="0.1234"
            minimum-fraction-digits="2"
            lang="en-US"
          ></ag-intl-formatter>
        </div>
      </div>
      
      <div class="stat-card">
        <div class="stat-label">Total Users</div>
        <div class="stat-value">
          <ag-intl-formatter
            type="number"
            value="45678"
            lang="en-US"
          ></ag-intl-formatter>
        </div>
        <div class="stat-change positive">
          ↑ <ag-intl-formatter
            type="percent"
            value="0.0856"
            minimum-fraction-digits="2"
            lang="en-US"
          ></ag-intl-formatter>
        </div>
      </div>
      
      <div class="stat-card">
        <div class="stat-label">Conversion Rate</div>
        <div class="stat-value">
          <ag-intl-formatter
            type="percent"
            value="0.0342"
            minimum-fraction-digits="2"
            lang="en-US"
          ></ag-intl-formatter>
        </div>
        <div class="stat-change positive">
          ↑ <ag-intl-formatter
            type="percent"
            value="0.0523"
            minimum-fraction-digits="2"
            lang="en-US"
          ></ag-intl-formatter>
        </div>
      </div>
      
      <div class="stat-card">
        <div class="stat-label">Last Updated</div>
        <div class="stat-value" style="font-size: 1rem; margin-top: 0.5rem;">
          <ag-intl-formatter
            type="date"
            date="${new Date().toISOString()}"
            date-style="medium"
            time-style="short"
            lang="en-US"
          ></ag-intl-formatter>
        </div>
      </div>
    </div>
  `,
};
