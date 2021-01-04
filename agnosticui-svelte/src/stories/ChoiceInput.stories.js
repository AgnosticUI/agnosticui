import ChoiceInput from "./ChoiceInput.svelte";
import { action } from "@storybook/addon-actions";

const actionsData = {
  click: action("click"),
  blur: action("blur"),
  change: action("change"),
  input: action("input"),
  focus: action("focus"),
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

export default {
  title: "ChoiceInput",
  component: ChoiceInput,
};

const Template = ({ ...args }) => ({
  Component: ChoiceInput,
  props: args,
  on: {
    ...actionsData,
  },
});

export const Default = Template.bind({});
Default.args = {
  type: "checkbox",
  options: reusableOptions,
  legendLabel: "Checkbox legend",
};

export const Disabled = Template.bind({});
Disabled.args = {
  type: "checkbox",
  isDisabled: true,
  options: reusableOptions,
  legendLabel: "Checkbox disabled",
};

const disabledOptions = ["monthly", "weekly"];
export const OptionDisabled = Template.bind({});
OptionDisabled.args = {
  type: "checkbox",
  disabledOptions: disabledOptions,
  options: reusableOptions,
  legendLabel: "Checkbox disabled",
};

export const CheckboxHideFieldset = Template.bind({});
CheckboxHideFieldset.args = {
  type: "checkbox",
  isFieldset: false,
  options: reusableOptions,
  legendLabel: "Checkbox fieldset hidden",
};

export const CheckboxInline = Template.bind({});
CheckboxInline.args = {
  type: "checkbox",
  isInline: true,
  options: reusableOptions,
  legendLabel: "Checkbox inline",
};
