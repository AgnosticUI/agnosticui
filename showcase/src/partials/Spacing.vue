
<template>
  <section :class="$style.component">
    <h1 id="spacing">Spacing</h1>
    <h3>Consistent spacing is key to visual harmony and balance. AgnosticUI's spacing is based off of an <a href="https://www.designsystems.com/space-grids-and-layouts/" >8pt system</a> which is conveniently
    relative to the base 16px (1rem) unit used on the web. Spacing is done via CSS custom property tokens.</h3>
    <div :class="$style.hotips">
      <p :class="$style.tip">
        <span class="quoted">Why do we use CSS custom properties you ask?</span>
      </p>
      <div :class="$style.tipcontent">
        <p>
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties">CSS custom properties</a>
          are an underutilized tool for web designers and developers alike. They allow us to define and use 
          &ldquo;variables&rdquo; that can be shared across our app. But, even more powerfully, they
          provide a built-in fallback system which allows us to replace default values with our own.
          This makes theming easy!
          <span class="quoted">this is hopefully smart quoted</span>
          <q>I could hand out cupcakes to keep them interested</q>
          <cite>Pearls Before Swine</cite>
        </p>
        <p>
          For example, say we default gutters set to be 16 pixels, but want them to
          be 24 pixels. This might be achieved with:
          <pre class="inline-code">var(--override, var(--default));</pre>
          The value provided in the <i>--override</i> variable will be used
          if defined or it will fallback to <i>--default</i>.
        </p>
      </div>
    </div>
    <pre v-highlightjs><code class="css">
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
</style>>