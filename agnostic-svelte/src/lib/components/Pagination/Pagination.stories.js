import PaginationExample from "./PaginationExample.svelte";
import FontDecorator from "../../storybook-helpers/FontDecorator.svelte";

export default {
  title: "AG-Svelte (Beta)/Pagination",
  component: PaginationExample,
  decorators: [() => FontDecorator],
};

const Template = ({ ...args }) => ({
  Component: PaginationExample,
  props: args,
});

const defaultArgs = {
  offset: 2,
  current: 1,
  totalPages: 50,
  ariaLabel: "Pagination",
  onPageChange: (pageNumber) => {
    // eslint-disable-next-line no-console
    console.log("onPageChange called with page: ", pageNumber);
  },
};

export const Default = Template.bind({});
Default.args = { ...defaultArgs };

export const NoFirstLast = Template.bind({});
NoFirstLast.args = { ...defaultArgs, isFirstLast: false };

export const CurrentPageBordered = Template.bind({});
CurrentPageBordered.args = {
  ...defaultArgs,
  isBordered: true,
};

export const Centered = Template.bind({});
Centered.args = {
  ...defaultArgs,
  justify: "center",
};

export const End = Template.bind({});
End.args = {
  ...defaultArgs,
  justify: "end",
};

export const CustomNavigationLabels = Template.bind({});
CustomNavigationLabels.args = {
  ...defaultArgs,
  navigationLabels: {
    previous: "Previa",
    next: "Siguiente",
    first: "Primera",
    last: "Última",
  },
};
