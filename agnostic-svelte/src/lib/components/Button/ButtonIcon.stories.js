import ButtonIconTest from "./ButtonIconTest.svelte";
import FontDecorator from "../../storybook-helpers/FontDecorator.svelte";

export default {
  title: "AG—Svelte (Beta)/ButtonIcons",
  decorators: [() => FontDecorator],
};

export const ButtonIcons = () => ({
  Component: ButtonIconTest,
});
