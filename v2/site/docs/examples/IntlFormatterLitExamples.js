import { LitElement, html, css } from 'lit';
import 'agnosticui-core/intl-formatter';

export class IntlFormatterLitExamples extends LitElement {
  createRenderRoot() {
    return this;
  }

  static styles = css`
    /* Dashboard stats styling */
    .stat-card {
      background: var(--ag-background);
      border: 1px solid var(--ag-border);
      border-radius: var(--ag-radius-md);
      padding: 1.5rem;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }

    .stat-label {
      font-size: 0.875rem;
      color: var(--ag-text-secondary);
      margin-bottom: 0.5rem;
    }

    .stat-value {
      font-size: clamp(1.25rem, 4vw, 1.875rem);
      font-weight: 700;
      color: var(--ag-text);
      overflow-wrap: break-word;
      word-break: break-word;
      line-height: 1.2;
    }

    .stat-change {
      font-size: 0.875rem;
      margin-top: 0.5rem;
    }

    .stat-change.positive {
      color: var(--ag-success-text);
    }

    /* CSS Parts customization examples */

    /* Custom currency style */
    .custom-currency::part(currency) {
      color: var(--ag-success-text);
      font-weight: bold;
      font-size: 1.25rem;
    }

    /* Custom number style */
    .custom-number::part(number) {
      font-family: "Courier New", monospace;
      background: var(--ag-background-subtle);
      padding: 0.25rem 0.5rem;
      border-radius: var(--ag-radius-sm);
    }

    /* Custom date style */
    .custom-date::part(date-time) {
      color: var(--ag-primary-text);
      font-style: italic;
    }

    /* Custom percent style */
    .custom-percent::part(percent) {
      color: var(--ag-danger-text);
      font-weight: 600;
    }
  `;

  render() {
    return html`
      <section>
        <!-- Date Formatting -->
        <div class="mbe2">
          <h2>Date Formatting</h2>
        </div>
        <div style="display: flex; flex-direction: column; gap: 1rem;" class="mbe4">
          <div>
            <strong>Default: </strong>
            <ag-intl-formatter
              type="date"
              date="2024-01-15T14:30:00"
              lang="en-US"
            ></ag-intl-formatter>
          </div>
          <div>
            <strong>Full Date with Short Time: </strong>
            <ag-intl-formatter
              type="date"
              date="2024-01-15T14:30:00"
              date-style="full"
              time-style="short"
              lang="en-US"
            ></ag-intl-formatter>
          </div>
          <div>
            <strong>Custom Format: </strong>
            <ag-intl-formatter
              type="date"
              date="2024-01-15T14:30:00"
              weekday="long"
              year="numeric"
              month="long"
              day="numeric"
              lang="en-US"
            ></ag-intl-formatter>
          </div>
          <div>
            <strong>24-Hour Format: </strong>
            <ag-intl-formatter
              type="date"
              date="2024-01-15T14:30:00"
              hour="2-digit"
              minute="2-digit"
              second="2-digit"
              hour-format="24"
              lang="en-US"
            ></ag-intl-formatter>
          </div>
        </div>

        <!-- Date Localization -->
        <div class="mbe2">
          <h2>Date Localization</h2>
        </div>
        <div style="display: flex; flex-direction: column; gap: 1rem;" class="mbe4">
          <div>
            <strong>English (US): </strong>
            <ag-intl-formatter
              type="date"
              date="2024-01-15T14:30:00"
              date-style="full"
              time-style="short"
              lang="en-US"
            ></ag-intl-formatter>
          </div>
          <div>
            <strong>French: </strong>
            <ag-intl-formatter
              type="date"
              date="2024-01-15T14:30:00"
              date-style="full"
              time-style="short"
              lang="fr-FR"
            ></ag-intl-formatter>
          </div>
          <div>
            <strong>German: </strong>
            <ag-intl-formatter
              type="date"
              date="2024-01-15T14:30:00"
              date-style="full"
              time-style="short"
              lang="de-DE"
            ></ag-intl-formatter>
          </div>
          <div>
            <strong>Japanese: </strong>
            <ag-intl-formatter
              type="date"
              date="2024-01-15T14:30:00"
              date-style="full"
              time-style="short"
              lang="ja-JP"
            ></ag-intl-formatter>
          </div>
        </div>

        <!-- Number Formatting -->
        <div class="mbe2">
          <h2>Number Formatting</h2>
        </div>
        <div style="display: flex; flex-direction: column; gap: 1rem;" class="mbe4">
          <div>
            <strong>Default: </strong>
            <ag-intl-formatter
              type="number"
              .value=${1234567.89}
              lang="en-US"
            ></ag-intl-formatter>
          </div>
          <div>
            <strong>No Grouping: </strong>
            <ag-intl-formatter
              type="number"
              .value=${1234567.89}
              no-grouping
              lang="en-US"
            ></ag-intl-formatter>
          </div>
          <div>
            <strong>Fixed Decimals (2): </strong>
            <ag-intl-formatter
              type="number"
              .value=${100}
              .minimumFractionDigits=${2}
              .maximumFractionDigits=${2}
              lang="en-US"
            ></ag-intl-formatter>
          </div>
        </div>

        <!-- Number Localization -->
        <div class="mbe2">
          <h2>Number Localization</h2>
        </div>
        <div style="display: flex; flex-direction: column; gap: 1rem;" class="mbe4">
          <div>
            <strong>English (US): </strong>
            <ag-intl-formatter
              type="number"
              .value=${1234567.89}
              lang="en-US"
            ></ag-intl-formatter>
          </div>
          <div>
            <strong>French (space separator, comma decimal): </strong>
            <ag-intl-formatter
              type="number"
              .value=${1234567.89}
              lang="fr-FR"
            ></ag-intl-formatter>
          </div>
          <div>
            <strong>German (dot separator, comma decimal): </strong>
            <ag-intl-formatter
              type="number"
              .value=${1234567.89}
              lang="de-DE"
            ></ag-intl-formatter>
          </div>
          <div>
            <strong>Indian (lakh grouping): </strong>
            <ag-intl-formatter
              type="number"
              .value=${1234567.89}
              lang="hi-IN"
            ></ag-intl-formatter>
          </div>
        </div>

        <!-- Currency Formatting -->
        <div class="mbe2">
          <h2>Currency Formatting</h2>
        </div>
        <div style="display: flex; flex-direction: column; gap: 1rem;" class="mbe4">
          <div>
            <strong>USD (symbol): </strong>
            <ag-intl-formatter
              type="currency"
              .value=${1234.56}
              currency="USD"
              lang="en-US"
            ></ag-intl-formatter>
          </div>
          <div>
            <strong>EUR (symbol): </strong>
            <ag-intl-formatter
              type="currency"
              .value=${1234.56}
              currency="EUR"
              lang="en-US"
            ></ag-intl-formatter>
          </div>
          <div>
            <strong>Currency Code Display: </strong>
            <ag-intl-formatter
              type="currency"
              .value=${1234.56}
              currency="USD"
              currency-display="code"
              lang="en-US"
            ></ag-intl-formatter>
          </div>
          <div>
            <strong>Currency Name Display: </strong>
            <ag-intl-formatter
              type="currency"
              .value=${1234.56}
              currency="USD"
              currency-display="name"
              lang="en-US"
            ></ag-intl-formatter>
          </div>
        </div>

        <!-- Currency Localization -->
        <div class="mbe2">
          <h2>Currency Localization</h2>
        </div>
        <div style="display: flex; flex-direction: column; gap: 1rem;" class="mbe4">
          <div>
            <strong>USD in US: </strong>
            <ag-intl-formatter
              type="currency"
              .value=${1234.56}
              currency="USD"
              lang="en-US"
            ></ag-intl-formatter>
          </div>
          <div>
            <strong>EUR in Germany: </strong>
            <ag-intl-formatter
              type="currency"
              .value=${1234.56}
              currency="EUR"
              lang="de-DE"
            ></ag-intl-formatter>
          </div>
          <div>
            <strong>GBP in UK: </strong>
            <ag-intl-formatter
              type="currency"
              .value=${1234.56}
              currency="GBP"
              lang="en-GB"
            ></ag-intl-formatter>
          </div>
          <div>
            <strong>JPY in Japan (no decimals): </strong>
            <ag-intl-formatter
              type="currency"
              .value=${123456}
              currency="JPY"
              lang="ja-JP"
            ></ag-intl-formatter>
          </div>
        </div>

        <!-- Percentage Formatting -->
        <div class="mbe2">
          <h2>Percentage Formatting</h2>
        </div>
        <div style="display: flex; flex-direction: column; gap: 1rem;" class="mbe4">
          <div>
            <strong>Basic: </strong>
            <ag-intl-formatter
              type="percent"
              .value=${0.75}
              lang="en-US"
            ></ag-intl-formatter>
          </div>
          <div>
            <strong>With Decimals: </strong>
            <ag-intl-formatter
              type="percent"
              .value=${0.8532}
              .minimumFractionDigits=${2}
              .maximumFractionDigits=${2}
              lang="en-US"
            ></ag-intl-formatter>
          </div>
        </div>

        <!-- Real-World Example: Dashboard Stats -->
        <div class="mbe2">
          <h2>Real-World Example: Dashboard Stats</h2>
        </div>
        <div
          style="
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: 1rem;
            max-width: 900px;
          "
          class="mbe4"
        >
          <div class="stat-card">
            <div class="stat-label">Total Revenue</div>
            <div class="stat-value">
              <ag-intl-formatter
                type="currency"
                .value=${1234567.89}
                currency="USD"
                lang="en-US"
              ></ag-intl-formatter>
            </div>
            <div class="stat-change positive">
              ↑
              <ag-intl-formatter
                type="percent"
                .value=${0.1234}
                .minimumFractionDigits=${2}
                lang="en-US"
              ></ag-intl-formatter>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-label">Total Users</div>
            <div class="stat-value">
              <ag-intl-formatter
                type="number"
                .value=${45678}
                lang="en-US"
              ></ag-intl-formatter>
            </div>
            <div class="stat-change positive">
              ↑
              <ag-intl-formatter
                type="percent"
                .value=${0.0856}
                .minimumFractionDigits=${2}
                lang="en-US"
              ></ag-intl-formatter>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-label">Conversion Rate</div>
            <div class="stat-value">
              <ag-intl-formatter
                type="percent"
                .value=${0.0342}
                .minimumFractionDigits=${2}
                lang="en-US"
              ></ag-intl-formatter>
            </div>
            <div class="stat-change positive">
              ↑
              <ag-intl-formatter
                type="percent"
                .value=${0.0523}
                .minimumFractionDigits=${2}
                lang="en-US"
              ></ag-intl-formatter>
            </div>
          </div>
        </div>

        <!-- CSS Parts Customization -->
        <div class="mbe2">
          <h2>CSS Parts Customization</h2>
          <p class="mbe2" style="color: var(--ag-text-secondary); font-size: 0.875rem;">
            Customize formatter appearance using CSS Shadow Parts without breaking encapsulation.
          </p>
        </div>
        <div style="display: flex; flex-direction: column; gap: 1rem;" class="mbe4">
          <div>
            <strong>Styled Currency: </strong>
            <ag-intl-formatter
              type="currency"
              .value=${1234.56}
              currency="USD"
              lang="en-US"
              class="custom-currency"
            ></ag-intl-formatter>
          </div>
          <div>
            <strong>Styled Number: </strong>
            <ag-intl-formatter
              type="number"
              .value=${1234567.89}
              lang="en-US"
              class="custom-number"
            ></ag-intl-formatter>
          </div>
          <div>
            <strong>Styled Date: </strong>
            <ag-intl-formatter
              type="date"
              date="2024-01-15T14:30:00"
              date-style="long"
              time-style="short"
              lang="en-US"
              class="custom-date"
            ></ag-intl-formatter>
          </div>
          <div>
            <strong>Styled Percent: </strong>
            <ag-intl-formatter
              type="percent"
              .value=${0.75}
              lang="en-US"
              class="custom-percent"
            ></ag-intl-formatter>
          </div>
        </div>
      </section>
    `;
  }
}

// Register the custom element
customElements.define('intl-formatter-lit-examples', IntlFormatterLitExamples);
