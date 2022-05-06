<script>
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import { usePagingGenerator, Pagination } from "agnostic-vue";

export default {
  name: "PaginationExamples",
  components: {
    Pagination,
  },
  setup() {
    const { currentPaginationPage, paginationPages, handlePaginationUpdate } =
      usePagingGenerator(1, 1, 20);

    const interceptPageUpdate = (newPage) => {
      // Probably we'd make a fetch or update a table here
      console.log("interceptPageUpdate--page: ", newPage);
      // Will take care of the paging control update
      handlePaginationUpdate(newPage);
    };
    return {
      currentPaginationPage,
      paginationPages,
      interceptPageUpdate,
    };
  },
};
</script>
<template>
  <section>
    <h2>Pagination</h2>
    <Pagination
      @update-page="interceptPageUpdate"
      :current="currentPaginationPage"
      :pages="paginationPages"
    />
  </section>
</template>
