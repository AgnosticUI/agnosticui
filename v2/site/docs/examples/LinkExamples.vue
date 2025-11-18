<template>
  <section>
    <div class="mbe4">
      <h3>Basic Links</h3>
      <div class="stacked-mobile">
        <VueLink href="#link">Home</VueLink>
        <VueLink href="#link">About</VueLink>
        <VueLink href="#link">Contact</VueLink>
      </div>
    </div>

    <div class="mbe4">
      <h3>Variant Links</h3>
      <div class="stacked-mobile">
        <VueLink
          href="#link"
          variant="primary"
        >Primary Link</VueLink>
        <VueLink
          href="#link"
          variant="success"
        >Success Link</VueLink>
        <VueLink
          href="#link"
          variant="warning"
        >Warning Link</VueLink>
        <VueLink
          href="#link"
          variant="danger"
        >Danger Link</VueLink>
        <VueLink
          href="#link"
          variant="monochrome"
        >Monochrome Link</VueLink>
      </div>
    </div>

    <div class="mbe4">
      <h3>Button-Style Links</h3>
      <div class="stacked-mobile">
        <VueLink
          href="#link"
          :isButton="true"
        >Default Button</VueLink>
        <VueLink
          href="#link"
          :isButton="true"
          variant="primary"
        >Primary Button</VueLink>
        <VueLink
          href="#link"
          :isButton="true"
          variant="success"
        >Success Button</VueLink>
        <VueLink
          href="#link"
          :isButton="true"
          variant="warning"
        >Warning Button</VueLink>
        <VueLink
          href="#link"
          :isButton="true"
          variant="danger"
        >Danger Button</VueLink>
        <VueLink
          href="#link"
          :isButton="true"
          variant="monochrome"
        >Monochrome Button</VueLink>
      </div>
    </div>

    <div class="mbe4">
      <h3>Button Sizes</h3>
      <div class="stacked-mobile">
        <VueLink
          href="#link"
          :isButton="true"
          buttonSize="x-sm"
          variant="primary"
        >
          Extra Small
        </VueLink>
        <VueLink
          href="#link"
          :isButton="true"
          buttonSize="sm"
          variant="primary"
        >
          Small
        </VueLink>
        <VueLink
          href="#link"
          :isButton="true"
          buttonSize="md"
          variant="primary"
        >
          Medium
        </VueLink>
        <VueLink
          href="#link"
          :isButton="true"
          buttonSize="lg"
          variant="primary"
        >
          Large
        </VueLink>
        <VueLink
          href="#link"
          :isButton="true"
          buttonSize="xl"
          variant="primary"
        >
          Extra Large
        </VueLink>
      </div>
    </div>

    <div class="mbe4">
      <h3>Button Shapes</h3>
      <div class="stacked-mobile">
        <VueLink
          href="#link"
          :isButton="true"
          variant="primary"
        >
          Default
        </VueLink>
        <VueLink
          href="#link"
          :isButton="true"
          buttonShape="rounded"
          variant="primary"
        >
          Rounded
        </VueLink>
        <VueLink
          href="#link"
          :isButton="true"
          buttonShape="capsule"
          variant="primary"
        >
          Capsule
        </VueLink>
        <VueLink
          href="#link"
          :isButton="true"
          buttonShape="circle"
          variant="primary"
          ariaLabel="Add"
        >
          +
        </VueLink>
        <VueLink
          href="#link"
          :isButton="true"
          buttonShape="square"
          variant="primary"
          ariaLabel="Menu"
        >
          ■
        </VueLink>
        <VueLink
          href="#link"
          :isButton="true"
          buttonShape="rounded-square"
          variant="primary"
          ariaLabel="Settings"
        >
          ▢
        </VueLink>
      </div>
    </div>

    <div class="mbe4">
      <h3>Bordered Buttons</h3>
      <div class="stacked-mobile">
        <VueLink
          href="#link"
          :isButton="true"
          :buttonBordered="true"
          variant="primary"
        >
          Primary Outlined
        </VueLink>
        <VueLink
          href="#link"
          :isButton="true"
          :buttonBordered="true"
          variant="success"
        >
          Success Outlined
        </VueLink>
        <VueLink
          href="#link"
          :isButton="true"
          :buttonBordered="true"
          variant="warning"
        >
          Warning Outlined
        </VueLink>
        <VueLink
          href="#link"
          :isButton="true"
          :buttonBordered="true"
          variant="danger"
        >
          Danger Outlined
        </VueLink>
        <VueLink
          href="#link"
          :isButton="true"
          :buttonBordered="true"
          variant="monochrome"
        >
          Monochrome Outlined
        </VueLink>
      </div>
    </div>

    <div class="mbe4">
      <h3>Complex Button Combinations</h3>
      <div class="stacked-mobile">
        <VueLink
          href="#link"
          :isButton="true"
          buttonSize="lg"
          buttonShape="capsule"
          variant="primary"
        >
          Large Capsule Button
        </VueLink>
        <VueLink
          href="#link"
          :isButton="true"
          buttonSize="lg"
          buttonShape="capsule"
          :buttonBordered="true"
          variant="success"
        >
          Large Capsule Outlined
        </VueLink>
        <VueLink
          href="#link"
          :isButton="true"
          buttonSize="sm"
          buttonShape="rounded"
          :buttonBordered="true"
          variant="warning"
        >
          Small Rounded Outlined
        </VueLink>
      </div>
    </div>

    <div class="mbe4">
      <h3>External Link</h3>
      <div class="stacked-mobile">
        <VueLink
          href="https://github.com"
          :external="true"
        >
          External Link →
        </VueLink>
        <VueLink
          href="https://github.com"
          :external="true"
          :isButton="true"
          variant="primary"
        >
          External Button →
        </VueLink>
      </div>
    </div>

    <div class="mbe4">
      <h3>Disabled Links</h3>
      <div class="stacked-mobile">
        <VueLink
          href="#link"
          :disabled="true"
        >
          Disabled Link
        </VueLink>
        <VueLink
          href="#link"
          :disabled="true"
          :isButton="true"
        >
          Disabled Button
        </VueLink>
        <VueLink
          href="#link"
          :disabled="true"
          :isButton="true"
          variant="success"
        >
          Disabled Success Button
        </VueLink>
      </div>
    </div>

    <div class="mbe4">
      <h3>Accessible Icon Links</h3>
      <div class="stacked-mobile">
        <VueLink
          href="#download"
          ariaLabel="Download PDF report"
        >
          📄
        </VueLink>
        <VueLink
          href="#settings"
          :isButton="true"
          buttonShape="circle"
          variant="primary"
          ariaLabel="Settings"
        >
          ⚙️
        </VueLink>
        <VueLink
          href="#add"
          :isButton="true"
          buttonShape="circle"
          variant="success"
          ariaLabel="Add new item"
        >
          +
        </VueLink>
        <VueLink
          href="#delete"
          :isButton="true"
          buttonShape="circle"
          variant="danger"
          ariaLabel="Delete"
        >
          ×
        </VueLink>
      </div>
    </div>

    <div class="mbe4">
      <h3>Call-to-Action Pattern</h3>
      <div class="stacked-mobile">
        <VueLink
          href="#signup"
          :isButton="true"
          buttonSize="lg"
          buttonShape="capsule"
          variant="primary"
        >
          Get Started Free
        </VueLink>
        <VueLink
          href="#learn-more"
          :isButton="true"
          buttonSize="lg"
          buttonShape="capsule"
          :buttonBordered="true"
          variant="primary"
        >
          Learn More
        </VueLink>
      </div>
    </div>

    <div class="mbe4">
      <h3>Action Bar Pattern</h3>
      <div class="stacked-mobile">
        <VueLink
          href="#edit"
          :isButton="true"
          buttonSize="sm"
          variant="primary"
        >
          Edit
        </VueLink>
        <VueLink
          href="#duplicate"
          :isButton="true"
          buttonSize="sm"
          :buttonBordered="true"
        >
          Duplicate
        </VueLink>
        <VueLink
          href="#delete"
          :isButton="true"
          buttonSize="sm"
          variant="danger"
        >
          Delete
        </VueLink>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { VueLink } from "agnosticui-core/link/vue";

export default defineComponent({
  name: "LinkExamples",
  components: {
    VueLink,
  },
});
</script>

<style scoped>
.mbe4 {
  margin-bottom: 2rem;
}

.stacked-mobile {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
}

h3 {
  margin-bottom: 0.75rem;
  font-size: 1.125rem;
  font-weight: 600;
}
</style>
