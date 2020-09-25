<template>
  <FlexGrid tagName="section">
    <FlexRow v-bind:gutter="16">
      <FlexCol v-bind:xs="12">
        <h4 id="system" :class="$style.types">System</h4>
      </FlexCol>
    </FlexRow>
    <FlexRow v-bind:gutter="16">
      <FlexCol v-bind:xs="12" auto>
        <Card v-bind:isStacked="true">
          <header :class="$style.cardheader">
            <h6>Color</h6>
          </header>
          <a href="#color" :class="$style.cardbody">
            <ColorSVG />
          </a>
        </Card>
      </FlexCol>
      <FlexCol v-bind:xs="12" auto>
        <Card v-bind:isStacked="true">
          <header :class="$style.cardheader">
            <h6>Typography</h6>
          </header>
          <a href="#typography" :class="$style.cardbody">
            <TypographySVG />
          </a>
        </Card>
      </FlexCol>
      <FlexCol v-bind:xs="12" auto>
        <Card v-bind:isStacked="true">
          <header :class="$style.cardheader">
            <h6>Spacing</h6>
          </header>
          <a href="#spacing" :class="$style.cardbody">
            <SpacingSVG />
          </a>
        </Card>
      </FlexCol>
      <FlexCol v-bind:xs="12" auto>
        <Card v-bind:isStacked="true">
          <header :class="$style.cardheader">
            <h6>Grid</h6>
          </header>
          <a href="#grid" :class="$style.cardbody">
            <GridSVG />
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
import ColorSVG from "../assets/color2.svg";
import GridSVG from "../assets/grid.svg";
import TypographySVG from "../assets/typography.svg";
import SpacingSVG from "../assets/spacing.svg";

export default {
  name: "SystemCards",
  components: {
    Card,
    FlexCol,
    FlexGrid,
    FlexRow,
    ColorSVG,
    TypographySVG,
    GridSVG,
    SpacingSVG,
  },
};
</script>

<style module>
.types {
  composes: types from "./views.module.css";
}
.cardheader {
  composes: cardheader from "./views.module.css";
}
.cardbody {
  composes: cardbody from "./views.module.css";
}
</style>
