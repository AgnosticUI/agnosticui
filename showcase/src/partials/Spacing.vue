
<template>
  <section class="component">
    <h1 id="spacing">Spacing</h1>
    <h3>AgnosticUI uses an <a href="https://www.designsystems.com/space-grids-and-layouts/" >8pt system</a> for spacing via custom properties.</h3>
    <div class="hotips">
      <p class="tip">
        <span>Why do we use CSS custom properties you ask?</span>
      </p>
      <div class="tip-content">
        <p>
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties">CSS custom properties</a>
          are an underutilized tool for web designers and developers alike. They allow us to define and use 
          &ldquo;variables&rdquo; that can be shared across our app. But, even more powerfully, they
          provide a built-in fallback system which allows us to replace default values with our own.
          This makes theming easy!
        </p>
        <p>
          For example, say we default gutters set to be 16 pixels, but want them to
          be 24 pixels. This might be achieved with:
          <pre class="inline-code">var(--override, var(--default));</pre>
          The value provided in the <i>--override</i> variable will be used
          if defined or it will fallback to <i>--default</i>.
        </p>
        <p>AgnosticUI uses an slighly modifed <a href="https://www.designsystems.com/space-grids-and-layouts/" >8pt spacing system</a>
        as defined below:
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