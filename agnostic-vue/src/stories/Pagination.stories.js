import AgPagination from "../components/Pagination.vue";
import { usePagination } from 'agnostic-helpers/dist/agnostic-helpers.esm';
import { ref } from 'vue';
import { action } from '@storybook/addon-actions';

export default {
  title: "AG—Vue (Beta)/Pagination",
  component: AgPagination,
  // Cannot get preview.js or global decorator solutions to work.
  // https://storybook.js.org/tutorials/intro-to-storybook/vue/en/composite-component/
  decorators: [() => ({ template: '<div style="font-family: var(--agnostic-font-family-body);"><story/></div>' })],
  argTypes: {
    onPageUpdated: {},
  }
};

const actionsData = {
  onPageUpdated: action('update:pageNumber')
};

const Template = args => ({
  components: { AgPagination },
  setup() {
    let pages = args.paging.generate(args.page, 20);
    let page = ref(args.page);
    const handlePageUpdate = (pageNumber) => {
      console.log('handlePageUpdate -- pageNumber: ', pageNumber);
      // THIS DOES NOT TRIGGER A RERENDER
      // page = pageNumber;
      // pages = args.paging.generate(pageNumber, 20);
      actionsData.onPageUpdated('update-page', pageNumber);
    };
    return {
      handlePageUpdate,
      args,
      page,
      pages,
    };
  },
  template: '<ag-pagination v-bind="args" @update-page="handlePageUpdate" :pages="pages" :current="page" />',
});

export const FirstPage = Template.bind({});
FirstPage.args = {
  page: 1,
  paging: usePagination({ offset: 2 }),
};

export const Page2 = Template.bind({});
Page2.args = {
  page: 2,
  paging: usePagination({ offset: 2 }),
};

export const Page10 = Template.bind({});
Page10.args = {
  page: 10,
  paging: usePagination({ offset: 2 }),
};

export const LastPage = Template.bind({});
LastPage.args = {
  page: 20,
  paging: usePagination({ offset: 2 }),
};

export const NoFirstLast = Template.bind({});
NoFirstLast.args = {
  isFirstLast: false,
  page: 10,
  paging: usePagination({ offset: 2 }),
};
export const CurrentPageBordered = Template.bind({});
CurrentPageBordered.args = {
  isBordered: true,
  page: 10,
  paging: usePagination({ offset: 2 }),
};

export const Centered = Template.bind({});
Centered.args = {
  justify: "center",
  page: 10,
  paging: usePagination({ offset: 2 }),
};

export const CustomNavigationLabels = Template.bind({});
CustomNavigationLabels.args = {
  navigationLabels: {
    previous: 'Previa',
    next: 'Siguiente',
    first: 'Primera',
    last: 'Última',
  },
  page: 10,
  paging: usePagination({ offset: 2 }),
};
