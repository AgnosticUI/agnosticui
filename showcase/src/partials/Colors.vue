<template>
  <section class="component">
    <h1 id="color">Colors</h1>
    <h3>The appropriate use of color can set the <a href="https://www.canva.com/learn/choose-right-colors-brand/" class="href">tone of your brand</a>
    while helping to guide users to <a href="https://blog.adobe.com/en/publish/2017/03/29/the-impact-of-color-on-conversion-rates.html#gs.f5rtr2" class="href">take action</a>.</h3>
    <div class="hotips">
      <p class="tip">
        <span>&ldquo;Colors express the main psychic functions of man.&rdquo; Carl Gustav Jung</span>
      </p>
      <div class="tip-content">
        <p>
          AgnosticUI creates a minimal set of color tokens which you're encouraged to customize and extend.
        </p>
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