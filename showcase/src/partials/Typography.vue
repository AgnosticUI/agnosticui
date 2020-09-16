<template>
  <section :class="$style.component">
    <h1 id="typography">Typography</h1>
    <h3>Typography and scale are the foundations your designs are built on.</h3>
    <div :class="$style.hotips">
      <p :class="$style.tip">
        <span class="quoted">Make it easy to read.</span>
        <a href="https://www.fastcompany.com/32656/web-sites-work" class="href">Roger Black</a>
      </p>
      <div :class="$style.tipcontent">
        Please consider heeding Black's 6 rules for web design:
        <ul :class="$style.ul">
          <li :class="$style.li">Bigger is better</li>
          <li :class="$style.li">Color your world — sparingly</li>
          <li :class="$style.li">Faster beats fancier</li>
          <li :class="$style.li">Content is king</li>
          <li :class="$style.li">Small bytes go down easier</li>
          <li :class="$style.li">If you don’t have something good to say, don’t say anything</li>
        </ul>
        <h5 :class="$style.customize">Customize &amp; Theme</h5>
        <p>
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties">CSS custom properties</a>
          are an underutilized tool for web designers and developers alike. They allow us to define and use 
          <span class="quoted">variables</span> that can be shared across our app. But, even more powerfully, they
          provide a built-in fallback system which allows us to replace default values with our own.
          This makes theming easy!
        </p>
        <p>
          For example, AgnosticUI uses a system font stack by default, but you
          may want to instead use your own. This can be achieved by simply defining
          the custom css property for font family. Under the hood, AgnosticUI will do:
          <pre class="inline-code">var(--agnosticui-font-family, var(--agnosticui-default-font-family));</pre>
          Essentially, the left variable will be used if defined, otherwise it will fallback to
          default one. All override variables in AgnosticUI are defined using this same naming
          convention where the override variable is the same with the <i>--default</i> removed.
        </p>
      </div>
    </div>
    <pre v-highlightjs><code class="css">
/**
 * These are only meant to be minimal point of departure to work from. You're encouraged
 * to customize your font stack and sizes to whatever suits you.
 */
:root {
  --agnosticui-default-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Open Sans", "Ubuntu", "Fira Sans", Helvetica, "Droid Sans", "Helvetica Neue", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  --agnosticui-default-h1: 64px;
  --agnosticui-default-h2: 48px;
  --agnosticui-default-h3: 36px;
  --agnosticui-default-h4: 24px;
  --agnosticui-default-h5: 18px;
  --agnosticui-default-h6: 14px;
  --agnosticui-default-body: 16px;
  --agnosticui-default-font-weight-bold: 600;
  --agnosticui-default-font-weight-light: 300;
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
