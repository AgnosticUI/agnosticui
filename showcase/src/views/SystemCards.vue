<template>
  <FlexGrid tagName="section">
    <FlexRow v-bind:gutter="16">
      <FlexCol v-bind:xs="12">
        <h2 id="system" :class="$style.types">System</h2>
      </FlexCol>
    </FlexRow>
    <FlexRow v-bind:gutter="16">
      <FlexCol v-bind:xs="12" v-bind:lg="3">
        <Card v-bind:isStacked="true">
          <header :class="$style.cardheader">
            <h3 :class="$style.heading">Color</h3>
          </header>
          <a
            href="#color"
            :class="$style.cardbody"
            aria-label="Color jump link"
          >
            <ColorSVG />
          </a>
        </Card>
      </FlexCol>
      <FlexCol v-bind:xs="12" v-bind:lg="3">
        <Card v-bind:isStacked="true">
          <header :class="$style.cardheader">
            <h3 :class="$style.heading">Typography</h3>
          </header>
          <a
            href="#typography"
            :class="$style.cardbody"
            aria-label="Typography jump link"
          >
            <TypographySVG />
          </a>
        </Card>
      </FlexCol>
      <FlexCol v-bind:xs="12" v-bind:lg="3">
        <Card v-bind:isStacked="true">
          <header :class="$style.cardheader">
            <h3 :class="$style.heading">Spacing</h3>
          </header>
          <a
            href="#spacing"
            :class="$style.cardbody"
            aria-label="Spacing jump link"
          >
            <SpacingSVG />
          </a>
        </Card>
      </FlexCol>
      <FlexCol v-bind:xs="12" v-bind:lg="3">
        <Card v-bind:isStacked="true">
          <header :class="$style.cardheader">
            <h3 :class="$style.heading">Grid</h3>
          </header>
          <a href="#grid" :class="$style.cardbody" aria-label="Grid jump link">
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
.heading {
  composes: heading from "./views.module.css";
}
</style>
