<template>
  <section>
    <div class="mbe4">
      <h3>Basic Menu</h3>
    </div>
    <div class="stacked mbe4">
      <VueMenu menu-aria-label="Menu options">
        Menu
        <template #menu>
          <VueMenuItem value="edit">Edit</VueMenuItem>
          <VueMenuItem value="copy">Copy</VueMenuItem>
          <VueMenuItem value="paste">Paste</VueMenuItem>
          <VueMenuSeparator />
          <VueMenuItem value="delete">Delete</VueMenuItem>
        </template>
      </VueMenu>
    </div>

    <div class="mbe4">
      <h3>Menu with Links</h3>
    </div>
    <div class="stacked mbe4">
      <VueMenu menu-aria-label="Navigation menu">
        Navigation
        <template #menu>
          <VueMenuItem
            value="home"
            href="#home"
          >Home</VueMenuItem>
          <VueMenuItem
            value="about"
            href="#about"
          >About</VueMenuItem>
          <VueMenuItem
            value="contact"
            href="#contact"
          >Contact</VueMenuItem>
          <VueMenuSeparator />
          <VueMenuItem
            value="external"
            href="https://example.com"
            target="_blank"
          >
            External Link
          </VueMenuItem>
        </template>
      </VueMenu>
    </div>

    <div class="mbe4">
      <h3>Disabled Button</h3>
    </div>
    <div class="stacked mbe4">
      <VueMenu
        disabled
        menu-aria-label="Disabled menu"
      >
        Disabled Menu
        <template #menu>
          <VueMenuItem value="item1">Item 1</VueMenuItem>
          <VueMenuItem value="item2">Item 2</VueMenuItem>
        </template>
      </VueMenu>
    </div>

    <div class="mbe4">
      <h3>Menu with Disabled Items</h3>
    </div>
    <div class="stacked mbe4">
      <VueMenu menu-aria-label="Menu with disabled items">
        Mixed States
        <template #menu>
          <VueMenuItem value="enabled1">Enabled Item</VueMenuItem>
          <VueMenuItem
            value="disabled1"
            :disabled="true"
          >Disabled Item</VueMenuItem>
          <VueMenuItem value="enabled2">Another Enabled</VueMenuItem>
          <VueMenuSeparator />
          <VueMenuItem
            value="disabled2"
            :disabled="true"
          >Another Disabled</VueMenuItem>
        </template>
      </VueMenu>
    </div>

    <div class="mbe4">
      <h3>Complex Menu (File Menu)</h3>
    </div>
    <div class="stacked mbe4">
      <VueMenu menu-aria-label="File menu">
        File
        <template #menu>
          <VueMenuItem value="new">New</VueMenuItem>
          <VueMenuItem value="open">Open...</VueMenuItem>
          <VueMenuItem value="recent">Open Recent</VueMenuItem>
          <VueMenuSeparator />
          <VueMenuItem value="save">Save</VueMenuItem>
          <VueMenuItem value="save-as">Save As...</VueMenuItem>
          <VueMenuSeparator />
          <VueMenuItem value="export">Export</VueMenuItem>
          <VueMenuItem value="import">Import</VueMenuItem>
          <VueMenuSeparator />
          <VueMenuItem value="print">Print</VueMenuItem>
          <VueMenuSeparator />
          <VueMenuItem value="close">Close</VueMenuItem>
        </template>
      </VueMenu>
    </div>

    <div class="mbe4">
      <h3>Menu with Sections</h3>
    </div>
    <div class="stacked mbe4">
      <VueMenu menu-aria-label="User menu">
        <div class="flex-inline items-center">
          <User
            :size="16"
            class="mie2"
          />
          User Menu
        </div>
        <template #menu>
          <VueMenuItem value="profile">Profile</VueMenuItem>
          <VueMenuItem value="settings">Settings</VueMenuItem>
          <VueMenuSeparator />
          <VueMenuItem value="help">Help</VueMenuItem>
          <VueMenuItem value="feedback">Send Feedback</VueMenuItem>
          <VueMenuSeparator />
          <VueMenuItem value="logout">Logout</VueMenuItem>
        </template>
      </VueMenu>
    </div>

    <div class="mbe4">
      <h3>Event Handling</h3>
    </div>
    <div class="stacked mbe4">
      <VueMenu
        menu-aria-label="Event testing menu"
        @menu-open="handleMenuOpen"
        @menu-close="handleMenuClose"
        @menu-select="handleMenuSelect"
      >
        Event Test
        <template #menu>
          <VueMenuItem value="option1">Option 1</VueMenuItem>
          <VueMenuItem value="option2">Option 2</VueMenuItem>
          <VueMenuSeparator />
          <VueMenuItem value="option3">Option 3</VueMenuItem>
        </template>
      </VueMenu>
      <p v-if="lastEvent">
        Last event: <strong>{{ lastEvent }}</strong>
      </p>
    </div>
    <div class="mbe4">
      <h3>CSS Shadow Parts Customization</h3>
    </div>
    <div class="stacked mbe4">
      <div v-html="customMenuStyles"></div>
      <VueMenu
        menu-aria-label="Custom menu"
        class="custom-menu-button"
      >
        Custom Menu
        <template #menu>
          <VueMenuItem value="one">Option 1</VueMenuItem>
          <VueMenuItem value="two">Option 2</VueMenuItem>
          <VueMenuSeparator />
          <VueMenuItem value="three">Option 3</VueMenuItem>
        </template>
      </VueMenu>
    </div>
  </section>
</template>

<script>
import VueMenu, {
  VueMenuItem,
  VueMenuSeparator,
} from "agnosticui-core/menu/vue";
import { User } from "lucide-vue-next";

export default {
  name: "MenuExamples",
  components: {
    VueMenu,
    VueMenuItem,
    VueMenuSeparator,
    User,
  },
  data() {
    return {
      lastEvent: null,
      customMenuStyles: `
        <style>
          .custom-menu-button::part(ag-menu-trigger-chevron-button) {
            background-color: #4a5568;
            color: white;
            border: 2px solid #2d3748;
            border-radius: 8px;
          }
          .custom-menu-button::part(ag-menu-label) {
            font-weight: bold;
          }
          .custom-menu-button::part(ag-menu-chevron-icon) {
            color: #a0aec0;
          }
          .custom-menu-button ag-menu::part(ag-menu) {
            background-color: #2d3748;
            border: 1px solid #4a5568;
            border-radius: 8px;
          }
          .custom-menu-button ag-menu::part(ag-menu-item) {
            color: #e2e8f0;
          }
          .custom-menu-button ag-menu::part(ag-menu-item):hover {
            background-color: #4a5568;
          }
          .custom-menu-button ag-menu::part(ag-menu-separator) {
            background-color: #4a5568;
          }
          .custom-menu-button ag-menu-item::part(ag-menu-item-button) {
            color: white;
          }
          .custom-menu-button ag-menu-item::part(ag-menu-item-button):hover {
            color: black;
          }
        </style>
      `,
    };
  },
  methods: {
    handleMenuOpen() {
      this.lastEvent = "menu-open";
    },
    handleMenuClose() {
      this.lastEvent = "menu-close";
    },
    handleMenuSelect(detail) {
      this.lastEvent = `menu-select: ${detail.value}`;
    },
  },
};
</script>
