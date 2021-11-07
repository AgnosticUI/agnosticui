import { Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { BreadcrumbRoute, BreadcrumbComponent } from './breadcrumb.component';
import { AgModule } from 'agnostic-angular';
export default {
  title: 'AG—Angular (Beta)/Breadcrumbs',
  component: BreadcrumbComponent,
  decorators: [
    moduleMetadata({
      imports: [AgModule],
    }),
  ],
} as Meta;

const tennisRoutes: BreadcrumbRoute[] = [{
  label: "Tennis",
  url: "#tennis",
}, {
  label: "Superstars",
  url: "#tennis-superstars",
}, {
  label: "Serena Williams",
  url: "#tennis-superstars-serena",
}];

export const Default = () => ({
  props: {
    routes: tennisRoutes,
  },
  template: `<ag-breadcrumb [routes]="routes"></ag-breadcrumb>`,
});

export const Bullet = () => ({
  props: {
    routes: tennisRoutes,
  },
  template: `<ag-breadcrumb type="bullet" [routes]="routes"></ag-breadcrumb>`,
});

export const Arrow = () => ({
  props: {
    routes: tennisRoutes,
  },
  template: `<ag-breadcrumb type="arrow" [routes]="routes"></ag-breadcrumb>`,
});

export const SingleRoute = () => ({
  props: {
    routes: tennisRoutes,
  },
  template: `<ag-breadcrumb [routes]="[{label: 'Single Route'}]"></ag-breadcrumb>`,
});

export const TwoRoutes = () => ({
  props: {
    routes: tennisRoutes,
  },
  template: `<ag-breadcrumb type="bullet" [routes]="[{label: 'First Route', url: '#foo'}, {label: 'Second Route', url: '#bar'}]"></ag-breadcrumb>`,
});
