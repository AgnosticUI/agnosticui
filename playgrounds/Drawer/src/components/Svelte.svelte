<script>
  import { Button, Drawer } from 'agnostic-svelte';
  let drawer = null;
  const openDrawer = () => {
    if (drawer) {
      drawer.show();
    }
  };

  const closeDrawer = () => {
    if (drawer) {
      drawer.hide();
    }
  };

  const assignDrawerRef = (ev) => {
    drawer = ev.detail.instance;
  };
const props = ['drawer1', 'drawer2', 'drawer3', 'drawer4'].map((item) => {
  return {
    id: `test-${item}`,
    dialogRoot: "#portal-root",
    title: 'Test Drawer',
    classNames: {
      // Note we don't have to pass in ALL classNames props and those
      // not included will fallback to react-a11y-dialog's defaults
      // See https://github.com/KittyGiraudel/react-a11y-dialog#api
      title: 'h3 mbe18 h4 mbe18 flex justify-center',
    }
  }
})
</script>
<section>
  <div class="h4 mbe32 flex items-center">
    <img width="24" height="24" src="/assets/Svelte-icon.svg" alt="Svelte logo" class="mie12" />Svelte Drawer
  </div>
  <Button
    type="button"
    data-a11y-dialog-show="drawer-top-sveltetest"
    mode="primary"
    isBordered
    isBlock
    isRounded
  >
    Open Drawer Top
  </Button>
  <Drawer
    id="drawer-top-sveltetest"
    drawerRoot="#portal-root"
    placement="top"
    title="My Drawer Title"
  >
    <div class="flex-fill">
      <p>This is main drawer slot. To test positioning, update the placement property to one of: start | end | top | bottom.</p>
    </div>
  </Drawer>
  <div class="mbs24 mbe16" />
  <Button
    type="button"
    data-a11y-dialog-show="drawer-bottom-sveltetest"
    mode="primary"
    isBordered
    isBlock
    isRounded
  >
    Open Drawer Bottom
  </Button>
  <Drawer
    id="drawer-bottom-sveltetest"
    drawerRoot="#portal-root"
    placement="bottom"
    title="My Drawer Title"
    on:instance={assignDrawerRef}
  >
    <div class="flex-fill">
      <p>This is main drawer slot. To test positioning, update the placement property to one of: start | end | top | bottom.</p>
      <button
        class="custom-close-button"
        on:click={closeDrawer}
      >
        Close from within slot using instance
      </button>
    </div>
  </Drawer>
  <div class="mbs24 mbe16" />
  
  <div class="mbs24 mbe16" />
  <Button
    type="button"
    data-a11y-dialog-show="drawer-start-sveltetest"
    mode="primary"
    isBordered
    isBlock
    isRounded
  >
    Open Drawer Start
  </Button>
  <Drawer
    id="drawer-start-sveltetest"
    drawerRoot="#portal-root"
    placement="start"
    title="My Drawer Title"
  >
    <div class="flex-fill">
      <p>This is main drawer slot. To test positioning, update the placement property to one of: start | end | top | bottom.</p>
    </div>
  </Drawer>
  <div class="mbs24 mbe16" />
  <Button
    type="button"
    data-a11y-dialog-show="drawer-end-sveltetest"
    mode="primary"
    isBordered
    isBlock
    isRounded
  >
    Open Drawer End
  </Button>
  <Drawer
    id="drawer-end-sveltetest"
    drawerRoot="#portal-root"
    placement="end"
    title="My Drawer Title"
  >
    <div class="flex-fill" style="display: grid; grid-template-columns: 1fr; grid-template-rows: 100px 1fr; height: 50vh;">
      <div style="background-color: var(--agnostic-primary)"></div>
      <div style="background-color: var(--agnostic-action)"></div>
      <p class="mbs40">Just testing some random use of CSS grid inside the drawer. No biggie.</p>
    </div>
  </Drawer>
</section>

<style>
</style>
