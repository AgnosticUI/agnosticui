<template>
  <div id="app">
    <AppHeader />
    <HeroSVG :class="$style.heroImage" />
    <div :class="$style.layout">
      <main :class="$style.main">
        <div :class="$style.heroMessagingWrap">
          <h1 :class="$style.heroTitle">One stylesheet…<a href="#theming">all the frameworks</a>.</h1>
          <p :class="$style.heroMessage">
            AgnosticUI already supports: <a
              href="https://reactjs.org/"
              target="_blank"
            >React</a>, <a
              href="https://vuejs.org/"
              target="_blank"
            >Vue.js</a>,
            <a
              href="https://angular.io/"
              target="_blank"
            >Angular</a>, and <a
              href="https://svelte.dev/"
              target="_blank"
            >Svelte</a>.
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/Web_Components"
              target="_blank"
            >Web Components</a>,
            <a
              href="https://reactnative.dev/"
              target="_blank"
            >React Native</a>, and more are on the way. <a href="http://vanilla-js.com/">Vanilla JavaScript</a> <span class="quoted">just works</span>—go figure!
          </p>
          <Frameworks />
          <Button
            mode="primary"
            size="large"
            isBlock
          >Get Started</Button>
        </div>
        <div :class="$style.responsiveSpacer"></div>
      </main>
      <BackToTop v-bind:show="this.showBackToTop" />
      <AppFooter />
    </div>
  </div>
</template>

<script>
// Global AgnosticUI CSS custom properties
import 'agnostic-css/build/css-dist/common.min.css'
import HeroSVG from './assets/agnosticui-illo.svg'
import BackToTop from './components/BackToTop.vue'
import Frameworks from './partials/Frameworks'
import AppFooter from './views/AppFooter.vue'
import AppHeader from './views/AppHeader.vue'
import Button from 'agnosticui/Button.vue'

export default {
  name: 'App',
  components: {
    Button,
    Frameworks,
    HeroSVG,
    BackToTop,
    AppHeader,
    AppFooter
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
  /* min-height: calc(100vh - 60px); */
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
  /* Subtracts header and footer heights */
  min-height: calc(100vh - 95px);
}

.heroMessagingWrap {
  margin-block-start: var(--fluid-16);
}

.heroMessage {
  margin-block-end: var(--fluid-24);
}

.heroTitle {
  font-size: 1rem;
}

@media only screen and (min-width: 380px) {
  .heroTitle {
    font-size: 1.25rem;
  }
}
@media only screen and (min-width: 450px) {
  .heroTitle {
    font-size: 1.5rem;
  }
}

@media only screen and (min-width: 576px) {
  .heroTitle {
    font-size: 1.875rem;
  }
  .heroMessagingWrap {
    margin-block-start: var(--fluid-24);
  }
}

@media only screen and (min-width: 960px) {
  .heroMessagingWrap {
    margin-block-start: var(--fluid-36);
  }
}
@media only screen and (min-width: 1100px) {
  .heroImage {
    display: block;
  }

  .heroTitle {
    font-size: 2.25rem;
  }

  .heroMessagingWrap {
    max-width: 52vw;
    margin-block-start: var(--fluid-64);
  }
}

@media only screen and (min-width: 1200px) {
  .main {
    max-width: 864px;
    margin-left: 2%;
  }

  .heroMessagingWrap {
    margin-block-start: 6rem;
  }

  .heroTitle {
    font-size: 2.25rem;
  }
}
</style>
