<template>
  <div :class="tabsClasses">
    <div
      role="tablist"
      :class="tablistClasses"
      :aria-orientation="isVertical ? 'vertical' : 'horizontal'"
    >
      <button
        v-for="(tab, index) of tabsList"
        :id="tab"
        :key="tab"
        :ref="setTabButtonRefs"
        role="tab"
        :aria-controls="`${tab.replace('tab', 'panel')}`"
        :disabled="isTabDisabled(tab)"
        :tabindex="tab === activeTab ? '0' : '-1'"
        :aria-selected="tab === activeTab"
        :class="tabButtonClasses(tab)"
        @click.prevent="selectTab(tab)"
        @keydown="onKeyDown($event, index)"
      >
        <slot :name="tab" />
      </button>
    </div>
    <div
      v-for="panel in panelsList"
      :id="panel"
      :key="panel"
      :aria-labelledby="`${panel.replace('panel', 'tab')}`"
      :hidden="activeTab !== panel.replace('panel', 'tab')"
      :class="$style['tab-panel']"
      tabindex="0"
      role="tabpanel"
    >
      <slot :name="activeTab.replace('tab', 'panel')" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, ref, useCssModule, useSlots } from "vue";
export interface TabsProps {
  activatedTab?: number;
  /**
   * The use case for tabType button is to allow the consumer to inject their own
   * AgnosticUI <Button type="faux" mode="primary"... or just <button> if they prefer,
   * but signifies that we should use a div to wrap the slot (not a button which would
   * mean nested buttons!). Note,
   */
  tabType?: "tab" | "custom";
  isVertical?: boolean;
  isSkinned?: boolean;
  // isDisabled is used to disable "all" options in the choice input
  isDisabled?: boolean;
  isBorderless?: boolean;
  // Array for providing individual option(s) that should be disabled
  disabledOptions?: string[];
  size?: "large" | "xlarge" | "";
}
const props = withDefaults(defineProps<TabsProps>(), {
  activatedTab: 0,
  tabType: "tab",
  isSkinned: true,
  disabledOptions: () => [],
  size: "",
});

const emit = defineEmits(["selected"]);

const slots = useSlots();

const styles = useCssModule();

/**
 * Precondition is consumer must pass in corresponding tab-foo and
 * panel-foo and of course have the same number of tabs to panels.
 */
const tabsList = Object.keys(slots).filter((name) => name.startsWith("tab-"));
const panelsList = Object.keys(slots).filter((name) =>
  name.startsWith("panel-")
);

// These refs are used to manage keyboard navigation focus in focusTab
// later. See: https://v3.vuejs.org/guide/migration/array-refs.html
// let tabButtonRefs = ref([]);
let tabButtonRefs: any = ref([]);
const setTabButtonRefs = (el) => {
  if (el) {
    tabButtonRefs.value.push(el);
  }
};

// The active tab determines which panel is shown amongst other things.
// As such, it must be reactive hence the ref.
let activeTab = ref(tabsList[0]);
const selectTab = (tabName: string) => {
  activeTab.value = tabName;
  emit("selected", tabName);
};

const tabsClasses = computed(() => {
  return {
    [styles["tabs"]]: true,
    [styles["tabs-vertical"]]: !!props.isVertical,
  };
});

const tablistClasses = computed(() => {
  return {
    [styles["tab-list-base"]]: !props.isSkinned,
    [styles["tab-list"]]: !!props.isSkinned,
    [styles[`tab-borderless`]]: props.isBorderless,
  };
});

const focusTab = (index: number, direction?: "asc" | "desc") => {
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
    i = tabsList.length - 1;
  } else if (i >= tabsList.length) {
    // We've went beyond "last" so circle around to first
    i = 0;
  }

  const nextTab = tabButtonRefs.value[i];

  if (nextTab) {
    // Edge case: We hit a tab button that's been disabled. If so, we recurse, but
    // only if we've been supplied a `direction`. Otherwise, nothing left to do.
    if (nextTab.disabled && direction) {
      // Retry with new `i` index going in same direction
      focusTab(i, direction);
    } else {
      // Nominal case is to just focs next tab :)
      nextTab.focus();
    }
  }
};

const onKeyDown = (ev: KeyboardEvent, index: number) => {
  switch (ev.key) {
    case "Up": // These first cases are IEEdge :(
    case "ArrowUp":
      if (props.isVertical) {
        focusTab(index, "desc");
      }
      break;
    case "Down":
    case "ArrowDown":
      if (props.isVertical) {
        focusTab(index, "asc");
      }
      break;
    case "Left":
    case "ArrowLeft":
      if (!props.isVertical) {
        focusTab(index, "desc");
      }
      break;
    case "Right":
    case "ArrowRight":
      if (!props.isVertical) {
        focusTab(index, "asc");
      }
      break;
    case "Home":
    case "ArrowHome":
      focusTab(0);
      break;
    case "End":
    case "ArrowEnd":
      focusTab(tabsList.length - 1);
      break;
    case "Enter":
    case "Space":
      focusTab(index);
      selectTab(tabsList[index]);
      break;
    default:
      return;
  }
  ev.preventDefault();
};

const isTabDisabled = (tabTitle: string) => {
  // First we check isDisabled which signifies we should disable "all"
  // options for the choice input
  if (props.isDisabled) {
    return true;
  }

  // Next we check for props.disabledOptions which is an array used for
  // providing individual option(s) we should disable by their option value
  if (props.disabledOptions && props.disabledOptions.includes(tabTitle)) {
    return true;
  }
};

const tabButtonClasses = (tabName: string) => {
  // If these are button tabs, the buttons passed in should have
  // their own styles less the .active style. Otherwise, we create
  // our own internal tabbed buttons and those need own tab styles.
  return props.tabType === "tab"
    ? {
        [styles[`tab-item`]]: true,
        [styles[`tab-button`]]: true,
        [styles["active"]]: tabName === activeTab.value,
        [styles["tab-button-large"]]: props.size === "large",
        [styles["tab-button-xlarge"]]: props.size === "xlarge",
      }
    : {
        // .tab-button-base zaps button styles but doesn't skin otherwise. Since, in this
        // case of tabType is button the consumer has passed in their own <Button type="faux"...
        // into the slot; so those provide the tab button's "skin".
        [styles[`tab-button-base`]]: true,
        [styles["active"]]: tabName === activeTab.value,
      };
};
</script>
<style module>
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
  border-bottom:
    var(--agnostic-tabs-border-size, 1px) solid
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
  font-family: var(--agnostic-btn-font-family, var(--agnostic-font-family-body));
  font-weight: var(--agnostic-btn-font-weight, 400);
  font-size: var(--agnostic-btn-font-size, 1rem);

  /* this can be overriden, but it might mess with the balance of the button heights across variants */
  line-height: var(--agnostic-line-height, var(--fluid-20, 1.25rem));
  color: var(--agnostic-tabs-primary, var(--agnostic-primary));
  text-decoration: none;
  transition:
    color var(--agnostic-timing-fast) ease-in-out,
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
  color: var(--agnostic-dark);
  background-color: var(--agnostic-light);
  border-color: var(--agnostic-gray-light) var(--agnostic-gray-light) var(--agnostic-light);
}

.tab-item:hover,
.tab-button:focus {
  border-color:
    var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-width)
    var(--agnostic-gray-light);
  isolation: isolate;
  z-index: 1;
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
  box-shadow: 0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);

  /* Needed for High Contrast mode */
  outline:
    var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style)
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
