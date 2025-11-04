<template>
  <section>
    <div class="mbe4">
      <h3>Drawer from Start (Left)</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueButton @click="showStartDrawer">Open Start Drawer</VueButton>
      <VueDrawer
        :open="isStartDrawerOpen"
        position="start"
        heading="Navigation"
        show-close-button
        @drawer-close="isStartDrawerOpen = false"
      >
        <nav>
          <ul style="list-style: none; padding: 0;">
            <li style="padding: 0.5rem 0;"><a href="#" @click.prevent>Dashboard</a></li>
            <li style="padding: 0.5rem 0;"><a href="#" @click.prevent>Projects</a></li>
            <li style="padding: 0.5rem 0;"><a href="#" @click.prevent>Team</a></li>
            <li style="padding: 0.5rem 0;"><a href="#" @click.prevent>Settings</a></li>
          </ul>
        </nav>
      </VueDrawer>
    </div>

    <div class="mbe4">
      <h3>Drawer from End (Right)</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueButton @click="showEndDrawer">Open End Drawer</VueButton>
      <VueDrawer
        :open="isEndDrawerOpen"
        position="end"
        heading="Settings"
        show-close-button
        @drawer-close="isEndDrawerOpen = false"
      >
        <div>
          <h4 style="margin-top: 0;">Preferences</h4>
          <label style="display: block; margin-bottom: 1rem;">
            <input type="checkbox" style="margin-right: 0.5rem;" />
            Enable notifications
          </label>
          <label style="display: block; margin-bottom: 1rem;">
            <input type="checkbox" style="margin-right: 0.5rem;" />
            Dark mode
          </label>
          <label style="display: block; margin-bottom: 1rem;">
            <input type="checkbox" style="margin-right: 0.5rem;" />
            Auto-save
          </label>
        </div>
        <div slot="footer">
          <div style="display: flex; gap: 0.5rem; justify-content: flex-end;">
            <VueButton @click="isEndDrawerOpen = false">Cancel</VueButton>
            <VueButton
              variant="primary"
              @click="isEndDrawerOpen = false"
            >Save</VueButton>
          </div>
        </div>
      </VueDrawer>
    </div>

    <div class="mbe4">
      <h3>Drawer from Top</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueButton @click="showTopDrawer">Open Top Drawer</VueButton>
      <VueDrawer
        :open="isTopDrawerOpen"
        position="top"
        heading="Notifications"
        show-close-button
        @drawer-close="isTopDrawerOpen = false"
      >
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <div style="padding: 0.75rem; background: var(--ag-background-secondary); border-radius: 4px;">
            <strong>New message</strong>
            <p style="margin: 0.25rem 0 0 0; color: var(--ag-text-secondary); font-size: 0.875rem;">
              You have a new message from Sarah
            </p>
          </div>
          <div style="padding: 0.75rem; background: var(--ag-background-secondary); border-radius: 4px;">
            <strong>Update available</strong>
            <p style="margin: 0.25rem 0 0 0; color: var(--ag-text-secondary); font-size: 0.875rem;">
              A new version is ready to install
            </p>
          </div>
        </div>
      </VueDrawer>
    </div>

    <div class="mbe4">
      <h3>Drawer from Bottom</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueButton @click="showBottomDrawer">Open Bottom Drawer</VueButton>
      <VueDrawer
        :open="isBottomDrawerOpen"
        position="bottom"
        heading="Quick Actions"
        show-close-button
        @drawer-close="isBottomDrawerOpen = false"
      >
        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
          <VueButton>
            <div class="flex-inline items-center">
              <Plus
                :size="16"
                class="mie2"
              />
              New Item
            </div>
          </VueButton>
          <VueButton>
            <div class="flex-inline items-center">
              <Upload
                :size="16"
                class="mie2"
              />
              Upload
            </div>
          </VueButton>
          <VueButton>
            <div class="flex-inline items-center">
              <Download
                :size="16"
                class="mie2"
              />
              Download
            </div>
          </VueButton>
          <VueButton>
            <div class="flex-inline items-center">
              <Share2
                :size="16"
                class="mie2"
              />
              Share
            </div>
          </VueButton>
        </div>
      </VueDrawer>
    </div>

    <div class="mbe4">
      <h3>Drawer with Custom Content</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueButton @click="showCustomDrawer">Open Filter Drawer</VueButton>
      <VueDrawer
        :open="isCustomDrawerOpen"
        position="end"
        show-close-button
        @drawer-close="isCustomDrawerOpen = false"
      >
        <div slot="header">
          <h2 style="margin: 0; font-size: var(--ag-font-size-lg);">
            <div class="flex-inline items-center">
              <Filter
                :size="20"
                class="mie2"
              />
              Filters
            </div>
          </h2>
        </div>
        <div>
          <div style="margin-bottom: 1.5rem;">
            <h4 style="margin: 0 0 0.5rem 0;">Category</h4>
            <label style="display: block; margin-bottom: 0.5rem;">
              <input type="checkbox" style="margin-right: 0.5rem;" />
              Electronics
            </label>
            <label style="display: block; margin-bottom: 0.5rem;">
              <input type="checkbox" style="margin-right: 0.5rem;" />
              Clothing
            </label>
            <label style="display: block; margin-bottom: 0.5rem;">
              <input type="checkbox" style="margin-right: 0.5rem;" />
              Books
            </label>
          </div>
          <div style="margin-bottom: 1.5rem;">
            <h4 style="margin: 0 0 0.5rem 0;">Price Range</h4>
            <input type="range" min="0" max="1000" style="width: 100%;" />
          </div>
        </div>
        <div slot="footer">
          <div style="display: flex; gap: 0.5rem; justify-content: flex-end;">
            <VueButton @click="isCustomDrawerOpen = false">Clear</VueButton>
            <VueButton
              variant="primary"
              @click="isCustomDrawerOpen = false"
            >Apply Filters</VueButton>
          </div>
        </div>
      </VueDrawer>
    </div>
  </section>
</template>

<script>
import VueDrawer from "agnosticui-core/drawer/vue";
import VueButton from "agnosticui-core/button/vue";
import { Plus, Upload, Download, Share2, Filter } from "lucide-vue-next";

export default {
  name: "DrawerExamples",
  components: {
    VueDrawer,
    VueButton,
    Plus,
    Upload,
    Download,
    Share2,
    Filter,
  },
  data() {
    return {
      isStartDrawerOpen: false,
      isEndDrawerOpen: false,
      isTopDrawerOpen: false,
      isBottomDrawerOpen: false,
      isCustomDrawerOpen: false,
    };
  },
  methods: {
    showStartDrawer() {
      this.isStartDrawerOpen = true;
    },
    showEndDrawer() {
      this.isEndDrawerOpen = true;
    },
    showTopDrawer() {
      this.isTopDrawerOpen = true;
    },
    showBottomDrawer() {
      this.isBottomDrawerOpen = true;
    },
    showCustomDrawer() {
      this.isCustomDrawerOpen = true;
    },
  },
};
</script>
