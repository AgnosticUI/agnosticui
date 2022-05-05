<script lang="ts">
import Breadcrumb from "./Breadcrumb.svelte";
import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
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
</script>

<Meta title="AG—Svelte (Beta)/Breadcrumb" component="{Breadcrumb}" />

<Template let:args>
	<Breadcrumb {...args} />
</Template>

<Story name="Default" args="{{ routes: tennisRoutes }}" />

<Story name="Slash" args="{{ routes: tennisRoutes, type: 'slash' }}" />

<Story name="Arrow" args="{{ routes: tennisRoutes, type: 'arrow' }}" />

<Story name="Bullet" args="{{ routes: tennisRoutes, type: 'bullet' }}" />

<Story name="Single" args="{{ routes: [{ label: 'A single route will look *linkless*' }] }}" />

<Story name="TwoRoutes" args="{{ 
  routes: [
    { label: "one", url: "#one" },
    { label: "two", url: "#two" },
  ]
}}" />
