import Switch from "./Switch.svelte";
import { action } from "@storybook/addon-actions";

const actionsData = {
  change: action("change"),
};

export default {
  title: "Switch",
  component: Switch,
  on: {
    ...actionsData,
  },
  argTypes: {
    id: { control: "string" },
    label: { control: "string" },
    size: { control: "string" },
  },
};

const Template = ({ ...args }) => ({
  Component: Switch,
  props: args,
});

export const SwitchDefault = Template.bind({});
SwitchDefault.args = {
  id: "1",
  label: "Switch default",
};
