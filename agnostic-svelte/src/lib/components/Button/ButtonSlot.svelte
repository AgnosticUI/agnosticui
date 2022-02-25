<style>
  span {
    margin: 0;
    padding: 0;
  }
</style>

<script>
  // https://github.com/storybookjs/storybook/issues/8443
  import Button from "./Button.svelte";
  // Unfortunately, these have to be duplicated from Button :(
  export let mode = "";
  export let size = "";
  export let isBordered = false;
  export let isBlock = false;
  export let isBlank = false;
  export let isLink = false;
  export let isDisabled = false;
  export let isRaised = false;
  export let isRounded = false;
  export let isCircle = false;
  export let isSkinned = true;
  export let css = "";
  export let type = "button";
</script>

<Button
  mode="{mode}"
  size="{size}"
  isBordered="{isBordered}"
  isBlock="{isBlock}"
  isBlank="{isBlank}"
  isLink="{isLink}"
  isDisabled="{isDisabled}"
  isRaised="{isRaised}"
  isCircle="{isCircle}"
  isRounded="{isRounded}"
  isSkinned="{isSkinned}"
  css="{css}"
  type="{type}"
  on:click
  on:focus
  on:blur
>
  <span>Go</span>
</Button>
