
<script>
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import { Breadcrumb } from "agnostic-vue";

export default {
  name: "BreadcrumbExamples",
  components: {
    Breadcrumb,
  },
  data() {
    return {
      trailOfTennisRoutes: [
        {
          label: "Tennis",
          url: "#tennis",
        },
        {
          label: "Superstars",
          url: "#tennis-superstars",
        },
        {
          label: "Serena Williams",
          url: "#tennis-superstars-serena",
        },
      ],
    };
  },
};
</script>
<template>
  <h2>Breadcrumbs</h2>
  <div class="mbs24 mbe16">
    <Breadcrumb :routes="trailOfTennisRoutes" />
    <Breadcrumb
      type="slash"
      :routes="trailOfTennisRoutes"
    />
    <Breadcrumb
      type="bullet"
      :routes="trailOfTennisRoutes"
    />
    <Breadcrumb
      type="arrow"
      :routes="trailOfTennisRoutes"
    />
    <Breadcrumb :routes="[{ label: 'A single route will look *linkless*' }]" />
    <Breadcrumb :routes="[{label: 'First', url: '#foo'}, { label: 'Second', url: '#bar' }]" />
  </div>
</template>
