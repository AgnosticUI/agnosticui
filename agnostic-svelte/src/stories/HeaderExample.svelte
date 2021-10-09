<script>
  import Header from "./Header.svelte";
  import HeaderNav from "./HeaderNav.svelte";
  import HeaderNavItem from "./HeaderNavItem.svelte";
</script>

<style>
  :root {
    --agnostic-header-mobile-height: 175px;
  }
</style>

<Header isSticky="{true}">
  <div slot="logoleft">logo left</div>
  <HeaderNav css="nav-overrides">
    <HeaderNavItem><a href="#home">Home</a></HeaderNavItem>
    <HeaderNavItem><a href="#products">Products</a></HeaderNavItem>
    <HeaderNavItem><a href="#services">Services</a></HeaderNavItem>
    <HeaderNavItem><a href="#about">About</a></HeaderNavItem>
  </HeaderNav>
  <div slot="logoright">logo right</div>
</Header>
