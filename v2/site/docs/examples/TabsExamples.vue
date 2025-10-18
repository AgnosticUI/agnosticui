<template>
  <section>
    <div class="mbe4">
      <h3>Basic Tabs</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueTabs aria-label="Basic tabs example">
        <VueTab panel="panel-1">Tab 1</VueTab>
        <VueTab panel="panel-2">Tab 2</VueTab>
        <VueTab panel="panel-3">Tab 3</VueTab>
        <VueTabPanel panel="panel-1">
          <p>Content for Tab 1</p>
        </VueTabPanel>
        <VueTabPanel panel="panel-2">
          <p>Content for Tab 2</p>
        </VueTabPanel>
        <VueTabPanel panel="panel-3">
          <p>Content for Tab 3</p>
        </VueTabPanel>
      </VueTabs>
    </div>

    <div class="mbe4">
      <h3>Vertical Orientation</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueTabs orientation="vertical" aria-label="Vertical tabs example">
        <VueTab panel="panel-v1">Profile</VueTab>
        <VueTab panel="panel-v2">Settings</VueTab>
        <VueTab panel="panel-v3">Notifications</VueTab>
        <VueTabPanel panel="panel-v1">
          <p>Profile settings and information</p>
        </VueTabPanel>
        <VueTabPanel panel="panel-v2">
          <p>Application settings and preferences</p>
        </VueTabPanel>
        <VueTabPanel panel="panel-v3">
          <p>Notification preferences and history</p>
        </VueTabPanel>
      </VueTabs>
    </div>

    <div class="mbe4">
      <h3>Disabled Tab</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueTabs aria-label="Tabs with disabled tab">
        <VueTab panel="panel-d1">Available</VueTab>
        <VueTab panel="panel-d2" :disabled="true">Disabled</VueTab>
        <VueTab panel="panel-d3">Also Available</VueTab>
        <VueTabPanel panel="panel-d1">
          <p>This tab is available</p>
        </VueTabPanel>
        <VueTabPanel panel="panel-d2">
          <p>This tab is disabled</p>
        </VueTabPanel>
        <VueTabPanel panel="panel-d3">
          <p>This tab is also available</p>
        </VueTabPanel>
      </VueTabs>
    </div>

    <div class="mbe4">
      <h3>Automatic Activation</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <p style="margin-bottom: 0.5rem; font-size: 0.875rem; color: var(--ag-text-secondary);">
        With automatic activation, tabs are selected as you navigate with arrow keys.
      </p>
      <VueTabs activation="automatic" aria-label="Automatic activation tabs">
        <VueTab panel="panel-a1">Tab 1</VueTab>
        <VueTab panel="panel-a2">Tab 2</VueTab>
        <VueTab panel="panel-a3">Tab 3</VueTab>
        <VueTabPanel panel="panel-a1">
          <p>Content for Tab 1 (automatic)</p>
        </VueTabPanel>
        <VueTabPanel panel="panel-a2">
          <p>Content for Tab 2 (automatic)</p>
        </VueTabPanel>
        <VueTabPanel panel="panel-a3">
          <p>Content for Tab 3 (automatic)</p>
        </VueTabPanel>
      </VueTabs>
    </div>

    <div class="mbe4">
      <h3>Rich Content</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueTabs aria-label="Tabs with rich content">
        <VueTab panel="panel-r1">
          <div class="flex-inline items-center">
            <Info :size="16" class="mie2" />
            Overview
          </div>
        </VueTab>
        <VueTab panel="panel-r2">
          <div class="flex-inline items-center">
            <Settings :size="16" class="mie2" />
            Settings
          </div>
        </VueTab>
        <VueTab panel="panel-r3">
          <div class="flex-inline items-center">
            <User :size="16" class="mie2" />
            Profile
          </div>
        </VueTab>
        <VueTabPanel panel="panel-r1">
          <h4 style="margin-top: 0;">Overview</h4>
          <p>Dashboard and statistics go here.</p>
          <ul>
            <li>Total users: 1,234</li>
            <li>Active sessions: 456</li>
            <li>Revenue: $12,345</li>
          </ul>
        </VueTabPanel>
        <VueTabPanel panel="panel-r2">
          <h4 style="margin-top: 0;">Settings</h4>
          <p>Configure your application settings.</p>
          <label style="display: block; margin-bottom: 0.5rem;">
            <input type="checkbox" style="margin-right: 0.5rem;" />
            Enable notifications
          </label>
          <label style="display: block; margin-bottom: 0.5rem;">
            <input type="checkbox" style="margin-right: 0.5rem;" />
            Dark mode
          </label>
        </VueTabPanel>
        <VueTabPanel panel="panel-r3">
          <h4 style="margin-top: 0;">Profile</h4>
          <p>Manage your profile information.</p>
          <div style="margin-top: 1rem;">
            <strong>Name:</strong> John Doe<br />
            <strong>Email:</strong> john@example.com<br />
            <strong>Role:</strong> Administrator
          </div>
        </VueTabPanel>
      </VueTabs>
    </div>

    <div class="mbe4">
      <h3>Event Handling</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueTabs
        :active-tab="activeTab"
        aria-label="Event testing tabs"
        @tab-change="handleTabChange"
      >
        <VueTab panel="panel-e1">Tab 1</VueTab>
        <VueTab panel="panel-e2">Tab 2</VueTab>
        <VueTab panel="panel-e3">Tab 3</VueTab>
        <VueTabPanel panel="panel-e1">
          <p>Content for Tab 1</p>
        </VueTabPanel>
        <VueTabPanel panel="panel-e2">
          <p>Content for Tab 2</p>
        </VueTabPanel>
        <VueTabPanel panel="panel-e3">
          <p>Content for Tab 3</p>
        </VueTabPanel>
      </VueTabs>
      <p v-if="tabChangeMessage">
        {{ tabChangeMessage }}
      </p>
    </div>
    <div class="mbe4">
      <h3>CSS Shadow Parts Customization</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <div v-html="customTabsStyles"></div>
      <VueTabs class="custom-tabs" aria-label="Customized tabs example">
        <VueTab panel="panel-c1">Tab 1</VueTab>
        <VueTab panel="panel-c2">Tab 2</VueTab>
        <VueTab panel="panel-c3">Tab 3</VueTab>
        <VueTabPanel panel="panel-c1">
          <p>Content for Tab 1</p>
        </VueTabPanel>
        <VueTabPanel panel="panel-c2">
          <p>Content for Tab 2</p>
        </VueTabPanel>
        <VueTabPanel panel="panel-c3">
          <p>Content for Tab 3</p>
        </VueTabPanel>
      </VueTabs>
    </div>
  </section>
</template>

<script>
import VueTabs, { VueTab, VueTabPanel } from "agnosticui-core/tabs/vue";
import { Info, Settings, User } from "lucide-vue-next";

export default {
  name: "TabsExamples",
  components: {
    VueTabs,
    VueTab,
    VueTabPanel,
    Info,
    Settings,
    User,
  },
  data() {
    return {
      activeTab: 0,
      tabChangeMessage: null,
      customTabsStyles: `
        <style>
          .custom-tabs::part(ag-tabs-tablist) {
            border-bottom: 2px solid #bada55;
          }
          .custom-tabs::part(ag-tab) {
            font-family: 'Comic Sans MS', cursive, sans-serif;
            font-size: 1.2rem;
            background-color: #f0f0f0;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
          }
          .custom-tabs::part(ag-tab):hover {
            background-color: #e0e0e0;
          }
          .custom-tabs ag-tab[aria-selected="true"]::part(ag-tab) {
            background-color: #bada55;
            color: #fff;
            border-bottom: 2px solid #bada55;
          }
          .custom-tabs::part(ag-tabs-panels) {
            border: 2px solid #bada55;
            border-top: none;
            padding: 1rem;
          }
          .custom-tabs::part(ag-tab-panel) {
            background-color: #f9f9f9;
          }
        </style>
      `,
    };
  },
  methods: {
    handleTabChange(detail) {
      this.activeTab = detail.activeTab;
      this.tabChangeMessage = `Tab changed from ${detail.previousTab} to ${detail.activeTab}`;
    },
  },
};
</script>
