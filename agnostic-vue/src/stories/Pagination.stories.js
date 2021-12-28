import AgPagination from "../components/Pagination.vue";
import { usePagingGenerator  } from "../components";

export default {
  title: "AG—Vue (Beta)/Pagination",
  component: AgPagination,
  // Cannot get preview.js or global decorator solutions to work.
  // https://storybook.js.org/tutorials/intro-to-storybook/vue/en/composite-component/
  decorators: [() => ({ template: '<div style="font-family: var(--agnostic-font-family-body);"><story/></div>' })],
};

const Template = args => ({
  components: { AgPagination },
  setup() {
    const { currentPaginationPage, paginationPages, handlePaginationUpdate } =
      usePagingGenerator(args.page, 2, 20);
    return {
      args,
      currentPaginationPage,
      paginationPages,
      handlePaginationUpdate,
    };
  },
  template: '<ag-pagination v-bind="args" @update-page="handlePaginationUpdate" :pages="paginationPages" :current="currentPaginationPage" />',
});

export const Default = Template.bind({});
Default .args = {
  page: 1,
};

export const NoFirstLast = Template.bind({});
NoFirstLast.args = {
  isFirstLast: false,
  page: 1,
};
export const CurrentPageBordered = Template.bind({});
CurrentPageBordered.args = {
  isBordered: true,
  page: 1,
};

export const Centered = Template.bind({});
Centered.args = {
  justify: "center",
  page: 1,
};

export const CustomNavigationLabels = Template.bind({});
CustomNavigationLabels.args = {
  navigationLabels: {
    previous: 'Previa',
    next: 'Siguiente',
    first: 'Primera',
    last: 'Última',
  },
  page: 1,
};
