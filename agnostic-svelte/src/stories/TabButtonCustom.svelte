<script>
  // You can leverage all the prebuilt AgnosticUI buttons
  import Button from "./Button.svelte";
  // You must expose this prop for your tab buttons to get proper
  // aria-selected and to show an affordance of the selected tab.
  // See the .active class -- we're using an outline but you can
  // set that affordance up however you'd like.
  export let isActive = false;
  export let ariaControls = "";

  // This is a component reference which we need to control the keyboard navigation
  // in our tabs implementation. See: https://svelte.dev/tutorial/component-this
  let btn;
  export function focus() {
    return btn.focus();
  }
  export function isDisabled() {
    return btn.disabled;
  }
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
    outline: 1px solid var(--agnostic-primary-hover);
  }
</style>

<div class="buttonWrap {isActive ? 'active' : ''}">
  <!-- We're using our own button to manage aria et al and then use the Button of
  type "faux" to get back a <div> styled like a button. We need to do this because
  we need to bind:this={btn} so the Tabs library can call ref.focus() and
  ref.isDisabled() from the a11y keyboard navigation code. -->
  <button
    style="background: transparent; border: none; padding: 0;"
    on:click
    on:keydown
    role="tab"
    bind:this="{btn}"
    tabIndex="{isActive ? '0' : '-1'}"
    ariaControls="{ariaControls ? ariaControls : null}"
    ariaSelected="{isActive}"
  >
    <Button type="faux" isBordered mode="primary">
      <slot />
    </Button>
  </button>
</div>
