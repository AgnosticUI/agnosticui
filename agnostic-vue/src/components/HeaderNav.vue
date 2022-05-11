
<template>
  <nav :class="[css ? css : '']">
    <ul :class="classes">
      <slot />
    </ul>
  </nav>
</template>
<script setup lang="ts">
import { computed, useCssModule } from "vue";
export interface HeaderNavProps {
  css?: string;
}
const styles = useCssModule();

const props = withDefaults(defineProps<HeaderNavProps>(), {
  css: "",
});

const classes = computed(() => ({
  [styles["header-nav"]]: true,
  [`${props.css}`]: !!props.css,
}));
</script>
<style module>
/* Goes on the <ul> */
.header-nav {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (min-width: 960px) {
  .header-nav {
    flex-direction: row;
  }
}

</style>
