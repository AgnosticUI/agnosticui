# IntlFormatter

<AlphaWarning />


A comprehensive, framework-agnostic web component that wraps the browser's native `Intl.DateTimeFormat` and `Intl.NumberFormat` APIs for formatting dates, numbers, currencies, and percentages with full localization support.

## Examples

<IntlFormatterExamples />

<script setup>
import AlphaWarning from '../components/AlphaWarning.vue'
import IntlFormatterExamples from '../examples/IntlFormatterExamples.vue';
import { Accessibility, Bell, Layers, Package, Globe, Palette, Target, Zap } from 'lucide-vue-next';
</script>

## Features

- <Globe :size="16" class="flex-inline" /> **Full Internationalization** - Uses browser's native Intl API
- <Zap :size="16" class="flex-inline" /> **Performance Optimized** - Built-in formatter caching
- <Target :size="16" class="flex-inline" /> **Type Safe** - Complete TypeScript definitions
- <Palette :size="16" class="flex-inline" /> **Styleable** - CSS parts for custom styling
- <Bell :size="16" class="flex-inline" /> **Error Handling** - Custom events for validation errors
- <Layers :size="16" class="flex-inline" /> **Framework Support** - React and Vue wrappers included
- <Accessibility :size="16" class="flex-inline" /> **Accessible** - Semantic HTML with proper attributes
- <Package :size="16" class="flex-inline" /> **Zero Dependencies** - Built on Lit Element

## Usage

::: details Vue
```vue
<template>
  <section>
    <VueIntlFormatter
      type="date"
      date="2024-01-15"
      dateStyle="long"
      lang="en-US"
    />

    <VueIntlFormatter
      type="currency"
      :value="1234.56"
      currency="USD"
      lang="en-US"
    />

    <VueIntlFormatter
      type="number"
      :value="1234567.89"
      :minimumFractionDigits="2"
      lang="en-US"
    />

    <VueIntlFormatter
      type="percent"
      :value="0.75"
      lang="en-US"
    />
  </section>
</template>

<script setup>
import { VueIntlFormatter } from "agnosticui-core/intl-formatter/vue";
</script>
```
:::

::: details React
```tsx
import { ReactIntlFormatter } from "agnosticui-core/intl-formatter/react";

function App() {
  const handleError = (event) => {
    console.error('Formatting error:', event.detail);
  };

  return (
    <div>
      <ReactIntlFormatter
        type="date"
        date="2024-01-15"
        dateStyle="full"
        timeStyle="short"
      />

      <ReactIntlFormatter
        type="currency"
        value={1234.56}
        currency="EUR"
        lang="de-DE"
        onFormatError={handleError}
      />

      <ReactIntlFormatter
        type="number"
        value={1234567.89}
        minimumFractionDigits={2}
        maximumFractionDigits={2}
        noGrouping={false}
      />

      <ReactIntlFormatter
        type="percent"
        value={0.8532}
        minimumFractionDigits={2}
      />
    </div>
  );
}
```
:::

::: details Vanilla HTML/JavaScript
```html
<script type="module">
  import "agnosticui-core/intl-formatter";
</script>

<ag-intl-formatter 
  type="date" 
  date="2024-01-15"
  date-style="long"
  lang="en-US">
</ag-intl-formatter>

<ag-intl-formatter 
  type="currency" 
  value="1234.56"
  currency="USD"
  lang="en-US">
</ag-intl-formatter>

<ag-intl-formatter 
  type="number" 
  value="1234567.89"
  minimum-fraction-digits="2"
  lang="en-US">
</ag-intl-formatter>

<ag-intl-formatter
  type="percent"
  value="0.75"
  lang="en-US">
</ag-intl-formatter>
```
:::

## API Reference

### Common Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `type` | `'date' \| 'number' \| 'percent' \| 'currency'` | `'date'` | The type of formatting to apply |
| `value` | `number \| string \| Date` | - | The value to format (for numbers/currency/percent) |
| `lang` | `string` | Browser locale | The locale to use (e.g., 'en-US', 'fr-FR') |

### Date Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `date` | `Date \| string` | - | The date value to format |
| `dateStyle` | `'full' \| 'long' \| 'medium' \| 'short'` | - | Shortcut for date formatting style |
| `timeStyle` | `'full' \| 'long' \| 'medium' \| 'short'` | - | Shortcut for time formatting style |
| `weekday` | `'narrow' \| 'short' \| 'long'` | - | Weekday representation |
| `era` | `'narrow' \| 'short' \| 'long'` | - | Era representation (e.g., 'AD') |
| `year` | `'numeric' \| '2-digit'` | - | Year representation |
| `month` | `'numeric' \| '2-digit' \| 'narrow' \| 'short' \| 'long'` | - | Month representation |
| `day` | `'numeric' \| '2-digit'` | - | Day representation |
| `hour` | `'numeric' \| '2-digit'` | - | Hour representation |
| `minute` | `'numeric' \| '2-digit'` | - | Minute representation |
| `second` | `'numeric' \| '2-digit'` | - | Second representation |
| `timeZoneName` | `'short' \| 'long'` | - | Time zone name representation |
| `timeZone` | `string` | - | IANA time zone identifier |
| `hourFormat` | `'auto' \| '12' \| '24'` | `'auto'` | Hour format preference |

### Number Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `noGrouping` | `boolean` | `false` | Disable grouping separators (e.g., 1000 vs 1,000) |
| `minimumIntegerDigits` | `number` | - | Minimum number of integer digits |
| `minimumFractionDigits` | `number` | - | Minimum number of fraction digits |
| `maximumFractionDigits` | `number` | - | Maximum number of fraction digits |
| `minimumSignificantDigits` | `number` | - | Minimum number of significant digits |
| `maximumSignificantDigits` | `number` | - | Maximum number of significant digits |

### Currency Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `currency` | `string` | `'USD'` | ISO 4217 currency code (e.g., 'USD', 'EUR') |
| `currencyDisplay` | `'symbol' \| 'narrowSymbol' \| 'code' \| 'name'` | `'symbol'` | How to display the currency |

## Events

### `format-error`

Dispatched when formatting fails due to validation or runtime errors.

```typescript
interface FormatErrorDetail {
  type: 'date' | 'number';
  error: string;
}
```

**Example:**

```javascript
element.addEventListener("format-error", (event) => {
  console.error(`${event.detail.type} formatting error:`, event.detail.error);
});
```

## CSS Parts

Style the component using CSS `::part()` selectors:

```css
ag-intl-formatter::part(date-time) {
  color: blue;
  font-weight: bold;
}

ag-intl-formatter::part(number) {
  font-family: monospace;
}

ag-intl-formatter::part(currency) {
  color: green;
}

ag-intl-formatter::part(percent) {
  font-weight: bold;
}

ag-intl-formatter::part(error) {
  color: red;
}
```

## Examples

### Date Formatting

```html
<ag-intl-formatter 
  type="date"
  date="2024-01-15T14:30:00"
  date-style="full"
  time-style="short"
  lang="en-US">
</ag-intl-formatter>

<ag-intl-formatter 
  type="date"
  date="2024-01-15"
  weekday="long"
  year="numeric"
  month="long"
  day="numeric"
  lang="en-US">
</ag-intl-formatter>

<ag-intl-formatter 
  type="date"
  date="2024-01-15T14:30:00"
  hour="2-digit"
  minute="2-digit"
  hour-format="24"
  lang="en-US">
</ag-intl-formatter>
```

### Number Formatting

```html
<ag-intl-formatter 
  type="number"
  value="1234567.89"
  lang="en-US">
</ag-intl-formatter>

<ag-intl-formatter 
  type="number"
  value="1234567.89"
  no-grouping
  lang="en-US">
</ag-intl-formatter>

<ag-intl-formatter 
  type="number"
  value="100"
  minimum-fraction-digits="2"
  maximum-fraction-digits="2"
  lang="en-US">
</ag-intl-formatter>
```

### Currency Formatting

```html
<ag-intl-formatter 
  type="currency"
  value="1234.56"
  currency="USD"
  lang="en-US">
</ag-intl-formatter>

<ag-intl-formatter 
  type="currency"
  value="1234.56"
  currency="EUR"
  currency-display="code"
  lang="en-US">
</ag-intl-formatter>

<ag-intl-formatter 
  type="currency"
  value="1234"
  currency="JPY"
  lang="ja-JP">
</ag-intl-formatter>
```

### Percentage Formatting

```html
<ag-intl-formatter 
  type="percent"
  value="0.75"
  lang="en-US">
</ag-intl-formatter>

<ag-intl-formatter 
  type="percent"
  value="0.8532"
  minimum-fraction-digits="2"
  maximum-fraction-digits="2"
  lang="en-US">
</ag-intl-formatter>
```

## Localization Examples

```html
<ag-intl-formatter 
  type="number"
  value="1234.56"
  lang="fr-FR">
</ag-intl-formatter>

<ag-intl-formatter 
  type="currency"
  value="1234.56"
  currency="EUR"
  lang="de-DE">
</ag-intl-formatter>

<ag-intl-formatter 
  type="date"
  date="2024-01-15"
  date-style="long"
  lang="ja-JP">
</ag-intl-formatter>
```

## Performance

The component uses intelligent formatter caching to improve performance:

- Formatters are cached based on type and options
- Cache is automatically cleared when the component is removed
- Repeated renders with the same options reuse cached formatters

This makes the component suitable for rendering large lists or frequently updating values.

## Browser Support

Works in all modern browsers that support:
- Web Components (Custom Elements v1)
- Shadow DOM v1
- Intl.DateTimeFormat
- Intl.NumberFormat

For older browsers, consider using polyfills:
- [@webcomponents/webcomponentsjs](https://github.com/webcomponents/polyfills/tree/master/packages/webcomponentsjs)
- [intl polyfill](https://formatjs.io/docs/polyfills/intl-datetimeformat)

## TypeScript Support

Full TypeScript definitions are included. Import types as needed:

```typescript
import type { IntlFormatterProps } from "agnosticui-core/intl-formatter";
```

## Testing

The component includes a comprehensive test suite with 50+ tests covering:
- All formatting types
- Validation and error handling
- Localization
- Edge cases
- Performance
- Accessibility

Run tests with:

```bash
npm test
```

## Contributing

Contributions are welcome! Please ensure:
- All tests pass
- New features include tests
- Code follows the existing style
- TypeScript types are updated

## License

MIT

## Related Resources

- [Intl.DateTimeFormat - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)
- [Intl.NumberFormat - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)
- [Lit Element Documentation](https://lit.dev/)
