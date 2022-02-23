<script>
import Alert from "../Alert/Alert.svelte";
export let isOpen = true;
</script>
{#if isOpen}
<Alert isToast={true} {...$$restProps}>
  <slot />
</Alert>
{/if}
