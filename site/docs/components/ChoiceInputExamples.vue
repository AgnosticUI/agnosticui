<script>
// Import the required AgnosticUI global common and component CSS
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import { ChoiceInput } from "agnostic-vue";

export default {
  name: "ChoiceInputExamples",
  components: {
    ChoiceInput,
  },
};
</script>
<template>
  <section>
    <ChoiceInput
      type="radio"
      legend-label="Radio"
      :options="[
        { name: 'solo', value: 'stevie', label: 'Stevie Wonder'},
        { name: 'solo', value: 'whitney', label: 'Whitney Houston' },
        { name: 'solo', value: 'charlie', label: 'Charlie Wilson' }
      ]"
    />
    <ChoiceInput
      type="checkbox"
      :options="[
        { name: 'bands', value: 'bonjovi', label: 'Bon Jovi'},
        { name: 'bands', value: 'stones', label: 'Rolling Stones' },
        { name: 'bands', value: 'isleybros', label: 'Isley Brothers' }
      ]"
      legend-label="Large"
      size="large"
      is-inline
    />
    <ChoiceInput
      type="checkbox"
      legend-label="Checkbox with specific options disabled"
      :disabledOptions="['stones', 'isleybros']"
      :options="[{ name: 'bands', value: 'bonjovi', label: 'Bon Jovi'}, { name: 'bands', value: 'stones', label: 'Rolling Stones' }, { name: 'bands', value: 'isleybros', label: 'Isley Brothers' }, { name: 'bands', value: 'parliament', label: 'Parliament-Funkadelic' }]"
    />
  </section>
</template>
