import Tags from "./TagSlots.svelte";

export default {
  title: "AG—Svelte (Beta)/Tag",
  components: [Tags],
};

const Template = ({ ...args }) => ({
  Component: Tags,
  props: args,
});

export const All = Template.bind({});
All.args = {};
