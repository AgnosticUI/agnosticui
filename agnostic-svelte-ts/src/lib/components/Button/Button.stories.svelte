<script lang="ts">
import ButtonSlot from "./ButtonSlot.svelte";
import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
import { action } from "@storybook/addon-actions";
const actionsData = {
  click: action("click"),
  blur: action("blur"),
  focus: action("focus"),
};
</script>

<Meta title="AG—Svelte (Beta)/Button" component="{ButtonSlot}" />

<Template let:args>
  <ButtonSlot
    {...args}
    on:click={actionsData.click}
    on:blur={actionsData.blur}
    on:focus={actionsData.focus}
  />
</Template>

<Story
  name="Primary"
  args="{{
    mode: "primary",
  }}"
/>

<Story
  name="PrimaryBordered"
  args="{{
    mode: "primary",
    isBordered: true,
  }}"
/>

<Story
  name="PrimaryCapsule"
  args="{{
    mode: "primary",
    isCapsule: true,
  }}"
/>

<Story
  name="PrimaryRounded"
  args="{{
    mode: "primary",
    isRounded: true,
  }}"
/>

<Story
  name="PrimaryRoundedBordered"
  args="{{
    mode: "primary",
    isRounded: true,
    isBordered: true,
  }}"
/>

<Story
  name="PrimaryCircle"
  args="{{
    mode: "primary",
    isCircle: true,
  }}"
/>

<Story
  name="PrimaryCircleBordered"
  args="{{
    mode: "primary",
    isCircle: true,
    isBordered: true,
  }}"
/>

<Story
  name="PrimaryBlock"
  args="{{
    mode: "primary",
    isBlock: true,
  }}"
/>

<Story
  name="Secondary"
  args="{{
    mode: "secondary",
  }}"
/>

<Story
  name="SecondaryBordered"
  args="{{
    mode: "secondary",
    isBordered: true,
  }}"
/>

<Story
  name="SecondaryCapsule"
  args="{{
    mode: "secondary",
    isCapsule: true,
  }}"
/>

<Story
  name="SecondaryRounded"
  args="{{
    mode: "secondary",
    isRounded: true,
  }}"
/>

<Story
  name="SecondaryRoundedBordered"
  args="{{
    mode: "secondary",
    isRounded: true,
    isBordered: true,
  }}"
/>

<Story
  name="SecondaryCircle"
  args="{{
    mode: "secondary",
    isCircle: true,
  }}"
/>

<Story
  name="SecondaryCircleBordered"
  args="{{
    mode: "secondary",
    isCircle: true,
    isBordered: true,
  }}"
/>

<Story
  name="SecondaryBlock"
  args="{{
    mode: "secondary",
    isBlock: true,
  }}"
/>


<Story
  name="Default"
  args="{{}}"
/>

<Story
  name="DefaultBordered"
  args="{{
    isBordered: true,
  }}"
/>

<Story
  name="DefaultCapsule"
  args="{{
    isCapsule: true,
  }}"
/>

<Story
  name="DefaultRounded"
  args="{{
    isRounded: true,
  }}"
/>

<Story
  name="DefaultRoundedBordered"
  args="{{
    isRounded: true,
    isBordered: true,
  }}"
/>

<Story
  name="DefaultCircle"
  args="{{
    isCircle: true,
  }}"
/>

<Story
  name="DefaultCircleBordered"
  args="{{
    isCircle: true,
    isBordered: true,
  }}"
/>

<Story
  name="DefaultBlock"
  args="{{
    isBlock: true,
  }}"
/>

<Story
  name="Disabled"
  args="{{
    isDisabled: true,
  }}"
/>

<Story
  name="Small"
  args="{{
    size: "small",
  }}"
/>

<Story
  name="Large"
  args="{{
    size: "large",
  }}"
/>

<Story
  name="Submit"
  args="{{
    type: "submit",
  }}"
/>

<Story
  name="Reset"
  args="{{
    type: "reset",
  }}"
/>

<Story
  name="ButtonOverrides"
  args="{{
    css: "my-custom-css-class",
  }}"
/>

<Story
  name="ButtonBlank"
  args="{{
    isBlank: true
  }}"
/>

<Story
  name="ButtonLink"
  args="{{
    isLink: true
  }}"
/>

<Story
  name="ButtonLinkUnskinned"
  args="{{
    isLink: true,
    isSkinned: false
  }}"
/>

<Story
  name="ButtonBase"
  args="{{
    isSkinned: false
  }}"
/>
