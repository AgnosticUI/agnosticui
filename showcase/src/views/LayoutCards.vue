<template>
  <FlexGrid tagName="section">
    <FlexRow v-bind:gutter="16">
      <FlexCol v-bind:xs="12">
        <h4 id="layoutsandnavigation" :class="$style.types">Layout &amp; Navigation</h4>
      </FlexCol>
    </FlexRow>
    <FlexRow v-bind:gutter="16">
      <FlexCol v-bind:xs="12" auto>
        <Card v-bind:isStacked="true">
          <header :class="$style.cardheader">
            <h6>Tabs</h6>
          </header>
          <a href="#color" :class="$style.cardbody">
            <TabsSVG />
          </a>
        </Card>
      </FlexCol>
      <FlexCol v-bind:xs="12" auto>
        <Card v-bind:isStacked="true">
          <header :class="$style.cardheader">
            <h6>Card</h6>
          </header>
          <a href="#color" :class="$style.cardbody">
            <CardSVG />
          </a>
        </Card>
      </FlexCol>
      <FlexCol v-bind:xs="12" auto>
        <Card v-bind:isStacked="true">
          <header :class="$style.cardheader">
            <h6>Header</h6>
          </header>
          <a href="#color" :class="$style.cardbody">
            <HeaderSVG />
          </a>
        </Card>
      </FlexCol>
      <FlexCol v-bind:xs="12" auto>
        <Card v-bind:isStacked="true">
          <header :class="$style.cardheader">
            <h6>Stepper</h6>
          </header>
          <a href="#color" :class="$style.cardbody">
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
</style>>
