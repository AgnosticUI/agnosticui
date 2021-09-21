<script>
  // You can leverage all the prebuilt AgnosticUI buttons
  import Button from "./Button.svelte";
  // You must expose this prop for your tab buttons to get proper
  // aria-selected and to show an affordance of the selected tab.
  // See the .active class -- we're using an outline but you can
  // set that affordance up however you'd like.
  export let isActive = false;
</script>

<style>
  .buttonWrap {
    opacity: 1;
    transition: opacity 0.2s;
    margin: 0;
  }
  .buttonWrap:not(:first-of-type) {
    /* So we don't get a "double border" between tab buttons */
    margin-inline-start: -1px;
  }
  .buttonWrap:hover {
    opacity: 0.7;
  }
  .buttonWrap:hover:focus {
    opacity: 1;
  }
  .active {
    outline: 1px solid var(--agnosticui-gray-dark);
  }
</style>

<div class="buttonWrap {isActive ? 'active' : ''}">
  <Button isBordered="{true}" on:click role="tab" ariaSelected="{isActive}">
    <slot />
  </Button>
</div>
