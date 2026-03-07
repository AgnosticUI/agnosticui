import { createApp, defineComponent, h } from 'vue';
import VueAvatar from '../src/components/ag/Avatar/vue/VueAvatar.vue';
import VueImage from '../src/components/ag/Image/vue/VueImage.vue';
import VueIcon from '../src/components/ag/Icon/vue/VueIcon.vue';
import VueTag from '../src/components/ag/Tag/vue/VueTag.vue';
import VueMark from '../src/components/ag/Mark/vue/VueMark.vue';
import VueKbd from '../src/components/ag/Kbd/vue/VueKbd.vue';
import VueIntlFormatter from '../src/components/ag/IntlFormatter/vue/VueIntlFormatter.vue';
import VueTimeline from '../src/components/ag/Timeline/vue/Timeline.vue';
import VueTimelineItem from '../src/components/ag/Timeline/vue/TimelineItem.vue';
import VueMessageBubble from '../src/components/ag/MessageBubble/vue/VueMessageBubble.vue';
import VueEmptyState from '../src/components/ag/EmptyState/vue/VueEmptyState.vue';
import VueVisuallyHidden from '../src/components/ag/VisuallyHidden/vue/VueVisuallyHidden.vue';
import VueScrollProgress from '../src/components/ag/ScrollProgress/vue/VueScrollProgress.vue';
import VueScrollToButton from '../src/components/ag/ScrollToButton/vue/VueScrollToButton.vue';

createApp(defineComponent({
  render: () => h('main', { style: 'padding:20px;display:flex;flex-direction:column;gap:20px' }, [
    h('h1', 'Display'),
    h(VueAvatar, { text: 'AB' }),
    h(VueImage, {
      src: 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
      alt: 'placeholder',
      width: 200,
      height: 100,
    }),
    h(VueIcon, { size: 'md' }, () =>
      h('svg', { viewBox: '0 0 24 24', fill: 'currentColor', width: '24', height: '24' }, [
        h('circle', { cx: '12', cy: '12', r: '10' }),
      ])
    ),
    h(VueTag, { variant: 'success' }, () => 'Tag'),
    h(VueMark, {}, () => 'Highlighted text'),
    h(VueKbd, { bordered: true }, () => 'Ctrl'),
    h(VueIntlFormatter, { type: 'number', value: 1234567 }),
    h(VueTimeline, { ariaLabel: 'Demo timeline' }, () => [
      h(VueTimelineItem, {}, {
        'ag-start': () => h('span', 'Start'),
        'ag-marker': () => h('span', '•'),
        'ag-end': () => h('span', 'End'),
      }),
    ]),
    h(VueMessageBubble, { from: 'me', message: 'Hello!', time: '12:00', author: 'Alice' }),
    h(VueEmptyState),
    h(VueVisuallyHidden, {}, () => 'Screen reader only'),
    h(VueScrollProgress, { mode: 'bar' }),
    h(VueScrollToButton, { label: 'Top' }),
  ]),
})).mount('#app');
