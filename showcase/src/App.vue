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
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 85%;
  /* margin-inline-start: 24px;
  margin-inline-end: 24px; */
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
  max-width: 800px;
  align-self: self-start;
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


@media only screen and (min-width: 1500px) {
  .main {
    max-width: 864px;
    align-self: self-start;
    margin-left: 15%;
  }

  .heroMessagingWrap {
    margin-block-start: 6rem;
  }
  
  .heroImage {
    display: block;
  }

  .heroTitle {
    display: block;
    font-size: 2.75rem;
  }
}

/*
.main {
  margin-block-start: var(--fluid-32);
}

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
*/
</style>
