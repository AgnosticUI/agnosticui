import { Meta } from '@storybook/react';
import { Table, TableHeaders, TableRows } from '../Table';

export default {
  title: 'AG—React (Beta)/Table',
  component: Table,
} as Meta;

const headers: TableHeaders[] = [
  {
    label: 'Id',
    key: 'id',
    sortable: true,
    sortFn: (a, b) => a.id - b.id,
  },
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
];

const createRow = (id, name, weapon, slams) => ({ id, name, weapon, slams });
const rows: TableRows[] = [
  createRow(1, 'Serena Williams', "Biggest serve in women's tennis all-time", 23),
  createRow(2, 'Steffi Graf', 'Forehand', 22),
  createRow(3, 'Roger Federer', 'Forehand and serve', 20),
  createRow(4, 'Novak Djokovic', 'Backhand and speed', 20),
  createRow(5, 'Rafael Nadal', 'Backhand and speed', 20),
  createRow(6, 'Martina Navratilova', 'Serve and volley', 18),
  createRow(7, 'Althea Gibson', 'Speed, strength, and fluidity ', 11),
  createRow(8, 'Andre Agassi', 'Return of serve. Groundstrokes', 8),
  createRow(9, 'Arthur Ashe', 'Serve and volley', 3),
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
