<template>
  <div :class="tabsClasses">
    <div
      :class="tablistClasses"
      role="tablist"
    >
      <button
        v-for='(tab, index) of this.tabButtonNames'
        :key="index"
        @click.prevent="selectTab(tab)"
        @keydown="onKeyDown($event, index)"
        role="tab"
        :ref="tab"
        :disabled="isTabDisabled(tab)"
        :tabindex="tab === activeTab ? '0' : '-1'"
        :aria-selected="tab === activeTab"
        v-bind:class="tabButtonClasses(tab)"
      >
        <slot :name="tabButtonSlotName(tab)">
          {{ tab }}
        </slot>
      </button>
    </div>
    <slot :name="tabPanelSlotName()"></slot>
  </div>
</template>
<script>
export default {
  name: "ag-tabs",

  props: {
    /**
     * The use case for tabType button is to allow the consumer to inject their own
     * AgnosticUI <Button type="faux" mode="primary"... or just <button> if they prefer,
     * but signifies that we should use a div to wrap the slot (not a button which would
     * mean nested buttons!). Note,
     */
    tabType: {
      type: String,
      require: false,
      default: "tabbed",
      validator: (value) => ["tabbed", "button"].includes(value),
    },
    tabButtonNames: {
      type: Array,
      require: true,
    },
    tabPanelNames: {
      type: Array,
      require: true,
    },
    initialTab: {
      type: String,
      require: true,
    },
    // isDisabled is used to disable "all" options in the choice input
    isDisabled: {
      type: Boolean,
      default: false,
    },
    // Array for providing individual option(s) that should be disabled
    disabledOptions: {
      type: Array,
      required: false,
    },
    isVerticalOrientation: {
      type: Boolean,
      required: false,
      default: false,
    },
    isSkinned: {
      type: Boolean,
      require: false,
      default: true,
    },
    isBorderless: {
      type: Boolean,
      require: false,
      default: false,
    },
    size: {
      type: String,
      require: false,
      default: "",
    },
  },
  data() {
    return {
      activeTab: this.tabButtonNames[0],
    };
  },
  created() {
    if (this.tabButtonNames.length !== this.tabPanelNames.length) {
      throw new Error(
        "tabButtonNames and tabPanelNames must be same length and correspond to the slots passed in for both."
      );
    }
  },
  computed: {
    tabsClasses() {
      return {
        [this.$style["tabs"]]: true,
        [this.$style["tabs-vertical"]]: !!this.isVerticalOrientation,
      };
    },
    tablistClasses() {
      return {
        [this.$style["tab-list-base"]]: !this.isSkinned,
        [this.$style["tab-list"]]: !!this.isSkinned,
        [this.$style[`tab-borderless`]]: this.isBorderless,
      };
    },
    currentTabComponent() {
      // If these are button tabs, we'll use a div to wrap the buttons
      // that are passed in by the consumer. Otherwise, we will create
      // our own internal "buttons tabs".
      return this.tabType === "tabbed" ? "button" : "div";
    },
  },
  methods: {
    focusTab(index, direction) {
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
        i = this.tabButtonNames.length - 1;
      } else if (i >= this.tabButtonNames.length) {
        // We've went beyond "last" so circle around to first
        i = 0;
      }
      // this.$refs.input
      const nextTabRef = this.$refs[this.tabButtonNames[i]];
      const nextTab = nextTabRef ? nextTabRef[0] : null;
      console.log("nextTab", nextTab);
      if (nextTab) {
        // Edge case: We hit a tab button that's been disabled. If so, we recurse, but
        // only if we've been supplied a `direction`. Otherwise, nothing left to do.
        if (nextTab.disabled && direction) {
          // Retry with new `i` index going in same direction
          this.focusTab(i, direction);
        } else {
          // Nominal case is to just focs next tab :)
          nextTab.focus();
        }
      }
    },
    onKeyDown(ev, index) {
      console.log("handleKeyDown ev: ", ev);
      switch (ev.key) {
        case "Up": // These first cases are IEEdge :(
        case "ArrowUp":
          if (this.isVerticalOrientation) {
            this.focusTab(index, "desc");
          }
          break;
        case "Down":
        case "ArrowDown":
          if (this.isVerticalOrientation) {
            this.focusTab(index, "asc");
          }
          break;
        case "Left":
        case "ArrowLeft":
          if (!this.isVerticalOrientation) {
            this.focusTab(index, "desc");
          }
          break;
        case "Right":
        case "ArrowRight":
          if (!this.isVerticalOrientation) {
            this.focusTab(index, "asc");
          }
          break;
        case "Home":
        case "ArrowHome":
          this.focusTab(0);
          break;
        case "End":
        case "ArrowEnd":
          this.focusTab(this.tabButtonNames.length - 1);
          break;
        case "Enter":
        case "Space":
          this.focusTab(index);
          this.selectTab(this.tabButtonNames[index]);
          break;
        default:
          return;
      }
      ev.preventDefault();
    },
    isTabDisabled(tabTitle) {
      // First we check isDisabled which signifies we should disable "all"
      // options for the choice input
      if (this.isDisabled) {
        return true;
      }

      // Next we check for this.disabledOptions which is an array used for
      // providing individual option(s) we should disable by their option value
      if (this.disabledOptions && this.disabledOptions.includes(tabTitle)) {
        return true;
      }
    },
    tabPanelSlotName() {
      const indx = this.tabButtonNames.indexOf(this.activeTab);
      if (indx > -1) {
        return this.tabPanelNames[indx];
      }
    },
    tabButtonSlotName(tabName) {
      return tabName;
    },
    tabButtonClasses(tabName) {
      // If these are button tabs, the buttons passed in should have
      // their own styles less the .active style. Otherwise, we create
      // our own internal tabbed buttons and those need own tab styles.
      return this.tabType === "tabbed"
        ? {
            [this.$style[`tab-item`]]: true,
            [this.$style[`tab-button`]]: true,
            [this.$style["active"]]: tabName === this.activeTab,
            [this.$style["tab-button-large"]]: this.size === "large",
            [this.$style["tab-button-xlarge"]]: this.size === "xlarge",
          }
        : {
            // .tab-button-base zaps button styles but doesn't skin otherwise. Since, in this
            // case of tabType is button the consumer has passed in their own <Button type="faux"...
            // into the slot; so those provide the tab button's "skin".
            [this.$style[`tab-button-base`]]: true,
            [this.$style["active"]]: tabName === this.activeTab,
          };
    },
    selectTab(tabName) {
      this.activeTab = tabName;
    },
  },
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
  flex-wrap: wrap;
  flex-direction: row;
  flex: 0 0 auto;
}
/* In vertical orientation we want our tab buttons to stack */
.tabs-vertical .tab-list,
.tabs-vertical .tab-base {
  flex-direction: column;
  border: none;
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
  line-height: var(--agnostic-line-height, var(--fluid-20, 1.25rem));
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
  border-color: var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-width)
    var(--agnostic-gray-light);
  isolation: isolate;
  cursor: pointer;
}

.tabs-vertical .tab-button {
  border: none;
}

.tab-button:disabled {
  color: var(--agnostic-tabas-disabled-bg, var(--agnostic-gray-mid-dark));
  background-color: transparent;
  border-color: transparent;
  opacity: 0.8;
}

/**
 * Elects to additively use the AgnosticUI custom focus ring alongside the border
 * we already add above. It just makes things look more consistent across components.
 * For example, when we tab into the panels and links within.
 */
.tab-panel:focus,
.tab-button:focus {
  box-shadow: 0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);
  /* Needed for High Contrast mode */
  outline: var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style)
    var(--agnostic-focus-ring-outline-color);
  transition: box-shadow var(--agnostic-timing-fast) ease-out;
}

@media screen and (prefers-reduced-motion: reduce), (update: slow) {
  .tab-button:focus,
  .tab-panel:focus,
  .tab-list,
  .tab-skinned,
  .tab-button {
    transition-duration: 0.001ms !important;
  }
}

</style>
