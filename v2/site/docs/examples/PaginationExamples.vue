<template>
  <section>
    <div class="mbe4">
      <h3>Basic Pagination</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VuePagination
        :current="basicPage"
        :total-pages="20"
        @page-change="handleBasicPageChange"
      />
      <p
        v-if="basicPageMessage"
        style="margin: 0; padding: 0; font-size: var(--ag-font-size-sm); color: var(--ag-text-secondary);"
      >
        {{ basicPageMessage }}
      </p>
    </div>

    <div class="mbe4">
      <h3>First Last Navigation Opt-In</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VuePagination
        :current="basicPage"
        :total-pages="20"
        :first-last-navigation="true"
        @page-change="handleBasicPageChange"
      />
      <p
        v-if="basicPageMessage"
        style="margin: 0; padding: 0; font-size: var(--ag-font-size-sm); color: var(--ag-text-secondary);"
      >
        {{ basicPageMessage }}
      </p>
    </div>

    <div class="mbe4">
      <h3>Bordered Style</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VuePagination
        :current="borderedPage"
        :total-pages="15"
        bordered
        @page-change="handleBorderedPageChange"
      />
    </div>
    <div class="mbe4">
      <h3>Offset Comparison</h3>
    </div>
    <p>
      Offset 2 (default) - shows 2 buttons on each side:
    </p>
    <div class="stacked-mobile mbe4">
      <VuePagination
        :current="offset2Page"
        :total-pages="50"
        :offset="2"
        @page-change="handleOffset2PageChange"
      />
    </div>
    <p style="margin: 1rem 0 0.5rem; font-size: 0.875rem; color: var(--ag-text-secondary);">
      Offset 1 - shows 1 button on each side:
    </p>
    <div class="stacked-mobile mbe4">
      <VuePagination
        :current="offset1Page"
        :total-pages="50"
        :offset="1"
        @page-change="handleOffset1PageChange"
      />
    </div>

    <div class="mbe4">
      <h3>Alignment Options</h3>
    </div>
    <p>
      Justify 'start', 'center', and 'end' respectively:
    </p>
    <div class="stacked-mobile mbe4">
      <VuePagination
        :current="1"
        :total-pages="10"
        justify="start"
      />
    </div>
    <div class="stacked-mobile mbe4">
      <VuePagination
        :current="1"
        :total-pages="10"
        justify="center"
      />
    </div>
    <div class="stacked-mobile mbe4">
      <VuePagination
        :current="1"
        :total-pages="10"
        justify="end"
      />
    </div>

    <div class="mbe4">
      <h3>Custom Navigation Labels (Spanish)</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VuePagination
        :current="spanishPage"
        :total-pages="10"
        :first-last-navigation="true"
        :navigation-labels="{
          first: 'Primera',
          previous: 'Anterior',
          next: 'Siguiente',
          last: 'Última'
        }"
        @page-change="handleSpanishPageChange"
      />
    </div>

    <div class="mbe4">
      <h3>Small Page Count</h3>
    </div>
    <p>
      When there are few pages, all page numbers are shown:
    </p>
    <div class="stacked-mobile mbe4">
      <VuePagination
        :current="smallPage"
        :total-pages="5"
        @page-change="handleSmallPageChange"
      />
    </div>

    <div class="mbe4">
      <h3>Large Page Count</h3>
    </div>
    <p>
      With many pages, ellipsis (...) indicates skipped pages:
    </p>
    <div class="stacked-mobile mbe4">
      <VuePagination
        :current="largePage"
        :total-pages="100"
        @page-change="handleLargePageChange"
      />
    </div>

    <div class="mbe4">
      <h3>CSS Shadow Parts Customization</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <div v-html="customPaginationStyles"></div>
      <VuePagination
        class="custom-pagination"
        :current="customPage"
        :total-pages="10"
        @page-change="handleCustomPageChange"
      />
    </div>
  </section>
</template>

<script>
import { VuePagination } from "agnosticui-core/pagination/vue";

export default {
  name: "PaginationExamples",
  components: {
    VuePagination,
  },
  data() {
    return {
      basicPage: 5,
      basicPageMessage: null,
      borderedPage: 3,
      noFirstLastPage: 5,
      offset2Page: 25,
      offset1Page: 25,
      spanishPage: 1,
      smallPage: 3,
      largePage: 50,
      customPage: 5,
      customPaginationStyles: `
        <style>
          .custom-pagination::part(ag-pagination-container) {
            padding: 1rem;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 8px;
          }
          .custom-pagination::part(ag-pagination) {
            gap: 0.5rem;
          }
          .custom-pagination::part(ag-pagination-button) {
            border-radius: 50%;
            min-width: 2.5rem;
            height: 2.5rem;
            font-weight: 600;
            background: white;
            color: #667eea;
            border: 2px solid transparent;
          }
          .custom-pagination::part(ag-pagination-button):hover:not(:disabled) {
            transform: scale(1.1);
            transition: transform 0.2s;
            border-color: white;
          }
          .custom-pagination .pagination-item-active .pagination-button {
            background: white !important;
            color: #764ba2 !important;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          }
          .custom-pagination::part(ag-pagination-button):disabled {
            background: rgba(255, 255, 255, 0.3);
            color: rgba(255, 255, 255, 0.6);
          }
        </style>
      `,
    };
  },
  methods: {
    handleBasicPageChange(detail) {
      this.basicPage = detail.page;
      this.basicPageMessage = `Current page: ${detail.page} of 20`;
    },
    handleBorderedPageChange(detail) {
      this.borderedPage = detail.page;
    },
    handleNoFirstLastPageChange(detail) {
      this.noFirstLastPage = detail.page;
    },
    handleOffset2PageChange(detail) {
      this.offset2Page = detail.page;
    },
    handleOffset1PageChange(detail) {
      this.offset1Page = detail.page;
    },
    handleSpanishPageChange(detail) {
      this.spanishPage = detail.page;
    },
    handleSmallPageChange(detail) {
      this.smallPage = detail.page;
    },
    handleLargePageChange(detail) {
      this.largePage = detail.page;
    },
    handleCustomPageChange(detail) {
      this.customPage = detail.page;
    },
  },
};
</script>
