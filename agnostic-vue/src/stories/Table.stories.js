import Table from "../components/Table.vue";

export default {
  title: "AG—Vue (Beta)/Table",
  component: Table
};

/*

const headers: TableHeaderCell[] = [
  {
    label: 'Name',
    key: 'name',
    sortable: true,
  },
  {
    label: 'Weapon',
    key: 'weapon',
  },
  {
    label: 'Grand Slams',
    key: 'slams',
    sortable: true,
  },
  {
    label: 'Birthdate',
    key: 'birthdate',
    sortable: true,
    sortFn: (a: string, b: string) => {
      // Naive date comparisons; but we're controlling data so ;-)
      const d1 = new Date(a).getTime() || -Infinity;
      const d2 = new Date(b).getTime() || -Infinity;
      if (d1 > d2) {
        return 1;
      }
      if (d1 < d2) {
        return -1;
      }
      return 0;
    },
  },
]; */
export const Default = () => ({
  components: { Table },
  data() {
    return {
      headers: [{
        label: 'Name',
        key: 'name',
        sortable: true,
      }, {
        label: 'Weapon',
        key: 'weapon',
      }]
    };
  },
  template: `<Table :headers="headers" caption="My caption test" captionPosition="top" />`
});
