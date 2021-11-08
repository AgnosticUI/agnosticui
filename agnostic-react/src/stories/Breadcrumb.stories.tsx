import { Meta } from '@storybook/react';
import { BreadcrumbRoute, Breadcrumb } from '../Breadcrumb';

const tennisRoutes: BreadcrumbRoute[] = [
  {
    label: 'Tennis',
    url: '#tennis',
  },
  {
    label: 'Superstars',
    url: '#tennis-superstars',
  },
  {
    label: 'Serena Williams',
    url: '#tennis-superstars-serena',
  },
];
export default {
  title: 'AG—React (Beta)/Breadcrumb',
  component: Breadcrumb,
} as Meta;

export const Default = () => <Breadcrumb routes={tennisRoutes} />;

export const Arrow = () => <Breadcrumb type="arrow" routes={tennisRoutes} />;
export const Bullet = () => <Breadcrumb type="bullet" routes={tennisRoutes} />;
export const Slash = () => <Breadcrumb type="slash" routes={tennisRoutes} />;
export const SingleRoute = () => (
  <Breadcrumb type="slash" routes={[{ label: 'A single route will look "linkless"' }]} />
);
export const TwoRoutes = () => (
  <Breadcrumb
    type="slash"
    routes={[
      { label: 'First route will look like link', url: '#foo' },
      { label: 'Second route "linkless"', url: '#bar' },
    ]}
  />
);
