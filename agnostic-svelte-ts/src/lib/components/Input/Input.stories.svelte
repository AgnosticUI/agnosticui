<script lang="ts">
  import Input from "./Input.svelte";
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import { action } from "@storybook/addon-actions";

  const actionsData = {
    click: action("click"),
    blur: action("blur"),
    change: action("change"),
    input: action("input"),
    focus: action("focus"),
  };
</script>
  
<Meta title="AG—Svelte (Beta)/Input" component="{Input}" />
<Template let:args>
  <Input {...args} 
    on:click={actionsData.click}
    on:input={actionsData.input}
    on:focus={actionsData.focus}
    on:blur={actionsData.blur}
    on:focus={actionsData.focus}
  />
</Template>

<Story name="Default" args="{{
  id: "myid1",
  label: "Default input",
}}" />

<Story name="InlineInput" args="{{
  id: "myid2",
  label: "Inline input",
  isInline: true,
}}" />

<Story name="Rounded" args="{{
  id: "myid3",
  label: "Rounded input",
  isRounded: true,
}}" />

<Story name="Underlined" args="{{
  id: "myid4",
  label: "Underlined input",
  isUnderlined: true,
}}" />

<Story name="UnderlinedWithBackground" args="{{
  id: "myid5",
  label: "Underlined with background input",
  isUnderlined: true,
  isUnderlinedWithBackground: true,
}}" />

<Story name="Large" args="{{
  id: "myid6",
  label: "Large input",
  size: "large",
}}" />

<Story name="Small" args="{{
  id: "myid7",
  label: "Small input",
  size: "small",
}}" />

<Story name="Disabled" args="{{
  id: "myid8",
  label: "Disabled input",
  isDisabled: true,
}}" />

<Story name="HelpText" args="{{
  id: "myid9",
  label: "Help text",
  helpText: "Some useful help text.",
}}" />

<Story name="HelpTextSmall" args="{{
  id: "myid10",
  size: "small",
  label: "Help text small",
  helpText: "Some useful help text.",
}}" />

<Story name="HelpTextLarge" args="{{
  id: "myid11",
  size: "large",
  label: "Help text large",
  helpText: "Some useful help text.",
}}" />

<Story name="InvalidText" args="{{
  id: "myid12",
  label: "Invalid text",
  invalidText: "This field has errors.",
  isInvalid: true,
}}" />

<Story name="InvalidTextLarge" args="{{
  id: "myid13",
  size: "large",
  label: "Invalid text large",
  invalidText: "This field has errors.",
  isInvalid: true,
}}" />

<Story name="InvalidTextSmall" args="{{
  id: "myid14",
  size: "small",
  label: "Invalid text small",
  invalidText: "This field has errors.",
  isInvalid: true,
}}" />

<Story name="InputWithHiddenLabel" args="{{
  id: "myid14b",
  label: "Label that will still be visible to screenreaders but hidden from sighted users",
  isLabelHidden: true,
  placeholder: "Input with hidden label",
}}" />

<Story name="Search" args="{{
  id: "myid15",
  label: "Search",
  type: "search",
}}" />

<Story name="Telephone" args="{{
  id: "myid16",
  label: "Telephone",
  type: "tel",
}}" />

<Story name="URL" args="{{
  id: "myid17",
  label: "URL",
  type: "url",
}}" />

<Story name="Number" args="{{
  id: "myid18",
  label: "Number",
  type: "number",
}}" />

<Story name="Email" args="{{
  id: "myid19",
  label: "Email",
  type: "email",
}}" />

<Story name="Password" args="{{
  id: "myid20",
  label: "Password",
  type: "password",
}}" />

<Story name="Textarea" args="{{
  id: "myid21",
  label: "Textarea",
  type: "textarea",
}}" />

<Story name="TextareaSmall" args="{{
  id: "myid22",
  label: "Textarea small",
  type: "textarea",
  size: "small",
  rows: "10",
  cols: "5",
}}" />

<Story name="TextareaLarge" args="{{
  id: "myid23",
  label: "Textarea large",
  type: "textarea",
  size: "large",
  rows: "10",
  cols: "5",
}}" />
