import { createApp, defineComponent, h } from 'vue';
import VueBreadcrumb from '../src/components/ag/Breadcrumb/vue/VueBreadcrumb.vue';
import VueTabs from '../src/components/ag/Tabs/vue/VueTabs.vue';
import VueTab from '../src/components/ag/Tabs/vue/VueTab.vue';
import VueTabPanel from '../src/components/ag/Tabs/vue/VueTabPanel.vue';
import VuePagination from '../src/components/ag/Pagination/vue/VuePagination.vue';
import VueMenu from '../src/components/ag/Menu/vue/VueMenu.vue';
import VueMenuItem from '../src/components/ag/Menu/vue/VueMenuItem.vue';

createApp(defineComponent({
  render: () => h('main', { style: 'padding:20px;display:flex;flex-direction:column;gap:24px' }, [
    h('h1', 'Navigation'),
    h(VueBreadcrumb, {
      items: [
        { label: 'Home', href: '/' },
        { label: 'Section', href: '/section' },
        { label: 'Page' },
      ],
    }),
    h(VueTabs, { ariaLabel: 'Demo tabs' }, () => [
      h(VueTab, { panel: 'tab1' }, () => 'Tab 1'),
      h(VueTab, { panel: 'tab2' }, () => 'Tab 2'),
      h(VueTabPanel, {}, () => 'Panel 1'),
      h(VueTabPanel, {}, () => 'Panel 2'),
    ]),
    h(VuePagination, { current: 1, totalPages: 10 }),
    h(VueMenu, {}, {
      default: () => h('span', 'Options'),
      menu: () => [
        h(VueMenuItem, { value: 'edit' }, () => 'Edit'),
        h(VueMenuItem, { value: 'delete' }, () => 'Delete'),
      ],
    }),
  ]),
})).mount('#app');
