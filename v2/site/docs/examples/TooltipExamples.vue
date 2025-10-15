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
            color="var(--ag-white)"
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
  </section>
</template>

<script>
import VueTooltip from "agnosticui-core/tooltip/vue";
import VueButton from "agnosticui-core/button/vue";
import {
  Pencil,
  Trash2,
  Download,
  Share2,
} from "lucide-vue-next";

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
