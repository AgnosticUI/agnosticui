import DiscloseSlots from "./DiscloseSlots.svelte";
import FontDecorator from "../../storybook-helpers/FontDecorator.svelte";

export default {
  title: "AG-Svelte (Beta)/Disclose",
  component: DiscloseSlots,
  decorators: [() => FontDecorator],
};

const Template = ({ ...args }) => ({
  Component: DiscloseSlots,
  props: args,
});

export const Examples = Template.bind({});
Examples.args = {};
