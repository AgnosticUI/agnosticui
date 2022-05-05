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

<script lang="ts">
  export let ariaLabel = "";
  export let css = "";
  let klasses: string = ["btn-group", css ? `${css}` : ""].filter((cl) => cl.length).join(' ');
</script>

<div class={klasses} role="group" aria-label={ariaLabel} on:click>
  <slot />
</div>
