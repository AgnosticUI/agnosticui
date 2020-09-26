
<template>
  <section :class="$style.component">
    <FlexGrid tagName="section">
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <h1 id="spacing">Spacing</h1>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <h3>Consistent spacing is key to visual harmony and balance.</h3>
        </FlexCol>

        <FlexCol v-bind:xs="12">
          <p>
            AgnosticUI's spacing is based off of an
            <a
              href="https://www.designsystems.com/space-grids-and-layouts/"
            >8pt system</a> which is conveniently
            relative to the base 16px (1rem) unit used on the web. Spacing is done via CSS custom property tokens.
          </p>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <pre v-highlightjs><code class="css">
/**
 * agnostic-default- is not used here since these are, essentially, literals for
 * use on a slightly modified 8pt grid.
 */
:root {
  --Space-80: 80px;
  --Space-72: 72px;
  --Space-64: 64px;
  --Space-56: 56px;
  --Space-48: 48px;
  --Space-40: 40px;
  --Space-32: 32px;
  --Space-24: 24px;
  --Space-16: 16px;
  --Space-14: 14px;
  --Space-12: 12px;
  --Space-10: 10px;
  --Space-8: 8px;
  --Space-6: 6px;
  --Space-4: 4px;
}
    </code></pre>
        </FlexCol>
      </FlexRow>
    </FlexGrid>
  </section>
</template>

<script>
import FlexGrid from "agnosticui/FlexGrid/FlexGrid";
import FlexRow from "agnosticui/FlexGrid/FlexRow";
import FlexCol from "agnosticui/FlexGrid/FlexCol";

export default {
  name: "Spacing",
  components: {
    FlexCol,
    FlexGrid,
    FlexRow,
  },
};
</script>


<style module>
.component {
  composes: component from "./partials.module.css";
}
.hotips {
  composes: hotips from "./partials.module.css";
}
.tipcontent {
  composes: tipcontent from "./partials.module.css";
}
.tip {
  composes: tip from "./partials.module.css";
}
</style>
