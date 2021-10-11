<template>
  <div id="app">
    <AppHeader />
    <HeroSVG :class="$style.heroImage" />
    <div :class="$style.layout">
      <main :class="$style.main">
        <div :class="$style.heroMessagingWrap">
          <h1 :class="$style.heroTitle">Build it <a href="#theming">your way</a>.</h1>
          <p :class="$style.heroMessage">
            Component primitives first coded in semantic HTML &amp; CSS, then copied over to
            React, Vue, Angular, and Svelte implementations. CSS properties themable.
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
import 'agnostic-css/css-dist/common.min.css'
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
  min-height: calc(100vh - 60px);
  flex-direction: column;
  margin: 0 auto;
  max-width: 85%;
}

.heroImage {
  display: none;
  position: absolute;
  top: 3.75rem;
  left: 0;
  right: 0;
  bottom: 0;

  /* Otherwise our framework demo buttons will not work! */
  pointer-events: none;
  z-index: 0;
}

.main {
  z-index: 1;
}

.heroMessagingWrap {
  margin-block-start: 1rem;
}

.heroMessage {
  margin-block-end: var(--fluid-16);
}

.heroTitle {
  display: none;
}


@media only screen and (min-width: 576px) {

}

@media only screen and (min-width: 768px) {
  .heroTitle {
    display: block;
    font-size: 2rem;
  }
}

@media only screen and (min-width: 992px) {
  .heroImage {
    display: block;
  }
  .heroMessagingWrap {
    max-width: 50vw;
  }
}

@media only screen and (min-width: 1200px) {
  .main {
    max-width: 864px;
    margin-left: 5%;
  }

  .heroMessagingWrap {
    margin-block-start: 6rem;
  }

  .heroTitle {
    display: block;
    font-size: 2.75rem;
  }
}

</style>
