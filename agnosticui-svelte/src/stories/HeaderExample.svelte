<script>
  import Header from "./Header.svelte";
  import HeaderNav from "./HeaderNav.svelte";
</script>

<Header isSticky={true}>
  <div slot="logoleft">logo left</div>
  <HeaderNav>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
    </ul>
  </HeaderNav>
  <div slot="logoright">logo right</div>
</Header>
