<template>
  <section>
    <div class="mbe4">
      <h3>Default</h3>
      <p class="mbs2 mbe3">Basic tag with neutral styling.</p>
      <div class="stacked-mobile">
        <VueTag>
          Default Tag
        </VueTag>
      </div>
    </div>
    <div class="mbe4">
      <h3>Variants</h3>
      <p class="mbs2 mbe3">Semantic color variants for status indication.</p>
      <div class="stacked">
        <VueTag
          variant="info"
          class="mbe2"
        >Info Tag</VueTag>
        <VueTag
          variant="success"
          class="mbe2"
        >Success Tag</VueTag>
        <VueTag
          variant="warning"
          class="mbe2"
        >Warning Tag</VueTag>
        <VueTag
          variant="error"
          class="mbe2"
        >Error Tag</VueTag>
      </div>
    </div>
    <div class="mbe4">
      <h3>Shapes</h3>
      <p class="mbs2 mbe3">Different border-radius options for visual variety.</p>
      <div class="stacked">
        <VueTag
          shape="pill"
          variant="info"
          class="mbe2"
        >Pill Tag</VueTag>
        <VueTag
          shape="round"
          variant="success"
          class="mbe2"
        >Round Tag</VueTag>
        <VueTag
          shape="circle"
          variant="error"
          class="mbe2"
        >!</VueTag>
      </div>
    </div>
    <div class="mbe4">
      <h3>Uppercase Modifier</h3>
      <p class="mbs2 mbe3">Transforms text to uppercase with condensed typography.</p>
      <div class="stacked">
        <VueTag
          :uppercase="true"
          variant="warning"
          class="mbe2"
        >Uppercase Tag</VueTag>
        <VueTag
          :uppercase="true"
          shape="pill"
          class="mbe2"
        >PILL LABEL</VueTag>
      </div>
    </div>
    <div class="mbe4">
      <h3>With Close Slot</h3>
      <p class="mbs2 mbe3">Dismissible tags using the named close slot.</p>
      <div class="stacked">
        <VueTag
          variant="error"
          class="mbe2"
        >
          Deletable
          <button
            slot="close"
            aria-label="close"
          >✕</button>
        </VueTag>
        <VueTag
          variant="success"
          shape="pill"
          class="mbe2"
        >
          Active
          <button
            slot="close"
            aria-label="close"
          >✕</button>
        </VueTag>
        <VueTag
          variant="warning"
          :uppercase="true"
          class="mbe2"
        >
          Pending
          <button
            slot="close"
            aria-label="close"
          >✕</button>
        </VueTag>
      </div>
    </div>
    <div class="mbe4">
      <h3>CSS Shadow Parts Customization</h3>
      <p class="mbs2 mbe3">Use CSS Shadow Parts to customize the tag's appearance without breaking encapsulation.</p>
      <div class="mbe4">
        <VueTag class="custom-gradient-tag mie4">Gradient Tag</VueTag>
        <VueTag class="custom-outline-tag">Outline Tag</VueTag>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { VueTag } from "agnosticui-core/tag/vue";
</script>

<style scoped>
/* CSS Parts customization examples */

/* Gradient tag style */
.custom-gradient-tag::part(ag-tag-wrapper) {
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-weight: 600;
  padding: 0.5rem 1rem;
}

/* Outline tag style */
.custom-outline-tag::part(ag-tag-wrapper) {
  background: transparent;
  color: #764ba2;
  border: 2px solid #764ba2;
}
</style>
