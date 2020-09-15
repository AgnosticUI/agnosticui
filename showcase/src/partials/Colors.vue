<template>
  <section :class="$style.component">
    <h1 id="color">Colors</h1>
    <h3>
      The appropriate use of color can set the
      <a
        href="https://www.canva.com/learn/choose-right-colors-brand/"
        class="href"
      >tone of your brand</a>
      while helping to guide users to
      <a
        href="https://blog.adobe.com/en/publish/2017/03/29/the-impact-of-color-on-conversion-rates.html#gs.f5rtr2"
        class="href"
      >take action</a>.
    </h3>
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
          and extend by simply redefining them in your top-level stylesheet. While we use sensible
          neutral gray colors by default, we purposely use gaudy primary and secondary colors to, ahem,
          encourage you to redefine and customize these!
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
    <pre v-highlightjs><code class="css">
/**
* You should override these by simply defining them in your top-level stylesheet.
* Please do so for primary and secondary at minimum!
*
* Under the hood, when AgnosticUI applies one of these it does something like:
* margin-left: var(--agnostic-primary, var(--agnostic-default-primary));
* where the --agnostic-default-primary is the fallback if you haven't supplied
* --agnostic-primary.
*/
:root {
  /* Please, please, please, at mimimum redefine primary and secondary ;) */
  --agnostic-default-primary: Fuchsia;
  --agnostic-default-secondary: Teal;
  --agnostic-default-gray-extra-light: #f8f8f8;
  --agnostic-default-gray-light: #e9e9e9;
  --agnostic-default-gray-mid: #d8d8d8;
  --agnostic-default-gray-mid-dark: #cccccc;
  --agnostic-default-gray-dark: #aaaaaa;
  --agnostic-default-dark: #333333;
  --agnostic-default-light: #ffffff;
}

/* You will override these by defining them in your top-level stylesheet: */

:root {
  --my-even-more-gaudy-primary: hotpink;
  --agnostic-primary: var(--my-even-more-gaudy-primary);
  ...and so on
}
    </code></pre>
  </section>
</template>
<style module>
.swatches {
  /* TODO -- REPLACE THES ONCE AGNOSTICUI COLORS COMPONENT DONE! */

  --agnostic-primary: Fuchsia;
  --agnostic-secondary: Teal;
  --agnostic-gray-extra-light: #f8f8f8;
  --agnostic-gray-light: #e9e9e9;
  --agnostic-gray-mid: #d8d8d8;
  --agnostic-gray-mid-dark: #cccccc;
  --agnostic-gray-dark: #aaaaaa;
  --agnostic-dark: #333333;
  --agnostic-light: #ffffff;
}
.swatcheswrap {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 32px;
}
.body {
  flex: 1;
}
.footer {
  background-color: var(--gray-light-warm);
  flex: 0 0 72px;
  font-family: monospace;
  font-size: 12px;
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
  background-color: var(--agnostic-primary);
}
.secondary {
  background-color: var(--agnostic-secondary);
}
.grayextralight {
  background-color: var(--agnostic-gray-extra-light);
}
.graylight {
  background-color: var(--agnostic-gray-light);
}
.graymid {
  background-color: var(--agnostic-gray-mid);
}
.graymiddark {
  background-color: var(--agnostic-gray-mid-dark);
}
.graydark {
  background-color: var(--agnostic-gray-dark);
}
.dark {
  background-color: var(--agnostic-dark);
}
.light {
  background-color: var(--agnostic-light);
}

.component {
  composes: component from "./partials.module.css";
  margin-top: 80px;
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