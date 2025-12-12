<script setup lang="ts">
import { ref } from "vue";
import { VueAlert } from "./ag/Alert/vue";
import { VueAspectRatio } from "./ag/AspectRatio/vue";
import { VueAvatar } from "./ag/Avatar/vue";
import { VueBadge } from "./ag/Badge/vue";
import { VueBadgeFx } from "./ag/BadgeFx/vue";
import { VueBreadcrumb } from "./ag/Breadcrumb/vue";
import { VueButton } from "./ag/Button/vue";
import { VueButtonFx } from "./ag/ButtonFx/vue";
import { VueCard } from "./ag/Card/vue";
import { VueCheckbox } from "./ag/Checkbox/vue";
import { VueCollapsible } from "./ag/Collapsible/vue";
import { VueCombobox } from "./ag/Combobox/vue";
import { VueCopyButton } from "./ag/CopyButton/vue";
import VueDialog, { VueDialogHeader, VueDialogFooter } from "./ag/Dialog/vue";
import { VueDivider } from "./ag/Divider/vue";
import VueDrawer from "./ag/Drawer/vue";
import { VueEmptyState } from "./ag/EmptyState/vue";
import { VueFieldset } from "./ag/Fieldset/vue";
import { VueFlexRow, VueFlexCol } from "./ag/Flex/vue";
import { VueHeader } from "./ag/Header/vue";
import { VueIcon } from "./ag/Icon/vue";
import { VueIconButton } from "./ag/IconButton/vue";
import { VueIconButtonFx } from "./ag/IconButtonFx/vue";
import { VueImage } from "./ag/Image/vue";
import { VueInput } from "./ag/Input/vue";
import { VueIntlFormatter } from "./ag/IntlFormatter/vue";
import { VueKbd } from "./ag/Kbd/vue";
import { VueLink } from "./ag/Link/vue";
import { VueLoader } from "./ag/Loader/vue";
import { VueMark } from "./ag/Mark/vue";
import VueMenu, { VueMenuItem, VueMenuSeparator } from "./ag/Menu/vue";
import { VueMessageBubble } from "./ag/MessageBubble/vue";
import { VuePagination } from "./ag/Pagination/vue";
import { VuePopover } from "./ag/Popover/vue";
import { VueProgress } from "./ag/Progress/vue";
import { VueProgressRing } from "./ag/ProgressRing/vue";
import { VueRadio } from "./ag/Radio/vue";
import { VueRating } from "./ag/Rating/vue";
import { VueScrollProgress } from "./ag/ScrollProgress/vue";
import { VueScrollToButton } from "./ag/ScrollToButton/vue";
import { VueSelect } from "./ag/Select/vue";
import { VueSidebar } from "./ag/Sidebar/vue";
import { VueSidebarNav, VueSidebarNavItem } from "./ag/SidebarNav/vue";
import { VueSkeleton } from "./ag/SkeletonLoader/vue";
import { VueSlider } from "./ag/Slider/vue";
import { VueSpinner } from "./ag/Spinner/vue";
import VueTabs, { VueTab, VueTabPanel } from "./ag/Tabs/vue";
import { VueTag } from "./ag/Tag/vue";
import { VueTimeline, VueTimelineItem } from "./ag/Timeline/vue";
import { VueToast } from "./ag/Toast/vue";
import { VueToggle } from "./ag/Toggle/vue";
import VueTooltip from "./ag/Tooltip/vue";
import {
  CheckCircle2,
  Info,
  AlertTriangle,
  XCircle,
  Settings,
  Search,
  Edit,
  Trash2,
  Star,
  Heart,
  Download,
  Home,
  ChevronRight,
  User,
  Menu as MenuIcon,
  MessageCircle,
  Send,
  AlertCircle,
  Plus,
  Upload,
  Share2,
  Filter,
  MoreVertical,
  Pencil,
  Folder,
  FileText,
  ShoppingCart,
  ArrowRight,
  Inbox,
  BarChart3,
  Lock,
  Sparkles,
  Rocket,
} from "lucide-vue-next";

defineProps<{ msg: string }>();

// Component state
const checkboxValue = ref(true);
const radioValue = ref("option1");
const inputValue = ref("Hello AgnosticUI");
const selectValue = ref("vue");
const sliderValue = ref(50);
const toggleValue = ref(false);
const ratingValue = ref(3);
const comboboxValue = ref("");

const comboboxOptions = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "angular", label: "Angular" },
  { value: "svelte", label: "Svelte" },
  { value: "lit", label: "Lit" },
];

// Event handlers
const handleSliderInput = (detail: { value: number | [number, number] }) => {
  sliderValue.value = detail.value as number;
};

// ScrollProgress toggles
const showScrollBar = ref(true);

// Sidebar state
const sidebarOpen = ref(true);
const sidebarCollapsed = ref(false);
const sidebarRef = ref<any>(null);

// Breadcrumb data
const breadcrumbItems = [
  { label: "Home", href: "#" },
  { label: "Components", href: "#components" },
  { label: "Kitchen Sink", href: "#kitchen-sink" },
];

const handleBreadcrumbClick = (event: {
  item: { label: string; href: string };
}) => {
  console.log(`Breadcrumb clicked: ${event.item.label}`);
};

// Collapsible state
const collapsibleExpanded = ref(false);

// CopyButton state
const copyInputValue = ref("https://agnosticui.com");

// Menu state
const lastMenuEvent = ref("");

// Tabs state
const activeTab = ref(0);

// Dialog state
const isDialogOpen = ref(false);

// Drawer state
const isDrawerOpen = ref(false);

// Toast state
const showToast = ref(false);

// MessageBubble state
const messages = ref([
  {
    id: 1,
    from: "them" as const,
    text: "Hey, how are you?",
    author: "Alice",
    time: "10:30 AM",
  },
  {
    id: 2,
    from: "me" as const,
    text: "I'm doing great, thanks!",
    author: "Me",
    time: "10:31 AM",
  },
]);

// Pagination state
const currentPage = ref(1);

const toggleSidebar = async (event: Event) => {
  console.log("=== toggleSidebar CALLED ===");
  console.log("Event:", event);
  console.log("Event target:", event.target);

  const target = event.target as HTMLElement;
  console.log("Target element:", target);
  console.log("Target tagName:", target.tagName);

  const sidebar = target.closest("ag-sidebar") as any;
  console.log("Found sidebar element:", sidebar);
  console.log("Sidebar tagName:", sidebar?.tagName);
  console.log("Sidebar constructor:", sidebar?.constructor?.name);
  console.log("Sidebar prototype:", Object.getPrototypeOf(sidebar));

  // Wait for custom element to be upgraded
  if (sidebar && !sidebar.toggleCollapse) {
    console.log("Waiting for customElements.whenDefined('ag-sidebar')...");
    await customElements.whenDefined("ag-sidebar");
    console.log("ag-sidebar is now defined!");
  }

  console.log(
    "Sidebar has toggleCollapse after wait?",
    typeof sidebar?.toggleCollapse
  );
  console.log("All sidebar properties:", Object.getOwnPropertyNames(sidebar));
  console.log(
    "Sidebar methods from prototype:",
    Object.getOwnPropertyNames(Object.getPrototypeOf(sidebar))
  );

  if (sidebar && sidebar.toggleCollapse) {
    console.log("CALLING sidebar.toggleCollapse()");
    sidebar.toggleCollapse();
    console.log("After toggleCollapse - collapsed:", sidebar.collapsed);
  } else {
    console.error("ERROR: Could not find sidebar or toggleCollapse method!");
    console.error("Available methods:", Object.keys(sidebar));
  }
};
</script>

<template>
  <div class="kitchen-sink">
    <h1>{{ msg }}</h1>
    <p class="subtitle">A comprehensive showcase of AgnosticUI Vue components</p>

    <!-- Avatars -->
    <section class="component-section">
      <h2>Avatars</h2>
      <VueFlexRow
        gap="lg"
        align="center"
      >
        <VueAvatar
          img-src="https://i.pravatar.cc/150?img=1"
          img-alt="User 1"
        />
        <VueAvatar
          text="AB"
          size="sm"
        />
        <VueAvatar text="CD" />
        <VueAvatar
          text="EF"
          size="lg"
        />
        <VueAvatar
          text="XL"
          size="xl"
        />
        <VueAvatar
          img-src="https://i.pravatar.cc/150?img=4"
          img-alt="User 4"
        />
        <VueAvatar
          variant="success"
          text="OK"
        />
        <VueAvatar
          variant="info"
          text="??"
        />
        <VueAvatar
          variant="warning"
          text="!!"
        />
        <VueAvatar
          variant="error"
          text="XX"
        />
      </VueFlexRow>
    </section>

    <VueDivider />

    <section class="component-section">
      <VueFlexRow gap="1rem">
        <div class="demo-box">Item 1</div>
        <div class="demo-box">Item 2</div>
        <div class="demo-box">Item 3</div>
      </VueFlexRow>

      <VueFlexCol gap="1rem">
        <div class="demo-box">Row 1</div>
        <div class="demo-box">Row 2</div>
        <div class="demo-box">Row 3</div>
      </VueFlexCol>

      <VueFlexRow justify="space-between">
        <div class="demo-box demo-box-primary">Header Left</div>
        <div class="demo-box demo-box-primary">Header Right</div>
      </VueFlexRow>
    </section>

    <!-- Badges -->
    <section class="component-section">
      <h2>Badges</h2>
      <VueFlexRow
        gap="lg"
        align="center"
        wrap="wrap"
      >
        <VueBadge class="mis1">Default</VueBadge>
        <VueBadge
          class="mis1"
          variant="success"
        >Success</VueBadge>
        <VueBadge
          class="mis1"
          variant="info"
        >Info</VueBadge>
        <VueBadge
          class="mis1"
          variant="warning"
        >Warning</VueBadge>
        <VueBadge
          class="mis1"
          variant="danger"
        >Error</VueBadge>
        <VueBadge
          dot
          variant="success"
        ></VueBadge>
        <VueBadge
          dot
          variant="warning"
        ></VueBadge>
      </VueFlexRow>
    </section>

    <VueDivider />

    <!-- Buttons -->
    <section class="component-section">
      <h2>Buttons</h2>
      <VueFlexRow
        gap="md"
        wrap="wrap"
      >
        <VueButton>Default Button</VueButton>
        <VueButton variant="primary">Primary</VueButton>
        <VueButton variant="secondary">Secondary</VueButton>
        <VueButton variant="success">Success</VueButton>
        <VueButton variant="monochrome">Monochrome</VueButton>
        <VueButton variant="warning">Warning</VueButton>
        <VueButton variant="danger">Danger (Error)</VueButton>
        <VueButton :disabled="true">Disabled</VueButton>
        <VueButton shape="rounded">Rounded</VueButton>
        <VueButton
          :bordered="true"
          shape="rounded"
          variant="primary"
        >Bordered</VueButton>
      </VueFlexRow>

      <h3 class="subsection-title">Button Sizes</h3>
      <VueFlexRow
        gap="md"
        align="center"
      >
        <VueButton size="sm">Small</VueButton>
        <VueButton>Default</VueButton>
        <VueButton size="lg">Large</VueButton>
      </VueFlexRow>
    </section>

    <VueDivider />

    <!-- Cards -->
    <section class="component-section">
      <h2>Cards</h2>
      <VueFlexRow
        gap="lg"
        wrap="wrap"
      >
        <VueCard style="width: 300px">
          <template #header>
            <h3 class="card-header">Card Header</h3>
          </template>
          <p>This is the card body content. Cards are great for containing related information.</p>
          <template #footer>
            <VueFlexRow
              justify="flex-end"
              gap="sm"
            >
              <VueButton size="sm">Cancel</VueButton>
              <VueButton
                size="sm"
                variant="primary"
              >Confirm</VueButton>
            </VueFlexRow>
          </template>
        </VueCard>

        <VueCard
          isBorder
          style="width: 300px"
        >
          <template #header>
            <h3 class="card-header">Bordered Card</h3>
          </template>
          <p>This card has a border style applied.</p>
        </VueCard>

        <VueCard
          isShadow
          style="width: 300px"
        >
          <template #header>
            <h3 class="card-header">Shadow Card</h3>
          </template>
          <p>This card has a shadow effect.</p>
        </VueCard>
      </VueFlexRow>
    </section>

    <VueDivider />

    <!-- Form Controls -->
    <section class="component-section">
      <h2>Form Controls</h2>

      <VueFieldset legend="Contact Information">
        <div class="form-layout">
          <VueInput
            v-model="inputValue"
            label="Name"
            placeholder="Enter your name"
          />

          <VueInput
            label="Email"
            type="email"
            placeholder="your@email.com"
          />

          <VueInput
            label="Disabled Input"
            placeholder="This is disabled"
            disabled
          />
        </div>
      </VueFieldset>

      <h3 class="subsection-title">Checkbox</h3>
      <VueCheckbox
        :checked="checkboxValue"
        @update:checked="checkboxValue = $event"
        name="subscription"
        value="agree"
        labelText="I agree to the terms and conditions"
        size="medium"
        theme="default"
        labelPosition="end"
        :disabled="false"
        :indeterminate="false"
      ></VueCheckbox>

      <h3 class="subsection-title">Radio Buttons</h3>
      <VueRadio
        v-model="radioValue"
        value="option1"
        label="Option 1"
        name="radioGroup"
      />
      <VueRadio
        v-model="radioValue"
        value="option2"
        label="Option 2"
        name="radioGroup"
      />
      <VueRadio
        v-model="radioValue"
        value="option3"
        label="Option 3"
        name="radioGroup"
      />

      <h3 class="subsection-title">Select</h3>
      <VueSelect
        v-model="selectValue"
        label="Choose Framework"
        name="framework"
      >
        <option value="">- Select a framework -</option>
        <option value="react">React</option>
        <option value="vue">Vue</option>
        <option value="angular">Angular</option>
      </VueSelect>

      <h3 class="subsection-title">Combobox</h3>
      <VueCombobox
        v-model="comboboxValue"
        :options="comboboxOptions"
        label="Search Frameworks"
        placeholder="Type to search..."
      />

      <h3 class="subsection-title">Slider</h3>
      <VueSlider
        :value="sliderValue"
        @input="handleSliderInput"
        label="Volume"
        :min="0"
        :max="100"
      />
      <p>Current value: {{ sliderValue }}</p>

      <h3 class="subsection-title">Toggle</h3>
      <VueToggle
        v-model="toggleValue"
        label="Enable notifications"
      />
      <p>Toggle is: {{ toggleValue ? "ON" : "OFF" }}</p>

      <h3 class="subsection-title">Rating</h3>
      <VueRating
        v-model="ratingValue"
        :max="5"
      />
      <p>Rating: {{ ratingValue }} / 5</p>
    </section>

    <VueDivider />

    <!-- Icons & Images -->
    <section class="component-section">
      <h2>Icons & Images</h2>

      <h3 class="subsection-title">Icons</h3>
      <VueFlexRow
        gap="lg"
        align="center"
      >
        <VueIcon
          type="success"
          size="16"
          noFill
        >
          <CheckCircle2 />
        </VueIcon>
        <VueIcon
          type="info"
          size="16"
          noFill
        >
          <Info />
        </VueIcon>
        <VueIcon
          type="warning"
          size="18"
          noFill
        >
          <AlertTriangle />
        </VueIcon>
        <VueIcon
          type="error"
          size="24"
          noFill
        >
          <XCircle />
        </VueIcon>
      </VueFlexRow>

      <h3 class="subsection-title">Images</h3>
      <VueFlexRow gap="lg">
        <VueImage
          src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=150&h=150&fit=crop&q=80"
          alt="Landscape"
          :width="150"
          :height="150"
          aspectRatio="1/1"
          :fade="true"
        />
        <VueImage
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=150&h=150&fit=crop&q=80"
          alt="Nature"
          :width="150"
          :height="150"
          aspectRatio="1/1"
          :fade="true"
          isRounded
        />
      </VueFlexRow>
    </section>

    <VueDivider />

    <!-- Tags -->
    <section class="component-section">
      <h2>Tags</h2>
      <VueFlexRow
        gap="md"
        wrap="wrap"
      >
        <VueTag>Default Tag</VueTag>
        <VueTag variant="success">Success</VueTag>
        <VueTag variant="info">Info</VueTag>
        <VueTag variant="warning">Warning</VueTag>
        <VueTag variant="error">Error</VueTag>
        <VueTag shape="round">Rounded</VueTag>
        <VueTag shape="pill">Pill</VueTag>
      </VueFlexRow>
    </section>

    <VueDivider />

    <!-- Text Utilities -->
    <section class="component-section">
      <h2>Text Utilities</h2>

      <h3 class="subsection-title">Mark (Highlight)</h3>
      <p>
        This text has <VueMark>highlighted content</VueMark> using the Mark component.
      </p>
      <p>
        You can also use different colors:
        <VueMark variant="success">success</VueMark>,
        <VueMark variant="info">info</VueMark>,
        <VueMark variant="warning">warning</VueMark>,
        <VueMark variant="error">error</VueMark>
      </p>
    </section>

    <VueDivider />

    <!-- Layout -->
    <section class="component-section">
      <h2>Layout - Flex</h2>

      <h3 class="subsection-title">Horizontal Layout</h3>
      <VueFlexRow gap="md">
        <VueCard style="flex: 1">
          <p>Item 1</p>
        </VueCard>
        <VueCard style="flex: 1">
          <p>Item 2</p>
        </VueCard>
        <VueCard style="flex: 1">
          <p>Item 3</p>
        </VueCard>
      </VueFlexRow>

      <h3 class="subsection-title">Vertical Layout</h3>
      <VueFlexRow
        direction="column"
        gap="md"
      >
        <VueCard>
          <p>Stacked Item 1</p>
        </VueCard>
        <VueCard>
          <p>Stacked Item 2</p>
        </VueCard>
        <VueCard>
          <p>Stacked Item 3</p>
        </VueCard>
      </VueFlexRow>

      <h3 class="subsection-title">Alignment Examples</h3>
      <VueFlexRow
        justify="center"
        align="center"
        gap="md"
        class="flex-demo-box"
      >
        <VueBadge variant="info">Centered</VueBadge>
        <VueBadge variant="info">Centered</VueBadge>
      </VueFlexRow>

      <VueFlexRow
        justify="space-between"
        align="center"
        class="flex-demo-box"
      >
        <VueBadge variant="info">Start</VueBadge>
        <VueBadge variant="info">Space Between</VueBadge>
        <VueBadge variant="info">End</VueBadge>
      </VueFlexRow>
    </section>

    <VueDivider />

    <!-- Dividers -->
    <section class="component-section">
      <h2>Dividers</h2>
      <p>Horizontal divider (default):</p>
      <VueDivider />
      <p>Divider with content:</p>
      <VueDivider>OR</VueDivider>
      <p>Divider with different alignment:</p>
      <VueDivider justify="start">Start</VueDivider>
      <VueDivider justify="end">End</VueDivider>
    </section>

    <!-- Alerts -->
    <section class="component-section">
      <h2>Alerts</h2>
      <VueAlert class="mbe2">Default alert</VueAlert>
      <VueAlert
        class="mbe2"
        type="success"
      >Success alert</VueAlert>
      <VueAlert
        class="mbe2"
        type="info"
      >Info alert</VueAlert>
      <VueAlert
        class="mbe2"
        type="warning"
      >Warning alert</VueAlert>
      <VueAlert
        class="mbe2"
        type="error"
      >Error alert</VueAlert>
    </section>

    <VueDivider />

    <!-- AspectRatio -->
    <section class="component-section">
      <h2>Aspect Ratio</h2>
      <h3 class="subsection-title">16:9 Responsive Container</h3>
      <VueAspectRatio
        width="16"
        height="9"
        style="max-width: 600px;"
      >
        <div style="background:var(--ag-background-tertiary);width:100%;height:100%;display:flex;align-items:center;justify-content:center">
          16:9 Aspect Ratio Box
        </div>
      </VueAspectRatio>
    </section>

    <VueDivider />

    <!-- Header -->
    <section class="component-section">
      <h2>Header</h2>
      <VueHeader>
        <template #logo>
          <a
            href="#"
            style="text-decoration: none; color: var(--ag-primary); font-weight: 700; font-size: 1.25rem;"
          >
            AgnosticUI
          </a>
        </template>
        <nav>
          <ul style="display: flex; gap: 1.5rem; list-style: none; margin: 0; padding: 0;">
            <li><a
                href="#home"
                style="text-decoration: none; color: inherit;"
              >Home</a></li>
            <li><a
                href="#about"
                style="text-decoration: none; color: inherit;"
              >About</a></li>
            <li><a
                href="#contact"
                style="text-decoration: none; color: inherit;"
              >Contact</a></li>
          </ul>
        </nav>
      </VueHeader>
    </section>

    <VueDivider />

    <!-- Icon Buttons -->
    <section class="component-section">
      <h2>Icon Buttons</h2>
      <VueFlexRow
        gap="md"
        wrap="wrap"
      >
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
        <VueIconButton
          label="Primary"
          variant="primary"
        >
          <Star
            :size="18"
            class="expand"
          />
        </VueIconButton>
        <VueIconButton
          label="Success"
          variant="success"
        >
          <CheckCircle2
            :size="18"
            class="expand"
          />
        </VueIconButton>
      </VueFlexRow>
    </section>

    <VueDivider />

    <!-- Progress Ring -->
    <section class="component-section">
      <h2>Progress Ring</h2>
      <VueFlexRow
        gap="lg"
        wrap="wrap"
      >
        <VueProgressRing :value="25" />
        <VueProgressRing :value="50" />
        <VueProgressRing :value="75" />
        <VueProgressRing
          :value="100"
          variant="success"
        />
      </VueFlexRow>
    </section>

    <VueDivider />

    <!-- BadgeFx (Animated Badges) -->
    <section class="component-section">
      <h2>Badge Effects (BadgeFx)</h2>
      <VueFlexRow
        gap="md"
        wrap="wrap"
      >
        <VueBadgeFx
          fx="bounce"
          variant="success"
        >Bounce</VueBadgeFx>
        <VueBadgeFx
          fx="pulse"
          variant="info"
        >Pulse</VueBadgeFx>
        <VueBadgeFx
          fx="jelly"
          fx-speed="lg"
          variant="monochrome"
        >Jelly</VueBadgeFx>
        <VueBadgeFx
          fx="shimmer"
          fx-speed="xl"
          variant="danger"
        >Shimmer</VueBadgeFx>
        <VueBadgeFx
          fx="glow"
          variant="primary"
        >Glow</VueBadgeFx>
        <VueBadgeFx
          fx="ripple"
          variant="info"
        >Ripple</VueBadgeFx>
      </VueFlexRow>
    </section>

    <VueDivider />

    <!-- IconButtonFx (Animated Icon Buttons) -->
    <section class="component-section">
      <h2>Icon Button Effects (IconButtonFx)</h2>
      <VueFlexRow
        gap="md"
        wrap="wrap"
      >
        <VueIconButtonFx
          fx="pulse"
          variant="primary"
          label="Pulse"
        >
          <Heart
            :size="18"
            class="expand"
          />
        </VueIconButtonFx>
        <VueIconButtonFx
          fx="bounce"
          variant="success"
          label="Bounce"
        >
          <Download
            :size="18"
            class="expand"
          />
        </VueIconButtonFx>
        <VueIconButtonFx
          fx="shake"
          variant="warning"
          label="Shake"
        >
          <AlertTriangle
            :size="18"
            class="expand"
          />
        </VueIconButtonFx>
        <VueIconButtonFx
          fx="spin"
          variant="ghost"
          label="Spin"
        >
          <Settings
            :size="18"
            class="expand"
          />
        </VueIconButtonFx>
      </VueFlexRow>
    </section>

    <VueDivider />

    <!-- Breadcrumb -->
    <section class="component-section">
      <h2>Breadcrumb</h2>
      <h3 class="subsection-title">Default (Chevron)</h3>
      <VueBreadcrumb
        :items="breadcrumbItems"
        @breadcrumbClick="handleBreadcrumbClick"
        class="mbe3"
      />

      <h3 class="subsection-title">Slash Separator</h3>
      <VueBreadcrumb
        type="slash"
        :items="breadcrumbItems"
        @breadcrumbClick="handleBreadcrumbClick"
        class="mbe3"
      />

      <h3 class="subsection-title">Arrow Separator</h3>
      <VueBreadcrumb
        type="arrow"
        :items="breadcrumbItems"
        @breadcrumbClick="handleBreadcrumbClick"
      />
    </section>

    <VueDivider />

    <!-- Sidebar -->
    <section class="component-section">
      <h2>Sidebar</h2>
      <p class="mbe3">A collapsible sidebar with navigation. Click the toggle to expand/collapse.</p>
      <div style="position: relative; display: flex; height: 400px; border: 1px solid var(--ag-border-color); border-radius: 0.5rem; overflow: hidden; contain: layout;">
        <VueSidebar
          ref="sidebarRef"
          :open="sidebarOpen"
          :collapsed="sidebarCollapsed"
          :show-mobile-toggle="true"
          @update:open="sidebarOpen = $event"
          @update:collapsed="sidebarCollapsed = $event"
        >
          <h2
            slot="ag-header-start"
            style="margin: 0; font-size: 1.125rem; font-weight: 600;"
          >
            Dashboard
          </h2>
          <button
            type="button"
            slot="ag-header-end"
            @click="() => { console.log('Settings clicked'); }"
            style="background: none; border: none; padding: 8px; cursor: pointer; display: flex; align-items: center; color: inherit; border-radius: 0.25rem;"
            aria-label="Settings"
            title="Settings"
          >
            <Settings :size="20" />
          </button>
          <button
            type="button"
            slot="ag-header-toggle"
            @click="toggleSidebar"
            style="background: none; border: none; padding: 8px 0; cursor: pointer; display: flex; align-items: center; color: inherit;"
            aria-label="Toggle sidebar"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect
                width="18"
                height="18"
                x="3"
                y="3"
                rx="2"
              />
              <path d="M9 3v18" />
            </svg>
          </button>

          <VueSidebarNav>
            <VueSidebarNavItem>
              <button
                type="button"
                class="nav-button active"
                aria-current="page"
              >
                <Home :size="20" />
                <span class="nav-label">Dashboard</span>
              </button>
            </VueSidebarNavItem>

            <VueSidebarNavItem>
              <button
                type="button"
                class="nav-button"
              >
                <Settings :size="20" />
                <span class="nav-label">Settings</span>
              </button>
            </VueSidebarNavItem>

            <VueSidebarNavItem>
              <button
                type="button"
                class="nav-button"
              >
                <Star :size="20" />
                <span class="nav-label">Favorites</span>
              </button>
            </VueSidebarNavItem>
          </VueSidebarNav>

          <div
            slot="ag-footer"
            style="font-size: 0.875rem; color: var(--ag-text-secondary);"
          >
            Kitchen Sink Demo
          </div>
        </VueSidebar>

        <main style="flex: 1; padding: 2rem; overflow: auto; background: var(--ag-background);">
          <h3 style="margin-top: 0;">Main Content Area</h3>
          <p>Click the header toggle to collapse the sidebar into rail mode (icon-only).</p>
        </main>
      </div>
    </section>

    <VueDivider />

    <!-- ButtonFx (Button with Hover Effects) -->
    <section class="component-section">
      <h2>Button Effects (ButtonFx)</h2>
      <p class="mbe3">Buttons with hover effects for enhanced interactivity.</p>
      <VueFlexRow
        gap="md"
        wrap="wrap"
      >
        <VueButtonFx
          fx="bounce"
          variant="primary"
        >Bounce</VueButtonFx>
        <VueButtonFx
          fx="pulse"
          variant="success"
        >Pulse</VueButtonFx>
        <VueButtonFx
          fx="jelly"
          variant="secondary"
        >Jelly</VueButtonFx>
        <VueButtonFx
          fx="grow"
          variant="warning"
        >Grow</VueButtonFx>
        <VueButtonFx
          fx="shrink"
          variant="danger"
        >Shrink</VueButtonFx>
        <VueButtonFx
          fx="ripple"
          variant="monochrome"
        >Ripple</VueButtonFx>
      </VueFlexRow>
    </section>

    <VueDivider />

    <!-- IntlFormatter (Date/Number Formatting) -->
    <section class="component-section">
      <h2>Internationalization Formatter (IntlFormatter)</h2>
      <p class="mbe3">Format dates, numbers, and currencies using Intl API.</p>

      <h3 class="subsection-title">Date Formatting</h3>
      <VueFlexRow
        gap="md"
        direction="column"
        align="flex-start"
      >
        <div>
          <strong>Short Date:</strong>
          <VueIntlFormatter
            type="date"
            :value="new Date('2025-12-11')"
            locale="en-US"
            :options="{ dateStyle: 'short' }"
          />
        </div>
        <div>
          <strong>Long Date:</strong>
          <VueIntlFormatter
            type="date"
            :value="new Date('2025-12-11')"
            locale="en-US"
            :options="{ dateStyle: 'long' }"
          />
        </div>
        <div>
          <strong>Full Date:</strong>
          <VueIntlFormatter
            type="date"
            :value="new Date('2025-12-11')"
            locale="en-US"
            :options="{ dateStyle: 'full' }"
          />
        </div>
      </VueFlexRow>

      <h3 class="subsection-title">Number Formatting</h3>
      <VueFlexRow
        gap="md"
        direction="column"
        align="flex-start"
      >
        <div>
          <strong>Standard Number:</strong>
          <VueIntlFormatter
            type="number"
            :value="1234567.89"
            locale="en-US"
          />
        </div>
        <div>
          <strong>Currency (USD):</strong>
          <VueIntlFormatter
            type="number"
            :value="1234.56"
            locale="en-US"
            :options="{ style: 'currency', currency: 'USD' }"
          />
        </div>
        <div>
          <strong>Percentage:</strong>
          <VueIntlFormatter
            type="number"
            :value="0.75"
            locale="en-US"
            :options="{ style: 'percent' }"
          />
        </div>
      </VueFlexRow>
    </section>

    <VueDivider />

    <!-- SkeletonLoader (Loading Placeholders) -->
    <section class="component-section">
      <h2>Skeleton Loader</h2>
      <p class="mbe3">Loading placeholders for improved perceived performance.</p>

      <h3 class="subsection-title">Text Variants</h3>
      <VueFlexRow
        gap="md"
        direction="column"
      >
        <VueSkeleton
          variant="rectangular"
          width="200px"
          class="mbe2"
        />
        <VueSkeleton
          variant="rectangular"
          width="200px"
          class="mbe2"
        />
        <VueSkeleton
          variant="rectangular"
          width="200px"
          class="mbe2"
        />
      </VueFlexRow>

      <h3 class="subsection-title">Shape Variants</h3>
      <div class="mbe2">
        <VueSkeleton
          variant="circular"
          width="64px"
          height="64px"
        />
      </div>
      <div>
        <VueSkeleton
          variant="rounded"
          width="300px"
          height="200px"
        />
      </div>
    </section>

    <VueDivider />

    <!-- Kbd (Keyboard Keys) -->
    <section class="component-section">
      <h2>Keyboard (Kbd)</h2>
      <p class="mbe3">Display keyboard shortcuts and key combinations.</p>

      <VueFlexRow
        gap="md"
        wrap="wrap"
        align="center"
      >
        <div>
          Press <VueKbd>Ctrl</VueKbd> + <VueKbd>C</VueKbd> to copy
        </div>
        <div class="mis4">
          <VueKbd>⌘</VueKbd>
          <VueKbd>⌥</VueKbd>
          <VueKbd>⇧</VueKbd>
          <VueKbd>⌃</VueKbd>
        </div>
        <div>
          Press <VueKbd>Ctrl</VueKbd> + <VueKbd>V</VueKbd> to paste
        </div>
        <div>
          Press <VueKbd>Enter</VueKbd> to submit
        </div>
        <div>
          Press <VueKbd>Esc</VueKbd> to cancel
        </div>
      </VueFlexRow>

      <h3 class="subsection-title">Common Shortcuts</h3>
      <VueFlexRow
        gap="md"
        direction="column"
        align="flex-start"
      >
        <div>
          Save: <VueKbd>Ctrl</VueKbd> + <VueKbd>S</VueKbd>
        </div>
        <div>
          Undo: <VueKbd>Ctrl</VueKbd> + <VueKbd>Z</VueKbd>
        </div>
        <div>
          Redo: <VueKbd>Ctrl</VueKbd> + <VueKbd>Shift</VueKbd> + <VueKbd>Z</VueKbd>
        </div>
      </VueFlexRow>
    </section>

    <VueDivider />

    <!-- Link -->
    <section class="component-section">
      <h2>Links</h2>
      <p class="mbe3">Styled links with various variants and configurations.</p>

      <h3 class="subsection-title">Basic Links</h3>
      <VueFlexRow
        gap="md"
        direction="column"
        align="flex-start"
      >
        <VueLink href="#default">Default Link</VueLink>
        <VueLink
          href="#primary"
          variant="primary"
        >Primary Link</VueLink>
        <VueLink
          href="#success"
          variant="success"
        >Success Link</VueLink>
        <VueLink
          href="#warning"
          variant="warning"
        >Warning Link</VueLink>
        <VueLink
          href="#danger"
          variant="danger"
        >Danger Link</VueLink>
      </VueFlexRow>

      <h3 class="subsection-title">Button-Style Links</h3>
      <VueFlexRow
        gap="md"
        wrap="wrap"
      >
        <VueLink
          href="#button"
          as-button
          variant="primary"
        >Primary Button Link</VueLink>
        <VueLink
          href="#button-success"
          as-button
          variant="success"
        >Success Button Link</VueLink>
        <VueLink
          href="#button-danger"
          as-button
          variant="danger"
        >Danger Button Link</VueLink>
      </VueFlexRow>
    </section>

    <VueDivider />

    <!-- Collapsible -->
    <section class="component-section">
      <h2>Collapsible</h2>
      <p class="mbe3">Expandable and collapsible content sections.</p>

      <h3 class="subsection-title">Default (Chevron)</h3>
      <VueCollapsible
        use-chevron
        class="mbe2"
        @toggle="collapsibleExpanded = ($event.target as any).open"
      >
        <template #summary>
          <span>Click to expand</span>
        </template>
        <p>This is the collapsible content that can be shown or hidden. The default chevron indicator rotates smoothly when toggled.</p>
      </VueCollapsible>

      <h3 class="subsection-title">Plus/Minus Indicator</h3>
      <VueCollapsible
        use-minus
        bordered
        class="mbe2"
      >
        <template #summary>
          <span>Plus/Minus Indicator</span>
        </template>
        <p>Plus changes to minus when opened. Classic expand/collapse indicator style.</p>
      </VueCollapsible>

      <h3 class="subsection-title">FAQ Example</h3>
      <VueCollapsible bordered>
        <template #summary>
          <span>What is AgnosticUI?</span>
        </template>
        <p>
          AgnosticUI is a framework-agnostic component library built with web
          components. It works seamlessly with React, Vue, Svelte, Angular, and
          vanilla JavaScript.
        </p>
      </VueCollapsible>
    </section>

    <VueDivider />

    <!-- Loader -->
    <section class="component-section">
      <h2>Loader</h2>
      <p class="mbe3">Loading indicators for async operations.</p>

      <VueFlexRow
        gap="lg"
        wrap="wrap"
        align="center"
      >
        <div>
          <p class="mbe2">Small:</p>
          <VueLoader size="small" />
        </div>
        <div>
          <p class="mbe2">Default:</p>
          <VueLoader />
        </div>
        <div>
          <p class="mbe2">Large:</p>
          <VueLoader size="large" />
        </div>
      </VueFlexRow>
    </section>

    <VueDivider />

    <!-- Tabs -->
    <section class="component-section">
      <h2>Tabs</h2>
      <p class="mbe3">Organize content into tabbed panels.</p>

      <h3 class="subsection-title">Basic Tabs</h3>
      <VueTabs
        aria-label="Basic tabs example"
        class="mbe3"
      >
        <VueTab panel="panel-1">Tab 1</VueTab>
        <VueTab panel="panel-2">Tab 2</VueTab>
        <VueTab panel="panel-3">Tab 3</VueTab>
        <VueTabPanel
          panel="panel-1"
          id="panel-1"
        >
          <p>Content for Tab 1</p>
        </VueTabPanel>
        <VueTabPanel
          panel="panel-2"
          id="panel-2"
        >
          <p>Content for Tab 2</p>
        </VueTabPanel>
        <VueTabPanel
          panel="panel-3"
          id="panel-3"
        >
          <p>Content for Tab 3</p>
        </VueTabPanel>
      </VueTabs>

      <h3 class="subsection-title">Tabs with Icons</h3>
      <VueTabs aria-label="Tabs with rich content">
        <VueTab panel="panel-r1">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <Info :size="16" />
            Overview
          </div>
        </VueTab>
        <VueTab panel="panel-r2">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <Settings :size="16" />
            Settings
          </div>
        </VueTab>
        <VueTab panel="panel-r3">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <User :size="16" />
            Profile
          </div>
        </VueTab>
        <VueTabPanel
          panel="panel-r1"
          id="panel-r1"
        >
          <h3 style="margin-top: 0;">Overview</h3>
          <p>Dashboard and statistics go here.</p>
        </VueTabPanel>
        <VueTabPanel
          panel="panel-r2"
          id="panel-r2"
        >
          <h3 style="margin-top: 0;">Settings</h3>
          <p>Configure your application settings.</p>
        </VueTabPanel>
        <VueTabPanel
          panel="panel-r3"
          id="panel-r3"
        >
          <h3 style="margin-top: 0;">Profile</h3>
          <p>Manage your profile information.</p>
        </VueTabPanel>
      </VueTabs>
    </section>

    <VueDivider />

    <!-- CopyButton -->
    <section class="component-section">
      <h2>Copy Button</h2>
      <p class="mbe3">Buttons that copy text to clipboard.</p>

      <h3 class="subsection-title">Basic</h3>
      <VueFlexRow
        gap="md"
        wrap="wrap"
      >
        <VueCopyButton
          text="https://agnosticui.com"
          label="Copy URL"
        />
        <VueCopyButton
          text="npm install agnosticui-core"
          label="Copy install command"
          variant="primary"
        />
      </VueFlexRow>

      <h3 class="subsection-title">Copy From Input</h3>
      <VueFlexRow
        gap="md"
        align="center"
      >
        <VueInput
          v-model="copyInputValue"
          placeholder="Enter text to copy"
          style="flex: 1; max-width: 300px;"
        />
        <VueCopyButton
          :text="copyInputValue"
          label="Copy"
        />
      </VueFlexRow>
    </section>

    <VueDivider />

    <!-- Menu -->
    <section class="component-section">
      <h2>Menu</h2>
      <p class="mbe3">Dropdown menus for navigation and actions.</p>

      <VueFlexRow
        gap="md"
        wrap="wrap"
      >
        <VueMenu menu-aria-label="Menu options">
          Basic Menu
          <template #menu>
            <VueMenuItem value="edit">Edit</VueMenuItem>
            <VueMenuItem value="copy">Copy</VueMenuItem>
            <VueMenuItem value="paste">Paste</VueMenuItem>
            <VueMenuSeparator />
            <VueMenuItem value="delete">Delete</VueMenuItem>
          </template>
        </VueMenu>

        <VueMenu
          menu-aria-label="User menu"
          button-variant="primary"
        >
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <User :size="16" />
            User Menu
          </div>
          <template #menu>
            <VueMenuItem value="profile">Profile</VueMenuItem>
            <VueMenuItem value="settings">Settings</VueMenuItem>
            <VueMenuSeparator />
            <VueMenuItem value="logout">Logout</VueMenuItem>
          </template>
        </VueMenu>

        <VueMenu
          menu-variant="icon"
          ghost
          menu-aria-label="More options"
        >
          <MenuIcon :size="20" />
          <template #menu>
            <VueMenuItem value="option1">Option 1</VueMenuItem>
            <VueMenuItem value="option2">Option 2</VueMenuItem>
            <VueMenuItem value="option3">Option 3</VueMenuItem>
          </template>
        </VueMenu>
      </VueFlexRow>
    </section>

    <VueDivider />

    <!-- Timeline -->
    <section class="component-section">
      <h2>Timeline</h2>
      <p class="mbe3">Display chronological events and milestones.</p>

      <h3 class="subsection-title">Horizontal Timeline</h3>
      <VueTimeline
        orientation="horizontal"
        class="mbe4"
      >
        <VueTimelineItem>
          <template #ag-start>2023-01</template>
          <template #ag-marker>
            <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary);"></div>
          </template>
          <template #ag-end>Step 1 Completed</template>
        </VueTimelineItem>
        <VueTimelineItem>
          <template #ag-start>2023-02</template>
          <template #ag-marker>
            <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-info);"></div>
          </template>
          <template #ag-end>Step 2 In Progress</template>
        </VueTimelineItem>
        <VueTimelineItem>
          <template #ag-start>2023-03</template>
          <template #ag-marker>
            <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-border);"></div>
          </template>
          <template #ag-end>Step 3 Pending</template>
        </VueTimelineItem>
      </VueTimeline>

      <h3 class="subsection-title">Vertical Timeline</h3>
      <VueTimeline
        orientation="vertical"
        variant="primary"
      >
        <VueTimelineItem>
          <template #ag-start>09:00 AM</template>
          <template #ag-marker>
            <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary);"></div>
          </template>
          <template #ag-end>
            <strong>Breakfast</strong>
            <p style="margin: 0.25rem 0 0 0;">Oatmeal and coffee</p>
          </template>
        </VueTimelineItem>
        <VueTimelineItem>
          <template #ag-start>10:00 AM</template>
          <template #ag-marker>
            <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary);"></div>
          </template>
          <template #ag-end>
            <strong>Meeting</strong>
            <p style="margin: 0.25rem 0 0 0;">Daily standup</p>
          </template>
        </VueTimelineItem>
        <VueTimelineItem>
          <template #ag-start>11:00 AM</template>
          <template #ag-marker>
            <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary);"></div>
          </template>
          <template #ag-end>
            <strong>Work</strong>
            <p style="margin: 0.25rem 0 0 0;">Focus time</p>
          </template>
        </VueTimelineItem>
      </VueTimeline>
    </section>

    <VueDivider />

    <!-- Dialog -->
    <section class="component-section">
      <h2>Dialog (Modal)</h2>
      <p class="mbe3">Modal dialogs for confirmations and forms.</p>

      <VueFlexRow
        gap="md"
        wrap="wrap"
      >
        <VueButton @click="isDialogOpen = true">Open Dialog</VueButton>
      </VueFlexRow>

      <VueDialog
        v-model="isDialogOpen"
        heading="Dialog Example"
        description="This is a basic dialog component."
        show-close-button
      >
        <p>Dialog content goes here. You can add forms, messages, or any content.</p>
        <VueDialogFooter>
          <VueFlexRow
            gap="md"
            justify="flex-end"
          >
            <VueButton @click="isDialogOpen = false">Cancel</VueButton>
            <VueButton
              variant="primary"
              @click="isDialogOpen = false"
            >Confirm</VueButton>
          </VueFlexRow>
        </VueDialogFooter>
      </VueDialog>
    </section>

    <VueDivider />

    <!-- MessageBubble -->
    <section class="component-section">
      <h2>Message Bubble (Chat)</h2>
      <p class="mbe3">Chat-style message bubbles for conversations.</p>

      <div style="max-width: 600px; border: 1px solid var(--ag-border); padding: 1rem; border-radius: 8px; background: var(--ag-background-secondary);">
        <VueMessageBubble
          v-for="message in messages"
          :key="message.id"
          :from="message.from"
          :message="message.text"
          :author="message.author"
          :time="message.time"
        />
      </div>
    </section>

    <VueDivider />

    <!-- Toast -->
    <section class="component-section">
      <h2>Toast Notification</h2>
      <p class="mbe3">Temporary notification messages.</p>

      <VueFlexRow
        gap="md"
        wrap="wrap"
      >
        <VueButton @click="showToast = true">Show Toast</VueButton>
        <VueButton
          variant="success"
          @click="showToast = true"
        >Success Toast</VueButton>
      </VueFlexRow>

      <VueToast
        v-model="showToast"
        type="info"
        @toast-close="showToast = false"
      >
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <Info :size="20" />
          This is a toast notification!
        </div>
      </VueToast>
    </section>

    <VueDivider />

    <!-- Drawer -->
    <section class="component-section">
      <h2>Drawer (Slide Panel)</h2>
      <p class="mbe3">Slide-in panels from screen edges.</p>

      <VueFlexRow
        gap="md"
        wrap="wrap"
      >
        <VueButton @click="isDrawerOpen = true">Open Drawer</VueButton>
      </VueFlexRow>

      <VueDrawer
        :open="isDrawerOpen"
        position="end"
        heading="Drawer Panel"
        show-close-button
        @drawer-close="isDrawerOpen = false"
      >
        <div>
          <h4>Drawer Content</h4>
          <p>This drawer slides in from the right side. You can add settings, navigation, or any content here.</p>
        </div>
        <div slot="footer">
          <VueFlexRow
            gap="md"
            justify="flex-end"
          >
            <VueButton @click="isDrawerOpen = false">Close</VueButton>
          </VueFlexRow>
        </div>
      </VueDrawer>
    </section>

    <VueDivider />

    <!-- Popover -->
    <section class="component-section">
      <h2>Popover</h2>
      <p class="mbe3">Contextual overlay panels triggered by user interaction.</p>

      <VueFlexRow
        gap="md"
        wrap="wrap"
      >
        <VuePopover>
          <VueButton slot="trigger">Hover me</VueButton>
          <span slot="title">Popover Title</span>
          <div slot="content">
            <p>This is the popover content. It appears on hover or click.</p>
          </div>
        </VuePopover>

        <VuePopover placement="top">
          <VueButton
            slot="trigger"
            variant="primary"
          >Top Placement</VueButton>
          <span slot="title">Above</span>
          <div slot="content">
            <p>This popover appears above the trigger.</p>
          </div>
        </VuePopover>
      </VueFlexRow>
    </section>

    <VueDivider />

    <!-- Pagination -->
    <section class="component-section">
      <h2>Pagination</h2>
      <p class="mbe3">Navigate through pages of content.</p>

      <VuePagination
        :current="currentPage"
        :total-pages="10"
        @page-change="currentPage = $event.page"
      />
      <p style="margin-top: 1rem; font-size: 0.875rem; color: var(--ag-text-secondary);">
        Current page: {{ currentPage }}
      </p>
    </section>

    <VueDivider />

    <!-- Tooltip -->
    <section class="component-section">
      <h2>Tooltip</h2>
      <p class="mbe3">Helpful hints that appear on hover.</p>

      <VueFlexRow
        gap="md"
        wrap="wrap"
      >
        <VueTooltip content="This is a tooltip">
          <VueButton>Hover for tooltip</VueButton>
        </VueTooltip>

        <VueTooltip
          content="Edit this item"
          placement="top"
        >
          <VueButton variant="secondary">
            <Edit :size="16" />
          </VueButton>
        </VueTooltip>

        <VueTooltip
          content="Delete this item"
          placement="right"
        >
          <VueButton variant="danger">
            <Trash2 :size="16" />
          </VueButton>
        </VueTooltip>
      </VueFlexRow>
    </section>

    <VueDivider />

    <!-- Progress -->
    <section class="component-section">
      <h2>Progress Bar</h2>
      <p class="mbe3">Visual indicators for task completion.</p>

      <h3 class="subsection-title">Determinate Progress</h3>
      <VueProgress
        :value="50"
        label="50% complete"
        class="mbe3"
      />

      <VueProgress
        :value="75"
        label="75% complete"
        class="mbe3"
      />

      <h3 class="subsection-title">Indeterminate Progress</h3>
      <VueProgress label="Loading..." />
    </section>

    <VueDivider />

    <!-- EmptyState -->
    <section class="component-section">
      <h2>Empty State</h2>
      <p class="mbe3">Placeholders for empty content areas.</p>

      <h3 class="subsection-title">Basic Empty State</h3>
      <VueEmptyState
        title="No items found"
        subtitle="Get started by creating your first item"
        class="mbe3"
      />

      <h3 class="subsection-title">With Action Button</h3>
      <VueEmptyState
        title="No projects yet"
        subtitle="Create your first project to get started"
        buttonText="New Project"
        :bordered="true"
        :rounded="true"
      />

      <h3 class="subsection-title">With Custom Icon</h3>
      <VueEmptyState
        title="No files"
        subtitle="Upload files to see them here"
        size="md"
        :bordered="true"
        :rounded="true"
      >
        <template #icon>
          <Folder
            :size="48"
            color="#999"
          />
        </template>
      </VueEmptyState>
    </section>

    <VueDivider />

    <!-- Spinner (Loading Indicators) -->
    <section class="component-section">
      <h2>Spinner</h2>
      <p class="mbe3">Loading spinners in various sizes.</p>

      <VueFlexRow
        gap="lg"
        wrap="wrap"
        align="center"
      >
        <div>
          <p class="mbe2">Small:</p>
          <VueSpinner size="small" />
        </div>
        <div>
          <p class="mbe2">Default:</p>
          <VueSpinner />
        </div>
        <div>
          <p class="mbe2">Large:</p>
          <VueSpinner size="large" />
        </div>
        <div>
          <p class="mbe2">XL:</p>
          <VueSpinner size="xlarge" />
        </div>
      </VueFlexRow>
    </section>

    <VueDivider />

    <!-- Scroll Progress (Fixed position indicator) -->
    <VueScrollProgress
      v-if="showScrollBar"
      mode="bar"
      orientation="top"
    />

    <!-- Scroll To Button (Fixed position) -->
    <VueScrollToButton :style="{bottom: '20px', right: '20px'}" />

    <footer class="kitchen-sink-footer">
      <VueDivider />
      <p class="footer-text">
        Built with AgnosticUI v2 • Vue Framework
      </p>
    </footer>
  </div>
</template>

<style scoped>
.kitchen-sink {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.component-section {
  margin-bottom: 3rem;
}

.subsection-title {
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: var(--ag-text-primary);
}

.mbe1 {
  margin-block-end: var(--ag-space-1);
}
.mbe2 {
  margin-block-end: var(--ag-space-2);
}
.mbe3 {
  margin-block-end: var(--ag-space-3);
}
.mbe4 {
  margin-block-end: var(--ag-space-4);
}
.mis1 {
  margin-inline-start: var(--ag-space-1);
}
.mis2 {
  margin-inline-start: var(--ag-space-2);
}
.mis3 {
  margin-inline-start: var(--ag-space-3);
}
.mis4 {
  margin-inline-start: var(--ag-space-4);
}

.demo-box {
  padding: 1rem;
  margin-inline-end: var(--ag-space-2);
  margin-block-end: var(--ag-space-2);
  background: var(--ag-blue-100);
  border: 1px solid var(--ag-blue-300);
  border-radius: 3px;
  text-align: center;
  font-size: 0.875rem;
  color: var(--ag-neutral-900);
}

.demo-box-primary {
  background: var(--ag-blue-100);
  border-color: var(--ag-blue-300);
  color: var(--ag-neutral-900);
}

.subtitle {
  color: var(--ag-text-secondary);
  margin-bottom: 2rem;
}

.card-header {
  margin: 0;
  color: var(--ag-text-primary);
}

.form-layout {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.flex-demo-box {
  min-height: 100px;
  background: var(--ag-background-secondary);
  border-radius: var(--ag-radius-md);
  padding: 1rem;
}

.kitchen-sink-footer {
  margin-top: 4rem;
  padding-top: 2rem;
}

.footer-text {
  text-align: center;
  color: var(--ag-text-secondary);
}

.expand {
  width: 100%;
  height: 100%;
}

/* Sidebar Navigation Styles - matching SidebarExamples.vue */
:global(.nav-button) {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--ag-space-3);
  position: relative;
  padding: var(--ag-space-2) var(--ag-space-3);
  margin-block-end: var(--ag-space-1);
  border: none;
  background: none;
  cursor: pointer;
  width: 100%;
  text-align: left;
  border-radius: var(--ag-radius-sm);
  transition: background var(--ag-fx-duration-sm);
  color: inherit;
}

:global(.nav-button svg) {
  flex-shrink: 0;
}

:global(.nav-button:hover) {
  background: var(--ag-background-secondary);
}

:global(.nav-button.active) {
  background: var(--ag-primary-background);
  color: var(--ag-primary-text);
  font-weight: 500;
}

:global(.nav-button .chevron) {
  transition: transform var(--ag-fx-duration-md);
  margin-left: auto;
}

:global(.nav-button[aria-expanded="true"] .chevron) {
  transform: rotate(90deg);
}

:global(.nav-button .collapsed-indicator) {
  display: none;
  position: absolute;
  bottom: -1px;
  right: -1px;
  width: var(--ag-space-3);
  height: var(--ag-space-3);
}

:global(.nav-button .collapsed-indicator svg) {
  color: var(--ag-text-muted);
  transform: rotate(315deg);
}

:global(.nav-button .nav-label) {
  flex-grow: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: opacity var(--ag-sidebar-transition-duration)
    var(--ag-sidebar-transition-easing);
}

:global(.nav-button .chevron) {
  transition: opacity var(--ag-sidebar-transition-duration)
    var(--ag-sidebar-transition-easing);
  white-space: nowrap;
}

:global(ag-sidebar[collapsed] .nav-button) {
  width: auto;
  padding: var(--ag-space-2);
}

:global(ag-sidebar[collapsed] .nav-button .nav-label),
:global(ag-sidebar[collapsed] .nav-button .chevron) {
  opacity: 0;
  pointer-events: none;
  display: none;
}

:global(ag-sidebar[collapsed] .nav-button[aria-expanded] .collapsed-indicator) {
  display: block;
}

:global(.nav-sublink) {
  display: block;
  padding: var(--ag-space-2) var(--ag-space-3);
  margin-block-end: var(--ag-space-1);
  color: inherit;
  text-decoration: none;
  border-radius: var(--ag-radius-sm);
  transition: background var(--ag-fx-duration-sm);
}

:global(.nav-sublink:hover) {
  background: var(--ag-background-secondary);
}

:global(.nav-button.active),
:global(.nav-sublink.active) {
  background: var(--ag-primary-background);
  color: var(--ag-primary-text);
  font-weight: 500;
}
</style>
