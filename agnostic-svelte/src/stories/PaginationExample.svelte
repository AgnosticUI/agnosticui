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

  /**
   * usePagination is basically responsible for generating the paging numbers
   */
  const paging = usePagination({ offset: offset });

  // Internal state: currentPage is what dictates the regeneration of our paging
  // controls. (e.g. when user clicks a new page—the paging controls update.)
  let currentPage = current;

  // Reactive declaration in Svelte is like useEffect in React in that it is triggered
  // when a dependency changes.  Here, `currentPage` is that dependency.
  $: paginationPages = paging.generate(currentPage, totalPages);

  // eslint-disable-next-line no-console
  $: console.log(`currentPage updated to: ${currentPage}`);

  const onPageUpdated = async (pageNumber) => {
    if (onPageChange) {
      onPageChange(pageNumber);
    }
    // Triggers reactive `paginationPages` update (since `current` is a dependency)
    currentPage = pageNumber;
  };

</script>

<Pagination
  current="{currentPage}"
  pages="{paginationPages}"
  onPageChange="{onPageUpdated}"
  navigationLabels="{navigationLabels}"
  ariaLabel="{ariaLabel}"
  isBordered="{isBordered}"
  isFirstLast="{isFirstLast}"
  justify="{justify}"
/>
