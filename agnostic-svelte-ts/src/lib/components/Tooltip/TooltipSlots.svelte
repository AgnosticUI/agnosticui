<style>
  div {
    margin-block-end: 1rem;
  }
  
  /* Hack: probably shouldn't target aria but it's just for demo purposes */
  :global(.tooltips-container [aria-describedby^="tip-"]) {
    width: 100px;
    height: 100px;
    padding: var(--fluid-6) var(--fluid-12);
    border-radius: var(--agnostic-radius);
    border: 1px solid var(--agnostic-gray-light);
    display: flex;
    align-items: center;
    text-align: center;
  }
</style>

<script lang="ts">
  import Tooltip from "./Tooltip.svelte";
</script>

<div class="h4 mbs40">Tooltips</div>
<div class="text-center tooltips-container">
  <section class="mbs56 mbe40 flex-inline justify-between w-100">
    <Tooltip placement="top-start">
      Tooltip top-start
      <div slot="content">This is the tooltip content from named slot.</div>
    </Tooltip>
    <Tooltip placement="top">
      Tooltip top
      <div slot="content">This is the tooltip content from named slot.</div>
    </Tooltip>
    <Tooltip placement="top-end">
      Tooltip top-end
      <div slot="content">This is the tooltip content from named slot.</div>
    </Tooltip>
  </section>
  <section
    class="flex flex-column items-center"
    style="gap: var(--fluid-18);"
  >
    <Tooltip placement="left-start">
      Tooltip left-start
      <div slot="content">This is the tooltip content from named slot.</div>
    </Tooltip>
    <Tooltip placement="left">
      Tooltip left
      <div slot="content">This is the tooltip content from named slot.</div>
    </Tooltip>
    <Tooltip placement="left-end">
      Tooltip left-end
      <div slot="content">This is the tooltip content from named slot.</div>
    </Tooltip>
    <Tooltip placement="right-start">
      Tooltip right-start
      <div slot="content">This is the tooltip content from named slot.</div>
    </Tooltip>
    <Tooltip placement="right">
      Tooltip right
      <div slot="content">This is the tooltip content from named slot.</div>
    </Tooltip>
    <Tooltip placement="right-end">
      Tooltip right-end
      <div slot="content">This is the tooltip content from named slot.</div>
    </Tooltip>
  </section>
  <section class="mbs56 mbe40 flex-inline justify-between w-100">
    <Tooltip placement="bottom-start">
      Tooltip bottom-start
      <div slot="content">This is the tooltip content from named slot.</div>
    </Tooltip>
    <Tooltip placement="bottom">
      Tooltip bottom
      <div slot="content">This is the tooltip content from named slot.</div>
    </Tooltip>
    <Tooltip placement="bottom-end">
      Tooltip bottom-end
      <div slot="content">This is the tooltip content from named slot.</div>
    </Tooltip>
  </section>
</div>
