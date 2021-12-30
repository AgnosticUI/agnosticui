import ButtonGroupTests from "./ButtonGroupTests.svelte";
import FontDecorator from "./FontDecorator.svelte";

export default {
  title: "AG—Svelte (Beta)/ButtonGroups",
  decorators: [() => FontDecorator],
};

export const ButtonGroup = () => ({
  Component: ButtonGroupTests,
});
