<template>
  <ag-intl-formatter
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
    :noGrouping="noGrouping"
    :currency="currency"
    :currencyDisplay="currencyDisplay"
    :minimumIntegerDigits="minimumIntegerDigits"
    :minimumFractionDigits="minimumFractionDigits"
    :maximumFractionDigits="maximumFractionDigits"
    :minimumSignificantDigits="minimumSignificantDigits"
    :maximumSignificantDigits="maximumSignificantDigits"
  />
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import "../core/IntlFormatter.js";

export default defineComponent({
  name: "VueIntlFormatter",
  props: {
    type: {
      type: String as PropType<"date" | "number" | "percent" | "currency">,
      default: "date",
    },
    value: {
      type: [Number, String, Date] as PropType<number | string | Date>,
      default: () => new Date(),
    },
    lang: {
      type: String,
      default: undefined,
    },
    // Date-specific props
    date: {
      type: [String, Date] as PropType<Date | string>,
      default: undefined,
    },
    weekday: {
      type: String as PropType<"narrow" | "short" | "long">,
      default: undefined,
    },
    era: {
      type: String as PropType<"narrow" | "short" | "long">,
      default: undefined,
    },
    year: {
      type: String as PropType<"numeric" | "2-digit">,
      default: undefined,
    },
    month: {
      type: String as PropType<
        "numeric" | "2-digit" | "narrow" | "short" | "long"
      >,
      default: undefined,
    },
    day: {
      type: String as PropType<"numeric" | "2-digit">,
      default: undefined,
    },
    hour: {
      type: String as PropType<"numeric" | "2-digit">,
      default: undefined,
    },
    minute: {
      type: String as PropType<"numeric" | "2-digit">,
      default: undefined,
    },
    second: {
      type: String as PropType<"numeric" | "2-digit">,
      default: undefined,
    },
    timeZoneName: {
      type: String as PropType<"short" | "long">,
      default: undefined,
    },
    timeZone: {
      type: String,
      default: undefined,
    },
    hourFormat: {
      type: String as PropType<"auto" | "12" | "24">,
      default: "auto",
    },
    // Number-specific props
    noGrouping: {
      type: Boolean,
      default: false,
    },
    currency: {
      type: String,
      default: "USD",
    },
    currencyDisplay: {
      type: String as PropType<"symbol" | "narrowSymbol" | "code" | "name">,
      default: "symbol",
    },
    minimumIntegerDigits: {
      type: Number,
      default: undefined,
    },
    minimumFractionDigits: {
      type: Number,
      default: undefined,
    },
    maximumFractionDigits: {
      type: Number,
      default: undefined,
    },
    minimumSignificantDigits: {
      type: Number,
      default: undefined,
    },
    maximumSignificantDigits: {
      type: Number,
      default: undefined,
    },
  },
});
</script>
