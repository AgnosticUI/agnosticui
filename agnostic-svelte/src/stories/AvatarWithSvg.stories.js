import AvatarSvgExample from "./AvatarSvgExample.svelte";

export default {
  title: "AG—Svelte (Beta)/Avatar with SVG",
  component: AvatarSvgExample,
};

const Template = ({ ...args }) => ({
  Component: AvatarSvgExample,
  props: {
    ...args,
  },
});

export const Examples = Template.bind({});
