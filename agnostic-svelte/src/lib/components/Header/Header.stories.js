import HeaderExample from "./HeaderExample.svelte";
import FontDecorator from "../../storybook-helpers/FontDecorator.svelte";

export default {
  title: "AG—Svelte (Beta)/Header",
  decorators: [() => FontDecorator],
};

export const HeaderTest = () => ({
  Component: HeaderExample,
});
