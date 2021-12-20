import Table from "../components/Table.vue";

export default {
  title: "AG—Vue (Beta)/Table",
  component: Table
};

const createRow = (name, weapon, slams, birthdate) => ({ name, weapon, slams, birthdate });

export const Variants = () => ({
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
  template: `<section class="mbe16">
    <h2>Default table</h2>
    <Table :rows="rows" :headers="headers" caption="My caption test" captionPosition="top" />
    <h2 class="mbs16">Sizes</h2>
    <div class="mbe16"></div>
    <Table :headers="headers" :rows="rows" tableSize="small" caption="Tennis Superstars" />
    <Table :headers="headers" :rows="rows" tableSize="large" caption="Tennis Superstars" />
    <Table :headers="headers" :rows="rows" tableSize="xlarge" caption="Tennis Superstars" />
    <div class="mbe16"></div>
    <h3>Uppercase header tables</h3>
    <Table :headers="headers" :rows="rows" isUppercasedHeaders caption="Tennis Superstars" />
    <div class="mbe16"></div>
    <h3>Borders</h3>
    <Table :headers="headers" :rows="rows" isBordered caption="Tennis Superstars" />
    <div class="mbe16"></div>
    <h3>Borderless</h3>
    <Table :headers="headers" :rows="rows" isBorderless caption="Tennis Superstars" />
    <div class="mbe16"></div>
    <h3>Striped</h3>
    <Table :headers="headers" :rows="rows" isStriped caption="Tennis Superstars" />
    <div class="mbe16"></div>
    <h3>Hoverable</h3>
    <Table :headers="headers" :rows="rows" isHoverable caption="Tennis Superstars" />
    <div class="mbe16"></div>
    <h3>Striped & Hoverable</h3>
    <Table :headers="headers" :rows="rows" isStriped isHoverable caption="Tennis Superstars" />
    <div class="mbe16"></div>
    <h3>Stacked</h3>
    <Table :headers="headers" :rows="rows" isStacked caption="Tennis Superstars" />
    <div class="mbe16"></div>
    <h2 class="mbs16">Responsive horizontal scrolling (resize viewport)</h2>
    <h3>Small</h3>
    <Table :headers="headers" :rows="rows" responsiveSize="small" caption="Tennis Superstars" />
    <h3>Medium</h3>
    <Table :headers="headers" :rows="rows" responsiveSize="medium" caption="Tennis Superstars" />
    <h3>Large</h3>
    <Table :headers="headers" :rows="rows" responsiveSize="large" caption="Tennis Superstars" />
    <h3>XLarge</h3>
    <Table :headers="headers" :rows="rows" responsiveSize="xlarge" caption="Tennis Superstars" />
    <div class="mbe16"></div>
  </section>`
});

export const CustomHeaderWidths = () => ({
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
          width: '25%',
          sortable: true,
        },
        {
          label: 'Weapon',
          key: 'weapon',
          width: '45%',
        },
        {
          label: 'Grand Slams',
          key: 'slams',
          width: '13%',
          sortable: true,
          // Only use this approach for trusted input that you control
          renderFn: (value) => `<td>${value}<span class="mis6">🏆</span></td>`
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
  template: `<section class="mbe16">
    <Table :rows="rows" :headers="headers" caption="My caption test" />
  </section>`
});
