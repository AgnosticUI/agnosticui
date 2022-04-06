<script>
 // See https://docs.astro.build/en/reference/api-reference/#importmeta
import 'agnostic-svelte/css/common.min.css';
import { usePagination } from "agnostic-helpers/dist/index.esm";
import { Pagination } from "agnostic-svelte";

const isSSR = import.meta.env.SSR; 

// Offset describes how many siblings besides current (must be 1 | 2)
// Example of offset of 1: [1][2(current)][3]...[50]
// Example of offset of 2: [1][2][3(current)][4][5]...[50]
const paging = usePagination({ offset: 1 });

// currentPage is the "dependency" that triggers reactive `paginationPages`
let currentPage = 1;
$: paginationPages = paging.generate(currentPage, 50);

const onPageUpdated = async (pageNumber) => {
  console.log("onPageUpdated called with page: ", pageNumber)
  // This will trigger paginationPages to update itself above
  currentPage = pageNumber;
};

const paginationArgs = {
  totalPages: 50,
  onPageChange: onPageUpdated,
  navigationLabels: {
    previous: "Previa",
    next: "Siguiente",
    first: "Primera",
    last: "Última",
  },
  ariaLabel: "Pagination",
  justify: "center"
}
</script>
{#if !isSSR }
  <section class="mbe24">
    <div class="h4 mbe32 flex items-center">
      <img width="24" height="24" src="/assets/Svelte-icon.svg" alt="Svelte logo" class="mie12" />Svelte Toast
    </div>
    <Pagination {...paginationArgs} current="{currentPage}" pages="{paginationPages}" />
  </section>
{/if}
