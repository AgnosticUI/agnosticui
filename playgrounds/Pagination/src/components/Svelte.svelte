<script>
  // See https://docs.astro.build/en/reference/api-reference/#importmeta
  import "agnostic-svelte/css/common.min.css";
  import { usePagination } from "agnostic-helpers/dist/index.esm";
  import { Pagination } from "agnostic-svelte";

  const isSSR = import.meta.env.SSR;

  // Offset describes how many siblings besides current (must be 1 | 2)
  // Example of offset of 1: [1][2(current)][3]...[50]
  // Example of offset of 2: [1][2][3(current)][4][5]...[50]
  // Pagination by default uses a generator with an offset of 1
  // but we are including the use of a custom paging generator here as an example
  const paging = usePagination({ offset: 1 });

  let currentPage = 1;

  // Using $: here declares a reactive block, this code will run whenever
  // currentPage is given a new value
  $: console.log(`currentPage: ${currentPage}`);

  const paginationArgs = {
    total: 20,
    pageGenerator: paging,
    navigationLabels: {
      previous: "Previa",
      next: "Siguiente",
      first: "Primera",
      last: "Última",
    },
    ariaLabel: "Pagination",
    justify: "center",
  };
</script>

{#if !isSSR}
  <section class="mbe24">
    <div class="h4 mbe32 flex items-center">
      <img
        width="24"
        height="24"
        src="/assets/Svelte-icon.svg"
        alt="Svelte logo"
        class="mie12"
      />Svelte Toast
    </div>

    <!-- Using bind: here we establish a two way connection with the 'current' property -->
    <!-- meaning 'currentPage' will be updated whenever 'current' is updated internally -->
    <Pagination {...paginationArgs} bind:current={currentPage} />
  </section>
{/if}
