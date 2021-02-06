<template>
  <section :class="$style.component">
    <FlexGrid tagName="section">
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <h2 id="cards">Card</h2>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <h3>
            AgnosticUI offers a <i>Card</i> components in the framework
            implementations. The CSS package simply offers class-based styling.
          </h3>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <h4>Cards</h4>
        </FlexCol>
      </FlexRow>
      <FlexRow :customClasses="$style.rowCards" v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <p class="flex">
            <AgCard isStacked>
              <div style="padding: 24px;">Some example content in a div</div>
              <div style="padding: 24px;">More example content in another div</div>
            </AgCard>
          </p>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <pre v-highlightjs="regular"><code class="html"></code></pre>
        </FlexCol>
      </FlexRow>
      <FlexRow :customClasses="$style.rowCards" v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <p class="flex">
            <AgCard isStacked isAnimated>
              <div style="padding: 24px;">
                <h4>Card that is animated on hover</h4>
              </div>
              <div style="padding: 24px;">More example content in another div</div>
            </AgCard>
          </p>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <pre v-highlightjs="animated"><code class="html"></code></pre>
        </FlexCol>
      </FlexRow>
    </FlexGrid>
  </section>
</template>
<script>
import AgCard from "agnosticui/Card.vue";
import FlexGrid from "agnosticui/FlexGrid/FlexGrid";
import FlexRow from "agnosticui/FlexGrid/FlexRow";
import FlexCol from "agnosticui/FlexGrid/FlexCol";

export default {
  name: "Cards",
  components: {
    AgCard,
    FlexCol,
    FlexGrid,
    FlexRow,
  },
  data() {
    return {
      regular: `<div class="card card-stacked">
  <div style="padding: 24px;">Some example content in a div</div>
  <div style="padding: 24px;">More example content in another div</div>
</div>`,
      animated: `<div class="card card-animated card-stacked">
  <div style="padding: 24px;"><p>Card that is animated on hover</p></div>
  <div style="padding: 24px;">More example content in another div</div>
</div>`,
    };
  },
};
</script>

<style module>
.component {
  composes: component from "./partials.module.css";
}
.rowCards {
  margin-block-end: var(--fluid-24);
}
</style>

<style scoped>
.flex {
  display: flex;
  flex-wrap: wrap;
}
.flex > div {
  margin-block-end: var(--fluid-16);
}
</style>
