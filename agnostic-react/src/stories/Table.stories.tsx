import { Meta } from '@storybook/react';
import { Table } from '../Table';

export default {
  title: 'AG—React (Beta)/Table',
  component: Table,
} as Meta;

export const Default = () => <Table />;
export const Small = () => <Table tableSize="small" />;
export const Large = () => <Table tableSize="large" />;
export const XLarge = () => <Table tableSize="xlarge" />;
export const ResponsiveSmall = () => <Table responsiveSize="small" />;
export const ResponsiveMedium = () => <Table responsiveSize="medium" />;
export const ResponsiveLarge = () => <Table responsiveSize="large" />;
export const ResponsiveXLarge = () => <Table responsiveSize="xlarge" />;
export const UppercaseHeader = () => <Table uppercaseHeader />;
export const Bordered = () => <Table isBordered />;
export const Borderless = () => <Table isBorderless />;
export const Striped = () => <Table isStriped />;
export const Hoverable = () => <Table isHoverable />;
// Maybe we should consider hover / striped has a border or something?
export const StripedHoverable = () => <Table isStriped isHoverable />;
export const Stacked = () => <Table isStacked />;
