<style>
</style>

<script lang="ts">
  import { createEventDispatcher } from "svelte";

  // Hack: Preserves way it was done in agnostic-svelte but ugly :(
  interface ArrayMonkeyPatched extends Array<any> {
    labelByKey(): any[];
  }
  export let headers: ArrayMonkeyPatched = [] as ArrayMonkeyPatched;
  headers.labelByKey = function () {
    return this.reduce(function (rv, x) {
      if (!("key" in x))
        throw new Error(
          "Header must have key value with `sortByKey` set to `true`"
        );
      rv[x.key] = x;
      return rv;
    }, {});
  };

  /*
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

  const internalSort = (rowLeft, rowRight) => {
    let { colLeft, colRight } = pluckColumnToSort(rowLeft, rowRight);

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
    const filteredKeys = filterByKey
      ? Object.keys(columns).map((key) => [key, key])
      : Object.keys(row).map((key, index) => [key, index]);
    return filteredKeys;
  };
  */
</script>

<table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table>
<!-- <div class="{tableResponsiveClasses()}">
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
</div> -->
