<template>
  <div>
    <h4 id="layoutsandnavigation" :class="$style.types">Layout &amp; Navigation</h4>
    <div :class="$style.cards">
      <Card css="card-override" v-bind:isStacked="true">
        <header :class="$style.cardheader">
          <h6>Tabs</h6>
        </header>
        <a href="#color" :class="$style.cardbody">
          <svg
            width="88"
            height="80"
            viewBox="0 0 88 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.5" y="0.5" width="87" height="79" rx="2.5" stroke="#D8D8D8" />
            <path
              d="M0.5 3C0.5 1.61929 1.61929 0.5 3 0.5H29.5V15.5H0.5V3Z"
              fill="#CCCCCC"
              stroke="#D8D8D8"
            />
            <path d="M29.5 1C29.5 0.723858 29.7239 0.5 30 0.5H58.5V15.5H29.5V1Z" stroke="#D8D8D8" />
            <path d="M58.5 0.5H85C86.3807 0.5 87.5 1.61929 87.5 3V15.5H58.5V0.5Z" stroke="#D8D8D8" />
          </svg>
        </a>
      </Card>
      <Card css="card-override" v-bind:isStacked="true">
        <header :class="$style.cardheader">
          <h6>Card</h6>
        </header>
        <a href="#color" :class="$style.cardbody">
          <svg
            width="88"
            height="80"
            viewBox="0 0 88 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.5" y="0.5" width="87" height="79" rx="2.5" stroke="#D8D8D8" />
            <path
              d="M0.5 3C0.5 1.61929 1.61929 0.5 3 0.5H85C86.3807 0.5 87.5 1.61929 87.5 3V15.5H0.5V3Z"
              stroke="#D8D8D8"
            />
            <line x1="16" y1="39.5" x2="72" y2="39.5" stroke="#D8D8D8" />
            <line x1="16" y1="51.5" x2="72" y2="51.5" stroke="#D8D8D8" />
          </svg>
        </a>
      </Card>
      <Card css="card-override" v-bind:isStacked="true">
        <header :class="$style.cardheader">
          <h6>Header</h6>
        </header>
        <a href="#color" :class="$style.cardbody">
          <svg
            width="88"
            height="80"
            viewBox="0 0 88 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.5" y="0.5" width="87" height="79" rx="2.5" stroke="#D8D8D8" />
            <path
              d="M0 3C0 1.34315 1.34315 0 3 0H85C86.6569 0 88 1.34315 88 3V16H0V3Z"
              fill="#D8D8D8"
            />
          </svg>
        </a>
      </Card>
      <Card css="card-override" v-bind:isStacked="true">
        <header :class="$style.cardheader">
          <h6>Stepper</h6>
        </header>
        <a href="#color" :class="$style.cardbody">
          <svg
            width="10"
            height="54"
            viewBox="0 0 10 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="5" cy="5" r="4.5" stroke="#D8D8D8" />
            <circle cx="5" cy="49" r="4.5" stroke="#D8D8D8" />
            <line x1="5" y1="9" x2="5" y2="44" stroke="#D8D8D8" stroke-width="2" />
            <circle cx="5" cy="27" r="4.5" fill="#D8D8D8" stroke="#CCCCCC" />
          </svg>
        </a>
      </Card>
    </div>
  </div>
</template>

<script>
import Card from "agnosticui/Card.vue";

export default {
  name: "LayoutCards",
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
</style>>
