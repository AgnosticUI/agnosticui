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
const props = ['drawer1', 'drawer2', 'drawer3', 'drawer4'].map((item, i) => {
  return {
    id: `test-${item}`,
    drawerRoot: "#portal-root",
    title: `Test Svelte Drawer ${i}`,
  }
})
</script>
<section>
  <div class="h4 mbe32 flex items-center">
    <img width="24" height="24" src="/assets/Svelte-icon.svg" alt="Svelte logo" class="mie12" />Svelte Drawer
  </div>
  <Button
    type="button"
    data-a11y-dialog-show={props[0].id}
    mode="primary"
    isBordered
    isBlock
    isRounded
  >
    Open Drawer Top
  </Button>
  <Drawer
    {...props[0]}
    drawerRoot="#portal-root"
    placement="top"
  >
    <div class="flex-fill">
      <p>This is main drawer slot. To test positioning, update the placement property to one of: start | end | top | bottom.</p>
    </div>
  </Drawer>
  <div class="mbs24 mbe16" />
  <Button
    type="button"
    data-a11y-dialog-show={props[1].id}
    mode="primary"
    isBordered
    isBlock
    isRounded
  >
    Open Drawer Bottom
  </Button>
  <Drawer
    {...props[1]}
    placement="bottom"
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
    data-a11y-dialog-show={props[2].id}
    mode="primary"
    isBordered
    isBlock
    isRounded
  >
    Open Drawer Start
  </Button>
  <Drawer
    {...props[2]}
    placement="start"
  >
    <div class="flex-fill">
      <p>This is main drawer slot. To test positioning, update the placement property to one of: start | end | top | bottom.</p>
    </div>
  </Drawer>
  <div class="mbs24 mbe16" />
  <Button
    type="button"
    data-a11y-dialog-show={props[3].id}
    mode="primary"
    isBordered
    isBlock
    isRounded
  >
    Open Drawer End
  </Button>
  <Drawer
    placement="end"
    {...props[3]}
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
