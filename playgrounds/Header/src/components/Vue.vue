<template>
  <section class="mbe40">
    <div class="h4 mbe32 flex items-center">
      <img
        width="24"
        height="24"
        src="/assets/Vue-icon.svg"
        alt="Vue logo"
        class="mie12"
      />Vue 3 Header
    </div>
    <Header>
      <template v-slot:logoleft>
        <a href="https://web.dev/">web.dev</a>
      </template>
      <template v-slot:headernav>
        <HeaderNav>
          <HeaderNavItem>
            <a href="https://css-tricks.com/">CSS-Tricks</a>
          </HeaderNavItem>
          <HeaderNavItem>
            <a href="https://developer.mozilla.org/en-US/">MDN</a>
          </HeaderNavItem>
        </HeaderNav>
      </template>
      <template v-slot:logoright>
        <a href="https://www.freecodecamp.org/">freeCodeCamp</a>
      </template>
    </Header>
  </section>
</template>

<script setup>
// Components CSS
import "agnostic-vue/dist/index.css";
import { Header, HeaderNav, HeaderNavItem } from "agnostic-vue";
</script>
