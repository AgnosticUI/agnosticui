# Pagination

The `Pagination` component is typically used to _paginate_ large sets of data divided into smaller parts called _pages_.

<div class="mbs24"></div>

## Examples

<div class="mbe24"></div>

<PaginationExamples />

<script setup>
import PaginationExamples from '../../components/PaginationExamples.vue'
import { Alert } from "agnostic-vue";
</script>

<div class="mbe32"></div>

## Usage

<div class="flex mbs40 mbe24">
  <a href="https://astro.build/" class="flex-shrink-0" target="_blank"><img style="width: var(--fluid-80)" src="/images/astro-logo-light.svg" alt="astro logo"></a>
  <p class="mis16">React, Vue, and Svelte examples on a single playground page 🚀 💥</p>
</div>
<div class="playgrounds flex mbe32">
  <a class="btn btn-rounded" style="background-color: var(--agnostic-dark); color: var(--agnostic-light)" href="https://codesandbox.io/s/github/AgnosticUI/agnosticui/tree/master/playgrounds/Pagination?file=/README.md" target="_blank">
    <img src="/images/codesandbox.svg" alt="codesandbox logo" class="mie8"> View in CodeSandbox
  </a>
  <a class="btn btn-rounded" style="background-color: var(--agnostic-primary); color: var(--agnostic-light)" href="https://stackblitz.com/github/AgnosticUI/agnosticui/tree/master/playgrounds/Pagination?file=/README.md" target="_blank">
    <img src="/images/stackblitz.svg" alt="Stackblitz logo" class="mie4"> View in Stackblitz
  </a>
</div>

<div class="flex">
  <h3 id="react" tabindex="-1">
    <img src="/images/React-icon.svg" alt="react logo">React
  </h3>
</div>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```jsx
import { useEffect, useState } from 'react';
import 'agnostic-react/dist/common.min.css';
import 'agnostic-react/dist/esm/index.css';
import { Pagination } from 'agnostic-react';
import { usePagination } from 'agnostic-helpers/dist/index.esm';

export const YourComponent = () => {
  const [page, setPage] = useState(1);
  const paging = usePagination({ offset: 2 });
  // usePagination will generate your paging controls
  const pages = paging.generate(page, 20);

  useEffect(() => {
    // 1. `onPageChange` fires when a user clicks on a new page
    // 2. That calls `setPage` which `onPageChange` is pointed to
    // 3. `useEffect` here fires as we have the `page` dependency
    // listed in our dependencies array below
    // 4. We feed the new page into `paging.generate` and rerender
    paging.generate(page, 20);
  }, [page, pages, paging]);

  return (
    <section className="mbe24">
      <Pagination
        onPageChange={setPage}
        current={page}
        pages={pages}
        ariaLabel="Pagination to help navigate table"
      />
    </section>
  );
};
```

</details>

React: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/Pagination.tsx), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/stories/Pagination.stories.tsx)

<div class="mbe32"></div>

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

Vue 3: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/components/Table.vue), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/stories/Table.stories.js)

<div class="mbe24"></div>

<div class="flex mbe16">
  <h3 id="svelte" tabindex="-1">
    <img src="/images/Svelte-icon.svg" alt="Svelte logo">Svelte
  </h3>
</div>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```html
<script>
  import "agnostic-svelte/css/common.min.css";
  import { usePagination } from "agnostic-helpers/dist/index.esm";
  import { Pagination } from "agnostic-svelte";

  // Offset describes how many siblings besides current (must be 1 | 2)
  // Example of offset of 1: [1][2(current)][3]...[50]
  // Example of offset of 2: [1][2][3(current)][4][5]...[50]
  // Pagination by default uses a generator with an offset of 1
  // but we are including the use of a custom paging generator here as an example
  const paging = usePagination({ offset: 2 });

  let currentPage = 1;

  // Using $: here declares a reactive block, this code will run whenever
  // currentPage is given a new value
  $: console.log(`Current page is: ${currentPage}`);

  const paginationArgs = {
    total: 50,
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

<!-- Using bind: here we establish a two way connection with the 'current' property -->
<!-- meaning 'currentPage' will be updated whenever 'current' is updated internally -->
<Pagination {...paginationArgs} bind:current="{currentPage}" />
```

</details>

Svelte: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/lib/components/Pagination/Pagination.svelte), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/lib/components/Pagination/Pagination.stories.js)

<div class="flex">
  <h3 id="angular" tabindex="-1">
    <img src="/images/Angular-icon.svg" alt="Angular logo">Angular (Experimental)
  </h3>
</div>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

In your Angular configuration (likely `angular.json`) ensure you're including
the common AgnosticUI styles:

<div class="mbe16"></div>

` "styles": ["agnostic-angular/common.min.css"],`

<div class="mbe24"></div>

Add AgnosticUI's `AgModule` module:

```js{3,9}
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgModule } from 'agnostic-angular';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AgModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

Now you can use in your components:

```js
import { Component, OnInit } from '@angular/core';
import { usePagination } from 'agnostic-helpers/dist/index.esm';
@Component({
  selector: 'your-component',
  template: `<div>
  <ag-pagination (onPageChange)="onPageChange($event)"
                   [current]="page"
                   [navigationLabels]="customNavigationLabels"
                   [pages]="pages"
                   attr.aria-label="pagination">
    ></ag-pagination>
  </div>`
})
export class YourComponent  implements OnInit {
  /**
   * usePagination generates the paging control numbers and
   * "gap" e.g. '...'
   */
  paging = usePagination({ offset: 2 });
  page: number = 1;
  /**
   * Typically you'd derive this by dividing the total number of items
   * in your data set, by the number of items per page you'd like displayed:
   *   totalPage = Math.ceil(this.items.length / this.displayedPerPage);
   */
  totalPages: number = 50;
  pages: any[] = [];
  /**
   * Default looks like:
   * First | Previous | 1 | 2 | 3 ... | 50 | Next | Last
   */
  customLabels = {
    previous: 'Previa',
    next: 'Siguiente',
    first: 'Primera',
    last: 'Última',
  };
  public get customNavigationLabels() {
    return this.customLabels;
  }
  ngOnInit() {
    this.pages = this.paging.generate(this.page, this.totalPages)
  }

  public onPageChange(pageNumber: number) {
    // 1. `onPageChange` fires when a user clicks on a new page
    // 2. We simply feed new page into `paging.generate` below
    this.page = pageNumber;
    this.pages = this.paging.generate(this.page, this.totalPages)
  }
}
```

</details>

Angular: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/pagination.component.ts), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/pagination.component.stories.ts)

<div class="mbe32"></div>

## Storybook

You can run the framework Storybooks and see live examples for React, Vue 3, Svelte, and Angular (experimental). The following will set up Storybook and run locally:

<details class="mbs24 mbe24 disclose disclose-bordered">
<summary class="disclose-title">How to run Storybook</summary>

```shell
git clone git@github.com:AgnosticUI/agnosticui.git
cd agnosticui/<PACKAGE_NAME> && npm i # e.g. cd agnosticui/agnostic-react && npm i
npm run storybook
```
</details>

See [Running Storybook](https://github.com/AgnosticUI/agnosticui/blob/master/CONTRIBUTING.md#usage).
