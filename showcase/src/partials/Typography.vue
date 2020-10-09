<template>
  <section :class="$style.component">
    <FlexGrid tagName="section">
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <h2 id="typography">Typography</h2>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <h3>
            Typography and scale are the foundations your designs are built on.
          </h3>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <div :class="$style.hotips">
            <p :class="$style.tip">
              <span class="quoted">Make it easy to read.</span>
              <a
                href="https://www.fastcompany.com/32656/web-sites-work"
                class="href"
                >Roger Black</a
              >
            </p>
            <div :class="$style.tipcontent">
              Please consider heeding Black's 6 rules for web design:
              <ul :class="$style.ul">
                <li :class="$style.li">Bigger is better</li>
                <li :class="$style.li">Color your world — sparingly</li>
                <li :class="$style.li">Faster beats fancier</li>
                <li :class="$style.li">Content is king</li>
                <li :class="$style.li">Small bytes go down easier</li>
                <li :class="$style.li">
                  If you don’t have something good to say, don’t say anything
                </li>
              </ul>
              <h4 :class="$style.customize">Using CSS Custom to Theme</h4>
              <p>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties"
                  >CSS custom properties</a
                >
                are an underutilized tool for web designers and developers
                alike. They allow us to define and use
                <span class="quoted">variables</span> that can be shared across
                our app. But, even more powerfully, they provide a built-in
                fallback system which allows us to replace default values with
                our own. This makes theming easy!
              </p>
              <p>
                For example, AgnosticUI uses a system font stack by default, but
                you may want to instead use your own. This can be achieved by
                simply defining the custom css property for font family. Under
                the hood, AgnosticUI will do:
              </p>
              <pre class="inline-code">
var(--agnosticui-font-family,
var(--agnosticui-font-family));</pre
              >
              <p>
                Essentially, the left variable will be used if defined,
                otherwise it will fallback to default one. All override
                variables in AgnosticUI are defined using this same naming
                convention where you simply remove the
                <i>--default</i>.
              </p>
            </div>
          </div>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <pre v-highlightjs><code class="css">
/**
 * These are only meant to be minimal point of departure to work from.
 * You're encouraged to customize your font stack and sizes to whatever
 * suits you. Note the newlines here are for readability only.
 */
:root {
  --agnosticui-font-family: -apple-system, BlinkMacSystemFont,
  "Segoe UI", "Open Sans", "Ubuntu", "Fira Sans", Helvetica,
  "Droid Sans", "Helvetica Neue", sans-serif, "Apple Color Emoji",
  "Segoe UI Emoji", "Segoe UI Symbol";
  --agnosticui-h1: 64px;
  --agnosticui-h2: 48px;
  --agnosticui-h3: 36px;
  --agnosticui-h4: 24px;
  --agnosticui-h5: 18px;
  --agnosticui-h6: 14px;
  --agnosticui-body: 16px;
  --agnosticui-font-weight-bold: 600;
  --agnosticui-font-weight-light: 300;
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
  name: "Typography",
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
.ul {
  margin-top: var(--Space-16);
}
.li {
  list-style-type: circle;
  margin-left: var(--Space-40);
}
.tip {
  composes: tip from "./partials.module.css";
}
.customize {
  margin-top: var(--Space-56);
  margin-bottom: var(--Space-8);
}
</style>
