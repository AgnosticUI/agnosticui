import AgChoiceInput from "./ChoiceInput.vue";
import { action } from "@storybook/addon-actions";

const actionsData = {
  click: action("click"),
  blur: action("blur"),
  change: action("change"),
  input: action("input"),
  focus: action("focus"),
};

export default {
  title: "ChoiceInputs",
  components: [AgChoiceInput],
};

const reusableOptions = [
  {
    name: "frequency",
    value: "daily",
    label: "Daily",
  },
  {
    name: "frequency",
    value: "weekly",
    label: "Weekly",
  },
  {
    name: "frequency",
    value: "monthly",
    label: "Monthly",
  },
];

export const Checkbox = () => ({
  components: { AgChoiceInput },
  data() {
    return {
      options: reusableOptions,
      checkedOptions: [],
    };
  },
  template: `<AgChoiceInput type="checkbox" :options="options" legendLabel="Checkbox legend" />`,
  on: {
    ...actionsData,
  },
});

export const CheckboxAllDisabled = () => ({
  components: { AgChoiceInput },
  data() {
    return {
      options: reusableOptions,
      checkedOptions: [],
    };
  },
  template: `<AgChoiceInput type="checkbox" :options="options" isDisabled legendLabel="Checkbox disabled example" />`,
  on: {
    ...actionsData,
  },
});

const disabledOptions = ["monthly", "weekly"];
export const CheckboxOptionDisabled = () => ({
  components: { AgChoiceInput },
  data() {
    return {
      options: reusableOptions,
      disabledOptions: disabledOptions,
      checkedOptions: [],
    };
  },
  template: `<AgChoiceInput type="checkbox" :options="options" :disabledOptions="disabledOptions" legendLabel="Checkbox disabled example" />`,
});

export const CheckboxHideFieldset = () => ({
  components: { AgChoiceInput },
  data() {
    return {
      options: reusableOptions,
      checkedOptions: [],
    };
  },
  template: `<AgChoiceInput :isFieldset="false" type="checkbox" :options="options" legendLabel="Checkbox legend" />`,
  on: {
    ...actionsData,
  },
});

export const CheckboxInline = () => ({
  components: { AgChoiceInput },
  data() {
    return {
      options: reusableOptions,
      checkedOptions: [],
    };
  },
  template: `<AgChoiceInput isInline type="checkbox" :options="options" legendLabel="Checkbox legend" />`,
  on: {
    ...actionsData,
  },
});

export const CheckboxSizes = () => ({
  components: { AgChoiceInput },
  data() {
    return {
      options: reusableOptions,
      checkedOptions: [],
    };
  },
  template: `<div><AgChoiceInput isInline size="large" type="checkbox" :options="options" legendLabel="Large" /><AgChoiceInput size="small" type="checkbox" :options="options" isInline legendLabel="Small" /></div>`,
  on: {
    ...actionsData,
  },
});

export const CheckboxPrecheckedOptions = () => ({
  components: { AgChoiceInput },
  data() {
    return {
      options: reusableOptions,
      checkedOptions: ["daily", "weekly"],
    };
  },
  template: `<div><AgChoiceInput isInline size="large" type="checkbox" :options="options" :checkedOptions="checkedOptions" legendLabel="Large" /></div>`,
  on: {
    ...actionsData,
  },
});

export const Radio = () => ({
  components: { AgChoiceInput },
  data() {
    return {
      options: reusableOptions,
      checkedOptions: [],
    };
  },
  template: `<AgChoiceInput type="radio" :options="options" legendLabel="Radio legend" />`,
  on: {
    ...actionsData,
  },
});

export const RadioHideFieldset = () => ({
  components: { AgChoiceInput },
  data() {
    return {
      options: reusableOptions,
      checkedOptions: [],
    };
  },
  template: `<AgChoiceInput :isFieldset="false" type="radio" :options="options" legendLabel="Radio legend" />`,
  on: {
    ...actionsData,
  },
});

export const RadioInline = () => ({
  components: { AgChoiceInput },
  data() {
    return {
      options: reusableOptions,
      checkedOptions: [],
    };
  },
  template: `<AgChoiceInput isInline type="radio" :options="options" legendLabel="Radio legend" />`,
  on: {
    ...actionsData,
  },
});

export const RadioSizes = () => ({
  components: { AgChoiceInput },
  data() {
    return {
      options: reusableOptions,
      checkedOptions: [],
    };
  },
  template: `<div><AgChoiceInput isInline size="large" type="radio" :options="options" legendLabel="Large" /><AgChoiceInput isInline size="small" type="radio" :options="options" legendLabel="Small" /></div>`,
  on: {
    ...actionsData,
  },
});

export const RadioPrecheckedOptions = () => ({
  components: { AgChoiceInput },
  data() {
    return {
      options: reusableOptions,
      checkedOptions: ["weekly"],
    };
  },
  template: `<div><AgChoiceInput isInline size="large" type="radio" :options="options" :checkedOptions="checkedOptions" legendLabel="Prechecked" /></div>`,
  on: {
    ...actionsData,
  },
});
