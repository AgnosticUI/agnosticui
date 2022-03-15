<script setup>
// Import the required AgnosticUI global common and component CSS
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import { Button, ChoiceInput } from "agnostic-vue";
import { ref } from "vue";

let agreedToTos = ref(false);
const toggleTosAgreedTo = () => {
  agreedToTos.value = !agreedToTos.value;
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
    <div class="mbs24 mbe24">
      <p class="mbe16">Pass <code>false</code> to <code>:is-fieldset</code> (Vue) or
        <code>isFieldset</code> (React, Svelte) to hide the fieldset from sighted
        users. Also, we can use a reactive boolean ref to toggle button's <code>isDisabled</code>:
      </p>
      <ChoiceInput
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
