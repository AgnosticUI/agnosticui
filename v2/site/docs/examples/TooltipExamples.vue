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
      <h3>Placement Variants</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueTooltip
        content="Top start alignment"
        placement="top-start"
      >
        <VueButton>Top Start</VueButton>
      </VueTooltip>
      <VueTooltip
        content="Top end alignment"
        placement="top-end"
      >
        <VueButton>Top End</VueButton>
      </VueTooltip>
      <VueTooltip
        content="Bottom start alignment"
        placement="bottom-start"
      >
        <VueButton>Bottom Start</VueButton>
      </VueTooltip>
      <VueTooltip
        content="Bottom end alignment"
        placement="bottom-end"
      >
        <VueButton>Bottom End</VueButton>
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
        content="Focus on me"
        trigger="focus"
      >
        <VueButton>Focus trigger</VueButton>
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
      <h3>Distance and Skidding</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueTooltip
        content="Default distance (8px)"
        placement="top"
      >
        <VueButton>Default</VueButton>
      </VueTooltip>
      <VueTooltip
        content="More distance from trigger"
        placement="top"
        :distance="20"
      >
        <VueButton>Distance: 20px</VueButton>
      </VueTooltip>
      <VueTooltip
        content="Skidding offset"
        placement="top"
        :skidding="30"
      >
        <VueButton>Skidding: 30px</VueButton>
      </VueTooltip>
    </div>

    <div class="mbe4">
      <h3>Disabled State</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueTooltip
        content="This tooltip is active"
        :disabled="false"
      >
        <VueButton>Active tooltip</VueButton>
      </VueTooltip>
      <VueTooltip
        content="This tooltip won't show"
        :disabled="true"
      >
        <VueButton>Disabled tooltip</VueButton>
      </VueTooltip>
      <VueTooltip
        content="Dynamically controlled"
        :disabled="tooltipDisabled"
      >
        <VueButton @click="tooltipDisabled = !tooltipDisabled">
          Toggle disabled ({{ tooltipDisabled ? 'OFF' : 'ON' }})
        </VueButton>
      </VueTooltip>
    </div>

    <div class="mbe4">
      <h3>With Icons</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueTooltip content="More information">
        <VueButton>
          <div class="flex-inline items-center justify-center">
            <Info
              color="var(--ag-white)"
              :size="18"
              class="mie2"
            />
            Info Button
          </div>
        </VueButton>
      </VueTooltip>
      <VueTooltip content="Help documentation">
        <VueButton variant="secondary">
          <div class="flex-inline items-center justify-center">
            <HelpCircle
              color="var(--ag-neutral-700)"
              :size="18"
              class="mie2"
            />
            Help
          </div>
        </VueButton>
      </VueTooltip>
      <VueTooltip content="Settings panel">
        <VueButton variant="primary">
          <div class="flex-inline items-center justify-center">
            <Settings
              color="var(--ag-white)"
              :size="18"
              class="mie2"
            />
            Settings
          </div>
        </VueButton>
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

    <div class="mbe4">
      <h3>Event Handling</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueTooltip
        content="Hover to see events"
        @show="handleShow"
        @hide="handleHide"
      >
        <VueButton>Hover me</VueButton>
      </VueTooltip>
      <div
        v-if="eventMessage"
        class="mbs3"
        style="padding: var(--ag-space-3); background: var(--ag-neutral-100); border-radius: var(--ag-radius-md);"
      >
        {{ eventMessage }}
      </div>
    </div>

    <div class="mbe4">
      <h3>Programmatic Control</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueTooltip
        ref="programmaticTooltip"
        content="Controlled programmatically"
      >
        <VueButton>Controlled tooltip</VueButton>
      </VueTooltip>
      <VueButton
        variant="secondary"
        @click="showTooltip"
      >
        Show Tooltip
      </VueButton>
      <VueButton
        variant="secondary"
        @click="hideTooltip"
      >
        Hide Tooltip
      </VueButton>
      <VueButton
        variant="secondary"
        @click="toggleTooltip"
      >
        Toggle Tooltip
      </VueButton>
    </div>

    <div class="mbe4">
      <h3>With Different Elements</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueTooltip content="Tooltip on a link">
        <a
          href="#"
          style="color: var(--ag-primary); text-decoration: underline;"
          @click.prevent
        >
          Hover this link
        </a>
      </VueTooltip>
      <VueTooltip content="Tooltip on text">
        <span
          style="cursor: help; text-decoration: underline dotted;"
          tabindex="0"
        >
          Abbreviated text
        </span>
      </VueTooltip>
      <VueTooltip content="Tooltip on an icon">
        <button
          style="background: none; border: none; cursor: pointer; padding: var(--ag-space-2);"
          aria-label="Information"
        >
          <Info
            color="var(--ag-primary)"
            :size="24"
          />
        </button>
      </VueTooltip>
    </div>

    <div class="mbe4">
      <h3>Long Content</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueTooltip content="This is a longer tooltip that demonstrates how the component handles multiple lines of text. The max-width is set to 300px by default.">
        <VueButton>Long tooltip content</VueButton>
      </VueTooltip>
      <VueTooltip content="Tooltips automatically wrap text when it exceeds the maximum width, ensuring readability and proper display across different viewport sizes.">
        <VueButton variant="primary">Multi-line tooltip</VueButton>
      </VueTooltip>
    </div>
  </section>
</template>

<script>
import VueTooltip from "agnosticui-core/tooltip/vue";
import VueButton from "agnosticui-core/button/vue";
import {
  Info,
  HelpCircle,
  Settings,
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
    Info,
    HelpCircle,
    Settings,
    Pencil,
    Trash2,
    Download,
    Share2,
  },
  data() {
    return {
      tooltipDisabled: false,
      eventMessage: "",
    };
  },
  methods: {
    handleShow() {
      this.eventMessage = "Tooltip shown!";
      setTimeout(() => {
        this.eventMessage = "";
      }, 2000);
    },
    handleHide() {
      this.eventMessage = "Tooltip hidden!";
      setTimeout(() => {
        this.eventMessage = "";
      }, 2000);
    },
    showTooltip() {
      this.$refs.programmaticTooltip?.show();
    },
    hideTooltip() {
      this.$refs.programmaticTooltip?.hide();
    },
    toggleTooltip() {
      this.$refs.programmaticTooltip?.toggle();
    },
  },
};
</script>
