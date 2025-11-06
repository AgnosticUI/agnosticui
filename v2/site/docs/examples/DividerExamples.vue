<template>
  <section>
    <div class="mbe4">
      <h3>Horizontal Dividers</h3>
    </div>
    <div class="mbe4">
      <p>Content above the divider</p>
      <VueDivider />
      <p>Content below the divider</p>
    </div>

    <div class="mbe4">
      <h3>Horizontal with Content</h3>
    </div>
    <div class="mbe4">
      <VueDivider>Centered (default)</VueDivider>
      <div class="mbe2"></div>
      <VueDivider justify="start">Justify Start</VueDivider>
      <div class="mbe2"></div>
      <VueDivider justify="end">Justify End</VueDivider>
    </div>

    <div class="mbe4">
      <h3>Vertical Dividers</h3>
    </div>
    <div
      class="mbe4"
      style="display: flex; min-height: 200px;"
    >
      <p style="flex: 1;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <VueDivider vertical>Yes</VueDivider>
      <p style="flex: 1;">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
      <VueDivider vertical>Sir!</VueDivider>
      <p style="flex: 1;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>

    <div class="mbe4">
      <h3>Sizes - Horizontal</h3>
    </div>
    <div class="mbe4">
      <VueDivider size="small">Small</VueDivider>
      <div class="mbe2"></div>
      <VueDivider size="default">Default</VueDivider>
      <div class="mbe2"></div>
      <VueDivider size="large">Large</VueDivider>
      <div class="mbe2"></div>
      <VueDivider size="xlarge">XLarge</VueDivider>
    </div>

    <div class="mbe4">
      <h3>Sizes - Vertical</h3>
    </div>
    <div
      class="mbe4"
      style="display: flex; gap: 1rem; min-height: 150px;"
    >
      <p style="flex: 1;">Content</p>
      <VueDivider
        vertical
        size="small"
      >Sm</VueDivider>
      <p style="flex: 1;">Content</p>
      <VueDivider
        vertical
        size="default"
      >Def</VueDivider>
      <p style="flex: 1;">Content</p>
      <VueDivider
        vertical
        size="large"
      >Lg</VueDivider>
      <p style="flex: 1;">Content</p>
      <VueDivider
        vertical
        size="xlarge"
      >XL</VueDivider>
      <p style="flex: 1;">Content</p>
    </div>

    <div class="mbe4">
      <h3>Variants</h3>
    </div>
    <div class="mbe4">
      <VueDivider variant="default">Default</VueDivider>
      <div class="mbe2"></div>
      <VueDivider variant="success">Success</VueDivider>
      <div class="mbe2"></div>
      <VueDivider variant="info">Info</VueDivider>
      <div class="mbe2"></div>
      <VueDivider variant="warning">Warning</VueDivider>
      <div class="mbe2"></div>
      <VueDivider variant="error">Error</VueDivider>
    </div>

    <div class="mbe4">
      <h3>CSS Shadow Parts Customization</h3>
      <p class="mbs2 mbe3">
        Use CSS Shadow Parts to customize the divider's appearance without affecting the component's internal styling.
      </p>
    </div>
    <div class="mbe4">
      <VueDivider class="custom-divider-gradient">Gradient Divider</VueDivider>
      <div class="mbe4"></div>
      <VueDivider class="custom-divider-dotted">Dotted Pattern</VueDivider>
      <div class="mbe4"></div>
      <div style="display: flex; min-height: 150px;">
        <p style="flex: 1;">Custom vertical gradient divider on the right</p>
        <VueDivider
          class="custom-divider-vertical"
          vertical
        >Custom</VueDivider>
        <p style="flex: 1;">Styled with CSS Shadow Parts</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { VueDivider } from "agnosticui-core/divider/vue";

export default defineComponent({
  name: "DividerExamples",
  components: {
    VueDivider,
  },
});
</script>

<style>
/* CSS Shadow Parts customization examples */
.custom-divider-gradient::part(ag-divider)::before,
.custom-divider-gradient::part(ag-divider)::after {
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  height: var(--ag-space-1);
}

.custom-divider-gradient::part(ag-divider-content) {
  color: #667eea;
  font-weight: 700;
  font-size: 1.125rem;
}

.custom-divider-dotted::part(ag-divider)::before,
.custom-divider-dotted::part(ag-divider)::after {
  background: repeating-linear-gradient(
    90deg,
    #10b981 0,
    #10b981 10px,
    transparent 10px,
    transparent 20px
  );
  height: 3px;
}

.custom-divider-vertical::part(ag-divider)::before,
.custom-divider-vertical::part(ag-divider)::after {
  background: linear-gradient(180deg, #ef4444 0%, #fbbf24 100%);
  width: var(--ag-space-1);
}

.custom-divider-vertical::part(ag-divider-content) {
  font-family: "Courier New", monospace;
  letter-spacing: 2px;
  font-weight: 700;
}
</style>
