<template>
  <div>
    <div
      :class="tablistClasses"
      role="tablist"
      aria-label="Tabs"
    >
      <button
        v-for='(tab, index) of tabs'
        :key="index"
        @click.prevent="selectTab(tab)"
        aria-label="Tabs"
        role="tab"
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
    tabs: {
      type: Array,
      require: true,
    },
    initialTab: {
      type: String,
      require: true,
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
      activeTab: this.tabs[0],
    };
  },
  computed: {
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
    tabPanelSlotName() {
      return `tab-panel-${this.activeTab}`;
    },
    tabButtonSlotName(tabName) {
      return `tab-button-${tabName}`;
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
            [this.$style["tab-button-jumbo"]]: this.size === "jumbo",
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
  border-bottom: var(--agnosticui-tabs-border-size, 1px) solid
    var(--agnosticui-tabs-bgcolor, var(--agnosticui-gray-light));
  transition-property: all;
  transition-duration: var(--agnosticui-timing-medium);
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
  padding-block-start: var(--agnosticui-vertical-pad, 0.5rem);
  padding-block-end: var(--agnosticui-vertical-pad, 0.5rem);
  padding-inline-start: var(--agnosticui-side-padding, 0.75rem);
  padding-inline-end: var(--agnosticui-side-padding, 0.75rem);
  font-family: var(--agnosticui-btn-font-family, var(--agnosticui-font-family));
  font-weight: var(--agnosticui-btn-font-weight, 400);
  font-size: var(--agnosticui-btn-font-size, 1rem);
  /* this can be overriden, but it might mess with the balance of the button heights across variants */
  line-height: var(--agnosticui-line-height, 1.25rem);
  color: var(--agnosticui-tabs-primary, var(--agnosticui-primary));
  text-decoration: none;
  transition: color var(--agnosticui-timing-fast) ease-in-out,
    background-color var(--agnosticui-timing-fast) ease-in-out,
    border-color var(--agnosticui-timing-fast) ease-in-out;
}

.tab-borderless {
  border: none !important;
}

.tab-button-large {
  padding-block-start: calc(var(--agnosticui-input-side-padding) * 1.25);
  padding-block-end: calc(var(--agnosticui-input-side-padding) * 1.25);
  padding-inline-start: calc(var(--agnosticui-input-side-padding) * 1.75);
  padding-inline-end: calc(var(--agnosticui-input-side-padding) * 1.75);
}

.tab-button-jumbo {
  padding-block-start: calc(var(--agnosticui-input-side-padding) * 2);
  padding-block-end: calc(var(--agnosticui-input-side-padding) * 2);
  padding-inline-start: calc(var(--agnosticui-input-side-padding) * 3);
  padding-inline-end: calc(var(--agnosticui-input-side-padding) * 3);
}
.tab-item.tab-button {
  margin-block-end: -1px;
  background: 0 0;
  border: 1px solid transparent;
  border-top-left-radius: var(--agnosticui-tabs-radius, 0.25rem);
  border-top-right-radius: var(--agnosticui-tabs-radius, 0.25rem);
}

.tab-item.tab-button.active {
  color: var(--agnosticui-gray-dark);
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
  color: var(--agnosticui-tabas-disabled-bg, var(--agnosticui-gray-mid-dark));
  background-color: transparent;
  border-color: transparent;
  opacity: 0.8;
}

.pane {
  padding: 1em;
}

</style>
