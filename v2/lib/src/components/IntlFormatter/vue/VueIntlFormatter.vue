<template>
  <ag-intl-formatter
    ref="formatterRef"
    :type="type"
    :value="value"
    :lang="lang"
    :date="date"
    :weekday="weekday"
    :era="era"
    :year="year"
    :month="month"
    :day="day"
    :hour="hour"
    :minute="minute"
    :second="second"
    :timeZoneName="timeZoneName"
    :timeZone="timeZone"
    :hourFormat="hourFormat"
    :dateStyle="dateStyle"
    :timeStyle="timeStyle"
    .noGrouping="noGrouping"
    :currency="currency"
    :currencyDisplay="currencyDisplay"
    :minimumIntegerDigits="minimumIntegerDigits"
    :minimumFractionDigits="minimumFractionDigits"
    :maximumFractionDigits="maximumFractionDigits"
    :minimumSignificantDigits="minimumSignificantDigits"
    :maximumSignificantDigits="maximumSignificantDigits"
    @format-error="handleFormatError"
    v-bind="$attrs"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { IntlFormatterProps } from "../core/IntlFormatter";
import "../core/IntlFormatter"; // Registers the ag-intl-formatter web component

/**
 * Vue IntlFormatter Props
 * Following AgnosticUI v2 event conventions:
 * - Omit callback props (Vue uses emits)
 */
type VueIntlFormatterProps = Omit<IntlFormatterProps, "onFormatError">;

// Define props with defaults
const props = withDefaults(defineProps<VueIntlFormatterProps>(), {
  type: "date",
  lang: undefined,
  value: undefined,
  date: undefined,
  weekday: undefined,
  era: undefined,
  year: undefined,
  month: undefined,
  day: undefined,
  hour: undefined,
  minute: undefined,
  second: undefined,
  timeZoneName: undefined,
  timeZone: undefined,
  hourFormat: "auto",
  dateStyle: undefined,
  timeStyle: undefined,
  noGrouping: false,
  currency: "USD",
  currencyDisplay: "symbol",
  minimumIntegerDigits: undefined,
  minimumFractionDigits: undefined,
  maximumFractionDigits: undefined,
  minimumSignificantDigits: undefined,
  maximumSignificantDigits: undefined,
});

// Define emits
const emit = defineEmits<{
  "format-error": [detail: { type: "date" | "number"; error: string }];
}>();

// Template ref
const formatterRef = ref<HTMLElement>();

// Event handlers
const handleFormatError = (event: Event) => {
  const customEvent = event as CustomEvent<{ type: "date" | "number"; error: string }>;
  emit("format-error", customEvent.detail);
};
</script>
