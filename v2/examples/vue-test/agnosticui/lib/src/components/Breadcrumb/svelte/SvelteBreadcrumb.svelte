<script lang="ts">
  import { createEventDispatcher, onMount, onDestroy } from 'svelte';
  import '../core/_Breadcrumb';
  import type { BreadcrumbItem } from '../core/_Breadcrumb';

  // Props
  export let items: BreadcrumbItem[] = [];
  export let type: 'default' | 'slash' | 'bullet' | 'arrow' = 'default';
  export let ariaLabel: string = 'Breadcrumb';

  // Additional props for class and style
  export let className: string = '';

  const dispatch = createEventDispatcher<{
    'breadcrumb-click': { item: BreadcrumbItem; index: number; event: MouseEvent };
  }>();

  let breadcrumbRef: HTMLElement;

  function handleBreadcrumbClick(event: CustomEvent) {
    const detail = event.detail;
    dispatch('breadcrumb-click', detail);
  }

  onMount(() => {
    if (breadcrumbRef) {
      // Set the items property on the web component
      (breadcrumbRef as any).items = items;
      breadcrumbRef.addEventListener('breadcrumb-click', handleBreadcrumbClick as EventListener);
    }
  });

  onDestroy(() => {
    if (breadcrumbRef) {
      breadcrumbRef.removeEventListener('breadcrumb-click', handleBreadcrumbClick as EventListener);
    }
  });

  // Update items when they change
  $: if (breadcrumbRef) {
    (breadcrumbRef as any).items = items;
  }
</script>

<ag-breadcrumb
  bind:this={breadcrumbRef}
  {type}
  aria-label={ariaLabel}
  class={className}
  {...$$restProps}
></ag-breadcrumb>