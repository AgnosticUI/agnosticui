<template>
  <section :class="$style.component">
    <FlexGrid tagName="section">
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <h1 id="grid">Grid</h1>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <h3>
            Our flexbox grid is based on a 12-unit grid system where each column counts for 1/12
            of the grid.
          </h3>
          <p>
            Put differently, 12-units represents 100% of the width of the containing
            element your grid resides within. For example, a 3 unit column takes up a fourth of the full width, 4 unit columns a third,
            6 unit columns a half, and so on.
          </p>
          <div :class="$style.hotips">
            <p :class="$style.tip">
              <span class="quoted">The grid system is an aid, not a guarantee.</span>
              <a
                href="https://www.goodreads.com/quotes/9110726-the-grid-system-is-an-aid-not-a-guarantee-it"
              >Josef Müller-Brockmann</a>
            </p>
            <div :class="$style.tipcontent">
              <p>
                AgnosticUI's grid leverages
                <a
                  href="https://evgenyrodionov.github.io/flexboxgrid2/"
                >flexboxgrid2</a>
                under the hood, which in turn leverages
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox"
                >Flexbox</a>.
              </p>
              <p>
                The grid uses a declarative approach where you add certain CSS classes to your html markup to
                layout your page or section on a 12-unit grid.
                If you're using the CSS AgnosticUI package, you can simply apply the global CSS classes
                you see in the demo below. However, if you're using React, Svelte, or
                Vue, you should utilize that framework's version of FlexGrid as it will provide
                localized CSS via
                <a
                  href="https://github.com/css-modules/css-modules"
                >CSS Modules</a> (React, Vue) or
                <a href="https://vuejs.org/v2/guide/single-file-components.html">SFC</a> styles (Svelte).
              </p>
              <h5 :class="$style.customize">Gutters</h5>
              <p>
                Our implementation removes &ldquo;magic gutters&rdquo; so subdivisions are predictable. You
                can certainly apply gutters yourself, but we feel &ldquo;automagical&rdquo; grid gutters to more harm then good.
              </p>
            </div>
          </div>

          <p>
            FlexGrid is a work-in-progress, so please first check the
            <a
              href="https://github.com/AgnosticUI/agnosticui/issues/1"
            >Component Coverage List</a> to see if your framework of choice has been
            implemented yet. If so, you should have a look at the corresponding framework's
            <a
              href="https://storybook.js.org/"
            >Storybook</a> examples.
          </p>
          <div class="flexgrid-container">
            <div class="row" :class="$style.demoOnly">
              <div class="col-xs-12 col-sm-4 col-lg-6">
                <p :class="$style.demoOnlyField">xs={12} sm={4} lg={6}</p>
              </div>
              <div class="col-xs-12 col-sm-4 col-lg-6">
                <p :class="$style.demoOnlyField">xs={12} sm={4} lg={6}</p>
              </div>
              <div class="col-xs-12 col-sm-4 col-lg-3">
                <p :class="$style.demoOnlyField">xs={12} sm={4} lg={3}</p>
              </div>
              <div class="col-xs-12 col-sm-4 col-lg-3">
                <p :class="$style.demoOnlyField">xs={12} sm={4} lg={3}</p>
              </div>
              <div class="col-xs-12 col-sm-4 col-lg-3">
                <p :class="$style.demoOnlyField">xs={12} sm={4} lg={3}</p>
              </div>
              <div class="col-xs-12 col-sm-4 col-lg-3">
                <p :class="$style.demoOnlyField">xs={12} sm={4} lg={3}</p>
              </div>
            </div>
          </div>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <pre v-highlightjs>
      <code class="html">
&lt;div class=&quot;flexgrid-container&quot;&gt;
  &lt;div class=&quot;row&quot;&gt;
    &lt;div class=&quot;col-xs-12 col-sm-4 col-lg-6&quot;&gt;
      &lt;p&gt;xs={12} sm={4} lg={6}&lt;/p&gt;
    &lt;/div&gt;
    &lt;div class=&quot;col-xs-12 col-sm-4 col-lg-6&quot;&gt;
      &lt;p&gt;xs={12} sm={4} lg={6}&lt;/p&gt;
    &lt;/div&gt;
    &lt;div class=&quot;col-xs-12 col-sm-4 col-lg-3&quot;&gt;
      &lt;p&gt;xs={12} sm={4} lg={3}&lt;/p&gt;
    &lt;/div&gt;
    &lt;div class=&quot;col-xs-12 col-sm-4 col-lg-3&quot;&gt;
      &lt;p&gt;xs={12} sm={4} lg={3}&lt;/p&gt;
    &lt;/div&gt;
    &lt;div class=&quot;col-xs-12 col-sm-4 col-lg-3&quot;&gt;
      &lt;p&gt;xs={12} sm={4} lg={3}&lt;/p&gt;
    &lt;/div&gt;
    &lt;div class=&quot;col-xs-12 col-sm-4 col-lg-3&quot;&gt;
      &lt;p&gt;xs={12} sm={4} lg={3}&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
      </code>
    </pre>
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
  name: "Grid",
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
.customize {
  margin-top: var(--Space-56);
  margin-bottom: var(--Space-8);
}

.demoOnly {
  padding: 2rem 0;
}

.demoOnlyField {
  border: 1px solid #cccccc;
  padding: 1.5rem 3rem;
}
</style>