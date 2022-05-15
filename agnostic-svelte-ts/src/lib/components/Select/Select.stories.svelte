<script lang="ts">
  import Select from "./Select.svelte";
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import { action } from "@storybook/addon-actions";

  const actionsData = {
    selected: action("selected"),
  };

  const tennisOptions = [
    { value: "andre", label: "Andre Agassi" },
    { value: "serena", label: "Serena Williams" },
    { value: "mac", label: "John McEnroe" },
    { value: "borg", label: "Bjorn Borg" },
    { value: "althea", label: "Althea Gibson" },
    { value: "roger", label: "Roger Federer" },
  ];
</script>
  
<Meta title="AG—Svelte (Beta)/Select" component="{Select}" />
<Template let:args>
  <Select
    {...args} 
    selected={actionsData.selected}
  />
</Template>

<Story name="Default" args="{{
  uniqueId: "sel1",
  name: "select-1",
  labelCopy: "this is label copy",
  options: tennisOptions,
}}" />

<Story name="FirstOptionLabel" args="{{
  defaultOptionLabel: "Select your favorite tennis player of all-time",
  uniqueId: "sel2",
  name: "select-2",
  labelCopy: "this is label copy",
  options: tennisOptions,
}}" />

<Story name="Disabled" args="{{
  uniqueId: "sel3",
  name: "select-3",
  isDisabled: true,
  labelCopy: "this is label copy",
  options: tennisOptions,
}}" />

<Story name="Small" args="{{
  uniqueId: "sel4",
  name: "select-4",
  size: "small",
  labelCopy: "this is label copy",
  options: tennisOptions,
}}" />

<Story name="Large" args="{{
  uniqueId: "sel5",
  name: "select-5",
  size: "large",
  labelCopy: "this is label copy",
  options: tennisOptions,
}}" />

<Story name="Multiple" args="{{
  uniqueId: "sel6",
  name: "select-6",
  isMultiple: true,
  multipleSize: 5,
  labelCopy: "this is label copy",
  options: tennisOptions,
}}" />
