<script>
  import TabButtonCustom from './TabButtonCustom.svelte';
  export let isActive = false;
</script>

<TabButtonCustom on:click isActive={isActive}>
  Tab 2
</TabButtonCustom>
