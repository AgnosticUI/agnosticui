<template>
  <div id="app">
    <div class="layout">
      <AppHeader />
      <main>
        <InputCards />
        <LayoutCards />
      </main>
      <AppFooter />
    </div>
  </div>
</template>

<script>
import InputCards from "./views/InputCards.vue";
import LayoutCards from "./views/LayoutCards.vue";
import AppFooter from "./views/AppFooter.vue";
import AppHeader from "./views/AppHeader.vue";
export default {
  name: "App",
  components: {
    InputCards,
    LayoutCards,
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
</style>
