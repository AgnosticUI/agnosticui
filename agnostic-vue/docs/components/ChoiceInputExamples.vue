<script setup>
import { ref } from "vue";
import Button from "../../src/components/Button.vue";
import ChoiceInput from "../../src/components/ChoiceInput.vue";

let agreedToTos = ref(false);
const toggleTosAgreedTo = () => {
  agreedToTos.value = !agreedToTos.value;
};
</script>
<template>
  <section>
    <ChoiceInput
      id="vueChoiceInput1"
      type="radio"
      legend-label="Radio"
      :options="[
        { name: 'solo', value: 'stevie', label: 'Stevie Wonder'},
        { name: 'solo', value: 'whitney', label: 'Whitney Houston' },
        { name: 'solo', value: 'charlie', label: 'Charlie Wilson' }
      ]"
    />
    <ChoiceInput
      id="vueChoiceInput2"
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
      id="vueChoiceInput3"
      type="checkbox"
      legend-label="Checkbox with specific options disabled"
      :disabledOptions="['stones', 'isleybros']"
      :options="[{ name: 'bands', value: 'bonjovi', label: 'Bon Jovi'}, { name: 'bands', value: 'stones', label: 'Rolling Stones' }, { name: 'bands', value: 'isleybros', label: 'Isley Brothers' }, { name: 'bands', value: 'parliament', label: 'Parliament-Funkadelic' }]"
    />
    <div class="mbs24 mbe24">
      <p class="mbe16">Pass <code>false</code> to <code>:is-fieldset</code> (Vue) to hide the fieldset
        from sighted users. Also, we can use a reactive boolean ref to toggle button's <code>isDisabled</code>:
      </p>
      <ChoiceInput
        id="vueChoiceInput4"
        type="checkbox"
        :options="[
          { name: 'tos', value: 'agrees', label: 'I have read and agree to the Terms of Service'},
        ]"
        legend-label="Large"
        size="large"
        :is-fieldset="false"
        @change="toggleTosAgreedTo"
      />
    </div>
    <Button
      mode="primary"
      :is-disabled="!agreedToTos"
    >Submit</Button>
  </section>
</template>
