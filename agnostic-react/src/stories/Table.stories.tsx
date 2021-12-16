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
];

const createRow = (name, weapon, slams) => ({ name, weapon, slams });
const rows: TableRows[] = [
  createRow('Serena Williams', "Biggest serve in women's tennis all-time", 23),
  createRow('Roger Federer', 'Forehand and serve', 20),
  createRow('Andre Agassi', 'Return of serve. Groundstrokes', 8),
  createRow('Steffi Graf', 'Forehand', 22),
  createRow('Martina Navratilova', 'Serve and volley', 18),
  createRow('Rafael Nadal', 'Backhand and speed', 20),
  createRow('Althea Gibson', 'Speed, strength, and fluidity ', 11),
  createRow('Novak Djokovic', 'Backhand and speed', 20),
  createRow('Arthur Ashe', 'Serve and volley', 3),
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
