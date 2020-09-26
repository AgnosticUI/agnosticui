<template>
  <section :class="$style.component">
    <FlexGrid tagName="section">
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <h1 id="color">Colors</h1>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <h3>
            The appropriate and
            <a
              href="https://medium.com/@raquel/inclusive-color-resources-for-your-a11y-color-needs-cf3448c63335"
            >inclusive use of color</a>
            can help to set the tone of your brand and encourage users to
            <a
              href="https://blog.adobe.com/en/publish/2017/03/29/the-impact-of-color-on-conversion-rates.html#gs.f5rtr2"
              class="href"
            >take certain actions</a>.
          </h3>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <div :class="$style.hotips">
            <p :class="$style.tip">
              <span class="quoted">Colors express the main psychic functions of man.</span>
              <a
                href="https://www.facebook.com/cgjungny/posts/colors-express-the-main-psychic-functions-of-man-carl-gustav-jung/10155223465700093/"
                class="href"
              >Carl Gustav Jung</a>
            </p>
            <div :class="$style.tipcontent">
              <p>
                AgnosticUI creates a minimal set of color tokens which you're encouraged to customize
                and extend by simply redefining them in your top-level stylesheet. We use sensible
                neutral gray color defaults, but intentionally use loud primary and secondary colors
                in hopes that it will persuade you to define your own.
              </p>

              <p>Here's what the defaults look like if not redefined:</p>
              <div :class="$style.swatches">
                <ul :class="$style.swatcheswrap">
                  <li :class="[$style.swatch, $style.primary]">
                    <div :class="$style.body"></div>
                    <footer :class="$style.footer">--agnosticui-primary</footer>
                  </li>
                  <li :class="[$style.swatch, $style.secondary]">
                    <div :class="$style.body"></div>
                    <footer :class="$style.footer">--agnosticui-secondary</footer>
                  </li>
                  <li :class="[$style.swatch, $style.light]">
                    <div :class="$style.body"></div>
                    <footer :class="$style.footer">--agnosticui-light</footer>
                  </li>
                </ul>
              </div>
              <div :class="$style.swatches">
                <ul :class="$style.swatcheswrap">
                  <li :class="[$style.swatch, $style.grayextralight]">
                    <div :class="$style.body"></div>
                    <footer :class="$style.footer">--agnosticui-gray-extra-light</footer>
                  </li>
                  <li :class="[$style.swatch, $style.graylight]">
                    <div :class="$style.body"></div>
                    <footer :class="$style.footer">--agnosticui-gray-light</footer>
                  </li>
                  <li :class="[$style.swatch, $style.graymid]">
                    <div :class="$style.body"></div>
                    <footer :class="$style.footer">--agnosticui-gray-mid</footer>
                  </li>
                </ul>
              </div>
              <div :class="$style.swatches">
                <ul :class="$style.swatcheswrap">
                  <li :class="[$style.swatch, $style.graymiddark]">
                    <div :class="$style.body"></div>
                    <footer :class="$style.footer">--agnosticui-gray-mid-dark</footer>
                  </li>
                  <li :class="[$style.swatch, $style.graydark]">
                    <div :class="$style.body"></div>
                    <footer :class="$style.footer">--agnosticui-gray-dark</footer>
                  </li>
                  <li :class="[$style.swatch, $style.dark]">
                    <div :class="$style.body"></div>
                    <footer :class="$style.footer">--agnosticui-dark</footer>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <pre v-highlightjs><code class="css">
/**
* You should override these by simply defining them less the `-default` in
* your top-level stylesheet. For example, to override `--agnosticui-default-primary`
* simply define `--agnosticui-primary` and that will take precedence.
*
* Under the hood, when AgnosticUI applies one of these it does something like:
* margin-left: var(--agnosticui-primary, var(--agnosticui-default-primary));
* where the --agnosticui-default-primary is the fallback if you haven't supplied
* --agnosticui-primary.
*/
:root {
  /* Please, please, please, at mimimum redefine primary and secondary ;) */
  --agnosticui-default-primary: Fuchsia;
  --agnosticui-default-secondary: Tomato;
  --agnosticui-default-gray-extra-light: #f8f8f8;
  --agnosticui-default-gray-light: #e9e9e9;
  --agnosticui-default-gray-mid: #d8d8d8;
  --agnosticui-default-gray-mid-dark: #cccccc;
  --agnosticui-default-gray-dark: #aaaaaa;
  --agnosticui-default-dark: #333333;
  --agnosticui-default-light: #ffffff;
}

/* You will override these by defining them in your top-level stylesheet, using
the override naming convention of removing the `-default` part: */

:root {
  --my-even-more-gaudy-primary: hotpink;
  --agnosticui-primary: var(--my-even-more-gaudy-primary);
  /* note the -default part is removed above */
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
  name: "Colors",
  components: {
    FlexCol,
    FlexGrid,
    FlexRow,
  },
};
</script>
<style module>
.swatches {
  /* TODO -- REPLACE THES ONCE AGNOSTICUI COLORS COMPONENT DONE! */

  --agnosticui-primary: Fuchsia;
  --agnosticui-secondary: Tomato;
  --agnosticui-gray-extra-light: #f8f8f8;
  --agnosticui-gray-light: #e9e9e9;
  --agnosticui-gray-mid: #d8d8d8;
  --agnosticui-gray-mid-dark: #cccccc;
  --agnosticui-gray-dark: #aaaaaa;
  --agnosticui-dark: #333333;
  --agnosticui-light: #ffffff;
}
.swatcheswrap {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: var(--Space-32);
}
.body {
  flex: 1;
}
.footer {
  background-color: var(--agnosticui-gray-light-warm);
  flex: 0 0 var(--Space-72);
  font-family: monospace;
  font-size: var(--Space-12);
  text-transform: lowercase;
  display: flex;
  align-items: center;
  justify-content: center;
}

.swatch {
  flex: 0 1 33.33%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 2px 0px 4px rgba(0, 0, 0, 0.1);
  height: 200px;
  width: 200px;
  display: flex;
  flex-direction: column;
}
.primary {
  background-color: var(--agnosticui-primary);
}
.secondary {
  background-color: var(--agnosticui-secondary);
}
.grayextralight {
  background-color: var(--agnosticui-gray-extra-light);
}
.graylight {
  background-color: var(--agnosticui-gray-light);
}
.graymid {
  background-color: var(--agnosticui-gray-mid);
}
.graymiddark {
  background-color: var(--agnosticui-gray-mid-dark);
}
.graydark {
  background-color: var(--agnosticui-gray-dark);
}
.dark {
  background-color: var(--agnosticui-dark);
}
.light {
  background-color: var(--agnosticui-light);
}

.component {
  composes: component from "./partials.module.css";
  margin-top: var(--Space-80);
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