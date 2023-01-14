<style>
  :global(.tooltips-container [aria-describedby^="tip-"]) {
    width: 200px;
    height: 200px;
    padding: var(--fluid-6) var(--fluid-12);
    border-radius: var(--agnostic-radius);
    border: 1px solid var(--agnostic-gray-light);
    display: flex;
    align-items: center;
    text-align: center;
  }
</style>
<script lang="ts">
	import 'agnostic-svelte-ts/css/common.min.css';
	import 'agnostic-svelte-ts/css/opinions.min.css';
  import { Tooltip } from 'agnostic-svelte-ts';
</script>
<section>
  <div class="h4 mbe32 flex items-center">
    <img width="24" height="24" src="/assets/Svelte-icon.svg" alt="Svelte logo" class="mie12" />Svelte (TS) Tooltip
  </div>
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
</section>
