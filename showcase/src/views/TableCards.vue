<template>
  <FlexGrid tagName="section">
    <FlexRow v-bind:gutter="16">
      <FlexCol v-bind:xs="12">
        <h4 id="tables" :class="$style.types">Tables</h4>
      </FlexCol>
    </FlexRow>
    <FlexRow v-bind:gutter="16">
      <FlexCol v-bind:xs="12" auto>
        <Card v-bind:isStacked="true">
          <header :class="$style.cardheader">
            <h6>Table TBD</h6>
          </header>
          <a href="#table" :class="$style.cardbody">
            <svg
              width="90"
              height="61"
              viewBox="0 0 90 61"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="0.5" y="0.5" width="89" height="8.80357" stroke="#E0E0E0" />
              <rect y="23.9644" width="90" height="2.17857" fill="#E8E8E8" />
              <rect y="41.3931" width="90" height="2.17857" fill="#E8E8E8" />
              <rect y="58.8213" width="90" height="2.17857" fill="#E8E8E8" />
            </svg>
          </a>
        </Card>
      </FlexCol>
      <FlexCol v-bind:xs="12" auto>
        <Card v-bind:isStacked="true">
          <header :class="$style.cardheader">
            <h6>Sorting tbd</h6>
          </header>
          <a href="#sorting" :class="$style.cardbody">
            <svg
              width="69"
              height="90"
              viewBox="0 0 69 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.5 0L23.3253 12.5H1.67468L12.5 0Z" fill="#E9E9E9" />
              <path
                d="M57.3251 90.0005L46.4998 77.5005L68.1504 77.5005L57.3251 90.0005Z"
                fill="#E9E9E9"
              />
              <line x1="12.5" y1="11.667" x2="12.5" y2="90.0003" stroke="#E9E9E9" stroke-width="3" />
              <line
                x1="57.166"
                y1="78.3335"
                x2="57.166"
                y2="0.000167912"
                stroke="#E9E9E9"
                stroke-width="3"
              />
            </svg>
          </a>
        </Card>
      </FlexCol>
      <FlexCol v-bind:xs="12" auto>
        <Card v-bind:isStacked="true">
          <header :class="$style.cardheader">
            <h6>Filters tbd</h6>
          </header>
          <a href="#filters" :class="$style.cardbody">
            <svg
              width="87"
              height="69"
              viewBox="0 0 87 69"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="7" width="87" height="4" fill="#E9E9E9" />
              <rect y="32" width="87" height="4" fill="#E9E9E9" />
              <rect y="57" width="87" height="4" fill="#E9E9E9" />
              <circle cx="25.5" cy="9.5" r="8" fill="white" stroke="#E9E9E9" stroke-width="3" />
              <circle cx="61.5" cy="34.5" r="8" fill="white" stroke="#E9E9E9" stroke-width="3" />
              <circle cx="44.5" cy="59.5" r="8" fill="white" stroke="#E9E9E9" stroke-width="3" />
            </svg>
          </a>
        </Card>
      </FlexCol>
      <FlexCol v-bind:xs="12" auto>
        <Card v-bind:isStacked="true">
          <header :class="$style.cardheader">
            <h6>Pagination TBD</h6>
          </header>
          <a href="#pagination" :class="$style.cardbody">
            <svg
              width="92"
              height="16"
              viewBox="0 0 92 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 0.5H30.8636V15.5H3C1.61929 15.5 0.5 14.3807 0.5 13V3C0.5 1.61929 1.61929 0.5 3 0.5Z"
                fill="#CCCCCC"
                stroke="#D8D8D8"
              />
              <path
                d="M31.3184 0.5H61.182V15.5H30.8184V1C30.8184 0.723858 31.0422 0.5 31.3184 0.5Z"
                stroke="#D8D8D8"
              />
              <path
                d="M61.1367 0.5H89.0004C90.3811 0.5 91.5004 1.61929 91.5004 3V13C91.5004 14.3807 90.3811 15.5 89.0004 15.5H61.1367V0.5Z"
                stroke="#D8D8D8"
              />
            </svg>
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

export default {
  name: "InputCards",
  components: {
    Card,
    FlexCol,
    FlexGrid,
    FlexRow,
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