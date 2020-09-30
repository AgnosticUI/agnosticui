<template>
  <div id="app">
    <div :class="$style.layout">
      <AppHeader />
      <main>
        <HeroSVG />
        <h2 :class="$style.heroTitle">
          Build it <a href="#theming">your way</a>.
        </h2>
        <h4 :class="$style.heroMessage">
          AgnosticUI provides a set of UI components coded in clean semantic
          HTML and CSS. Themeable via CSS properties, the React, Vue, and Svelte
          implementations all use the exact same synchronized CSS. Yes, we
          literally copy styles from the CSS package to the framework
          implementations.
        </h4>
        <div :class="$style.btnGroup">
          <ButtonGroup ariaLabel="Theming examples group">
            <Button mode="primary" isRaised>Default</Button>
            <Button mode="primary" isBordered
              >Click to theme via CSS custom props</Button
            >
          </ButtonGroup>
        </div>
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
import "agnosticui-css/flexboxgrid-grid.css";
import "agnosticui-css/flexboxgrid-row.css";
import "agnosticui-css/flexboxgrid-col.css";
import Button from "agnosticui/Button.vue";
import ButtonGroup from "agnosticui/ButtonGroup.vue";
import HeroSVG from "./assets/agnosticui-illo.svg";
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
    Button,
    ButtonGroup,
    HeroSVG,
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

.btnGroup,
.heroMessage,
.heroTitle {
  position: absolute;
  left: initial;
  width: 68vw;
}

.heroTitle {
  top: 280px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: none;
  white-space: nowrap;
  font-size: 28px;
}
.heroMessage {
  top: 350px;
  width: 60vw;
  font-size: 14px;
}
.btnGroup {
  display: none;
  /* So we mask between the bordered button and the illustration */
  background: white;
  width: initial;
}

@media only screen and (min-width: 576px) {
  .btnGroup,
  .heroMessage,
  .heroTitle {
    left: 8vw;
  }
  .heroMessage {
    font-size: 18px;
  }
}

@media only screen and (min-width: 992px) {
  .heroTitle {
    top: 150px;
    font-size: 44px;
  }
  .heroMessage {
    top: 250px;
    font-size: 21px;
  }
  .btnGroup {
    display: block;
    top: 450px;
  }
}

@media only screen and (min-width: 1200px) {
  .heroMessage,
  .heroTitle {
    width: 40vw;
  }

  .heroTitle {
    font-size: 64px;
  }
}

@media only screen and (min-width: 1600px) {
  .btnGroup,
  .heroMessage,
  .heroTitle {
    position: absolute;
    left: 15vw;
    width: 30vw;
  }

  .heroTitle {
    top: 200px;
  }
  .heroMessage {
    top: 300px;
  }
  .btnGroup {
    top: 520px;
  }
}
@media only screen and (min-width: 1900px) {
  .btnGroup {
    top: 480px;
  }
}
</style>
