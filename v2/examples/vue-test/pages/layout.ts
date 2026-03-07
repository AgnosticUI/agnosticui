import { createApp, defineComponent, h } from 'vue';
import VueCard from '../src/components/ag/Card/vue/VueCard.vue';
import VueFlexRow from '../src/components/ag/Flex/vue/VueFlexRow.vue';
import VueHeader from '../src/components/ag/Header/vue/VueHeader.vue';
import VueSidebar from '../src/components/ag/Sidebar/vue/VueSidebar.vue';
import VueSidebarNav from '../src/components/ag/SidebarNav/vue/VueSidebarNav.vue';
import VueDivider from '../src/components/ag/Divider/vue/VueDivider.vue';
import VueAspectRatio from '../src/components/ag/AspectRatio/vue/VueAspectRatio.vue';
import VueFieldset from '../src/components/ag/Fieldset/vue/VueFieldset.vue';

createApp(defineComponent({
  render: () => h('main', { style: 'padding:20px;display:flex;flex-direction:column;gap:24px' }, [
    h('h1', 'Layout'),
    h(VueCard, {}, () => 'Card content'),
    h(VueFlexRow, {}, () => [h('span', 'Item 1'), h('span', 'Item 2')]),
    h(VueHeader, {}, () => 'Header content'),
    h(VueSidebar, { open: false }, () => 'Sidebar content'),
    h(VueSidebarNav, {}, () => 'Nav content'),
    h(VueDivider),
    h(VueAspectRatio, { width: 16, height: 9, maxWidth: 320 }, () =>
      h('img', { src: 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=', alt: 'placeholder' })
    ),
    h(VueFieldset, { legend: 'Demo Fieldset', bordered: true }, () => h('span', 'Field content')),
  ]),
})).mount('#app');
