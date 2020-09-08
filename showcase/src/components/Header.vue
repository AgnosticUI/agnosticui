<template>
  <header>
    <div class="wrap">
      <ul class="header-menu">
        <li>logo</li>
        <li>link 1</li>
        <li>link 2</li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  background-color: lightgoldenrodyellow;
  border: 1px solid red;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 0 0 64px;
}
header > .wrap {
  width: var(--app-width-initial);
  margin: 0 auto;
  outline: 1px solid hotpink;
}
.header-menu {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>
