<template>
  <div>
    <div
      :class="tablistClasses"
      role="tablist"
      aria-label="Tabs"
    >
      <button
        v-for='(tab, index) of tabs'
        :key='tab.title'
        @click="selectTab(index)"
        :class="tabButtonClasses(tab)"
        role="tab"
        :aria-selected="tab.isActive"
      >{{tab.title}}</button>
    </div>
    <slot name="panels"></slot>
  </div>
</template>
<script>
export default {
  name: "ag-tabs",
  props: {
    size: {
      type: String,
      require: false,
      default: "",
    },
  },
  data() {
    return {
      selectedIndex: 0,
      tabs: [],
    };
  },
  created() {
    this.tabs = this.$children;
    let activeTabs = this.tabs.filter((tab) => tab.isActive);
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  },
  mounted() {
    this.selectTab(0);
  },
  computed: {
    tablistClasses() {
      return {
        [this.$style["tab-list"]]: true,
      };
    },
  },
  methods: {
    tabButtonClasses(tab) {
      return {
        [this.$style[`tab-item`]]: true,
        [this.$style[`tab-button`]]: true,
        [this.$style["active"]]: !!tab.isActive,
        [this.$style["tab-button-large"]]: this.size === "large",
        [this.$style["tab-button-jumbo"]]: this.size === "jumbo",
      };
    },
    selectTab(i) {
      this.selectedIndex = i;
      this.tabs.forEach((tab, index) => {
        tab.isActive = index === i ? true : false;
      });
    },
  },
};
</script>
<style module>
.tab-close {
  color: var(--agnosticui-gray-dark);
  text-align: right;
  cursor: pointer;
}

.tab-list {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  border-bottom: var(--agnosticui-tabs-border-size, 1px) solid
    var(--agnosticui-tabs-bgcolor, var(--agnosticui-gray-light));
  transition-property: all;
  transition-duration: var(--agnosticui-timing-medium);
}

.tab-button {
  /* Blank out the button */
  background-color: transparent;
  border: 0;
  border-radius: 0;
  box-shadow: none;

  /* Nav link */
  display: block;
  /* padding: 0.5rem 1rem; */
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
  margin-bottom: -1px;
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
