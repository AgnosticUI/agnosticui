<template>
  <div class="theme-explorer">
    <div class="controls">
      <h3>Theme Controls</h3>
      <div class="theme-buttons">
        <VueButton
          shape="rounded"
          :bordered="true"
          variant="monochrome"
          size="sm"
          @click="setTheme('forest')"
        >Forest Theme</VueButton>
        <VueButton
          shape="rounded"
          :bordered="true"
          variant="monochrome"
          size="sm"
          @click="setTheme('ocean')"
        >Ocean Theme</VueButton>
        <VueButton
          shape="rounded"
          :bordered="true"
          variant="monochrome"
          size="sm"
          @click="resetTheme"
        >Default</VueButton>
      </div>
      <VueButton
        shape="rounded"
        :bordered="true"
        variant="monochrome"
        size="sm"
        @click="copyCss"
      >Copy Modified CSS</VueButton>
    </div>

    <div class="token-grid">
      <div
        v-for="(tokens, category) in tokensByCategory"
        :key="category"
        class="token-category"
      >
        <h4>{{ category }}</h4>
        <div class="token-items">
          <div
            v-for="token in tokens"
            :key="token.name"
            class="token-item mbe4"
          >
            <div
              class="token-name"
              :title="token.name"
            >{{ token.name }}</div>
            <div class="token-value">
              <div
                v-if="isColor(token.name)"
                class="flex items-center"
              >
                <input
                  type="color"
                  v-model="token.value"
                  @input="updateCss"
                />
                <VueIcon
                  class="color-pencil"
                  :size="14"
                  :no-fill="true"
                >
                  <Pencil />
                </VueIcon>
              </div>
              <input
                v-else
                type="text"
                v-model="token.value"
                @input="updateCss"
                class="text-input"
              />
            </div>
            <div class="token-preview">
              <div
                v-if="isColor(token.name)"
                class="color-swatch"
                :style="{ backgroundColor: token.value }"
              ></div>
              <div
                v-else-if="category === 'Radii'"
                class="radius-preview"
                :style="{ borderRadius: token.value }"
              ></div>
              <div
                v-else-if="category === 'Spacing'"
                class="spacing-preview"
                :style="{ width: token.value, height: token.value }"
              ></div>
              <div
                v-else-if="category === 'Shadows'"
                class="shadow-preview"
                :style="{ boxShadow: token.value }"
              ></div>
              <div
                v-else-if="category === 'Borders'"
                class="border-preview"
                :style="{ borderWidth: token.value, borderStyle: 'solid', borderColor: 'var(--ag-border)' }"
              ></div>
              <div
                v-else
                class="no-preview"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="example-ui">
      <h3>Live Example</h3>
      <div class="pricing-table">
        <VueCard
          :shadow="true"
          rounded="md"
        >
          <h4>Basic</h4>
          <div class="price">$10<span>/mo</span></div>
          <ul>
            <li>10GB Storage</li>
            <li>1 User</li>
            <li>24/7 Support</li>
          </ul>
          <VueButton
            variant="primary"
            :bordered="true"
            shape="rounded"
          >Choose Plan</VueButton>
        </VueCard>
        <VueCard
          :shadow="true"
          rounded="md"
          class="featured"
        >
          <h4>Pro</h4>
          <div class="price">$25<span>/mo</span></div>
          <ul>
            <li>50GB Storage</li>
            <li>5 Users</li>
            <li>24/7 Support</li>
          </ul>
          <VueButton
            variant="secondary"
            :bordered="true"
            shape="rounded"
          >Choose Plan</VueButton>
        </VueCard>
        <VueCard
          :shadow="true"
          rounded="md"
        >
          <h4>Enterprise</h4>
          <div class="price">$50<span>/mo</span></div>
          <ul>
            <li>100GB Storage</li>
            <li>Unlimited Users</li>
            <li>24/7 Support</li>
          </ul>
          <VueButton
            variant="primary"
            :bordered="true"
            shape="rounded"
          >Choose Plan</VueButton>
        </VueCard>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { VueCard } from "agnosticui-core/card/vue";
import VueButton from "agnosticui-core/button/vue";
import { VueIcon } from "agnosticui-core/icon/vue";
import { Pencil } from "lucide-vue-next";

const originalTokens = ref({});
const tokensByCategory = ref({});

const agTokensCss = [
  ":where(html) {",
  "  --ag-drawer-width: 25rem;",
  "  --ag-sheet-height: 25vh;",
  "  --ag-space-0: 0;",
  "  --ag-space-1: 0.25rem;",
  "  --ag-space-2: 0.5rem;",
  "  --ag-space-3: 0.75rem;",
  "  --ag-space-4: 1rem;",
  "  --ag-space-5: 1.25rem;",
  "  --ag-space-6: 1.5rem;",
  "  --ag-space-7: 1.75rem;",
  "  --ag-space-8: 2rem;",
  "  --ag-space-9: 2.25rem;",
  "  --ag-space-10: 2.5rem;",
  "  --ag-space-12: 3rem;",
  "  --ag-space-14: 3.5rem;",
  "  --ag-font-size-xs: 0.75rem;",
  "  --ag-font-size-sm: 0.875rem;",
  "  --ag-font-size-base: 1rem;",
  "  --ag-font-size-md: 1.125rem;",
  "  --ag-font-size-lg: 1.25rem;",
  "  --ag-font-size-xl: 1.5rem;",
  "  --ag-font-size-2x: 2rem;",
  "  --ag-font-size-3x: 2.25rem;",
  "  --ag-font-size-4x: 2.5rem;",
  "  --ag-font-size-5x: 3rem;",
  "  --ag-line-height-sm: 1.25rem;",
  "  --ag-line-height-base: 1.5rem;",
  "  --ag-line-height-lg: 1.75rem;",
  "  --ag-radius-none: 0;",
  "  --ag-radius-sm: 0.25rem;",
  "  --ag-radius-md: 0.375rem;",
  "  --ag-radius-lg: 1rem;",
  "  --ag-radius-full: 9999px;",
  "  --ag-motion-fast: 100ms;",
  "  --ag-motion-medium-fast: 150ms;",
  "  --ag-motion-medium: 225ms;",
  "  --ag-motion-medium-slow: 325ms;",
  "  --ag-motion-slow: 480ms;",
  "  --ag-fx-duration-xs: 100ms;",
  "  --ag-fx-duration-sm: 150ms;",
  "  --ag-fx-duration-md: 225ms;",
  "  --ag-fx-duration-lg: 325ms;",
  "  --ag-fx-duration-xl: 480ms;",
  "  --ag-fx-ease-ease: ease;",
  "  --ag-fx-ease-ease-in: ease-in;",
  "  --ag-fx-ease-ease-out: ease-out;",
  "  --ag-fx-ease-ease-in-out: ease-in-out;",
  "  --ag-fx-ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);",
  "  --ag-fx-ease-spring-sm: cubic-bezier(0.5, 1.5, 0.5, 1);",
  "  --ag-fx-ease-spring-md: cubic-bezier(0.5, 1.8, 0.5, 1);",
  "  --ag-fx-ease-spring-lg: cubic-bezier(0.5, 2.5, 0.5, 1);",
  "  --ag-focus-width: 2px;",
  "  --ag-focus-offset: 2px;",
  "  --ag-shadow-none: none;",
  "  --ag-shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);",
  "  --ag-shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);",
  "  --ag-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);",
  "  --ag-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);",
  "  --ag-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);",
  "  --ag-shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);",
  "  --ag-z-index-dropdown: 100;",
  "  --ag-z-index-modal: 1000;",
  "  --ag-z-index-toast: 1100;",
  "  --ag-z-index-sticky: 900;",
  "  --ag-border-width-1: 1px;",
  "  --ag-border-width-2: 2px;",
  "  --ag-border-width-3: 3px;",
  "  --ag-black: #1f2328;",
  "  --ag-white: #ffffff;",
  "  --ag-neutral-50: #f9fafb;",
  "  --ag-neutral-100: #f3f4f6;",
  "  --ag-neutral-200: #e5e7eb;",
  "  --ag-neutral-300: #d1d5db;",
  "  --ag-neutral-400: #9ca3af;",
  "  --ag-neutral-500: #6b7280;",
  "  --ag-neutral-600: #4b5563;",
  "  --ag-neutral-700: #2e3745;",
  "  --ag-neutral-800: #202736;",
  "  --ag-neutral-900: #111827;",
  "  --ag-blue-50: #ddf4ff;",
  "  --ag-blue-100: #b6e3ff;",
  "  --ag-blue-200: #80ccff;",
  "  --ag-blue-300: #54aeff;",
  "  --ag-blue-400: #218bff;",
  "  --ag-blue-500: #0969da;",
  "  --ag-blue-600: #0550ae;",
  "  --ag-blue-700: #033d8b;",
  "  --ag-blue-800: #0a3069;",
  "  --ag-blue-900: #002155;",
  "  --ag-green-50: #dafbe1;",
  "  --ag-green-100: #aceebb;",
  "  --ag-green-200: #6fdd8b;",
  "  --ag-green-300: #4ac26b;",
  "  --ag-green-400: #2da44e;",
  "  --ag-green-500: #238636;",
  "  --ag-green-600: #116329;",
  "  --ag-green-700: #044f1e;",
  "  --ag-green-800: #003d16;",
  "  --ag-green-900: #002d11;",
  "  --ag-yellow-50: #fff8c5;",
  "  --ag-yellow-100: #fae17d;",
  "  --ag-yellow-200: #eac54f;",
  "  --ag-yellow-300: #d4a72c;",
  "  --ag-yellow-400: #bf8700;",
  "  --ag-yellow-500: #9a6700;",
  "  --ag-yellow-600: #7d4e00;",
  "  --ag-yellow-700: #633c01;",
  "  --ag-yellow-800: #4d2d00;",
  "  --ag-yellow-900: #3b2300;",
  "  --ag-red-50: #ffebe9;",
  "  --ag-red-100: #ffcecb;",
  "  --ag-red-200: #ffaba8;",
  "  --ag-red-300: #ff8182;",
  "  --ag-red-400: #fa4549;",
  "  --ag-red-500: #cf222e;",
  "  --ag-red-600: #a40e26;",
  "  --ag-red-700: #82071e;",
  "  --ag-red-800: #660018;",
  "  --ag-red-900: #4c0014;",
  "  --ag-purple-50: #fbefff;",
  "  --ag-purple-100: #ecd8ff;",
  "  --ag-purple-200: #d8b9ff;",
  "  --ag-purple-300: #c297ff;",
  "  --ag-purple-400: #a475f9;",
  "  --ag-purple-500: #8250df;",
  "  --ag-purple-600: #6639ba;",
  "  --ag-purple-700: #512a97;",
  "  --ag-purple-800: #3e1f79;",
  "  --ag-purple-900: #2e1461;",
  "  --ag-coral-50: #fff0eb;",
  "  --ag-coral-100: #ffd6cc;",
  "  --ag-coral-200: #ffb4a1;",
  "  --ag-coral-300: #fd8c73;",
  "  --ag-coral-400: #ec6547;",
  "  --ag-coral-500: #c4432b;",
  "  --ag-coral-600: #9e2f1c;",
  "  --ag-coral-700: #801f0f;",
  "  --ag-coral-800: #691105;",
  "  --ag-coral-900: #510901;",
  "  --ag-text-primary: #111827;",
  "  --ag-text-secondary: #4b5563;",
  "  --ag-text-muted: #4b5563;",
  "  --ag-text-primary-muted: #2e3745;",
  "  --ag-text-primary-inverted: #ffffff;",
  "  --ag-background-primary: #ffffff;",
  "  --ag-background-primary-inverted: #1f2328;",
  "  --ag-background-secondary: #f3f4f6;",
  "  --ag-background-secondary-inverted: #111827;",
  "  --ag-background-tertiary: #e5e7eb;",
  "  --ag-background-disabled: #f3f4f6;",
  "  --ag-primary-background: #ddf4ff;",
  "  --ag-primary-text: #0550ae;",
  "  --ag-success-background: #dafbe1;",
  "  --ag-success-text: #116329;",
  "  --ag-info-background: #f3f4f6;",
  "  --ag-info-text: #4b5563;",
  "  --ag-warning-background: #fff8c5;",
  "  --ag-warning-text: #7d4e00;",
  "  --ag-danger-background: #ffebe9;",
  "  --ag-danger-text: #a40e26;",
  "  --ag-border: #e5e7eb;",
  "  --ag-border-subtle: #d1d5db;",
  "  --ag-primary: #0550ae;",
  "  --ag-primary-rgb: 5, 80, 174;",
  "  --ag-primary-border: #d1d5db;",
  "  --ag-primary-dark: #0a3069;",
  "  --ag-secondary: #6b7280;",
  "  --ag-secondary-dark: #4b5563;",
  "  --ag-danger-rgb: 202, 29, 29;",
  "  --ag-danger: #CA1D1D;",
  "  --ag-danger-dark: #a40e26;",
  "  --ag-error-text: #a40e26;",
  "  --ag-warning-rgb: 212, 167, 44;",
  "  --ag-warning: #d4a72c;",
  "  --ag-warning-dark: #9a6700;",
  "  --ag-success: #238636;",
  "  --ag-success-rgb: 26, 127, 55;",
  "  --ag-success-dark: #116329;",
  "  --ag-info: #4b5563;",
  "  --ag-info-dark: #2e3745;",
  "  --ag-focus: 37, 99, 235;",
  "  --ag-focus-dark: #218bff;",
  "  --ag-rating-filled: #bf8700;",
  "  --ag-rating-filled-primary: #0969da;",
  "  --ag-rating-filled-success: #238636;",
  "  --ag-rating-filled-warning: #9a6700;",
  "  --ag-rating-filled-danger: #cf222e;",
  "}",
  '[data-theme="dark"] {',
  "  --ag-black: #010409;",
  "  --ag-white: #ffffff;",
  "  --ag-neutral-50: #F0F6FC;",
  "  --ag-neutral-100: #D1D7E0;",
  "  --ag-neutral-200: #B7BDC8;",
  "  --ag-neutral-300: #9EA5AF;",
  "  --ag-neutral-400: #9198A1;",
  "  --ag-neutral-500: #656C76;",
  "  --ag-neutral-600: #3D444D;",
  "  --ag-neutral-700: #212730;",
  "  --ag-neutral-800: #171c24;",
  "  --ag-neutral-900: #0D1117;",
  "  --ag-blue-50: #cae8ff;",
  "  --ag-blue-100: #a5d6ff;",
  "  --ag-blue-200: #79c0ff;",
  "  --ag-blue-300: #58a6ff;",
  "  --ag-blue-400: #388bfd;",
  "  --ag-blue-500: #1f6feb;",
  "  --ag-blue-600: #1158c7;",
  "  --ag-blue-700: #0d419d;",
  "  --ag-blue-800: #0c2d6b;",
  "  --ag-blue-900: #051d4d;",
  "  --ag-green-50: #aff5b4;",
  "  --ag-green-100: #7ee787;",
  "  --ag-green-200: #56d364;",
  "  --ag-green-300: #3fb950;",
  "  --ag-green-400: #2EA043;",
  "  --ag-green-500: #238636;",
  "  --ag-green-600: #196c2e;",
  "  --ag-green-700: #0f5323;",
  "  --ag-green-800: #033a16;",
  "  --ag-green-900: #04260f;",
  "  --ag-yellow-50: #f8e3a1;",
  "  --ag-yellow-100: #f2cc60;",
  "  --ag-yellow-200: #e3b341;",
  "  --ag-yellow-300: #d29922;",
  "  --ag-yellow-400: #bb8009;",
  "  --ag-yellow-500: #9e6a03;",
  "  --ag-yellow-600: #845306;",
  "  --ag-yellow-700: #693e00;",
  "  --ag-yellow-800: #4b2900;",
  "  --ag-yellow-900: #341a00;",
  "  --ag-red-50: #ffdcd7;",
  "  --ag-red-100: #ffc1ba;",
  "  --ag-red-200: #ffa198;",
  "  --ag-red-300: #ff7b72;",
  "  --ag-red-400: #f85149;",
  "  --ag-red-500: #da3633;",
  "  --ag-red-600: #b62324;",
  "  --ag-red-700: #8e1519;",
  "  --ag-red-800: #67060c;",
  "  --ag-red-900: #490202;",
  "  --ag-purple-50: #eddeff;",
  "  --ag-purple-100: #e2c5ff;",
  "  --ag-purple-200: #d2a8ff;",
  "  --ag-purple-300: #BE8FFF;",
  "  --ag-purple-400: #AB7DF8;",
  "  --ag-purple-500: #8957e5;",
  "  --ag-purple-600: #6e40c9;",
  "  --ag-purple-700: #553098;",
  "  --ag-purple-800: #3c1e70;",
  "  --ag-purple-900: #271052;",
  "  --ag-coral-50: #ffddd2;",
  "  --ag-coral-100: #ffc2b2;",
  "  --ag-coral-200: #ffa28b;",
  "  --ag-coral-300: #f78166;",
  "  --ag-coral-400: #ea6045;",
  "  --ag-coral-500: #cf462d;",
  "  --ag-coral-600: #ac3220;",
  "  --ag-coral-700: #872012;",
  "  --ag-coral-800: #640d04;",
  "  --ag-coral-900: #460701;",
  "  --ag-text-primary: #F0F6FC;",
  "  --ag-text-secondary: #D1D7E0;",
  "  --ag-text-muted: #D1D7E0;",
  "  --ag-text-primary-muted: #D1D7E0;",
  "  --ag-text-primary-inverted: #010409;",
  "  --ag-background-primary: #010409;",
  "  --ag-background-primary-inverted: #ffffff;",
  "  --ag-background-secondary: #212730;",
  "  --ag-background-secondary-inverted: #D1D7E0;",
  "  --ag-background-tertiary: #3D444D;",
  "  --ag-background-disabled: #656C76;",
  "  --ag-primary-background: #051d4d;",
  "  --ag-primary-text: #a5d6ff;",
  "  --ag-success-background: #04260f;",
  "  --ag-success-text: #7ee787;",
  "  --ag-info-background: #171c24;",
  "  --ag-info-text: #D1D7E0;",
  "  --ag-warning-background: #341a00;",
  "  --ag-warning-text: #f2cc60;",
  "  --ag-danger-background: #490202;",
  "  --ag-danger-text: #ffc1ba;",
  "  --ag-border: #3D444D;",
  "  --ag-border-subtle: #656C76;",
  "  --ag-primary: #1158c7;",
  "  --ag-primary-rgb: 17, 88, 199;",
  "  --ag-primary-border: #1f6feb;",
  "  --ag-primary-dark: #0d419d;",
  "  --ag-secondary: #9198A1;",
  "  --ag-secondary-dark: #656C76;",
  "  --ag-danger: #DC2626;",
  "  --ag-danger-rgb: 220, 38, 38;",
  "  --ag-danger-dark: #f85149;",
  "  --ag-error-text: #ffa198;",
  "  --ag-warning-rgb: 212, 167, 44;",
  "  --ag-warning: #d29922;",
  "  --ag-warning-dark: #9e6a03;",
  "  --ag-success: #238636;",
  "  --ag-success-rgb: 26, 127, 55;",
  "  --ag-success-dark: #196c2e;",
  "  --ag-info: #9198A1;",
  "  --ag-info-dark: #656C76;",
  "  --ag-focus: 88, 166, 255;",
  "  --ag-focus-dark: #388bfd;",
  "  --ag-rating-filled: #d29922;",
  "  --ag-rating-filled-primary: #388bfd;",
  "  --ag-rating-filled-success: #3fb950;",
  "  --ag-rating-filled-warning: #d29922;",
  "  --ag-rating-filled-danger: #f85149;",
  "  --ag-rating-filled-secondary: #F0F6FC;",
  "}",
].join("\n");

const themes = {
  forest: {
    "--ag-primary": "#2b6b55",
    "--ag-secondary": "#63786d",
    "--ag-background-primary": "#f0f4f1",
    "--ag-background-secondary": "#e6ece8",
    "--ag-text-primary": "#1e382c",
    "--ag-border": "#d8e0da",
  },
  ocean: {
    "--ag-primary": "#3b82f6",
    "--ag-secondary": "#60a5fa",
    "--ag-background-primary": "#f0f9ff",
    "--ag-background-secondary": "#e0f2fe",
    "--ag-text-primary": "#0c4a6e",
    "--ag-border": "#bae6fd",
  },
  forestDark: {
    "--ag-primary": "#3fb950",
    "--ag-secondary": "#56d364",
    "--ag-background-primary": "#0D1117",
    "--ag-background-secondary": "#171c24",
    "--ag-text-primary": "#aff5b4",
    "--ag-border": "#3D444D",
  },
  oceanDark: {
    "--ag-primary": "#58a6ff",
    "--ag-secondary": "#79c0ff",
    "--ag-background-primary": "#0D1117",
    "--ag-background-secondary": "#171c24",
    "--ag-text-primary": "#cae8ff",
    "--ag-border": "#3D444D",
  },
};

function parseTokens(css) {
  const isDarkMode =
    document.documentElement.getAttribute("data-theme") === "dark";

  const tokensByCategory = {
    Colors: [],
    Spacing: [],
    Typography: [],
    Layout: [],
    Radii: [],
    Shadows: [],
    Borders: [],
    Transitions: [],
    Other: [],
  };

  const tokenData = {};

  const lines = css.split("\n");
  let currentBlock = "light";

  for (const line of lines) {
    const trimmedLine = line.trim();
    if (trimmedLine.includes('[data-theme="dark"]')) {
      currentBlock = "dark";
    } else if (trimmedLine.startsWith("--ag-")) {
      const [name, value] = trimmedLine.split(":", 2);
      if (name && value) {
        const tokenName = name.trim();
        const tokenValue = value.trim().replace(";", "");
        if (!tokenData[tokenName]) {
          tokenData[tokenName] = {};
        }
        if (currentBlock === "dark") {
          tokenData[tokenName].darkValue = tokenValue;
        } else {
          tokenData[tokenName].lightValue = tokenValue;
        }
      }
    }
  }

  const tokenMap = {};
  for (const tokenName in tokenData) {
    const data = tokenData[tokenName];
    const lightValue = data.lightValue;
    const darkValue = data.darkValue || lightValue;
    const currentValue = isDarkMode ? darkValue : lightValue;

    const token = {
      name: tokenName,
      value: currentValue,
      lightValue: lightValue,
      darkValue: darkValue,
    };
    tokenMap[tokenName] = currentValue;

    let category = "Other";
    if (
      tokenName.includes("rgb") ||
      tokenName.includes("focus") ||
      tokenName.includes("background") ||
      tokenName.includes("text") ||
      isColor(tokenName)
    ) {
      category = "Colors";
    } else if (tokenName.includes("space")) {
      category = "Spacing";
    } else if (
      tokenName.includes("font") ||
      tokenName.includes("line-height")
    ) {
      category = "Typography";
    } else if (
      tokenName.includes("drawer") ||
      tokenName.includes("sheet") ||
      tokenName.includes("z-index")
    ) {
      category = "Layout";
    } else if (tokenName.includes("radius")) {
      category = "Radii";
    } else if (tokenName.includes("shadow")) {
      category = "Shadows";
    } else if (tokenName.includes("border")) {
      category = "Borders";
    } else if (tokenName.includes("motion") || tokenName.includes("fx")) {
      category = "Transitions";
    }
    tokensByCategory[category].push(token);
  }

  originalTokens.value = tokenMap;
  return tokensByCategory;
}

function isColor(name) {
  return (
    name.includes("color") ||
    name.includes("primary") ||
    name.includes("secondary") ||
    name.includes("success") ||
    name.includes("warning") ||
    name.includes("danger") ||
    name.includes("info") ||
    name.includes("neutral") ||
    [
      "blue",
      "green",
      "yellow",
      "red",
      "purple",
      "coral",
      "black",
      "white",
    ].some((c) => name.includes(c))
  );
}

function updateCss() {
  const isDarkMode =
    document.documentElement.getAttribute("data-theme") === "dark";
  const lightLines = [":where(html) {"];
  const darkLines = ['[data-theme="dark"] {'];

  for (const category in tokensByCategory.value) {
    for (const token of tokensByCategory.value[category]) {
      // Update the correct value based on the current mode before generating the CSS
      if (isDarkMode) {
        token.darkValue = token.value;
      } else {
        token.lightValue = token.value;
      }
      lightLines.push(`  ${token.name}: ${token.lightValue};`);
      darkLines.push(`  ${token.name}: ${token.darkValue};`);
    }
  }
  lightLines.push("}");
  darkLines.push("}");
  const cssString = lightLines.join("\n") + "\n" + darkLines.join("\n");

  let styleTag = document.getElementById("dynamic-theme-styles");
  if (!styleTag) {
    styleTag = document.createElement("style");
    styleTag.id = "dynamic-theme-styles";
    document.head.appendChild(styleTag);
  }
  styleTag.innerHTML = cssString;
}

function copyCss() {
  const lightLines = [":where(html) {"];
  const darkLines = ['[data-theme="dark"] {'];
  let hasModified = false;

  for (const category in tokensByCategory.value) {
    for (const token of tokensByCategory.value[category]) {
      if (originalTokens.value[token.name] !== token.value) {
        hasModified = true;
      }
      lightLines.push(`  ${token.name}: ${token.lightValue};`);
      darkLines.push(`  ${token.name}: ${token.darkValue};`);
    }
  }
  lightLines.push("}");
  darkLines.push("}");

  if (hasModified) {
    const cssString =
      "/* Copy and paste into your own custom theme CSS file. */\n" +
      lightLines.join("\n") +
      "\n" +
      darkLines.join("\n");
    navigator.clipboard.writeText(cssString);
    alert("Modified CSS copied to clipboard!");
  } else {
    alert("No styles have been modified.");
  }
}

function setTheme(themeName) {
  const lightTheme = themes[themeName];
  const darkTheme = themes[themeName + "Dark"];

  for (const category in tokensByCategory.value) {
    for (const token of tokensByCategory.value[category]) {
      if (lightTheme[token.name]) {
        token.lightValue = lightTheme[token.name];
      }
      if (darkTheme[token.name]) {
        token.darkValue = darkTheme[token.name];
      }
      // Update the current value based on the mode
      const isDarkMode =
        document.documentElement.getAttribute("data-theme") === "dark";
      token.value = isDarkMode ? token.darkValue : token.lightValue;
    }
  }
  updateCss();
}

function resetTheme() {
  tokensByCategory.value = parseTokens(agTokensCss);
  updateCss();
}

onMounted(() => {
  tokensByCategory.value = parseTokens(agTokensCss);
  updateCss();

  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "data-theme"
      ) {
        const isDarkMode =
          document.documentElement.getAttribute("data-theme") === "dark";
        for (const category in tokensByCategory.value) {
          for (const token of tokensByCategory.value[category]) {
            token.value = isDarkMode ? token.darkValue : token.lightValue;
          }
        }
      }
    }
  });

  observer.observe(document.documentElement, { attributes: true });
});
</script>

<style scoped>
.theme-explorer {
  border: 1px solid var(--ag-border);
  border-radius: var(--ag-radius-lg);
  padding: var(--ag-space-4);
  background-color: var(--ag-background-secondary);
}

.controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--ag-space-4);
}

.controls h3 {
  color: var(--ag-text-primary);
}

.theme-buttons {
  display: flex;
  gap: var(--ag-space-2);
}

.token-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--ag-space-4);
}

.token-category h4 {
  margin-bottom: var(--ag-space-3);
  border-bottom: 1px solid var(--ag-border);
  padding-bottom: var(--ag-space-2);
  color: var(--ag-text-primary);
}

.token-items {
  display: grid;
  gap: var(--ag-space-2);
}

.token-item {
  display: grid;
  grid-template-columns: 2fr 1fr 50px;
  align-items: center;
  gap: var(--ag-space-2);
}

.token-name {
  font-family: monospace;
  font-size: var(--ag-font-size-sm);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--ag-text-primary);
}

.text-input {
  width: 100%;
  font-size: var(--ag-font-size-sm);
  border-bottom: 1px solid var(--ag-border-subtle);
  background-color: transparent;
  color: var(--ag-text-primary);
}

.token-preview {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.color-swatch {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid var(--ag-border);
}

.radius-preview {
  width: 24px;
  height: 24px;
  background-color: var(--ag-primary-background);
  border: 1px solid var(--ag-primary);
}

.spacing-preview {
  background-color: var(--ag-background-tertiary);
  border: 1px dashed var(--ag-border-subtle);
}

.shadow-preview {
  width: 24px;
  height: 24px;
  background-color: var(--ag-background-primary);
}

.border-preview {
  width: 24px;
  height: 24px;
}

.no-preview {
  width: 24px;
  height: 24px;
}

.example-ui {
  margin-top: var(--ag-space-8);
  padding-top: var(--ag-space-4);
  border-top: 1px solid var(--ag-border);
}

.example-ui h3 {
  color: var(--ag-text-primary);
}

.pricing-table {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--ag-space-4);
  margin-top: var(--ag-space-4);
  text-align: center;
}

.featured::part(ag-card-wrapper) {
  border-color: var(--ag-primary);
  transform: scale(1.05);
}

.price {
  font-size: var(--ag-font-size-3x);
  font-weight: bold;
  color: var(--ag-primary);
  margin: var(--ag-space-2) 0;
}

.price span {
  font-size: var(--ag-font-size-base);
  color: var(--ag-text-secondary);
}

.pricing-table ul {
  list-style: none;
  padding: 0;
  margin: var(--ag-space-4) 0;
}

.pricing-table li {
  margin-bottom: var(--ag-space-2);
  color: var(--ag-text-secondary);
}

.flex.items-center {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.color-pencil {
  color: var(--ag-text-secondary);
  cursor: help;
}
</style>
