<script>
  export let size = "";
  /**
   * This is an array of objects in shape like:
   * {
      title: "Tab 3",
      tabPanelComponent: MyTabPanel,
      // This is optional and only if you want to supply your own custom tab buttons.
      // If not passed, we will generate an internal default tab button.
      tabButtonComponent: TabButton3,
    },
   */
  export let tabs = [];
  export let isBorderless = false;
  export let isDisabled = false;
  export let disabledOptions = [];
  export let isSkinned = true;

  const selectTab = (index) => {
    tabs = tabs.map((tab, i) => {
      tab.isActive = index === i ? true : false;
      return tab;
    });
  };
  let activeTabs = tabs.filter((tab) => tab.isActive);
  if (activeTabs.length === 0) {
    selectTab(0);
  }

  const tablistClasses = () => {
    const tabListClass = isSkinned ? "tab-list" : "tab-list-base";
    return [tabListClass, isBorderless ? `tab-borderless` : ""]
      .filter((klass) => klass.length)
      .join(" ");
  };

  const tabButtonClasses = (tab) => {
    const klasses = [
      `tab-item`,
      `tab-button`,
      tab.isActive ? "active" : "",
      size === "large" ? "tab-button-large" : "",
      size === "jumbo" ? "tab-button-jumbo" : "",
    ];
    return klasses.filter((klass) => klass.length).join(" ");
  };
</script>

<style>
.tab-list,
.tab-list-base {
  display: flex;
}

.tab-list,
.tab-skinned {
  flex-wrap: wrap;
  flex-direction: row;
  padding-inline-start: 0;
  margin-block-end: 0;
  border-bottom: var(--agnostic-tabs-border-size, 1px) solid
    var(--agnostic-tabs-bgcolor, var(--agnostic-gray-light));
  transition-property: all;
  transition-duration: var(--agnostic-timing-medium);
}

/* We can ask for .tab-button which is base and skin combined, or, we can utilize .tab-button-base
if we'd like to only blank out buttons but otherwise skin ourselves. */
.tab-button,
.tab-button-base {
  /* Blank out the button */
  background-color: transparent;
  border: 0;
  border-radius: 0;
  box-shadow: none;
  /* Reset margins/padding; this will get added back if it's a "skinned" tab button. However, we have
  a use case where a tab-button is wrapping a faux button. For that, we don't want margins/padding because
  the faux button provides that. */
  margin-inline-start: 0;
  margin-inline-end: 0;
  padding-block-start: 0;
  padding-block-end: 0;
  padding-inline-start: 0;
  padding-inline-end: 0;
}

/* We pull back the 2nd subsequent tabs to remove the double border */
.tab-button:not(:first-of-type),
.tab-button-base:not(:first-of-type) {
  margin-inline-start: -1px;
}

.tab-button,
.tab-button-skin {
  display: block;
  /* Since this is a "skinned tab button" we add our padding here to previously "reset" .tab-button-base */
  padding-block-start: var(--agnostic-vertical-pad, 0.5rem);
  padding-block-end: var(--agnostic-vertical-pad, 0.5rem);
  padding-inline-start: var(--agnostic-side-padding, 0.75rem);
  padding-inline-end: var(--agnostic-side-padding, 0.75rem);
  font-family: var(--agnostic-btn-font-family, var(--agnostic-font-family));
  font-weight: var(--agnostic-btn-font-weight, 400);
  font-size: var(--agnostic-btn-font-size, 1rem);
  /* this can be overriden, but it might mess with the balance of the button heights across variants */
  line-height: var(--agnostic-line-height, 1.25rem);
  color: var(--agnostic-tabs-primary, var(--agnostic-primary));
  text-decoration: none;
  transition: color var(--agnostic-timing-fast) ease-in-out,
    background-color var(--agnostic-timing-fast) ease-in-out,
    border-color var(--agnostic-timing-fast) ease-in-out;
}

.tab-borderless {
  border: none !important;
}

.tab-button-large {
  padding-block-start: calc(var(--agnostic-input-side-padding) * 1.25);
  padding-block-end: calc(var(--agnostic-input-side-padding) * 1.25);
  padding-inline-start: calc(var(--agnostic-input-side-padding) * 1.75);
  padding-inline-end: calc(var(--agnostic-input-side-padding) * 1.75);
}

.tab-button-jumbo {
  padding-block-start: calc(var(--agnostic-input-side-padding) * 2);
  padding-block-end: calc(var(--agnostic-input-side-padding) * 2);
  padding-inline-start: calc(var(--agnostic-input-side-padding) * 3);
  padding-inline-end: calc(var(--agnostic-input-side-padding) * 3);
}
.tab-item.tab-button {
  margin-block-end: -1px;
  background: 0 0;
  border: 1px solid transparent;
  border-top-left-radius: var(--agnostic-tabs-radius, 0.25rem);
  border-top-right-radius: var(--agnostic-tabs-radius, 0.25rem);
}

.tab-item.tab-button.active {
  color: var(--agnostic-gray-dark);
  /* TODO -- update these colors to use css properties */
  background-color: #fff;
  border-color: #dee2e6 #dee2e6 #fff;
}

.tab-item:hover,
.tab-button:focus {
  border-color: #e9ecef #e9ecef #dee2e6;
  isolation: isolate;
  cursor: pointer;
}

.tab-button:disabled {
  color: var(--agnostic-tabas-disabled-bg, var(--agnostic-gray-mid-dark));
  background-color: transparent;
  border-color: transparent;
  opacity: 0.8;
}

.pane {
  padding: 1em;
}

</style>

<div class="{tablistClasses()}" role="tablist" aria-label="Tabs">
  {#each tabs as tab, i}
    {#if tab.tabButtonComponent}
      <svelte:component
        this="{tab.tabButtonComponent}"
        on:click="{() => selectTab(i)}"
        disabled="{isDisabled || disabledOptions.includes(tab.title) || undefined}"
        class="{tabButtonClasses(tab)}"
        isActive="{tab.isActive}"
      >
        {tab.title}
      </svelte:component>
    {:else}
      <button
        on:click="{() => selectTab(i)}"
        disabled="{isDisabled || disabledOptions.includes(tab.title) || undefined}"
        class="{tabButtonClasses(tab)}"
        role="tab"
        aria-selected="{tab.isActive}"
      >
        {tab.title}
      </button>
    {/if}
  {/each}
</div>
{#each tabs as tab}
  {#if tab.isActive}
    <div class="pane">
      <svelte:component this="{tab.tabPanelComponent}" />
    </div>
  {/if}
{/each}
