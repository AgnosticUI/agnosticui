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

const onClick = (ev: Event) => {
  console.log("onClick called...");
};

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
    // const toggle = `<button class="item toggle" onclick="document.firstElementChild.setAttribute('color-scheme', 'dark'); this.innerHTML= document.firstElementChild.getAttribute('color-scheme') === 'dark' ? '🔆' : '🌙';"> ${initial} </button>`;
    // const toggle = `<button class="item toggle" onclick="${onClick}">${initial}</button>`;
    const toggle = document.createElement("button");
    toggle.addEventListener("click", function onClick(ev) {
      console.log("click called...");
      // Get the current color mode then toggle it and update the store
      const currentMode =
        document.firstElementChild.getAttribute("color-scheme");

      const toggledColorScheme = currentMode === "dark" ? "light" : "dark";

      // Set the toggled content and set html color-scheme attribute and update local storate
      this.textContent = toggledColorScheme === "dark" ? "🔆" : "🌙";
      setTheme(toggledColorScheme);
      setStoredColorScheme(toggledColorScheme);
    });
    toggle.classList.add("item", "toggle");
    toggle.textContent = initial;

    // Get the Vitepress navigation links and inject the toggle button
    let navBars = document.getElementsByClassName("nav-links");
    console.log("in here...");
    if (navBars) {
      let navBar = navBars[0];
      if (navBar) {
        navBar.insertAdjacentElement("beforeend", toggle);
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
