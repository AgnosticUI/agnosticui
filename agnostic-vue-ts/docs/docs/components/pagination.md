# Pagination

The `Pagination` component is typically used to _paginate_ large sets of data divided into smaller parts called _pages_.

<div class="mbs24"></div>

## Examples

<div class="mbe24"></div>

<PaginationExamples />

<script setup>
import PaginationExamples from '../../components/PaginationExamples.vue'
import Alert from "../../../src/components/Alert.vue";
</script>

<div class="mbe32"></div>

## Usage

<div class="flex">
  <h3 id="vue-3" tabindex="-1">
    <img src="/images/Vue-icon.svg" alt="Vue 3 logo">Vue 3
  </h3>
</div>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```vue
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
```

</details>

Vue 3: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/components/Table.vue)
