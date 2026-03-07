import { createApp, defineComponent, h } from 'vue';
import VueInput from '../src/components/ag/Input/vue/VueInput.vue';
import VueCheckbox from '../src/components/ag/Checkbox/vue/VueCheckbox.vue';
import VueRadio from '../src/components/ag/Radio/vue/VueRadio.vue';
import VueSelect from '../src/components/ag/Select/vue/VueSelect.vue';
import VueToggle from '../src/components/ag/Toggle/vue/VueToggle.vue';
import VueSlider from '../src/components/ag/Slider/vue/VueSlider.vue';
import VueCombobox from '../src/components/ag/Combobox/vue/VueCombobox.vue';
import VueRating from '../src/components/ag/Rating/vue/VueRating.vue';

createApp(defineComponent({
  render: () => h('main', { style: 'padding:20px;display:flex;flex-direction:column;gap:20px' }, [
    h('h1', 'Forms'),
    h(VueInput, { label: 'Name', placeholder: 'Enter name' }),
    h(VueCheckbox, { labelText: 'Accept terms' }),
    h(VueRadio, { labelText: 'Option A', name: 'demo', value: 'a' }),
    h(VueSelect, { label: 'Choose' }, () => [
      h('option', { value: '1' }, 'One'),
      h('option', { value: '2' }, 'Two'),
    ]),
    h(VueToggle, { label: 'Enable' }),
    h(VueSlider, { label: 'Volume', min: 0, max: 100, value: 50 }),
    h(VueCombobox, {
      label: 'Pick one',
      options: [{ value: 'a', label: 'Alpha' }, { value: 'b', label: 'Beta' }],
    }),
    h(VueRating, { label: 'Rating', value: 3 }),
  ]),
})).mount('#app');
