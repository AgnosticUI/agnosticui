import AgBreadcrumb from '../components/Breadcrumb.vue';

export default {
  title: 'AG—Vue (Beta)/Breadcrumb',
  components: [AgBreadcrumb],
};
const tennisRoutes = [
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

export const Default = () => ({
  components: { AgBreadcrumb },
  template: `<ag-breadcrumb :routes="routes"></ag-breadcrumb>`,
  data() {
    return {
      routes: tennisRoutes,
    };
  }
});

export const Slash = () => ({
  components: { AgBreadcrumb },
  template: `<ag-breadcrumb type="slash" :routes="routes"></ag-breadcrumb>`,
  data() {
    return {
      routes: tennisRoutes,
    };
  }
});

export const Arrow = () => ({
  components: { AgBreadcrumb },
  template: `<ag-breadcrumb type="arrow" :routes="routes"></ag-breadcrumb>`,
  data() {
    return {
      routes: tennisRoutes,
    };
  }
});

export const Bullet = () => ({
  components: { AgBreadcrumb },
  template: `<ag-breadcrumb type="bullet" :routes="routes"></ag-breadcrumb>`,
  data() {
    return {
      routes: tennisRoutes,
    };
  }
});

export const SingleRoute = () => ({
  components: { AgBreadcrumb },
  template: `<ag-breadcrumb type="slash" :routes="[{ label: 'A single route will look *linkless*'}]"></ag-breadcrumb>`,
  data() {
    return {
      routes: tennisRoutes,
    };
  }
});


export const TwoRoutes = () => ({
  components: { AgBreadcrumb },
  template: `<ag-breadcrumb type="slash" :routes="[{ label: 'First', url: '#foo' }, { label: 'Second', url: '#bar' }]"></ag-breadcrumb>`,
  data() {
    return {
      routes: tennisRoutes,
    };
  }
});
