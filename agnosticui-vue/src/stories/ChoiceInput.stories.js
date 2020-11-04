import AgChoiceInput from "./ChoiceInput.vue";

export default {
  title: "ChoiceInputs",
  components: [
    AgChoiceInput,
  ]
}

const reusableOptions = [{
  name: "frequency",
  value: "daily",
  label: "Daily",
}, {
  name: "frequency",
  value: "weekly",
  label: "Weekly",
}, {
  name: "frequency",
  value: "monthly",
  label: "Monthly",
}];

export const Checkbox = () => ({
  components: { AgChoiceInput },
  data() {
    return {
      options: reusableOptions,
      checkedOptions: []
    }
  },
  template: `<AgChoiceInput type="checkbox" :options="options" legendLabel="Checkbox legend" />`,
});

export const Radio = () => ({
  components: { AgChoiceInput },
  data() {
    return {
      options: reusableOptions,
      checkedOptions: []
    }
  },
  template: `<AgChoiceInput type="radio" :options="options" legendLabel="Radio legend" />`,
});
