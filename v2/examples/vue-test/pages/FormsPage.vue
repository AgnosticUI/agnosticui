<script setup lang="ts">
import VueInput from '../src/components/ag/Input/vue/VueInput.vue';
import VueCheckbox from '../src/components/ag/Checkbox/vue/VueCheckbox.vue';
import VueRadio from '../src/components/ag/Radio/vue/VueRadio.vue';
import VueSelect from '../src/components/ag/Select/vue/VueSelect.vue';
import VueToggle from '../src/components/ag/Toggle/vue/VueToggle.vue';
import VueSlider from '../src/components/ag/Slider/vue/VueSlider.vue';
import VueCombobox from '../src/components/ag/Combobox/vue/VueCombobox.vue';
import VueRating from '../src/components/ag/Rating/vue/VueRating.vue';

const comboOptions = [
  { value: 'a', label: 'Alpha' },
  { value: 'b', label: 'Beta' },
];
</script>

<template>
  <main style="padding: 20px; display: flex; flex-direction: column; gap: 20px">
    <h1>Forms</h1>
    <VueInput label="Name" placeholder="Enter name" />
    <VueCheckbox label-text="Accept terms" />
    <VueRadio label-text="Option A" name="demo" value="a" />
    <VueSelect label="Choose">
      <option value="1">One</option>
      <option value="2">Two</option>
    </VueSelect>
    <VueToggle label="Enable" />
    <VueSlider label="Volume" :min="0" :max="100" :value="50" />
    <VueCombobox label="Pick one" :options="comboOptions" />
    <VueRating label="Rating" :value="3" />
  </main>
</template>
