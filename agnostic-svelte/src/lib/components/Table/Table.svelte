<style>
.table {
  --table-bg: transparent;
  --table-accent-bg: transparent;
  --table-striped-color: var(--agnostic-dark);
  --table-striped-bg: rgb(0 0 0 / 2.5%);
  --table-active-color: var(--agnostic-dark);
  --table-active-bg: rgb(0 0 0 / 1.5%);
  --table-hoverable-color: var(--agnostic-dark);
  --table-hoverable-bg: var(--agnostic-table-hover-bg, #f1faff);

  width: 100%;
  margin-bottom: var(--fluid-16);
  color: var(--agnostic-dark);
  vertical-align: top;
  border-color: var(--agnostic-table-border-color, var(--agnostic-gray-light));
}

.table > :not(caption) > * > * {
  padding: var(--fluid-8) var(--fluid-8);
  background-color: var(--table-bg);
  border-bottom-width: 1px;

  /* 4th is spread --table-accent-bg will gets reset for active, hover, striped */
  box-shadow: inset 0 0 0 9999px var(--table-accent-bg);
}

.table > tbody {
  vertical-align: inherit;
}

.table > thead {
  vertical-align: bottom;
}

.table thead th {
  font-weight: 600;
}

.table-caps thead th {
  font-size: var(--fluid-12);
  text-transform: uppercase;
}

.table tbody td,
.table tbody th {
  font-weight: 400;
}

.table > :not(thead):not(caption) {
  border-top: var(--fluid-2) solid var(--agnostic-gray-light);
}

.caption-top {
  caption-side: top;
}

.caption-bottom {
  caption-side: bottom;
}

.caption-bottom,
.caption-top {
  padding-block-start: var(--fluid-12);
  padding-block-end: var(--fluid-12);

  /* Takes writing mode into account -- (mdn) same as left if direction is left-to-right
  and right if direction is right-to-left */
  text-align: start;
}

.caption-end {
  text-align: end;
}

.table-small > :not(caption) > * > * {
  padding: var(--fluid-4) var(--fluid-4);
}

.table-large > :not(caption) > * > * {
  padding: var(--fluid-12) var(--fluid-12);
}

.table-xlarge > :not(caption) > * > * {
  padding: var(--fluid-18) var(--fluid-18);
}

.table-bordered > :not(caption) > * {
  border-width: 1px 0;
}

.table-bordered > :not(caption) > * > * {
  border-width: 0 1px;
}

.table-borderless > :not(caption) > * > * {
  border-bottom-width: 0;
}

.table-borderless > :not(:first-child) {
  border-top-width: 0;
}

.table-striped > tbody > tr:nth-of-type(odd) > * {
  --table-accent-bg: var(--table-striped-bg);

  color: var(--table-striped-color);
}

.table-active {
  --table-accent-bg: var(--table-active-bg);

  color: var(--table-active-color);
}

.table-hoverable > tbody > tr:hover > * {
  --table-accent-bg: var(--table-hoverable-bg);

  color: var(--table-hoverable-color);
}

/* Stacked tables */
.table-stacked thead {
  display: none;
}

.table-stacked tr,
.table-stacked tbody th,
.table-stacked tbody td {
  display: block;
  width: 100%;
}

.table-stacked tbody th,
.table-stacked tbody td {
  border-bottom-width: 0;
}

.table-stacked td[data-label] {
  padding-bottom: var(--fluid-12);
}

.table-stacked tr {
  border-bottom: var(--fluid-2) solid var(--agnostic-gray-light);
  border-top-width: 0;
}

.table-stacked th[data-label]::before,
.table-stacked td[data-label]::before {
  content: attr(data-label);
  display: block;
  font-weight: 600;
  margin: -0.5rem -1rem 0;
  padding: var(--fluid-12) var(--fluid-16) var(--fluid-6);
}

.table-stacked tr th:first-child,
.table-stacked tr td:first-child {
  border-top-width: 0;
}

.table-stacked tr:nth-child(odd) td,
.table-stacked tr:nth-child(odd) th {
  background-color: inherit;
}

.table-stacked tr:first-child th:first-child,
.table-stacked tr:first-child td:first-child {
  border-top: var(--fluid-2) solid var(--agnostic-gray-light);
}

.table-stacked th[data-label],
.table-stacked td[data-label] {
  padding-bottom: var(--fluid-12);
}

/* As soon as there's not enough width, it will kick in horizontal scrolling */
.table-responsive {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

/* Table is responsive only "up to" the breakpoint. Above it will not scroll */
@media (max-width: 576px) {
  .table-responsive-small {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}

@media (max-width: 768px) {
  .table-responsive-medium {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}

@media (max-width: 992px) {
  .table-responsive-large {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}

@media (max-width: 1200px) {
  .table-responsive-xlarge {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}

.table-header-container {
  display: flex;
  align-items: center;
}

.table-sort-label {
  flex: 1;
  padding-inline-end: 0.5rem;
  text-align: left;
}

.table-sort {
  flex: 0 1 var(--fluid-48);
  background-color: transparent;
  border-color: transparent;
  border-width: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding-block-start: var(--fluid-2);
  padding-block-end: var(--fluid-2);
}

.icon-sort {
  width: 1.125rem;
  height: 1.125rem;
}

.table-sort:focus {
  box-shadow: 0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);

  /* Needed for High Contrast mode */
  outline:
    var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style)
    var(--agnostic-focus-ring-outline-color);
  transition: box-shadow var(--agnostic-timing-fast) ease-out;
}

@media (prefers-reduced-motion), (update: slow) {
  .table-sort:focus {
    transition-duration: 0.001ms !important;
  }
}

</style>

<script>
  import { createEventDispatcher } from "svelte";

  export let headers = [];
  export let rows = [];
  export let caption = "";
  export let captionPosition = "hidden";
  export let tableSize = "";
  export let responsiveSize = "";
  export let isUppercasedHeaders = false;
  export let isBordered = false;
  export let isBorderless = false;
  export let isStriped = false;
  export let isHoverable = false;
  export let isStacked = false;
  export let filterByKey = false;
  export let offset = 0;
  export let limit = 0;

  // State
  let direction = "none";
  let sortingKey = "";

  // Trigger event on sort
  const dispatch = createEventDispatcher();
  $: dispatch("sort", {
    direction,
    sortingKey,
  });

  /**
   * Plucks the columns from rows by key of the current sortingKey; sortingKey
   * reflects the currently being sorted column due to user interaction e.g. they
   * have clicked on that columns table header cell.
   *
   * Since we want to sort rows but by column comparisons, we need to "pluck out"
   * these columns from the two rows. If we cannot find the columns in rows by the
   * `sortingKey`, then we set these to `-Infinity` which places them at the bottom.
   *
   * @param rowLeft left row to compare
   * @param rowRight right row to compare
   * @returns Normalized columns from both rows in form of { a:a, b:b }
   */
  const pluckColumnToSort = (rowLeft, rowRight) => {
    const colLeft =
      rowLeft[sortingKey] === null || rowLeft[sortingKey] === undefined
        ? -Infinity
        : rowLeft[sortingKey];
    const colRight =
      rowRight[sortingKey] === null || rowRight[sortingKey] === undefined
        ? -Infinity
        : rowRight[sortingKey];
    return {
      colLeft,
      colRight,
    };
  };

  /**
   * This function first checks if there is a corresponding custom sort function
   * that was supplied in a header cell with key" of `sortingKey` named `.sortFn`
   * per the API. If it finds, it will delegate to that for actual sort comparison.
   * Otherwise, the function supplies its own fallback default (naive) sorting logic.
   */
  const internalSort = (rowLeft, rowRight) => {
    let { colLeft, colRight } = pluckColumnToSort(rowLeft, rowRight);
    /**
     * First check if the corresponding header cell has a custom sort
     * method. If so, we use that, else we proceed with our default one.
     */
    const headerWithCustomSortFunction = headers.find(
      (h) => h.key === sortingKey && !!h.sortFn
    );
    if (headerWithCustomSortFunction && headerWithCustomSortFunction.sortFn) {
      return headerWithCustomSortFunction.sortFn(colLeft, colRight);
    }
    // No custom sort method for the header cell, so we continue with our own.
    // Strings converted to lowercase; dollar currency etc. stripped (not yet i18n safe!)
    colLeft =
      typeof colLeft === "string"
        ? colLeft.toLowerCase().replace(/(^\$|,)/g, "")
        : colLeft;
    colRight =
      typeof colRight === "string"
        ? colRight.toLowerCase().replace(/(^\$|,)/g, "")
        : colRight;
    // If raw value represents a number explicitly set to Number
    colLeft = !Number.isNaN(Number(colLeft)) ? Number(colLeft) : colLeft;
    colRight = !Number.isNaN(Number(colRight)) ? Number(colRight) : colRight;
    if (colLeft > colRight) {
      return 1;
    }
    if (colLeft < colRight) {
      return -1;
    }
    return 0;
  };

  // Simply flips the sign of results of the ascending sort
  const descendingSort = (row1, row2) => internalSort(row1, row2) * -1;

  Array.prototype.labelByKey = function () {
    return this.reduce(function (rv, x) {
      if (!("key" in x))
        throw new Error(
          "Header must have key value with `sortByKey` set to `true`"
        );
      rv[x.key] = x;
      return rv;
    }, {});
  };

  $: columns = filterByKey ? headers.labelByKey() : { ...headers };

  // Reactive declaration: ...state needs to be computed from other parts; so
  // direction is a dependency and when it changes, sortableItems gets recomputed
  $: sortableItems =
    direction === "ascending"
      ? rows.sort(internalSort)
      : direction === "descending"
      ? rows.sort(descendingSort)
      : (sortableItems = [...rows]);

  $: visibleItems = sortableItems.slice(
    offset ? offset : 0,
    limit ? offset + limit : undefined
  );

  const handleSortClicked = (headerKey) => {
    if (sortingKey !== headerKey) {
      direction = "none";
      sortingKey = headerKey;
    }
    switch (direction) {
      case "ascending":
        direction = "descending";
        break;
      case "descending":
        direction = "none";
        break;
      case "none":
        direction = "ascending";
        break;
      default:
        console.warn(
          "Table sorting only supports directions: ascending | descending | none"
        );
    }
  };

  /**
   * Generates th header cell classes on sortable header cells used to
   * display the appropriate sorting icons.
   * @param headerKey the key of this header cell
   * @param direction In order for this function to get called at all, we have to add both
   * direction and sortingKey as arguments. The reason is that these are the only reactive
   * variables actually changing as a result of the click on parent button (the span we're
   * placing these sorting classes on is a child). See https://stackoverflow.com/a/60155598
   * @param sortingKey
   * @returns CSS classes appropriate for the `SortableHeaderCell`'s current sorting state
   */
  const getSortingClassesFor = (headerKey, direction, sortingKey) => {
    if (sortingKey === headerKey) {
      return [
        "icon-sort",
        direction && direction !== "none" ? `icon-sort-${direction}` : "",
      ]
        .filter((klass) => klass.length)
        .join(" ");
    }
    return "icon-sort";
  };

  /**
   * Gets the correct sorting direction for when we click a new sortable th cell.
   * We need to use the direction and sortingKey arguments to ensure the element
   * attributes call this function reactively (see See https://stackoverflow.com/a/60155598)
   */
  const getSortDirectionFor = (headerKey, direction, sortingKey) => {
    if (sortingKey !== headerKey) {
      return "none";
    } else {
      return direction;
    }
  };

  const tableResponsiveClasses = () => {
    return [
      !responsiveSize ? "table-responsive" : "",
      responsiveSize ? `table-responsive-${responsiveSize}` : "",
    ]
      .filter((klass) => klass.length)
      .join(" ");
  };

  const tableClasses = () => {
    return [
      "table",
      tableSize ? `table-${tableSize}` : "",
      isUppercasedHeaders ? "table-caps" : "",
      isBordered ? "table-bordered" : "",
      isBorderless ? "table-borderless" : "",
      isStriped ? "table-striped" : "",
      isHoverable ? "table-hoverable" : "",
      isStacked ? "table-stacked" : "",
    ]
      .filter((klass) => klass.length)
      .join(" ");
  };

  const captionClasses = () => {
    return [
      // .screenreader-only is expected to be globally available via common.min.css
      captionPosition === "hidden" ? "screenreader-only" : "",
      captionPosition !== "hidden" ? `caption-${captionPosition}` : "",
    ]
      .filter((klass) => klass.length)
      .join(" ");
  };

  const getKeys = (row) => {
    return filterByKey
      ? Object.keys(columns).map((key) => [key, key])
      : Object.keys(row).map((key, index) => [key, index]);
  };
</script>

<div class="{tableResponsiveClasses()}">
  <table class="{tableClasses()}">
    <caption class="{captionClasses()}">{caption}</caption>
    <thead>
      <tr>
        {#each headers as headerCol}
          <th
            aria-sort="{getSortDirectionFor(
              headerCol.key,
              direction,
              sortingKey
            )}"
            scope="col"
            style="{headerCol.width
              ? `width: ${headerCol.width}`
              : 'width: auto'}"
          >
            {#if headerCol.sortable}
              <div class="table-header-container">
                <span class="table-sort-label">{headerCol.label}</span>
                <button
                  type="button"
                  class="table-sort"
                  on:click="{handleSortClicked(headerCol.key)}"
                >
                  <span class="screenreader-only">{headerCol.label}</span>
                  <span
                    class="{getSortingClassesFor(
                      headerCol.key,
                      direction,
                      sortingKey
                    )}">
                    {#if getSortDirectionFor(headerCol.key, direction, sortingKey) === 'none'}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="{getSortingClassesFor(
                          headerCol.key,
                          direction,
                          sortingKey
                        )}"
                        fill="none"
                        viewBox="0 0 20 20"
                        width="20"
                        height="20"
                      >
                        <path
                          d="m15 13-5 5-5-5M5 7l5-5 5 5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    {:else if getSortDirectionFor(headerCol.key, direction, sortingKey) === 'descending'}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="{getSortingClassesFor(
                          headerCol.key,
                          direction,
                          sortingKey
                        )}"
                        viewBox="0 0 20 20"
                        width="20"
                        height="20"
                      >
                        <path
                          d="m10.778 13.635 4.964-5.86c.586-.693.11-1.775-.78-1.775H5.037a1.01 1.01 0 0 0-.561.17c-.168.111-.3.27-.382.457a1.102 1.102 0 0 0 .164 1.147l4.963 5.86a1.006 1.006 0 0 0 1.559 0v.001Z"
                          fill="currentColor"
                        />
                      </svg>
                    {:else}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="{getSortingClassesFor(
                          headerCol.key,
                          direction,
                          sortingKey
                        )}"
                        viewBox="0 0 20 20"
                        width="20"
                        height="20"
                      >
                        <path
                          d="m9.221 6.365-4.963 5.86c-.586.693-.11 1.775.78 1.775h9.926c.2 0 .394-.059.561-.17.168-.111.3-.27.383-.457a1.102 1.102 0 0 0-.165-1.147l-4.963-5.86a1.04 1.04 0 0 0-.351-.27 1.007 1.007 0 0 0-1.208.27v-.001Z"
                          fill="currentColor"
                        />
                      </svg>
                    {/if}
                  </span>
                </button>
              </div>
            {:else}{headerCol.label}{/if}
          </th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each visibleItems as row}
        <tr>
          {#each getKeys(row) as [key, id]}
            <td>
              {#if columns[id].renderComponent}
                <svelte:component
                  this="{columns[id].renderComponent()}"
                  cellValue="{row[key]}"
                />
              {:else}
                {row[key]}
              {/if}
            </td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</div>
