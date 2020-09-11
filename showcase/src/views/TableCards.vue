<template>
  <div>
    <h4 id="tables" :class="$style.types">Tables</h4>
    <div :class="$style.cards">
      <Card css="card-override" v-bind:isStacked="true">
        <header :class="$style.cardheader">
          <h6>Table TBD</h6>
        </header>
        <a href="#table" :class="$style.cardbody">
          <svg
            width="88"
            height="32"
            viewBox="0 0 88 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="88" height="32" rx="3" fill="#D8D8D8" />
          </svg>
        </a>
      </Card>
      <Card css="card-override" v-bind:isStacked="true">
        <header :class="$style.cardheader">
          <h6>Sorting tbd</h6>
        </header>
        <a href="#sorting" :class="$style.cardbody">
          <svg
            width="88"
            height="32"
            viewBox="0 0 88 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="88" height="32" rx="3" fill="#D8D8D8" />
          </svg>
        </a>
      </Card>
      <Card css="card-override" v-bind:isStacked="true">
        <header :class="$style.cardheader">
          <h6>Filters tbd</h6>
        </header>
        <a href="#filters" :class="$style.cardbody">
          <svg
            width="88"
            height="32"
            viewBox="0 0 88 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="88" height="32" rx="3" fill="#D8D8D8" />
          </svg>
        </a>
      </Card>
      <Card css="card-override" v-bind:isStacked="true">
        <header :class="$style.cardheader">
          <h6>Pagination TBD</h6>
        </header>
        <a href="#pagination" :class="$style.cardbody">
          <svg
            width="88"
            height="32"
            viewBox="0 0 88 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="88" height="32" rx="3" fill="#D8D8D8" />
          </svg>
        </a>
      </Card>
    </div>
  </div>
</template>

<script>
import Card from "agnosticui/Card.vue";

export default {
  name: "InputCards",
  components: {
    Card,
  },
};
</script>

<style module>
.types {
  composes: types from "./views.module.css";
}
.cards {
  composes: cards from "./views.module.css";
}
.cardheader {
  composes: cardheader from "./views.module.css";
}
.cardbody {
  composes: cardbody from "./views.module.css";
}
</style>