<script>
  // https://github.com/storybookjs/storybook/issues/8443
  import Button from "./Button.svelte";
  // Unfortunately, these have to be duplicated from Button :(
  export let mode = "";
  export let size = "";
  export let isBordered = false;
  export let isBlock = false;
  export let isBlank = false;
  export let isDisabled = false;
  export let isRaised = false;
  export let isRounded = false;
  export let isSkinned = true;
  export let css = "";
  export let type = "button";
</script>

<style>
  span {
    margin: 0;
    padding: 0;
  }
</style>

<Button
  {mode}
  {size}
  {isBordered}
  {isBlock}
  {isBlank}
  {isDisabled}
  {isRaised}
  {isRounded}
  {isSkinned}
  {css}
  {type}>
  <span>Go</span>
</Button>
