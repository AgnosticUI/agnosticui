import { ref, onMounted, watch } from "vue";
import { usePagination } from "agnostic-helpers/dist/index.esm";
import { allowedOffsets, PageArrayItem } from "agnostic-helpers/dist/usePagination";

export default function usePagingGenerator(initialPage: number, offset: allowedOffsets, totalPages: number) {
  const paging = usePagination({ offset: offset || 1 });
  let currentPaginationPage = ref(initialPage || 1);
  let paginationPages = ref<PageArrayItem[]>([]);

  // When user clicks a new page we need to regenerate our paging controls
  const updatePages = () => {
    paginationPages.value = paging.generate(currentPaginationPage.value, totalPages);
  };

  onMounted(updatePages);

  // As if we called updatePages() from within handlePaginationUpdate below
  watch(currentPaginationPage, updatePages);

  // Registered in template to listen for emitted 'update-page' event
  const handlePaginationUpdate = (pageNumber: number) => {
    currentPaginationPage.value = pageNumber;
  };

  return {
    currentPaginationPage,
    paginationPages,
    handlePaginationUpdate,
  };
}
