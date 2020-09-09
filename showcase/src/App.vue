<template>
  <div id="app">
    <div class="layout">
      <AppHeader />
      <main>
        <SystemCards />
        <InputCards />
        <LayoutCards />
        <section class="example">
          <h2 id="color">Colors</h2>
          <pre v-highlightjs><code class="javascript">
            let str = 'Hello, World!';
            console.log(str);
          </code></pre>
        </section>
        <section class="example">
          <h2 id="typography">Typography</h2>
          <pre v-highlightjs><code class="javascript">
            let str = 'Hello, World!';
            console.log(str);
          </code></pre>
        </section>
        <section class="example">
          <h2 id="spacing">Spacing</h2>
          <pre v-highlightjs><code class="javascript">
            let str = 'Hello, World!';
            console.log(str);
          </code></pre>
        </section>
        <section class="example">
          <h2 id="grid">Grid</h2>
          <pre v-highlightjs><code class="javascript">
            let str = 'Hello, World!';
            console.log(str);
          </code></pre>
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
</style>
