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
      <VueIconButton label="Close" unicode="×" />
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
