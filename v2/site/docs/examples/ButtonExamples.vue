<template>
  <section>
    <div class="mbe4">
      <VueButton class="mie2">Default</VueButton>
    </div>
    <!-- Rounded -->
    <div class="mbe2">
      <h3>Rounded Variants</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueButton shape="rounded">Default</VueButton>
      <VueButton
        shape="rounded"
        variant="primary"
      >Primary</VueButton>
      <VueButton
        shape="rounded"
        variant="secondary"
      >Secondary</VueButton>
      <VueButton
        shape="rounded"
        variant="success"
      >Success</VueButton>
      <VueButton
        shape="rounded"
        variant="warning"
      >Warning</VueButton>
      <VueButton
        shape="rounded"
        variant="danger"
      >Danger</VueButton>
    </div>

    <!-- Shapes -->
    <div class="mbe2">
      <h3>Shapes</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueButton
        shape="rounded"
        variant="primary"
        :bordered="true"
      >Rounded</VueButton>
      <VueButton
        shape="capsule"
        variant="success"
        :bordered="true"
      >Capsule</VueButton>
      <VueButton
        shape="circle"
        :bordered="true"
      >C</VueButton>
      <VueButton
        shape="square"
        variant="secondary"
        :bordered="true"
      >S</VueButton>
      <VueButton
        shape="rounded-square"
        :bordered="true"
        variant="danger"
      >RS</VueButton>
    </div>

    <!-- Bordered -->
    <div class="mbe2">
      <h3>Bordered</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueButton
        :bordered="true"
        shape="rounded"
      >Default</VueButton>
      <VueButton
        :bordered="true"
        shape="rounded"
        variant="primary"
      >Primary</VueButton>
      <VueButton
        :bordered="true"
        shape="rounded"
        variant="secondary"
      >Secondary</VueButton>
      <VueButton
        :bordered="true"
        shape="rounded"
        variant="success"
      >Success</VueButton>
      <VueButton
        :bordered="true"
        shape="rounded"
        variant="warning"
      >Warning</VueButton>
      <VueButton
        :bordered="true"
        shape="rounded"
        variant="danger"
      >Danger</VueButton>
    </div>

    <!-- Sizes -->
    <div class="mbe2">
      <h3>Sizes</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueButton
        size="x-sm"
        shape="rounded"
      >Extra Small</VueButton>
      <VueButton
        size="sm"
        shape="rounded"
      >Small</VueButton>
      <VueButton
        size="md"
        shape="rounded"
      >Medium</VueButton>
      <VueButton
        size="lg"
        shape="rounded"
      >Large</VueButton>
      <VueButton
        size="xl"
        shape="rounded"
      >Extra Large</VueButton>
    </div>
    <div class="stacked-mobile mbe4">
      <VueButton
        :bordered="true"
        size="x-sm"
        shape="rounded"
      >Extra Small</VueButton>
      <VueButton
        :bordered="true"
        size="sm"
        shape="rounded"
      >Small</VueButton>
      <VueButton
        :bordered="true"
        size="md"
        shape="rounded"
      >Medium</VueButton>
      <VueButton
        :bordered="true"
        size="lg"
        shape="rounded"
      >Large</VueButton>
      <VueButton
        :bordered="true"
        size="xl"
        shape="rounded"
      >Extra Large</VueButton>
    </div>
    <div class="stacked-mobile mbe4">
      <VueButton
        size="x-sm"
        variant="primary"
        shape="rounded"
      >Extra Small</VueButton>
      <VueButton
        size="sm"
        variant="primary"
        shape="rounded"
      >Small</VueButton>
      <VueButton
        size="md"
        variant="primary"
        shape="rounded"
      >Medium</VueButton>
      <VueButton
        size="lg"
        variant="primary"
        shape="rounded"
      >Large</VueButton>
      <VueButton
        size="xl"
        variant="primary"
        shape="rounded"
      >Extra Large</VueButton>
    </div>
    <div class="stacked-mobile mbe4">
      <VueButton
        size="x-sm"
        variant="primary"
        :bordered="true"
        shape="rounded"
      >Extra Small</VueButton>
      <VueButton
        size="sm"
        variant="primary"
        :bordered="true"
        shape="rounded"
      >Small</VueButton>
      <VueButton
        size="md"
        variant="primary"
        :bordered="true"
        shape="rounded"
      >Medium</VueButton>
      <VueButton
        size="lg"
        variant="primary"
        :bordered="true"
        shape="rounded"
      >Large</VueButton>
      <VueButton
        size="xl"
        variant="primary"
        :bordered="true"
        shape="rounded"
      >Extra Large</VueButton>
    </div>
    <div class="stacked-mobile mbe4">
      <VueButton
        size="x-sm"
        variant="success"
        shape="rounded"
      >Extra Small</VueButton>
      <VueButton
        size="sm"
        variant="success"
        shape="rounded"
      >Small</VueButton>
      <VueButton
        size="md"
        variant="success"
        shape="rounded"
      >Medium</VueButton>
      <VueButton
        size="lg"
        variant="success"
        shape="rounded"
      >Large</VueButton>
      <VueButton
        size="xl"
        variant="success"
        shape="rounded"
      >Extra Large</VueButton>
    </div>
    <div class="stacked-mobile mbe4">
      <VueButton
        size="x-sm"
        variant="success"
        :bordered="true"
        shape="rounded"
      >Extra Small</VueButton>
      <VueButton
        size="sm"
        variant="success"
        :bordered="true"
        shape="rounded"
      >Small</VueButton>
      <VueButton
        size="md"
        variant="success"
        :bordered="true"
        shape="rounded"
      >Medium</VueButton>
      <VueButton
        size="lg"
        variant="success"
        :bordered="true"
        shape="rounded"
      >Large</VueButton>
      <VueButton
        size="xl"
        variant="success"
        :bordered="true"
        shape="rounded"
      >Extra Large</VueButton>
    </div>
    <div class="stacked-mobile mbe4">
      <VueButton
        size="x-sm"
        variant="warning"
        shape="rounded"
      >Extra Small</VueButton>
      <VueButton
        size="sm"
        variant="warning"
        shape="rounded"
      >Small</VueButton>
      <VueButton
        size="md"
        variant="warning"
        shape="rounded"
      >Medium</VueButton>
      <VueButton
        size="lg"
        variant="warning"
        shape="rounded"
      >Large</VueButton>
      <VueButton
        size="xl"
        variant="warning"
        shape="rounded"
      >Extra Large</VueButton>
    </div>
    <div class="stacked-mobile mbe4">
      <VueButton
        size="x-sm"
        variant="warning"
        :bordered="true"
        shape="rounded"
      >Extra Small</VueButton>
      <VueButton
        size="sm"
        variant="warning"
        :bordered="true"
        shape="rounded"
      >Small</VueButton>
      <VueButton
        size="md"
        variant="warning"
        :bordered="true"
        shape="rounded"
      >Medium</VueButton>
      <VueButton
        size="lg"
        variant="warning"
        :bordered="true"
        shape="rounded"
      >Large</VueButton>
      <VueButton
        size="xl"
        variant="warning"
        :bordered="true"
        shape="rounded"
      >Extra Large</VueButton>
    </div>
    <div class="stacked-mobile mbe4">
      <VueButton
        size="x-sm"
        variant="danger"
        shape="rounded"
      >Extra Small</VueButton>
      <VueButton
        size="sm"
        variant="danger"
        shape="rounded"
      >Small</VueButton>
      <VueButton
        size="md"
        variant="danger"
        shape="rounded"
      >Medium</VueButton>
      <VueButton
        size="lg"
        variant="danger"
        shape="rounded"
      >Large</VueButton>
      <VueButton
        size="xl"
        variant="danger"
        shape="rounded"
      >Extra Large</VueButton>
    </div>
    <div class="stacked-mobile mbe4">
      <VueButton
        size="x-sm"
        bordered
        variant="danger"
        shape="rounded"
      >Extra Small</VueButton>
      <VueButton
        size="sm"
        :bordered="true"
        variant="danger"
        shape="rounded"
      >Small</VueButton>
      <VueButton
        size="md"
        :bordered="true"
        variant="danger"
        shape="rounded"
      >Medium</VueButton>
      <VueButton
        size="lg"
        :bordered="true"
        variant="danger"
        shape="rounded"
      >Large</VueButton>
      <VueButton
        size="xl"
        :bordered="true"
        variant="danger"
        shape="rounded"
      >Extra Large</VueButton>
    </div>

    <!-- Icons -->
    <div class="mbe2">
      <h3>Icons Small</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <div
        class="flex-inline"
        role="group"
        aria-label="Framework selection"
      >
        <VueButton
          variant="primary"
          size="sm"
          shape="rounded"
          class="mie2"
        >
          <Mail :size="16" />
          <span class="mis1 mie2">Invite Members</span>
        </VueButton>
        <VueButton
          variant="primary"
          size="sm"
          shape="rounded"
          :bordered="true"
          class="mis1 mie2"
        >
          <Plus :size="16" />
          <span>Create New</span>
        </VueButton>
        <VueButton
          variant="danger"
          size="sm"
          shape="rounded"
        >
          <Mic :size="16" />
          <span>Record</span>
        </VueButton>
      </div>
    </div>

    <!-- Icons -->
    <div class="mbe2">
      <h3>Icons</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <div
        class="flex-inline"
        role="group"
        aria-label="Framework selection"
      >
        <VueButton
          variant="primary"
          shape="rounded"
          class="mie2"
        >
          <Mail :size="18" />
          <span class="mis1 mie2">Invite Members</span>
        </VueButton>
        <VueButton
          variant="primary"
          shape="rounded"
          :bordered="true"
          class="mis1 mie2"
        >
          <Plus :size="18" />
          <span>Create New</span>
        </VueButton>
        <VueButton
          variant="danger"
          shape="rounded"
        >
          <Mic :size="18" />
          <span>Record</span>
        </VueButton>
      </div>
    </div>

    <!-- Icons -->
    <div class="mbe2">
      <h3>Icons</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <div
        class="flex-inline"
        role="group"
        aria-label="Framework selection"
      >
        <VueButton
          variant="primary"
          shape="rounded"
          size="lg"
          class="mie2"
        >
          <Mail :size="18" />
          <span class="mis1 mie2">Invite Members</span>
        </VueButton>
        <VueButton
          variant="primary"
          shape="rounded"
          :bordered="true"
          size="lg"
          class="mis1 mie2"
        >
          <Plus :size="18" />
          <span>Create New</span>
        </VueButton>

        <VueButton
          variant="danger"
          shape="rounded"
          size="lg"
        >
          <Mic :size="18" />
          <span>Record</span>
        </VueButton>
      </div>
    </div>

    <!-- Grouped -->
    <div class="mbe2">
      <h3>Grouped</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <div
        class="flex-inline"
        role="group"
        aria-label="Framework selection"
      >
        <VueButton
          grouped
          :bordered="true"
          variant="secondary"
        >React</VueButton>
        <VueButton
          grouped
          :bordered="true"
          variant="secondary"
        >Vue</VueButton>
        <VueButton
          grouped
          :bordered="true"
          variant="secondary"
        >Svelte</VueButton>
        <VueButton
          grouped
          :bordered="true"
          variant="secondary"
        >Lit</VueButton>
      </div>
    </div>
    <div class="stacked-mobile mbe4">
      <div
        class="flex-inline"
        role="group"
        aria-label="Framework selection"
      >
        <VueButton
          grouped
          :bordered="true"
          variant="primary"
        >React</VueButton>
        <VueButton
          grouped
          :bordered="true"
          variant="primary"
        >Vue</VueButton>
        <VueButton
          grouped
          :bordered="true"
          variant="primary"
        >Svelte</VueButton>
        <VueButton
          grouped
          :bordered="true"
          variant="primary"
        >Lit</VueButton>
      </div>
    </div>

    <!-- Misc -->
    <div class="mbe2">
      <h3>Miscellaneous</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueButton
        ghost
        class="mie2"
      >Ghost</VueButton>
      <VueButton
        link
        class="mie2"
      >Link</VueButton>
      <VueButton
        type="submit"
        bordered
        shape="rounded"
        variant="primary"
        class="mie2"
      >Submit</VueButton>
      <VueButton
        :toggle="true"
        class="mie2"
      >Toggle</VueButton>
      <VueButton
        disabled
        class="mie2"
      >Disabled</VueButton>
    </div>

    <!-- CSS Parts Customization -->
    <div class="mbe4">
      <h3>CSS Parts Customization</h3>
      <p
        class="mbe2"
        style="color: var(--ag-text-secondary); font-size: 0.875rem;"
      >
        Customize button appearance using CSS Shadow Parts without breaking encapsulation.
      </p>
    </div>
    <div class="stacked-mobile mbe4">
      <VueButton class="custom-gradient-button mie3">
        Gradient Button
      </VueButton>
    </div>
  </section>
</template>
<script>
import VueButton from "agnosticui-core/button/vue";
import { Mail, Plus, Send, Mic } from "lucide-vue-next";

export default {
  name: "ButtonExamples",
  components: {
    VueButton,
    Mail,
    Plus,
    Send,
    Mic,
  },
};
</script>

<style scoped>
/* CSS Parts customization examples */

/* Gradient button style */
.custom-gradient-button::part(ag-button) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  border: none;
  box-shadow: 0 8px 16px rgba(102, 126, 234, 0.4);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all 0.3s ease;
}

.custom-gradient-button::part(ag-button):hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(102, 126, 234, 0.6);
}
</style>
