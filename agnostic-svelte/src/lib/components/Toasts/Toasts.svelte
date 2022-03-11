<style>
.alert-toast {
  min-width: 19rem;
  max-width: 100%;
  position: fixed;
  z-index: 1100;
  font-size: var(--agnostic-small);

  /* Optimized to match with the height created when we have a
  24px icon. If no icon, this preserves the toast height. */
  line-height: var(--fluid-24);
  padding: 0;

  /* We use bottom: 0, left: 0 etc., so this
  actually pushes the toast away from edge */
  margin: var(--fluid-16);
}

</style>

<script>
  import { onMount } from "svelte";
  export let portalRootSelector = "body";
  export let horizontalPosition;
  export let verticalPosition;

  const portalTarget = portalRootSelector || "body";

  $: toastClasses = [
    "alert-toast",
    horizontalPosition,
    verticalPosition
  ].filter(c => c.length).join(" ");

  // In case of SSR we don't render element until hydration is complete
  let mounted = false;
  onMount(() => (mounted = true));

  const teleportNode = async (node) => {
    const destination = document.querySelector(portalTarget);
    destination.appendChild(node);
  };

  /**
   * Svelte actions don't want to be async so this is a hack
   * to get around that by delegating to teleportNode
   */
  const teleport = (node) => {
    teleportNode(node);
  };
</script>

{#if mounted}
  <div class={toastClasses} use:teleport>
    <slot />
  </div>
{/if}
