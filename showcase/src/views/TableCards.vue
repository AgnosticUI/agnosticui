<template>
  <FlexGrid tagName="section">
    <FlexRow v-bind:gutter="12">
      <FlexCol v-bind:xs="12">
        <h2 id="tables" :class="$style.types">Tables (coming soon)</h2>
      </FlexCol>
    </FlexRow>
    <FlexRow v-bind:gutter="12">
      <FlexCol v-bind:xs="12" v-bind:lg="3">
        <Card v-bind:isStacked="true">
          <header :class="$style.cardheader">
            <h3 :class="$style.heading">Table</h3>
          </header>
          <a
            href="#table"
            :class="$style.cardbody"
            aria-label="Table jump link"
          >
            <TableSVG />
          </a>
        </Card>
      </FlexCol>
      <FlexCol v-bind:xs="12" v-bind:lg="3">
        <Card v-bind:isStacked="true">
          <header :class="$style.cardheader">
            <h3 :class="$style.heading">Sorting</h3>
          </header>
          <a
            href="#sorting"
            :class="$style.cardbody"
            aria-label="Sorting jump link"
          >
            <SortingSVG />
          </a>
        </Card>
      </FlexCol>
      <FlexCol v-bind:xs="12" v-bind:lg="3">
        <Card v-bind:isStacked="true">
          <header :class="$style.cardheader">
            <h3 :class="$style.heading">Filters</h3>
          </header>
          <a
            href="#filters"
            :class="$style.cardbody"
            aria-label="Filters jump link"
          >
            <FiltersSVG />
          </a>
        </Card>
      </FlexCol>
      <FlexCol v-bind:xs="12" v-bind:lg="3">
        <Card v-bind:isStacked="true">
          <header :class="$style.cardheader">
            <h3 :class="$style.heading">Pagination</h3>
          </header>
          <a
            href="#pagination"
            :class="$style.cardbody"
            aria-label="Pagination jump link"
          >
            <PaginationSVG />
          </a>
        </Card>
      </FlexCol>
    </FlexRow>
  </FlexGrid>
</template>

<script>
import Card from "agnosticui/Card.vue";
import FlexGrid from "agnosticui/FlexGrid/FlexGrid";
import FlexRow from "agnosticui/FlexGrid/FlexRow";
import FlexCol from "agnosticui/FlexGrid/FlexCol";
import TableSVG from "../assets/table.svg";
import SortingSVG from "../assets/sorting.svg";
import FiltersSVG from "../assets/filters.svg";
import PaginationSVG from "../assets/pagination.svg";

export default {
  name: "InputCards",
  components: {
    Card,
    FlexCol,
    FlexGrid,
    FlexRow,
    TableSVG,
    SortingSVG,
    FiltersSVG,
    PaginationSVG,
  },
};
</script>

<style module>
.types {
  composes: types from "./views.module.css";
}
.cards {
  composes: cards from "./views.module.css";
}
.cardheader {
  composes: cardheader from "./views.module.css";
}
.cardbody {
  composes: cardbody from "./views.module.css";
}
.heading {
  composes: heading from "./views.module.css";
}
</style>