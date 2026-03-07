import { createApp, defineComponent, h } from 'vue';
import VueDialog from '../src/components/ag/Dialog/vue/VueDialog.vue';
import VueDrawer from '../src/components/ag/Drawer/vue/VueDrawer.vue';
import VuePopover from '../src/components/ag/Popover/vue/VuePopover.vue';
import VueTooltip from '../src/components/ag/Tooltip/vue/VueTooltip.vue';
import VueAccordion from '../src/components/ag/Accordion/vue/VueAccordion.vue';
import VueAccordionItem from '../src/components/ag/Accordion/vue/VueAccordionItem.vue';
import VueAccordionHeader from '../src/components/ag/Accordion/vue/VueAccordionHeader.vue';
import VueAccordionContent from '../src/components/ag/Accordion/vue/VueAccordionContent.vue';
import VueCollapsible from '../src/components/ag/Collapsible/vue/VueCollapsible.vue';

createApp(defineComponent({
  render: () => h('main', { style: 'padding:20px;display:flex;flex-direction:column;gap:24px' }, [
    h('h1', 'Overlays'),
    h(VueDialog, { heading: 'Demo Dialog', open: false }),
    h(VueDrawer, { heading: 'Demo Drawer', open: false }),
    h(VuePopover, {}, {
      trigger: () => h('button', 'Open Popover'),
      content: () => h('span', 'Popover content'),
    }),
    h(VueTooltip, { content: 'Tooltip text' }, () => h('button', 'Hover me')),
    h(VueAccordion, {}, () => [
      h(VueAccordionItem, {}, () => [
        h(VueAccordionHeader, {}, () => 'Section 1'),
        h(VueAccordionContent, {}, () => 'Content for section 1'),
      ]),
    ]),
    h(VueCollapsible, { open: false }, {
      summary: () => h('span', 'Collapsible'),
      default: () => h('div', 'Collapsed content'),
    }),
  ]),
})).mount('#app');
