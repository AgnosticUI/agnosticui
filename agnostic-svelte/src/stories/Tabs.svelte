<script>
  // import { onMount } from "svelte";
  // 'small' | 'large' | 'xlarge' | ''
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
  export let isVerticalOrientation = false;
  export let isDisabled = false;
  export let disabledOptions = [];
  export let isSkinned = true;

  /**
   * Explanation: we have two ways that the tab buttons get created:
   * 1. The `tabs` input array has dynamic `tabButtonComponent` components.
   * 2. The `tabs` has no `tabButtonComponent` and so we generate the tab
   * button internally.
   *
   * As such, the `dynamicComponentRefs` below are refs for case 1. and
   * `tabButtonRefs` are refs for case 2.
   */
  let dynamicComponentRefs = []; //https://svelte.dev/tutorial/component-this
  let tabButtonRefs = [];

  // handle element removal by filtering null
  $: dynamicComponentRefs = [];
  // dynamicComponentRefs.filter(el => el);
  // $: console.log(dynamicComponentRefs);
  $: tabButtonRefs = [];
  // tabButtonRefs.filter(el => el);
  // $: console.log(tabButtonRefs);

  // onMount(() => {
  //   console.log(tabButtonRefs);
  // });
  const baseStyles = () =>
    `tabs ${isVerticalOrientation ? "tabs-vertical" : ""}`;

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
      size === "xlarge" ? "tab-button-xlarge" : "",
    ];
    return klasses.filter((klass) => klass.length).join(" ");
  };

  const focusTab = (index, direction) => {
    // console.log("tabButtonRefs: ", tabButtonRefs);
    // console.log("dynamicComponentRefs: ", dynamicComponentRefs);
    /**
     * direction is optional because we only need that when we're arrow navigating.
     * If they've hit ENTER|SPACE we're focusing the current item. If HOME focus(0).
     * If END focus(tabButtons.length - 1)...and so on.
     */
    let i = index;
    if (direction === "asc") {
      i += 1;
    } else if (direction === "desc") {
      i -= 1;
    }

    // Circular navigation
    //
    // If we've went beyond "start" circle around to last
    if (i < 0) {
      i = tabs.length - 1;
    } else if (i >= tabs.length) {
      // We've went beyond "last" so circle around to first
      i = 0;
    }

    /**
     * Figure out at run-time whether this was build with dynamicComponentRefs (consumer
     * used their own tabButtonComponent), or tabButtonRefs (we generated the buttons here)
     */

    let nextTab;
    if (tabButtonRefs.length) {
      nextTab = tabButtonRefs[i];
    } else if (dynamicComponentRefs.length) {
      // Same logic as above, but we're using the binding to component instance
      nextTab = dynamicComponentRefs[i];
    }
    // Edge case: We hit a tab button that's been disabled. If so, we recurse, but
    // only if we've been supplied a `direction`. Otherwise, nothing left to do.
    if (
      (nextTab.isDisabled && nextTab.isDisabled()) ||
      (nextTab.disabled && direction)
    ) {
      // Retry with new `i` index going in same direction
      focusTab(i, direction);
    } else {
      // Nominal case is to just focs next tab :)
      nextTab.focus();
    }
  };

  const handleKeyDown = (ev, index) => {
    switch (ev.key) {
      case "Up": // These first cases are IEEdge :(
      case "ArrowUp":
        if (isVerticalOrientation) {
          focusTab(index, "desc");
        }
        break;
      case "Down":
      case "ArrowDown":
        if (isVerticalOrientation) {
          focusTab(index, "asc");
        }
        break;
      case "Left":
      case "ArrowLeft":
        if (!isVerticalOrientation) {
          focusTab(index, "desc");
        }
        break;
      case "Right":
      case "ArrowRight":
        if (!isVerticalOrientation) {
          focusTab(index, "asc");
        }
        break;
      case "Home":
      case "ArrowHome":
        focusTab(0);
        break;
      case "End":
      case "ArrowEnd":
        focusTab(tabs.length - 1);
        break;
      case "Enter":
      case "Space":
        focusTab(index);
        selectTab(index);
        break;
      default:
        return;
    }
    ev.preventDefault();
  };
</script>

<style>
  /* TODO -- should we use these for .nav? */
  .tabs {
    display: flex;
    flex-direction: column;
  }

  .tabs-vertical {
    flex-direction: row;
  }

  .tab-list,
  .tab-list-base {
    display: flex;
    flex-flow: row wrap;
    flex: 0 0 auto;
  }

  .tab-list,
  .tab-skinned {
    padding-inline-start: 0;
    margin-block-end: 0;
    border-bottom: var(--agnostic-tabs-border-size, 1px) solid
      var(--agnostic-tabs-bgcolor, var(--agnostic-gray-light));
    transition-property: all;
    transition-duration: var(--agnostic-timing-medium);
  }

  /* In vertical orientation we want our tab buttons to stack */
  .tabs-vertical .tab-list,
  .tabs-vertical .tab-base {
    flex-direction: column;
    border: none;
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

    /* This fixes issue where upon focus, the a11y focus ring's box shadow would get tucked beneat
  adjacent tab buttons; relative creates new stacking context https://stackoverflow.com/a/31276836 */
    position: relative;

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

  .tab-button,
  .tab-button-skin {
    display: block;

    /* Since this is a "skinned tab button" we add our padding here to previously "reset" .tab-button-base */
    padding-block-start: var(--agnostic-vertical-pad, 0.5rem);
    padding-block-end: var(--agnostic-vertical-pad, 0.5rem);
    padding-inline-start: var(--agnostic-side-padding, 0.75rem);
    padding-inline-end: var(--agnostic-side-padding, 0.75rem);
    font-family: var(
      --agnostic-btn-font-family,
      var(--agnostic-font-family-body)
    );
    font-weight: var(--agnostic-btn-font-weight, 400);
    font-size: var(--agnostic-btn-font-size, 1rem);

    /* this can be overriden, but it might mess with the balance of the button heights across variants */
    line-height: var(--agnostic-line-height, var(--fluid-20, 1.25rem));
    color: var(--agnostic-tabs-primary, var(--agnostic-primary));
    text-decoration: none;
    transition: color var(--agnostic-timing-fast) ease-in-out,
      background-color var(--agnostic-timing-fast) ease-in-out,
      border-color var(--agnostic-timing-fast) ease-in-out;
  }

  /* We pull back the 2nd subsequent tabs to remove the double border */
  .tab-button:not(:first-of-type),
  .tab-button-base:not(:first-of-type) {
    margin-inline-start: -1px;
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

  .tab-button-xlarge {
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
    border-color: var(--agnostic-gray-light) var(--agnostic-gray-light) #fff;
  }

  .tab-item:hover,
  .tab-button:focus {
    border-color: var(--agnostic-focus-ring-outline-width)
      var(--agnostic-focus-ring-outline-width) var(--agnostic-gray-light);
    isolation: isolate;
    cursor: pointer;
  }

  .tabs-vertical .tab-button {
    border: none;
  }

  .tab-button:disabled {
    color: var(--agnostic-tabs-disabled-bg, var(--agnostic-gray-mid-dark));
    background-color: transparent;
    border-color: transparent;
    opacity: 80%;
  }

  /**
 * Elects to additively use the AgnosticUI custom focus ring alongside the border
 * we already add above. It just makes things look more consistent across components.
 * For example, when we tab into the panels and links within.
 */
  .tab-button-base:focus,
  .tab-panel:focus,
  .tab-button:focus {
    box-shadow: 0 0 0 var(--agnostic-focus-ring-outline-width)
      var(--agnostic-focus-ring-color);

    /* Needed for High Contrast mode */
    outline: var(--agnostic-focus-ring-outline-width)
      var(--agnostic-focus-ring-outline-style)
      var(--agnostic-focus-ring-outline-color);
    transition: box-shadow var(--agnostic-timing-fast) ease-out;
  }

  @media (prefers-reduced-motion), (update: slow) {
    .tab-button,
    .tab-button-base:focus,
    .tab-button:focus,
    .tab-panel:focus,
    .tab-list,
    .tab-skinned {
      transition-duration: 0.001ms !important;
    }
  }
</style>

<div class="{baseStyles()}">
  <div
    class="{tablistClasses()}"
    role="tablist"
    aria-orientation="{isVerticalOrientation ? 'vertical' : 'horizontal'}"
  >
    {#each tabs as tab, i}
      {#if tab.tabButtonComponent}
        <svelte:component
          this="{tab.tabButtonComponent}"
          bind:this="{dynamicComponentRefs[i]}"
          on:click="{() => selectTab(i)}"
          on:keydown="{(e) => handleKeyDown(e, i)}"
          disabled="{isDisabled || disabledOptions.includes(tab.title) || undefined}"
          class="{tabButtonClasses(tab)}"
          role="tab"
          ariaControls="{tab.ariaControls}"
          isActive="{tab.isActive}"
        >
          {tab.title}
        </svelte:component>
      {:else}
        <button
          bind:this="{tabButtonRefs[i]}"
          on:click="{() => selectTab(i)}"
          on:keydown="{(e) => handleKeyDown(e, i)}"
          disabled="{isDisabled || disabledOptions.includes(tab.title) || undefined}"
          class="{tabButtonClasses(tab)}"
          role="tab"
          aria-controls="{tab.ariaControls}"
          tabindex="{tab.isActive ? '0' : '-1'}"
          aria-selected="{tab.isActive}"
        >
          {tab.title}
        </button>
      {/if}
    {/each}
  </div>
  {#each tabs as panel}
    {#if panel.isActive}
      <svelte:component this="{panel.tabPanelComponent}" tabindex="0" />
    {/if}
  {/each}
</div>
<!-- <button on:click="{() => console.log(tabButtonRefs)}">
  print to console
</button> -->
