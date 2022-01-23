import AvatarGroupSlots from "./AvatarGroupSlots.svelte";
import FontDecorator from "../../storybook-helpers/FontDecorator.svelte";

export default {
  title: "AG—Svelte (Beta)/Avatar Groups",
  component: AvatarGroupSlots,
  decorators: [() => FontDecorator],
};

const Template = ({ ...args }) => ({
  Component: AvatarGroupSlots,
  props: {
    ...args,
  },
});

export const Examples = Template.bind({});
