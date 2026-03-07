import { createApp, defineComponent, h } from 'vue';
import VueAlert from '../src/components/ag/Alert/vue/VueAlert.vue';
import VueToast from '../src/components/ag/Toast/vue/VueToast.vue';
import VueBadge from '../src/components/ag/Badge/vue/VueBadge.vue';
import VueBadgeFx from '../src/components/ag/BadgeFx/vue/VueBadgeFx.vue';
import VueProgress from '../src/components/ag/Progress/vue/VueProgress.vue';
import VueProgressRing from '../src/components/ag/ProgressRing/vue/VueProgressRing.vue';
import VueSpinner from '../src/components/ag/Spinner/vue/VueSpinner.vue';
import VueLoader from '../src/components/ag/Loader/vue/VueLoader.vue';
import VueSkeletonLoader from '../src/components/ag/SkeletonLoader/vue/VueSkeletonLoader.vue';

createApp(defineComponent({
  render: () => h('main', { style: 'padding:20px;display:flex;flex-direction:column;gap:20px' }, [
    h('h1', 'Feedback'),
    h(VueAlert, { variant: 'success' }, () => 'Success alert'),
    h(VueToast, { open: true, type: 'success' }, () => 'Toast message'),
    h(VueBadge, { value: 5 }),
    h(VueBadgeFx, { value: 3 }),
    h(VueProgress, { value: 60, label: 'Progress' }),
    h(VueProgressRing, { value: 75, label: '75%' }),
    h(VueSpinner, { ariaLabel: 'Loading' }),
    h(VueLoader, { ariaLabel: 'Loading content' }),
    h(VueSkeletonLoader, { variant: 'text', width: '200px', height: '16px' }),
  ]),
})).mount('#app');
