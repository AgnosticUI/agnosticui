<template>
  <div id="app">
    <div :class="$style.layout">
      <AppHeader />
      <main :class="$style.main">
        <SystemCards />
        <InputCards />
        <LayoutCards />
        <Colors />
        <Typography />
        <Spacing />
        <Grid />
      </main>
      <AppFooter />
    </div>
  </div>
</template>

<script>
import Colors from "./partials/Colors.vue";
import Grid from "./partials/Grid.vue";
import Spacing from "./partials/Spacing.vue";
import Typography from "./partials/Typography.vue";
import SystemCards from "./views/SystemCards.vue";
import InputCards from "./views/InputCards.vue";
import LayoutCards from "./views/LayoutCards.vue";
import AppFooter from "./views/AppFooter.vue";
import AppHeader from "./views/AppHeader.vue";

export default {
  name: "App",
  components: {
    Colors,
    Grid,
    Spacing,
    Typography,
    InputCards,
    LayoutCards,
    SystemCards,
    AppHeader,
    AppFooter,
  },
  mounted: function () {
    this.$nextTick(function () {
      const copyLink = (ev) => {
        ev.preventDefault();
        const btn = ev.currentTarget;
        const href = btn.getAttribute("data-href");
        const originalText = btn.textContent;
        if (href) {
          navigator.clipboard.writeText(href).then(
            () => {
              // Show copied feedback until they mouse out
              btn.textContent = "✓ Copied";
              btn.classList.add("confirming");
              btn.addEventListener("mouseleave", () => {
                btn.classList.remove("confirming");
                btn.textContent = originalText;
              });
            },
            () => {
              console.log("clipboard write failed...");
            }
          );
        }
      };

      // Code that will run only after the
      // entire view has been rendered
      if (navigator.clipboard) {
        const headers = document.querySelectorAll(".component h1");
        headers.forEach((header) => {
          const fullHref =
            window.location.origin + window.location.pathname + "#" + header.id;
          const btnBlank = document.createElement("button");
          btnBlank.className = "copy-link";
          btnBlank.textContent = "Copy link";
          btnBlank.setAttribute("data-href", fullHref);
          header.parentNode.insertBefore(btnBlank, header.nextSibling);
          btnBlank.addEventListener("click", copyLink);
        });
      }
    });
  },
};
</script>

<style module>
.layout {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.main {
  width: var(--app-width-initial);
  margin: 0 auto;
  flex: 1 1 auto;
}
</style>
