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
      <VueBadge dot variant="default"></VueBadge>
      <VueBadge dot variant="info"></VueBadge>
      <VueBadge dot variant="success"></VueBadge>
      <VueBadge dot variant="warning"></VueBadge>
      <VueBadge dot variant="danger"></VueBadge>
    </div>

    <!-- Status Indicators -->
    <div class="mbe2">
      <h3>Status Indicators</h3>
    </div>
    <div class="mbe4" style="display: flex; flex-direction: column; gap: 1rem;">
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <VueBadge dot variant="success" />
        Online
      </div>
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <VueBadge dot variant="warning" />
        Away
      </div>
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <VueBadge dot variant="danger" />
        Busy
      </div>
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <VueBadge dot variant="info" />
        Connecting
      </div>
    </div>

    <!-- Badge on Button -->
    <div class="mbe2">
      <h3>Badge on Button</h3>
    </div>
    <div class="mbe4">
      <VueButton bordered variant='primary' shape='capsule'>
        Notifications
        <VueBadge variant="danger" size="sm" style="margin-left: var(--ag-space-1);">99+</VueBadge>
      </VueButton>
    </div>

    <!-- Badge on Icon -->
    <div class="mbe2">
      <h3>Badge on Icon</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <div style="position: relative; display: inline-block;">
        <VueIcon size="16">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
          </svg>
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
        <VueIcon size="20">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
          </svg>
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
        <VueIcon size="24">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
          </svg>
        </VueIcon>
        <VueBadge
          variant="danger"
          size="md"
          style="position: absolute; top: -7px; right: -10px;"
        >
          3
        </VueBadge>
      </div>
    </div>

    <!-- CSS Parts Customization -->
    <div class="mbe4">
      <h3>CSS Parts Customization</h3>
      <p class="mbe2" style="color: var(--ag-text-secondary); font-size: 0.875rem;">
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

export default {
  name: "BadgeExamples",
  components: { VueBadge, VueButton, VueIcon },
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
