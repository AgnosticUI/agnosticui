<template>
  <FlexGrid tagName="section">
    <FlexRow v-bind:gutter="16">
      <FlexCol v-bind:xs="12">
        <h4 id="tables" :class="$style.types">Tables</h4>
      </FlexCol>
    </FlexRow>
    <FlexRow v-bind:gutter="16">
      <FlexCol v-bind:xs="12" v-bind:sm="3">
        <Card v-bind:isStacked="true">
          <header :class="$style.cardheader">
            <h6>Table TBD</h6>
          </header>
          <a href="#table" :class="$style.cardbody">
            <TableSVG />
          </a>
        </Card>
      </FlexCol>
      <FlexCol v-bind:xs="12" v-bind:sm="3">
        <Card v-bind:isStacked="true">
          <header :class="$style.cardheader">
            <h6>Sorting tbd</h6>
          </header>
          <a href="#sorting" :class="$style.cardbody">
            <SortingSVG />
          </a>
        </Card>
      </FlexCol>
      <FlexCol v-bind:xs="12" v-bind:sm="3">
        <Card v-bind:isStacked="true">
          <header :class="$style.cardheader">
            <h6>Filters tbd</h6>
          </header>
          <a href="#filters" :class="$style.cardbody">
            <FiltersSVG />
          </a>
        </Card>
      </FlexCol>
      <FlexCol v-bind:xs="12" v-bind:sm="3">
        <Card v-bind:isStacked="true">
          <header :class="$style.cardheader">
            <h6>Pagination TBD</h6>
          </header>
          <a href="#pagination" :class="$style.cardbody">
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
</style>