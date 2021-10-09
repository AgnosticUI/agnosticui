import Switch from "./Switch.svelte";
import { action } from "@storybook/addon-actions";

const actionsData = {
  change: action("change"),
};

export default {
  title: "AG—Svelte (Beta)/Switch",
  component: Switch,
};

const Template = ({ ...args }) => ({
  Component: Switch,
  props: args,
  on: {
    ...actionsData,
  },
});

export const SwitchSmall = Template.bind({});
SwitchSmall.args = {
  id: "1",
  label: "Switch small label",
  size: "small",
};

export const SwitchDefault = Template.bind({});
SwitchDefault.args = {
  id: "2",
  label: "Switch default",
};

export const SwitchLarge = Template.bind({});
SwitchLarge.args = {
  id: "3",
  label: "Switch large label",
  size: "large",
};

export const SwitchPrechecked = Template.bind({});
SwitchPrechecked.args = {
  id: "4",
  label: "Switch prechecked",
  size: "large",
  isChecked: true,
};

export const SwitchDisabled = Template.bind({});
SwitchDisabled.args = {
  id: "5",
  label: "Switch disabled",
  isDisabled: true,
};

export const SwitchAction = Template.bind({});
SwitchAction.args = {
  id: "99",
  label: "Switch action",
  isAction: true,
};

export const SwitchBorder = Template.bind({});
SwitchBorder.args = {
  id: "6",
  label: "Switch border",
  isBordered: true,
};

export const SwitchBorderAction = Template.bind({});
SwitchBorderAction.args = {
  id: "7",
  label: "Switch border action",
  isBordered: true,
  isAction: true,
};

export const SwitchLabelRight = Template.bind({});
SwitchLabelRight.args = {
  id: "8",
  label: "Switch with label on right",
  labelPosition: "right",
};

export const SwitchLabelRightBorder = Template.bind({});
SwitchLabelRightBorder.args = {
  id: "9",
  label: "Switch with label on right and border",
  labelPosition: "right",
  isBordered: true,
};

export const SwitchLabelRightAction = Template.bind({});
SwitchLabelRightAction.args = {
  id: "10",
  label: "Switch with label on right action",
  labelPosition: "right",
  isAction: true,
};
export const SwitchLabelRightActionBorder = Template.bind({});
SwitchLabelRightActionBorder.args = {
  id: "11",
  label: "Switch with label on right action",
  labelPosition: "right",
  isAction: true,
  isBordered: true,
};

export const SwitchLabelRightActionBorderDisabled = Template.bind({});
SwitchLabelRightActionBorderDisabled.args = {
  id: "12",
  label: "Switch with label on right action",
  labelPosition: "right",
  isAction: true,
  isBordered: true,
  isDisabled: true,
};
