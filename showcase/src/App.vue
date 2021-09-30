<template>
  <div id="app">
    <div :class="$style.layout">
      <AppHeader />
      <main :class="$style.main">
        <HeroSVG />
        <div :class="$style.heroMessagingWrap">
          <h1 :class="$style.heroTitle">Build it <a href="#theming">your way</a>.</h1>
          <p :class="$style.heroMessage">
            AgnosticUI is a set of component primitives coded in semantic HTML &amp; CSS then copied over into
            React, Vue, Angular, and Svelte implementations. AgnosticUI is fully themeable via CSS properties.
          </p>
          <Frameworks />
        </div>
        <div :class="$style.responsiveSpacer"></div>
      </main>
      <BackToTop v-bind:show="this.showBackToTop" />
      <!-- <AppFooter /> -->
    </div>
  </div>
</template>

<script>
// Global AgnosticUI CSS custom properties
import 'agnosticui-css/css-dist/common.min.css'
import HeroSVG from './assets/agnosticui-illo.svg'
import BackToTop from './components/BackToTop.vue'
import Frameworks from './partials/Frameworks'
// import AppFooter from './views/AppFooter.vue'
import AppHeader from './views/AppHeader.vue'

export default {
  name: 'App',
  components: {
    Frameworks,
    HeroSVG,
    BackToTop,
    AppHeader
    // AppFooter
  },
  data: function () {
    return {
      showBackToTop: false
    }
  }
}
</script>

<style module>
.layout {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  margin-inline-start: 24px;
  margin-inline-end: 24px;
}

.main {
  margin-block-start: var(--fluid-32);
}
/* Helps to clear the absolutely positioned hero verbiage */
.responsiveSpacer {
  margin-block-start: 250px;
}

.heroTitle {
  display: none;
}

.heroMessagingWrap {
  position: absolute;
  left: initial;
  top: 450px;
  width: 90%;
}
.heroMessage {
  margin-block-end: var(--fluid-32);
}

@media only screen and (min-width: 450px) {
  .responsiveSpacer {
    margin-block-start: 150px;
  }
  .heroMessagingWrap {
    top: 300px;
  }
}
@media only screen and (min-width: 576px) {
  .responsiveSpacer {
    margin-block-start: 0;
  }
  .heroMessage {
    font-size: 18px;
  }
  .heroMessagingWrap {
    left: 8vw;
  }
}

@media only screen and (min-width: 710px) {
  .heroMessagingWrap {
    width: 40vw;
  }
}

@media only screen and (min-width: 992px) {
  .layout {
    margin-inline-start: initial;
    margin-inline-end: initial;
  }

  .heroMessagingWrap {
    left: 15vw;
    top: 160px;
    width: 45vw;
  }
  .heroTitle {
    display: block;
    font-size: 44px;
  }
  .heroMessage {
    font-size: 21px;
  }
}

@media only screen and (min-width: 1200px) {
  .heroTitle {
    font-size: 64px;
  }
}

@media only screen and (min-width: 1500px) {
  .heroMessagingWrap {
    width: 36vw;
  }
}
</style>
