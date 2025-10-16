<template>
  <section>
    <div class="mbe4">
      <h3>Basic Dialog</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueButton @click="showBasicDialog">Open Basic Dialog</VueButton>
      <VueDialog
        v-model:open="isBasicDialogOpen"
        heading="Basic Dialog"
        description="This is a basic dialog with heading and description."
      >
        <p>This is the basic dialog content.</p>
      </VueDialog>
    </div>

    <div class="mbe4">
      <h3>With Header and Footer</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueButton @click="showHeaderFooterDialog">Open Dialog with Header/Footer</VueButton>
      <VueDialog v-model:open="isHeaderFooterDialogOpen">
        <VueDialogHeader>
          <h2 style="margin: 0; font-size: var(--ag-font-size-lg);">Custom Header</h2>
        </VueDialogHeader>
        <p>This dialog uses custom header and footer components.</p>
        <VueDialogFooter>
          <div style="display: flex; gap: 0.5rem; justify-content: flex-end;">
            <VueButton @click="isHeaderFooterDialogOpen = false">Cancel</VueButton>
            <VueButton
              variant="primary"
              @click="isHeaderFooterDialogOpen = false"
            >Confirm</VueButton>
          </div>
        </VueDialogFooter>
      </VueDialog>
    </div>

    <div class="mbe4">
      <h3>With Close Button</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueButton @click="showCloseButtonDialog">Open Dialog with Close Button</VueButton>
      <VueDialog
        v-model:open="isCloseButtonDialogOpen"
        heading="Dialog with Close Button"
        description="Click the X button to close this dialog."
        show-close-button
      >
        <p>This dialog includes a close button in the top-right corner.</p>
      </VueDialog>
    </div>

    <div class="mbe4">
      <h3>No Close on Escape</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueButton @click="showNoEscapeDialog">Open No Escape Dialog</VueButton>
      <VueDialog
        v-model:open="isNoEscapeDialogOpen"
        heading="No Close on Escape"
        description="Pressing Escape will not close this dialog."
        no-close-on-escape
        show-close-button
      >
        <p>Try pressing the Escape key - the dialog will not close.</p>
        <p>Use the close button instead.</p>
      </VueDialog>
    </div>

    <div class="mbe4">
      <h3>No Close on Backdrop</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueButton @click="showNoBackdropDialog">Open No Backdrop Close Dialog</VueButton>
      <VueDialog
        v-model:open="isNoBackdropDialogOpen"
        heading="No Close on Backdrop"
        description="Clicking the backdrop will not close this dialog."
        no-close-on-backdrop
        show-close-button
      >
        <p>Try clicking outside the dialog - it will not close.</p>
        <p>Use the close button instead.</p>
      </VueDialog>
    </div>

    <div class="mbe4">
      <h3>Event Handling</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueButton @click="showEventDialog">Open Event Dialog</VueButton>
      <VueDialog
        v-model:open="isEventDialogOpen"
        heading="Event Testing"
        description="This dialog demonstrates event handling."
        show-close-button
        @dialog-open="handleDialogOpen"
        @dialog-close="handleDialogClose"
        @dialog-cancel="handleDialogCancel"
      >
        <p>Try closing this dialog in different ways:</p>
        <ul>
          <li>Click the X button (triggers dialog-close)</li>
          <li>Press Escape (triggers dialog-cancel)</li>
          <li>Click the backdrop (triggers dialog-cancel)</li>
        </ul>
        <p v-if="lastEvent" style="margin-top: 1rem; padding: 0.5rem; background: var(--ag-background-secondary); border-radius: 4px;">
          Last event: <strong>{{ lastEvent }}</strong>
        </p>
      </VueDialog>
    </div>
  </section>
</template>

<script>
import VueDialog, { VueDialogHeader, VueDialogFooter } from "agnosticui-core/dialog/vue";
import VueButton from "agnosticui-core/button/vue";

export default {
  name: "DialogExamples",
  components: {
    VueDialog,
    VueDialogHeader,
    VueDialogFooter,
    VueButton,
  },
  data() {
    return {
      isBasicDialogOpen: false,
      isHeaderFooterDialogOpen: false,
      isCloseButtonDialogOpen: false,
      isNoEscapeDialogOpen: false,
      isNoBackdropDialogOpen: false,
      isEventDialogOpen: false,
      lastEvent: null,
    };
  },
  methods: {
    showBasicDialog() {
      this.isBasicDialogOpen = true;
    },
    showHeaderFooterDialog() {
      this.isHeaderFooterDialogOpen = true;
    },
    showCloseButtonDialog() {
      this.isCloseButtonDialogOpen = true;
    },
    showNoEscapeDialog() {
      this.isNoEscapeDialogOpen = true;
    },
    showNoBackdropDialog() {
      this.isNoBackdropDialogOpen = true;
    },
    showEventDialog() {
      this.isEventDialogOpen = true;
      this.lastEvent = null;
    },
    handleDialogOpen() {
      this.lastEvent = "dialog-open";
    },
    handleDialogClose() {
      this.lastEvent = "dialog-close";
    },
    handleDialogCancel() {
      this.lastEvent = "dialog-cancel";
    },
  },
};
</script>
