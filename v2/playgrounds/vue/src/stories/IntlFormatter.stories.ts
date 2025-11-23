import type { Meta, StoryObj } from '@storybook/vue3';
import { VueIntlFormatter, type VueIntlFormatterProps } from 'agnosticui-core/intl-formatter/vue';

const meta = {
  title: 'AgnosticUI Vue/IntlFormatter',
  component: VueIntlFormatter,
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
} satisfies Meta<typeof VueIntlFormatter>;

export default meta;
type Story = StoryObj<typeof meta>;

// Date Stories
export const DateDefault: Story = {
  args: {
    type: 'date',
    date: '2024-01-15T14:30:00',
    lang: 'en-US',
  },
  render: (args: VueIntlFormatterProps) => ({
    components: { VueIntlFormatter },
    setup() {
      return { args };
    },
    template: `<VueIntlFormatter v-bind="args" />`,
  }),
};

export const DateWithStyles: Story = {
  args: {
    type: 'date',
    date: '2024-01-15T14:30:00',
    dateStyle: 'full',
    timeStyle: 'short',
    lang: 'en-US',
  },
  render: (args: VueIntlFormatterProps) => ({
    components: { VueIntlFormatter },
    setup() {
      return { args };
    },
    template: `<VueIntlFormatter v-bind="args" />`,
  }),
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
  render: (args: VueIntlFormatterProps) => ({
    components: { VueIntlFormatter },
    setup() {
      return { args };
    },
    template: `<VueIntlFormatter v-bind="args" />`,
  }),
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
  render: (args: VueIntlFormatterProps) => ({
    components: { VueIntlFormatter },
    setup() {
      return { args };
    },
    template: `<VueIntlFormatter v-bind="args" />`,
  }),
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
  render: (args: VueIntlFormatterProps) => ({
    components: { VueIntlFormatter },
    setup() {
      return { args };
    },
    template: `<VueIntlFormatter v-bind="args" />`,
  }),
};

export const DateLocalized: Story = {
  name: 'Date - Multiple Locales',
  render: () => ({
    components: { VueIntlFormatter },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div>
          <strong>English (US):</strong>
          <VueIntlFormatter
            type="date"
            date="2024-01-15T14:30:00"
            dateStyle="full"
            timeStyle="short"
            lang="en-US"
          />
        </div>
        <div>
          <strong>French:</strong>
          <VueIntlFormatter
            type="date"
            date="2024-01-15T14:30:00"
            dateStyle="full"
            timeStyle="short"
            lang="fr-FR"
          />
        </div>
        <div>
          <strong>German:</strong>
          <VueIntlFormatter
            type="date"
            date="2024-01-15T14:30:00"
            dateStyle="full"
            timeStyle="short"
            lang="de-DE"
          />
        </div>
        <div>
          <strong>Japanese:</strong>
          <VueIntlFormatter
            type="date"
            date="2024-01-15T14:30:00"
            dateStyle="full"
            timeStyle="short"
            lang="ja-JP"
          />
        </div>
        <div>
          <strong>Arabic:</strong>
          <VueIntlFormatter
            type="date"
            date="2024-01-15T14:30:00"
            dateStyle="full"
            timeStyle="short"
            lang="ar-SA"
          />
        </div>
      </div>
    `,
  }),
};

// Number Stories
export const NumberDefault: Story = {
  args: {
    type: 'number',
    value: 1234567.89,
    lang: 'en-US',
  },
  render: (args: VueIntlFormatterProps) => ({
    components: { VueIntlFormatter },
    setup() {
      return { args };
    },
    template: `<VueIntlFormatter v-bind="args" />`,
  }),
};

export const NumberNoGrouping: Story = {
  args: {
    type: 'number',
    value: 1234567.89,
    noGrouping: true,
    lang: 'en-US',
  },
  render: (args: VueIntlFormatterProps) => ({
    components: { VueIntlFormatter },
    setup() {
      return { args };
    },
    template: `<VueIntlFormatter v-bind="args" />`,
  }),
};

export const NumberFixedDecimals: Story = {
  args: {
    type: 'number',
    value: 100,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    lang: 'en-US',
  },
  render: (args: VueIntlFormatterProps) => ({
    components: { VueIntlFormatter },
    setup() {
      return { args };
    },
    template: `<VueIntlFormatter v-bind="args" />`,
  }),
};

export const NumberLocalized: Story = {
  name: 'Number - Multiple Locales',
  render: () => ({
    components: { VueIntlFormatter },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div>
          <strong>English (US):</strong>
          <VueIntlFormatter type="number" :value="1234567.89" lang="en-US" />
        </div>
        <div>
          <strong>French:</strong>
          <VueIntlFormatter type="number" :value="1234567.89" lang="fr-FR" />
        </div>
        <div>
          <strong>German:</strong>
          <VueIntlFormatter type="number" :value="1234567.89" lang="de-DE" />
        </div>
        <div>
          <strong>Indian (Hindi):</strong>
          <VueIntlFormatter type="number" :value="1234567.89" lang="hi-IN" />
        </div>
      </div>
    `,
  }),
};

// Currency Stories
export const CurrencyUSD: Story = {
  args: {
    type: 'currency',
    value: 1234.56,
    currency: 'USD',
    lang: 'en-US',
  },
  render: (args: VueIntlFormatterProps) => ({
    components: { VueIntlFormatter },
    setup() {
      return { args };
    },
    template: `<VueIntlFormatter v-bind="args" />`,
  }),
};

export const CurrencyEUR: Story = {
  args: {
    type: 'currency',
    value: 1234.56,
    currency: 'EUR',
    lang: 'en-US',
  },
  render: (args: VueIntlFormatterProps) => ({
    components: { VueIntlFormatter },
    setup() {
      return { args };
    },
    template: `<VueIntlFormatter v-bind="args" />`,
  }),
};

export const CurrencyWithCode: Story = {
  args: {
    type: 'currency',
    value: 1234.56,
    currency: 'USD',
    currencyDisplay: 'code',
    lang: 'en-US',
  },
  render: (args: VueIntlFormatterProps) => ({
    components: { VueIntlFormatter },
    setup() {
      return { args };
    },
    template: `<VueIntlFormatter v-bind="args" />`,
  }),
};

export const CurrencyWithName: Story = {
  args: {
    type: 'currency',
    value: 1234.56,
    currency: 'USD',
    currencyDisplay: 'name',
    lang: 'en-US',
  },
  render: (args: VueIntlFormatterProps) => ({
    components: { VueIntlFormatter },
    setup() {
      return { args };
    },
    template: `<VueIntlFormatter v-bind="args" />`,
  }),
};

export const CurrencyLocalized: Story = {
  name: 'Currency - Multiple Locales',
  render: () => ({
    components: { VueIntlFormatter },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div>
          <strong>USD in US:</strong>
          <VueIntlFormatter
            type="currency"
            :value="1234.56"
            currency="USD"
            lang="en-US"
          />
        </div>
        <div>
          <strong>EUR in Germany:</strong>
          <VueIntlFormatter
            type="currency"
            :value="1234.56"
            currency="EUR"
            lang="de-DE"
          />
        </div>
        <div>
          <strong>GBP in UK:</strong>
          <VueIntlFormatter
            type="currency"
            :value="1234.56"
            currency="GBP"
            lang="en-GB"
          />
        </div>
        <div>
          <strong>JPY in Japan:</strong>
          <VueIntlFormatter
            type="currency"
            :value="123456"
            currency="JPY"
            lang="ja-JP"
          />
        </div>
        <div>
          <strong>INR in India:</strong>
          <VueIntlFormatter
            type="currency"
            :value="123456.78"
            currency="INR"
            lang="hi-IN"
          />
        </div>
      </div>
    `,
  }),
};

export const CurrencyComparison: Story = {
  name: 'Currency - Display Formats',
  render: () => ({
    components: { VueIntlFormatter },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div>
          <strong>Symbol (default):</strong>
          <VueIntlFormatter
            type="currency"
            :value="1234.56"
            currency="USD"
            currencyDisplay="symbol"
            lang="en-US"
          />
        </div>
        <div>
          <strong>Narrow Symbol:</strong>
          <VueIntlFormatter
            type="currency"
            :value="1234.56"
            currency="USD"
            currencyDisplay="narrowSymbol"
            lang="en-US"
          />
        </div>
        <div>
          <strong>Code:</strong>
          <VueIntlFormatter
            type="currency"
            :value="1234.56"
            currency="USD"
            currencyDisplay="code"
            lang="en-US"
          />
        </div>
        <div>
          <strong>Name:</strong>
          <VueIntlFormatter
            type="currency"
            :value="1234.56"
            currency="USD"
            currencyDisplay="name"
            lang="en-US"
          />
        </div>
      </div>
    `,
  }),
};

// Percent Stories
export const PercentDefault: Story = {
  args: {
    type: 'percent',
    value: 0.75,
    lang: 'en-US',
  },
  render: (args: VueIntlFormatterProps) => ({
    components: { VueIntlFormatter },
    setup() {
      return { args };
    },
    template: `<VueIntlFormatter v-bind="args" />`,
  }),
};

export const PercentWithDecimals: Story = {
  args: {
    type: 'percent',
    value: 0.8532,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    lang: 'en-US',
  },
  render: (args: VueIntlFormatterProps) => ({
    components: { VueIntlFormatter },
    setup() {
      return { args };
    },
    template: `<VueIntlFormatter v-bind="args" />`,
  }),
};

export const PercentLocalized: Story = {
  name: 'Percent - Multiple Locales',
  render: () => ({
    components: { VueIntlFormatter },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div>
          <strong>English (US):</strong>
          <VueIntlFormatter
            type="percent"
            :value="0.8532"
            :minimumFractionDigits="2"
            lang="en-US"
          />
        </div>
        <div>
          <strong>French:</strong>
          <VueIntlFormatter
            type="percent"
            :value="0.8532"
            :minimumFractionDigits="2"
            lang="fr-FR"
          />
        </div>
        <div>
          <strong>German:</strong>
          <VueIntlFormatter
            type="percent"
            :value="0.8532"
            :minimumFractionDigits="2"
            lang="de-DE"
          />
        </div>
      </div>
    `,
  }),
};

// Error Handling
export const ErrorHandling: Story = {
  name: 'Error Handling',
  render: () => ({
    components: { VueIntlFormatter },
    setup() {
      const handleFormatError = (detail: { type: 'date' | 'number'; error: string }) => {
        console.error('Format error:', detail);
      };
      return { handleFormatError };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div>
          <strong>Invalid Date:</strong>
          <VueIntlFormatter
            type="date"
            date="invalid-date"
            lang="en-US"
            @format-error="handleFormatError"
          />
          <em style="color: #6b7280; font-size: 0.875rem;">(Check console for error event)</em>
        </div>
        <div>
          <strong>Missing Currency Code:</strong>
          <VueIntlFormatter
            type="currency"
            :value="1234.56"
            currency=""
            lang="en-US"
            @format-error="handleFormatError"
          />
          <em style="color: #6b7280; font-size: 0.875rem;">(Check console for error event)</em>
        </div>
      </div>
    `,
  }),
};
