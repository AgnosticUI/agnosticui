<template>
  <section :class="$style.component">
    <FlexGrid tagName="section">
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <h2 id="progress">Progress</h2>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <h3>
            AgnosticUI offers a <i>Progress</i> component in the framework
            implementations. The CSS package offers class-based styling with
            a slightly sleaker progress then the native one on webkit-based browsers.
          </h3>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <h4>Progresss</h4>
        </FlexCol>
      </FlexRow>
      <FlexRow :customClasses="$style.rowProgresss" v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <p class="flex">
            <AgProgress value="35" max="100" />
          </p>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <pre v-highlightjs="regular"><code class="html"></code></pre>
        </FlexCol>
      </FlexRow>
    </FlexGrid>
  </section>
</template>
<script>
import AgProgress from "agnosticui/Progress.vue";
import FlexGrid from "agnosticui/FlexGrid/FlexGrid";
import FlexRow from "agnosticui/FlexGrid/FlexRow";
import FlexCol from "agnosticui/FlexGrid/FlexCol";

export default {
  name: "Progresss",
  components: {
    AgProgress,
    FlexCol,
    FlexGrid,
    FlexRow,
  },
  data() {
    return {
      regular: `<progress max="100" class="progress" value="35"></progress>`,
    };
  },
};
</script>

<style module>
.component {
  composes: component from "./partials.module.css";
}
.rowProgresss {
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
