<script setup lang="ts">
import { ref } from "vue";
import Button from "../../src/components/Button.vue";
import Dialog from "../../src/components/Dialog.vue";

// TODO -- come back and add input once it's ported
// import Input from "../../src/components/Input.vue";

let dialog = ref(null);
const openDialog = () => {
  if (dialog) {
    dialog.value.show();
  }
};

const assignDialogRef = (instance) => {
  dialog.value = instance;
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
        <!-- <Input
          :is-rounded="true"
          label="Email (required)"
          type="email"
          name="EMAIL"
          id="email"
          placeholder="email@example.com"
          required
        /> -->
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
</template>
