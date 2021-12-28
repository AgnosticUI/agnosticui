
import { ref, onMounted, watch } from "vue";
import { usePagination } from "agnostic-helpers/dist/agnostic-helpers.esm";

export default function usePagingGenerator(initialPage, offset, totalPages) {
  const paging = usePagination({ offset: offset || 1});
  let currentPaginationPage = ref(initialPage || 1);
  let paginationPages = ref([]);

  // When user clicks a new page we need to regenerate our paging controls
  const updatePages = () => {
    paginationPages.value = paging.generate(currentPaginationPage.value, totalPages);
  };

  onMounted(updatePages);

  // As if we called updatePages() from within handlePaginationUpdate below
  watch(currentPaginationPage, updatePages);

  // Registered in template to listen for emitted 'update-page' event
  const handlePaginationUpdate = (pageNumber) => {
    currentPaginationPage.value = pageNumber;
  };

  return {
    currentPaginationPage,
    paginationPages,
    handlePaginationUpdate,
  };
}
