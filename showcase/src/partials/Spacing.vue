
<template>
  <section :class="$style.component">
    <FlexGrid tagName="section">
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <h2 id="spacing">Spacing</h2>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <h3>Consistent spacing is key to visual harmony and balance.</h3>
        </FlexCol>

        <FlexCol v-bind:xs="12">
          <p>
            AgnosticUI's spacing is based off of an
            <a href="https://www.designsystems.com/space-grids-and-layouts/"
              >8pt system</a
            >
            which is conveniently relative to the base 16px (1rem) unit used on
            the web. Spacing is done via CSS custom property tokens.
          </p>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <pre v-highlightjs><code class="css">
/**
 * agnostic-default- is not used here since these are, essentially,
 * literals for use on a slightly modified 8pt grid. We use 2 increments
 * until we get to 16 where we start to increment by 4.
 */
:root {
  --fluid-2: 0.125rem;
  --fluid-4: 0.25rem;
  --fluid-6: 0.375rem;
  --fluid-8: 0.5rem;
  --fluid-10: 0.625rem;
  --fluid-12: 0.75rem;
  --fluid-14: 0.875rem;
  --fluid-16: 1rem;
  --fluid-18: 1.125rem;
  --fluid-20: 1.25rem;
  --fluid-24: 1.5rem;
  --fluid-32: 2rem;
  --fluid-36: 2.25rem;
  --fluid-40: 2.5rem;
  --fluid-48: 3rem;
  --fluid-56: 3.5rem;
  --fluid-64: 4rem;
  --fluid-72: 4.5rem;
  --fluid-80: 5rem;;
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
