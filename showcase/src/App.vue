<template>
  <div id="app">
    <div :class="$style.layout">
      <AppHeader />
      <main :class="$style.main">
        <SystemCards />
        <InputCards />
        <LayoutCards />
        <TableCards />
        <Colors />
        <Typography />
        <Spacing />
        <Grid />
        <Buttons />
      </main>
      <BackToTop v-bind:show="this.showBackToTop" />
      <AppFooter />
    </div>
  </div>
</template>

<script>
// Global AgnosticUI CSS custom properties
import "agnosticui-css/colors.css";
import "agnosticui-css/typography.css";
import "agnosticui-css/spacing.css";
import "agnosticui-css/flexboxgrid-custom.css";
import BackToTop from "./components/BackToTop.vue";
import Colors from "./partials/Colors.vue";
import Spacing from "./partials/Spacing.vue";
import Grid from "./partials/Grid.vue";
import Buttons from "./partials/Buttons.vue";
import Typography from "./partials/Typography.vue";
import SystemCards from "./views/SystemCards.vue";
import InputCards from "./views/InputCards.vue";
import LayoutCards from "./views/LayoutCards.vue";
import TableCards from "./views/TableCards.vue";
import AppFooter from "./views/AppFooter.vue";
import AppHeader from "./views/AppHeader.vue";

export default {
  name: "App",
  components: {
    BackToTop,
    Colors,
    Spacing,
    Typography,
    Grid,
    Buttons,
    InputCards,
    LayoutCards,
    SystemCards,
    TableCards,
    AppHeader,
    AppFooter,
  },
  data: function () {
    return {
      showBackToTop: false,
    };
  },
  mounted: function () {
    const vm = this;
    // Show the Back to Top once we're 10% down the page
    const showPercentage = 10;
    window.addEventListener("scroll", () => {
      const scrollPos = window.scrollY;
      const winHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const perc = (100 * scrollPos) / (docHeight - winHeight);
      vm.showBackToTop = perc > showPercentage;
    });

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
