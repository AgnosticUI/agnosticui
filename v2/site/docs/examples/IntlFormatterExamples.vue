<template>
  <section>
    <!-- Date Formatting -->
    <div class="mbe2">
      <h3>Date Formatting</h3>
    </div>
    <div
      style="display: flex; flex-direction: column; gap: 1rem;"
      class="mbe4"
    >
      <div>
        <strong>Default:</strong>
        <VueIntlFormatter
          type="date"
          date="2024-01-15T14:30:00"
          lang="en-US"
        />
      </div>
      <div>
        <strong>Full Date with Short Time:</strong>
        <VueIntlFormatter
          type="date"
          date="2024-01-15T14:30:00"
          dateStyle="full"
          timeStyle="short"
          lang="en-US"
        />
      </div>
      <div>
        <strong>Custom Format:</strong>
        <VueIntlFormatter
          type="date"
          date="2024-01-15T14:30:00"
          weekday="long"
          year="numeric"
          month="long"
          day="numeric"
          lang="en-US"
        />
      </div>
      <div>
        <strong>24-Hour Format:</strong>
        <VueIntlFormatter
          type="date"
          date="2024-01-15T14:30:00"
          hour="2-digit"
          minute="2-digit"
          second="2-digit"
          hourFormat="24"
          lang="en-US"
        />
      </div>
    </div>

    <!-- Date Localization -->
    <div class="mbe2">
      <h3>Date Localization</h3>
    </div>
    <div
      style="display: flex; flex-direction: column; gap: 1rem;"
      class="mbe4"
    >
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
    </div>

    <!-- Number Formatting -->
    <div class="mbe2">
      <h3>Number Formatting</h3>
    </div>
    <div
      style="display: flex; flex-direction: column; gap: 1rem;"
      class="mbe4"
    >
      <div>
        <strong>Default:</strong>
        <VueIntlFormatter
          type="number"
          :value="1234567.89"
          lang="en-US"
        />
      </div>
      <div>
        <strong>No Grouping:</strong>
        <VueIntlFormatter
          type="number"
          :value="1234567.89"
          :noGrouping="true"
          lang="en-US"
        />
      </div>
      <div>
        <strong>Fixed Decimals (2):</strong>
        <VueIntlFormatter
          type="number"
          :value="100"
          :minimumFractionDigits="2"
          :maximumFractionDigits="2"
          lang="en-US"
        />
      </div>
    </div>

    <!-- Number Localization -->
    <div class="mbe2">
      <h3>Number Localization</h3>
    </div>
    <div
      style="display: flex; flex-direction: column; gap: 1rem;"
      class="mbe4"
    >
      <div>
        <strong>English (US):</strong>
        <VueIntlFormatter
          type="number"
          :value="1234567.89"
          lang="en-US"
        />
      </div>
      <div>
        <strong>French (space separator, comma decimal):</strong>
        <VueIntlFormatter
          type="number"
          :value="1234567.89"
          lang="fr-FR"
        />
      </div>
      <div>
        <strong>German (dot separator, comma decimal):</strong>
        <VueIntlFormatter
          type="number"
          :value="1234567.89"
          lang="de-DE"
        />
      </div>
      <div>
        <strong>Indian (lakh grouping):</strong>
        <VueIntlFormatter
          type="number"
          :value="1234567.89"
          lang="hi-IN"
        />
      </div>
    </div>

    <!-- Currency Formatting -->
    <div class="mbe2">
      <h3>Currency Formatting</h3>
    </div>
    <div
      style="display: flex; flex-direction: column; gap: 1rem;"
      class="mbe4"
    >
      <div>
        <strong>USD (symbol):</strong>
        <VueIntlFormatter
          type="currency"
          :value="1234.56"
          currency="USD"
          lang="en-US"
        />
      </div>
      <div>
        <strong>EUR (symbol):</strong>
        <VueIntlFormatter
          type="currency"
          :value="1234.56"
          currency="EUR"
          lang="en-US"
        />
      </div>
      <div>
        <strong>Currency Code Display:</strong>
        <VueIntlFormatter
          type="currency"
          :value="1234.56"
          currency="USD"
          currencyDisplay="code"
          lang="en-US"
        />
      </div>
      <div>
        <strong>Currency Name Display:</strong>
        <VueIntlFormatter
          type="currency"
          :value="1234.56"
          currency="USD"
          currencyDisplay="name"
          lang="en-US"
        />
      </div>
    </div>

    <!-- Currency Localization -->
    <div class="mbe2">
      <h3>Currency Localization</h3>
    </div>
    <div
      style="display: flex; flex-direction: column; gap: 1rem;"
      class="mbe4"
    >
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
        <strong>JPY in Japan (no decimals):</strong>
        <VueIntlFormatter
          type="currency"
          :value="123456"
          currency="JPY"
          lang="ja-JP"
        />
      </div>
    </div>

    <!-- Percentage Formatting -->
    <div class="mbe2">
      <h3>Percentage Formatting</h3>
    </div>
    <div
      style="display: flex; flex-direction: column; gap: 1rem;"
      class="mbe4"
    >
      <div>
        <strong>Basic:</strong>
        <VueIntlFormatter
          type="percent"
          :value="0.75"
          lang="en-US"
        />
      </div>
      <div>
        <strong>With Decimals:</strong>
        <VueIntlFormatter
          type="percent"
          :value="0.8532"
          :minimumFractionDigits="2"
          :maximumFractionDigits="2"
          lang="en-US"
        />
      </div>
    </div>

    <!-- Real-World Example: Dashboard Stats -->
    <div class="mbe2">
      <h3>Real-World Example: Dashboard Stats</h3>
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
          <VueIntlFormatter
            type="currency"
            :value="1234567.89"
            currency="USD"
            lang="en-US"
          />
        </div>
        <div class="stat-change positive">
          ↑
          <VueIntlFormatter
            type="percent"
            :value="0.1234"
            :minimumFractionDigits="2"
            lang="en-US"
          />
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-label">Total Users</div>
        <div class="stat-value">
          <VueIntlFormatter
            type="number"
            :value="45678"
            lang="en-US"
          />
        </div>
        <div class="stat-change positive">
          ↑
          <VueIntlFormatter
            type="percent"
            :value="0.0856"
            :minimumFractionDigits="2"
            lang="en-US"
          />
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-label">Conversion Rate</div>
        <div class="stat-value">
          <VueIntlFormatter
            type="percent"
            :value="0.0342"
            :minimumFractionDigits="2"
            lang="en-US"
          />
        </div>
        <div class="stat-change positive">
          ↑
          <VueIntlFormatter
            type="percent"
            :value="0.0523"
            :minimumFractionDigits="2"
            lang="en-US"
          />
        </div>
      </div>
    </div>

    <!-- CSS Parts Customization -->
    <div class="mbe2">
      <h3>CSS Parts Customization</h3>
      <p
        class="mbe2"
        style="color: var(--ag-text-secondary); font-size: 0.875rem;"
      >
        Customize formatter appearance using CSS Shadow Parts without breaking encapsulation.
      </p>
    </div>
    <div
      style="display: flex; flex-direction: column; gap: 1rem;"
      class="mbe4"
    >
      <div>
        <strong>Styled Currency:</strong>
        <VueIntlFormatter
          type="currency"
          :value="1234.56"
          currency="USD"
          lang="en-US"
          class="custom-currency"
        />
      </div>
      <div>
        <strong>Styled Number:</strong>
        <VueIntlFormatter
          type="number"
          :value="1234567.89"
          lang="en-US"
          class="custom-number"
        />
      </div>
      <div>
        <strong>Styled Date:</strong>
        <VueIntlFormatter
          type="date"
          date="2024-01-15T14:30:00"
          dateStyle="long"
          timeStyle="short"
          lang="en-US"
          class="custom-date"
        />
      </div>
      <div>
        <strong>Styled Percent:</strong>
        <VueIntlFormatter
          type="percent"
          :value="0.75"
          lang="en-US"
          class="custom-percent"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { VueIntlFormatter } from "agnosticui-core/intl-formatter/vue";

export default {
  name: "IntlFormatterExamples",
  components: {
    VueIntlFormatter,
  },
};
</script>

<style scoped>
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
  color: var(--ag-success);
}

/* CSS Parts customization examples */

/* Custom currency style */
.custom-currency::part(currency) {
  color: var(--ag-success);
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
  color: var(--ag-primary);
  font-style: italic;
}

/* Custom percent style */
.custom-percent::part(percent) {
  color: var(--ag-danger);
  font-weight: 600;
}
</style>
