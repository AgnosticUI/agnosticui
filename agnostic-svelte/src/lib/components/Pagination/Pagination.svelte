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
    box-shadow: 0 0 0 var(--agnostic-focus-ring-outline-width)
      var(--agnostic-focus-ring-color);

    /* Needed for High Contrast mode */
    outline: var(--agnostic-focus-ring-outline-width)
      var(--agnostic-focus-ring-outline-style)
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
    color: var(
      --agnostic-pagination-disabled-bg,
      var(--agnostic-gray-mid-dark)
    );
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

  .pagination-item:not(.pagination-item-active):not(.pagination-item-disabled):hover
    .pagination-button {
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

<script>
  import { tick } from "svelte";

  /**
   * Pagination component handles presentation only and does two things:
   * 1. Displays paging controls you pass in as `pages` array
   * 2. Applies styles to those paging controls
   *
   * Inversion of control is used such that the consumer is in
   * charge of using the usePagination module to generate and
   * regenerate pages that get passed in here. See ./PaginationExample.svelte
   */

  // can be: 'start', 'center', 'end' (or empty string)
  export let justify = "";
  export let current = 1;
  export let pages = [];
  export let ariaLabel = "pagination";
  export let onPageChange;
  export let isBordered = false;
  export let isFirstLast = true;
  export let navigationLabels = {
    first: "First",
    last: "Last",
    previous: "Previous",
    next: "Next",
  };

  // Note that in the template we've bound via bind:this -- essentially this is
  // like a react ref but in Svelte parlance it's a binding. This allows us to
  // interact with the native component; we leverage this to call btn.focus() later
  // Se https://svelte.dev/tutorial/component-this
  let btn;

  const getLastPageNumber = () => pages[pages.length - 1];

  const paginationItemClassesForPage = (page) => {
    return [
      "pagination-item",
      page === current ? "pagination-item-active" : "",
      page === "..." ? "pagination-item-gap" : "",
    ]
      .filter((kl) => kl)
      .join(" ");
  };

  const paginationItemClassesForFirst = () => {
    return ["pagination-item", current === 1 ? "pagination-item-disabled" : ""]
      .filter((kl) => kl)
      .join(" ");
  };

  const paginationItemClassesForLast = () => {
    return [
      "pagination-item",
      current === getLastPageNumber() ? "pagination-item-disabled" : "",
    ]
      .filter((kl) => kl)
      .join(" ");
  };

  const paginationContainerClasses = [
    "pagination-container",
    justify ? `pagination-${justify}` : "",
  ]
    .filter((cls) => cls)
    .join(" ");

  const paginationClasses = [
    "pagination",
    isBordered ? "pagination-bordered" : "",
  ]
    .filter((cls) => cls)
    .join(" ");

  const handleClick = async (pageNumber) => {
    if (onPageChange) {
      onPageChange(pageNumber);
    }
    // In case the consumer's `onPageChange` is using reactivity to update the
    // paging controls, we want to wait a tick here before focusing the current
    // button reference aka binding (see https://svelte.dev/tutorial/tick)
    await tick();
    btn.focus();
  };
</script>

<nav class="{paginationContainerClasses}" aria-label="{ariaLabel}">
  <ul class="{paginationClasses}">
    {#if isFirstLast}
      <li class="{paginationItemClassesForFirst}">
        <button
          class="pagination-button"
          on:click="{() => handleClick(1)}"
          disabled="{current === 1}"
          aria-disabled="{current === 1}"
          aria-label="Goto page 1"
        >
          {String.fromCharCode(171)}
          {" "}
          {navigationLabels.first}
        </button>
      </li>
    {/if}
    <li class="{paginationItemClassesForFirst}">
      <button
        class="pagination-button"
        on:click="{() => handleClick(current - 1)}"
        disabled="{current === 1}"
        aria-disabled="{current === 1}"
        aria-label="Goto previous page"
      >
        {String.fromCharCode(8249)}
        {" "}
        {navigationLabels.previous}
      </button>
    </li>
    {#each pages as page}
      {#if page === "..."}
        <li class="pagination-item pagination-item-gap"><span>{page}</span></li>
      {:else}
        <li class="{paginationItemClassesForPage(page)}">
          {#if current === page}
            <button
              bind:this="{btn}"
              on:click="{() => handleClick(page)}"
              type="button"
              class="pagination-button"
              aria-current="page"
              aria-label="{'Page ' + current + ', current page'}"
            >
              {page}
            </button>
          {:else}
            <button
              on:click="{handleClick(page)}"
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
        on:click="{handleClick(current + 1)}"
        disabled="{current === getLastPageNumber()}"
        aria-disabled="{current === getLastPageNumber()}"
        aria-label="Goto nextpage"
      >
        {navigationLabels.next}
        {" "}
        {String.fromCharCode(8250)}
      </button>
    </li>
    {#if isFirstLast}
      <li class="{paginationItemClassesForLast}">
        <button
          class="pagination-button"
          on:click="{() => handleClick(getLastPageNumber())}"
          disabled="{current === getLastPageNumber()}"
          aria-disabled="{current === getLastPageNumber()}"
          aria-label="Goto last page"
        >
          {navigationLabels.last}
          {" "}
          {String.fromCharCode(187)}
        </button>
      </li>
    {/if}
  </ul>
</nav>
