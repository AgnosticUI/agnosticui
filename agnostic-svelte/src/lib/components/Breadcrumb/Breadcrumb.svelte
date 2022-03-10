<style>
.breadcrumb {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  white-space: nowrap;
  list-style: none;
}

.breadcrumb-item + .breadcrumb-item {
  padding-inline-start: var(--fluid-6);
}

.breadcrumb-item + .breadcrumb-item::before {
  padding-inline-end: var(--fluid-6);
  color: var(--agnostic-gray-mid-dark);
  content: "\203A";
}

.breadcrumb-item.active {
  color: var(--agnostic-dark);
}

.breadcrumb-slash .breadcrumb-item + .breadcrumb-item::before {
  content: "\0002f";
}

.breadcrumb-arrow .breadcrumb-item + .breadcrumb-item::before {
  content: "\02192";
}

.breadcrumb-bullet .breadcrumb-item + .breadcrumb-item::before {
  content: "\02022";
}

</style>

<script>
  export let routes = [];
  export let type = "";

  const breadcrumbClasses = ["breadcrumb", type ? `breadcrumb-${type}` : ""]
    .filter((cls) => cls)
    .join(" ");

  const isLast = (idx) => {
    return idx === routes.length - 1;
  };

  const crumbClasses = (index) => {
    const isLastCrumb = isLast(routes, index);
    return ["breadcrumb-item", isLastCrumb ? "active" : ""]
      .filter((cl) => cl)
      .join(" ");
  };
</script>

<nav aria-label="breadcrumbs">
  <ol class={breadcrumbClasses}>
    {#each routes as route, i}
      <li class={crumbClasses(i)}>
        {#if !isLast(i) && route.url}
          <a href={route.url}>{route.label}</a>
        {:else}<span v-else>{route.label}</span>{/if}
      </li>
    {/each}
  </ol>
</nav>
