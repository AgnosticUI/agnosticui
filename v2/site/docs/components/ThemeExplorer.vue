<template>
  <div class="theme-explorer">
    <h3>Theme Controls</h3>

    <!-- Image-to-theme extraction drop zone -->
    <div
      class="image-drop-zone"
      :class="{ 'drag-over': isDragOver, 'has-image': extractedPalette.length > 0 }"
      @dragover.prevent="isDragOver = true"
      @dragleave="isDragOver = false"
      @drop.prevent="handleImageDrop"
      @click="extractedPalette.length === 0 && triggerFileInput()"
      role="button"
      tabindex="0"
      aria-label="Drop an image or click to upload for theme extraction"
      @keydown.enter="triggerFileInput"
      @keydown.space.prevent="triggerFileInput"
    >
      <input
        ref="fileInputRef"
        type="file"
        accept="image/png,image/jpeg,image/webp"
        class="sr-only"
        @change="handleImageSelect"
        tabindex="-1"
        aria-hidden="true"
      />
      <template v-if="extractedPalette.length === 0">
        <svg
          class="drop-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <circle cx="8.5" cy="8.5" r="1.5"/>
          <path d="M21 15l-5-5L5 21"/>
        </svg>
        <p class="drop-label">Drop an image to extract a theme palette</p>
        <p class="drop-hint">PNG · JPG · WebP — or click to browse</p>
      </template>
      <template v-else>
        <div class="palette-result" @click.stop>
          <div class="palette-swatches">
            <div
              v-for="color in extractedPalette"
              :key="color"
              class="palette-swatch-item"
              :style="{ backgroundColor: color }"
              :title="color"
            ></div>
          </div>
          <VueButton
            size="sm"
            variant="monochrome"
            :bordered="true"
            shape="rounded"
            @click.stop="clearExtraction"
          >Clear</VueButton>
        </div>
      </template>
    </div>

    <div class="controls">
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
          @click="setTheme('sunset')"
        >Sunset Theme</VueButton>
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
        v-show="tokens.length > 0"
        class="token-category"
        :class="{ 'token-category-wide': category === 'Easings' }"
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

      <div class="ratings-section">
        <h4>Rating Variants</h4>
        <div class="ratings-grid">
          <div class="rating-example">
            <span class="rating-label">Default</span>
            <VueRating :value="4" />
          </div>
          <div class="rating-example">
            <span class="rating-label">Primary</span>
            <VueRating variant="primary" :value="4" />
          </div>
          <div class="rating-example">
            <span class="rating-label">Success</span>
            <VueRating variant="success" :value="4" />
          </div>
          <div class="rating-example">
            <span class="rating-label">Warning</span>
            <VueRating variant="warning" :value="4" />
          </div>
          <div class="rating-example">
            <span class="rating-label">Danger</span>
            <VueRating variant="danger" :value="4" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { VueCard } from "agnosticui-core/card/vue";
import VueButton from "agnosticui-core/button/vue";
import { VueIcon } from "agnosticui-core/icon/vue";
import { VueRating } from "agnosticui-core/rating/vue";
import { Pencil } from "lucide-vue-next";

const originalTokens = ref({});
const tokensByCategory = ref({});

// Image extraction state
const isDragOver = ref(false);
const extractedPalette = ref([]);
const fileInputRef = ref(null);

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
    "--ag-primary-text": "#2b6b55",
    "--ag-primary-border": "#d8e0da",
    "--ag-primary-dark": "#1e382c",
    "--ag-secondary": "#63786d",
    "--ag-secondary-dark": "#4b5563",
    "--ag-background-primary": "#f0f4f1",
    "--ag-background-secondary": "#e6ece8",
    "--ag-text-primary": "#1e382c",
    "--ag-border": "#d8e0da",
  },
  sunset: {
    "--ag-primary": "#ea580c",
    "--ag-primary-text": "#ea580c",
    "--ag-primary-border": "#fed7aa",
    "--ag-primary-dark": "#9a3412",
    "--ag-secondary": "#f97316",
    "--ag-secondary-dark": "#c2410c",
    "--ag-background-primary": "#fff7ed",
    "--ag-background-secondary": "#ffedd5",
    "--ag-text-primary": "#7c2d12",
    "--ag-border": "#fed7aa",
  },
  forestDark: {
    "--ag-primary": "#3fb950",
    "--ag-primary-text": "#7ee787",
    "--ag-primary-border": "#238636",
    "--ag-primary-dark": "#0f5323",
    "--ag-secondary": "#56d364",
    "--ag-secondary-dark": "#238636",
    "--ag-background-primary": "#0D1117",
    "--ag-background-secondary": "#171c24",
    "--ag-text-primary": "#aff5b4",
    "--ag-border": "#3D444D",
  },
  sunsetDark: {
    "--ag-primary": "#fb923c",
    "--ag-primary-text": "#fdba74",
    "--ag-primary-border": "#ea580c",
    "--ag-primary-dark": "#c2410c",
    "--ag-secondary": "#fdba74",
    "--ag-secondary-dark": "#ea580c",
    "--ag-background-primary": "#0D1117",
    "--ag-background-secondary": "#171c24",
    "--ag-text-primary": "#fed7aa",
    "--ag-border": "#3D444D",
  },
};

// ─── Image drop zone handlers ────────────────────────────────────────────────

function triggerFileInput() {
  fileInputRef.value?.click();
}

function handleImageDrop(event) {
  isDragOver.value = false;
  const file = event.dataTransfer?.files?.[0];
  if (file && file.type.startsWith("image/")) {
    processImageFile(file);
  }
}

function handleImageSelect(event) {
  const file = event.target?.files?.[0];
  if (file) processImageFile(file);
}

function clearExtraction() {
  extractedPalette.value = [];
  if (fileInputRef.value) fileInputRef.value.value = "";
}

function processImageFile(file) {
  const img = new Image();
  const url = URL.createObjectURL(file);
  img.onload = () => {
    URL.revokeObjectURL(url);
    const palette = extractColors(img);
    extractedPalette.value = palette;
    const { light, dark } = mapPaletteToTokens(palette);
    applyExtractedTheme(light, dark);
  };
  img.src = url;
}

// ─── Canvas color extraction ──────────────────────────────────────────────────

function extractColors(img) {
  const MAX_DIM = 200;
  const canvas = document.createElement("canvas");
  const scale = Math.min(1, MAX_DIM / Math.max(img.width, img.height));
  canvas.width = Math.round(img.width * scale);
  canvas.height = Math.round(img.height * scale);
  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

  const buckets = {};
  for (let i = 0; i < data.length; i += 4) {
    if (data[i + 3] < 128) continue;
    const r = Math.round(data[i] / 24) * 24;
    const g = Math.round(data[i + 1] / 24) * 24;
    const b = Math.round(data[i + 2] / 24) * 24;
    const key = `${r},${g},${b}`;
    buckets[key] = (buckets[key] || 0) + 1;
  }

  const sorted = Object.entries(buckets)
    .sort((a, b) => b[1] - a[1])
    .map(([key]) => key.split(",").map(Number));

  const selected = [];
  for (const [r, g, b] of sorted) {
    if (selected.length >= 8) break;
    const tooClose = selected.some(([sr, sg, sb]) => {
      const dr = r - sr, dg = g - sg, db = b - sb;
      return Math.sqrt(dr * dr + dg * dg + db * db) < 50;
    });
    if (!tooClose) selected.push([r, g, b]);
  }

  return selected.map(([r, g, b]) => _rgbToHex(r, g, b));
}

// ─── Color math helpers ───────────────────────────────────────────────────────

function _rgbToHex(r, g, b) {
  return "#" + [r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("");
}

function _hexToRgb(hex) {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return m
    ? { r: parseInt(m[1], 16), g: parseInt(m[2], 16), b: parseInt(m[3], 16) }
    : { r: 0, g: 0, b: 0 };
}

function _rgbToHsl(r, g, b) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }
  return { h: h * 360, s, l };
}

function _hslToHex(h, s, l) {
  h /= 360;
  const hue2rgb = (p, q, t) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };
  let r, g, b;
  if (s === 0) {
    r = g = b = l;
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  return _rgbToHex(Math.round(r * 255), Math.round(g * 255), Math.round(b * 255));
}

function _getLuminance(hex) {
  const { r, g, b } = _hexToRgb(hex);
  const toLinear = (v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
}

function _getContrastRatio(hex1, hex2) {
  const l1 = _getLuminance(hex1), l2 = _getLuminance(hex2);
  const lighter = Math.max(l1, l2), darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

function _ensureContrast(color, against, minRatio, preferDarken = true) {
  let { h, s, l } = (() => { const { r, g, b } = _hexToRgb(color); return _rgbToHsl(r, g, b); })();
  for (let i = 0; i < 20; i++) {
    if (_getContrastRatio(_hslToHex(h, s, l), against) >= minRatio) break;
    l = preferDarken ? Math.max(0, l - 0.05) : Math.min(1, l + 0.05);
  }
  return _hslToHex(h, s, l);
}

function _darkenHex(hex, amount) {
  const { r, g, b } = _hexToRgb(hex);
  const { h, s, l } = _rgbToHsl(r, g, b);
  return _hslToHex(h, s, Math.max(0, l - amount));
}

function _lightenHex(hex, amount) {
  const { r, g, b } = _hexToRgb(hex);
  const { h, s, l } = _rgbToHsl(r, g, b);
  return _hslToHex(h, s, Math.min(1, l + amount));
}

function _vibrancyScore(hex) {
  const { r, g, b } = _hexToRgb(hex);
  const { s } = _rgbToHsl(r, g, b);
  const lum = _getLuminance(hex);
  return s * (1 - Math.abs(lum - 0.5) * 2);
}

// ─── Palette-to-token mapping ─────────────────────────────────────────────────

function mapPaletteToTokens(palette) {
  if (!palette.length) return { light: {}, dark: {} };

  const colors = palette.map((hex) => {
    const { r, g, b } = _hexToRgb(hex);
    const hsl = _rgbToHsl(r, g, b);
    return { hex, ...hsl, lum: _getLuminance(hex), vib: _vibrancyScore(hex) };
  });

  // ── Step 2: select semantic base colors by hue range ──
  const findByHueRange = (min, max, exclude = []) =>
    colors
      .filter((c) => {
        const inRange = min <= max ? c.h >= min && c.h <= max : c.h >= min || c.h <= max;
        // Require minimum saturation so near-neutrals (grays) don't match a hue range
        return inRange && !exclude.includes(c.hex) && c.s >= 0.15;
      })
      .sort((a, b) => b.vib - a.vib)[0];

  const vibrancySorted = [...colors].sort((a, b) => b.vib - a.vib);

  // Primary: highest vibrancy, luminance 0.15–0.70, ≥4.5:1 vs white
  let primaryColor = vibrancySorted.find((c) => c.lum >= 0.15 && c.lum <= 0.70) || vibrancySorted[0];
  let primaryHex = _ensureContrast(primaryColor.hex, "#ffffff", 4.5, true);
  const { r: pr, g: pg, b: pb } = _hexToRgb(primaryHex);
  const primaryHsl = _rgbToHsl(pr, pg, pb);
  const dominantHue = primaryHsl.h;

  // Secondary: different hue, Euclidean RGB distance > 60 from primary
  const primaryRgb = _hexToRgb(primaryHex);
  const secondaryColor = vibrancySorted.find((c) => {
    const { r, g, b } = _hexToRgb(c.hex);
    const dr = r - primaryRgb.r, dg = g - primaryRgb.g, db = b - primaryRgb.b;
    return c.hex !== primaryColor.hex && Math.sqrt(dr * dr + dg * dg + db * db) > 60;
  });
  let secondaryHex = secondaryColor
    ? _ensureContrast(secondaryColor.hex, "#ffffff", 3.0, true)
    : _hslToHex((dominantHue + 30) % 360, primaryHsl.s, primaryHsl.l);

  // Semantic base colors
  const successBase = findByHueRange(90, 150);
  const successHex = successBase?.hex ?? _hslToHex(120, 0.5, 0.35);
  const dangerBase = findByHueRange(0, 20) ?? findByHueRange(340, 360);
  const dangerHex = dangerBase?.hex ?? _hslToHex(0, 0.6, 0.40);
  const warningBase = findByHueRange(35, 65);
  const warningHex = warningBase?.hex ?? _hslToHex(45, 0.7, 0.45);
  const infoBase = findByHueRange(200, 240, [primaryHex]);
  const infoHex = infoBase
    ? infoBase.hex
    : (() => {
        const { r, g, b } = _hexToRgb(primaryHex);
        const pHsl = _rgbToHsl(r, g, b);
        return _hslToHex(210, Math.max(0, pHsl.s - 0.3), pHsl.l);
      })();

  // ── Step 3: light mode ──
  const neutrals = colors.filter((c) => c.s < 0.25).sort((a, b) => b.lum - a.lum);
  const bgPrimary = neutrals[0]?.hex ?? _hslToHex(dominantHue, 0.05, 0.98);
  const bgSecondary = neutrals[1]?.hex ?? _darkenHex(bgPrimary, 0.04);
  const bgTertiary = _darkenHex(bgSecondary, 0.03);

  const darkestColor = [...colors].sort((a, b) => a.lum - b.lum)[0];
  let textPrimary = _ensureContrast(darkestColor?.hex ?? "#111827", bgSecondary, 4.5, true);
  const { r: tpr, g: tpg, b: tpb } = _hexToRgb(textPrimary);
  const tpHsl = _rgbToHsl(tpr, tpg, tpb);
  let textSecondary = _ensureContrast(
    _hslToHex(tpHsl.h, tpHsl.s, Math.min(1, tpHsl.l + 0.15)),
    bgSecondary, 3.0, true
  );

  const bgSecLum = _getLuminance(bgSecondary);
  const tsLum = _getLuminance(textSecondary);
  const borderL = (bgSecLum + tsLum) / 2;
  const border = _hslToHex(dominantHue, 0.10, Math.max(0.1, Math.min(0.9, borderL)));
  const borderSubtle = _lightenHex(border, 0.05);

  const semanticLight = (baseHex) => {
    // Ensure base is dark enough to serve as a visible UI accent against the main background (3:1)
    const base = _ensureContrast(baseHex, bgPrimary, 3.0, true);
    const { r, g, b } = _hexToRgb(base);
    const { h } = _rgbToHsl(r, g, b);
    const dark = _darkenHex(base, 0.12);
    const background = _hslToHex(h, 0.20, 0.93);
    const text = _ensureContrast(_darkenHex(base, 0.10), background, 4.5, true);
    const fg = _getLuminance(base) < 0.5 ? "#ffffff" : "#111827";
    return { base, dark, background, text, fg };
  };

  const primaryDark = _darkenHex(primaryHex, 0.12);
  const primaryBackground = _hslToHex(dominantHue, 0.20, 0.93);
  const primaryText = _ensureContrast(_darkenHex(primaryHex, 0.10), primaryBackground, 4.5, true);
  const secondaryDark = _darkenHex(secondaryHex, 0.10);
  const sl = semanticLight;

  // ── Step 4: dark mode ──
  const darkNeutrals = colors
    .filter((c) => c.s < 0.25 && c.lum < 0.06) // strict: medium grays must not become dark-mode backgrounds
    .sort((a, b) => a.lum - b.lum);
  const darkBgPrimary = darkNeutrals[0]?.hex ?? _hslToHex(dominantHue, 0.10, 0.07);
  const darkBgSecondary = _lightenHex(darkBgPrimary, 0.05);
  const darkBgTertiary = _lightenHex(darkBgPrimary, 0.10);

  const lightestColor = [...colors].sort((a, b) => b.lum - a.lum)[0];
  let darkTextPrimary = _ensureContrast(lightestColor?.hex ?? "#F0F6FC", darkBgSecondary, 4.5, false);
  const { r: dtpr, g: dtpg, b: dtpb } = _hexToRgb(darkTextPrimary);
  const dtpHsl = _rgbToHsl(dtpr, dtpg, dtpb);
  let darkTextSecondary = _ensureContrast(
    _hslToHex(dtpHsl.h, dtpHsl.s, Math.max(0, dtpHsl.l - 0.10)),
    darkBgSecondary, 3.0, false
  );

  const darkBorder = _hslToHex(dominantHue, 0.12, 0.25);
  const darkBorderSubtle = _lightenHex(darkBorder, 0.08);

  let darkPrimary = primaryHex;
  if (_getLuminance(darkPrimary) < 0.25) darkPrimary = _lightenHex(darkPrimary, 0.20);
  darkPrimary = _ensureContrast(darkPrimary, "#ffffff", 4.5, false);
  const { r: dphr, g: dphg, b: dphb } = _hexToRgb(darkPrimary);
  const darkPrimaryHsl = _rgbToHsl(dphr, dphg, dphb);
  const darkPrimaryDark = _darkenHex(darkPrimary, 0.10);
  const darkPrimaryBg = _hslToHex(darkPrimaryHsl.h, 0.40, 0.12);
  const darkPrimaryText = _ensureContrast(_lightenHex(darkPrimary, 0.10), darkPrimaryBg, 4.5, false);

  let darkSecondary = _getLuminance(secondaryHex) < 0.25
    ? _lightenHex(secondaryHex, 0.20)
    : secondaryHex;
  const darkSecondaryDark = _darkenHex(darkSecondary, 0.10);

  const semanticDark = (lightBaseHex) => {
    const { r, g, b } = _hexToRgb(lightBaseHex);
    const { h } = _rgbToHsl(r, g, b);
    let base = _getLuminance(lightBaseHex) < 0.25
      ? _lightenHex(lightBaseHex, 0.20)
      : lightBaseHex;
    // Ensure base is visible as a UI accent against the dark background (3:1)
    base = _ensureContrast(base, darkBgPrimary, 3.0, false);
    const dark = _lightenHex(base, 0.10);
    const background = _hslToHex(h, 0.35, 0.10);
    const text = _ensureContrast(_lightenHex(base, 0.10), background, 4.5, false);
    const fg = _getContrastRatio("#ffffff", base) >= 4.5 ? "#ffffff" : "#F0F6FC";
    return { base, dark, background, text, fg };
  };

  const sd = semanticDark;

  const light = {
    "--ag-primary": primaryHex,
    "--ag-primary-dark": primaryDark,
    "--ag-primary-background": primaryBackground,
    "--ag-primary-text": primaryText,
    "--ag-secondary": secondaryHex,
    "--ag-secondary-dark": secondaryDark,
    "--ag-background-primary": bgPrimary,
    "--ag-background-secondary": bgSecondary,
    "--ag-background-tertiary": bgTertiary,
    "--ag-text-primary": textPrimary,
    "--ag-text-secondary": textSecondary,
    "--ag-border": border,
    "--ag-border-subtle": borderSubtle,
    "--ag-success": sl(successHex).base,
    "--ag-success-dark": sl(successHex).dark,
    "--ag-success-background": sl(successHex).background,
    "--ag-success-text": sl(successHex).text,
    "--ag-danger": sl(dangerHex).base,
    "--ag-danger-dark": sl(dangerHex).dark,
    "--ag-danger-background": sl(dangerHex).background,
    "--ag-danger-text": sl(dangerHex).text,
    "--ag-warning": sl(warningHex).base,
    "--ag-warning-dark": sl(warningHex).dark,
    "--ag-warning-background": sl(warningHex).background,
    "--ag-warning-text": sl(warningHex).text,
    "--ag-info": sl(infoHex).base,
    "--ag-info-dark": sl(infoHex).dark,
    "--ag-info-background": sl(infoHex).background,
    "--ag-info-text": sl(infoHex).text,
  };

  const dark = {
    "--ag-primary": darkPrimary,
    "--ag-primary-dark": darkPrimaryDark,
    "--ag-primary-background": darkPrimaryBg,
    "--ag-primary-text": darkPrimaryText,
    "--ag-secondary": darkSecondary,
    "--ag-secondary-dark": darkSecondaryDark,
    "--ag-background-primary": darkBgPrimary,
    "--ag-background-secondary": darkBgSecondary,
    "--ag-background-tertiary": darkBgTertiary,
    "--ag-text-primary": darkTextPrimary,
    "--ag-text-secondary": darkTextSecondary,
    "--ag-border": darkBorder,
    "--ag-border-subtle": darkBorderSubtle,
    "--ag-success": sd(successHex).base,
    "--ag-success-dark": sd(successHex).dark,
    "--ag-success-background": sd(successHex).background,
    "--ag-success-text": sd(successHex).text,
    "--ag-danger": sd(dangerHex).base,
    "--ag-danger-dark": sd(dangerHex).dark,
    "--ag-danger-background": sd(dangerHex).background,
    "--ag-danger-text": sd(dangerHex).text,
    "--ag-warning": sd(warningHex).base,
    "--ag-warning-dark": sd(warningHex).dark,
    "--ag-warning-background": sd(warningHex).background,
    "--ag-warning-text": sd(warningHex).text,
    "--ag-info": sd(infoHex).base,
    "--ag-info-dark": sd(infoHex).dark,
    "--ag-info-background": sd(infoHex).background,
    "--ag-info-text": sd(infoHex).text,
  };

  return { light, dark };
}

function applyExtractedTheme(light, dark) {
  for (const category in tokensByCategory.value) {
    for (const token of tokensByCategory.value[category]) {
      if (light[token.name] !== undefined) token.lightValue = light[token.name];
      if (dark[token.name] !== undefined) token.darkValue = dark[token.name];
      const isDarkMode = document.documentElement.getAttribute("data-theme") === "dark";
      token.value = isDarkMode ? token.darkValue : token.lightValue;
    }
  }
  updateCss();
}

// ─────────────────────────────────────────────────────────────────────────────

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
    Easings: [],
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
    } else if (tokenName.includes("ease")) {
      category = "Easings";
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
    name.includes("rating") ||
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

.theme-explorer > h3 {
  color: var(--ag-text-primary);
  margin-bottom: var(--ag-space-4) !important;
}

.controls {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--ag-space-4);
  margin-bottom: var(--ag-space-4);
}

.theme-buttons {
  display: flex;
  gap: var(--ag-space-2);
}

.token-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: var(--ag-space-4);
}

.token-category h4 {
  margin-bottom: var(--ag-space-3);
  border-bottom: 1px solid var(--ag-border);
  padding-bottom: var(--ag-space-2);
  color: var(--ag-text-primary);
}

.token-category-wide {
  grid-column: span 2;
}

.token-category-wide .token-item {
  grid-template-columns: 1fr 2fr 40px;
  overflow: visible;
}

.token-items {
  display: grid;
  gap: var(--ag-space-2);
}

.token-item {
  display: grid;
  grid-template-columns: 2fr 1fr 40px;
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

.token-category-wide .token-name {
  font-size: var(--ag-font-size-xs);
}

.text-input {
  width: 100%;
  font-size: var(--ag-font-size-sm);
  border-bottom: 1px solid var(--ag-border-subtle);
  background-color: transparent;
  color: var(--ag-text-primary);
}

.token-category-wide .text-input {
  font-size: var(--ag-font-size-xs);
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
  grid-template-columns: 1fr;
  gap: var(--ag-space-4);
  margin-top: var(--ag-space-4);
  text-align: center;
}

.featured::part(ag-card-wrapper) {
  border-color: var(--ag-primary);
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

.ratings-section {
  margin-top: var(--ag-space-8);
  padding-top: var(--ag-space-4);
  border-top: 1px solid var(--ag-border);
}

.ratings-section h4 {
  margin-bottom: var(--ag-space-4);
  color: var(--ag-text-primary);
}

.ratings-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--ag-space-4);
}

.rating-example {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--ag-space-2);
  padding: var(--ag-space-3);
  border: 1px solid var(--ag-border);
  border-radius: var(--ag-radius-md);
  background-color: var(--ag-background-primary);
}

.rating-label {
  font-size: var(--ag-font-size-sm);
  color: var(--ag-text-secondary);
  font-weight: 500;
}

/* Consolidated media query for 40rem breakpoint */
@media (width >= 40rem) {
  .controls {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .token-grid {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }

  .token-item {
    grid-template-columns: 2fr 1fr 50px;
  }

  .token-category-wide .token-item {
    grid-template-columns: 1fr 3fr 50px;
  }

  .pricing-table {
    grid-template-columns: repeat(3, 1fr);
  }

  .featured::part(ag-card-wrapper) {
    transform: scale(1.05);
  }

  .ratings-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Larger breakpoint for 3-column ratings */
@media (width >= 60rem) {
  .ratings-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* ── Image drop zone ───────────────────────────────────────────── */

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.image-drop-zone {
  border: 2px dashed var(--ag-border);
  border-radius: var(--ag-radius-md);
  padding: var(--ag-space-6) var(--ag-space-4);
  margin-bottom: var(--ag-space-4);
  text-align: center;
  cursor: pointer;
  transition: border-color 0.2s ease, background-color 0.2s ease;
  color: var(--ag-text-secondary);
  background-color: var(--ag-background-primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 96px;
  user-select: none;
}

.image-drop-zone:hover,
.image-drop-zone:focus-visible {
  border-color: var(--ag-primary);
  background-color: var(--ag-primary-background);
  outline: none;
}

.image-drop-zone.drag-over {
  border-color: var(--ag-primary);
  background-color: var(--ag-primary-background);
}

.image-drop-zone.has-image {
  cursor: default;
  padding: var(--ag-space-3) var(--ag-space-4);
}

.drop-icon {
  margin-bottom: var(--ag-space-2);
  color: var(--ag-text-secondary);
}

.drop-label {
  margin: 0 0 var(--ag-space-1);
  font-size: var(--ag-font-size-sm);
  color: var(--ag-text-primary);
}

.drop-hint {
  margin: 0;
  font-size: var(--ag-font-size-xs);
  color: var(--ag-text-secondary);
}

.palette-result {
  display: flex;
  align-items: center;
  gap: var(--ag-space-3);
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}

.palette-swatches {
  display: flex;
  gap: var(--ag-space-1);
  flex-wrap: wrap;
  justify-content: center;
}

.palette-swatch-item {
  width: 28px;
  height: 28px;
  border-radius: var(--ag-radius-sm);
  border: 1px solid var(--ag-border);
  flex-shrink: 0;
}
</style>
