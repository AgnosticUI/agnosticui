```vue
<template>
  <section>
    <div class="mbe4">
      <h3>Basic Copy Button</h3>
    </div>

    <div class="stacked-mobile mbe4">
      <VueCopyButton
        text="https://agnosticui.com"
        label="Copy URL"
      />
    </div>

    <div class="mbe4">
      <h3>Sizes & Variants</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueCopyButton
        text="Copy this"
        size="xs"
      />
      <VueCopyButton
        text="Copy this"
        size="sm"
      />
      <VueCopyButton
        text="Copy this"
        size="md"
      />
      <VueCopyButton
        text="Copy this"
        size="lg"
      />
      <VueCopyButton
        text="Copy this"
        size="xl"
      />
    </div>

    <div class="stacked-mobile mbe4">
      <VueCopyButton
        text="Copy primary"
        variant="primary"
      />
      <VueCopyButton
        text="Copy success"
        variant="success"
      />
      <VueCopyButton
        text="Copy warning"
        variant="warning"
      />
      <VueCopyButton
        text="Copy danger"
        variant="danger"
      />
      <VueCopyButton
        text="Copy ghost"
        variant="ghost"
      />
    </div>

    <div class="mbe4">
      <h3>Inline Code Example</h3>
    </div>
    <div class="code-example mbe4">
      <pre><code>npm install agnosticui-core</code></pre>
      <VueCopyButton
        class="code-copy"
        text="npm install agnosticui-core"
        label="Copy install command"
        size="sm"
        variant="ghost"
      />
    </div>

    <div class="mbe4">
      <h3>Copy From Input</h3>
      <p
        class="mbe2"
        style="color: var(--ag-text-secondary); font-size: 0.875rem;"
      >Copy the value from the input using reactive binding.</p>
    </div>
    <div class="stacked-mobile mbe4">
      <div style="display:flex;gap:12px;align-items:center;flex:1;">
        <input
          v-model="inputValue"
          style="padding:8px;flex:1;border-radius:6px;border:1px solid var(--ag-border)"
        />
        <VueCopyButton
          :text="inputValue"
          label="Copy input"
        />
      </div>
    </div>

  </section>
</template>

<script>
import { VueCopyButton } from "agnosticui-core/copy-button/vue";
import { Clipboard, Check } from "lucide-vue-next";

export default {
  name: "CopyButtonExamples",
  components: {
    VueCopyButton,
    Clipboard,
    Check,
  },
  data() {
    return {
      inputValue: "https://agnosticui.com/components/copybutton",
    };
  },
};
</script>

<style scoped>
.stacked-mobile {
  align-items: center;
}

.code-example {
  position: relative;
  background: var(--ag-background-secondary);
  padding: var(--ag-space-4);
  border-radius: var(--ag-radius-md);
}

.code-copy {
  position: absolute;
  top: var(--ag-space-2);
  right: var(--ag-space-2);
}
</style>
