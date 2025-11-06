<template>
  <section>
    <div class="mbe4">
      <h3>Basic Content Pagination</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueContentPagination
        :previous="{ title: 'Introduction', href: '/introduction' }"
        :next="{ title: 'Getting Started', href: '/getting-started' }"
        :parent="{ title: 'Documentation', href: '/documentation' }"
        @navigate="handleNavigate"
      />
      <p
        v-if="navigationMessage"
        style="margin: 0; padding: 0; font-size: var(--ag-font-size-sm); color: var(--ag-text-secondary);"
      >
        {{ navigationMessage }}
      </p>
    </div>

    <div class="mbe4">
      <h3>Without hrefs (navigate event only)</h3>
    </div>
    <p>
      Links without href still fire navigate events:
    </p>
    <div class="stacked-mobile mbe4">
      <VueContentPagination
        :previous="{ title: 'Introduction' }"
        :next="{ title: 'Getting Started' }"
        :parent="{ title: 'Documentation' }"
        @navigate="handleNavigateNoHref"
      />
      <p
        v-if="navigationMessageNoHref"
        style="margin: 0; padding: 0; font-size: var(--ag-font-size-sm); color: var(--ag-text-secondary);"
      >
        {{ navigationMessageNoHref }}
      </p>
    </div>

    <div class="mbe4">
      <h3>Previous and Next Only</h3>
    </div>
    <p>
      Omit parent link for simpler sequential navigation:
    </p>
    <div class="stacked-mobile mbe4">
      <VueContentPagination
        :previous="{ title: 'Chapter 1: Basics', href: '/chapter-1' }"
        :next="{ title: 'Chapter 3: Advanced', href: '/chapter-3' }"
      />
    </div>

    <div class="mbe4">
      <h3>Parent Only</h3>
    </div>
    <p>
      Show only the parent/overview link:
    </p>
    <div class="stacked-mobile mbe4">
      <VueContentPagination :parent="{ title: 'Back to Documentation', href: '/documentation' }" />
    </div>

    <div class="mbe4">
      <h3>Bordered Style</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueContentPagination
        :previous="{ title: 'Installation', href: '/installation' }"
        :next="{ title: 'Configuration', href: '/configuration' }"
        :parent="{ title: 'Guides', href: '/guides' }"
        bordered
      />
    </div>

    <div class="mbe4">
      <h3>Custom Icons</h3>
    </div>
    <p>
      Override default icons using slots:
    </p>
    <div class="stacked-mobile mbe4">
      <VueContentPagination
        :previous="{ title: 'Prev Page', href: '/prev' }"
        :next="{ title: 'Next Page', href: '/next' }"
        :parent="{ title: 'Overview', href: '/overview' }"
      >
        <template #previous-icon>
          <ChevronLeft :size="20" />
        </template>
        <template #next-icon>
          <ChevronRight :size="20" />
        </template>
        <template #parent-icon>
          <ChevronUp :size="20" />
        </template>
      </VueContentPagination>
    </div>

    <div class="mbe4">
      <h3>Only Next</h3>
    </div>
    <p>
      First page scenario - only show next link:
    </p>
    <div class="stacked-mobile mbe4">
      <VueContentPagination
        :next="{ title: 'Getting Started', href: '/getting-started' }"
        :parent="{ title: 'Documentation', href: '/docs' }"
      />
    </div>

    <div class="mbe4">
      <h3>Only Previous</h3>
    </div>
    <p>
      Last page scenario - only show previous link:
    </p>
    <div class="stacked-mobile mbe4">
      <VueContentPagination
        :previous="{ title: 'Deployment', href: '/deployment' }"
        :parent="{ title: 'Documentation', href: '/docs' }"
      />
    </div>

    <div class="mbe4">
      <h3>CSS Shadow Parts Customization</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <div v-html="customContentPaginationStyles"></div>
      <VueContentPagination
        class="custom-content-pagination"
        :previous="{ title: 'Introduction', href: '/introduction' }"
        :next="{ title: 'Getting Started', href: '/getting-started' }"
        :parent="{ title: 'Documentation', href: '/documentation' }"
      >
        <template #previous-icon>
          <ChevronLeft :size="20" />
        </template>
        <template #next-icon>
          <ChevronRight :size="20" />
        </template>
        <template #parent-icon>
          <ChevronUp :size="20" />
        </template>
      </VueContentPagination>
    </div>
  </section>
</template>

<script>
import { VueContentPagination } from "agnosticui-core/content-pagination/vue";
import { ChevronLeft, ChevronRight, ChevronUp } from "lucide-vue-next";

export default {
  name: "ContentPaginationExamples",
  components: {
    VueContentPagination,
    ChevronLeft,
    ChevronRight,
    ChevronUp,
  },
  data() {
    return {
      navigationMessage: null,
      navigationMessageNoHref: null,
      customContentPaginationStyles: `
        <style>
          .custom-content-pagination::part(ag-content-pagination-container) {
            padding: 1rem;
          }
          .custom-content-pagination::part(ag-content-pagination-parent) {
            border-radius: 6px;
            transition: all 0.2s;
          }
          .custom-content-pagination::part(ag-content-pagination-parent):hover {
            background-color: #bfdbfe;
            transform: translateY(-1px);
          }
          .custom-content-pagination::part(ag-content-pagination-link) {
            color: #1d4ed8;
            border-color: #93c5fd;
            border-radius: 8px;
            transition: all 0.2s;
          }
          .custom-content-pagination::part(ag-content-pagination-link):hover {
            border-color: #3b82f6;
            transform: translateY(-2px);
          }
        </style>
      `,
    };
  },
  methods: {
    handleNavigate(detail) {
      this.navigationMessage = `Clicked ${detail.type}: "${detail.item.title}"${
        detail.item.href ? ` → ${detail.item.href}` : " (no href)"
      }`;
      // In a real app, you might do: this.$router.push(detail.item.href)
      console.log("Navigate:", detail);
    },
    handleNavigateNoHref(detail) {
      this.navigationMessageNoHref = `Clicked ${detail.type}: "${detail.item.title}" (no href provided)`;
      // Custom navigation logic here
      console.log("Navigate (no href):", detail);
    },
  },
};
</script>
