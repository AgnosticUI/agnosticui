<template>
  <div>
    <h4 class="types">Inputs</h4>
    <div class="cards">
      <Card css="card-override" v-bind:isStacked="true">
        <header class="cardheader">
          <h6>Textarea</h6>
        </header>
        <a href="#" class="cardbody">
          <svg
            width="88"
            height="72"
            viewBox="0 0 88 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.5" y="0.5" width="87" height="71" rx="2.5" stroke="#D8D8D8" />
            <line x1="83.3536" y1="60.3536" x2="76.3536" y2="67.3536" stroke="#D8D8D8" />
          </svg>
        </a>
      </Card>
      <Card css="card-override" v-bind:isStacked="true">
        <header class="cardheader">
          <h6>Button</h6>
        </header>
        <a href="#" class="cardbody">
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
        <header class="cardheader">
          <h6>Progress</h6>
        </header>
        <a href="#" class="cardbody">
          <svg
            width="88"
            height="10"
            viewBox="0 0 88 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.5" y="0.5" width="87" height="9" rx="4.5" stroke="#D8D8D8" />
            <path
              d="M0 5C0 2.23858 2.23858 0 5 0H34.4667V10H5C2.23858 10 0 7.76142 0 5Z"
              fill="#D8D8D8"
            />
          </svg>
        </a>
      </Card>
      <Card css="card-override" v-bind:isStacked="true">
        <header class="cardheader">
          <h6>Select</h6>
        </header>
        <a href="#" class="cardbody">
          <svg
            width="88"
            height="32"
            viewBox="0 0 88 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M75 21L70.6699 13.5L79.3301 13.5L75 21Z" fill="#C4C4C4" />
            <rect x="0.5" y="0.5" width="87" height="31" rx="2.5" stroke="#D8D8D8" />
          </svg>
        </a>
      </Card>
    </div>

    <div class="cards">
      <Card css="card-override" v-bind:isStacked="true">
        <header class="cardheader">
          <h6>Checkbox</h6>
        </header>
        <a href="#" class="cardbody">
          <svg
            width="92"
            height="54"
            viewBox="0 0 92 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="28.5" y="22.5" width="63" height="9" stroke="#D8D8D8" />
            <rect x="28.5" y="0.5" width="63" height="9" stroke="#D8D8D8" />
            <rect x="28.5" y="44.5" width="63" height="9" stroke="#D8D8D8" />
            <rect y="22" width="10" height="10" fill="#D8D8D8" />
            <rect x="0.5" y="0.5" width="9" height="9" stroke="#D8D8D8" />
            <rect x="0.5" y="44.5" width="9" height="9" stroke="#D8D8D8" />
          </svg>
        </a>
      </Card>
      <Card css="card-override" v-bind:isStacked="true">
        <header class="cardheader">
          <h6>Input</h6>
        </header>
        <a href="#" class="cardbody">
          <svg
            width="88"
            height="32"
            viewBox="0 0 88 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.5" y="0.5" width="87" height="31" rx="2.5" stroke="#D8D8D8" />
          </svg>
        </a>
      </Card>
      <Card css="card-override" v-bind:isStacked="true">
        <header class="cardheader">
          <h6>Radio</h6>
        </header>
        <a href="#" class="cardbody">
          <svg
            width="90"
            height="54"
            viewBox="0 0 90 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="26.5" y="0.5" width="63" height="9" stroke="#D8D8D8" />
            <rect x="26.5" y="22.5" width="63" height="9" stroke="#D8D8D8" />
            <rect x="26.5" y="44.5" width="63" height="9" stroke="#D8D8D8" />
            <circle cx="5" cy="5" r="4.5" stroke="#D8D8D8" />
            <circle cx="5" cy="27" r="5" fill="#CCCCCC" />
            <circle cx="5" cy="49" r="4.5" stroke="#D8D8D8" />
          </svg>
        </a>
      </Card>
      <Card css="card-override" v-bind:isStacked="true">
        <header class="cardheader">
          <h6>Button Select</h6>
        </header>
        <a href="#" class="cardbody">
          <svg
            width="104"
            height="20"
            viewBox="0 0 104 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M36 0H68V20H36V0Z" fill="#D8D8D8" />
            <path d="M0 0H32V20H0V0Z" fill="#CCCCCC" />
            <path d="M72 0H104V20H72V0Z" fill="#D8D8D8" />
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

<style>
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

.types {
  margin-bottom: 24px;
  margin-top: 80px;
}

.cardbody,
.cardheader {
  width: 100%;
}
.cardheader {
  background-color: var(--gray-light-warm);
  border: 1px solid var(--gray-mid);
  padding: 8px 0;
  text-align: center;
}
.cardheader > h6 {
  text-transform: uppercase;
}
.cardbody {
  background-color: white;
  min-height: 157px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
