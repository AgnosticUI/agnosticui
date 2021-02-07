<template>
  <FlexGrid tagName="section">
    <FlexRow v-bind:gutter="12">
      <FlexCol v-bind:xs="12">
        <h2 id="layoutsandnavigation" :class="$style.types">
          Layout &amp; Navigation
        </h2>
      </FlexCol>
    </FlexRow>
    <FlexRow v-bind:gutter="12">
      <FlexCol v-bind:xs="12" v-bind:lg="3">
        <Card v-bind:isStacked="true">
          <header :class="$style.cardheader">
            <h3 :class="$style.heading">Tabs</h3>
          </header>
          <a href="#color" :class="$style.cardbody" aria-label="Tabs jump link">
            <TabsSVG />
          </a>
        </Card>
      </FlexCol>
      <FlexCol v-bind:xs="12" v-bind:lg="3">
        <Card v-bind:isStacked="true">
          <header :class="$style.cardheader">
            <h3 :class="$style.heading">Card</h3>
          </header>
          <a href="#cards" :class="$style.cardbody" aria-label="Card jump link">
            <CardSVG />
          </a>
        </Card>
      </FlexCol>
      <FlexCol v-bind:xs="12" v-bind:lg="3">
        <Card v-bind:isStacked="true">
          <header :class="$style.cardheader">
            <h3 :class="$style.heading">Header</h3>
          </header>
          <a
            href="#headers"
            :class="$style.cardbody"
            aria-label="Header jump link"
          >
            <HeaderSVG />
          </a>
        </Card>
      </FlexCol>
      <FlexCol v-bind:xs="12" v-bind:lg="3">
        <Card v-bind:isStacked="true">
          <header :class="$style.cardheader">
            <h3 :class="$style.heading">Stepper</h3>
          </header>
          <a
            href="#color"
            :class="$style.cardbody"
            aria-label="Stepper jump link"
          >
            <StepperSVG />
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
import TabsSVG from "../assets/tabs.svg";
import CardSVG from "../assets/card.svg";
import HeaderSVG from "../assets/header.svg";
import StepperSVG from "../assets/stepper.svg";

export default {
  name: "LayoutCards",
  components: {
    Card,
    FlexCol,
    FlexGrid,
    FlexRow,
    TabsSVG,
    CardSVG,
    HeaderSVG,
    StepperSVG,
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
</style>>
