import ChoiceInput from "./ChoiceInput.svelte";
import { action } from "@storybook/addon-actions";
import FontDecorator from "../../storybook-helpers/FontDecorator.svelte";

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
  title: "AG—Svelte (Beta)/ChoiceInput",
  component: ChoiceInput,
  decorators: [() => FontDecorator],
};

const Template = ({ ...args }) => ({
  Component: ChoiceInput,
  props: args,
  on: {
    ...actionsData,
  },
});

export const DefaultCheckbox = Template.bind({});
DefaultCheckbox.args = {
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

export const CheckboxSmall = Template.bind({});
CheckboxSmall.args = {
  type: "checkbox",
  isInline: true,
  size: "small",
  options: reusableOptions,
  legendLabel: "Checkbox large",
};

export const CheckboxLarge = Template.bind({});
CheckboxLarge.args = {
  type: "checkbox",
  isInline: true,
  size: "large",
  options: reusableOptions,
  legendLabel: "Checkbox large",
};

export const CheckboxPrecheckedOptions = Template.bind({});
CheckboxPrecheckedOptions.args = {
  type: "checkbox",
  isInline: true,
  size: "large",
  options: reusableOptions,
  checkedOptions: ["daily", "weekly"],
  legendLabel: "Checkbox prechecked items",
};

export const CheckboxUnskinned = Template.bind({});
CheckboxUnskinned.args = {
  type: "checkbox",
  isInline: true,
  isSkinned: false,
  options: reusableOptions,
  legendLabel: "Checkbox unskinned (fieldset and legend unstyled)",
};

export const Radio = Template.bind({});
Radio.args = {
  type: "radio",
  options: reusableOptions,
  legendLabel: "Radio legend",
};

export const RadioHideFieldset = Template.bind({});
RadioHideFieldset.args = {
  type: "radio",
  options: reusableOptions,
  legendLabel: "Radio fieldset hidden",
  isFieldset: false,
};

export const RadioInline = Template.bind({});
RadioInline.args = {
  type: "radio",
  options: reusableOptions,
  legendLabel: "Radio inline",
  isInline: true,
};

export const RadioSmall = Template.bind({});
RadioSmall.args = {
  type: "radio",
  options: reusableOptions,
  legendLabel: "Radio small",
  size: "small",
  isInline: true,
};

export const RadioLarge = Template.bind({});
RadioLarge.args = {
  type: "radio",
  options: reusableOptions,
  legendLabel: "Radio large",
  size: "large",
  isInline: true,
};

export const RadioPrecheckedOptions = Template.bind({});
RadioPrecheckedOptions.args = {
  type: "radio",
  options: reusableOptions,
  legendLabel: "Radio large",
  size: "large",
  isInline: true,
  checkedOptions: ["weekly"],
};

export const RadioAllDisabled = Template.bind({});
RadioAllDisabled.args = {
  type: "radio",
  options: reusableOptions,
  legendLabel: "Radio large",
  size: "large",
  isInline: true,
  isDisabled: true,
};

export const RadioDisabledOptions = Template.bind({});
RadioDisabledOptions.args = {
  type: "radio",
  options: reusableOptions,
  legendLabel: "Radio large",
  size: "large",
  isInline: true,
  checkedOptions: ["weekly"],
  disabledOptions: ["daily", "monthly"],
};

export const RadioUnskinned = Template.bind({});
RadioUnskinned.args = {
  type: "radio",
  isInline: true,
  isSkinned: false,
  options: reusableOptions,
  legendLabel: "Radio unskinned (fieldset and legend unstyled)",
};
