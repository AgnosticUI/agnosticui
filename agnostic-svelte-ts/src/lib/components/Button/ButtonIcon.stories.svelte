<script lang="ts">
import ButtonIconTest from "./ButtonIconTest.svelte";
import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
import { action } from "@storybook/addon-actions";
const actionsData = {
  click: action("click"),
};
</script>

<Meta title="AG—Svelte (Beta)/ButtonIcons" component="{ButtonIconTest}" />

<Template let:args>
  <ButtonIconTest
    {...args}
    on:click={actionsData.click}
  />
</Template>

<Story
  name="Primary"
  args="{{
    mode: "primary",
  }}"
/>
