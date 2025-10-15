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
      <VueIconButton label="Menu">
        <Menu :size="18" />
      </VueIconButton>
      <VueIconButton label="Close">
        <X :size="18" />
      </VueIconButton>
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
      <h3>Common Use Cases</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueIconButton label="Edit">
        <Edit :size="18" />
      </VueIconButton>
      <VueIconButton label="Delete">
        <Trash2 :size="18" />
      </VueIconButton>
      <VueIconButton label="Download">
        <Download :size="18" />
      </VueIconButton>
      <VueIconButton label="Share">
        <Share2 :size="18" />
      </VueIconButton>
      <VueIconButton label="Print">
        <Printer :size="18" />
      </VueIconButton>
      <VueIconButton label="More options">
        <MoreVertical :size="18" />
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
      <h3>Toggle Button (Pressed State)</h3>
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
      <h3>With Unicode Icons</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueIconButton
        label="Close"
        unicode="×"
      />
      <VueIconButton
        label="Menu"
        unicode="☰"
      />
      <VueIconButton
        label="Add"
        unicode="+"
      />
      <VueIconButton
        label="Remove"
        unicode="−"
      />
    </div>

    <div class="mbe4">
      <h3>Icon Button Group</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueIconButton
        label="Bold"
        :pressed="textBold"
        @click="toggleBold"
      >
        <Bold :size="18" />
      </VueIconButton>
      <VueIconButton
        label="Italic"
        :pressed="textItalic"
        @click="toggleItalic"
      >
        <Italic :size="18" />
      </VueIconButton>
      <VueIconButton
        label="Underline"
        :pressed="textUnderline"
        @click="toggleUnderline"
      >
        <Underline :size="18" />
      </VueIconButton>
      <VueIconButton label="Align left">
        <AlignLeft :size="18" />
      </VueIconButton>
      <VueIconButton label="Align center">
        <AlignCenter :size="18" />
      </VueIconButton>
      <VueIconButton label="Align right">
        <AlignRight :size="18" />
      </VueIconButton>
    </div>

    <div class="mbe4">
      <h3>Social Media Icons</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueIconButton label="Share on Twitter">
        <Twitter :size="18" />
      </VueIconButton>
      <VueIconButton label="Share on Facebook">
        <Facebook :size="18" />
      </VueIconButton>
      <VueIconButton label="Share on LinkedIn">
        <Linkedin :size="18" />
      </VueIconButton>
      <VueIconButton label="Share via Email">
        <Mail :size="18" />
      </VueIconButton>
    </div>

    <div class="mbe4">
      <h3>Navigation Icons</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueIconButton label="Previous">
        <ChevronLeft :size="18" />
      </VueIconButton>
      <VueIconButton label="Next">
        <ChevronRight :size="18" />
      </VueIconButton>
      <VueIconButton label="Up">
        <ChevronUp :size="18" />
      </VueIconButton>
      <VueIconButton label="Down">
        <ChevronDown :size="18" />
      </VueIconButton>
      <VueIconButton label="Home">
        <Home :size="18" />
      </VueIconButton>
      <VueIconButton label="Back">
        <ArrowLeft :size="18" />
      </VueIconButton>
    </div>

    <div class="mbe4">
      <h3>Primary Variant Actions</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueIconButton
        label="Add new item"
        variant="primary"
      >
        <Plus :size="18" />
      </VueIconButton>
      <VueIconButton
        label="Upload file"
        variant="primary"
      >
        <Upload :size="18" />
      </VueIconButton>
      <VueIconButton
        label="Save changes"
        variant="primary"
      >
        <Save :size="18" />
      </VueIconButton>
      <VueIconButton
        label="Send message"
        variant="primary"
      >
        <Send :size="18" />
      </VueIconButton>
    </div>

    <div class="mbe4">
      <h3>Danger Variant Actions</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueIconButton
        label="Delete item"
        variant="danger"
      >
        <Trash2 :size="18" />
      </VueIconButton>
      <VueIconButton
        label="Remove user"
        variant="danger"
      >
        <UserMinus :size="18" />
      </VueIconButton>
      <VueIconButton
        label="Cancel"
        variant="danger"
      >
        <X :size="18" />
      </VueIconButton>
      <VueIconButton
        label="Block"
        variant="danger"
      >
        <Ban :size="18" />
      </VueIconButton>
    </div>
  </section>
</template>

<script>
import VueIconButton from "agnosticui-core/icon-button/vue";
import {
  Settings,
  Search,
  Menu,
  X,
  Heart,
  Star,
  Trash2,
  Edit,
  Download,
  Share2,
  Printer,
  MoreVertical,
  Bell,
  Bookmark,
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Twitter,
  Facebook,
  Linkedin,
  Mail,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  Home,
  ArrowLeft,
  Plus,
  Upload,
  Save,
  Send,
  UserMinus,
  Ban,
  Check,
  AlertTriangle,
} from "lucide-vue-next";

export default {
  name: "IconButtonExamples",
  components: {
    VueIconButton,
    Settings,
    Search,
    Menu,
    X,
    Heart,
    Star,
    Trash2,
    Edit,
    Download,
    Share2,
    Printer,
    MoreVertical,
    Bell,
    Bookmark,
    Bold,
    Italic,
    Underline,
    AlignLeft,
    AlignCenter,
    AlignRight,
    Twitter,
    Facebook,
    Linkedin,
    Mail,
    ChevronLeft,
    ChevronRight,
    ChevronUp,
    ChevronDown,
    Home,
    ArrowLeft,
    Plus,
    Upload,
    Save,
    Send,
    UserMinus,
    Ban,
    Check,
    AlertTriangle,
  },
  data() {
    return {
      isFavorite: false,
      isBookmarked: false,
      notificationsOn: false,
      textBold: false,
      textItalic: false,
      textUnderline: false,
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
    toggleBold() {
      this.textBold = !this.textBold;
    },
    toggleItalic() {
      this.textItalic = !this.textItalic;
    },
    toggleUnderline() {
      this.textUnderline = !this.textUnderline;
    },
  },
};
</script>
