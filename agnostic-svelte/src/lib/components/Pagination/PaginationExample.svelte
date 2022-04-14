<script>
  import { usePagination } from "agnostic-helpers/dist/index.esm";
  import Pagination from "./Pagination.svelte";
  export let justify = "";
  // can be 1 or 2
  export let offset = 1;
  export let ariaLabel = "pagination";
  export let current = 1;
  export let totalPages = 20;
  export let onPageChange;
  export let isBordered = false;
  export let isFirstLast = true;
  export let navigationLabels = {
    first: "First",
    last: "Last",
    previous: "Previous",
    next: "Next",
  };

  // eslint-disable-next-line no-console
  $: console.log(`currentPage updated to: ${current}`);

  $: if (onPageChange) {
    onPageChange(current);
  }
</script>

<Pagination
  bind:current
  total={totalPages}
  pageGenerator={usePagination({ offset })}
  navigationLabels="{navigationLabels}"
  ariaLabel="{ariaLabel}"
  isBordered="{isBordered}"
  isFirstLast="{isFirstLast}"
  justify="{justify}"
/>
