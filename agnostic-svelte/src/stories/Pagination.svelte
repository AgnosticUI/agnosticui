<script>
  import { tick } from 'svelte';
  import { usePagination } from 'agnostic-helpers/dist/index.esm';
  // start, center, end
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
    first: 'First',
    last: 'Last',
    previous: 'Previous',
    next: 'Next',
  };

  // Note that in the template we've bound via bind:this -- essentially this is
  // like a react ref but in Svelte parlance it's a binding. This allows us to
  // interact with the native component; we leverage this to call btn.focus() later
  // Se https://svelte.dev/tutorial/component-this
  let btn;

  const getLastPageNumber = () => paginationPages[paginationPages.length - 1];

  const paginationItemClassesForPage = (page) => {
      return [
        'pagination-item',
        page === currentPage ? "pagination-item-active" : "",
        page === "..." ? "pagination-item-gap" : "",
      ].filter(kl => kl).join(" ");
    };

  const paginationItemClassesForFirst = () => {
      return [
        'pagination-item',
        currentPage === 1 ? "pagination-item-disabled" : "",
      ].filter(kl => kl).join(" ");
    };
      
  const paginationItemClassesForLast = () => {
      return [
        'pagination-item',
        currentPage === getLastPageNumber() ? "pagination-item-disabled" : "",
      ].filter(kl => kl).join(" ");
    };

  const paginationContainerClasses = [
    'pagination-container',
    justify ? `pagination-${justify}` : '',
  ]
    .filter((cls) => cls)
    .join(' ');

  const paginationClasses = [
    'pagination',
    isBordered ? 'pagination-bordered' : ''
  ]
    .filter((cls) => cls)
    .join(' ');

  /**
   * usePagination is basically responsible for generating the paging numbers
   */
  const paging = usePagination({ offset: offset });

  // Internal state: currentPage is what dictates the regeneration of our paging
  // controls. (e.g. when user clicks a new page—the paging controls update.)
  let currentPage = current;

  // Initial paging controls generation
  let paginationPages = paging.generate(currentPage, totalPages);
  
  // Reactive declaration in Svelte is like useEffect in React in that it is triggered
  // when a dependency changes.  Here, `currentPage` is that dependency.
  $: paginationPages = paging.generate(currentPage, totalPages);
  // $: console.log(`currentPage updated to: ${currentPage}`);

  const handleClick = async(pageNumber) => {
    if (onPageChange) {
      onPageChange(pageNumber);
    }
    // Triggers reactive `paginationPages` update (since `current` is a dependency)
    currentPage = pageNumber

    // Essentially, we're waiting for the reactive paginationPages to fully update
    // and so we've leveraged tick here before focusing on the current button ref
    // https://svelte.dev/tutorial/tick
    await tick();
    btn.focus();
  };

</script>

<style>
.pagination-container {
  display: flex;
}

.pagination {
  display: flex;
  list-style: none;
}

.pagination-item {
  padding-inline-start: var(--fluid-2);
  padding-inline-end: var(--fluid-2);
}

.pagination-button {
  --agnostic-pagination-button-color: var(--agnostic-primary);

  color: var(--agnostic-pagination-button-color);
  display: inline-block;
  line-height: var(--fluid-20);
  padding-inline-start: var(--fluid-12);
  padding-inline-end: var(--fluid-12);
  padding-block-start: var(--fluid-6);
  padding-block-end: var(--fluid-6);
  border-radius: var(--agnostic-radius);

  /* We need a border set on both hovered and unhovered so it does not jump around */
  border: 1px solid transparent;
  background-color: transparent;
}

.pagination-button:focus {
  box-shadow: 0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);

  /* Needed for High Contrast mode */
  outline:
    var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style)
    var(--agnostic-focus-ring-outline-color);
  transition: box-shadow var(--agnostic-timing-fast) ease-out;
}

@media (prefers-reduced-motion), (update: slow) {
  .pagination-button:focus {
    transition-duration: 0.001ms !important;
  }
}

.pagination-item-disabled {
  cursor: not-allowed;
}

.pagination-button:disabled,
.pagination-item-disabled .pagination-button {
  color: var(--agnostic-pagination-disabled-bg, var(--agnostic-gray-mid-dark));
  opacity: 80%;
  pointer-events: none;
}

.pagination-item-active .pagination-button {
  background-color: var(--agnostic-primary);
  color: var(--agnostic-light);
}

.pagination-bordered .pagination-item-active .pagination-button {
  background-color: unset;
  border: 1px solid var(--agnostic-primary);
  color: var(--agnostic-primary);
}

.pagination-item:hover .pagination-button {
  text-decoration: none;
}

.pagination-item:not(.pagination-item-active):not(.pagination-item-disabled):hover .pagination-button {
  background-color: var(--agnostic-gray-extra-light);
}

/* For ellipses like [1][2]...[3][4] */
.pagination-item-gap {
  transform: translateY(var(--fluid-6));
}

.pagination-center {
  justify-content: center;
}

.pagination-start {
  justify-content: flex-start;
}

.pagination-end {
  justify-content: flex-end;
}

</style>

<nav class="{paginationContainerClasses}" aria-label={ariaLabel}>
  <ul class="{paginationClasses}">
    {#if isFirstLast}
      <li class="{paginationItemClassesForFirst}">
        <button
          class="pagination-button"
          on:click="{() => handleClick(1)}"
          disabled="{currentPage === 1}"
          aria-disabled="{currentPage === 1}"
          aria-label="Goto page 1"
        >
          {String.fromCharCode(171)}
          {' '}
          {navigationLabels.first}
        </button>
      </li>
    {/if}
      <li class="{paginationItemClassesForFirst}">
        <button
          class="pagination-button"
          on:click={() => handleClick(currentPage - 1)}
          disabled="{currentPage === 1}"
          aria-disabled="{currentPage === 1}"
          aria-label="Goto previous page"
        >
          {String.fromCharCode(8249)}
          {' '}
          {navigationLabels.previous}
        </button>
      </li>
      {#each paginationPages as page}
        {#if page === '...'}
          <li class="pagination-item pagination-item-gap">
            <span>{page}</span>
          </li>
        {:else}
          <li class="{paginationItemClassesForPage(page)}">
            {#if currentPage === page}
              <button
                bind:this="{btn}"
                on:click={() => handleClick(page)}
                type="button"
                class="pagination-button"
                aria-current="page"
                aria-label="{'Page ' + currentPage + ', current page'}"
              >
              {page}
              </button>
            {:else}
              <button
                on:click={handleClick(page)}
                type="button"
                class="pagination-button"
                aria-label="{'Goto page' + page}"
              >
              {page}
              </button>
            {/if}
          </li>
        {/if}
      {/each}
      <li class="{paginationItemClassesForLast}">
        <button
          class="pagination-button"
          on:click={handleClick(currentPage + 1)}
          disabled="{currentPage === getLastPageNumber()}"
          aria-disabled="{currentPage === getLastPageNumber()}"
          aria-label="Goto nextpage"
        >
          {navigationLabels.next}
          {' '}
          {String.fromCharCode(8250)}
        </button>
      </li>
    {#if isFirstLast}
      <li class="{paginationItemClassesForLast}">
        <button
          class="pagination-button"
          on:click={() => handleClick(getLastPageNumber())}
          disabled="{currentPage === getLastPageNumber()}"
          aria-disabled="{currentPage === getLastPageNumber()}"
          aria-label="Goto last page"
        >
          {navigationLabels.last}
          {' '}
          {String.fromCharCode(187)}
        </button>
      </li>
    {/if}
  </ul>
</nav>
