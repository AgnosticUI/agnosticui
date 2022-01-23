import Breadcrumb from "./Breadcrumb.svelte";
import FontDecorator from "../../storybook-helpers/FontDecorator.svelte";

const tennisRoutes = [
  {
    label: "Tennis",
    url: "#tennis",
  },
  {
    label: "Superstars",
    url: "#tennis-superstars",
  },
  {
    label: "Serena Williams",
    url: "#tennis-superstars-serena",
  },
];

export default {
  title: "AG-Svelte (Beta)/Breadcrumb",
  component: Breadcrumb,
  decorators: [() => FontDecorator],
};
const Template = ({ ...args }) => ({
  Component: Breadcrumb,
  props: args,
});

export const DefaultBreadcrumbs = Template.bind({});
DefaultBreadcrumbs.args = {
  routes: tennisRoutes,
};

export const Slash = Template.bind({});
Slash.args = {
  routes: tennisRoutes,
  type: "slash",
};

export const Arrow = Template.bind({});
Arrow.args = {
  routes: tennisRoutes,
  type: "arrow",
};

export const Bullet = Template.bind({});
Bullet.args = {
  routes: tennisRoutes,
  type: "bullet",
};

export const SingleRoute = Template.bind({});
SingleRoute.args = {
  routes: [{ label: "A single route will look *linkless*" }],
};

export const TwoRoutes = Template.bind({});
TwoRoutes.args = {
  routes: [
    { label: "one", url: "#one" },
    { label: "two", url: "#two" },
  ],
};
