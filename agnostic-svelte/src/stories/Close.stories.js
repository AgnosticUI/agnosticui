import Close from "./Close.svelte";

export default {
  title: "AG-Svelte (Beta)/Close",
  component: Close,
};

const Template = ({ ...args }) => ({
  Component: Close,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};

export const Small = Template.bind({});
Small.args = {
  size: "small",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
};

export const XLarge = Template.bind({});
XLarge.args = {
  size: "xlarge",
};
