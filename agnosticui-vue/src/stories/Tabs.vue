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
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "ag-tabs",
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
}

.tab-button {
  /* Blank out the button */
  background-color: transparent;
  border: 0;
  border-radius: 0;
  box-shadow: none;

  /* Nav link */
  display: block;
  padding: 0.5rem 1rem;
  color: var(--agnosticui-tabs-primary, var(--agnosticui-primary));
  text-decoration: none;
  transition: color var(--agnosticui-timing-fast) ease-in-out,
    background-color var(--agnosticui-timing-fast) ease-in-out,
    border-color var(--agnosticui-timing-fast) ease-in-out;
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
