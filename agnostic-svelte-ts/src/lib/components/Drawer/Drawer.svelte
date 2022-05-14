<script lang="ts">
  import type { DrawerRoles } from './api';
  import Dialog from "../Dialog/Dialog.svelte";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  let drawerInstance;
  const assignDrawerRef = (ev) => {
    drawerInstance = ev.detail.instance;
    dispatch("instance", {
      instance: drawerInstance,
    });
  };

  export let id;
  export let drawerRoot;
  export let placement;
  export let title;
  export let role: DrawerRoles = "dialog";
  export let isAnimationFadeIn = true;
</script>
<Dialog
  id={id}
  dialogRoot={drawerRoot}
  drawerPlacement={placement}
  titleId="{`${title.replaceAll(' ', '-').toLowerCase()}-id`}"
  role={role}
  title={title}
  on:instance={assignDrawerRef}
  isAnimationFadeIn={isAnimationFadeIn}
  closeButtonLabel="Close drawer"
>
  <slot />
</Dialog>
