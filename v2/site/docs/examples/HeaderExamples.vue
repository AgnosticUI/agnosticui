<template>
  <section class="ag-header-examples">
    <div class="mbe4">
      <h3>Basic Header</h3>
      <p class="mbs2 mbe3">
        A simple header with logo and navigation. On mobile, content stacks vertically. On desktop (≥960px), it displays horizontally.
      </p>
    </div>
    <div class="mbe4">
      <VueHeader>
        <template #logo>
          <a
            href="#"
            style="text-decoration: none; color: var(--ag-primary); font-weight: 700; font-size: 1.25rem;"
          >
            AgnosticUI
          </a>
        </template>
        <nav>
          <ul style="display: flex; gap: 1.5rem; list-style: none; margin: 0; padding: 0;">
            <li><a
                href="#home"
                style="text-decoration: none; color: inherit;"
              >Home</a></li>
            <li><a
                href="#about"
                style="text-decoration: none; color: inherit;"
              >About</a></li>
            <li><a
                href="#contact"
                style="text-decoration: none; color: inherit;"
              >Contact</a></li>
          </ul>
        </nav>
      </VueHeader>
    </div>

    <div class="mbe4">
      <h3>Header with Logo Image</h3>
    </div>
    <div class="mbe4">
      <VueHeader>
        <template #logo>
          <a
            href="#"
            style="display: flex; align-items: center; gap: 0.5rem; text-decoration: none; color: inherit;"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="currentColor"
              style="color: var(--ag-primary);"
            >
              <circle
                cx="16"
                cy="16"
                r="14"
                fill="var(--ag-primary)"
              />
              <text
                x="16"
                y="22"
                text-anchor="middle"
                fill="white"
                font-size="16"
                font-weight="bold"
              >A</text>
            </svg>
            <span style="font-weight: 700; font-size: 1.25rem;">MyApp</span>
          </a>
        </template>
        <nav>
          <ul style="display: flex; gap: 2rem; list-style: none; margin: 0; padding: 0;">
            <li><a
                href="#dashboard"
                style="text-decoration: none; color: inherit;"
              >Dashboard</a></li>
            <li><a
                href="#settings"
                style="text-decoration: none; color: inherit;"
              >Settings</a></li>
            <li><a
                href="#profile"
                style="text-decoration: none; color: inherit;"
              >Profile</a></li>
          </ul>
        </nav>
      </VueHeader>
    </div>

    <div class="mbe4">
      <h3>Content Justification</h3>
      <p class="mbs2 mbe3">
        Control how content is aligned within the header using the <code>contentJustify</code> prop.
      </p>
    </div>
    <div class="mbe4">
      <div class="mbe3">
        <h4
          class="mbe2"
          style="font-size: 1rem; font-weight: 600;"
        >Justify: Between (Default)</h4>
        <VueHeader contentJustify="between">
          <template #logo>
            <a
              href="#"
              style="text-decoration: none; color: inherit; font-weight: 600;"
            >Logo</a>
          </template>
          <nav>
            <a
              href="#nav"
              style="text-decoration: none; color: inherit;"
            >Navigation</a>
          </nav>
        </VueHeader>
      </div>

      <div class="mbe3">
        <h4
          class="mbe2"
          style="font-size: 1rem; font-weight: 600;"
        >Justify: Start</h4>
        <VueHeader contentJustify="start">
          <template #logo>
            <a
              href="#"
              style="text-decoration: none; color: inherit; font-weight: 600;"
            >Logo</a>
          </template>
          <nav style="margin-left: 2rem;">
            <a
              href="#nav"
              style="text-decoration: none; color: inherit;"
            >Navigation</a>
          </nav>
        </VueHeader>
      </div>

      <div class="mbe3">
        <h4
          class="mbe2"
          style="font-size: 1rem; font-weight: 600;"
        >Justify: End</h4>
        <VueHeader contentJustify="end">
          <template #logo>
            <a
              href="#"
              style="text-decoration: none; color: inherit; font-weight: 600;"
            >Logo</a>
          </template>
          <nav style="margin-left: 2rem;">
            <a
              href="#nav"
              style="text-decoration: none; color: inherit;"
            >Navigation</a>
          </nav>
        </VueHeader>
      </div>

      <div class="mbe3">
        <h4
          class="mbe2"
          style="font-size: 1rem; font-weight: 600;"
        >Justify: Center</h4>
        <VueHeader contentJustify="center">
          <template #logo>
            <a
              href="#"
              style="text-decoration: none; color: inherit; font-weight: 600;"
            >Logo</a>
          </template>
          <nav style="margin-left: 2rem;">
            <a
              href="#nav"
              style="text-decoration: none; color: inherit;"
            >Navigation</a>
          </nav>
        </VueHeader>
      </div>

      <div class="mbe3">
        <h4
          class="mbe2"
          style="font-size: 1rem; font-weight: 600;"
        >Justify: Around</h4>
        <VueHeader contentJustify="around">
          <template #logo>
            <a
              href="#"
              style="text-decoration: none; color: inherit; font-weight: 600;"
            >Logo</a>
          </template>
          <nav>
            <a
              href="#nav"
              style="text-decoration: none; color: inherit;"
            >Navigation</a>
          </nav>
        </VueHeader>
      </div>
    </div>

    <div class="mbe4">
      <h3>Sticky Header</h3>
      <p class="mbs2 mbe3">
        Sticky headers remain visible at the top of the viewport when scrolling. Scroll down in the demo below to see it in action.
      </p>
    </div>
    <div
      class="mbe4"
      style="border: 1px solid var(--ag-border); border-radius: var(--ag-radius-md); overflow: hidden;"
    >
      <div style="height: 300px; overflow-y: scroll;">
        <VueHeader :sticky="true">
          <template #logo>
            <a
              href="#"
              style="text-decoration: none; color: var(--ag-primary); font-weight: 700; font-size: 1.25rem;"
            >
              Sticky Header
            </a>
          </template>
          <nav>
            <ul style="display: flex; gap: 1.5rem; list-style: none; margin: 0; padding: 0;">
              <li><a
                  href="#section1"
                  style="text-decoration: none; color: inherit;"
                >Section 1</a></li>
              <li><a
                  href="#section2"
                  style="text-decoration: none; color: inherit;"
                >Section 2</a></li>
            </ul>
          </nav>
        </VueHeader>
        <div style="padding: 2rem;">
          <h4 id="section1">Section 1</h4>
          <p style="margin-bottom: 200px;">Scroll down to see the sticky behavior. The header stays at the top.</p>
          <h4 id="section2">Section 2</h4>
          <p style="margin-bottom: 200px;">The header remains visible as you scroll through content.</p>
          <p>End of scrollable content.</p>
        </div>
      </div>
    </div>

    <div class="mbe4">
      <h3>Unskinned Header</h3>
      <p class="mbs2 mbe3">
        Remove default styling by setting <code>isSkinned</code> to false. This removes the background, shadow, border, and padding.
      </p>
    </div>
    <div class="mbe4">
      <VueHeader :isSkinned="false">
        <template #logo>
          <a
            href="#"
            style="text-decoration: none; color: var(--ag-primary); font-weight: 700; font-size: 1.25rem;"
          >
            Minimal Header
          </a>
        </template>
        <nav>
          <ul style="display: flex; gap: 2rem; list-style: none; margin: 0; padding: 0;">
            <li><a
                href="#home"
                style="text-decoration: none; color: inherit;"
              >Home</a></li>
            <li><a
                href="#docs"
                style="text-decoration: none; color: inherit;"
              >Docs</a></li>
          </ul>
        </nav>
      </VueHeader>
    </div>

    <div class="mbe4">
      <h3>CSS Shadow Parts Customization</h3>
      <p class="mbs2 mbe3">
        Use CSS Shadow Parts to customize the header's appearance without affecting its internal structure.
      </p>
    </div>
    <div class="mbe4">
      <div class="mbe3">
        <h4
          class="mbe2"
          style="font-size: 1rem; font-weight: 600;"
        >Gradient Background</h4>
        <VueHeader class="custom-header-gradient">
          <template #logo>
            <a
              href="#"
              style="text-decoration: none; color: white; font-weight: 700; font-size: 1.25rem;"
            >
              Gradient Header
            </a>
          </template>
          <nav>
            <ul style="display: flex; gap: 1.5rem; list-style: none; margin: 0; padding: 0;">
              <li><a
                  href="#home"
                  style="text-decoration: none; color: white;"
                >Home</a></li>
              <li><a
                  href="#about"
                  style="text-decoration: none; color: white;"
                >About</a></li>
            </ul>
          </nav>
        </VueHeader>
      </div>

      <div class="mbe3">
        <h4
          class="mbe2"
          style="font-size: 1rem; font-weight: 600;"
        >Custom Border</h4>
        <VueHeader class="custom-header-border">
          <template #logo>
            <a
              href="#"
              style="text-decoration: none; color: var(--ag-primary); font-weight: 700; font-size: 1.25rem;"
            >
              Bordered Header
            </a>
          </template>
          <nav>
            <ul style="display: flex; gap: 1.5rem; list-style: none; margin: 0; padding: 0;">
              <li><a
                  href="#home"
                  style="text-decoration: none; color: inherit;"
                >Home</a></li>
              <li><a
                  href="#about"
                  style="text-decoration: none; color: inherit;"
                >About</a></li>
            </ul>
          </nav>
        </VueHeader>
      </div>

      <div class="mbe3">
        <h4
          class="mbe2"
          style="font-size: 1rem; font-weight: 600;"
        >Wide Content with Custom Padding</h4>
        <VueHeader class="custom-header-wide">
          <template #logo>
            <a
              href="#"
              style="text-decoration: none; color: var(--ag-primary); font-weight: 700; font-size: 1.25rem;"
            >
              Wide Header
            </a>
          </template>
          <nav>
            <ul style="display: flex; gap: 2rem; list-style: none; margin: 0; padding: 0;">
              <li><a
                  href="#home"
                  style="text-decoration: none; color: inherit;"
                >Home</a></li>
              <li><a
                  href="#products"
                  style="text-decoration: none; color: inherit;"
                >Products</a></li>
              <li><a
                  href="#about"
                  style="text-decoration: none; color: inherit;"
                >About</a></li>
            </ul>
          </nav>
        </VueHeader>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { VueHeader } from "agnosticui-core/header/vue";

export default defineComponent({
  name: "HeaderExamples",
  components: {
    VueHeader,
  },
});
</script>

<style>
/* CSS Shadow Parts customization examples */
.custom-header-gradient::part(ag-header) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-bottom: none;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.custom-header-border::part(ag-header) {
  background: var(--ag-background-secondary);
  border-bottom: 3px solid var(--ag-primary);
  box-shadow: none;
}

.custom-header-wide::part(ag-header-content) {
  max-width: 1200px;
  padding: 1.5rem 2rem;
}
</style>
