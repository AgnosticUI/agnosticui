<template>
  <section>
    <div class="mbe4">
      <h3>Basic Icon Buttons</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueIconButton label="Settings">
        <Settings :size="18" />
      </VueIconButton>
      <VueIconButton label="Search">
        <Search :size="18" />
      </VueIconButton>
      <VueIconButton label="Edit">
        <Edit :size="18" />
      </VueIconButton>
      <VueIconButton label="Delete">
        <Trash2 :size="18" />
      </VueIconButton>
      <VueIconButton
        label="Close"
        unicode="×"
      />
    </div>

    <div class="mbe4">
      <h3>Sizes</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueIconButton
        label="Extra Small"
        size="xs"
      >
        <Heart :size="14" />
      </VueIconButton>
      <VueIconButton
        label="Small"
        size="sm"
      >
        <Heart :size="16" />
      </VueIconButton>
      <VueIconButton
        label="Medium"
        size="md"
      >
        <Heart :size="18" />
      </VueIconButton>
      <VueIconButton
        label="Large"
        size="lg"
      >
        <Heart :size="20" />
      </VueIconButton>
      <VueIconButton
        label="Extra Large"
        size="xl"
      >
        <Heart :size="24" />
      </VueIconButton>
    </div>

    <div class="mbe4">
      <h3>Variants</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueIconButton
        label="Ghost (default)"
        variant="ghost"
      >
        <Star :size="18" />
      </VueIconButton>
      <VueIconButton
        label="Primary"
        variant="primary"
      >
        <Star :size="18" />
      </VueIconButton>
      <VueIconButton
        label="Secondary"
        variant="secondary"
      >
        <Star :size="18" />
      </VueIconButton>
      <VueIconButton
        label="Success"
        variant="success"
      >
        <Check :size="18" />
      </VueIconButton>
      <VueIconButton
        label="Warning"
        variant="warning"
      >
        <AlertTriangle :size="18" />
      </VueIconButton>
      <VueIconButton
        label="Danger"
        variant="danger"
      >
        <Trash2 :size="18" />
      </VueIconButton>
    </div>

    <div class="mbe4">
      <h3>States</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueIconButton label="Normal">
        <Bell :size="18" />
      </VueIconButton>
      <VueIconButton
        label="Disabled"
        disabled
      >
        <Bell :size="18" />
      </VueIconButton>
      <VueIconButton
        label="Loading"
        loading
      >
        <Bell :size="18" />
      </VueIconButton>
      <VueIconButton
        label="Pressed"
        :pressed="true"
      >
        <Bell :size="18" />
      </VueIconButton>
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
          :size="18"
          :fill="isFavorite ? 'currentColor' : 'none'"
        />
      </VueIconButton>
      <VueIconButton
        label="Toggle bookmark"
        :pressed="isBookmarked"
        @click="toggleBookmark"
      >
        <Bookmark
          :size="18"
          :fill="isBookmarked ? 'currentColor' : 'none'"
        />
      </VueIconButton>
      <VueIconButton
        label="Toggle notifications"
        :pressed="notificationsOn"
        @click="toggleNotifications"
      >
        <Bell
          :size="18"
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
        <Heart :size="18" />
      </VueIconButton>
      <VueIconButton
        class="custom-gradient-button"
        label="Gradient star"
      >
        <Star :size="18" />
      </VueIconButton>
      <VueIconButton
        class="custom-gradient-button"
        label="Gradient bookmark"
      >
        <Bookmark :size="18" />
      </VueIconButton>
    </div>

    <div class="stacked-mobile mbe4">
      <VueIconButton
        class="custom-neon-button"
        label="Neon effect"
      >
        <Zap :size="18" />
      </VueIconButton>
      <VueIconButton
        class="custom-neon-button"
        label="Neon bell"
      >
        <Bell :size="18" />
      </VueIconButton>
      <VueIconButton
        class="custom-neon-button"
        label="Neon alert"
      >
        <AlertTriangle :size="18" />
      </VueIconButton>
    </div>

    <div class="stacked-mobile mbe4">
      <VueIconButton
        class="custom-outlined-button"
        label="Outlined settings"
      >
        <Settings :size="18" />
      </VueIconButton>
      <VueIconButton
        class="custom-outlined-button"
        label="Outlined search"
      >
        <Search :size="18" />
      </VueIconButton>
      <VueIconButton
        class="custom-outlined-button"
        label="Outlined edit"
      >
        <Edit :size="18" />
      </VueIconButton>
    </div>

    <div class="stacked-mobile mbe4">
      <VueIconButton
        class="custom-minimal-button"
        label="Minimal delete"
      >
        <Trash2 :size="18" />
      </VueIconButton>
      <VueIconButton
        class="custom-minimal-button"
        label="Minimal close"
        unicode="×"
      />
      <VueIconButton
        class="custom-minimal-button"
        label="Minimal check"
      >
        <Check :size="18" />
      </VueIconButton>
    </div>
  </section>
</template>

<script>
import VueIconButton from "agnosticui-core/icon-button/vue";
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

/* Neon glow effect */
.custom-neon-button::part(ag-icon-button) {
  background: #1a1a2e;
  color: #0ff;
  border: 2px solid #0ff;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 0 10px #0ff, 0 0 20px #0ff,
    inset 0 0 10px rgba(0, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.custom-neon-button::part(ag-icon-button):hover {
  box-shadow: 0 0 20px #0ff, 0 0 40px #0ff,
    inset 0 0 20px rgba(0, 255, 255, 0.3);
  text-shadow: 0 0 10px #0ff;
}

.custom-neon-button::part(ag-icon-has-slotted),
.custom-neon-button::part(ag-icon-unicode) {
  filter: drop-shadow(0 0 5px #0ff);
}

/* Outlined style */
.custom-outlined-button::part(ag-icon-button) {
  background: transparent;
  color: var(--ag-primary);
  border: 2px solid var(--ag-primary);
  border-radius: 50%;
  padding: 10px;
  transition: all 0.2s ease;
}

.custom-outlined-button::part(ag-icon-button):hover {
  background: var(--ag-primary);
  color: white;
  transform: rotate(15deg);
}

.custom-outlined-button::part(ag-icon-button):active {
  transform: rotate(0deg) scale(0.95);
}

/* Minimal style with left border accent */
.custom-minimal-button::part(ag-icon-button) {
  background: var(--ag-background-secondary);
  color: var(--ag-text-primary);
  border-radius: 4px;
  border-left: 4px solid var(--ag-danger);
  padding: 8px 12px;
  transition: all 0.2s ease;
}

.custom-minimal-button::part(ag-icon-button):hover {
  background: var(--ag-background-tertiary);
  border-left-color: var(--ag-danger-dark);
  padding-left: 16px;
}

.custom-minimal-button::part(ag-icon-has-slotted),
.custom-minimal-button::part(ag-icon-unicode) {
  color: var(--ag-danger);
  transition: transform 0.2s ease;
}

.custom-minimal-button:hover::part(ag-icon-has-slotted),
.custom-minimal-button:hover::part(ag-icon-unicode) {
  transform: scale(1.1);
}
</style>
