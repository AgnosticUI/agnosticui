import Spinner from "./Spinner.svelte";
import FontDecorator from "./FontDecorator.svelte";

export default {
  title: "AG-Svelte (Beta)/Spinner",
  component: Spinner,
  decorators: [() => FontDecorator],
};

const Template = ({ ...args }) => ({
  Component: Spinner,
  props: args,
});

const defaultArgs = {
  size: "",
};

export const Small = Template.bind({});
Small.args = {
  ...defaultArgs,
  size: "small",
};

export const DefaultSpinner = Template.bind({});
DefaultSpinner.args = {
  ...defaultArgs,
  // Please use a better aria label -- this is just an example of how ;)
  ariaLabel: "Spinner to indicate data is loading…",
};

export const Large = Template.bind({});
Large.args = {
  ...defaultArgs,
  size: "large",
};
