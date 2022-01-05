import Loader from "./Loader.svelte";
import FontDecorator from "./FontDecorator.svelte";

export default {
  title: "AG-Svelte (Beta)/Loader",
  component: Loader,
  decorators: [() => FontDecorator],
};

const Template = ({ ...args }) => ({
  Component: Loader,
  props: args,
});

const defaultArgs = {
  size: "",
};

export const DefaultLoader = Template.bind({});
DefaultLoader.args = {
  ...defaultArgs,
  // Please use a better aria label -- this is just an example of how ;)
  ariaLabel: "Loader to indicate data is loading…",
};

export const Small = Template.bind({});
Small.args = {
  ...defaultArgs,
  size: "small",
};

export const Large = Template.bind({});
Large.args = {
  ...defaultArgs,
  size: "large",
};
