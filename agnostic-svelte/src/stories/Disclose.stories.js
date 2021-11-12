import DiscloseSlots from "./DiscloseSlots.svelte";

export default {
  title: "AG-Svelte (Beta)/Disclose",
  component: DiscloseSlots,
};

const Template = ({ ...args }) => ({
  Component: DiscloseSlots,
  props: args,
});

export const Examples = Template.bind({});
Examples.args = {};
