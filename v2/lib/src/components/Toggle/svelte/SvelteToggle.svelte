<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import '../core/_Toggle';

  // Props
  export let label: string = '';
  export let checked: boolean = false;
  export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
  export let variant: 'default' | 'success' | 'warning' | 'danger' = 'default';
  export let disabled: boolean = false;
  export let readonly: boolean = false;
  export let labelledBy: string = '';
  export let describedBy: string = '';
  export let name: string = '';
  export let value: string = '';

  // Additional props for class and style
  export let className: string = '';

  const dispatch = createEventDispatcher<{
    'toggle-change': { checked: boolean; name: string; value: string };
  }>();

  function handleToggleChange(event: CustomEvent) {
    const detail = event.detail;
    dispatch('toggle-change', detail);
  }
</script>

<ag-toggle
  {label}
  {checked}
  {size}
  {variant}
  {disabled}
  {readonly}
  labelledby={labelledBy}
  describedby={describedBy}
  {name}
  {value}
  class={className}
  on:toggle-change={handleToggleChange}
  {...$$restProps}
></ag-toggle>