<template>
  <section>
    <!-- Default Badge -->
    <div class="mbe4">
      <VueBadge>Default Badge</VueBadge>
    </div>

    <!-- Variants -->
    <div class="mbe2">
      <h3>Variants</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueBadge variant="default">Default</VueBadge>
      <VueBadge variant="success">Success</VueBadge>
      <VueBadge variant="info">Info</VueBadge>
      <VueBadge variant="warning">Warning</VueBadge>
      <VueBadge variant="danger">Danger</VueBadge>
      <VueBadge variant="neutral">Neutral</VueBadge>
      <VueBadge variant="monochrome">Monochrome</VueBadge>
    </div>

    <!-- Sizes -->
    <div class="mbe2">
      <h3>Sizes</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueBadge size="xs">Extra Small</VueBadge>
      <VueBadge size="sm">Small</VueBadge>
      <VueBadge size="md">Medium</VueBadge>
    </div>

    <!-- Count Badges -->
    <div class="mbe2">
      <h3>Count Badges</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueBadge variant="success">1</VueBadge>
      <VueBadge variant="danger">99+</VueBadge>
      <VueBadge variant="info">23</VueBadge>
    </div>

    <!-- Dot Badges -->
    <div class="mbe2">
      <h3>Dot Badges</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueBadge
        dot
        variant="default"
      ></VueBadge>
      <VueBadge
        dot
        variant="info"
      ></VueBadge>
      <VueBadge
        dot
        variant="success"
      ></VueBadge>
      <VueBadge
        dot
        variant="warning"
      ></VueBadge>
      <VueBadge
        dot
        variant="danger"
      ></VueBadge>
      <VueBadge
        dot
        variant="monochrome"
      ></VueBadge>
    </div>

    <!-- Status Indicators -->
    <div class="mbe2">
      <h3>Status Indicators</h3>
    </div>
    <div
      style="display: flex; flex-direction: column; gap: 1rem;"
      class="mbe4"
    >
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <VueBadge
          dot
          variant="success"
        />
        Online
      </div>
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <VueBadge
          dot
          variant="warning"
        />
        Away
      </div>
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <VueBadge
          dot
          variant="danger"
        />
        Busy
      </div>
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <VueBadge
          dot
          variant="info"
        />
        Connecting
      </div>
    </div>

    <div class="mbe4">
      <h3>Positioning Badges</h3>
    </div>
    <VueAlert
      class="mbe2"
      borderedLeft
      type="info"
    >
      <div class="flex-inline items-center justify-center">
        You can control the badge placement with CSS. To apply absolute positioning to the badge, be sure to apply position: relative on the button.
      </div>
    </VueAlert>
    <div class="mbe4">
      <h4>Inside Buttons (as content)</h4>
    </div>
    <div class="mbe4">
      <VueButton
        bordered
        variant="primary"
        shape="capsule"
      >
        Inbox
        <VueBadge
          variant="danger"
          size="sm"
          style="margin-left: var(--ag-space-1);"
        >99+</VueBadge>
      </VueButton>
    </div>
    <div class="mbs4 mbe4">
      <h4>Absolute Position</h4>
    </div>
    <div class="mbe4">
      <VueButton
        bordered
        variant="primary"
        shape="capsule"
        style="position: relative;"
      >
        Inbox
        <VueBadge
          variant="danger"
          size="sm"
          style="position: absolute; top: -10px; right: -13px;"
        >99+</VueBadge>
      </VueButton>
    </div>
    <!-- Badge on Icon -->
    <div class="mbe4">
      <h3>Badges with Icon</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <div style="position: relative; display: inline-block;">
        <VueIcon
          noFill
          size="16"
        >
          <Bell />
        </VueIcon>
        <VueBadge
          variant="danger"
          size="xs"
          style="position: absolute; top: -6px; right: -7px;"
        >
          3
        </VueBadge>
      </div>
      <div style="position: relative; display: inline-block;">
        <VueIcon
          noFill
          size="20"
        >
          <Bell />
        </VueIcon>
        <VueBadge
          variant="danger"
          size="sm"
          style="position: absolute; top: -7px; right: -9px;"
        >
          3
        </VueBadge>
      </div>
      <div style="position: relative; display: inline-block;">
        <VueIcon
          noFill
          size="24"
        >
          <Bell />
        </VueIcon>
        <VueBadge
          variant="danger"
          size="md"
          style="position: absolute; top: -7px; right: -10px;"
        >
          3
        </VueBadge>
      </div>
      <div
        class="mis2"
        style="position: relative; display: inline-block;"
      >
        <VueIcon
          noFill
          size="16"
        >
          <Bell />
        </VueIcon>
        <VueBadge
          variant="danger"
          size="sm"
          dot
          style="position: absolute; top: 0px; right: -1px;"
        >
        </VueBadge>
      </div>
      <div style="position: relative; display: inline-block;">
        <VueIcon
          noFill
          size="24"
        >
          <Bell />
        </VueIcon>
        <VueBadge
          variant="danger"
          size="md"
          dot
          style="position: absolute; top: -1px; right: -1px;"
        >
        </VueBadge>
      </div>
      <div style="position: relative; display: inline-block;">
        <VueIcon
          noFill
          size="24"
        >
          <Mail />
        </VueIcon>
        <VueBadge
          variant="success"
          size="md"
          dot
          style="position: absolute; top: -3px; right: -4px;"
        >
        </VueBadge>
      </div>
      <div
        class="mis2"
        style="position: relative; display: inline-block;"
      >
        <VueIcon
          noFill
          size="24"
        >
          <Mail />
        </VueIcon>
        <VueBadge
          variant="warning"
          size="md"
          dot
          style="position: absolute; top: -3px; right: -4px;"
        >
        </VueBadge>
      </div>
      <div
        class="mis2"
        style="position: relative; display: inline-block;"
      >
        <VueIcon
          noFill
          size="24"
        >
          <Mail />
        </VueIcon>
        <VueBadge
          variant="danger"
          size="xs"
          style="position: absolute; top: -3px; right: -16px;"
        >99+</VueBadge>
      </div>
      <div
        class="mis3"
        style="position: relative; display: inline-block;"
      >
        <VueIcon
          noFill
          size="24"
        >
          <Mail />
        </VueIcon>
        <VueBadge
          variant="danger"
          size="sm"
          style="position: absolute; top: -9px; right: -30px;"
        >99+</VueBadge>
      </div>
    </div>
    <div class="mbe4">
      <h3>Button Icon with Badge</h3>
    </div>
    <div style="position: relative; display: inline-block;">
      <VueButton
        bordered
        variant="info"
        shape="rounded-square"
        style="position: relative;"
      >
        <VueIcon
          noFill
          size="24"
        >
          <ShoppingCart />
        </VueIcon>
        <VueBadge
          variant="danger"
          size="sm"
          style="position: absolute; top: -9px; right: -13px;"
        >3</VueBadge>
      </VueButton>
    </div>
    <div
      class="mis8"
      style="position: relative; display: inline-block;"
    >
      <VueButton
        bordered
        variant="info"
        shape="rounded-square"
        style="position: relative;"
      >
        <VueIcon
          noFill
          size="24"
        >
          <ShoppingCart />
        </VueIcon>
        <VueBadge
          variant="default"
          size="sm"
          style="position: absolute; top: -9px; right: -13px;"
        >3</VueBadge>
      </VueButton>
    </div>
    <div
      class="mis8"
      style="position: relative; display: inline-block;"
    >
      <VueButton
        bordered
        variant="info"
        shape="rounded-square"
        style="position: relative;"
      >
        <VueIcon
          noFill
          size="24"
        >
          <ShoppingCart />
        </VueIcon>
        <VueBadge
          variant="success"
          size="md"
          dot
          style="position: absolute; top: -6px; right: -7px;"
        ></VueBadge>
      </VueButton>
    </div>
    <!-- CSS Parts Customization -->
    <div class="mbe4">
      <h3>CSS Parts Customization</h3>
      <p
        class="mbe2"
        style="color: var(--ag-text-secondary); font-size: 0.875rem;"
      >
        Customize badge appearance using CSS Shadow Parts without breaking encapsulation.
      </p>
    </div>
    <div class="stacked-mobile mbe4">
      <VueBadge class="custom-gradient-badge">Gradient Badge</VueBadge>
      <VueBadge class="custom-outline-badge">Outline Badge</VueBadge>
      <VueBadge class="custom-minimal-badge">Minimal Badge</VueBadge>
    </div>
  </section>
</template>

<script>
import { VueBadge } from "agnosticui-core/badge/vue";
import VueButton from "agnosticui-core/button/vue";
import { VueIcon } from "agnosticui-core/icon/vue";
import { Mail, Bell, Info, ShoppingCart } from "lucide-vue-next";
import VueAlert from "agnosticui-core/alert/vue";

export default {
  name: "BadgeExamples",
  components: {
    VueBadge,
    VueButton,
    VueIcon,
    Bell,
    Info,
    Mail,
    ShoppingCart,
    VueAlert,
  },
};
</script>

<style scoped>
/* CSS Parts customization examples */

/* Gradient badge style */
.custom-gradient-badge::part(ag-badge) {
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-weight: 600;
  padding: 0.5rem 1rem;
}

/* Outline badge */
.custom-outline-badge::part(ag-badge) {
  background: transparent;
  color: #764ba2;
  border: 2px solid #764ba2;
}

/* Minimal badge */
.custom-minimal-badge::part(ag-badge) {
  background: var(--ag-background-subtle);
  color: var(--ag-text-secondary);
  border-radius: 6px;
  font-size: 0.85rem;
  padding: 0.25rem 0.75rem;
}
</style>
