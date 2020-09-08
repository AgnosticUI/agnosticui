<template>
  <div id="app">
    <div class="layout">
      <Header />
      <main>
        <div class="cards">
          <Card css="card-override" v-bind:isStacked="true">
            <div class="card-content">
              <p>Some test content...</p>
            </div>
          </Card>
          <Card css="card-override" v-bind:isStacked="true">
            <div class="card-content">
              <p>Some test content...</p>
            </div>
          </Card>
          <Card css="card-override" v-bind:isStacked="true">
            <div class="card-content">
              <p>Some test content...</p>
            </div>
          </Card>
          <Card css="card-override" v-bind:isStacked="true">
            <div class="card-content">
              <p>Some test content...</p>
            </div>
          </Card>
        </div>
        <div class="cards">
          <Card css="card-override" v-bind:isStacked="true">
            <div class="card-content">
              <p>Some test content...</p>
            </div>
          </Card>
          <Card css="card-override" v-bind:isStacked="true">
            <div class="card-content">
              <p>Some test content...</p>
            </div>
          </Card>
          <Card css="card-override" v-bind:isStacked="true">
            <div class="card-content">
              <p>Some test content...</p>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import Card from "agnosticui/Card.vue";

export default {
  name: "App",
  components: {
    Card,
    Header,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.layout {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

/* footer {
  border: 1px solid red;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 0 0 48px;
}

footer > .wrap, */
main {
  width: var(--app-width-initial);
  margin: 0 auto;
  outline: 1px solid hotpink;
}

/* footer > .wrap {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
} */

main {
  margin: 0 auto;
  outline: 1px solid hotpink;
  flex: 1 1 auto;
  margin: 48px auto;
}

.card-content {
  padding: 24px;
}

.cards {
  display: flex;
  align-items: center;
  justify-items: center;
  flex-wrap: wrap;
}

.cards > div {
  flex: 1;
}

.cards > div:not(:last-child) {
  margin-right: 24px;
}
.cards > div {
  margin-bottom: 24px;
}
</style>
