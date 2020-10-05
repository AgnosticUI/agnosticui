<script>
  import { createEventDispatcher } from "svelte";
  export let ariaLabel = "";
  export let css = "";
  let klasses = ["btn-group", css ? `${css}` : ""];
  klasses = klasses.filter(klass => klass.length);
  klasses = klasses.join(" ");
</script>

<style>

/**
 * Button Groups
 */
 .btn-group {
  display: inline-flex;
  flex-direction: row;
}

.btn-group > :global(button ) {
  border-radius: var(
    --agnosticui-btn-radius,
    var(--Space-4)
  );
}
.btn-group > :global(button:not(:last-child) ) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  margin-right: -1px;
}
.btn-group > :global(button:not(:first-child) ) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

</style>

<div class={klasses} role="group" aria-label={ariaLabel}>

  <slot />
</div>
