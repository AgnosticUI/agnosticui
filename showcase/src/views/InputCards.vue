<template>
  <FlexGrid tagName="section">
    <FlexRow v-bind:gutter="16">
      <FlexCol v-bind:xs="12">
        <h4 id="inputs" :class="$style.types">Inputs</h4>
      </FlexCol>
    </FlexRow>
    <FlexRow v-bind:gutter="16">
      <FlexCol v-bind:xs="12" v-bind:sm="3">
        <Card v-bind:isStacked="true">
          <header :class="$style.cardheader">
            <h6>Button</h6>
          </header>
          <a href="#buttons" :class="$style.cardbody">
            <ButtonSVG />
          </a>
        </Card>
      </FlexCol>
      <FlexCol v-bind:xs="12" v-bind:sm="3">
        <Card v-bind:isStacked="true">
          <header :class="$style.cardheader">
            <h6>Input</h6>
          </header>
          <a href="#" :class="$style.cardbody">
            <InputSVG />
          </a>
        </Card>
      </FlexCol>
      <FlexCol v-bind:xs="12" v-bind:sm="3">
        <Card v-bind:isStacked="true">
          <header :class="$style.cardheader">
            <h6>Textarea</h6>
          </header>
          <a href="#" :class="$style.cardbody">
            <TextareaSVG />
          </a>
        </Card>
      </FlexCol>
      <FlexCol v-bind:xs="12" v-bind:sm="3">
        <Card v-bind:isStacked="true">
          <header :class="$style.cardheader">
            <h6>Select</h6>
          </header>
          <a href="#" :class="$style.cardbody">
            <SelectSVG />
          </a>
        </Card>
      </FlexCol>
    </FlexRow>
    <FlexRow :customClasses="$style.row2" v-bind:gutter="16">
      <FlexCol v-bind:xs="12" v-bind:sm="3">
        <Card v-bind:isStacked="true">
          <header :class="$style.cardheader">
            <h6>Progress</h6>
          </header>
          <a href="#" :class="$style.cardbody">
            <ProgressSVG />
          </a>
        </Card>
      </FlexCol>
      <FlexCol v-bind:xs="12" v-bind:sm="3">
        <Card v-bind:isStacked="true">
          <header :class="$style.cardheader">
            <h6>Checkbox</h6>
          </header>
          <a href="#" :class="$style.cardbody">
            <CheckboxSVG />
          </a>
        </Card>
      </FlexCol>
      <FlexCol v-bind:xs="12" v-bind:sm="3">
        <Card v-bind:isStacked="true">
          <header :class="$style.cardheader">
            <h6>Radio</h6>
          </header>
          <a href="#" :class="$style.cardbody">
            <RadioSVG />
          </a>
        </Card>
      </FlexCol>
      <FlexCol v-bind:xs="12" v-bind:sm="3">
        <Card v-bind:isStacked="true">
          <header :class="$style.cardheader">
            <h6>Button Select</h6>
          </header>
          <a href="#" :class="$style.cardbody">
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
</style>