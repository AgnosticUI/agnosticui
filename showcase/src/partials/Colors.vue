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
        <p>AgnosticUI creates a minimal set of color tokens which you're encouraged to customize and extend.</p>
        <div class="swatches">Swatches will go here :)</div>
      </div>
    </div>
    <pre v-highlightjs><code class="css">
/**
* You can override these by simply defining them in your top-level stylesheet.
* Under the hood, when AgnosticUI applies one of these it does something like:
* margin-left: var(--agnostic-primary, var(--agnostic-default-primary));
* where the --agnostic-default-primary is the fallback if you haven't supplied
* --agnostic-primary.
*/
:root {
--agnostic-primary: #1087db;
--agnostic-secondary: #ff4351;
--agnostic-gray-extra-light: #f8f8f8;
--agnostic-gray-light: #e9e9e9;
--agnostic-gray-mid: #d8d8d8;
--agnostic-gray-mid-dark: #cccccc;
--agnostic-gray-dark: #aaaaaa;
--agnostic-black: #333333;
/* More TBD */
}
    </code></pre>
  </section>
</template>
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