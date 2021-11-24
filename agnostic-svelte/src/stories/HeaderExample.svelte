<script>
  import Header from "./Header.svelte";
  import HeaderNav from "./HeaderNav.svelte";
  import HeaderNavItem from "./HeaderNavItem.svelte";
</script>

<style>
  :root {
    --agnostic-header-mobile-height: 175px;
    --agnostic-header-color: var(--agnostic-primary);
  }
</style>

<Header>
  <div slot="logoleft"><a href="https://www.w3.org/">w3</a></div>
  <HeaderNav css="nav-overrides">
    <HeaderNavItem><a href="https://web.dev/">web.dev</a></HeaderNavItem>
    <HeaderNavItem>
      <a href="https://css-tricks.com/">CSS-Tricks</a>
    </HeaderNavItem>
    <HeaderNavItem>
      <a href="https://developer.mozilla.org/en-US/">MDN</a>
    </HeaderNavItem>
    <HeaderNavItem>
      <a href="https://www.freecodecamp.org/">freeCodeCamp</a>
    </HeaderNavItem>
  </HeaderNav>
  <div slot="logoright">
    <a href="https://www.w3.org/TR/wai-aria-practices-1.1/">wai-aria</a>
  </div>
</Header>

<Header isHeaderContentStart="{true}">
  <div slot="logoleft"><a href="https://www.w3.org/">w3</a></div>
  <HeaderNav css="mis16 flex-fill">
    <HeaderNavItem><a href="https://web.dev/">web.dev</a></HeaderNavItem>
    <HeaderNavItem>
      <a href="https://css-tricks.com/">CSS-Tricks</a>
    </HeaderNavItem>
    <HeaderNavItem>
      <a href="https://developer.mozilla.org/en-US/">MDN</a>
    </HeaderNavItem>
    <HeaderNavItem>
      <a href="https://www.freecodecamp.org/">freeCodeCamp</a>
    </HeaderNavItem>
  </HeaderNav>
  <div slot="logoright">
    <a href="https://www.w3.org/TR/wai-aria-practices-1.1/">wai-aria</a>
  </div>
</Header>

<Header isHeaderContentEnd="{true}">
  <a class="flex-fill" href="https://web.dev/">web.dev</a>
  <HeaderNav css="mie16">
    <HeaderNavItem><a href="https://web.dev/">web.dev</a></HeaderNavItem>
    <HeaderNavItem>
      <a href="https://css-tricks.com/">CSS-Tricks</a>
    </HeaderNavItem>
    <HeaderNavItem>
      <a href="https://developer.mozilla.org/en-US/">MDN</a>
    </HeaderNavItem>
    <HeaderNavItem>
      <a href="https://www.freecodecamp.org/">freeCodeCamp</a>
    </HeaderNavItem>
  </HeaderNav>
  <div slot="logoright">
    <a href="https://www.w3.org/TR/wai-aria-practices-1.1/">wai-aria</a>
  </div>
</Header>
