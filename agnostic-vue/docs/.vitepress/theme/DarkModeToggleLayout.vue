<script setup lang="ts">
import DefaultTheme from "vitepress/theme";
import { h, compile, onMounted } from "vue";
const { Layout } = DefaultTheme;

const STORAGE_KEY = "ag-color-scheme";

export type ColorSchemes = "dark" | "light";

// First checks localStorage then system preferences
const getColorScheme = () => {
  if (localStorage.getItem(STORAGE_KEY)) {
    return localStorage.getItem(STORAGE_KEY);
  } else {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
};

const setStoredColorScheme = (colorScheme: ColorSchemes) => {
  localStorage.setItem(STORAGE_KEY, colorScheme);
};

const setTheme = (colorScheme: ColorSchemes) => {
  document.firstElementChild.setAttribute("color-scheme", colorScheme);
};

// Sets the theme as early as possible to avoid a flash of incorrect theme
setTheme(getColorScheme());

onMounted(() => {
  // set on mounted too (screen readers)
  setTheme(getColorScheme());

  requestAnimationFrame(() => {
    // Defaults to dark mode (toggle to light icon)
    let initial = "🔆";
    if (
      document.firstElementChild.hasAttribute("color-scheme") &&
      document.firstElementChild.getAttribute("color-scheme") === "light"
    ) {
      // We're in light mode so show toggle to dark icon
      initial = "🌙";
    }
    // Creates a toggle button for the header and then clones for use on mobile sidebar
    const toggle = document.createElement("button");
    toggle.classList.add("item", "toggle");
    toggle.textContent = initial;
    const mobileToggle = toggle.cloneNode(true);

    const toggleHandler = (ev) => {
      // Get the current color mode then toggle it and update the store
      const currentMode =
        document.firstElementChild.getAttribute("color-scheme");

      const toggledColorScheme = currentMode === "dark" ? "light" : "dark";

      // Set toggled content and set html color-scheme attribute and update local storate
      // Note we need to keep the two toggles in sync (one is in header other is mobile sidebar)
      toggle.textContent = toggledColorScheme === "dark" ? "🔆" : "🌙";
      mobileToggle.textContent = toggledColorScheme === "dark" ? "🔆" : "🌙";
      setTheme(toggledColorScheme);
      setStoredColorScheme(toggledColorScheme);
    };
    // cloneNode(true) doesn't copy over the event handlers so we have to attach here
    [toggle, mobileToggle].forEach((el) =>
      el.addEventListener("click", toggleHandler)
    );

    // Get the Vitepress navigation links and inject the toggle button
    let navBars = document.getElementsByClassName("nav-links");
    if (navBars) {
      // First navbar will be the one in header
      let headerNavBar = navBars[0];
      if (headerNavBar) {
        headerNavBar.insertAdjacentElement("beforeend", toggle);
      }

      // Second navbar will be the one in sidebar only used on mobile
      let sidebarMobileNavBar = navBars[1];
      if (sidebarMobileNavBar) {
        sidebarMobileNavBar.insertAdjacentElement("beforeend", mobileToggle);
      }
    }
  });
});
</script>

<template>
  <Layout> </Layout>
</template>
<style global>
.toggle {
  filter: grayscale(40%);
  background: transparent;
  border-width: 0;
  border-color: transparent;
  margin-inline-start: var(--fluid-12);
  margin-inline-end: var(--fluid-20);
  padding-inline-start: var(--fluid-12);
  padding-inline-end: var(--fluid-12);
  padding-block-start: var(--fluid-2);
  padding-block-end: var(--fluid-2);
}
</style>
