<script lang="ts">
  import Switch from "./Switch.svelte";
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import { action } from "@storybook/addon-actions";

  const actionsData = {
    change: action("change"),
  };
</script>

<Meta title="AG—Svelte (Beta)/Switch" component="{Switch}" />
<Template let:args>
  <Switch
    {...args} 
    change={actionsData.change}
  />
</Template>

<Story name="SwitchSmall" args="{{
  id: "1",
  label: "Switch small label",
  size: "small",
}}" />

<Story name="SwitchSmall" args="{{
  id: "2",
  label: "Switch default",
}}" />

<Story name="SwitchLarge" args="{{
  id: "3",
  label: "Switch large label",
  size: "large",
}}" />

<Story name="SwitchPrechecked" args="{{
  id: "4",
  label: "Switch prechecked",
  size: "large",
  isChecked: true,
}}" />

<Story name="SwitchDisabled" args="{{
  id: "5",
  label: "Switch disabled",
  isDisabled: true,
}}" />

<Story name="SwitchAction" args="{{
  id: "99",
  label: "Switch action",
  isAction: true,
}}" />

<Story name="SwitchBorder" args="{{
  id: "6",
  label: "Switch border",
  isBordered: true,
}}" />

<Story name="SwitchBorderAction" args="{{
  id: "7",
  label: "Switch border action",
  isBordered: true,
  isAction: true,
}}" />

<Story name="SwitchLabelRight" args="{{
  id: "8",
  label: "Switch with label on right",
  labelPosition: "right",
}}" />

<Story name="SwitchLabelRightBorder" args="{{
  id: "9",
  label: "Switch with label on right and border",
  labelPosition: "right",
  isBordered: true,
}}" />

<Story name="SwitchLabelRightAction" args="{{
  id: "10",
  label: "Switch with label on right action",
  labelPosition: "right",
  isAction: true,
}}" />

<Story name="SwitchLabelRightActionBorder" args="{{
  id: "11",
  label: "Switch with label on right action",
  labelPosition: "right",
  isAction: true,
  isBordered: true,
}}" />

<Story name="SwitchLabelRightActionBorderDisabled" args="{{
  id: "12",
  label: "Switch with label on right action",
  labelPosition: "right",
  isAction: true,
  isBordered: true,
  isDisabled: true,
}}" />
