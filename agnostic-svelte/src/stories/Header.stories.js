import HeaderExample from "./HeaderExample.svelte";
import FontDecorator from "./FontDecorator.svelte";

export default {
  title: "AG—Svelte (Beta)/Header",
  decorators: [() => FontDecorator],
};

export const HeaderTest = () => ({
  Component: HeaderExample,
});
