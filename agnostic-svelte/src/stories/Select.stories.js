import Select from "./Select.svelte";
import { action } from "@storybook/addon-actions";

const actionsData = {
  selected: action("selected"),
};

export default {
  title: "AG-Svelte (Beta)/Select",
  component: Select,
};

const tennisOptions = [
  { value: "andre", label: "Andre Agassi" },
  { value: "serena", label: "Serena Williams" },
  { value: "mac", label: "John McEnroe" },
  { value: "borg", label: "Bjorn Borg" },
  { value: "althea", label: "Althea Gibson" },
  { value: "roger", label: "Roger Federer" },
];

const Template = ({ ...args }) => ({
  Component: Select,
  props: args,
  on: {
    ...actionsData,
  },
});

export const Default = Template.bind({});
Default.args = {
  uniqueId: "sel1",
  name: "select-1",
  labelCopy: "this is label copy",
  options: tennisOptions,
};

export const FirstOptionLabel = Template.bind({});
FirstOptionLabel.args = {
  defaultOptionLabel: "Select your favorite tennis player of all-time",
  uniqueId: "sel2",
  name: "select-2",
  labelCopy: "this is label copy",
  options: tennisOptions,
};

export const Disabled = Template.bind({});
Disabled.args = {
  uniqueId: "sel3",
  name: "select-3",
  isDisabled: true,
  labelCopy: "this is label copy",
  options: tennisOptions,
};

export const Small = Template.bind({});
Small.args = {
  uniqueId: "sel4",
  name: "select-4",
  size: "small",
  labelCopy: "this is label copy",
  options: tennisOptions,
};

export const Large = Template.bind({});
Large.args = {
  uniqueId: "sel5",
  name: "select-5",
  size: "large",
  labelCopy: "this is label copy",
  options: tennisOptions,
};

export const Multiple = Template.bind({});
Multiple.args = {
  uniqueId: "sel6",
  name: "select-6",
  isMultiple: true,
  multipleSize: 5,
  labelCopy: "this is label copy",
  options: tennisOptions,
};
