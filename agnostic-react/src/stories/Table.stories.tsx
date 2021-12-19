import { Meta } from '@storybook/react';
import { Table, TableHeaders, TableRows } from '../Table';

export default {
  title: 'AG—React (Beta)/Table',
  component: Table,
} as Meta;

const headers: TableHeaders[] = [
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
];

const createRow = (name, weapon, slams, birthdate) => ({ name, weapon, slams, birthdate });
const rows: TableRows[] = [
  createRow(
    'Serena Williams',
    "Biggest serve in women's tennis all-time",
    23,
    'September 26, 1981',
  ),
  createRow('Roger Federer', 'Forehand and serve', 20, 'August 8, 1981'),
  createRow('Andre Agassi', 'Return of serve. Groundstrokes', 8, 'April 29, 1970'),
  createRow('Steffi Graf', 'Forehand', 22, 'June 14, 1969'),
  createRow('Martina Navratilova', 'Serve and volley', 18, 'October 18, 1956'),
  createRow('Rafael Nadal', 'Backhand and speed', 20, 'June 3, 1986'),
  createRow('Althea Gibson', 'Speed, strength, and fluidity ', 11, 'August 25, 1927'),
  createRow('Novak Djokovic', 'Backhand and speed', 20, 'May 22, 1987'),
  createRow('Arthur Ashe', 'Serve and volley', 3, 'July 10, 1943'),
];
export const Default = () => <Table headers={headers} rows={rows} caption="Tennis Superstars" />;
export const Small = () => (
  <Table headers={headers} rows={rows} tableSize="small" caption="Tennis Superstars" />
);
export const Large = () => (
  <Table headers={headers} rows={rows} tableSize="large" caption="Tennis Superstars" />
);
export const XLarge = () => (
  <Table headers={headers} rows={rows} tableSize="xlarge" caption="Tennis Superstars" />
);
export const ResponsiveSmall = () => (
  <Table headers={headers} rows={rows} responsiveSize="small" caption="Tennis Superstars" />
);
export const ResponsiveMedium = () => (
  <Table headers={headers} rows={rows} responsiveSize="medium" caption="Tennis Superstars" />
);
export const ResponsiveLarge = () => (
  <Table headers={headers} rows={rows} responsiveSize="large" caption="Tennis Superstars" />
);
export const ResponsiveXLarge = () => (
  <Table headers={headers} rows={rows} responsiveSize="xlarge" caption="Tennis Superstars" />
);
export const isUppercasedHeaders = () => (
  <Table headers={headers} rows={rows} isUppercasedHeaders caption="Tennis Superstars" />
);
export const Bordered = () => (
  <Table headers={headers} rows={rows} isBordered caption="Tennis Superstars" />
);
export const Borderless = () => (
  <Table headers={headers} rows={rows} isBorderless caption="Tennis Superstars" />
);
export const Striped = () => (
  <Table headers={headers} rows={rows} isStriped caption="Tennis Superstars" />
);
export const Hoverable = () => (
  <Table headers={headers} rows={rows} isHoverable caption="Tennis Superstars" />
);
// Maybe we should consider hover / striped has a border or something?
export const StripedHoverable = () => (
  <Table headers={headers} rows={rows} isStriped isHoverable caption="Tennis Superstars" />
);
export const Stacked = () => (
  <Table headers={headers} rows={rows} isStacked caption="Tennis Superstars" />
);

const headersWithWidths: TableHeaders[] = [
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
    renderFn: (key, value) => (
      <td key={key} style={{ textAlign: 'center' }}>
        {value}
        <span className="mis6">🏆</span>
      </td>
    ),
  },
  {
    label: 'Birthdate',
    key: 'birthdate',
    width: '17%',
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
];
export const CustomHeaderWidths = () => (
  <Table
    headers={headersWithWidths}
    rows={rows}
    isHoverable
    caption="Tennis Superstars (custom header widths)"
  />
);
