<template>
  <FlexGrid tagName="section">
    <FlexRow v-bind:gutter="16">
      <FlexCol v-bind:xs="12">
        <h2 id="inputs" :class="$style.types">Inputs</h2>
      </FlexCol>
    </FlexRow>
    <FlexRow v-bind:gutter="16">
      <FlexCol v-bind:xs="12" v-bind:lg="3">
        <Card v-bind:isStacked="true">
          <header :class="$style.cardheader">
            <h3 :class="$style.heading">Button</h3>
          </header>
          <a
            href="#buttons"
            :class="$style.cardbody"
            aria-label="Button jump link"
          >
            <ButtonSVG />
          </a>
        </Card>
      </FlexCol>
      <FlexCol v-bind:xs="12" v-bind:lg="3">
        <Card v-bind:isStacked="true">
          <header :class="$style.cardheader">
            <h3 :class="$style.heading">Input</h3>
          </header>
          <a
            href="#inputcomponent"
            :class="$style.cardbody"
            aria-label="Input jump link"
          >
            <InputSVG />
          </a>
        </Card>
      </FlexCol>
      <FlexCol v-bind:xs="12" v-bind:lg="3">
        <Card v-bind:isStacked="true">
          <header :class="$style.cardheader">
            <h3 :class="$style.heading">Textarea</h3>
          </header>
          <a
            href="#textarea"
            :class="$style.cardbody"
            aria-label="Textarea jump link"
          >
            <TextareaSVG />
          </a>
        </Card>
      </FlexCol>
      <FlexCol v-bind:xs="12" v-bind:lg="3">
        <Card v-bind:isStacked="true">
          <header :class="$style.cardheader">
            <h3 :class="$style.heading">Select</h3>
          </header>
          <a href="#" :class="$style.cardbody" aria-label="Select jump link">
            <SelectSVG />
          </a>
        </Card>
      </FlexCol>
    </FlexRow>
    <FlexRow :customClasses="$style.row2" v-bind:gutter="16">
      <FlexCol v-bind:xs="12" v-bind:lg="3">
        <Card v-bind:isStacked="true">
          <header :class="$style.cardheader">
            <h3 :class="$style.heading">Progress</h3>
          </header>
          <a href="#" :class="$style.cardbody" aria-label="Progress jump link">
            <ProgressSVG />
          </a>
        </Card>
      </FlexCol>
      <FlexCol v-bind:xs="12" v-bind:lg="3">
        <Card v-bind:isStacked="true">
          <header :class="$style.cardheader">
            <h3 :class="$style.heading">Checkbox</h3>
          </header>
          <a href="#" :class="$style.cardbody" aria-label="Checkbox jump link">
            <CheckboxSVG />
          </a>
        </Card>
      </FlexCol>
      <FlexCol v-bind:xs="12" v-bind:lg="3">
        <Card v-bind:isStacked="true">
          <header :class="$style.cardheader">
            <h3 :class="$style.heading">Radio</h3>
          </header>
          <a href="#" :class="$style.cardbody" aria-label="Radio jump link">
            <RadioSVG />
          </a>
        </Card>
      </FlexCol>
      <FlexCol v-bind:xs="12" v-bind:lg="3">
        <Card v-bind:isStacked="true">
          <header :class="$style.cardheader">
            <h3 :class="$style.heading">Button Select</h3>
          </header>
          <a
            href="#"
            :class="$style.cardbody"
            aria-label="Button Select jump link"
          >
            <ButtonSelectSVG />
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
import ButtonSVG from "../assets/button.svg";
import InputSVG from "../assets/input.svg";
import TextareaSVG from "../assets/textarea.svg";
import SelectSVG from "../assets/select.svg";
import ProgressSVG from "../assets/progress.svg";
import CheckboxSVG from "../assets/checkbox.svg";
import RadioSVG from "../assets/radio.svg";
import ButtonSelectSVG from "../assets/buttonselect.svg";

export default {
  name: "InputCards",
  components: {
    Card,
    FlexCol,
    FlexGrid,
    FlexRow,
    ButtonSVG,
    InputSVG,
    TextareaSVG,
    SelectSVG,
    ProgressSVG,
    CheckboxSVG,
    RadioSVG,
    ButtonSelectSVG,
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
.row2 {
  margin-top: var(--Space-24);
}
.heading {
  composes: heading from "./views.module.css";
}
</style>