<script setup lang="ts">
import Header from "../../src/components/Header.vue";
import HeaderNav from "../../src/components/HeaderNav.vue";
import HeaderNavItem from "../../src/components/HeaderNavItem.vue";
</script>
<template>
  <h3 class="mbe12">Header defaults to space between</h3>
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
  <h3 class="mbe12">Header content justify left</h3>
  <p class="mbe16">Pass in <code>isHeaderContentStart</code> and apply a global CSS class with
    <code>flex-grow: 0</code> on mobile (so it will stack as column), and <code>flex-grow: 1</code>
    at a breakpoint of your choosing to push other content over. Inspect <code>.header-flex-fill</code>
    in devtools to see an example.
  </p>
  <Header isHeaderContentStart>
    <template v-slot:logoleft>
      <a href="https://web.dev/">web.dev</a>
    </template>
    <template v-slot:headernav>
      <HeaderNav css="header-flex-fill">
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
  <h3 class="mbe12">Header content justify right</h3>
  <p class="mbe16">Pass in <code>isHeaderContentEnd</code> and apply
    <code>flex-fill</code> to the <code>logoleft</code> content so grows (pushes content over).
  </p>
  <Header isHeaderContentEnd>
    <template v-slot:logoleft>
      <a
        class="flex-fill"
        href="https://web.dev/"
      >web.dev</a>
    </template>
    <template v-slot:headernav>
      <HeaderNav css="header-mbe16">
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

</template>
