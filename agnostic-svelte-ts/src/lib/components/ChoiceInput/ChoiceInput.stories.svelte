<script lang="ts">
import ChoiceInput from "./ChoiceInput.svelte";
import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
import { action } from "@storybook/addon-actions";

const actionsData = {
  click: action("click"),
  blur: action("blur"),
  change: action("change"),
  input: action("input"),
  focus: action("focus"),
};

const reusableOptions = [
  {
    name: "frequency",
    value: "daily",
    label: "Daily",
  },
  {
    name: "frequency",
    value: "weekly",
    label: "Weekly",
  },
  {
    name: "frequency",
    value: "monthly",
    label: "Monthly",
  },
  {
    name: "frequency",
    value: "yearly",
    label: "Yearly",
  },
];

const disabledOptions = ["monthly", "weekly"];
</script>

<Meta title="AG—Svelte (Beta)/ChoiceInput" component="{ChoiceInput}" />

<Template let:args>
  <ChoiceInput
    {...args}
    on:click={actionsData.click}
    on:blur={actionsData.blur}
    on:focus={actionsData.focus}
    on:change={actionsData.change}
    on:input={actionsData.input}
  />
</Template>

<Story
  name="DefaultCheckbox"
  args="{{
    id: "c1",
    type: "checkbox",
    options: reusableOptions,
    legendLabel: "Checkbox legend",
  }}"
/>

<Story
  name="Disabled"
  args="{{
    id: "c2",
    type: "checkbox",
    isDisabled: true,
    options: reusableOptions,
    legendLabel: "Checkbox disabled",
  }}"
/>

<Story
  name="OptionDisabled"
  args="{{
    id: "c3",
    type: "checkbox",
    disabledOptions: disabledOptions,
    options: reusableOptions,
    legendLabel: "Checkbox disabled",
  }}"
/>

<Story
  name="CheckboxHideFieldset"
  args="{{
    id: "c4",
    type: "checkbox",
    isFieldset: false,
    options: reusableOptions,
    legendLabel: "Checkbox fieldset hidden",
  }}"
/>

<Story
  name="CheckboxInline"
  args="{{
    id: "c5",
    type: "checkbox",
    isInline: true,
    options: reusableOptions,
    legendLabel: "Checkbox inline",
  }}"
/>

<Story
  name="CheckboxSmall"
  args="{{
    id: "c6",
    type: "checkbox",
    isInline: true,
    size: "small",
    options: reusableOptions,
    legendLabel: "Checkbox small",
  }}"
/>

<Story
  name="CheckboxLarge"
  args="{{
    id: "c7",
    type: "checkbox",
    isInline: true,
    size: "large",
    options: reusableOptions,
    legendLabel: "Checkbox large",
  }}"
/>

<Story
  name="CheckboxPrecheckedOptions"
  args="{{
    id: "c8",
    type: "checkbox",
    isInline: true,
    size: "large",
    options: reusableOptions,
    checkedOptions: ["daily", "weekly"],
    legendLabel: "Checkbox prechecked items",
  }}"
/>

<Story
  name="CheckboxUnskinned"
  args="{{
    id: "c9",
    type: "checkbox",
    isInline: true,
    isSkinned: false,
    options: reusableOptions,
    legendLabel: "Checkbox unskinned (fieldset and legend unstyled)",
  }}"
/>

<Story
  name="Radio"
  args="{{
    id: "r1",
    type: "radio",
    options: reusableOptions,
    legendLabel: "Radio legend",
  }}"
/>

<Story
  name="RadioHideFieldset"
  args="{{
    id: "r2",
    type: "radio",
    options: reusableOptions,
    legendLabel: "Radio fieldset hidden",
    isFieldset: false,
  }}"
/>

<Story
  name="RadioInline"
  args="{{
    id: "r3",
    type: "radio",
    options: reusableOptions,
    legendLabel: "Radio inline",
    isInline: true,
  }}"
/>

<Story
  name="RadioSmall"
  args="{{
    id: "r4",
    type: "radio",
    options: reusableOptions,
    legendLabel: "Radio small",
    size: "small",
    isInline: true,
  }}"
/>

<Story
  name="RadioLarge"
  args="{{
    id: "r5",
    type: "radio",
    options: reusableOptions,
    legendLabel: "Radio large",
    size: "large",
    isInline: true,
  }}"
/>

<Story
  name="RadioPrecheckedOptions"
  args="{{
    id: "r6",
    type: "radio",
    options: reusableOptions,
    legendLabel: "Radio large",
    size: "large",
    isInline: true,
    checkedOptions: ["weekly"],
  }}"
/>

<Story
  name="RadioAllDisabled"
  args="{{
    id: "r7",
    type: "radio",
    options: reusableOptions,
    legendLabel: "Radio large",
    size: "large",
    isInline: true,
    isDisabled: true,
  }}"
/>

<Story
  name="RadioDisabledOptions"
  args="{{
    id: "r8",
    type: "radio",
    options: reusableOptions,
    legendLabel: "Radio large",
    size: "large",
    isInline: true,
    checkedOptions: ["weekly"],
    disabledOptions: ["daily", "monthly"],
  }}"
/>

<Story
  name="RadioUnskinned"
  args="{{
    id: "r9",
    type: "radio",
    isInline: true,
    isSkinned: false,
    options: reusableOptions,
    legendLabel: "Radio unskinned (fieldset and legend unstyled)",
  }}"
/>
