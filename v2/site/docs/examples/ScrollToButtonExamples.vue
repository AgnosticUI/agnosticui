<template>
  <section>
    <h3>Default (Icon Only)</h3>
    <p>The most common use case - a circular button with just an icon that appears when scrolling down.</p>
    <div class="example-container">
      <p
        v-for="i in 20"
        :key="i"
        class="example-paragraph"
      >
        Paragraph {{ i }}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
      </p>
      <VueScrollToButton :style="{bottom: '100px'}" />
    </div>
  </section>

  <section class="example-section">
    <h3>With Visible Label</h3>
    <p>Show both icon and text label for better clarity. The button becomes pill-shaped automatically.</p>
    <VueScrollToButton
      label="Back to Top"
      :scrollThreshold="200"
      :showLabel="true"
    />
  </section>

  <section class="example-section">
    <h3>Low Scroll Threshold</h3>
    <p>Control when the button appears by adjusting <code>scrollThreshold</code>. This one appears after just 100px.</p>
    <VueScrollToButton
      label="Quick Access"
      :showLabel="true"
      :scrollThreshold="100"
      :style="{right: '180px'}"
      shape="rounded"
    />
  </section>

  <section class="example-section">
    <h3>Scroll to Bottom</h3>
    <p>Navigate to the end of content. The arrow automatically points down based on the target.</p>
    <VueScrollToButton
      :style="{bottom: '160px'}"
      label="Go to Bottom"
      target="bottom"
      :scrollThreshold="400"
    />
  </section>

  <section class="example-section">
    <h3>Custom Icon with Slot</h3>
    <p>Replace the default arrow with any icon using Vue's slot system.</p>
    <VueScrollToButton
      label="Launch to Top!"
      :style="{bottom: '220px'}"
      :scrollThreshold="600"
    >
      <template #icon>
        <Rocket :size="20" />
      </template>
    </VueScrollToButton>
  </section>

  <section class="example-section">
    <h3>Different Sizes</h3>
    <p>Available sizes: <code>x-sm</code>, <code>sm</code>, <code>md</code> (default), <code>lg</code>, <code>xl</code></p>
    <div class="inline-examples">
      <div class="inline-example">
        <VueScrollToButton
          size="x-sm"
          style="position: static;"
        />
        <span>x-sm</span>
      </div>
      <div class="inline-example">
        <VueScrollToButton
          size="sm"
          style="position: static;"
        />
        <span>sm</span>
      </div>
      <div class="inline-example">
        <VueScrollToButton
          size="md"
          style="position: static;"
        />
        <span>md</span>
      </div>
      <div class="inline-example">
        <VueScrollToButton
          size="lg"
          style="position: static;"
        />
        <span>lg</span>
      </div>
      <div class="inline-example">
        <VueScrollToButton
          size="xl"
          style="position: static;"
        />
        <span>xl</span>
      </div>
    </div>
  </section>

  <section class="example-section">
    <h3>Different Shapes</h3>
    <p>Available shapes: <code>circle</code> (default), <code>square</code>, <code>rounded</code>, <code>rounded-square</code>, <code>capsule</code></p>
    <div class="inline-examples">
      <div class="inline-example">
        <VueScrollToButton
          shape="circle"
          :style="{bottom: '280px'}"
          :scrollThreshold="800"
        />
        <span>circle</span>
      </div>
      <div class="inline-example">
        <VueScrollToButton
          shape="square"
          :style="{bottom: '340px'}"
          :scrollThreshold="1000"
        />
        <span>square</span>
      </div>
      <div class="inline-example">
        <VueScrollToButton
          shape="rounded"
          :style="{bottom: '400px'}"
          :scrollThreshold="1200"
        />
        <span>rounded</span>
      </div>
      <div class="inline-example">
        <VueScrollToButton
          shape="rounded-square"
          :style="{bottom: '460px'}"
          :scrollThreshold="1400"
        />
        <span>rounded-square</span>
      </div>
      <div class="inline-example">
        <VueScrollToButton
          shape="capsule"
          :showLabel="true"
          label="Top"
          :style="{bottom: '580px'}"
          :scrollThreshold="1800"
        />
        <span>capsule</span>
      </div>
    </div>
  </section>

  <section class="example-section">
    <h3>Custom Styling with CSS Shadow Parts</h3>
    <p>Style internal parts without breaking encapsulation using CSS Shadow Parts.</p>
    <VueScrollToButton
      class="custom-gradient"
      label="Styled Button"
      :style="{bottom: '520px'}"
      :scrollThreshold="1600"
      :showLabel="true"
    />
  </section>

</template>

<script lang="ts">
import { defineComponent } from "vue";
import { VueScrollToButton } from "agnosticui-core/scroll-to-button/vue";
import { Rocket } from "lucide-vue-next";

export default defineComponent({
  name: "ScrollToButtonExamples",
  components: {
    VueScrollToButton,
    Rocket,
  },
});
</script>

<style scoped>
.example-section {
  margin-top: 3rem;
}

.example-section h3 {
  margin-bottom: 0.5rem;
}

.example-section p {
  margin-bottom: 1rem;
}

.example-container {
  min-height: 120vh;
  padding: 1.5rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  position: relative;
}

.example-paragraph {
  margin-bottom: 1.5rem;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

.inline-examples {
  display: flex;
  gap: 2rem;
  align-items: flex-end;
  flex-wrap: wrap;
  padding: 2rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
}

.inline-example {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.inline-example span {
  font-size: 0.875rem;
  font-family: var(--vp-font-family-mono);
  color: var(--vp-c-text-2);
}
</style>

<style>
/* Custom gradient styling example - must be global to target shadow parts */
ag-scroll-to-button.custom-gradient::part(ag-button) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

ag-scroll-to-button.custom-gradient::part(ag-button):hover {
  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.6);
  transform: translateY(-2px);
}
</style>
