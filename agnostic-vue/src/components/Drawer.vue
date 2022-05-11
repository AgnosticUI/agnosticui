<template>
  <Dialog
    :id="id"
    :dialog-root="drawerRoot"
    :drawer-placement="placement"
    :title-id="`${title.replaceAll(' ', '-').toLowerCase()}-id`"
    :role="role"
    @instance="assignDrawerRef"
    close-button-label="Close drawer"
    :is-animation-fade-in="isAnimationFadeIn"
  >
    <template #title="{title}">
      {{ title }}
    </template>
    <slot />
  </Dialog>
</template>
<script setup lang="ts">
import { computed, useCssModule } from "vue";
import Dialog from "./Dialog.vue";
import { DialogDrawerPlacement, DialogRoles } from "./DialogApi";

export interface DrawerProps {
  id: string;
  drawerRoot: string;
  placement?: DialogDrawerPlacement;
  title?: string;
  /**
   * Passing in 'alertdialog' for this can be used to make a "sticky" drawer such that
   * ESC or clicking the overlay does NOT close the drawer.
   */
  role?: DialogRoles;
  isAnimationFadeIn?: boolean;
}

const emit = defineEmits(["instance"]);

const assignDrawerRef = (instance) => {
  emit("instance", instance);
};

const props = withDefaults(defineProps<DrawerProps>(), {
  title: "",
  role: "dialog",
  isAnimationFadeIn: true,
});
</script>
