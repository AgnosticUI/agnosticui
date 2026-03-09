<script setup>
import DefaultTheme from "vitepress/theme";
import { useData } from "vitepress";
import { defineAsyncComponent, ref, watch, onMounted } from "vue";

// Lazy, client-only: agnosticui-core uses HTMLElement which doesn't exist in SSR
const PlaybookFab = defineAsyncComponent(() => import("./components/PlaybookFab.vue"));

const { isDark } = useData();
const isClient = ref(false);

// Add the data-theme attribute on the server for initial render
onMounted(() => {
  isClient.value = true;

  document.documentElement.setAttribute(
    "data-theme",
    isDark.value ? "dark" : "light"
  );

  // Restore ag-skin class across all pages
  try {
    const skin = localStorage.getItem('ag-skin');
    if (skin) {
      const html = document.documentElement;
      html.className = html.className.replace(/\bag-skin-[\w-]+\b/g, '').trim();
      html.classList.add(`ag-skin-${skin}`);
    }
    // Restore custom CSS vars pasted by the user in the Playground
    const customCss = localStorage.getItem('ag-custom-css');
    if (customCss) {
      let tag = document.getElementById('ag-custom-theme');
      if (!tag) {
        tag = document.createElement('style');
        tag.id = 'ag-custom-theme';
        document.head.appendChild(tag);
      }
      tag.textContent = customCss;
    }
  } catch {}
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
  <PlaybookFab v-if="isClient" />
</template>
