<template>
  <div id="app">
    <div :class="$style.layout">
      <AppHeader />
      <main>
        <HeroSVG />
        <div :class="$style.heroMessagingWrap">
          <h1 :class="$style.heroTitle">
            Build it <a href="#theming">your way</a>.
          </h1>
          <p :class="$style.heroMessage">
            AgnosticUI is a small set of component primitives coded in semantic
            HTML &amp; CSS. Themeable via CSS properties, the React, Vue, and
            Svelte implementations all use the same synchronized CSS—we
            literally copy the same CSS files to each implementation. Use
            AgnosticUI as a launching point when you're ready to kick-start your
            next design system.
          </p>
          <div :class="$style.btnGroup">
            <ButtonGroup ariaLabel="Theming examples group">
              <Button mode="primary" isRaised>Default</Button>
              <Button mode="primary" isBordered
                >Click to theme via CSS custom props</Button
              >
            </ButtonGroup>
          </div>
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
        <Inputs />
      </main>
      <BackToTop v-bind:show="this.showBackToTop" />
      <AppFooter />
    </div>
  </div>
</template>

<script>
// Global AgnosticUI CSS custom properties
import "agnosticui-css/css-dist/common.min.css";
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
import Inputs from "./partials/Inputs.vue";
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
    Inputs,
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

/* .btnGroup,
.heroMessage,
*/
.heroTitle {
  display: none;
}

.heroMessagingWrap {
  position: absolute;
  left: initial;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  top: 264px;
  width: 68vw;
}

/*
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
  background: white;
  width: initial;
}
*/

@media only screen and (min-width: 576px) {
  /* .btnGroup,
  .heroMessage,
  .heroTitle {
    left: 8vw;
  } */
  .heroMessage {
    font-size: 18px;
  }
  .heroMessagingWrap {
    left: 8vw;
  }
}

@media only screen and (min-width: 992px) {
  .heroMessagingWrap {
    left: 15vw;
    top: 160px;
    width: 45vw;
  }
  .heroTitle {
    display: block;
    /* top: 150px; */
    font-size: 44px;
  }
  .heroMessage {
    /* top: 250px; */
    font-size: 21px;
  }
  /* .btnGroup {
    display: block;
    top: 550px;
  } */
}

@media only screen and (min-width: 1200px) {
  /* .heroMessage,
  .heroTitle {
    width: 40vw;
  } */

  .heroTitle {
    font-size: 64px;
  }
}

@media only screen and (min-width: 1600px) {
  /* .btnGroup,
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
    top: 620px;
  } */
}
@media only screen and (min-width: 1900px) {
  /* .btnGroup {
    top: 550px;
  } */
}
</style>
