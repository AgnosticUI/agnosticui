import Tags from "./TagSlots.svelte";
import FontDecorator from "./FontDecorator.svelte";

export default {
  title: "AG—Svelte (Beta)/Tag",
  components: [Tags],
  decorators: [() => FontDecorator],
};

const Template = ({ ...args }) => ({
  Component: Tags,
  props: args,
});

export const All = Template.bind({});
All.args = {};
