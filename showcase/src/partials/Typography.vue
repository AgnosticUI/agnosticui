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
  margin-top: 16px;
}
.li {
  list-style-type: circle;
  margin-left: 40px;
}
.tip {
  composes: tip from "./partials.module.css";
}
.customize {
  margin-top: 56px;
  margin-bottom: 8;
}
</style>
