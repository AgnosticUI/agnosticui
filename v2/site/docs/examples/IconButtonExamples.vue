<template>
  <section>
    <div class="mbe4">
      <h3>Basic Icon Buttons</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueIconButton label="Settings">
        <Settings
          :size="18"
          class="expand"
        />
      </VueIconButton>
      <VueIconButton label="Search">
        <Search
          :size="18"
          class="expand"
        />
      </VueIconButton>
      <VueIconButton label="Edit">
        <Edit
          :size="18"
          class="expand"
        />
      </VueIconButton>
      <VueIconButton label="Delete">
        <Trash2
          :size="18"
          class="expand"
        />
      </VueIconButton>
    </div>
    <div class="flex-inline mbe4">
      <h3>Variants</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueIconButton
        label="Ghost (default)"
        variant="ghost"
      >
        <Star
          :size="18"
          class="expand"
        />
      </VueIconButton>
      <VueIconButton
        label="Primary"
        variant="primary"
      >
        <Star class="expand" />
      </VueIconButton>
      <VueIconButton
        label="Secondary"
        variant="secondary"
      >
        <Star class="expand" />
      </VueIconButton>
      <VueIconButton
        label="Success"
        variant="success"
      >
        <Check class="expand" />
      </VueIconButton>
      <VueIconButton
        label="Warning"
        variant="warning"
      >
        <AlertTriangle class="expand" />
      </VueIconButton>
      <VueIconButton
        label="Danger"
        variant="danger"
      >
        <Trash2 class="expand" />
      </VueIconButton>
      <VueIconButton
        label="Monochrome"
        variant="monochrome"
      >
        <Star class="expand" />
      </VueIconButton>
    </div>

    <div class="mbe4">
      <h3>Scaled Icons</h3>
      <p class="mbe1">Project raw SVGs directly into the button and prefer em-based sizing so icons scale with the button size.</p>
      <ul>
        <li>Place the SVG directly inside <code>&lt;ag-icon-button&gt;</code> (don't wrap it).</li>
        <li>
          Prefer one of two patterns for slotted SVGs:
          <ul>
            <li>em-based sizing so the SVG scales with the icon font-size: <code>ag-icon-button::slotted(svg) { width: 1em; height: 1em; }</code></li>
            <li>or let the SVG fill its container: <code>width: 100%; height: 100%;</code></li>
          </ul>
        </li>
        <li>Adjust per-size tokens when needed: <code>--ag-icon-button-font-size-*</code> (icon) and <code>--ag-icon-button-*</code> (button dimensions).</li>
      </ul>
      <details>
        <summary>Advanced</summary>
        <p>The icon container uses <code>1em</code> by default and follows the per-size token values. If a projected SVG sets explicit pixel <code>width/height</code>, the SVG will honor those values. Prefer passing a <code>size</code> prop to icon libraries (e.g. lucide) when available.</p>
        <p>Example overrides: <code>ag-icon-button { --ag-icon-button-font-size-md: 1rem }</code> or <code>ag-icon-button[size="xl"] { --ag-icon-button-font-size-xl: 1.25rem; --ag-icon-button-xl: 3.5rem; }</code></p>
      </details>
    </div>
    <div class="mbe4">
      <VueIconButton
        label="Extra Small"
        size="xs"
      >
        <Heart
          :size="14"
          class="expand"
        />
      </VueIconButton>
      <VueIconButton
        label="Small"
        size="sm"
      >
        <Heart class="expand" />
      </VueIconButton>
      <VueIconButton
        label="Medium"
        size="md"
      >
        <Heart class="expand" />
      </VueIconButton>
      <VueIconButton
        label="Large"
        size="lg"
      >
        <Heart class="expand" />
      </VueIconButton>
      <VueIconButton
        label="Extra Large"
        size="xl"
      >
        <Heart class="expand" />
      </VueIconButton>
    </div>

    <div class="mbe4">
      <VueIconButton
        label="Extra Small"
        variant="monochrome"
        size="xs"
        class="mie4"
      >
        <Star class="expand" />
      </VueIconButton>
      <VueIconButton
        label="Small"
        variant="monochrome"
        size="sm"
        class="mie4"
      >
        <Star class="expand" />
      </VueIconButton>
      <VueIconButton
        label="Medium"
        variant="monochrome"
        size="md"
        class="mie4"
      >
        <Star class="expand" />
      </VueIconButton>
      <VueIconButton
        label="Large"
        variant="monochrome"
        size="lg"
        class="mie4"
      >
        <Star class="expand" />
      </VueIconButton>
      <VueIconButton
        label="Extra Large"
        variant="monochrome"
        size="xl"
      >
        <Star class="expand" />
      </VueIconButton>
    </div>
    <div class="mbe4">
      <h3>Scaled Icons</h3>
      <p class="mbe1">Project raw SVGs directly into the button and prefer em-based sizing so icons scale with the button size.</p>
      <ul>
        <li>Place the SVG directly inside <code>&lt;ag-icon-button&gt;</code> (don't wrap it).</li>
        <li>Make slotted SVGs follow the icon font-size: <code>ag-icon-button::slotted(svg){width:1em;height:1em}</code> or ensure the SVG fills the icon container by setting <code>width:100%; height:100%</code> on the SVG (via attributes or CSS).</li>
        <li>Adjust per-size tokens when needed: <code>--ag-icon-button-font-size-*</code> (icon) and <code>--ag-icon-button-*</code> (button dimensions).</li>
      </ul>

      <details>
        <summary>Advanced</summary>
        <p>Example overrides: <code>ag-icon-button { --ag-icon-button-font-size-md: 1rem }</code> or <code>ag-icon-button[size="xl"] { --ag-icon-button-font-size-xl: 1.25rem; --ag-icon-button-xl: 3.5rem; }</code></p>
      </details>
    </div>

    <div class="mbe4">
      <h3>Toggle Buttons</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueIconButton
        label="Toggle favorite"
        :pressed="isFavorite"
        @click="toggleFavorite"
      >
        <Heart
          :fill="isFavorite ? 'currentColor' : 'none'"
          class="expand"
        />
      </VueIconButton>
      <VueIconButton
        label="Toggle bookmark"
        :pressed="isBookmarked"
        @click="toggleBookmark"
      >
        <Bookmark
          class="expand"
          :fill="isBookmarked ? 'currentColor' : 'none'"
        />
      </VueIconButton>
      <VueIconButton
        label="Toggle notifications"
        :pressed="notificationsOn"
        @click="toggleNotifications"
      >
        <Bell
          class="expand"
          :fill="notificationsOn ? 'currentColor' : 'none'"
        />
      </VueIconButton>
    </div>

    <div class="mbe4">
      <h3>CSS Parts Customization</h3>
      <p
        class="mbe2"
        style="color: var(--ag-text-secondary); font-size: 0.875rem;"
      >
        Customize icon button appearance using CSS Shadow Parts without breaking encapsulation. The following are meant solely to show how to utilize CSS shadow parts to create custom toggle styles. They are NOT meant to represent best practices or good taste in toggle design!
      </p>
    </div>
    <div class="stacked-mobile mbe4">
      <VueIconButton
        class="custom-gradient-button"
        label="Gradient button"
      >
        <Heart class="expand" />
      </VueIconButton>
      <VueIconButton
        class="custom-gradient-button"
        label="Gradient star"
      >
        <Star class="expand" />
      </VueIconButton>
      <VueIconButton
        class="custom-gradient-button"
        label="Gradient bookmark"
      >
        <Bookmark class="expand" />
      </VueIconButton>
    </div>
  </section>
</template>

<script>
import VueIconButton from "agnosticui-core/icon-button/vue";
import { VueIcon } from "agnosticui-core/icon/vue";
import {
  Settings,
  Search,
  Edit,
  Trash2,
  Heart,
  Star,
  Check,
  AlertTriangle,
  Bell,
  Bookmark,
  Zap,
} from "lucide-vue-next";

export default {
  name: "IconButtonExamples",
  components: {
    VueIcon,
    VueIconButton,
    Settings,
    Search,
    Edit,
    Trash2,
    Heart,
    Star,
    Check,
    AlertTriangle,
    Bell,
    Bookmark,
    Zap,
  },
  data() {
    return {
      isFavorite: false,
      isBookmarked: false,
      notificationsOn: false,
    };
  },
  methods: {
    toggleFavorite() {
      this.isFavorite = !this.isFavorite;
    },
    toggleBookmark() {
      this.isBookmarked = !this.isBookmarked;
    },
    toggleNotifications() {
      this.notificationsOn = !this.notificationsOn;
    },
  },
};
</script>

<style scoped>
/* Ensure all SVGs expand to full width/height */
.expand {
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
}

/* CSS Parts customization examples */

/* Gradient button style */
.custom-gradient-button::part(ag-icon-button) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 12px;
  padding: 12px;
  transition: all 0.3s ease;
}

.custom-gradient-button::part(ag-icon-button):hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(102, 126, 234, 0.4);
}

.custom-gradient-button::part(ag-icon-button):active {
  transform: translateY(0);
  box-shadow: 0 4px 8px rgba(102, 126, 234, 0.3);
}
</style>
