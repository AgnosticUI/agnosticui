import Pagination from "./Pagination.svelte";

export default {
  title: "AG-Svelte (Beta)/Pagination",
  component: Pagination,
};

const Template = ({ ...args }) => ({
  Component: Pagination,
  props: args,
});

const defaultArgs = {
  offset: 2,
  current: 1,
  totalPages: 50,
  ariaLabel: "Pagination",
  onPageChange: (pageNumber) => {
    // eslint-disable-next-line no-console
    console.log("onPageChange called with page: ", pageNumber)
  }
}

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
