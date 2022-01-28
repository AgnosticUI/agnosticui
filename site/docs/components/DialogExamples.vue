<script>
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import { Button, Dialog, Input } from "agnostic-vue";

export default {
  name: "DialogExamples",
  components: {
    Button,
    Dialog,
    Input,
  },
  setup() {
    let dialog = null;
    const openDialog = () => {
      if (dialog) {
        dialog.show();
      }
    };

    const assignDialogRef = (instance) => {
      dialog = instance;
    };

    return {
      openDialog,
      assignDialogRef,
    };
  },
};
</script>
<template>
  <section>
    <h3>Dialog</h3>
    <p class="mbe24">
      The following button opens the dialog because we've obtained a dialog <code>instance</code>
      handle via the <code>@instance="assignDialogRef"</code> event hook. This is Vue syntax but the
      other framework implementations emit the <code>instance</code> event similarly:
    </p>
    <Button
      mode="primary"
      :is-bordered="true"
      :is-block="true"
      :is-rounded="true"
      type="button"
      @click="openDialog"
    >
      Open dialog via dialogRef
    </Button>
    <p class="mbs24 mbe16">
      The following also opens because a11y-dialog will bind to element with <code>data-a11y-dialog-show</code> attribute:
    </p>
    <button />
    <Button
      type="button"
      data-a11y-dialog-show="a11y-dialog"
      mode="primary"
      :is-bordered="true"
      :is-block="true"
      :is-rounded="true"
    >
      Open the dialog via data attribute
    </Button>
    <Dialog
      id="a11y-dialog"
      dialog-root="body"
      :is-animation-fade-in="true"
      :is-animation-slide-up="true"
      role="dialog"
      :class-names="{
        title: 'h4 mbe18 flex justify-center',
      }"
      @instance="assignDialogRef"
    >
      <template #title>
        My Dialog
      </template>
      <p class="mbs16 mbe16">
        Fill in the form below to receive our newsletter!
      </p>
      <form class="dialog-form-demo">
        <Input
          :is-rounded="true"
          label="Email (required)"
          type="email"
          name="EMAIL"
          id="email"
          placeholder="email@example.com"
          required
        />
        <div class="mbe16" />
        <Button
          type="submit"
          mode="primary"
          :is-rounded="true"
          :is-block="true"
        >
          Sign Up
        </Button>
      </form>
    </Dialog>
  </section>
  <section>
    <h3 class="mbe16">Dialog 2</h3>
    <Button
      type="button"
      mode="primary"
      :is-bordered="true"
      :is-block="true"
      :is-rounded="true"
      data-a11y-dialog-show="a11y-dialog2"
    >
      Open dialog 2
    </Button>
    <Dialog
      id="a11y-dialog2"
      dialog-root="#app"
      close-button-label="
      My
      close
      button
      label"
      close-button-position="last"
      role="alertdialog"
      :class-names="{
        container: this.$style['my-dialog-container'],
        overlay: this.$style['my-dialog-overlay'],
        document: this.$style['my-dialog-content'],
        title: `h4 mbe18 flex justify-center`,
        closeButton: this.$style['close-button-demo'],
      }"
    >
      <template #title>
        Dialog — Custom Close Button
      </template>
      <p
        class="mbs16 mbe16"
        id="dialog-example-description"
      >
        For the cancel button we have used an AgnosticUI <code>Button</code> of type <code>type="faux</code>
        This generates a div that looks like a button. As <code>vue-a11y-dialog</code> generates its own
        button around <code>closeButtonContent</code>, this prevents an unwanted nested buttons situation.
      </p>
      <p class="mbe16">
        You'll also notice that this dialog did not &ldquo;slide up&rdquo; or &ldquo;fade in&rdquo;
        as we did NOT pass in either <code>:is-animation-fade-in="true"</code> or <code>:is-animation-slide-up="true"</code>.
        Both of these default to <code>false</code>.
      </p>
      <p class="mbe16">
        Lastly, you'll note that the role is <code>alertdialog</code> which results in opting out of
        ESC closing the dialog.
      </p>
      <form class="dialog-form-demo">
        <Input
          :is-rounded="true"
          label="Email (required)"
          type="email"
          name="EMAIL"
          id="email"
          placeholder="email@example.com"
          required
        />
        <div class="mbe16" />
        <Button
          type="submit"
          mode="primary"
          :is-rounded="true"
          :is-block="true"
        >
          Sign Up
        </Button>
      </form>
      <template #closeButtonContent>
        <Button
          type="faux"
          :is-rounded="true"
          :is-bordered="true"
          :is-block="true"
        >
          Cancel
        </Button>
      </template>
    </Dialog>
  </section>
</template>
<style module>
.close-button-demo {
  background-color: transparent;
  border: transparent;
  width: 100%;
  margin-block-start: 0.5rem;
}
.my-dialog-container {
  display: flex;
  z-index: 2;
  /* This is just to override the silly centered app demo css :) */
  text-align: left;
  z-index: 1001;
}

.my-dialog-overlay {
  background-color: rgba(43, 46, 56, 0.7);
  animation: fade-in 200ms both;
}

.my-dialog-overlay,
.my-dialog-container {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

/* Crucial—dialog w/not hide visually without this rule */
.my-dialog-container[aria-hidden="true"] {
  display: none;
}

.my-dialog-content {
  background-color: rgb(255, 255, 255);
  margin: auto;
  z-index: 2;
  position: relative;
  padding-block-start: 1.5rem;
  padding-block-end: 2rem;
  padding-inline-start: 2em;
  padding-inline-end: 2rem;
  max-width: 90%;
  width: 600px;
  border-radius: 0.625rem;
}

.my-close-button {
  display: inline-block;
  cursor: pointer;
  padding-inline-start: 2rem;
  padding-inline-end: 2rem;
  background-color: transparent;
  border-radius: 0.1875rem;
  border: 1px solid #036dc9;
  color: #036dc9;
  line-height: 2rem;
  text-align: center;
}

.my-dialog-title {
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 0.005em;
  margin-block-start: 0.5rem;
  margin-block-end: 0.25rem;
}
</style>
