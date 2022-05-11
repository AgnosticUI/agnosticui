<script setup lang="ts">
import usePagingGenerator from "../../src/components/usePagingGenerator";
import Pagination from "../../src/components/Pagination.vue";
const { currentPaginationPage, paginationPages, handlePaginationUpdate } =
  usePagingGenerator(1, 1, 20);

const interceptPageUpdate = (newPage) => {
  // Probably we'd make a fetch or update a table here
  console.log("interceptPageUpdate--page: ", newPage);
  // Will take care of the paging control update
  handlePaginationUpdate(newPage);
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
