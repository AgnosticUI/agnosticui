import { createApp, defineComponent, h } from 'vue';
import VueButton from '../src/components/ag/Button/vue/VueButton.vue';
import VueButtonFx from '../src/components/ag/ButtonFx/vue/VueButtonFx.vue';
import VueIconButton from '../src/components/ag/IconButton/vue/VueIconButton.vue';
import VueIconButtonFx from '../src/components/ag/IconButtonFx/vue/VueIconButtonFx.vue';
import VueCopyButton from '../src/components/ag/CopyButton/vue/VueCopyButton.vue';
import VueLink from '../src/components/ag/Link/vue/VueLink.vue';

createApp(defineComponent({
  render: () => h('main', { style: 'padding:20px;display:flex;flex-direction:column;gap:12px' }, [
    h('h1', 'Actions'),
    h(VueButton, { variant: 'primary' }, () => 'Primary Button'),
    h(VueButtonFx, { variant: 'secondary' }, () => 'ButtonFx'),
    h(VueIconButton, { label: 'Star', icon: '★', variant: 'primary' }),
    h(VueIconButtonFx, { label: 'Heart', icon: '♥', variant: 'secondary' }),
    h(VueCopyButton, { text: 'copy me', label: 'Copy' }),
    h(VueLink, { href: '#' }, () => 'Link'),
  ]),
})).mount('#app');
