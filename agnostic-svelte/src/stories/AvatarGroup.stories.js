import AvatarGroupSlots from "./AvatarGroupSlots.svelte";

export default {
  title: "AG—Svelte (Beta)/Avatar Groups",
  component: AvatarGroupSlots,
};

const Template = ({ ...args }) => ({
  Component: AvatarGroupSlots,
  props: {
    ...args,
  },
});

export const Examples = Template.bind({});
