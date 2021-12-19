import Table from "../components/Table.vue";

export default {
  title: "AG—Vue (Beta)/Table",
  component: Table
};

const createRow = (name, weapon, slams, birthdate) => ({ name, weapon, slams, birthdate });

export const Default = () => ({
  components: { Table },
  data() {
    return {
      rows: [
        createRow('Roger Federer', 'Forehand and serve', 20, 'August 8, 1981'),
        createRow('Andre Agassi', 'Return of serve. Groundstrokes', 8, 'April 29, 1970'),
        createRow('Steffi Graf', 'Forehand', 22, 'June 14, 1969'),
        createRow('Martina Navratilova', 'Serve and volley', 18, 'October 18, 1956'),
        createRow('Rafael Nadal', 'Backhand and speed', 20, 'June 3, 1986'),
        createRow('Althea Gibson', 'Speed, strength, and fluidity ', 11, 'August 25, 1927'),
        createRow('Novak Djokovic', 'Backhand and speed', 20, 'May 22, 1987'),
        createRow('Arthur Ashe', 'Serve and volley', 3, 'July 10, 1943'),
      ],
      headers: [
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
          sortFn: (a, b) => {
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
      ]
    };
  },
  template: `<Table :rows="rows" :headers="headers" caption="My caption test" captionPosition="top" />`
});
