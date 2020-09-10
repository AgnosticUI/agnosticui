<template>
  <div id="app">
    <div class="layout">
      <AppHeader />
      <main>
        <SystemCards />
        <InputCards />
        <LayoutCards />
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
        <section class="component">
          <h1 id="typography">Typography</h1>
          <h3>Typography and scale are the foundations your designs are built on.</h3>
        </section>
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
                This can help us to achieve theming!
              </p>
              <p>
                For example, let's say we have set up default gutters to be 16 pixels, but you'd like it
                to be 24 pixels. With CSS custom properties, this might be achieved with something like:
                <pre class="inline-code">var(--override, var(--default));</pre>
                The value provided in <i>--override</i> will be used if it exists, otherwise, it will
                fallback to <i>--default</i>.
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
        <section class="component">
          <h1 id="grid">Grid</h1>
          <h3>Our flexbox-based grid is based on a 12-unit system. Each column unit counts for 1/12 
            of the whole (3 units is a fourth, 4 units a third, 6 units a half, etc.)</h3>
        </section>
      </main>
      <AppFooter />
    </div>
  </div>
</template>

<script>
import SystemCards from "./views/SystemCards.vue";
import InputCards from "./views/InputCards.vue";
import LayoutCards from "./views/LayoutCards.vue";
import AppFooter from "./views/AppFooter.vue";
import AppHeader from "./views/AppHeader.vue";

export default {
  name: "App",
  components: {
    InputCards,
    LayoutCards,
    SystemCards,
    AppHeader,
    AppFooter,
  },
  mounted: function () {
    this.$nextTick(function () {
      const copyLink = ev => {
        ev.preventDefault();
        const btn = ev.currentTarget;
        const href = btn.getAttribute('data-href');
        const originalText = btn.textContent;
        if (href) {
          navigator.clipboard.writeText(href).then(() => {
            // Show copied feedback until they mouse out
            btn.textContent = '✓ Copied'
            btn.classList.add("confirming");
            btn.addEventListener('mouseleave', () => {
              btn.classList.remove("confirming");
              btn.textContent = originalText;
            });
          }, () => {
            console.log('clipboard write failed...');
          });
        }
      }

      // Code that will run only after the
      // entire view has been rendered
      if (navigator.clipboard) {
        const headers = document.querySelectorAll(".component h1");
        headers.forEach(header => {
          const fullHref = window.location.origin + window.location.pathname + "#" + header.id;
          const btnBlank = document.createElement('button');
          btnBlank.className = 'copy-link';
          btnBlank.textContent = 'Copy link';
          btnBlank.setAttribute('data-href', fullHref)
          header.parentNode.insertBefore(btnBlank , header.nextSibling);
          btnBlank.addEventListener('click', copyLink);
        });
      }
    })
  }
};
</script>

<style>
.layout {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

main {
  width: var(--app-width-initial);
  margin: 0 auto;
}

main {
  margin: 0 auto;
  flex: 1 1 auto;
}
.example {
  margin-bottom: 50vh;
}
.hotips {
  display: flex;
}
.tip-content {
  display: inline-block;
  width: 69%;
  padding: 24px 16px 24px 48px;
}
.tip-content p {
  display: inline-block;
}
.hotips > .tip {
  width: 29%;
  margin: 0;
  padding: 24px;
  background-color: rgba(217, 216, 217, 0.1);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-height: 192px;
}
pre.inline-code {
  margin: 0;
  padding: 0;
  display: inline-block;
  font-size: 18px;
}
.component {
  position: relative;
}
.component > h1 {
  margin-top: 96px;
}

.copy-link {
  position: absolute;
  top: 36px;
  left: -96px;
  background: transparent;
  border: none;
  outline: none;
  font-size: 18px;
  cursor: pointer;
  opacity: 0;
  padding-right:300px;
  color: var(--gray);
}

.copy-link:hover {
  opacity: 1;
}
.copy-link.confirming {
  color: var(--mint-green)
}
</style>
