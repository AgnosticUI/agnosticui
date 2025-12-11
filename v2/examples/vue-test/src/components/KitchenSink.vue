<script setup lang="ts">
import { ref } from "vue";
import { VueAlert } from "./ag/Alert/vue";
import { VueAspectRatio } from "./ag/AspectRatio/vue";
import { VueAvatar } from "./ag/Avatar/vue";
import { VueBadge } from "./ag/Badge/vue";
import { VueBadgeFx } from "./ag/BadgeFx/vue";
import { VueBreadcrumb } from "./ag/Breadcrumb/vue";
import { VueButton } from "./ag/Button/vue";
import { VueCard } from "./ag/Card/vue";
import { VueCheckbox } from "./ag/Checkbox/vue";
import { VueCombobox } from "./ag/Combobox/vue";
import { VueDivider } from "./ag/Divider/vue";
import { VueFieldset } from "./ag/Fieldset/vue";
import { VueFlexRow, VueFlexCol } from "./ag/Flex/vue";
import { VueHeader } from "./ag/Header/vue";
import { VueIcon } from "./ag/Icon/vue";
import { VueIconButton } from "./ag/IconButton/vue";
import { VueIconButtonFx } from "./ag/IconButtonFx/vue";
import { VueImage } from "./ag/Image/vue";
import { VueInput } from "./ag/Input/vue";
import { VueMark } from "./ag/Mark/vue";
import { VueProgressRing } from "./ag/ProgressRing/vue";
import { VueRadio } from "./ag/Radio/vue";
import { VueRating } from "./ag/Rating/vue";
import { VueScrollProgress } from "./ag/ScrollProgress/vue";
import { VueScrollToButton } from "./ag/ScrollToButton/vue";
import { VueSelect } from "./ag/Select/vue";
import { VueSidebar } from "./ag/Sidebar/vue";
import { VueSidebarNav, VueSidebarNavItem } from "./ag/SidebarNav/vue";
import { VueSlider } from "./ag/Slider/vue";
import { VueTag } from "./ag/Tag/vue";
import { VueToggle } from "./ag/Toggle/vue";
import { CheckCircle2, Info, AlertTriangle, XCircle, Settings, Search, Edit, Trash2, Star, Heart, Download, Home, ChevronRight } from "lucide-vue-next";

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

const handleBreadcrumbClick = (event: { item: { label: string; href: string } }) => {
  console.log(`Breadcrumb clicked: ${event.item.label}`);
};

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
    await customElements.whenDefined('ag-sidebar');
    console.log("ag-sidebar is now defined!");
  }

  console.log("Sidebar has toggleCollapse after wait?", typeof sidebar?.toggleCollapse);
  console.log("All sidebar properties:", Object.getOwnPropertyNames(sidebar));
  console.log("Sidebar methods from prototype:", Object.getOwnPropertyNames(Object.getPrototypeOf(sidebar)));

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
        v-model:value="selectValue"
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
        <VueIcon type="info" size="16" noFill>
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
      <VueAlert class="mbe2" type="success">Success alert</VueAlert>
      <VueAlert class="mbe2" type="info">Info alert</VueAlert>
      <VueAlert class="mbe2" type="warning">Warning alert</VueAlert>
      <VueAlert class="mbe2" type="error">Error alert</VueAlert>
    </section>

    <VueDivider />

    <!-- AspectRatio -->
    <section class="component-section">
      <h2>Aspect Ratio</h2>
      <h3 class="subsection-title">16:9 Responsive Container</h3>
      <VueAspectRatio
        :width="16"
        :height="9"
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
          <a href="#" style="text-decoration: none; color: var(--ag-primary); font-weight: 700; font-size: 1.25rem;">
            AgnosticUI
          </a>
        </template>
        <nav>
          <ul style="display: flex; gap: 1.5rem; list-style: none; margin: 0; padding: 0;">
            <li><a href="#home" style="text-decoration: none; color: inherit;">Home</a></li>
            <li><a href="#about" style="text-decoration: none; color: inherit;">About</a></li>
            <li><a href="#contact" style="text-decoration: none; color: inherit;">Contact</a></li>
          </ul>
        </nav>
      </VueHeader>
    </section>

    <VueDivider />

    <!-- Icon Buttons -->
    <section class="component-section">
      <h2>Icon Buttons</h2>
      <VueFlexRow gap="md" wrap="wrap">
        <VueIconButton label="Settings">
          <Settings :size="18" class="expand" />
        </VueIconButton>
        <VueIconButton label="Search">
          <Search :size="18" class="expand" />
        </VueIconButton>
        <VueIconButton label="Edit">
          <Edit :size="18" class="expand" />
        </VueIconButton>
        <VueIconButton label="Delete">
          <Trash2 :size="18" class="expand" />
        </VueIconButton>
        <VueIconButton label="Primary" variant="primary">
          <Star :size="18" class="expand" />
        </VueIconButton>
        <VueIconButton label="Success" variant="success">
          <CheckCircle2 :size="18" class="expand" />
        </VueIconButton>
      </VueFlexRow>
    </section>

    <VueDivider />

    <!-- Progress Ring -->
    <section class="component-section">
      <h2>Progress Ring</h2>
      <VueFlexRow gap="lg" wrap="wrap">
        <VueProgressRing :value="25" />
        <VueProgressRing :value="50" />
        <VueProgressRing :value="75" />
        <VueProgressRing :value="100" variant="success" />
      </VueFlexRow>
    </section>

    <VueDivider />

    <!-- BadgeFx (Animated Badges) -->
    <section class="component-section">
      <h2>Badge Effects (BadgeFx)</h2>
      <VueFlexRow gap="md" wrap="wrap">
        <VueBadgeFx fx="bounce" variant="success">Bounce</VueBadgeFx>
        <VueBadgeFx fx="pulse" variant="info">Pulse</VueBadgeFx>
        <VueBadgeFx fx="jelly" fx-speed="lg" variant="monochrome">Jelly</VueBadgeFx>
        <VueBadgeFx fx="shimmer" fx-speed="xl" variant="danger">Shimmer</VueBadgeFx>
        <VueBadgeFx fx="glow" variant="primary">Glow</VueBadgeFx>
        <VueBadgeFx fx="ripple" variant="info">Ripple</VueBadgeFx>
      </VueFlexRow>
    </section>

    <VueDivider />

    <!-- IconButtonFx (Animated Icon Buttons) -->
    <section class="component-section">
      <h2>Icon Button Effects (IconButtonFx)</h2>
      <VueFlexRow gap="md" wrap="wrap">
        <VueIconButtonFx fx="pulse" variant="primary" label="Pulse">
          <Heart :size="18" class="expand" />
        </VueIconButtonFx>
        <VueIconButtonFx fx="bounce" variant="success" label="Bounce">
          <Download :size="18" class="expand" />
        </VueIconButtonFx>
        <VueIconButtonFx fx="shake" variant="warning" label="Shake">
          <AlertTriangle :size="18" class="expand" />
        </VueIconButtonFx>
        <VueIconButtonFx fx="spin" variant="ghost" label="Spin">
          <Settings :size="18" class="expand" />
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
        @breadcrumb-click="handleBreadcrumbClick"
        class="mbe3"
      />

      <h3 class="subsection-title">Slash Separator</h3>
      <VueBreadcrumb
        type="slash"
        :items="breadcrumbItems"
        @breadcrumb-click="handleBreadcrumbClick"
        class="mbe3"
      />

      <h3 class="subsection-title">Arrow Separator</h3>
      <VueBreadcrumb
        type="arrow"
        :items="breadcrumbItems"
        @breadcrumb-click="handleBreadcrumbClick"
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
  transition: opacity var(--ag-sidebar-transition-duration) var(--ag-sidebar-transition-easing);
}

:global(.nav-button .chevron) {
  transition: opacity var(--ag-sidebar-transition-duration) var(--ag-sidebar-transition-easing);
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
