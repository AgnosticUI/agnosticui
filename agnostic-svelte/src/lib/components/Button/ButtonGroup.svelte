<style>
/**
 * Button Groups. See also button-core.css which has btn-grouped which needs to be
 * applied to the buttons that are projected within a button group.
 */
.btn-group {
  display: inline-flex;
  flex-direction: row;
}

</style>

<script>
  export let ariaLabel = "";
  export let css = "";
  let klasses = ["btn-group", css ? `${css}` : ""];
  klasses = klasses.filter((klass) => klass.length);
  klasses = klasses.join(" ");
</script>

<div class={klasses} role="group" aria-label={ariaLabel} on:click>
  <slot />
</div>
