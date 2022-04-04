import AgChoiceInput from "../components/ChoiceInput.vue";
import { action } from "@storybook/addon-actions";

export default {
  title: "AG—Vue (Beta)/ChoiceInputs",
  components: [AgChoiceInput]
};

const handler = {
  changeHandler: action("change"),
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
  template: `<AgChoiceInput id="c1" type="checkbox" :options="options" legendLabel="Checkbox legend" @change="changeHandler" />`,
  methods: handler,
});

export const CheckboxAllDisabled = () => ({
  components: { AgChoiceInput },
  data() {
    return {
      options: reusableOptions,
      checkedOptions: [],
    };
  },
  template: `<AgChoiceInput id="c2" type="checkbox" :options="options" isDisabled legendLabel="Checkbox disabled example" @change="changeHandler" />`,
  methods: handler,
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
  template: `<AgChoiceInput id="c3" type="checkbox" :options="options" :disabledOptions="disabledOptions" legendLabel="Checkbox disabled example" @change="changeHandler" />`,
  methods: handler,
});

export const CheckboxHideFieldset = () => ({
  components: { AgChoiceInput },
  data() {
    return {
      options: reusableOptions,
      checkedOptions: [],
    };
  },
  template: `<AgChoiceInput id="c4" :isFieldset="false" type="checkbox" :options="options" legendLabel="Checkbox legend" @change="changeHandler" />`,
  methods: handler,
});

export const CheckboxInline = () => ({
  components: { AgChoiceInput },
  data() {
    return {
      options: reusableOptions,
      checkedOptions: [],
    };
  },
  template: `<AgChoiceInput id="c5" isInline type="checkbox" :options="options" legendLabel="Checkbox legend" @change="changeHandler" />`,
  methods: handler,
});

export const CheckboxSizes = () => ({
  components: { AgChoiceInput },
  data() {
    return {
      options: reusableOptions,
      checkedOptions: [],
    };
  },

  template: `<div><AgChoiceInput id="c6" isInline size="large" type="checkbox" :options="options" legendLabel="Large" @change="changeHandler" /><AgChoiceInput size="small" type="checkbox" :options="options" isInline legendLabel="Small" @change="changeHandler" /></div>`,
  methods: handler,
});

export const CheckboxPrecheckedOptions = () => ({
  components: { AgChoiceInput },
  data() {
    return {
      options: reusableOptions,
      checkedOptions: ["daily", "weekly"],
    };
  },
  template: `<div><AgChoiceInput id="c7" isInline size="large" type="checkbox" :options="options" :checkedOptions="checkedOptions" legendLabel="Large" @change="changeHandler" /></div>`,
  methods: handler,
});

export const CheckboxUnskinned = () => ({
  components: { AgChoiceInput },
  data() {
    return {
      options: reusableOptions
    };
  },
  template: `<div><AgChoiceInput id="c8" isInline :isSkinned="false" :options="options" legendLabel="Unskinned (fieldset and legend unstyled)" @change="changeHandler" /></div>`,
  methods: handler
});

export const Radio = () => ({
  components: { AgChoiceInput },
  data() {
    return {
      options: reusableOptions,
      checkedOptions: []
    };
  },
  template: `<AgChoiceInput id='r1" type="radio" :options="options" legendLabel="Radio legend" @change="changeHandler" />`,
  methods: handler
});

export const RadioHideFieldset = () => ({
  components: { AgChoiceInput },
  data() {
    return {
      options: reusableOptions,
      checkedOptions: []
    };
  },
  template: `<AgChoiceInput id="r2" :isFieldset="false" type="radio" :options="options" legendLabel="Radio legend" @change="changeHandler" />`,
  methods: handler
});

export const RadioInline = () => ({
  components: { AgChoiceInput },
  data() {
    return {
      options: reusableOptions,
      checkedOptions: []
    };
  },
  template: `<AgChoiceInput id="r3" isInline type="radio" :options="options" legendLabel="Radio legend" @change="changeHandler" />`,
  methods: handler
});

export const RadioSizes = () => ({
  components: { AgChoiceInput },
  data() {
    return {
      options: reusableOptions,
      checkedOptions: []
    };
  },
  template: `<div><AgChoiceInput id="r4" isInline size="large" type="radio" :options="options" legendLabel="Large" @change="changeHandler" /><AgChoiceInput isInline size="small" type="radio" :options="options" legendLabel="Small" @change="changeHandler" /></div>`,
  methods: handler
});

export const RadioPrecheckedOptions = () => ({
  components: { AgChoiceInput },
  data() {
    return {
      options: reusableOptions,
      checkedOptions: ["weekly"]
    };
  },
  template: `<div><AgChoiceInput id="r5" isInline size="large" type="radio" :options="options" :checkedOptions="checkedOptions" legendLabel="Prechecked" @change="changeHandler" /></div>`,
  methods: handler
});

export const RadioUnskinned = () => ({
  components: { AgChoiceInput },
  data() {
    return {
      options: reusableOptions
    };
  },
  template: `<div><AgChoiceInput id="r6" isInline :isSkinned="false" size="large" type="radio" :options="options" legendLabel="Unskinned (fieldset and legend unstyled)" @change="changeHandler" /></div>`,
  methods: handler
});
