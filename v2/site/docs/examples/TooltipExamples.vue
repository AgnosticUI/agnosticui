<template>
  <section>
    <div class="mbe4">
      <h3>Basic Tooltip</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueTooltip content="This is a tooltip">
        <VueButton>Hover me</VueButton>
      </VueTooltip>
      <VueTooltip content="Tooltips provide helpful context">
        <VueButton variant="primary">Primary button</VueButton>
      </VueTooltip>
      <VueTooltip content="Additional information here">
        <VueButton variant="success">Success button</VueButton>
      </VueTooltip>
    </div>

    <div class="mbe4">
      <h3>Placement Options</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueTooltip
        content="Tooltip on top"
        placement="top"
      >
        <VueButton>Top</VueButton>
      </VueTooltip>
      <VueTooltip
        content="Tooltip on bottom"
        placement="bottom"
      >
        <VueButton>Bottom</VueButton>
      </VueTooltip>
      <VueTooltip
        content="Tooltip on left"
        placement="left"
      >
        <VueButton>Left</VueButton>
      </VueTooltip>
      <VueTooltip
        content="Tooltip on right"
        placement="right"
      >
        <VueButton>Right</VueButton>
      </VueTooltip>
    </div>

    <div class="mbe4">
      <h3>Trigger Options</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueTooltip
        content="Hover over me"
        trigger="hover"
      >
        <VueButton>Hover trigger</VueButton>
      </VueTooltip>
      <VueTooltip
        content="Click to toggle"
        trigger="click"
      >
        <VueButton>Click trigger</VueButton>
      </VueTooltip>
      <VueTooltip
        content="Hover or focus works"
        trigger="hover focus"
      >
        <VueButton>Hover + Focus</VueButton>
      </VueTooltip>
    </div>

    <div class="mbe4">
      <h3>Icon-Only Buttons</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueTooltip content="Edit item">
        <VueButton aria-label="Edit">
          <Pencil
            color="var(--ag-secondary)"
            :size="18"
          />
        </VueButton>
      </VueTooltip>
      <VueTooltip content="Delete item">
        <VueButton
          variant="danger"
          aria-label="Delete"
        >
          <Trash2
            color="var(--ag-white)"
            :size="18"
          />
        </VueButton>
      </VueTooltip>
      <VueTooltip content="Download file">
        <VueButton
          variant="success"
          aria-label="Download"
        >
          <Download
            color="var(--ag-white)"
            :size="18"
          />
        </VueButton>
      </VueTooltip>
      <VueTooltip content="Share content">
        <VueButton
          variant="secondary"
          aria-label="Share"
        >
          <Share2
            color="var(--ag-neutral-700)"
            :size="18"
          />
        </VueButton>
      </VueTooltip>
    </div>

    <div class="mbe4">
      <h3>CSS Shadow Parts Customization</h3>
      <p class="mbs2 mbe3">
        Use CSS Shadow Parts to customize the tooltip's appearance without affecting the component's internal styling.
      </p>
    </div>
    <div class="stacked-mobile mbe4">
      <VueTooltip
        class="custom-tooltip-gradient"
        content="Customized with CSS Shadow Parts!"
        placement="top"
      >
        <VueButton variant="primary">Gradient Tooltip</VueButton>
      </VueTooltip>
      <VueTooltip
        class="custom-tooltip-dark"
        content="Dark theme tooltip"
        placement="top"
      >
        <VueButton variant="secondary">Dark Tooltip</VueButton>
      </VueTooltip>
      <VueTooltip
        class="custom-tooltip-success"
        content="Success style tooltip"
        placement="top"
      >
        <VueButton variant="success">Success Tooltip</VueButton>
      </VueTooltip>
    </div>
  </section>
</template>

<script>
import VueTooltip from "agnosticui-core/tooltip/vue";
import VueButton from "agnosticui-core/button/vue";
import { Pencil, Trash2, Download, Share2 } from "lucide-vue-next";

export default {
  name: "TooltipExamples",
  components: {
    VueTooltip,
    VueButton,
    Pencil,
    Trash2,
    Download,
    Share2,
  },
};
</script>

<style>
/* CSS Shadow Parts customization examples */
.custom-tooltip-gradient::part(ag-tooltip) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 12px;
  padding: 12px 16px;
  font-weight: 600;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  max-width: 250px;
}

.custom-tooltip-gradient::part(ag-tooltip-arrow) {
  background: #667eea;
}

.custom-tooltip-dark::part(ag-tooltip) {
  background: var(--ag-neutral-900);
  color: var(--ag-white);
  border: 2px solid var(--ag-neutral-700);
  border-radius: 8px;
  padding: 10px 14px;
  font-size: var(--ag-font-size-sm);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
}

.custom-tooltip-dark::part(ag-tooltip-arrow) {
  background: var(--ag-neutral-900);
  border: inherit;
}

.custom-tooltip-success::part(ag-tooltip) {
  background: var(--ag-success);
  color: white;
  border-radius: 6px;
  padding: 8px 12px;
  font-weight: 500;
  box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3);
}

.custom-tooltip-success::part(ag-tooltip-arrow) {
  background: var(--ag-success);
}
</style>
