<script setup>
import DefaultTheme from "vitepress/theme";
import { useData } from "vitepress";
import { watch, onMounted } from "vue";

const { isDark } = useData();

// Add the data-theme attribute on the server for initial render
onMounted(() => {
  document.documentElement.setAttribute(
    "data-theme",
    isDark.value ? "dark" : "light"
  );
});

// Watch for changes and update the attribute
watch(
  isDark,
  (newValue) => {
    document.documentElement.setAttribute(
      "data-theme",
      newValue ? "dark" : "light"
    );
  },
  { immediate: true }
);
</script>

<template>
  <DefaultTheme.Layout />
</template>
