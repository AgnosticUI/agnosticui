import type { Meta, StoryObj } from "@storybook/react";
import { ReactIntlFormatter } from "agnosticui-core/intl-formatter/react";

const meta: Meta<typeof ReactIntlFormatter> = {
  title: "AgnosticUI React/IntlFormatter",
  component: ReactIntlFormatter,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["date", "number", "percent", "currency"],
      description: "The type of formatting to apply",
    },
    lang: {
      control: "text",
      description: "Locale for formatting (e.g., en-US, fr-FR, de-DE)",
    },
    // Date-specific
    date: {
      control: "text",
      if: { arg: "type", eq: "date" },
      description: "The date value to format",
    },
    dateStyle: {
      control: "select",
      options: ["full", "long", "medium", "short"],
      if: { arg: "type", eq: "date" },
      description: "Shortcut for date formatting style",
    },
    timeStyle: {
      control: "select",
      options: ["full", "long", "medium", "short"],
      if: { arg: "type", eq: "date" },
      description: "Shortcut for time formatting style",
    },
    weekday: {
      control: "select",
      options: ["narrow", "short", "long"],
      if: { arg: "type", eq: "date" },
    },
    year: {
      control: "select",
      options: ["numeric", "2-digit"],
      if: { arg: "type", eq: "date" },
    },
    month: {
      control: "select",
      options: ["numeric", "2-digit", "narrow", "short", "long"],
      if: { arg: "type", eq: "date" },
    },
    day: {
      control: "select",
      options: ["numeric", "2-digit"],
      if: { arg: "type", eq: "date" },
    },
    hour: {
      control: "select",
      options: ["numeric", "2-digit"],
      if: { arg: "type", eq: "date" },
    },
    minute: {
      control: "select",
      options: ["numeric", "2-digit"],
      if: { arg: "type", eq: "date" },
    },
    second: {
      control: "select",
      options: ["numeric", "2-digit"],
      if: { arg: "type", eq: "date" },
    },
    hourFormat: {
      control: "select",
      options: ["auto", "12", "24"],
      if: { arg: "type", eq: "date" },
    },
    timeZone: {
      control: "text",
      if: { arg: "type", eq: "date" },
      description: "IANA timezone (e.g., America/New_York)",
    },
    // Number-specific
    value: {
      control: "number",
      if: { arg: "type", neq: "date" },
      description: "The numeric value to format",
    },
    noGrouping: {
      control: "boolean",
      if: { arg: "type", neq: "date" },
      description: "Disable grouping separators",
    },
    minimumFractionDigits: {
      control: "number",
      if: { arg: "type", neq: "date" },
    },
    maximumFractionDigits: {
      control: "number",
      if: { arg: "type", neq: "date" },
    },
    minimumIntegerDigits: {
      control: "number",
      if: { arg: "type", neq: "date" },
    },
    // Currency-specific
    currency: {
      control: "text",
      if: { arg: "type", eq: "currency" },
      description: "ISO 4217 currency code (e.g., USD, EUR, JPY)",
    },
    currencyDisplay: {
      control: "select",
      options: ["symbol", "narrowSymbol", "code", "name"],
      if: { arg: "type", eq: "currency" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ReactIntlFormatter>;

// Date Stories
export const DateDefault: Story = {
  args: {
    type: "date",
    date: "2024-01-15T14:30:00",
    lang: "en-US",
  },
};

export const DateWithStyles: Story = {
  args: {
    type: "date",
    date: "2024-01-15T14:30:00",
    dateStyle: "full",
    timeStyle: "short",
    lang: "en-US",
  },
};

export const DateCustomFormat: Story = {
  args: {
    type: "date",
    date: "2024-01-15T14:30:00",
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    lang: "en-US",
  },
};

export const DateWithTime: Story = {
  args: {
    type: "date",
    date: "2024-01-15T14:30:00",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hourFormat: "12",
    lang: "en-US",
  },
};

export const Date24Hour: Story = {
  args: {
    type: "date",
    date: "2024-01-15T14:30:00",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourFormat: "24",
    lang: "en-US",
  },
};

export const DateLocalized: Story = {
  name: "Date - Multiple Locales",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div>
        <strong>English (US):</strong>{" "}
        <ReactIntlFormatter
          type="date"
          date="2024-01-15T14:30:00"
          dateStyle="full"
          timeStyle="short"
          lang="en-US"
        />
      </div>
      <div>
        <strong>French:</strong>{" "}
        <ReactIntlFormatter
          type="date"
          date="2024-01-15T14:30:00"
          dateStyle="full"
          timeStyle="short"
          lang="fr-FR"
        />
      </div>
      <div>
        <strong>German:</strong>{" "}
        <ReactIntlFormatter
          type="date"
          date="2024-01-15T14:30:00"
          dateStyle="full"
          timeStyle="short"
          lang="de-DE"
        />
      </div>
      <div>
        <strong>Japanese:</strong>{" "}
        <ReactIntlFormatter
          type="date"
          date="2024-01-15T14:30:00"
          dateStyle="full"
          timeStyle="short"
          lang="ja-JP"
        />
      </div>
      <div>
        <strong>Arabic:</strong>{" "}
        <ReactIntlFormatter
          type="date"
          date="2024-01-15T14:30:00"
          dateStyle="full"
          timeStyle="short"
          lang="ar-SA"
        />
      </div>
    </div>
  ),
};

// Number Stories
export const NumberDefault: Story = {
  args: {
    type: "number",
    value: 1234567.89,
    lang: "en-US",
  },
};

export const NumberNoGrouping: Story = {
  args: {
    type: "number",
    value: 1234567.89,
    noGrouping: true,
    lang: "en-US",
  },
};

export const NumberFixedDecimals: Story = {
  args: {
    type: "number",
    value: 100,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    lang: "en-US",
  },
};

export const NumberLocalized: Story = {
  name: "Number - Multiple Locales",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div>
        <strong>English (US):</strong>{" "}
        <ReactIntlFormatter type="number" value={1234567.89} lang="en-US" />
      </div>
      <div>
        <strong>French:</strong>{" "}
        <ReactIntlFormatter type="number" value={1234567.89} lang="fr-FR" />
      </div>
      <div>
        <strong>German:</strong>{" "}
        <ReactIntlFormatter type="number" value={1234567.89} lang="de-DE" />
      </div>
      <div>
        <strong>Indian (Hindi):</strong>{" "}
        <ReactIntlFormatter type="number" value={1234567.89} lang="hi-IN" />
      </div>
    </div>
  ),
};

// Currency Stories
export const CurrencyUSD: Story = {
  args: {
    type: "currency",
    value: 1234.56,
    currency: "USD",
    lang: "en-US",
  },
};

export const CurrencyEUR: Story = {
  args: {
    type: "currency",
    value: 1234.56,
    currency: "EUR",
    lang: "en-US",
  },
};

export const CurrencyWithCode: Story = {
  args: {
    type: "currency",
    value: 1234.56,
    currency: "USD",
    currencyDisplay: "code",
    lang: "en-US",
  },
};

export const CurrencyWithName: Story = {
  args: {
    type: "currency",
    value: 1234.56,
    currency: "USD",
    currencyDisplay: "name",
    lang: "en-US",
  },
};

export const CurrencyLocalized: Story = {
  name: "Currency - Multiple Locales",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div>
        <strong>USD in US:</strong>{" "}
        <ReactIntlFormatter
          type="currency"
          value={1234.56}
          currency="USD"
          lang="en-US"
        />
      </div>
      <div>
        <strong>EUR in Germany:</strong>{" "}
        <ReactIntlFormatter
          type="currency"
          value={1234.56}
          currency="EUR"
          lang="de-DE"
        />
      </div>
      <div>
        <strong>GBP in UK:</strong>{" "}
        <ReactIntlFormatter
          type="currency"
          value={1234.56}
          currency="GBP"
          lang="en-GB"
        />
      </div>
      <div>
        <strong>JPY in Japan:</strong>{" "}
        <ReactIntlFormatter
          type="currency"
          value={123456}
          currency="JPY"
          lang="ja-JP"
        />
      </div>
      <div>
        <strong>INR in India:</strong>{" "}
        <ReactIntlFormatter
          type="currency"
          value={123456.78}
          currency="INR"
          lang="hi-IN"
        />
      </div>
    </div>
  ),
};

export const CurrencyComparison: Story = {
  name: "Currency - Display Formats",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div>
        <strong>Symbol (default):</strong>{" "}
        <ReactIntlFormatter
          type="currency"
          value={1234.56}
          currency="USD"
          currencyDisplay="symbol"
          lang="en-US"
        />
      </div>
      <div>
        <strong>Narrow Symbol:</strong>{" "}
        <ReactIntlFormatter
          type="currency"
          value={1234.56}
          currency="USD"
          currencyDisplay="narrowSymbol"
          lang="en-US"
        />
      </div>
      <div>
        <strong>Code:</strong>{" "}
        <ReactIntlFormatter
          type="currency"
          value={1234.56}
          currency="USD"
          currencyDisplay="code"
          lang="en-US"
        />
      </div>
      <div>
        <strong>Name:</strong>{" "}
        <ReactIntlFormatter
          type="currency"
          value={1234.56}
          currency="USD"
          currencyDisplay="name"
          lang="en-US"
        />
      </div>
    </div>
  ),
};

// Percent Stories
export const PercentDefault: Story = {
  args: {
    type: "percent",
    value: 0.75,
    lang: "en-US",
  },
};

export const PercentWithDecimals: Story = {
  args: {
    type: "percent",
    value: 0.8532,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    lang: "en-US",
  },
};

export const PercentLocalized: Story = {
  name: "Percent - Multiple Locales",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div>
        <strong>English (US):</strong>{" "}
        <ReactIntlFormatter
          type="percent"
          value={0.8532}
          minimumFractionDigits={2}
          lang="en-US"
        />
      </div>
      <div>
        <strong>French:</strong>{" "}
        <ReactIntlFormatter
          type="percent"
          value={0.8532}
          minimumFractionDigits={2}
          lang="fr-FR"
        />
      </div>
      <div>
        <strong>German:</strong>{" "}
        <ReactIntlFormatter
          type="percent"
          value={0.8532}
          minimumFractionDigits={2}
          lang="de-DE"
        />
      </div>
    </div>
  ),
};

// Styling Examples
export const StyledWithCSSParts: Story = {
  name: "Styled with CSS Parts",
  render: () => (
    <>
      <style>{`
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
      `}</style>
      <div
        className="styled-demo"
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <div>
          <strong>Styled Currency:</strong>{" "}
          <ReactIntlFormatter
            type="currency"
            value={1234.56}
            currency="USD"
            lang="en-US"
          />
        </div>
        <div>
          <strong>Styled Number:</strong>{" "}
          <ReactIntlFormatter type="number" value={1234567.89} lang="en-US" />
        </div>
        <div>
          <strong>Styled Date:</strong>{" "}
          <ReactIntlFormatter
            type="date"
            date="2024-01-15T14:30:00"
            dateStyle="long"
            timeStyle="short"
            lang="en-US"
          />
        </div>
        <div>
          <strong>Styled Percent:</strong>{" "}
          <ReactIntlFormatter type="percent" value={0.75} lang="en-US" />
        </div>
      </div>
    </>
  ),
};

// Error Handling
export const ErrorHandling: Story = {
  name: "Error Handling",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div>
        <strong>Invalid Date:</strong>{" "}
        <ReactIntlFormatter
          type="date"
          date="invalid-date"
          lang="en-US"
          onFormatError={(e) => {
            console.error("Format error:", e.detail);
          }}
        />
        <em style={{ color: "#6b7280", fontSize: "0.875rem" }}>
          {" "}
          (Check console for error event)
        </em>
      </div>
      <div>
        <strong>Missing Currency Code:</strong>{" "}
        <ReactIntlFormatter
          type="currency"
          value={1234.56}
          currency=""
          lang="en-US"
          onFormatError={(e) => {
            console.error("Format error:", e.detail);
          }}
        />
        <em style={{ color: "#6b7280", fontSize: "0.875rem" }}>
          {" "}
          (Check console for error event)
        </em>
      </div>
    </div>
  ),
};

// Real-world Examples
export const RealWorldPriceTable: Story = {
  name: "Real World - Price Table",
  render: () => (
    <>
      <style>{`
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
      `}</style>
      <table className="price-table">
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
              <ReactIntlFormatter
                type="currency"
                value={9.99}
                currency="USD"
                lang="en-US"
              />
            </td>
            <td>
              <ReactIntlFormatter
                type="currency"
                value={8.99}
                currency="EUR"
                lang="de-DE"
              />
            </td>
            <td>
              <ReactIntlFormatter
                type="currency"
                value={1099}
                currency="JPY"
                lang="ja-JP"
              />
            </td>
          </tr>
          <tr>
            <td>Pro Plan</td>
            <td>
              <ReactIntlFormatter
                type="currency"
                value={29.99}
                currency="USD"
                lang="en-US"
              />
            </td>
            <td>
              <ReactIntlFormatter
                type="currency"
                value={26.99}
                currency="EUR"
                lang="de-DE"
              />
            </td>
            <td>
              <ReactIntlFormatter
                type="currency"
                value={3299}
                currency="JPY"
                lang="ja-JP"
              />
            </td>
          </tr>
          <tr>
            <td>Enterprise</td>
            <td>
              <ReactIntlFormatter
                type="currency"
                value={99.99}
                currency="USD"
                lang="en-US"
              />
            </td>
            <td>
              <ReactIntlFormatter
                type="currency"
                value={89.99}
                currency="EUR"
                lang="de-DE"
              />
            </td>
            <td>
              <ReactIntlFormatter
                type="currency"
                value={10999}
                currency="JPY"
                lang="ja-JP"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  ),
};

export const RealWorldDashboard: Story = {
  name: "Real World - Dashboard Stats",
  render: () => (
    <>
      <style>{`
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
      `}</style>
      <div className="dashboard">
        <div className="stat-card">
          <div className="stat-label">Total Revenue</div>
          <div className="stat-value">
            <ReactIntlFormatter
              type="currency"
              value={1234567.89}
              currency="USD"
              lang="en-US"
            />
          </div>
          <div className="stat-change positive">
            ↑{" "}
            <ReactIntlFormatter
              type="percent"
              value={0.1234}
              minimumFractionDigits={2}
              lang="en-US"
            />
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-label">Total Users</div>
          <div className="stat-value">
            <ReactIntlFormatter type="number" value={45678} lang="en-US" />
          </div>
          <div className="stat-change positive">
            ↑{" "}
            <ReactIntlFormatter
              type="percent"
              value={0.0856}
              minimumFractionDigits={2}
              lang="en-US"
            />
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-label">Conversion Rate</div>
          <div className="stat-value">
            <ReactIntlFormatter
              type="percent"
              value={0.0342}
              minimumFractionDigits={2}
              lang="en-US"
            />
          </div>
          <div className="stat-change positive">
            ↑{" "}
            <ReactIntlFormatter
              type="percent"
              value={0.0523}
              minimumFractionDigits={2}
              lang="en-US"
            />
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-label">Last Updated</div>
          <div
            className="stat-value"
            style={{ fontSize: "1rem", marginTop: "0.5rem" }}
          >
            <ReactIntlFormatter
              type="date"
              date={new Date().toISOString()}
              dateStyle="medium"
              timeStyle="short"
              lang="en-US"
            />
          </div>
        </div>
      </div>
    </>
  ),
};
