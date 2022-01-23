import InputAddonsExample from "./InputAddonsExample.svelte";
import FontDecorator from "../../storybook-helpers/FontDecorator.svelte";

export default {
  title: "AG—Svelte (Beta)/InputAddons",
  decorators: [() => FontDecorator],
};

export const InputAddonsTest = () => ({
  Component: InputAddonsExample,
});
