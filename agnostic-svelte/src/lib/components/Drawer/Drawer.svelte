<script>
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
  // dialog | alertdialog
  export let placement;
  export let title = "";
  export let role = "dialog";
  export let isAnimationFadeIn = true;
</script>
<Dialog
  id={id}
  dialogRoot={drawerRoot}
  drawerPlacement={placement}
  titleId="{`${title.replaceAll(' ', '-').toLowerCase()}-id`}"
  role={role}
  on:instance={assignDrawerRef}
  isAnimationFadeIn={isAnimationFadeIn}
  closeButtonLabel="Close drawer"
>
  <slot name="title">
    {title}
  </slot>
  <slot />
</Dialog>
