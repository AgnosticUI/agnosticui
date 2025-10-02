<script>
  import { onMount } from 'svelte';

  // Direct import of web components without the library wrapper - client side only
  onMount(async () => {
    if (typeof window !== 'undefined') {
      await import('agnosticui-core');
    }
  });
</script>

<div>
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <ag-button>Default Button</ag-button>
</div>
