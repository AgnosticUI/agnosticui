<template>
  <section
    :v-if="!isSSR"
    class="mbe24"
  >
    <div class="h4 flex items-center">
      <img
        width="24"
        height="24"
        src="/assets/Vue-icon.svg"
        alt="Vue logo"
        class="mie12"
      />Vue 3 Toast
    </div>
  </section>
  <Pagination
    @update-page="interceptPageUpdate"
    :current="currentPaginationPage"
    :pages="paginationPages"
    justify="center"
  />
</template>
<script setup>
// Components CSS
import "agnostic-vue/dist/index.css";
import { usePagingGenerator, Pagination } from "agnostic-vue";

const { currentPaginationPage, paginationPages, handlePaginationUpdate } =
  usePagingGenerator(1, 1, 20);

const interceptPageUpdate = (newPage) => {
  // Typcically we'd fetch or update the data set here
  console.log("interceptPageUpdate--page: ", newPage);
  // This takes care of updating the paging controls appropriately
  handlePaginationUpdate(newPage);
};
// See https://docs.astro.build/en/reference/api-reference/#importmeta
const isSSR = import.meta.env.SSR;
</script>
