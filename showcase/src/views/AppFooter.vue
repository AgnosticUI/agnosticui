<template>
  <footer>
    <div class="wrap">
      <span class="copyright">All content &copy; 2020 Rob Levin</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter.vue",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer {
  display: flex;
  flex: 0 0 48px;
}
footer > .wrap {
  width: var(--app-width-initial);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.copyright {
  font-size: 14px;
  color: var(--gray-dark);
}
</style>
